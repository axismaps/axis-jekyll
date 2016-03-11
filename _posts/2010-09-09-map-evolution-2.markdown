---
layout: post
nav: Blog
status: publish
published: true
title: Map Evolution 2
author:
  display_name: Ben Sheesley
  login: ben
  email: ben@axismaps.com
  url: ''
author_login: ben
author_email: ben@axismaps.com
wordpress_id: 660
wordpress_url: http://www.axismaps.com/blog/?p=660
date: '2010-09-09 10:47:36 +0100'
date_gmt: '2010-09-09 15:47:36 +0100'
categories:
- Design
- Cartography
tags: []
comments:
- id: 14865
  author: Brian Kelly
  author_email: polymonic@gmail.com
  author_url: http://www.spilth.org/
  date: '2010-09-09 11:10:01 +0100'
  date_gmt: '2010-09-09 16:10:01 +0100'
  content: |-
    This is awesome! It's nice to be able to see the changes something goes though - gives you some insight into the decisions made.

    I've been working on a map myself and have taken screenshots throughout the process. It's not finished yet, but it has definitely changed a bit over the course of it's development: http://www.flickr.com/photos/spilth/sets/72157624490148326/show/
- id: 14872
  author: ben
  author_email: ben@axismaps.com
  author_url: http://
  date: '2010-09-09 11:59:08 +0100'
  date_gmt: '2010-09-09 16:59:08 +0100'
  content: Very nice! Thanks for sharing this. Yeah, watching all that change really
    provides some neat insights. It struck me while watching yours how wholistic the
    change is as well. In most of your screens (and in mine, too, I think) there are
    changes happening all over the place, from the legend to the map to the title
    area. Really neat.
- id: 14900
  author: craig
  author_email: craigfeuerherdt@gmail.com
  author_url: ''
  date: '2010-09-09 18:21:27 +0100'
  date_gmt: '2010-09-09 23:21:27 +0100'
  content: Would Hillside Health Care International consider and/or yourself consider
    allowing the map to be used to input data into OpenStreetMap?
- id: 14951
  author: ben
  author_email: ben@axismaps.com
  author_url: http://
  date: '2010-09-10 08:41:28 +0100'
  date_gmt: '2010-09-10 13:41:28 +0100'
  content: Hey Craig - I had thought about this, too. But after reading over <a href="http://wiki.openstreetmap.org/wiki/Legal_FAQ#Can_I_trace_data_from_Google_Maps.2FVirtual_Earth.2FOrdnance_Survey.2F....3F"
    rel="nofollow">OSM's legal FAQ</a>, it looks like data derived primarily from
    other sources like Google Maps is not to be used in OSM. So roads are out of the
    question. I think there was only one or two small roads that we added after my
    friend went down there to verify things. The rest remained unchanged (although
    we added a bunch of new street names). As for the point features, all of these
    were collected on paper only. Unfortunately, we don't have GPS locations for any
    of these-- it was all very low tech!
- id: 15288
  author: Bryan
  author_email: bkrouse@cableone.net
  author_url: ''
  date: '2010-09-14 11:50:40 +0100'
  date_gmt: '2010-09-14 16:50:40 +0100'
  content: |-
    What method did you use to download the Google Map? Did you use a simple screen capture or did you download the tiles?

    Thanks
- id: 15291
  author: ben
  author_email: ben@axismaps.com
  author_url: http://
  date: '2010-09-14 12:23:46 +0100'
  date_gmt: '2010-09-14 17:23:46 +0100'
  content: Nope. Didn't download anything here. This is just a few screenshots stitched
    together in Photoshop for reference.
- id: 15294
  author: Bryan
  author_email: bkrouse@cableone.net
  author_url: ''
  date: '2010-09-14 12:45:50 +0100'
  date_gmt: '2010-09-14 17:45:50 +0100'
  content: That is simple enough. Thanks
- id: 20481
  author: Paige
  author_email: pl20632@gulls.salisbury.edu
  author_url: ''
  date: '2010-11-09 10:40:42 +0000'
  date_gmt: '2010-11-09 15:40:42 +0000'
  content: Great movie. Seeing the changes was very interesting. In my classes at
    school, we do assignments similar to this, but on a less complex and smaller scale.
    We recently had an assignment, and although it no where compares to what u had
    to do, I can agree with you that gathering data can be challenging. I like your
    idea of tracing the roads in Adobe Illustrator.
- id: 60597
  author: Manny
  author_email: westavenuekid@gmail.com
  author_url: http://www.playgroundmaps.com
  date: '2011-08-04 12:00:03 +0100'
  date_gmt: '2011-08-04 17:00:03 +0100'
  content: Great blog. I have always been inspired by this art form.
---
<iframe src="https://player.vimeo.com/video/158641481" width="500" height="386" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p>Over the summer, a friend asked me to put together a map of Punta Gorda, a small coastal town in the country of Belize. He works for <a href="http://www.hillsidebelize.net/main.html">Hillside Health Care International</a>, a non-profit organization providing medical care in that area. The map was needed to help orient and guide volunteer health care professionals visiting from the States while serving at the clinic. It was to be printed in color on a letter-sized page.</p>
<p>In talking with my friend, I knew right away that the biggest obstacle was going to be getting good local data for the map  (and getting it for free, because there was no money set aside for the project). Most importantly, I needed data for local roads (locations and names) and point features (hotels, government buildings, grocery stores, banks, etc.), these being the two main pieces he wanted clinic volunteers to have at their disposal.</p>
<p>Of the big free mapping services, Google Maps had the most complete road network for the town, so it served as my starting point. I had hoped there might be a nice Open Street Map shapefile to work from, but this area is still mostly a blank slate:</p>
<p><a href="http://www.axismaps.com/blog/2010/09/map-evolution-2/openstreetmap/" rel="attachment wp-att-706"><img src="{{ site.baseurl }}/media/posts/2010/09/openStreetMap.jpg" alt="View of Punta Gorda in Open Street Map" title="openStreetMap" class="alignnone size-full wp-image-706" /></a></p>
<p>So, I decided the simplest and easiest approach to getting those roads on the map would be to trace them in Adobe Illustrator. That's where the remainder of the map design work was planned, and there was no good reason to construct a spatial database or harness the powers of GIS for our purposes, let alone the time and money to do so. We knew this would limit what what could be done with the map in the future, but a simple map illustration existing wholly outside of a GIS served our immediate purposes on the cheap.</p>
<p>The point features were collected in the field by my friend, who personally biked the streets of Punta Gorda and used his local knowledge and that of others who live there to collect and verify the names and locations of streets and places. His work was all done by hand by annotating an early draft of the map. While he was collecting data, I finished the layout and styling. Then, with his annotations overlaid on my working version, I placed markers at each point of interest (red and blue shapes and National Park Service-style symbols), added labels, and created the index that sits in the lower right-hand corner of the map.</p>
<p>Throughout the production process I captured screen shots showing the evolution of the map. When it was finished I sequenced them together to form a simple movie, as I did for the <a href="http://www.axismaps.com/blog/2009/01/map-evolution/">evolution of a map of downtown Madison, WI</a>. Each screen represents about 10-15 minutes of real production work. While this <a href="{{ site.baseurl }}/media/posts/2010/09/puntaGordaTown.pdf">PDF</a> shows the final state of the map, the Punta Gorda movie shows how I got there. As you'll see, it generally involved the transformation of a satellite image into a map by way of a healthy dose of cartographic abstraction and symbolization.</p>
