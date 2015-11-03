---
layout: post
status: publish
published: true
title: 'The ''Why Not The Best'' map: thematic mapping with Leaflet'
author:
  display_name: Andy Woodruff
  login: andy
  email: andy@axismaps.com
  url: http://www.cartogrammar.com/blog
author_login: andy
author_email: andy@axismaps.com
author_url: http://www.cartogrammar.com/blog
wordpress_id: 1279
wordpress_url: http://www.axismaps.com/blog/?p=1279
date: '2012-07-31 09:23:38 +0100'
date_gmt: '2012-07-31 14:23:38 +0100'
categories:
- Code
- Portfolio
tags:
- thematic maps
- web mapping
- leaflet
comments:
- id: 104447
  author: Sheraz
  author_email: sheraz24@gmail.com
  author_url: http://visualizingurbanfutures.wordpress.com
  date: '2012-08-03 09:23:35 +0100'
  date_gmt: '2012-08-03 14:23:35 +0100'
  content: Really interesting article! Do you know of any other techniques used to
    create choropleth maps?
---
<p>We're pleased to mention our most recently completed project: an interactive quality-of-health-care map for <a target="_blank" href="http://whynotthebest.org/maps">Why Not The Best</a>, done in conjunction with <a target="_blank" href="http://www.ipro.org/">IPRO</a> for the <a target="_blank" href="http://www.commonwealthfund.org/">Commonwealth Fund</a>. This is actually the second incarnation of this map, which is now built with more modern technology and is better integrated with the Why Not The Best site.</p>
<p><a target="_blank" href="http://whynotthebest.org/maps"><img src="http://www.axismaps.com/blog/wp-content/uploads/2012/07/wntb.jpg" alt="Why Not The Best map" title="Why Not The Best map" width="740" height="454" class="alignnone size-full wp-image-1301" /></a></p>
<p>We first built the Why Not The Best map in Flash about two years ago, using the Flex-based <a target="_blank" href="http://indiemapper.com">indiemapper</a> framework we had developed for ourselves. Flash was a good solution the time, as this was a relatively simple vector thematic map. However, the map's functionality and features later grew to the point where it incorporated multiple shapefiles, several layout modes, and embedded Google Maps—resulting in a very complex project and a large SWF for users to load. At the same time, non-Flash web mapping technology was improving rapidly, opening new doors for building this kind of map. As such we again worked with IPRO and completely rebuilt the map in HTML 5 and JavaScript.</p>
<p>We've learned a few things from this and similar projects and thought we'd share some experiences from this map, in case other folks just getting into this kind of work can benefit from the same tricks.</p>
<h2>Leaflet</h2>
<p>The web mapping library I've settled on as my choice lately is <a target="_blank" href="http://leaflet.cloudmade.com/">Leaflet</a>, which is developed by CloudMade. Leaflet offers "slippy map" and overlay basics but also a lot of opporunity for easy custom <a href="http://leaflet.cloudmade.com/plugins.html" target="_blank">extensions</a>. While there is little built-in support for thematic cartography like choropleth maps (although the <a target="_blank" href="http://leaflet.cloudmade.com/2012/07/30/leaflet-0-4-released.html">very recent release</a> makes more strides in this direction), it's not difficult make it happen in completely custom ways. Below is an overview of what we did in this case.</p>
<h2>Choropleth</h2>
<p>Our choropleth map, in brief, is drawn from tiled GeoJSON served by <a target="_blank" href="http://tilestache.org/">TileStache</a> and colored by data requested from IPRO's database. Although I suppose it will be part of the Leaflet release some day, there's currently no built-in support for tiled GeoJSON layers; however, as you'd expect with an open-source project, third-party developers have come up with solutions. We used this <a target="_blank" href="https://gist.github.com/1716010">TileCanvas</a> layer with some additional modifications.</p>
<p>GeoJSON is commonly drawn to SVG, but just as we learned long ago in Flash, a ton of vectors rendered on screen at one time can really bog things down. We wanted to try the canvas element instead, rendering the vector data as static rasters and faking the mouse interactivity that SVG would have allowed. Sure enough this did seem to perform better, especially when we needed to draw our county layer in high detail. Thus the GeoJSON TileCanvas layer, which builds upon Leaflet's canvas layer, was handy.</p>
<p>To make this all work interactively and allow on-the-fly coloring based on data, we had to perform a couple of behind-the-scenes tricks. The main technique was introduced to us by our friend <a target="_blank" href="https://twitter.com/blueshirt">Jeremy White</a>, a Graphics Editor at the New York Times whose fantastic interactive work you have undoubtedly seen and who has explained this in a couple of talks. Basically, it's this:</p>
<p><img src="http://www.axismaps.com/blog/wp-content/uploads/2012/07/greens.jpg" alt="Canvas choropleth: behind the scenes" title="Canvas choropleth: behind the scenes" width="660" height="391" class="alignnone size-full wp-image-1282" /></p>
<p>Beautiful, right? This green thing is a map layer that ordinarily is invisible underneath the actual choropleth layer. It draws each enumeration unit (counties here) with a unique color based on a unique ID number for that unit. That number could be its position in an array, or in our case an arbitrary number included in the original shapefile (again, though, it's just the row number of each record). On a canvas element we can't do much more with the mouse than detect the coordinates of the mouse position and the pixel color under the mouse. By assigning colors this way, we can read that pixel color and turn it back into the ID number, thereby learning which county is under the mouse.</p>
<p><img src="http://www.axismaps.com/blog/wp-content/uploads/2012/07/color_id.jpg" alt="Unique colors for canvas choropleth" title="Unique colors for canvas choropleth" width="740" height="264" class="alignnone size-full wp-image-1286" /></p>
<p>Our method for assigning colors, also more or less following Jeremy's tips, was to use the red and green channels, each of which has 256 possible values. It works like this for my county of residence, which had an ID number of 1222:</p>
<ol>
<li>1222/256 = 4.77. We only want the integer for this part, so <strong>Red = 04</strong>.</li>
<li>1222 mod 256 = 198, or in hexadecimal, C6. <strong>Green = C6</strong>.</li>
<li><strong>Blue = 0.</strong></li>
</ol>
<p>In other words, we just run down the sequential list and increment the green value by 1 until reaching maximum green (255), at which point red is incremented by 1 and green rolls over to 0. In our code, a feature's color looks like this: <code>"rgba('+Math.floor(feature.properties.ID/256)+','+feature.properties.ID % 256+',0,1)"</code></p>
<p>Having detected a color on the map (#04C600 here), we can reconstruct that ID number.</p>
<ol>
<li>Red = 04. 4 * 256 = 1024.</li>
<li>Green = C6 (198). <strong>1024 + 198 = 1222</strong>.</li>
<li>Looking at our data, we find that 1222 is Middlesex County, Massachusetts.</li>
</ol>
<p>The blue channel is not used at all for the counties and is instead reserved for drawing borders between them. Some confusion of pixel color can happen where two or more counties come together, sometimes appearing as a totally different color that belongs to a unit elsewhere. We draw blue over the borders as a kind of buffer. If any blue is detected while moving the mouse around, we know that it's very close to a boundary and we don't try to discern a county. Using only the red and green channels in this manner, 65,536 unique colors—and thus unique map units—are possible. If the blue channel were also used, it would be more than 16 million.</p>
<p>Our map doesn't actually store a list of the all the counties and ID numbers. Instead we store the JSON attribute information along with the geometry on the custom TileCanvas layer. On a county mouseover, we loop through the features on the tile to find which one matches the ID number of the detected color. That way we know both the attribute information and the geometry, allowing us to display the name, etc. and also redraw the choropleth tile with a yellow highlight added to the correct county.</p>
<h2>Proportional symbols</h2>
<p>Marker symbols in general are easy to implement in Leaflet, but using them thematically is not straightforward. For one thing, it's difficult to maintain an association between the symbol and the data that it represents. Again, though, it's not hard to extend Leaflet's capabilities, so we just added our own modified type of marker layer that allowed us to pass in data to control the symbol size and label. We shied away from SVG here too and used div elements for the symbols, something which was also <a target="_blank" href="http://leaflet.cloudmade.com/reference.html#divicon">just introduced</a> in this week's new Leaflet release. The CSS <a href="http://www.css3.info/preview/rounded-border/" target="_blank">border-radius</a> property can be used to make circles.</p>
<p><img src="http://www.axismaps.com/blog/wp-content/uploads/2012/07/div_marker.png" alt="Proportional symbol divs in Leaflet" title="Proportional symbol divs in Leaflet" width="639" height="236" class="alignnone size-full wp-image-1289" /></p>
<h2>Multi-scale mapping</h2>
<p>Even though raster basemaps tend to be designed for multiple scales (often 18ish unique scales), it's easy to overlook the importance of doing this for vector data in web maps, too. Our map needed to work from continent level all the way down to street level, at 15 or so scales, half of which include the vector choropleth layer. We ended up using three levels of generalization, thanks of course to <a href="http://mapshaper.org" target="_blank">MapShaper</a>.</p>
<p><img src="http://www.axismaps.com/blog/wp-content/uploads/2012/07/multiscale.png" alt="Generalization at different scales" title="Generalization at different scales" width="354" height="600" class="alignnone size-full wp-image-1291" /></p>
<p>Beyond good practices, generalization was important for performance. Note the file sizes on the image above. At the smallest scale, all of the country is visible, meaning we need to download and render all of the vector data. If we didn't generalize the geometry, that would mean the whole 13MB!</p>
<p>Each of the three generalization levels is a different layer in TileStache. Rather than implementing three separate layers in Leaflet, we added a couple of methods to the TileCanvas layer to allow for several different source URLs, automatically switching between them as the zoom level changes. We could give it an object like this and not worry about it thereafter:</p>
<p><code>var countiesURL = [<br />
		{url:tilestacheBase+'counties-smallscale/{z}/{x}/{y}.geojson',min:0,max:4},<br />
		{url:tilestacheBase+'counties-medscale/{z}/{x}/{y}.geojson',min:5,max:7},<br />
		{url:tilestacheBase+'counties-largescale/{z}/{x}/{y}.geojson',min:8,max:20}<br />
		];</code></p>
<h2>Thematic web maps: getting better!</h2>
<p>There's much more to the new Why Not The Best map than has been described above, so go <a target="_blank" href="http://whynotthebest.org/maps">check it out</a>. To say nothing of the many design challenges, these were just a few of the most interesting technical challenges, which, thankfully, Leaflet and TileStache made it pretty easy to solve. (Now if only it were as easy to avoid the Mercator projection in choropleth web maps!) It's been a good experience in learning how non-Flash web mapping libraries have improved for thematic cartography, even if they don't support it natively. If you're new to this, check out the Leaflet <a href="http://leaflet.cloudmade.com/reference.html" target="_blank">documentation</a> and <a href="http://leaflet.cloudmade.com/examples.html" target="_blank">tutorials</a>, as well as <a href="http://tilestache.org/" target="_blank">TileStache</a> and our blog post tutorial on <a href="http://www.axismaps.com/blog/2012/01/dont-panic-an-absolute-beginners-guide-to-building-a-map-server/">how to set up a tile server</a>.</p>
