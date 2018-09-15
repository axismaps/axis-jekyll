---
pid: exploration
title: Age of Exploration
client: Adam Matthew Digital
clientshort: AMD
logo: sage.png
tag: Animating 400 years of globe-spanning voyages
date: 2018-04-25
category: Education
featured: true
slideshow: true
video: 269711744
layout: project
nav: Portfolio
features:
- View voyages on an automatically rotating globe
- \gif\ Transition between globe and map to examine single voyages
- Visualize polar and circumnavigation voyages on the same map
---

This map was produced as part of the Age of Exploration project in collaboration with our longtime partners at Adam Matthew Digital. It charts voyages of exploration from Bartolomeu Dias's voyage around the Cape of Good Hope in 1487 to the Arctic and Antarctic exploration voyages of the early 20th century. The data was collected by Adam Matthew editorial staff from primary source documents. This data plotted the date and location of each step of each voyage and was collected into a shared web-based relational database platform. The structure of the database:

1. Prevented unnecessary errors through strict data typing
2. Reduced data collection time by reusing location and commander data in separate tables
3. Gave the flexibility to override names and position of specific locations as ports changed over time

The map displays the voyages on an interactive globe that rotates on 2 axes. Beyond its novelty, the globe is an optimum display for a dataset that covers virtually every degree of longitude and latitude. It is particularly useful for Arctic and Antarctic expeditions that would be highly distorted on traditional rectangular maps. The disadvantage of the orthographic projection (globe) is it can only display half of the world at once, making it impossible to view entire trans-Pacific or circumnavigation voyages. To remedy this, we included a single-voyage view that displays one voyage on a Robinson projection. The map uses Natural Earth Vector bathymetry data to give it some texture and context without the need for heavy raster tiles.

The entire project was built using D3. D3 transitions were particularly useful in animating the globe to follow the path of the voyage as well as transitioning from the globe view to the rectangular single voyage view. The data is pre-processed using a command-line utility built with Turf.js and our own Bézier curve generating script. The utility allows the user to specify the tension of each curve and provides extensive error reporting. It switches between drawing Bézier curves and geodesic curves based on the latitude of the voyage leg.