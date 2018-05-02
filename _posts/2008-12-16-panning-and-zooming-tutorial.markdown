---
layout: post
nav: Blog
status: publish
published: true
title: Panning and zooming tutorial
writer:
  display_name: Andy Woodruff
  login: andy
  email: andy@axismaps.com
  url: http://www.cartogrammar.com/blog
author_login: andy
author_email: andy@axismaps.com
author_url: http://www.cartogrammar.com/blog
wordpress_id: 201
wordpress_url: http://www.axismaps.com/blog/?p=201
date: '2008-12-16 19:13:59 +0000'
date_gmt: '2008-12-17 00:13:59 +0000'
categories:
- Code
tags:
- Code
- panning / zooming
comments: []
---
<p>Perhaps the most basic capability of any custom interactive map we make is the ability to pan and zoom the map.  That is, after all, the way to make something that might be the size of a wall poster in print fit on a computer screen and still be readable.</p>
<p>On my personal site I have posted a very basic <a href="http://www.cartogrammar.com/blog/simple-map-panning-and-zooming-with-actionscript/">tutorial and example of ActionScript code</a> for a simple version of the way I typically code panning and zooming.  If you're looking for a starting point for panning and zooming, check it out.</p>
<p>Based on my own experiences, if you're looking for basic ways to improve upon that minimal functionality, consider these:</p>
<ul>
<li>Tweening zoom changes</li>
<li>Replacing vector graphics with raster while moving the map (faster performance)</li>
<li>Dynamically drawing and placing symbols on the map</li>
<li>Drawing geographic data (shapefiles, kml, etc.) into a pan/zoom map</li>
</ul>
