---
layout: post
nav: Blog
status: publish
published: true
title: ImagineRio and the Evolution of a Map Interface
author:
  display_name: Ben Sheesley
  login: ben
  email: ben@axismaps.com
  url: ''
date: '2018-02-26 00:00:00 +0100'
date_gmt: '2018-02-26 00:00:00 +0100'
categories:
- Cartography
- Design
tags:
- Layout
- Look and Feel
comments: []
project: imagineRio, instituteRice, diverseLevant
---

ImagineRio is a big digital humanities project that we helped produce with Rice University. It tracks changes in the evolution of Rio de Janerio over the past 500 years. Coastlines move, streets and buildings come and go, marshes are drained, aqueducts and canals are built… it’s all there in amazing detail. In addition, iconography, photos, drawings, historical maps, and urban projects and plans give a sense of what Rio looked like and how it imagined itself over the years.

This was a large undertaking when we started working on it nearly 5 years ago. A system needed to be developed that could handle vast quantities of spatial and temporal data, a map and interface needed to be designed and built, and all that data needed to be collected and produced in the first place (by a team of amazing students and faculty at Rice). We’re very pleased with how it all turned out, but when the opportunity arose this past year to do the same thing for Rice University campus and then again for Beirut, Lebanon, the project naturally underwent some design changes.

### Design Evolution

Having applied the project idea to three different places, it’s hard not to look back and examine how the design evolved. What changed, and why? There isn’t space to discuss everything, but we can at least look at some examples of the kinds of changes that took place. They tend to fall into two main areas: 1) interface look and feel, and 2) interface layout. Generally speaking, we see big changes between Rio and Rice, and smaller changes between Rice and Beirut. This isn’t too surprising given that Rio was produced first, and its success lead to envisioning the other two applications almost simultaneously, with their design and development happing in close succession last year.

### Interface Look and Feel

Look and feel often follows trends found on apps and sites across the Web that naturally shift over time. That’s why it’s not uncommon to look back at an old project, cringe, and wonder why in the world you added all those gross color gradients, drop shadows, and chunky icons to everything in the user interface. On the flip side, look and feel can give a project its own unique identity, which can factor into people connecting with it, remembering it, and returning to it over time.

In the Rio project, we were going for a clean, modern look and feel. At the time, this meant doing things like the following, most of which are fairly common practice:

1. **Maximizing map space.** We talked about wanting to make the map as immersive feeling as possible on a flat computer screen. One way to approach this was simply to allow it to fill the entire browser window. Even some interface elements that might otherwise have obscured the map, such as the header and timeline areas, were made semi-transparent, allowing the map to be seen through them. We figured that by making more of the map visible, users would more likely become immersed in what it shows.
2. **Interface and basemap colors.** We chose grayscale colors for interface components so they would not draw attention away from the basemap, which was our focal point. We went all in, assigning white and gray values to every panel, button, text, highlight, and hover state color. The basemap was colorful in contrast, but not too colorful. It consisted of a mostly of flat, desaturated palette of earthy tones. Generally speaking, colors were chosen to look natural and not feel out of place or time, whether mapping the year 1500 or 2015.
3. **Font selection.** Not surprisingly, given our design goals, we chose modern san-serif fonts, like Helvetica and Arial, for the basemap and interface because of their clean, smooth and organized look and feel. On one hand these fonts tend to lack much of a unique personality, but on the other they avoid drawing undue attention to themselves. Much like our color selections, we wanted to avoid fonts that made a strong statement, but rather were functional and legible.

When we began work on Rice our goal again was a fresh, clean and modern look and feel. However, it being the second application of the project, and knowing that a third was on the way, the idea of instilling some unique identity into the map was a bigger factor than before. Three almost identical, Rio-esque implementations ran the risk of being not only somewhat boring, but potentially causing confusion for map users, as well as being a challenge for those seeking to promote them as individual products. Rice, and Beirut soon after, needed their own look and feel, something contemporary and modern but at the same time noticeably different from each other and Rio. This resulted in a couple of changes, such as:

1. **Updated splash screen.** In Rio, the splash screen mainly consisted of a large project title and “View the map” button. The redesign for Rice and Beirut included these, but also an introduction to the maps with descriptive text, defined jumping off points, and a preview of the basemaps themselves. First impressions are important. As successful as Rio was, we knew that a more meaningful, positive first impression when arriving at the Rice and Beirut applications could point to their quality and sophistication, as well as set expectations that could encourage map use.
2. **Interface colors.** Like Rio, a lot of grayscale was applied to the Rice and Beirut interfaces, with one notable exception. A unique accent color was assigned to each, serving to brand the maps and signify a difference between them. For Rice, blue was chosen from a set of client branding materials and then incorporated into the timeline, buttons, text and map highlighting. Beirut followed suit with its own accent color, pink. 
3. **Interface shapes.** The Rice and Rio interfaces differ in some more subtle ways as well. For example, in Rice circular buttons and circular thumbnail images are used throughout, whereas in Beirut, these same elements are styled as rounded rectangles. Yes, it’s a small difference, but small changes can add up and help reinforce the unique identity of each map.
4. **Custom basemaps.** Not strictly an interface element, but a basemap can be a strong identifying element itself. Who doesn’t recognize the Google basemap when they see it? While a single accent color can be associated with a brand, so can many small stylistic elements used in combination. In Rice and Beirut, rather than using the same basemap styles as in the Rio, we created new custom styles for each. The Rice basemap borders on realism, mostly because of an amazing tree dataset that was provided, but also due to the use of more saturated natural colors, textures, and shadows (on everything from roads, buildings, and trees). The Beirut basemap on the other hand was inspired by a historical map that appears as an overlay in the project itself, borrowing its pale color palette, yellow roads and pink buildings.


