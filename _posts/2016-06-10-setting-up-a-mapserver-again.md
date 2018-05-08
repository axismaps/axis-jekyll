---
layout: post
nav: Blog
status: publish
published: true
title: Updated Map Server Instructions
author: davidheyman
image: /media/posts/2016/06/pancakes.jpg
writer:
  display_name: David Heyman
  email: dave@axismaps.com
date: '2016-06-10 00:00:00 +0000'
date_gmt: '2016-06-10 00:00:00 +0000'
categories:
- Servers
tags:
- Mapnik
- NodeJS
- Linux
comments: []
project: rio
---

About 4 years ago we wrote a post about [setting up a map server with Mapnik and PostGIS](/blog/2012/01/dont-panic-an-absolute-beginners-guide-to-building-a-map-server/). It's still one of the most popular posts on the site but it's VERY OLD. I wanted to update it with a slightly easier install method and some newer software. What's in the stack? I'm glad you asked!

![The pancakes again](/media/posts/2016/06/pancakes.jpg)

Unlike the previous guide, this one won't cover basics of Linux and the command line. It's also written for a Red Hat Enterprise Linux (RHEL) 7.2 server instead of Ubuntu. Let's do it.

<!--break-->

## Provision the server

The first thing we need to do is provision a Red Hat Enterprise Linux server. [Amazon EC2](http://aws.amazon.com) is as good a place as any to do this, but feel free to use any server you'd like. A few things to keep in mind:

1. You need at least 2GB of memory. On EC2, that's a **medium** instance
2. Make sure you open up at least port 22 so you can access the server via SSH. If you'd like, you can also open up port 5432 for remote Postgres access and 8000 (or anything you'd like) to access services you create via the web.
3. If you are running this on EC2 and you create your PEM key to log into the server, don't forget to `chmod 400` to allow you to use it to login. Also, your username on EC2 is going to be `ec2-user`.

## Login to the server via SSH

Once you're all logged in, run a quick software update to make sure everything is up to date:

{% highlight shell %}
sudo yum update
{% endhighlight %}

Great. We're like 20% of the way there now. I told you this was going to be easy. Next step is to install Git and clone the install script:

{% highlight shell %}
sudo yum install git
git clone https://gist.github.com/5417b515b421a99360ca.git
{% endhighlight %}

Now change the permissions on the install script and execute it:

{% highlight shell %}
sudo chmod +x 5417b515b421a99360ca/install_mapnik_rhel.sh
./5417b515b421a99360ca/install_mapnik_rhel.sh
{% endhighlight %}

That's it! Sit back and relax and pretend you're Neo watching the matrix.

## The install script

This script is pretty much a copy of [Dane Springmeyer's script for installing on a AWS instance](https://gist.github.com/springmeyer/3427021). It sets up a few extra sources and installs all the necessary software. It also includes a few fixes specific to RHEL.

{% gist davidheyman/5417b515b421a99360ca %}

## Testing the installation

While the install script was running, I hope you walked away to get a coffee and a snack. If so, you missed any error messages that might have appeared. Just in case there were some problems, let's run a quick test.

> If you did stick around, you may have noticed that the vector tile tests for node-mapnik failed so this installation won't support vector tiles generation from Mapnik. If you'd like to investigate / fix the problem, please fork the Gist and I'll update the post to point to yours. If you'd like to see the results of that test again run `npm-test` from the node-mapnik directory.

For the tests, we'll use the [node-mapnik-sample-code](https://github.com/mapnik/node-mapnik-sample-code). There are lots of tests and sample code, so it's a good place to poke around once you're up and running. First, clone the code onto the server:

{% highlight shell %}
git clone https://github.com/mapnik/node-mapnik-sample-code.git
{% endhighlight %}

Now install node-mapnik in that directory:

{% highlight shell %}
cd node-mapnik-sample-code/
npm install mapnik
{% endhighlight %}

Now run the basic rendering code to use mapnik to generate a very simple map:

{% highlight shell %}
node render/app.js stylesheet.xml test.png
{% endhighlight %}

When you view the file (log onto your server using SFTP and download it), it should look something like this:

![It's a test!](/media/posts/2016/06/test.png)

Success! You are now the proud owner of a map server. Go get another snack. You've earned it.
