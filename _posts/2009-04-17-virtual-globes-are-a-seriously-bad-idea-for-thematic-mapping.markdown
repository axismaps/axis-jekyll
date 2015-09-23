---
layout: post
status: publish
published: true
title: Virtual Globes are a seriously bad idea for thematic mapping
author:
  display_name: Mark Harrower
  login: mark
  email: mark@axismaps.com
  url: http://www.geography.wisc.edu/~harrower/
author_login: mark
author_email: mark@axismaps.com
author_url: http://www.geography.wisc.edu/~harrower/
wordpress_id: 341
wordpress_url: http://www.axismaps.com/blog/?p=341
date: '2009-04-17 09:22:05 +0100'
date_gmt: '2009-04-17 14:22:05 +0100'
categories:
- Cartography
tags:
- Google Earth
- 3D
- thematic maps
- prism maps
- digital globes
- virtual earth
---
<p class="MsoNormal"><a href="http://earth.google.com" target="_blank">Google Earth</a> is amazing. As we've commented here before, it continues to blow our minds and has also done wonders for the popularity of maps. And let's be honest, it looks super cool. There is no doubt that Google Earth is much sexier than that boring old atlas collecting dust on your shelf: It's interactive, seamlessly integrates distributed data sources, animates the surface of the earth over time, facilities virtual communities, can be customized by both developer and user, etc, etc. It's hard to not be impressed.</p>
<p class="MsoNormal"><em>So all of our maps should be in Google Earth, right?</em></p>
<p class="MsoNormal"><strong>Wrong. </strong></p>
<p class="MsoNormal">In fact, <a href="http://blog.thematicmapping.org" target="_blank">despite recent efforts</a> to create a suite of thematic mapping approaches, Google Earth is a terrible environment for presenting many kinds of thematic maps. I'd go so far as to say that the 3D prism maps and 3D graduated symbol maps we see popping up in Google Earth are <a href="http://en.wikipedia.org/wiki/Chartjunk" target="_blank"><strong>pure chart junk</strong></a>, of the kind <a href="http://www.edwardtufte.com/tufte/">Tufte</a> warned us about repeated for past 25 years.</p>
<p class="MsoNormal">
<p>[caption id="attachment_342" align="aligncenter" width="525" caption="3D prism map in Google Earth (blog.thematicmapping.org)"]<img class="size-full wp-image-342 " title="prismmap" src="http://www.axismaps.com/blog/wp-content/uploads/2009/04/prismmap.jpg" alt="3D prism map of population in Google Earth" width="525" height="360" />[/caption]</p>
<p class="MsoNormal">
<p class="MsoNormal">
<p>[caption id="attachment_343" align="aligncenter" width="525" caption="3D human figures as proportional symbols (blog.thematicmapping.org)"]<img class="size-full wp-image-343 " title="humanfigures" src="http://www.axismaps.com/blog/wp-content/uploads/2009/04/humanfigures.jpg" alt="3D human figures as proportional symbols" width="525" height="346" />[/caption]</p>
<p class="MsoNormal"><strong>CHART JUNK</strong></p>
<p class="MsoNormal" style="padding-left: 30px;">Chart junk takes what should have been a simple-to-read graphic and makes extracting information (1) slower, (2) more difficult, and (3) more prone to reading errors, because of excessive ornamentation and unnecessary design additionsâ€”like adding a 3D effect that communicates nothing in and of itself but simply "looks cool." This is not idle speculation: Research consistently shows chart junk and "redundant ink" hurt otherwise fine graphics.</p>
<p class="MsoNormal" style="padding-left: 30px;">Want to see for yourself? Download these two example KML/KMZ files from blog.thematicmapping.org and run them in Google Earth. While you're looking at them try to extract numbers or compare places: <a href="http://thematicmapping.googlepages.com/polygon_hole_problem.kml" target="_blank">KMZ File 1</a> |  <a href="http://thematicmapping.googlepages.com/population_2005_collada_people.kmz" target="_blank">KML File 2</a></p>
<p class="MsoNormal">
<p class="MsoNormal"><strong>"BUT THEY LOOK COOL": A TECHNOLOGY IN SEARCH OF A PROBLEM </strong></p>
<p class="MsoNormal" style="padding-left: 30px;">As Abraham Maslow said, "If the only tool you have is a hammer, you will see every problem as a nail." This seems to be the case with virtual globes and the developers who love them and insist that any and all kinds of thematic data belong there. Instead, I'd challenge us to take a step back and ask,</p>
<p class="MsoNormal" style="text-align: center; padding-left: 30px;"><em>WHY DO WE MAKE THEMATIC MAPS?</em></p>
<p class="MsoNormal" style="text-align: left; padding-left: 30px;">For a long time folks like Robinson, Dent, and MacEachren have been arguing that thematic maps exist to support two basic tasks: (1) the ability to extract numbers/facts about specific places (e.g., 15C in Paris) and (2) the ability to judge those values in geographic relation to other places (e.g., 5C warmer than London, about the same as Milan). In other words, we want both <strong><em>specific details</em></strong> and <strong><em>overall patterns</em></strong> to be obvious on our thematic maps. And we want all of that AT A GLANCE.</p>
<p class="MsoNormal" style="text-align: left; padding-left: 30px;">The problem with digital globes (as with all globes) is you can't see half the planet and, due to curvature, really only about a 1/3 of the planet clearly at once. Which leaves us with a conundrum: If you're only mapping a small place (e.g., a country), why do you need to have it on a globe? And if you have a global dataset, why would you allow your readers to only ever see ½ the data at once? They can rotate the globe (more on this later) but they'll never be able to see the entire dataset at once. <strong>That makes understanding overall patterns very difficult</strong>, and asking folks to "remember" half of a global dataset while they spin the globe to the other side is far, far beyond the meager limits of our <a href="http://en.wikipedia.org/wiki/Working_memory" target="_blank">working memory</a>. If you're not convinced, just try it.</p>
<p class="MsoNormal" style="text-align: left;">
<p><strong>KNOW YOUR HISTORY</strong></p>
<p style="padding-left: 30px;">What makes these recent developments even more frustrating is that in the 70s and 80s, with the advent of digital map making, cartographers flirted with, and largely rejected, faux 3D prism maps and 3D graduated symbol maps (like the two examples above) since they suffered from several limits:</p>
<ol style="text-align: left; padding-left: 30px;">
<li>
<ol style="text-align: left; padding-left: 30px;">
<li><strong>visual occlusion</strong> (not all of the map can be seen at once since some places hide others)</li>
<li><strong>people suck at estimating volumes</strong>, especially of complex shapes (e.g., try estimating the size of moving van you'll need for your home)</li>
<li><strong>mental rotation of complex shapes is extremely hard</strong>, so hard that it is often used as a measure of intelligence in IQ tests.</li>
</ol>
</li>
</ol>
<p class="MsoNormal" style="text-align: left; padding-left: 30px;">Many a thesis and dissertation was written in the past 40 years demonstrating these limits to human visual processing.</p>
<p class="MsoNormal" style="text-align: left; padding-left: 30px;">The nice thing about Virtual Earths is that you can rotate them, so the problem of visual occlusion is solved, right? Yes and no. Yes, interactivity and the ability to rotate the globe can help reveal hidden places, but no, these virtual globes introduce a <a href="http://en.wikipedia.org/wiki/Cognitive_load" target="_blank">significant extraneous cognitive load</a> because the user must now think about controlling the globe (not always easy with a mouse) while also trying to focus on the thematic content. In fact, adding a complex task, like visually acquiring the Google Earth controls and then trying to figure out how to move/scale/reposition the globe between two other tasks effectively <strong>"flushes" short-term working memory</strong>. It's a kind of mental sorbet, which is why giving folks something distracting to do is a common trick in memory tests (they lose their train of thought). <em>Why would we deliberately do this to our map-readers?</em></p>
<p><strong>BIG PROBLEM: INCONSISTENT SCALE</strong></p>
<p style="padding-left: 30px;">In the examples above it is really hard to judge relative sizes. Why? Because <strong>the scale of the symbols is constantly changing</strong>, and the ones closer to the viewer are much larger (and at a different scale) than the ones far away. Given that it has been long established in cartography that people are terrible at estimating sizes, and even worse at estimating volumes, it is utterly inane to compound this failure by drawing the symbols at different scales. Of course it is worse than this: Rotating the globe slides each symbol through its own scale transformation path, changing in size with every pixel the maps are moved.</p>
<p style="text-align: left; padding-left: 30px;"><strong>This is an absolute rule:</strong> <em>If you want to give people the best chance to judge the relative sizes of objects, they should all be drawn at the same scale.</em></p>
<p><strong>STILL NOT CONVINCED? LET'S DO SOME USER TESTING</strong></p>
<p><strong> </strong></p>
<p>[caption id="attachment_347" align="aligncenter" width="525" caption="Judging height is critical to the success of this map, yet most heights are obscured"]<strong><strong><img class="size-full wp-image-347  " title="nepalquiz" src="http://www.axismaps.com/blog/wp-content/uploads/2009/04/nepalquiz.jpg" alt="Judging height is critical to the success of this map, yet most heights are obscured" width="525" height="418" /></strong></strong>[/caption]</p>
<p style="padding-left: 30px;"><strong>TASK #1: </strong>As quickly as you can, how does Nepal compare to Uzbekistan? <strong><br />
TASK #2: </strong>As quickly as you can, find all of the other places on the map similar to Nepal? Which place is most similar? Which one least?<strong> </strong></p>
<p style="padding-left: 30px;"><strong> </strong>Hard, isn't it? To be honest, it shouldn't be: A regular 2D classed choropleth map or proportional symbol map would make short work of those questions. So what did we gain by extruding the countries up into space? Not much that I can see.<strong><br />
</strong></p>
<ol style="padding-left: 30px;">
<li>
<ol style="padding-left: 30px;">
<li>The Lack of a zero-line referent makes it hard to judge absolute magnitudes.</li>
<li>The "fish eye lens" effect mean each prism is viewed from a different angle than its neighbors, making comparison just a little bit harder as we have to mental account for these differences in our estimates.</li>
<li>It is hard to judge the height of something when you are staring directly down at it. This matters because height is the visual variable that does the "work" in this graphicâ€”it's how the data are encoded visually. Why obscure the very thing map-readers need to make sense of the graphic (e.g., the side-view height of each polygon)?</li>
</ol>
</li>
</ol>
<p><strong>SOLUTIONS?</strong></p>
<p style="padding-left: 30px;">I need to be convinced of two things: (1)  something is fundamentally wrong with our proven and highly efficient planimetric thematic maps, and (2) that reprojecting this data onto a virtual globe somehow solves those problems. Otherwise, we truly have a cool new technology in search of an application, and that's just putting the cart before the horse.</p>
<p style="padding-left: 30px;"><strong>Some suggestions:</strong> First, unless the 3rd dimension communicates something and isn't merely redundant data already encoded in the colors, sizes, etc., do not include it (for all the reasons outlined above). Second, if you want folks to perform "analytical map reading tasks" such as estimating relative sizes, distances, or densities, keep scale constant. Third, do not obscure parts of the map behind other parts if that isn't inherently relevant to the data (e.g., this is fine for terrain visualization). Fourth, and most importantly, do some user testing before presenting a new technique as the best thing ever: It's how research works and why it is important.</p>
<p style="padding-left: 30px;"><strong>So what things are Google Earth (and other Virtual Globes) good for?</strong> The consensus around here is<strong> (1)</strong> to engender, quite powerfully at times, a qualitative "sense of place" or "immersion"; <strong>(2)</strong> for virtual tourism (e.g., sit on top of Mt Everest) or virtual architecture/planning; and <strong>(3)</strong> to perform a kind of viewshed analysis and see what can and cannot be seen from locations (line-of-sight). All of those are inherently 3D-map reading tasks in which the immersive, 3D nature of the map is important. By comparison, population data (one number per country) is NOT inherently 3-dimensional and is only made to suffer when dressed-up in prism maps and 3D figurines.</p>
<p style="padding-left: 30px;">Cartography, like all good design, is about communicating the maximum amount of information with the least amount of ink (or pixels). The world is just too complex and interesting to be wasting our ink/pixels on non-functioning ornamentation.</p>
<p class="MsoNormal" style="text-align: left;">
<p><!--EndFragment--></p>
