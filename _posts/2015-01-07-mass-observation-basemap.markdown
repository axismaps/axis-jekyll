---
layout: post
nav: Blog
status: publish
published: true
title: Mass Observation Basemap
writer:
  display_name: Ben Sheesley
  login: ben
  email: ben@axismaps.com

author_login: ben
author_email: ben@axismaps.com
wordpress_id: 1947
wordpress_url: http://www.axismaps.com/blog/?p=1947
date: '2015-01-07 09:59:31 +0000'
date_gmt: '2015-01-07 14:59:31 +0000'
categories:
- Design
tags: []
comments: []
project: massobservation
---
<p class="p1">We recently worked on a project with <a title="Adam Matthew Digital" href="http://www.amdigital.co.uk/">Adam Matthew Digital</a> mapping British diarists in the UK who wrote during the first half of the 20th century. Most of the 500+ entries deal with observations about the impact of WWII on everyday life.  The map allows users to search and filter diarists by gender and date of birth or view them in smaller groupings by theme (e.g., "Political Opinions", Women in Wartime", "London During the Blitz"). Brief bios and excerpts from the diaries themselves are also viewable, as shown in the screenshot of the interface below:</p>
<p class="p1"><img class="aligncenter size-full wp-image-2010" src="{{ site.baseurl }}/media/posts/2015/01/Mass_Observation.png" alt="Mass_Observation"/></p>
<p class="p1">One of the fun challenges of the project was designing a tiled basemap that resembles other maps from the time period in terms of look and feel. We needed something that would help set the tone and mood for the project without using an actual historical map made in the 1940s. Although we've used actual historical maps for <a href="http://www.axismaps.com/project.php#cap"><span class="s1">other projects</span></a>, in this case doing so would have caused too many accuracy issues around the locations of the diarists. Instead we turned to TileMill, where we brought together modern-day data from OpenStreetMap, the Ordnance Survey, and Natural Earth and applied our own design.</p>
<p class="p1"><img class="aligncenter size-full wp-image-2013" src="{{ site.baseurl }}/media/posts/2015/01/mo_animation.gif" alt="mo_animation"/></p>
<p class="p1">After spending some time online browsing maps made in 1930s-40s England and the UK, such as those out of the British Ordnance Survey, we narrowed down a few of the salient design elements we found. Of course, we saw a lot of variability, but typography seemed to have one of the greatest impacts in terms of evoking the look and feel we wanted. Serif fonts with good contrast between thick and thin strokes were common, as was the liberal use of italic for map labels. Map symbol colors were similarly impactful. They ranged across the spectrum but were generally desaturated and flat on light-colored backgrounds (very few gradients, glows, drop-shadows or other effects). We took note of a few other elements too, like line weights, which tended to be thin (not overly chunky), and line styles, which varied greatly--we found all kinds of dashes, dots and dash-dot combinations.</p>
<p class="p1">One other element having a big impact on look and feel was the paper the maps were printed on. Textures in the maps gave the impression of something old and used. They also added a tangible and personal quality, which seemed a perfect fit for our map of diary entries. Of course, tiled basemaps with textures that look worn or folded are not new  (e.g.,  <a title="Geography Class" href="http://a.tiles.mapbox.com/v3/mapbox.geography-class/page.html#4/0.00/0.00">Geography Class</a> map) but we couldn't resist making a version of our own since it seemed so applicable for this project. Here is a closer look at the paper texture at zoom levels 9-11:</p>
<p class="p1"><img class="aligncenter wp-image-2024 size-full" src="{{ site.baseurl }}/media/posts/2015/01/zoom9.png" alt="zoom9" /><img class="aligncenter wp-image-2023 size-full" src="{{ site.baseurl }}/media/posts/2015/01/zoom10.png" alt="zoom10" width="700" height="450" /><img class="aligncenter wp-image-2022 size-full" src="{{ site.baseurl }}/media/posts/2015/01/zoom11.png" alt="zoom11" /><a href="{{ site.baseurl }}/media/posts/2015/01/zoom11.png"><br />
</a>We tried a bunch of different fonts for the map (e.g., <a title="Cochin" href="http://www.fonts.com/font/linotype/cochin">Cochin</a>, <a title="Magneta" href="https://typekit.com/fonts/magneta">Magneta</a>, <a title="Playfair" href="http://www.google.com/fonts/specimen/Playfair+Display">Playfair</a>, <a title="Essay" href="https://typekit.com/fonts/essay-text">Essay</a>) and settled on <a title="Latienne Pro" href="https://typekit.com/fonts/latienne-pro">Latienne Pro</a> in the end. It's not quite as high contrast as some of the others, but thicker strokes help it hold up well at smaller sizes on screen. And its available on <a href="https://typekit.com/fonts">TypeKit</a>!<a href="{{ site.baseurl }}/media/posts/2015/01/z11.png"><br />
</a></p>
<p class="p1"><img class="aligncenter size-full wp-image-2014" src="{{ site.baseurl }}/media/posts/2015/01/latiennePro.png" alt="latiennePro" /></p>
<p class="p1">The color palette we arrived at is made up of mostly desaturated colors that become even more so when made semi-transparent on our light-colored background, as is the case with the national parks (green) and urban areas (yellow) on the map.</p>
<p class="p1"><img class="aligncenter size-full wp-image-2015" src="{{ site.baseurl }}/media/posts/2015/01/colors.png" alt="colors" width="450" height="50" /></p>
<p class="p1">Finally, our background texture was made using scanned images of folded paper and cardboard. After a good bit of trial and error, we worked up a seamless version of the image in Photoshop that could be repeated throughout the map.<a href="{{ site.baseurl }}/media/posts/2014/12/texture.png"><img class="aligncenter wp-image-1965 size-large" src="{{ site.baseurl }}/media/posts/2014/12/texture.png" alt="texture" width="660" height="660" /></a></p>
