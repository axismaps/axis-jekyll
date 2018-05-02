---
layout: post
nav: Blog
status: publish
published: true
title: Representing 'No Data' on Interactive Maps
writer:
  display_name: Ben Sheesley
  login: ben
  email: ben@axismaps.com

author_login: ben
author_email: ben@axismaps.com
wordpress_id: 954
wordpress_url: http://www.axismaps.com/blog/?p=954
date: '2011-06-13 10:24:18 +0100'
date_gmt: '2011-06-13 15:24:18 +0100'
categories:
- Design
tags: []
comments:
- id: 55613
  writer: Tom Auer
  author_email: mta138@gmail.com
  author_url: http://theskua.com
  date: '2011-06-23 16:23:25 +0100'
  date_gmt: '2011-06-23 21:23:25 +0100'
  content: "These are good examples. It can be tricky and most people ignore the issue
    by just leaving the data out.\r\n\r\nOne example I like is from eBird. To properly
    show species ranges from citizen science data, they've got to show where data
    was collected, but a species was not observed. Gray does work well.\r\n\r\nhttp://ebird.org/ebird/GuideMe?cmd=quickPick&amp;speciesCode=&amp;bMonth=01&amp;bYear=1900&amp;eMonth=12&amp;eYear=2011&amp;getLocations=northAmerica&amp;reportType=species&amp;speciesCodes=tenwar&amp;continue.x=40&amp;continue.y=3&amp;continue=Continue"
- id: 55621
  writer: Ben Sheesley
  author_email: ben@axismaps.com
  author_url: ''
  date: '2011-06-23 17:46:04 +0100'
  date_gmt: '2011-06-23 22:46:04 +0100'
  content: Hey Tom, thanks for the link. That's a great example. Seeing where the
    birds are not, as well as where they are, tells a more complete story for sure.
    I like it.
- id: 121638
  writer: Data Visualization | Annotary
  author_email: ''
  author_url: https://annotary.com/collections/4279/data-visualization
  date: '2013-01-17 10:10:00 +0000'
  date_gmt: '2013-01-17 15:10:00 +0000'
  content: "[...]   More from stefano parodi:    iMac    Music    Miscellaneous    Geospatial
    \        Sort Share   www.axismaps.com &nbsp; &nbsp; &nbsp; 3 months [...]"
