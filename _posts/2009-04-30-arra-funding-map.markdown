---
layout: post
status: publish
published: true
title: ARRA funding map
author:
  display_name: Ben Sheesley
  login: ben
  email: ben@axismaps.com
  url: ''
author_login: ben
author_email: ben@axismaps.com
wordpress_id: 374
wordpress_url: http://www.axismaps.com/blog/?p=374
date: '2009-04-30 16:00:05 +0100'
date_gmt: '2009-04-30 21:00:05 +0100'
categories:
- Cartography
tags: []
comments:
- id: 1723
  author: Daniel Huffman
  author_email: mrmunion@yahoo.com
  author_url: ''
  date: '2009-04-30 23:33:02 +0100'
  date_gmt: '2009-05-01 04:33:02 +0100'
  content: |-
    Well done and attractively presented.

    I am, actually (without being able to see more than your small clip of it), more of a fan of putting the states in greyscale and the state borders in color. I think that, since so much less ink is devoted to them, they need something to give them greater visibility. As they stand now, it takes more mental processing to pick out the pattern - much more than it does to assess the pattern for the main fill, the annual % change. I think that desaturating the colors (maybe not even all the way down to grey) of the state fills and giving more color to the stroke will help this out.

    I might also suggest putting a thin non-thematic border between all the states to define them better. Looking for example at Arkansas, it looks like it has a border at the top that is twice as thick as everywhere else. This is just because it happens to border MO, which has the same color border, whereas the other surrounding states don't. But when those things happen it gives a feeling of an inconsistent border width.

    Also, I like the part where the upper edges of the US poke into the title bar.

    Just some off-the-cuff thoughts. I like it, though. I am a fan of data-dense maps with multiple layers of symbology, and also of dark color schemes.
- id: 1729
  author: ben
  author_email: ben@axismaps.com
  author_url: http://
  date: '2009-05-01 02:59:23 +0100'
  date_gmt: '2009-05-01 07:59:23 +0100'
  content: |-
    Hey Daniel-

    Thanks for your comments. I like these suggestions, and agree that the pattern in the state outlines could be made more visible. Perhaps, as you say, decreasing state fill color saturation and adding a bit of color back to the outlines could help. I'll definitely give it a try.
- id: 1740
  author: Jon Peltier
  author_email: jonpeltier@gmail.com
  author_url: http://peltiertech.com/WordPress/
  date: '2009-05-01 10:59:22 +0100'
  date_gmt: '2009-05-01 15:59:22 +0100'
  content: Nice. It took me a moment to realize the color scheme had nothing to do
    with Dems and Reps. Still have that election mindset in my subconscious, I guess.
    The attempt at layering is ambitious, but I think the borders should not be counted
    on to provide the same level or quality of information as the interiors.  If the
    borders had a color scheme more similar to the interiors, it might be easier to
    compare them.
- id: 2141
  author: Richard Treves
  author_email: pentadij@gmail.com
  author_url: http://googleearthdesign.blogspot.com
  date: '2009-05-12 08:55:56 +0100'
  date_gmt: '2009-05-12 13:55:56 +0100'
  content: |-
    Nice experiment.  I agree with Ben that non-thematic boundaries as well as boundaries would work well.  I would have gone for expanding up the East coast States in a separate magnified box myself.  Overall though I think its a very usable way of presenting 3 variables on one thematic map.

    Rich
- id: 3494
  author: Where are all the dollar$ going? at SweetMaps
  author_email: ''
  author_url: http://sweetmaps.com/blog/?p=194
  date: '2009-06-23 10:20:08 +0100'
  date_gmt: '2009-06-23 15:20:08 +0100'
  content: "[...] such map about DOE (Dept. of Energy) projects was made by ace
    cartographers at Axis Maps in Madison Wisconsin.  This illustrates various techniques
    for communicating data on a static [...]"
- id: 28231
  author: Where are all the dollar$ going? &laquo; SweetMaps
  author_email: ''
  author_url: http://www.sweetmaps.com/blog/?p=166
  date: '2011-01-08 11:56:23 +0000'
  date_gmt: '2011-01-08 16:56:23 +0000'
  content: "[...] such map about DOE (Dept. of Energy) projects was made by ace
    cartographers at Axis Maps in Madison Wisconsin.  This illustrates various techniques
    for communicating data on a static [...]"
