---
layout: post
nav: Blog
status: publish
published: true
title: DIY Hillshade
author: awoodruff
writer:
  display_name: Andy Woodruff
  email: andy@axismaps.com
  twitter: awoodruff
image: /media/posts/2019/03/hillshade_steps.jpg
date: '2019-03-19 09:00:00 +0100'
date_gmt: '2019-03-19 09:00:00 +0100'
categories:
- Cartography
tags:
- Vector tiles
- Shaded relief
comments: []
project: []
---

Continuing recent themes of [working with elevation data](/blog/2018/12/go-with-the-flow/)—but stepping back to something more in the realm of ordinary cartography—over on Observable we've got a notebook going through some processes of "[DIY Hillshade](https://observablehq.com/d/0cb9cac9e45a0f9d)" with JavaScript on a web map. 

[![](/media/posts/2019/03/hillshade_final.jpg)](https://observablehq.com/d/0cb9cac9e45a0f9d)

The notebook shows one way in which it's possible to use [terrain tiles](https://www.mapzen.com/blog/terrain-tile-service/) to render customized shaded relief on the fly with ordinary JavaScript and canvas. It's not intended to be an efficient means of getting relief on your web map, but rather an explanation and demonstration of certain precise controls you can have over a hillshaded map's aesthetics when algorithms and code are exposed. It assembles a map using a basic hillshade, hypsometric tints, a water layer, and an approximation of cast shadows.

[![](/media/posts/2019/03/hillshade_steps.jpg)](https://observablehq.com/d/0cb9cac9e45a0f9d)

Head over to the [DIY Hillshade](https://observablehq.com/d/0cb9cac9e45a0f9d) notebook to play around with the various controls—and the code if you dare—to see how you can push pixels to render your very own shaded relief!