---
layout: post
nav: Blog
status: publish
published: true
title: Shaded relief in 10 steps
author: awoodruff
writer:
  display_name: Andy Woodruff
  email: andy@axismaps.com
image: /media/posts/2018/05/relief_banner.jpg
date: '2018-05-15 09:00:00 +0100'
date_gmt: '2018-05-15 09:00:00 +0100'
categories:
- Cartography
tags:
- Blender
- Photoshop
- QGIS
- Illustrator
- Terrain
comments: []
project: []
---

![](/media/posts/2018/05/relief_banner.jpg)

Continuing our recent theme of [terrain-related side projects](/blog/2018/04/contours-in-browser/), a few days ago I finished (or, decided to quit working on) a shaded relief map of New Hampshire's White Mountains that I'd been pecking at from time to time for a few months. Most of our work is with interactive, web-based maps, and although we occasionally get to do [more traditional static cartography](/projects/eca) (with hillshades, even), sometimes the kind of slow, singularly designed cartography we remember from our pre-web days has to be done just for fun.

![](/media/posts/2018/05/whites_sequence.gif)

It's satisfying to see a map come together piece by piece, as in the above animation showing the main steps and layers in producing this map. Cartography is rarely a matter of throwing data into software and getting a map in return; rather, a single map usually involves multiple tools and data sources, and a lot of attention to small details. (The same is true of web maps, by the way: we write a lot of code for small design details that push beyond defaults.)

There's no single way to make a shaded relief map, but here's how this one came together:

1. Download a good digital elevation model from the [National Map](https://nationalmap.gov/elevation.html)
2. Genereate a shaded relief image using Blender, per [Daniel Huffman's excellent tutorial](https://somethingaboutmaps.wordpress.com/2017/11/16/creating-shaded-relief-in-blender/).
3. Set up a [QGIS](http://qgis.org) project with [land cover data](https://www.mrlc.gov/). Style and export it with dimensions matching the relief image.
4. In Photoshop, add land cover with the relief layer overlaid with the multiply blending mode.
5. Heavily blur the land cover so that it's not harsh and pixelated. It becomes a subtle base layer, not an essential piece of data.
6. Use some Photoshop tricks to make relief highlights a bit brigher and warmer-colored, and shadows a cooler color.
7. Generate and label contour lines from the DEM using QGIS, then export and add them as a Photoshop layer.
8. Add roads (from OpenStreetMap via [Geofabrik's extracts](https://download.geofabrik.de/)) to the QGIS project. Export and style them with Illustrator, and place the .ai file as a layer in Photoshop underneath the relief. (Shadows thus fall on roads as they would in real life.)
9. Label all the peaks, physical features, and towns one by one in Illustrator (no GIS data involved), and place them into Photoshop.
10. Mask out Vermont (which helps a bit with orientation, and it's a NH map after all), crop the image, do miscellaneous cleanup, and finish!

That, of course, greatly simplifies each step, but it gives a good idea of everything that goes into a map. Labeling, for example, is hugely important and takes a lot of time to do right.

![](/media/posts/2018/05/labels_only.png)

Perhaps my favorite touch, briefly visible in the animated sequence, is number 6 from the list above: adding extra punch to the relief map's highlights and shadows. Daniel Huffman also covers something like this (along with much more!) in his [walkthrough of terrain mapping in Photoshop](https://somethingaboutmaps.wordpress.com/2016/10/03/terrain-in-photoshop/). A brightened, warmer tone is applied to the light side of mountains at high elevations, while shadows are given a blue tint. Not only does this seem to boost the illusion of depth, it also better evokes the temperature and appearance of a warm sun and cool shadows in reality. The effects are applied lightly, but they make a difference.

![](/media/posts/2018/05/relief_shadows.jpg)

It's been fun to practice this kind of cartography and learn new things along the way (blender is great!), while more deeply studying a region that is somewhat dear to me. Here's the full final product.

[![](/media/posts/2018/05/white_mountains.jpg)](http://andywoodruff.com/maps/white_mountains.jpg)