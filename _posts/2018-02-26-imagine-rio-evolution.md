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
date: '2018-03-02 09:00:00 +0100'
date_gmt: '2018-03-02 09:00:00 +0100'
categories:
- Cartography
- Design
tags:
- Layout
- Look and Feel
comments: []
project: [imagineRio, instituteRice, diverseLevant]
---

[imagineRio](http://imaginerio.org/), produced with the Humanities Research Center at Rice University, is one of our most ambitious digital humanities projects. It tracks changes in the development of Rio de Janeiro over the past 500 years. It renders historically and spatially accurate maps combined with iconography, historical maps, and urban plans to give a sense of what Rio looked like and how it imagined itself from its first settlement to the modern day.

![Overview of ImagineRio map]({{ site.baseurl }}/media/posts/2018/02/rio_overview.png)

Powering imagineRio is _iRio_, a Node application that facilitates:

1. Data management and conversion from the shapefiles used by the Rice team to collect data and PostGIS where the data is eventually stored.
2. Tile rendering and caching with options to select the year and layer visibility.
3. An API to request metadata and vector data across the entire database.

When our friends at Rice wanted to launch 2 additional maps, it made sense to re-use the iRio platform; not only because the system was already built and tested, but also because their team was already familiar with the intricacies of the data required to power the map. With this knowledge and their existing best practices, they were able to quickly produce new datasets for new maps of the Rice University Campus in [instituteRice](http://instituterice.herokuapp.com/) and Beirut, Lebanon in [diverseLevant](https://diverselevant.herokuapp.com/).

### Design Evolution

Having now built 3 iterations of the same concept, it’s tempting to look back and examine how the design evolved. What changed, and why? Generally speaking, the changes fall into two main areas:

1. Interface look and feel
2. Interface layout

### Look and Feel

The look and feel of an map interface is often connected to trends and styles found on other apps and sites across the Web. These naturally shift over time, which is why it’s not uncommon to look back at an old project, cringe, and wonder why in the world you used all those gross color gradients, drop shadows, and chunky icons. Fashion aside, look and feel can imbue a project with its own unique identity, which can factor into people connecting with it and returning to it over time.

With ImagineRio, we were going for a clean, modern, contemporary look and feel. At the time, this meant doing things like:

1. **Maximizing map space.** We talked about wanting to make the map as immersive as possible on a flat computer screen and allow it to fill the entire browser window. Even some interface elements that might otherwise have obscured the map, such as the header and timeline areas, were made semi-transparent, allowing the map to be seen through.
2. **Interface and basemap colors.** We chose grayscale colors for interface components so they would not draw attention away from the map. White and gray values were assigned to every panel, button, text, highlight, and hover state. The basemap was intended to be more colorful than the UI, but not _too_ colorful. It consists of a mostly of flat, desaturated palette of earth tones. We wanted colors to look natural and not feel out of place or time, whether mapping the year 1500 or 2015.
3. **Font selection.** To stay in line with our design goals, we chose modern san-serif fonts, like Helvetica and Arial, for their legibility as well as their clean, smooth and organized look and feel. On one hand they tend to lack much of a unique personality, but on the other they avoid drawing undue attention to themselves. Much like our color selections, we wanted to avoid fonts that made _too_ strong of a statement.

![ImagineRio look and feel]({{ site.baseurl }}/media/posts/2018/02/rio_styles.png)

When we began work on instituteRice our goal again was a fresh, clean and modern look and feel. However, it being the second application of the project, and knowing that a third was on the way, the idea of instilling some unique identity into the map was a bigger factor than before. InstituteRice, and deiverseLevant soon after, needed their own look and feel, something contemporary and modern but at the same time noticeably different from each other and imagineRio. This resulted in some design changes, such as:

1. **Updated splash screen.** In imagineRio, the splash screen mainly consisted of a large project title and “View the map” button. The redesign for instituteRice and diverseLevant now include an introduction to the maps, a quick way to jump to defined points in time, and a preview of the basemaps themselves. _First impressions are important_. As successful as imagineRio is, we knew that a more meaningful, positive first impression when arriving at instituteRice and diverseLevant could reflect their quality and sophistication, as well as set expectations that might encourage map use.

    ![ImagineRio and instituteRice splash screens]({{ site.baseurl }}/media/posts/2018/02/splash_screens.gif)

2. **Interface accent colors.** Like imagineRio, grayscale colors were used in the instituteRice and diverseLevant interfaces, with one notable exception. A unique accent color was assigned to each, serving to brand the maps and signify a difference between them. For institueRice, blue was chosen from a set of client branding materials and then incorporated into the timeline, buttons, text and map highlighting. DiverseLevant followed suit with its own accent color, pink, selected from a significant historical map in the collection. 

    ![instituteRice and diverseLevant accent colors]({{ site.baseurl }}/media/posts/2018/02/accent_colors.gif)

3. **Interface shapes.** The instituteRice and diverseLevant interfaces differ in some more subtle ways as well. For example, in instituteRice circular buttons and circular thumbnail images are used throughout, whereas in diverseLevant, these same elements are styled as rounded rectangles. It’s a small difference, but small changes add up and help reinforce the unique identity of each map.
4. **Custom basemaps.** Not strictly an interface component, but a basemap can be a strong identifying feature itself. Who doesn’t recognize the Google basemap when they see it? While a single accent color can be associated with a brand, so can many small stylistic elements used in combination. In instituteRice and diverseLevant, rather than using the same basemap styles as in imagineRio, we created entirely new cartography for each. The instituteRice basemap borders on realism (thanks to an amazing tree dataset provided by the campus arborist), but also due to the use of more saturated natural colors, textures, and shadows. The diverseLevant basemap on the other hand was inspired by the historical map from which we drew an accent color, borrowing its otherwise pale color palette, yellow roads, and pink buildings, and even mimicking its hand-lettered labels with a strong font choice. A significant departure from imagineRio!

    ![Basemap examples]({{ site.baseurl }}/media/posts/2018/02/basemaps.gif)

### Interface Layout

Layout is a balancing act. The various elements of a map all need to be worked into a browser window to create something that’s usable and engaging. There are, of course, many factors to consider, relating to users, devices, and a huge range of possible project-specific constraints. In almost every project, as pieces begin to take shape and start competing for space and attention, compromises are necessary to balance it all together.

While designing imagineRio, we tried to prioritize important tasks in the layout. Here are a few of the layout decisions we dealt with:

1. **Navigation bar.** Navigating through time was perhaps the number one user task, which led us to position the timeline and date stamp directly above the map near the top of the page where it was easy to see and access. The timeline was also flanked by a dropdown selection menu and a search input box. Although these cut down on space for the timeline, we felt that since they were all related, it was more important to group them together in a single area. (Search, for example, acts on map features in the currently selected year only—not all years).
2. **Map legend controls.** It was decided early on that layer control and map customization were very important for understanding and using the map. GIS-ish layer controls, though not our favorite design pattern, gave users the ability to toggle the visibility of geographic features and highlight groups of features via the legend. Historical map images, shown as thumbnails in the legend, can similarly be toggled on and off.

![imagineRio legend]({{ site.baseurl }}/media/posts/2018/02/rio_legend.png)

The imagineRio layout underwent a number of changes when adapted to instituteRice and diverseLevant. The biggest changes were driven by new thoughts about what was important for users to see and do with the map, as well as what aspects of the content were seen as most engaging. Some smaller changes were also made that attempted make better use of map and interface spaces.

1. **Image browser.** Probably the most substantial layout change stemmed from the decision to prioritize viewing historical iconography over customizing the main map via the legend controls. In imagineRio, iconography was somewhat hidden behind points on the map, visible only when hovering the mouse over them. This made access somewhat difficult and browsing could be slow and tedious. In instituteRice and diverseLevant a new, separate panel for browsing iconography was added along the bottom as a filmstrip of image thumbnails. Clicking on a thumbnail focuses the map on the location where it originated and opens the image at a larger size. With the new emphasis on iconography, it made sense that the panel would be expanded when users first arrive at the map, rather than the legend.

    ![instituteRice and diverseLevant image browsers]({{ site.baseurl }}/media/posts/2018/02/image_browsers.gif)

2. **Data probing upgrade.** In imagineRio, two stage data-probing provided users with a thumbnail image when hovering the mouse on map points and then a much larger, light-boxed image when clicking on a point. In instituteRice and diverseLevant, we sought to improve on this by adding a third, intermediate stage which included a medium-sized image. When clicking on a map point in these maps, instead of entering a lightbox, a new data probe appears anchored to the upper right corner, with the associated point on the map (and image view cone) positioned next to it. This was intended to limit the amount of work it takes to enter and exit a lightbox and encourage more rapid exploration while displaying images at a modest size. In addition to this, diverseLevant includes step buttons with the intermediate data probe, giving users the ability to skip directly from one point-image pair to the next and easily tour all of the content on the map. Like the image browser, this upgrade was driven by the prioritization of viewing historical iconography as a primary map use task.

    ![instituteRice and diverseLevant data probes]({{ site.baseurl }}/media/posts/2018/02/data_probes.gif)
    
The focus here has been on the desktop, but similar design changes occurred across the mobile versions of the maps as well, to both look and feel and layout. The new image browser on mobile, for example, was added as a modal behind a thumbnail button that floats above the map. The image data probe, which once went straight to a lightbox, now includes a middle step that displays images in the bottom portion of the screen.

![Comparison of mobile layouts]({{ site.baseurl }}/media/posts/2018/02/mobile_layouts.png)

We’re in the business of custom cartography, where each project is completely new and different. This was a somewhat unique experience in that three related maps were built using the same map framework. That left design as the main variable. Layout and look and feel changed significantly with instituteRice as some aspects of the design were prioritized differently and a fresh look and feel was needed after 5 years. We got more efficient between instituteRice and diverseLevant which shared interface designs much more closely, making for quicker and cheaper development time. Even so, our custom cartography instincts kicked in with custom basemaps and other small changes to the user interfaces that gave each of the later maps a distinctive look and feel.