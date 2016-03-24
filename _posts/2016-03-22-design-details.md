---
layout: post
nav: Blog
status: publish
published: true
title: Little Design Details in a Simple Map
author:
  display_name: David Heyman
  login: dave
  email: dave@axismaps.com
  url: ''
date: '2016-03-24 09:03:18 +0100'
date_gmt: '2016-03-24 09:03:18 +0100'
categories:
- Cartography
tags:
- Design
- Leaflet
comments: []
project: eshhad
---

I wanted to title this post: _**You Won't Believe This Cartographer's 4 Weird Tricks for a Nicer Map**_. That seemed like a bit much (plus the length of this post got away from me so it's now more Longreads than Upworthy), but the sentiment isn't entirely untrue. _Design_ (big-D Design—I would've capitalized it even if it didn't start the sentence) is an intimidating an amorphous topic. Academic cartography provides [good guidelines]({{ site.baseurl }}/guide/) for thematic cartography, but interactivity and user-interface design are often _"I know it when I see it"_ type of things. What follows are 4 quick design concepts and techniques that can be applied in many situations to improve the look and feel of an interactive map.

These concepts were taken from [a map we made for the Eshhad project](http://eshhad.timep.org) tracking sectarian violence in Egypt. It's a relatively straightforward map with:

1. A point dataset with a handful of attributes of various types (date, categories, short / long text, URLs)
2. A Leaflet implementation with basemap tiles
3. A responsive design for mobile

These are 3 very common circumstances for an interactive map, which should make these tips transferrable to a wide variety of projects.

## Use color sparingly
This is a concept that I first encountered with [Edward Tufte](http://www.edwardtufte.com/tufte/books_vdqi), but I think has been best put into practice time and time again by [NYT Graphics](http://www.nytimes.com/interactive/2016/03/18/world/middleeast/what-russia-accomplished-in-syria.html?smid=tw-share&_r=0).

![Another great NYT map]({{ site.baseurl }}/media/posts/2016/03/nyt.png)

This map is hugely effective because of it judicious use of color because:

1. Elements with color draw more attention than elements without.
2. The most important things on the map should attract most of the reader's attention.
3. Therefore, the most important things on the map should have color, while less important elements should not.

What's the most important thing on the map? _It's the thing that the map is about._ For this map, it was the point dataset of sectarian attacks.

![Colored points on a subtle map]({{ site.baseurl }}/media/posts/2016/03/color.png)

While the UI elements are certainly necessary for using the map, their importance is communicated through their size and position. The [Positron basemap from CartoDB](http://blog.cartodb.com/getting-to-know-positron-and-dark-matter/)), though necessary to provide geographic context for these points, fades into the background and does not compete for visual attention. It's great to have [so many nice basemaps to choose from](https://leaflet-extras.github.io/leaflet-providers/preview/)!

#### Color variation
Not only are the points one of the few elements on the map that are colored, they also use a categorical color scheme to display the target type. We decided to map this particular variable for the sole reason of bringing color variation to the map. In doing so, we greatly reduce _visual intimidation_ for the users of the map as lots of 1 kind of point on the map becomes a few groups of slightly less points. Egypt's geography, clustered around the Nile River and delta, make this even more important. The color variation allows users to more easily pick out single points for probing when they are tightly clustered together.

#### Color echoes
Color is also an extremely useful tool for reiterating connections between different features in the map. When color is used sparingly, you can easily communicate to the user that _things that are the same color are related in some way_. We've used a colored heading in the fixed data probe, not only to give it some visual weight, but also connect it to the point and tell the user _this text here is about that point there_.

![Color in the fixed data probe]({{ site.baseurl }}/media/posts/2016/03/color2.png)

Also—and there's more on this below—because the fixed data probe is so heavy with text and categorical attributes, we've used a subtle color variation to break up the text box from the other attributes in the fixed probe. This is partly to highlight the longer text, but mostly to create visual differentiation to the probe and reduce the _text intimidation_.
	
## Data probes
Data probes provide information to the user on-demand. For a more in depth look at their design, [this post by Ben is still fantastic]({{ site.baseurl }}/blog/2009/07/data-probing-and-info-window-design-on-web-based-maps/) (though the examples are showing their age). This map uses a 2-stage data probe technique that we've been using more and more in out maps that have a similar level of attribute detail.

#### Floating probe
The floating probe appears over the map. It is visually connected to the corresponding point through it's position and a small change in 

![Floating data probe]({{ site.baseurl }}/media/posts/2016/03/floating.png)

A little information (floating)
	- Appears on investigative action (mouseover)
	
	

A lot of information (fixed and scrolling)
	- Appears on deliberate action (click)
	- Organize your text using headers or tables!
Mobile
	- Skip the hover probe
	- Take a more modal approach
Map symbols echo level of probe
Any place where you ask a question should be probable
	- Any place where a visual variable is used, should be probe-able to get exact value

## Integrated legends
Because information can be presented on-demand with data probes, legends are less necessary.
Integrate legend into other controls to save valuable map space and reinforce connections

## Non-map controls
Not everyone wants to browse your data by map
 - They're interested in a non-spatial narrative
 - Not most comfortable using a map
Give tools to allow these users to access the data in their own way
Accessibility
 - Often thought of in terms of impairments
 - Think about making map accessible for wide range of audience with preference / technical ability