---
<p>We spend a lot of time determining the best way to represent data given to us by our clients. Whether in the user interface or on the map itself, it's at the core of what we do. In contrast, I've been surprised recently by the amount of time we've spent thinking about how to best represent data we do NOT have. Here, I'm talking about places where data was either not collected or not reported. Needless to say, discovering empty cells in a spreadsheet is not at all uncommon, albeit frustrating at times. This is the nature of data collected in the real world. But what is the best way to represent "no data"? It only takes a single missing value to raise the question and present this rather unique design problem.</p>
<p>Below are a few of the ways we've chosen to represent 'no data' in recent projects when interpolation or other means of smoothing out and covering up missing values was not an option. We feel that instances of 'no data' are nothing to hide from or ignore. In fact, in some cases, I'd argue that representing 'no data' can be a good thing and actually help to tell a more complete and truthful story about a mapped phenomenon that wouldn't otherwise be seen.</p>
<!--break-->
<p>&nbsp;</p>
<h2>Proportional Point Symbols</h2>
<p>In the Jewish Life in America project for <a href="http://www.amdigital.co.uk/">Adam Matthew Digital</a> (<a href="http://www.amdigital.co.uk/Collections/Jewish-Life-in-America-c1654-1954.aspx">project description</a>), we mapped immigration, education, and population data at a number of countries, states, and cities over time to show how change took place. However, not every city has data available at every time slice. For those years when cities had no data, we mapped empty proportional point circles, sized according to the last year in which recorded data was available. For example, in the figures below the map shows that around 1890 Chicago had a Jewish population of 50,000. No data is available for St. Louis for this year, but in 1850--the last year in which data was recorded--we can see there was a Jewish population of 600 people.</p>
<div class="mceTemp">
<dl id="attachment_991" class="wp-caption alignnone" style="width: 772px;">
<dt class="wp-caption-dt"><a href="{{ site.baseurl }}/media/posts/2011/06/jlia_chicago.jpg"><img class="size-full wp-image-991" title="jlia_chicago" src="{{ site.baseurl }}/media/posts/2011/06/jlia_chicago.jpg" alt="" width="762" height="360" /></a></dt>
</dl>
</div>
<p><span style="color: #999999;"><em>Jewish population in Chicago, c1890</em></span></p>
<div class="mceTemp">
<dl id="attachment_992" class="wp-caption alignnone" style="width: 772px;">
<dt class="wp-caption-dt"><a href="{{ site.baseurl }}/media/posts/2011/06/jlia_stLouis.jpg"><img class="size-full wp-image-992" title="jlia_stLouis" src="{{ site.baseurl }}/media/posts/2011/06/jlia_stLouis.jpg" alt="" width="762" height="360" /></a></dt>
</dl>
</div>
<p><span style="color: #999999;"><em>Jewish population in St. Louis is not available at c1890. The value at the last available time slice, c1850, is given instead.</em></span></p>
<p>Mapping hollow circles at years with no data can be helpful in a few different ways. First, it allows comparisons to be made between every city, albeit across years in some cases. Second, it reduces the distracting "pop-corn" effect of city points appearing and disappearing with each click of the timeline. Third, it shows the spatial distribution of all cities having some jewish population across time. Finally, and perhaps most simply, it makes for a less empty-looking and data-starved map.</p>
<p>&nbsp;</p>
<h2>Choropleth</h2>
<p>For the Children's Environmental Health Initiative Interactive Map Dashboard, we mapped a range of health, demographic and program data. In the figure below, late pre-term births at the census tract level in Durham, NC are shown. Features with 'no data' are represented by a gray fill color, a common technique found on choropleth maps. They can be hidden from the display via a checkbox in the user interface where the number of features without data is also shown.</p>
<div class="mceTemp">
<dl id="attachment_1009" class="wp-caption alignnone" style="width: 747px;">
<dt class="wp-caption-dt"><a href="{{ site.baseurl }}/media/posts/2011/06/duke_1.jpg"><img class="size-full wp-image-1009" title="duke_1" src="{{ site.baseurl }}/media/posts/2011/06/duke_1.jpg" alt="" width="737" height="299" /></a></dt>
</dl>
</div>
<p><span style="color: #999999;"><em>Tracts with no data are represented using a gray fill color. An interface control counts and hides them.</em></span></p>
<div class="mceTemp">
<dl id="attachment_1010" class="wp-caption alignnone" style="width: 747px;">
<dt class="wp-caption-dt"><a href="{{ site.baseurl }}/media/posts/2011/06/duke_2.jpg"><img class="size-full wp-image-1010" title="duke_2" src="{{ site.baseurl }}/media/posts/2011/06/duke_2.jpg" alt="" width="737" height="299" /></a></dt>
</dl>
</div>
<p><span style="color: #999999;"><em>The same map, but with 'no data' features hidden from display.</em></span></p>
<p>Places with 'unstable rates', although not exactly instances of 'no data', do not have big enough sample sizes to make meaningful inferences (as well as having some privacy concerns related to the small sample). Like features with no data, unstable rates can be hidden from the map display and ignored when necessary. However, unlike 'no data' these places are included in the map classification and are color-coded (i.e., not grayed-out). By treating each independently, users can refine how they want to display this more empty end of the data spectrum.</p>
<p><a href="{{ site.baseurl }}/media/posts/2011/06/duke_3.jpg"><img class="alignnone size-full wp-image-1011" title="duke_3" src="{{ site.baseurl }}/media/posts/2011/06/duke_3.jpg" alt="" width="737" height="299" /></a></p>
<p><span style="color: #999999;"><em>The same map, but with 'unstable rates' hidden from the display.</em></span></p>
<p><a href="{{ site.baseurl }}/media/posts/2011/06/duke_3.jpg"></a>Assigning the color gray to 'no data' might seem like an obvious and easy choice, however, we've had to be somewhat careful in the past. Gray tends to recede and lie lower in the visual hierarchy than other colors on the map, and from a design perspective this can be advantageous in a number of ways. At the same time, this makes it especially important that the different meanings for "gray" are clear to the end user and that it be used consistently across the map and user interface.</p>
<p>While working on designs for the <a href="http://healthcarereportcard.illinois.gov/maps">Illinois Public Health Community Map</a> in collaboration with <a href="http://www.idph.state.il.us/">IDPH</a> and <a href="http://www.ipro.org/">IPRO</a>, for example, we found that multiple uses for gray would be needed. In fact, a county on the map could be assigned one of three different gray values, and it was possible that counties representing each type could appear coincidentally. They could be gray 1) because a user zoomed in to a particular sub-region of the state, 2) because a user focused data around certain percentiles with the provided histogram control, and 3) because no data was available in the database. In addition, the health data we were mapping was calculated in several ways (e.g., "Rate of discharge" and "Deviation form Statewide Benchmark"), each requiring a different map color-scheme. In the mockup below of the Western IL health region, out-of-region counties are shown in light gray, out-of-focus counties in medium gray, and a single county with no data is shown in dark gray. To be safe, we chose sequential, diverging, and bivariate color schemes that didn't include gray so as to avoid any potential confusion.</p>
<div class="mceTemp">
<dl id="attachment_1017" class="wp-caption alignnone" style="width: 732px;">
<dt class="wp-caption-dt"><a href="{{ site.baseurl }}/media/posts/2011/06/ipro_IL1.jpg"><img class="size-full wp-image-1017" title="ipro_IL" src="{{ site.baseurl }}/media/posts/2011/06/ipro_IL1.jpg" alt="" width="722" height="515" /></a></dt>
</dl>
</div>
<p><span style="color: #808080;"><em><span style="color: #999999;">Mockup of the Western IL health region showing out-of-region counties in light gray, out-of-focus counties in medium gray, and a single county with no data in dark gray. </span></em></span></p>
<h2>Basemap</h2>
<p>One feature of the London Low Life Map we produced for <a href="http://www.amdigital.co.uk/">Adam Matthew Digital</a> (<a href="http://www.amdigital.co.uk/Collections/London-Low-Life.aspx">project description</a>) involves the overlay of historical maps on a modern basemap of London so that both images can be seen together using an opacity control. However, not all of the historical maps were scanned at the same resolution, meaning the extent that zooming is possible can change from map to map. As a simple means of handling maps with 'no data' at the higher resolutions, we disable part of the zoom widget when the handle reaches a certain point. Zoom levels that are not available for a selected map are shown, but not clickable. This is similar to what Google Maps does when switching over to terrain from the roads map, although in that case the zoom widget is shortened instead of disabled.</p>
<div class="mceTemp">
<dl id="attachment_1014" class="wp-caption alignnone" style="width: 694px;">
<dt class="wp-caption-dt"><a href="{{ site.baseurl }}/media/posts/2011/06/LLL.jpg"><img class="size-full wp-image-1014" title="LLL" src="{{ site.baseurl }}/media/posts/2011/06/LLL.jpg" alt="" width="684" height="286" /></a></dt>
</dl>
</div>
<p><span style="color: #999999;"><em>In this map, the zoom track is disabled to represent the limits of available base map data.</em></span></p>
