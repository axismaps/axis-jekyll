---
layout: post
nav: Blog
status: publish
published: true
title: Design Evolution of the ImagineRio Map
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

[ImagineRio](http://imaginerio.org/) is a big digital humanities project that we helped produce with Rice University. It tracks changes in the development of Rio de Janerio over the past 500 years. Coastlines move, streets and buildings come and go, marshes are drained, aqueducts and canals are built… it’s all there in amazing detail. In addition, iconography, photos, drawings, historical maps, and urban projects and plans give a sense of what Rio looked like and how it imagined itself over the years.

![Overview of ImagineRio map]({{ site.baseurl }}/media/posts/2018/02/rio_overview.png)

This was a large undertaking when we started working on it nearly 5 years ago. A system needed to be developed that could handle vast quantities of spatial and temporal data, a map and interface needed to be designed and built, and all that data needed to be collected and produced in the first place (by a team of amazing students and faculty at Rice). We’re very pleased with how it all turned out, but when the opportunity arose this past year to do the same thing for Rice University campus with a map called instituteRice and then again for Beirut, Lebanon, with a map called diverseLevant, the project underwent some changes, mostly on the design side of things.

### Design Evolution

Having now applied the concept to three different places, it’s tempting to look back and examine how the design evolved. What changed, and why? There isn’t space to discuss everything, but we can at least look at some examples of the kinds of changes that took place. Generally speaking, they fall into two main areas: 1) interface look and feel, and 2) interface layout. Bigger changes took place between imagineRio and institiuteRice, and smaller changes between instituteRice and diverseBeirut. This isn’t too surprising given that imagineRio was produced first, and its success lead to envisioning and development the other two applications in quick succession.

### Look and Feel

The look and feel of an map interface is often connected to trends and styles found on other apps and sites across the Web. These naturally shift over time, which is why it’s not uncommon to look back at an old project, cringe, and wonder why in the world you used all those gross color gradients, drop shadows, and chunky icons. On the flip side, look and feel can imbue a project with its own unique identity, which can factor into people connecting with it, remembering it, and returning to it over time.

With ImagineRio, we were going for a clean, modern, contemporary look and feel. At the time, this meant doing things like the following:

1. **Maximizing map space.** We talked about wanting to make the map as immersive feeling as possible on a flat computer screen. One way to approach this was simply to allow it to fill the entire browser window. Even some interface elements that might otherwise have obscured the map, such as the header and timeline areas, were made semi-transparent, allowing the map to be seen through them. We figured that by making more of the map visible, users would more likely become immersed in what it shows.
2. **Interface and basemap colors.** We chose grayscale colors for interface components so they would not draw attention away from the basemap, which was our focal point. White and gray values were assigned to every panel, button, text, highlight, and hover state. The basemap was intended to be colorful in contrast, but not _too_ colorful. It consists of a mostly of flat, desaturated palette of earth tones. We wanted colors to look natural and not feel out of place or time, whether mapping the year 1500 or 2015.
3. **Font selection.** To stay in line with our goals, we chose modern san-serif fonts, like Helvetica and Arial, for their legibility as well as their clean, smooth and organized look and feel. On one hand they tend to lack much of a unique personality, but on the other they avoid drawing undue attention to themselves. Much like our color selections, we wanted to avoid fonts that made _too_ strong of a statement.

![ImagineRio look and feel]({{ site.baseurl }}/media/posts/2018/02/rio_styles.png)

When we began work on instituteRice our goal again was a fresh, clean and modern look and feel. However, it being the second application of the project, and knowing that a third was on the way, the idea of instilling some unique identity into the map was a bigger factor than before. Three almost identical, imagineRio-esque implementations ran the risk of being not only somewhat boring, but potentially causing confusion for map users, as well as being a challenge when it comes to promoting them as separate products. InstituteRice, and deiverseLevant soon after, needed their own look and feel, something contemporary and modern but at the same time noticeably different from each other and imagineRio. This resulted in some design changes, such as:

1. **Updated splash screen.** In imagineRio, the splash screen mainly consisted of a large project title and “View the map” button. The redesign for instituteRice and diverseLevant included these, but also an introduction to the maps, defined jumping off points, and a preview of the basemaps themselves. First impressions are important. As successful as imagineRio was, we knew that a more meaningful, positive first impression when arriving at instituteRice and diverseLevant could reflect their quality and sophistication, as well as set expectations that might encourage map use.

    ![ImagineRio and instituteRice splash screens]({{ site.baseurl }}/media/posts/2018/02/splash_screens.gif)

2. **Interface accent colors.** Like imagineRio, a lot of grayscale was applied to the instituteRice and diverseLevant interfaces, with one notable exception. A unique accent color was assigned to each, serving to brand the maps and signify a difference between them. For institueRice, blue was chosen from a set of client branding materials and then incorporated into the timeline, buttons, text and map highlighting. DiverseLevant followed suit with its own accent color, pink. 

    ![instituteRice and diverseLevant accent colors]({{ site.baseurl }}/media/posts/2018/02/accent_colors.gif)

