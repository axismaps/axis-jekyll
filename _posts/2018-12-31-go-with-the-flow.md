---
layout: post
nav: Blog
status: publish
published: true
title: Go with the flow
author: awoodruff
writer:
  display_name: Andy Woodruff
  email: andy@axismaps.com
  twitter: awoodruff
image: /media/posts/2018/12/big-island-uphill.jpg
date: '2018-12-31 09:00:00 +0100'
date_gmt: '2018-12-31 09:00:00 +0100'
categories:
- Cartography
tags:
- Vector tiles
- Interactivity
comments: []
project: []
---

Most of my cartographic side projects these days follow a theme: mapping elevation data in some way or another. In the past year that has included wading into some "traditional" waters—trying some [modern digital hillshading](/blog/2018/05/relief-in-10-steps/) following [Daniel Huffman's processes](https://somethingaboutmaps.wordpress.com/2017/11/16/creating-shaded-relief-in-blender/), and [hand-shading](https://twitter.com/awoodruff/status/1055822532266332160) follwing [Sarah Bell's processes](https://petrichor.studio/2018/10/22/drawing-hillshade-shaded-relief-with-time-lapse-video-demos/) (and Eduard Imhof's, in turn)—but most projects have been experiements in web-based terrain maps: from [simple shaded relief](https://github.com/awoodruff/canvas-shaded-relief) to [fuzzy things](http://andywoodruff.com/blog/hachures-and-sketchy-relief-maps/) to [flowing things](http://andywoodruff.com/blog/the-rain-on-terrain/) to [contour maps](/blog/2018/04/contours-in-browser/). And now, to this next thing.

![](/media/posts/2018/12/washington-uphill.jpg)
*Mount Washington, New Hampshire*

I'd just like to share a few images from what I've been playing with off and on for much of 2018, because they're kind of pretty!

In 2017 Mike Bostock released [d3-contour](https://github.com/d3/d3-contour), a [d3](http://d3js.org) module for computing [contour polygons](https://en.wikipedia.org/wiki/Contour_line) from a grid of values, such as raster elevation data. For me this opened a new avenue of fun terrain mapping in a web browser. A quasi-practical product of my efforts is a [handy tool for generating and extracting topographic contours](http://contours.axismaps.com) for just about anywhere. But it's the artsy stuff that keeps me coming back.

![](/media/posts/2018/12/big-island-uphill.jpg)  
![](/media/posts/2018/12/washington-downhill.jpg)

As you might guess, these are, essentially, a collection on paths that "flow" downhill, something like a static version of the [animated flows](https://awoodruff.github.io/relief-flow/) I did a while back (apologies, that currently has some issues but is still somewhat functional) with some aesthetic differences. Elevation contours are a key part of this one, however.

## Attempting hachures... again

As always, I began with an attempt to draw [hachures](https://en.wikipedia.org/wiki/Hachure_map), a somewhat archaic terrain-shading technique of short, uniformly dense lines running in the direction of slope. Earlier attempts had drawn strokes in a regular grid or from random points, but now thanks to d3-contour I had a proper starting point. Randomly placed strokes running donwhill create a *hachure-esque* look, but real hachures are arranged in rows along regular contour intervals.

![](/media/posts/2018/12/pseudo-hachures.jpg)
*Pseudo-hachures, relatively short strokes drawn from random points. Here, masking around each line helps preserve an appearance of overall uniform density.*

Now that I had contours, all I needed to do was draw evenly spaced marks perpendicular to each contour, right? Well as usual, it *kind of* works but breaks down easily. For me, at least, perhaps hachuring will always stubbornly be the same hand-drawn technique as when it was born (I'm working on that a bit, too).

![](/media/posts/2018/12/hachure-attempt.jpg)
*Mount Washington in an attempt at more proper, orderly hachures with some shading. It's not terrible, but I haven't figured out how to thin out lines that bunch up nor fill in lines that fan out.*

After abandoning the idea of neat, short hachure marks, it's a short leap to what I've ended up with: just keep drawing the paths farther downhill and apply various colors and blending modes. There's still a hint of order behind it all, though, as the lines still start at regular intervals along contour lines, making a smoother and more pleasing appearance than random placement would.

![](/media/posts/2018/12/flows-gray.jpg)
*Same area as above (at a slightly different scale), allowing the lines to continue on downhill.*

There are a lot of variables to play with: the contour interval, the spacing along contours, the length of paths, and the color scheme, to name a few. What works best to my eye depends on the scale and particular geography of the map, though as a general rule it's best in mountainous but not overly rough terrain. If it's too flat lines don't really know where to go, and if it's too jumbled my methods aren't good enough to keep them "flowing" around all the obstacles—either way it looks messy. As for colors, I enjoy a dark background and somewhat vibrant colors based on the direction of flow, but your mileage may vary!

![](/media/posts/2018/12/washington-downhill2.jpg)
*Once more, with fun colors.*

![](/media/posts/2018/12/fuji.jpg)
*Mount Fuji, if I recall correctly*

![](/media/posts/2018/12/hawaii.jpg)
*Hawaii*

![](/media/posts/2018/12/color-dodge.jpg)
*More in-your-face line widths and blending modes.*

## Inversion

As fun and occasionally beautiful as these images turn out to be, what kept bothering me is that most of the time my brain just couldn't perceive a correct picture of elevation. The flows go downhill and converge into large streams, which makes sense conceptually and looks cool, but no matter what I did with colors or anything else, I could only see an inverted picture of the land. The prominent blank spaces—peaks and ridges—always looked like valleys areas.

It only dawned on me last week that a solution, if one was needed, is simply to draw lines the other way, going *uphill* from each contour. They start with even spacing at low elevations and begin to converge on ridgelines and summits. Finally I could see the structure of the terrain!

![](/media/posts/2018/12/uphill-vs-downhill.jpg)
*The same map extent drawn with lines running downhill (left) and uphill (right).*

![](/media/posts/2018/12/white-mtn-peak.jpg)
*Around White Mountain Peak, California*

![](/media/posts/2018/12/ridge-valley-pa.jpg)
*Central Pennsylania*

## Technically speaking

This is still pretty experimental, and I'm not yet at the point of publishing anything, but eventually I'd like to share source code and have a thing like the [contours tool](http://contours.axismaps.com) or animated flow viewer where you can render a map for wherever you please. Right now it's far too slow, and the code is borderline unreadable.

But for those interested, the gist of how this works is this:

1. Get elevation data from terrain tiles and compute contours (as described in [this post](/blog/2018/04/contours-in-browser/) about the contours tool)
2. Draw contours invisibly to SVG and use the `getPointAtLength` method to find regularly spaced points along each contour line.
3. From each of those points, start calculating a path up or downhill.  
  * Get the elevation and aspect at the point.
  * Proceed to the next point in the direction of aspect (or opposite, for uphill) at some specified segment distance (usually 5 pixels or so).
  * Repeat for the next point, and so on until an ending condition* is met.
  * Calculate a mean aspect value for all the coordinates in the path. I use this for coloring each line according to the general direction in which it flows.
4. Draw all paths to a canvas by feeding their coordinates to a [d3 line generator](https://github.com/d3/d3-shape#lines) with some [curve interpolation](https://github.com/d3/d3-shape#curves) applied.

\* Paths could keep going until they reach the highest/lowest point or the edge of the screen, but I've found it best to limit them by imposing one or more conditions for ending:
* A maximum number of segments
* A maximum elevation change (e.g., a path can only climb/descend three contour intervals)
* A minimum distance traversed. Some paths otherwise get "stuck" and bounce back and forth in a confined space, resulting in distracting bright spots on the map.

After all that, it comes down to playing around with colors, blending, and some of the variables, as mentioned earlier. Should the lines be sparse or dense? Long or short? Thick or thin? Many of the images here represent my favorite settings, but it's hard to stop trying different combinations—which is why the code is always "in progress" and messy!