---
<p style="text-align: center;"><a href="http://work.axismaps.com/arra/ARRA_fundingMap.pdf"><img class="aligncenter" title="ARRA Funding Map" alt="ARRA Funding Map" src="http://www.axismaps.com/blog/wp-content/uploads/2009/04/arra_fundingmap1-1024x682.jpg" width="525" height="349" /></a></p>
<p>Lots of maps are coming out that document when, where, and how stimulus money is being spent through the ARRA, like these at the <a href="http://foundationcenter.org/focus/economy/maps.html" target="_blank">Foundation Center</a>. With all of the reporting, accountability, and transparency required of ARRA grant recipients, I'm sure we'll only be seeing a lot more of these in the future. <a href="http://www.recovery.gov/?q=content/state-recovery-page" target="_blank">Recovery.gov</a> directs traffic to states' Web sites where some of this data is appearing. I'm looking forward to seeing more and more mash-ups and interactive maps and graphics as developers and designers get their hands on this stuff and data from other sources that track stimulus money.</p>
<p><strong>Our Map</strong></p>
<p>For now, we decided to get involved by putting together a static map that shows where our ARRA tax dollars are going for energy-related programs administered by the DOE. As underlying layers, the map shows states' historical energy consumption trends and their projected trends required to meet consumption goals set for 2012.</p>
<p>I'm sure we could all talk about the politics around ARRA funding and energy consumption and how this might or might not be shaped by patterns that the map does or doesn't show. But to me, a few of the most interesting things about this map are related to its design:</p>
<p><strong>1) Encoding data in state boundaries</strong></p>
<p>I've always been attracted to National Geographic political reference maps, with their countries each outlined in a different color. On those maps, outline color clearly helps distinguish one place from another. Plenty of other maps use enumeration unit outlines to represent data, too, like those that categorize administrative boundaries using line weight, dashes and dots, etc. I wondered what was to stop the application of this idea to a thematic map? Why not try to take it one step further and encode numerical data, as opposed to nominal data, in unit outlines? I haven't seem many examples of this.</p>
<p>The main limitations here are line weight and unit size. Line weight has to be heavy enough so that color can be seen and read. For my map, this seemed to work best above around 4 pts. Only thing is, as enumeration units get smaller, the outline can eat up more interior space and obscure the presence of a second data set, which in this case is the historical energy consumption trend, encoded using unit fill color. So, I had to cheat a little bit with some small states and states with small pieces (e.g., Delaware and Maryland) and decrease the line weights a bit under 4 pts. I don't see this approach working very well with really small enumeration units like US counties, unless the map scale is really huge.</p>
<p><strong>2) Color selection</strong></p>
<p>The challenge here was to select colors for three data sets (historical energy, projected energy, and ARRA money) that not only encoded data properly but were harmonious (i.e., not competing or ugly). The historical energy data set has a natural midpoint around zero, so it needed a diverging color scheme. On the other hand, the projected energy data, having no midpoint, required a sequential scheme (thanks to <a href="http://www.colorbrewer.axismaps.com/" target="_blank">ColorBrewer 2.0</a> for both sets of specs). Proportional rings for ARRA money just needed to be readable and look nice on top of the other colors.</p>
<p>Here are some earlier attempts at getting color right. In my first try, I used a grayscale sequential ramp for the historical data (state fill color), matching the middle value to the map's background for a pseudo-diverging ramp feel. But this seemed overly subtle and downplayed the importance of clearly distinguishing states with decreasing and increasing energy consumption trends.</p>
<p>[caption id="attachment_379" align="alignnone" width="300"]<img class="size-medium wp-image-379" title="graymap" alt="First attempt at color." src="http://www.axismaps.com/blog/wp-content/uploads/2009/04/graymap-300x88.png" width="300" height="88" /> First attempt at color.[/caption]</p>
<p>So, my next try was to replace the grayscale ramp with a true diverging ramp. Yuck. The mix of red outlines and fill colors bothered me on an purely aesthetic level. Other diverging ramps with other hues in them produced similarly ugly results.</p>
<p>[caption id="attachment_380" align="alignnone" width="300"]<img class="size-medium wp-image-380 " title="aquamap" alt="Second attempt at color" src="http://www.axismaps.com/blog/wp-content/uploads/2009/04/aquamap-300x86.png" width="300" height="86" /> Second attempt at color.[/caption]</p>
<p>The final colors for historical energy consumption trends (blue-white-red) seem to best emphasize the data's midpoint, with red doing its part to connote "alarm" in the states with a poor track record. The projected energy consumption data set is now lower down in the visual hierarchy (shown using a grayscale color ramp on state outlines), but this seems to be acceptable compromise. Using gray prevents these two ramps from competing for attention or overlapping and confusing the map reader. From my perspective, at least, it also results in an (yes, subjective) improvement in overall color harmony.</p>
<p>Other thoughts about the ARRA funding map? Please add them to the comments.</p>
