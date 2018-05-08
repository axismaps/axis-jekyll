---
layout: post
nav: Blog
status: publish
published: true
title: 'The Best of Both Worlds: Semi-transparent choropleth maps in GeoCommons Maker!'
writer:
  display_name: Ben Sheesley
  login: ben
  email: ben@axismaps.com

author_login: ben
author_email: ben@axismaps.com
wordpress_id: 32
wordpress_url: http://www.axismaps.com/blog/?p=32
date: '2008-12-08 07:57:34 +0000'
date_gmt: '2008-12-08 12:57:34 +0000'
categories:
- Design
- Cartography
tags:
- Cartography
- Design
- Maker
- choropleth
---
<p><span><span>When we were building </span><span><a title="GeoCommons Maker!" href="http://maker.geocommons.com/" target="_blank">GeoCommons Maker!</a> </span><span>one of the key map design challenges we faced involved producing <em>semi-transparent choropleth maps</em>. C</span>horopleth maps are perhaps the most common type of thematic map and are regularly used to show data that is attached to enumeration unit boundaries, like states or counties. Ever seen a red state / blue state election map? This is a basic choropleth. There are a lot of more sophisticated ways that choropleths can be made to best represent a given data set, for example, by playing around with classification, categorization, choice of color scheme, etc., but we won't get into those here.</span></p>
<p><span>I want to talk about color. Traditionally, choropleth maps are read by looking at the general pattern of unit colors and/or by matching the colors of specific map units to a legend. Other <em>reference</em> data is often removed from the map because it is either, 1) not necessary to communicate the map's primary message or 2) makes communicating this message more difficult. It could be argued, for example, that other reference map information, like green parks, gray airports, brown building footprints, and blue water distract readers from seeing the general pattern of choropleth colors on the map, which is where the map's most important message can be found.</span></p>
<!--break-->
<p><span>For GeoCommons Maker!, we wanted to allow people to make a kind of <em>hybrid</em>, semi-transparent choropleth map that would show both thematic data (colored choropleth map units) AND the rich reference information on popular map tiles (e.g., Google, Microsoft Virtual Earth) <em>without sacrificing map reading and interpretation ability and confidence</em>. We believe that there are lots of times when reference and thematic data can work extremely well together to really benefit a map's message (e.g., a soils map that shows terrain or a vegetation map that shows elevation). So, we wanted to build this functionality into Maker!, and allow people to make maps that show the best of both worlds.</span></p>
<p style="text-align: center;"><strong>The Problem with Transparency</strong></p>
<p><span>The fundamental problem with transparency is that<em> the color of semi-transparent map units can shift due to the visibility of color that lies beneath them</em>. This is not at all surprising, but can make the basic legend matching task difficult, obscure the pattern of color on the map, or just as bad, make patterns appear out of nowhere. Here's a look at what happens to colors using the same semi-transparent choropleth map units on different backgrounds. These are screen captures from early design mock-ups for Maker!.</span></p>
<p><span>The first image shows (hypothetical) opaque choropleth map units with a 7-class color ramp. The next three images show the same units at 50% opacity on top of Google terrain, streets, and satellite imagery. Notice how colors shift when compared to the opaque map at top? See how lightly colored units nearly disappear on the streets map, and darkly colored units nearly disappear on the satellite map? Yikes!</span></p>

![Mock-up of an opaque, 7-class choropleth map for Maker! (Google terrain)](/media/posts/2008/08/picture-9.png)
_Mock-up of an opaque, 7-class choropleth map for Maker! (Google terrain)_

![Same mock-up, at 50% opaque (Google terrain)](/media/posts/2008/08/picture-10.png)
_Same mock-up, at 50% opaque (Google terrain)_

![Same mock-up, at 50% opaque (Google streets)](/media/posts/2008/08/picture-11.png)
_Same mock-up, at 50% opaque (Google streets)_

![Same mock-up, at 50% opaque (Google satellite)](/media/posts/2008/08/picture-12.png)
_Same mock-up, at 50% opaque (Google satellite)_

<p style="text-align: center; "><strong>The Solution to Transparency</strong></p>
<p><span>We employed three design solutions to ensure that semi-transparent choropleth maps in Maker! would work, despite potential map reading problems: 1) unit boundaries, 2) data probing, and 3) transparency control.</span></p>
<p><strong>1) Unit boundaries.</strong> In Maker's choropleth maps <em>unit </em><em>boundaries</em> are color coded but remain opaque, even when <em>unit </em><em>fill</em> color is semi-transparent. This gives map users some true color information to work with, and should improve their ability and confidence to spot map patterns or match colors to a legend. In other words, while unit fill colors can get you close, unit boundaries can get you the rest of the way there.</p>

![Screen-shot from Maker! showing opaque choropleth unit boundaries](/media/posts/2008/08/picture-31.png)
_Screen-shot from Maker! showing opaque choropleth unit boundaries_


![Corresponding legend for the above map](/media/posts/2008/08/picture-14.png)
_Corresponding legend for the above map_

<p><strong>2) Data probing.</strong> We also took advantage of a relatively common and very helpful interactive map feature known as data probing. Exact values for any choropleth map unit can be obtained by clicking on them. In Maker!, we designed the data probing feature to go one step further and give values for all of the possible attributes associated with each map unit, not just the mapped attribute alone (see the scrolly list, shown in the probing pop-up below).</p>

![GeoCommons Maker! Data Probe](/media/posts/2008/12/picture-51.png)
_GeoCommons Maker! Data Probe_

<p><span><strong>3) Transparency control.</strong> Finally, we gave mapmakers a transparency control, as well as a chance to take some responsibility for how well their maps communicate. The transparency control lets mapmakers decide what works and what doesn't. Given the huge range of possible maps that can be made with Maker!, some user controls like this are necessary (as well as being kinda fun!). Here, transparency can be adjusted for a custom fit with any chosen tile set, color scheme, or other mapped data. Settings on the control (shown below) range from 50-100% opaque.<br />
</span></p>

![Screen-shot from Maker! showing the transparency control](/media/posts/2008/08/picture-131.png)
_Screen-shot from Maker! showing the transparency control_

<p style="text-align: center;"><span><strong>The Best of Both Worlds</strong></span></p>
<p style="text-align: left;"><span>Our decision to include semi-transparent choropleth maps in Maker! should give mapmakers and map users the best of both worlds. A semi-transparent choropleth is truly a <strong>hybrid map</strong> in that it can potentially offer all the advantages of combining rich reference data (i.e., underlying tile sets) with great thematic data (i.e. overlying choropleth units). Hopefully the choropleth maps coming out of Maker! will be easy to read and good looking, too!</span></p>
