---
layout: post
nav: Blog
status: publish
published: true
title: Contour maps in a web browser
author:
  display_name: Andy Woodruff
  login: dave
  email: andy@axismaps.com
  url: ''
date: '2018-04-25 09:00:00 +0100'
date_gmt: '2018-04-25 09:00:00 +0100'
categories:
- Cartography
tags:
- D3
- Terrain
comments: []
project: []
---

![]({{ site.baseurl }}/media/posts/2018/04/contour_map.jpg)

A short while ago we received an inquiry about making a tool to draw a simple topographic contour map of any given place in the world and export an SVG file with the lines. There are good global terrain maps with contour lines—Google Maps has them, for example, as do many Mapbox styles—but the interest here was in extracting *only* the contour lines, for external use. Although the request turned into something else, we were still intrigued by the idea.

"Sounds too hard," I first thought. The question marks were:

1. How can we load good elevation data for anywhere in the world? I know how to find some good DEMs, but not on-demand in a web app, and I only know good data in the US.
2. How the heck do you draw contour lines? That has always been a desktop or command-line GIS operation for me.

Turns out I was wrong; neither of those is terribly difficult. So I [built a thing](http://contours.axismaps.com). More proof of concept than anything, this is a tool that lets you draw a contour map for just about anywhere, style it to a certain degree, and export to a few formats—perhaps most usefully, GeoJSON for use in further mapping or GIS work. There is really no fancy technology here. It's all JavaScript, employing Leaflet and D3.

[![]({{ site.baseurl }}/media/posts/2018/04/contours.jpg)](http://contours.axismaps.com)

You can do a handful of things here:

- Find the place you want to map
- Choose the contour line interval (in meters or feet), and the thicker index line interval (if any)
- Specify line colors and weights
- Use a solid color or hypsometric tints as a background fill
- Color elevations below sea level with different bathymetric colors
- Draw maps as basic contour lines or with a stylized raised, illuminated look
- Export to GeoJSON, PNG, or SVG

[Give it a try](http://contours.axismaps.com) and let us know if you find it useful for anything! Have a look at the [source code](https://github.com/axismaps/contours) too if you're interested in how it works, which is broadly described below.

## Global elevation data

The first big task is finding global elevation data and loading it in the browser without a huge hassle. We have a good archive of [SRTM](https://www2.jpl.nasa.gov/srtm/) data and briefly thought about writing server functions to deliver it, but my mind had been glossing over a much easier route despite having used it in the past: Mapzen (RIP) [terrain tiles](https://mapzen.com/documentation/terrain-tiles/).

Terrain tiles are raster map tiles, with the same size and numbering scheme as [any ordinary web map tiles](https://en.wikipedia.org/wiki/Tiled_web_map), that contain elevation data encoded as RGB color values. The type we use look something like this:

![]({{ site.baseurl }}/media/posts/2018/04/terrain_tiles.jpg)

They look insane because they're not meant to be viewed directly. Instead, [a short formula](https://mapzen.com/documentation/terrain-tiles/formats/#terrarium) decodes the red, green, and blue value of a pixel to an elevation value, which we can then use as we please. I plopped an invisible canvas tile layer into Leaflet to load the necessary terrain tiles as the map is moved around. After they load, they're drawn to a canvas from which we can read those RGB values, and thus store a big table of elevation values for the visible map area.

Fortunately, despite Mapzen's demise, their work on terrain tiles lives on, as the whole set is [available via Nextzen or Amazon S3](https://www.nextzen.org/). Mapbox (still alive) [also offers terrain tiles](https://www.mapbox.com/help/access-elevation-data/). Although the quality of data varies from place to place, these datasets represent work by some dedicated people to piece together the best data they can for most of the world—much better than trying to do that ourselves!

## Drawing contour lines

Great, we have elevation data. Now we just need to draw contours.

I do not know how to do this. I do not pretend to know how to do this. I understand a [basic hand-drawn method](https://www.e-education.psu.edu/natureofgeoinfo/c7_p6.html), but my real-world method is to ask [GDAL](http://www.gdal.org/gdal_contour.html) to do it.

Enter, not surprisingly, Mike Bostock and the fairly new [d3-contour](https://github.com/d3/d3-contour) JavaScript library. All you have to do is give it an array of data values and a set of thresholds (i.e., the values around which you want to draw the lines, in this case specified by user options), and it performs several magic spells and gives you contour polygons. This is useful not only for geographic mapping, but also for other types of charts as you can see in the documentation.

d3-contour returns the contours as GeoJSON, which is quite handy because D3 is also good at [consuming GeoJSON and spitting out drawable shapes](https://github.com/d3/d3-geo#paths) for canvas. The contours and visible map are based on screen coordinates, not geographic coordinates, but D3 doesn't care. To export as a usable GeoJSON file, we can use Leaflet's conversion methods to get back to geographic coordinates.

To recap, then, whenever the map is moved and redrawn, it does the following:

1. Load terrain tiles
2. Draw tiles to an invisible canvas and decode to elevation values
3. Get contour line thresholds based on user options and the current range of elevation values
4. Get contour polygons with d3-contour
5. Draw contours to canvas with the specified style options

When style options change, it only needs to redraw the canvas. If the line interval changes, it needs to re-calculate contours but doesn't need to reload elevation data. If the map moves, it needs to do everything.

## Stylized maps from contours

![]({{ site.baseurl }}/media/posts/2018/04/illuminated.jpg)

This little tool contains one slightly fancy style, the illuminated contours. These are essentially [Tanaka-style contours](http://wiki.gis.com/wiki/index.php/Tanaka_contours), where each contour line appears to be raised above the previous one, and illuminated from one direction. They look kind of three-dimensional, like layers of wood cut and stacked up. (Talented people have made plenty of real-life physical maps of that sort.) You can produce these with things like [ArcGIS](http://carto.maps.arcgis.com/apps/MapJournal/index.html?appid=415ca449ea6c4d9397c975139abd45fe) or [QGIS](https://anitagraser.com/2015/05/24/how-to-create-illuminated-contours-tanaka-style/), where the methods may be smarter and aware of the aspect of each line segment, but here it's just a trick with drop shadows. Until now I didn't know that standard canvas rendering methods include [drop shadows](https://www.html5canvastutorials.com/advanced/html5-canvas-shadow-offset-tutorial/)! There's a light stroke around the whole polygon, but it's obscured on one side by a drop shadow on the fill.

![]({{ site.baseurl }}/media/posts/2018/04/illuminated_steps.jpg)

But the stylistic possibilities with contour lines don't need to stop at contours themselves. I've been playing around with some maps that use contour lines as an intermediate step in deriving the final style, while not necessarily appearing on the map themselves.

One example is an attempt at [hachures](https://en.wikipedia.org/wiki/Hachure_map). Contour lines serve as starting points for shorter strokes, which travel downhill perpendicular to the contour, stopping at the next contour line. Contours are somewhat visible as gaps in the map, but are not drawn. I haven't exactly perfected this, but perhaps it's an improvement on [earlier derailed work](http://andywoodruff.com/blog/hachures-and-sketchy-relief-maps/) with faux-hachures that were based on a grid.

![]({{ site.baseurl }}/media/posts/2018/04/hachures.jpg)

Or we can get carried away with hachures just for aesthetic purposes, starting at contours but letting the strokes flow farther downhill, coalescing and being colored by the general direction in which they flow.

![]({{ site.baseurl }}/media/posts/2018/04/flowy.jpg)

![]({{ site.baseurl }}/media/posts/2018/04/hawaii.jpg)

Finally, there are always trippy animations. This one does show actual contour lines, but it's not exactly an ordinary map. Making useful things is great, sure. But making wacky pretty things is more fun!

![]({{ site.baseurl }}/media/posts/2018/04/animated_contours.gif)