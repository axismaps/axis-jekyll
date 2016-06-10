---
layout: post
nav: Blog
status: publish
published: true
title: Updated Map Server Instructions
author:
  display_name: David Heyman
  login: dave
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

About 4 years ago we wrote a post about [setting up a map server with Mapnik and PostGIS]({{ site.baseurl }}/blog/2012/01/dont-panic-an-absolute-beginners-guide-to-building-a-map-server/). It's still one of the most popular posts on the site but it's VERY OLD. I wanted to update it with a slightly easier install method and some newer software. What's in the stack? I'm glad you asked!

![The pancakes again]({{ site.baseurl }}/media/posts/2016/06/pancakes.jpg)

Unlike the previous guide, this one won't cover basics of Linux and the command line. It's also written for a Red Hat Enterprise Linux 7.2 server instead of Ubuntu. Let's do it.

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


{% highlight shell %}
git clone https://github.com/mapnik/node-mapnik-sample-code.git
cd node-mapnik-sample-code/
npm install mapnik
node render/app.js stylesheet.xml test.png
{% endhighlight %}


## Next steps