### Interface Layout

Layout is a balancing act. The various elements of a map all need to be worked into a browser window to create something that’s useful and usable, but also engaging and aesthetically pleasing. Obviously, there are many questions to consider. For example, where do people normally expect to see a given element positioned in the interface, like a search bar or zoom controls? Where should a given feature be located so that it is easily found and used? Conversely, can a given feature be buried or hidden behind an additional click? The balancing act begins when interface elements start competing for space and attention and compromises are necessary for everything to work together.

While designing Rio, our intention was, of course, to follow interface conventions and user expectations, prioritize important tasks, and make the map as engaging and easy too use as possible. In some ways, we were successful and in others we left room for improvement. Here are a few of the layout decisions we dealt with:

1. **Title area.** We clearly felt that the map title should feature prominently above the map! Looking back, it’s possible that a smaller title, or no title at all, would have served better, especially given that the title appears on a preceding splash screen. However, the large title area did provide ample room for a group of circular buttons needed for sharing, downloading, getting more information, etc. And the area's semi-transparent background did mitigate its oversize design, somewhat.
2. **Navigation bar.** In Rio, navigating through time was perhaps the number one user task, which led us to position the timeline and date stamp directly above the map near the top of the page where it was easy to see and access. The timeline was also flanked by a dropdown selection menu and a search input box. Although these cut down space for the timeline on either side, we felt that since they were all related, it was more important to group them together in a single area. (Search, for example, acts on map features in the currently selected year only—not all years.) In retrospect, it’s likely that our users weren’t making that kind of connection and grouping these feature was less important than we thought.
3. **Map legend controls.** The idea here was to not only help identify map features, but also provide a space for some GIS-ish layer controls. The visibility of geographic features can be toggled on and off and groups of features can be highlighted on the map via the legend. Historical map images, shown as thumbnails in the legend, can similarly be toggled on and off. Given the volume of content, we decided the legend would require a sidebar and that users ought to be able to collapse or expand it as they wish. Generally speaking, we felt that this kind of layer control and map customization was very important for understanding and using the map. Important enough to merit displaying the legend in its expanded state on first load, thereby drawing attention to it immediately.

The Rio layout underwent various amount of change when Rice and Beirut were designed. The biggest changes were driven by new thoughts about what was important for users to see and do with the map, as well as what aspects of the content were seen as most engaging. Some smaller changes were also made that attempted make better use of map and interface spaces.

1. **Image browser.** Probably the most substantial layout change stemmed from the decision to prioritize viewing historical iconography over customizing the main map via the legend controls. Iconography included photos, drawings, sketches and other views of the region that helped tell the story of change over time. In Rio, iconography was somewhat hidden behind points on the map, visible only when hovering the mouse over them. This made accessing it somewhat difficult and browsing it very slow and tedious. In Rice and Beirut a new, separate panel for browsing iconography was added along the bottom of the map in the form of an thumbnail filmstrip, not unlike the image filmstrip in Goolge Maps. Clicking on a thumbnail focuses the map on the location where it originated and opens it at a larger size. With the new emphasis on iconography, it made sense that the image browser panel would be expanded when users first arrive at the map, rather than the legend.
2. **Data probing upgrade.** In Rio, two stage data-probing provided users with a thumbnail image when hovering the mouse on map points and then a much larger, light-boxed image when clicking on a point. In Rice and Beirut, we sought to improve on this by adding a third, middle stage which included a medium-sized image. When clicking on a map point in Rice or Beirut, instead of entering a lightbox, a medium-sized image appears above the map anchored to the upper right corner, with the associated point on the map positioned next to it. This was intended to limit the amount of work it takes to enter and exit a lightbox and encourage more rapid exploration while displaying images at a modest size. In addition to this, the Beirut map alone includes step buttons with the middle stage data probe, giving users the ability to skip directly from one point-image pair to the next, in what feels a bit like taking a tour of the map. Like the image browser, this upgrade was driven by the prioritization of viewing historical iconography as a primary map use task.
3. **Revised header layout.** This space was condensed and re-structured in Rice and Beirut to make better use of space. By removing the large map title, we were able to reduce the height of the header, leaving more space for the map below. In addition, instead of the search input and timeline competing for horizontal space, as they had in Rio, search was moved up into a more conventional position in the top right corner, giving the timeline some  extra needed width. The date stamp, perhaps the most helpful way to stay temporally oriented, was shifted to the top left edge, a top priority location and one where it would likely be seen ahead of everything else. Finally, the grouping of circular buttons was reduced in size and a few new buttons were added that relate to some new features. We ended up finding plenty of room for more things in a smaller amount of space.


A few lessons learned from all this rambling:

Layout is directly impacted by what is important to see and/or do with a map. If the importance of things in a project changes over time, it’s likely that new layout decisions will also need to be made. The simple question, “How important is this?”, should be asked over and over when laying out a new project.

Of course, small ways of changing a layout to make better use of space always seem to pop up over time.

A modern, clean, look and feel can mean many different things. This was the goal in both Rio and Rice/Beirut, yet they are very different from one another.

Accent color and the shape of components can be a good way of distinguishing related projects that contain similar user interfaces.

Tip: accent colors can also be a great way to signify big changes within a single map, like switching into and out of map modes.

There are also more challenging, but valuable, ways to create a unique identity for a map, such as by designing a custom basemap.

Don't overthink it.
