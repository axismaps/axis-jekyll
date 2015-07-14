---
layout: post
status: publish
published: true
title: Mass Observation Basemap
author:
  display_name: Ben Sheesley
  login: ben
  email: ben@axismaps.com
  url: ''
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
---
<p class="p1">We recently worked on a project with <a title="Adam Matthew Digital" href="http://www.amdigital.co.uk/">Adam Matthew Digital</a> mapping British diarists in the UK who wrote during the first half of the 20th century. Most of the 500+ entries deal with observations about the impact of WWIIÂ on everyday life.Â  The map allows users to search and filter diarists by gender and date of birth or view them in smaller groupings by theme (e.g., â€œPolitical Opinionsâ€, Women in Wartimeâ€, â€œLondon During the Blitzâ€). Brief bios and excerpts from the diaries themselves are also viewable, as shown in the screenshot of the interface below:</p>
<p class="p1"><img class="aligncenter size-full wp-image-2010" src="http://www.axismaps.com/blog/wp-content/uploads/2015/01/Mass_Observation.png" alt="Mass_Observation" width="907" height="480" /></p>
<p class="p1">One of the fun challenges of the project was designing a tiled basemap that resembles other maps from the time period in terms of look and feel. We needed something that would help set the tone and mood for the project without using an actual historical map made inÂ the 1940s. Although weâ€™ve used actual historical maps forÂ <a href="http://www.axismaps.com/project.php#cap"><span class="s1">other projects</span></a>, in this case doing so would have causedÂ too many accuracy issues around the locations of theÂ diarists. Instead we turned to TileMill, where we brought together modern-day data from OpenStreetMap, the Ordnance Survey, and Natural Earth and applied our own design.</p>
<p class="p1"><img class="aligncenter size-full wp-image-2013" src="http://www.axismaps.com/blog/wp-content/uploads/2015/01/mo_animation.gif" alt="mo_animation" width="700" height="450" /></p>
<p class="p1">After spending some timeÂ online browsing maps made inÂ 1930s-40s England and the UK, such as those out of the British Ordnance Survey, weÂ narrowed down a fewÂ of the salient design elementsÂ we found. Of course, we saw a lot of variability, but typography seemed to haveÂ one of the greatestÂ impacts in terms ofÂ evoking the look and feel we wanted. Serif fonts with good contrast between thick and thin strokes were common, as was the liberal use of italic for map labels. Map symbol colors were similarly impactful. TheyÂ ranged across the spectrum butÂ were generally desaturated and flat onÂ light-colored backgrounds (very few gradients, glows, drop-shadows or other effects). We took note of a few otherÂ elements too, like line weights, which tended to be thin (not overly chunky), and line styles, which varied greatly--we found all kinds of dashes, dots and dash-dot combinations.</p>
<p class="p1">One other element having aÂ big impactÂ on look and feelÂ was the paper the mapsÂ were printed on. Textures in the maps gave the impression ofÂ something old and used. TheyÂ also added a tangible and personal quality, which seemed aÂ perfect fit forÂ our map of diary entries. Of course, tiled basemaps withÂ textures that look worn or folded are not newÂ  (e.g., Â <a title="Geography Class" href="http://a.tiles.mapbox.com/v3/mapbox.geography-class/page.html#4/0.00/0.00">Geography Class</a>Â map) but we couldn't resist makingÂ a version ofÂ our own since it seemed so applicableÂ forÂ this project. Here is a closer look at theÂ paper texture at zoom levels 9-11:</p>
<p class="p1"><img class="aligncenter wp-image-2024 size-full" src="http://www.axismaps.com/blog/wp-content/uploads/2015/01/zoom9.png" alt="zoom9" width="700" height="450" /><img class="aligncenter wp-image-2023 size-full" src="http://www.axismaps.com/blog/wp-content/uploads/2015/01/zoom10.png" alt="zoom10" width="700" height="450" /><img class="aligncenter wp-image-2022 size-full" src="http://www.axismaps.com/blog/wp-content/uploads/2015/01/zoom11.png" alt="zoom11" width="700" height="450" /><a href="http://www.axismaps.com/blog/wp-content/uploads/2015/01/zoom11.png"><br />
</a>We tried a bunch of different fonts for the map (e.g., <a title="Cochin" href="http://www.fonts.com/font/linotype/cochin">Cochin</a>, <a title="Magneta" href="https://typekit.com/fonts/magneta">Magneta</a>, <a title="Playfair" href="http://www.google.com/fonts/specimen/Playfair+Display">Playfair</a>, <a title="Essay" href="https://typekit.com/fonts/essay-text">Essay</a>) andÂ settled on <a title="Latienne Pro" href="https://typekit.com/fonts/latienne-pro">Latienne Pro</a>Â in the end. It's not quite as high contrast as some of the others, but thicker strokes helpÂ it hold up well at smaller sizes on screen. And its available on <a href="https://typekit.com/fonts">TypeKit</a>!<a href="http://www.axismaps.com/blog/wp-content/uploads/2015/01/z11.png"><br />
</a></p>
<p class="p1"><img class="aligncenter size-full wp-image-2014" src="http://www.axismaps.com/blog/wp-content/uploads/2015/01/latiennePro.png" alt="latiennePro" width="518" height="218" /></p>
<p class="p1">The color palette we arrived at isÂ made up of mostly desaturated colors thatÂ become even more so when made semi-transparent on our light-colored background, as is the case with the nationalÂ parksÂ (green) and urban areas (yellow) on the map.</p>
<p class="p1"><img class="aligncenter size-full wp-image-2015" src="http://www.axismaps.com/blog/wp-content/uploads/2015/01/colors.png" alt="colors" width="450" height="50" /></p>
<p class="p1">Finally, our backgroundÂ texture was made using scanned images of folded paper and cardboard. After a good bit of trial and error, we worked up a seamless version of the image inÂ Photoshop that could be repeated throughout the map.<a href="http://www.axismaps.com/blog/wp-content/uploads/2014/12/texture.png"><img class="aligncenter wp-image-1965 size-large" src="http://www.axismaps.com/blog/wp-content/uploads/2014/12/texture-1024x1024.png" alt="texture" width="660" height="660" /></a></p>