3. **Interface shapes.** The instituteRice and diverseLevant interfaces differ in some more subtle ways as well. For example, in instituteRice circular buttons and circular thumbnail images are used throughout, whereas in diverseLevant, these same elements are styled as rounded rectangles. Yes, it’s a small difference, but small changes can add up and help reinforce the unique identity of each map.
4. **Custom basemaps.** Not strictly an interface element, but a basemap can be a strong identifying element itself. Who doesn’t recognize the Google basemap when they see it? While a single accent color can be associated with a brand, so can many small stylistic elements used in combination. In instituteRice and diverseLevant, rather than using the same basemap styles as in the imagineRio, we created new custom styles for each. The instituteRice basemap borders on realism, mostly because of an amazing tree dataset that was provided, but also due to the use of more saturated natural colors, textures, and shadows (on everything from roads, buildings, and trees). The diverseLevant basemap on the other hand was inspired by a historical map that appears as an overlay in the project itself, borrowing its pale color palette, yellow roads, and pink buildings, and even mimicking its hand-lettered labels with our choice of font. A significant departure from imagineRio!

    ![Basemap examples]({{ site.baseurl }}/media/posts/2018/02/basemaps.gif)

### Interface Layout

Layout is a balancing act. The various elements of a map all need to be worked into a browser window to create something that’s useful and usable and engaging. There are, of course, many factors to consider, relating to users, devices, a huge range of possible project-specific constraints, and others. In almost every project, as pieces begin to take shape and start competing for space and attention, compromises are necessary to balance it all together.

While designing imagineRio, we tried to prioritize important tasks in the layout, and make the map as engaging and easy too use as possible. In some ways, we were successful and in others we left room for improvement. Here are a few of the layout decisions we dealt with:

1. **Header and title area.** We clearly felt that the map title should feature prominently above the map! Looking back, it’s possible that a smaller title, or no title at all, would have served better, especially given that the title appears on a preceding splash screen. However, the large title area did provide ample room for a group of buttons needed for sharing, downloading, getting more information, etc. And the semi-transparent background did mitigate its oversize design, somewhat.
2. **Navigation bar.** Navigating through time was perhaps the number one user task, which led us to position the timeline and date stamp directly above the map near the top of the page where it was easy to see and access. The timeline was also flanked by a dropdown selection menu and a search input box. Although these cut down on space for the timeline, we felt that since they were all related, it was more important to group them together in a single area. (Search, for example, acts on map features in the currently selected year only—not all years.) In retrospect, it’s likely that our users weren’t making that kind of connection and grouping these feature was less important than we thought.
3. **Map legend controls.** It was decided early on that layer control and map customization were very important for understanding and using the map. Important enough to merit displaying the legend in its expanded state on first load, drawing attention to it right away. GIS-ish layer controls gave users the ability to toggle the visibility of geographic features and highlight groups of features via the legend. Historical map images, shown as thumbnails in the legend, can similarly be toggled on and off.

![imagineRio legend]({{ site.baseurl }}/media/posts/2018/02/rio_legend.png)

The imagineRio layout underwent a number of changes when adapted to instituteRice and diverseLevant. The biggest changes were driven by new thoughts about what was important for users to see and do with the map, as well as what aspects of the content were seen as most engaging. Some smaller changes were also made that attempted make better use of map and interface spaces.

1. **Image browser.** Probably the most substantial layout change stemmed from the decision to prioritize viewing historical iconography over customizing the main map via the legend controls. Iconography included photos, drawings, sketches and other views of the region that helped tell the story of change over time. In imagineRio, iconography was somewhat hidden behind points on the map, visible only when hovering the mouse over them. This made accessing it somewhat difficult and browsing it could be slow and tedious. In instituteRice and diverseBeirut a new, separate panel for browsing iconography was added along the bottom as a filmstrip of image thumbnails. Clicking on a thumbnail focuses the map on the location where it originated and opens it at a larger size. With the new emphasis on iconography, it made sense that the image browser panel would be expanded when users first arrive at the map, rather than the legend.

    ![instituteRice and diverseLevant image browsers]({{ site.baseurl }}/media/posts/2018/02/image_browsers.gif)

2. **Data probing upgrade.** In Rio, two stage data-probing provided users with a thumbnail image when hovering the mouse on map points and then a much larger, light-boxed image when clicking on a point. In Rice and Beirut, we sought to improve on this by adding a third, middle stage which included a medium-sized image. When clicking on a map point in Rice or Beirut, instead of entering a lightbox, a medium-sized image appears above the map anchored to the upper right corner, with the associated point on the map (and image view cone) positioned next to it. This was intended to limit the amount of work it takes to enter and exit a lightbox and encourage more rapid exploration while displaying images at a modest size. In addition to this, the Beirut map alone includes step buttons with the middle stage data probe, giving users the ability to skip directly from one point-image pair to the next, in what feels a bit like taking a tour of the map. Like the image browser, this upgrade was driven by the prioritization of viewing historical iconography as a primary map use task.

    ![instituteRice and diverseLevant data probes]({{ site.baseurl }}/media/posts/2018/02/data_probes.gif)

3. **Revised header.** This was condensed and re-structured in instituteRice and diverseBeirut to make better use of space. By removing the large map title, we were able to reduce the height of the header, leaving more space for the map below. In addition, instead of the search input and timeline competing for horizontal space, as they had in Rio, search was moved up into a more conventional position in the top right corner, giving the timeline some extra needed width. Finally, the date stamp, perhaps the most helpful way to stay temporally oriented, was shifted to the top left edge, a top priority location and one where it would likely be seen ahead of everything else. In the end, there was even plenty of extra space to add buttons for some new features.

We’re in the business of custom cartography, where each project is completely new and different. This was a somewhat unique experience in that three related maps were made on top of what was basically the same system and development framework. That left design as the main variable. Layout and look and feel changed significantly with instituteRice as some aspects of the design were prioritized differently and a fresh look and feel was needed after 5 years. We got more efficient between instituteRice and diverseLevant which shared interface designs much more closely, making for quicker and cheaper development time. Even so, our custom cartography instincts kicked in with custom basemaps and other small changes to the user interfaces that gave each of the later maps a distinctive look and feel.