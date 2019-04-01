---
layout: post
nav: Blog
status: publish
published: true
title: Processing Big Data with Docker in the Cloud
author: davidheyman
writer:
  display_name: David Heyman
  email: dave@axismaps.com
  twitter: davidheyman
date: '2019-03-26 09:00:00 +0100'
date_gmt: '2019-03-26 09:00:00 +0100'
categories:
- Data Science
tags:
- Docker
- Cloud computing
comments: []
project: []
---

Recently, we've been partnering with [Hammerhead](https://www.hammerhead.io) to design offline maps for their on-bike cycling computer. It's been really interesting to work on a design project where size concerns (all the data must be downloaded to the device and MBs count) and hardware concerns (the styles must read in direct sunlight) are equally as important as aesthetics.

As part of this project, we needed to optimize and process global OSM data, converting it to the format used on the device and stripping out all the additional layers not used by the map style. The process uses GDAL, Osmosis, and PBF extracts downloaded from [Geofabrik](http://download.geofabrik.de). We had already bundled it into a bash script that takes the name of an OSM area and:
1. Downloads all the required data files
2. Creates land and sea polygons and crops to the desired area
3. Converts the OSM data
4. Uploads the converted data to S3 along with a small text file defining the extents

After running a few multi-hour tests on single US states, it became clear it was going to take a week to complete the entire world running from my local machine... and we had to deliver in a couple of days. We weren't thinking big enough! Obviously 1 computer wasn't going to cut it, we needed 50, all more powerful than my stupid laptop. We had been working with Docker and DigitalOcean before, but mostly as a convenience way to not have to constantly rebuild server dependency. This seemed like a good opportunity to test their scalability and see how they could help us with dealing with a monster dataset.

## Docker
Docker is a system that lets you create containers / sandboxes where you can define the [dependencies required to run your application](https://docker-curriculum.com/). It standardizes the sometimes messy process of server provisioning and dependency installation that is often a barrier-to-entry to running software. How the container is setup is defined in the Dockerfile. Docker takes these instructions and builds the container that can run the software.

Dockerfiles usually begin with an import statement that gives Docker an image to use as a starting point. This can be a different image you’ve made, but it’s often just an OS. For this one, we’re using Ubuntu Xenial.

```docker
FROM ubuntu:xenial
```

Next, we’re going to install all the software dependencies we need to run our processing script.

```docker
RUN apt-get update \
  && apt-get install -y wget git zip software-properties-common default-jdk awscli

RUN add-apt-repository -y ppa:ubuntugis/ppa \
  && apt update \
  && apt install -y gdal-bin python-gdal
```

Try to condense the number of commands in your Dockerfiles by chaining commands together with `&&` but don’t forget to escape line breaks with `\`.

After that, we can include the [Osmosis installation instructions](https://wiki.openstreetmap.org/wiki/Osmosis/Installation) line-for-line from the website:

```docker
RUN wget https://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.tgz \
  && mkdir osmosis \
  && mv osmosis-latest.tgz osmosis \
  && cd osmosis \
  && tar xvfz osmosis-latest.tgz \
  && rm osmosis-latest.tgz \
  && chmod a+x bin/osmosis
```

*Don’t forget:* Each `RUN` command starts from the root of the virtual drive.

If you want to add some of your own files, you can either run a command to clone a repository:

```docker
RUN git clone https://github.com/axismaps/mapsforge-creator.git
```

Or you can add a file from your local directory (specifying both the source and destination):

```docker
ADD tag-mapping.xml tag-mapping.xml
```

If you need to pass data to the Docker image, you can use the `ENV` tag. These will become particularly useful because we can override them when running the image, allowing us to keep sensitive data private:

```docker
ENV OSMOSIS_HOME="/osmosis"
ENV MAP_TAG_CONF_FILE="/tag-mapping.xml"
ENV THREADS=8
ENV SKIP_POI_CREATION="true"
ENV SKIP_MAP_CREATION="false"
ENV S3_BUCKET="hammerhead-mapsforge"

ENV AWS_ACCESS_KEY_ID="XXX"
ENV AWS_SECRET_ACCESS_KEY="XXX"
```

The last thing to set in the Dockerfile is the `ENTRYPOINT`. For this use-case, I think it’s helpful to think of a Docker container as a [Mr. Meeseeks](https://rickandmorty.fandom.com/wiki/Mr._Meeseeks) from Rick & Morty. They are designed and created to serve a singular purpose. As soon as it’s complete, they disappear. The `ENTRYPOINT` defines the image’s raison d'être. In our case, it’s a bash script:

```docker
ENTRYPOINT ["mapsforge-creator/map-creator"]
```

With the Dockerfile complete, we just need to build the image and then push it to Docker Cloud so it can be easily accessed later:

```sh
docker build . -t axismaps/mapsforge
docker push axismaps/mapsforge
```

## Running the Images
With the Docker image built and uploaded, we’ve created a stable environment that we know will run our code anywhere. The next step is to write a simple script that will provision virtual machines (VMs) and tell them to run our Docker image with some specific commands. We’re using [DigitalOcean](https://www.digitalocean.com/) as our cloud host, but you should be  able to do this with any provider.

All of this works because when we create a new VM on DigitalOcean, we can send it some bash commands to execute immediately after it starts up. These commands are:

```bash
#!/bin/bash
docker pull axismaps/hammerhead-mapsforge
docker run -e AWS_ACCESS_KEY_ID=<key> -e AWS_SECRET_ACCESS_KEY=<key> axismaps/hammerhead-mapsforge ${area_name} hd en
shutdown -P
```

The first command tells docker to grab the image we uploaded to Docker Cloud. The second command gives it the runtime instructions. The `-e` arguments allow us to override the `ENV` variables we specified and send our AWS credentials we didn’t want included in the Dockerfile or image. We’ve already defined the `ENTRYPOINT` so every unnamed argument after `axismaps/hammerhead-mapsforge` gets sent directly to our `ENTRYPOINT` script, including the name of the OSM area we want to render. The final command shuts the VM down when it finishes.

In our Python script we use to manage this process, all the bash commands are saved as a String named `data` that we pass to the DigitalOcean API in Python like:

```python
d = digitalocean.Droplet(
	token=os.environ.get('TOKEN'),
	image='docker-18-04',
	region='nyc2',
	name=area_name,
	size_slug='s-8vcpu-32gb',
	user_data=data,
	tags=['mapsforge']
)
d.create()
```

The other parameters in that function define the VM image to use (Docker on Ubuntu 18.04), the VM size, and a few other bits to help us identify the VM when it is running.

If you’re just running a handful of operations, you now have everything you need to start up 1 VM for each area you want to render. However, if you have more areas to render than your limit of VMs, you’ll need to manage them a little bit. The below code:

1. Gets a list of all your current VMs with a specified tag
2. Checks if the VM status is `off` because it has finished rendering
3. If the status is `off`, it destroys the VM, stopping you from being billed and freeing up a slot for the next VM
4. If the status is not `off`, it adds the VM name to a list so you can know not to create a VM for that task again.

```python
manager = digitalocean.Manager(token=os.environ.get('TOKEN'))
drops = manager.get_all_droplets(tag_name='mapsforge')
active = []
for droplet in drops:
  if droplet.status == 'off':
    droplet.destroy()
  else:
    active.append(droplet.name)
```

## Wrapping Up
Going forward, this work represents a strategy instead of a plug-and-play code library that we can reuse. Our big push in the last few years with our data work has been towards scriptability and repeatability, using code to handle every step of data processing from source to inside the application. What we learned on this project extends that scriptability to include not only the computer systems we run these projects on, but the level of scalability required to quickly process monster data jobs.