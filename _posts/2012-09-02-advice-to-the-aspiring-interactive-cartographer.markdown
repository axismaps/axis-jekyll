---
layout: post
nav: Blog
status: publish
published: true
title: Advice to the Aspiring Interactive Cartographer
author:
  display_name: David Heyman
  login: dave
  email: dave@axismaps.com
  url: ''
author_login: dave
author_email: dave@axismaps.com
wordpress_id: 1369
wordpress_url: http://www.axismaps.com/blog/?p=1369
date: '2012-09-02 10:01:00 +0100'
date_gmt: '2012-09-02 15:01:00 +0100'
categories:
- Cartography
tags: []
comments:
- id: 107738
  author: cristen
  author_email: cbc79@cornell.edu
  author_url: http://www.twitter.com/thecristen
  date: '2012-09-04 09:46:07 +0100'
  date_gmt: '2012-09-04 14:46:07 +0100'
  content: Thanks so much for this post! I'm also just starting out, and was a little
    intimidated by the coding involved. Now not so much. :) Also thanks for the Hackety
    link.
- id: 121343
  author: Fort Bend County, TX Lawyer
  author_email: warren.lessard@gmx.de
  author_url: ''
  date: '2012-12-14 12:02:22 +0000'
  date_gmt: '2012-12-14 17:02:22 +0000'
  content: Wonderful. I agree.
- id: 121637
  author: Geospatial | Annotary
  author_email: ''
  author_url: https://annotary.com/collections/2988/geospatial
  date: '2013-01-17 10:09:21 +0000'
  date_gmt: '2013-01-17 15:09:21 +0000'
  content: "[...] Share   www.axismaps.com &nbsp; &nbsp; &nbsp; 3 months [...]"
- id: 121721
  author: Original Ripped Fuel
  author_email: 111714Nordine1@hotmail.com
  author_url: http://guildwars2.org.ua/index.php?action=profile;u=30843
  date: '2013-01-27 21:58:06 +0000'
  date_gmt: '2013-01-28 02:58:06 +0000'
  content: You should be a part of a contest for one of the greatest sites on the
    net. I most certainly will recommend this blog!
- id: 121779
  author: Maynard Desmaris
  author_email: Turberville@live.co.uk
  author_url: http://www.cellsea.com/user/home/CR50e61b407de9c
  date: '2013-02-06 20:43:38 +0000'
  date_gmt: '2013-02-07 01:43:38 +0000'
  content: Whats up very cool blog!! Man .. Excellent .. Amazing .. I'll bookmark
    your blog and take the feeds also...I am satisfied to search out so many helpful
    information right here within the publish, we want develop more techniques in
    this regard, thank you for sharing.
---
<p>I often get emails from recent geo-grads or new professional students asking something like:</p>
<blockquote><p>"I'm looking to expand my skills to make interactive maps. What do I need to know to become an interactive cartographer?"</p></blockquote>
<p>Because our industry is evolving at such breakneck speeds, the required skill sets are constantly changing. Flash actionscript code has been replaced by Javascript and HTML5. Basemap cartography is endlessly tweaked as <a href="https://github.com/mapnik/mapnik/wiki/XMLConfigReference">Mapnik XML</a> instead of Illustrator layers. We can <a href="http://www.axismaps.com/blog/2012/01/dont-panic-an-absolute-beginners-guide-to-building-a-map-server/">easily build and support our own tile servers</a>. It's exciting change and it allows us to do more with our maps faster and cheaper.</p>
<p>Unfortunately, if you're trying to break into interactive cartography and haven't been involved with its evolution on a daily basis, it can be very tough to know where to begin. It's no longer as easy as "learn ArcView if you want to be a GIS Tech, or Illustrator if you want to be a cartographer."</p>
<!--break-->
<p>However, while the tools may be changing month-by-month, there have been three broad areas of core competency for all interactive cartographers that have been consistent throughout:</p>
<ol>
<li>You need to be able to find, manipulate, and store spatial and non-spatial data.</li>
<li>You need to be able to design a functional and attractive cartographic representation of that data as well as the UI controls to operate it</li>
<li>You need to be able to implement that design through code</li>
</ol>
<p>Working with data is probably the most underestimated part of a cartographer's job. The steps required to go from source to ready-to-map are different for every dataset, but there are some general tasks you'll come across at some point. You'll need to be able to find data, navigating though state GIS websites designed in the 1970's for administrative boundaries or combing though big data repositories (US Census, World Bank) for a single supplementary attribute. Once you find your data, you'll need to be able to manipulate it to work with the other datasets required for your map. This is where you'll put that GIS education to good use but more often than not you'll find yourself trying to remember how Excel Pivot Tables work. With the data ready to be mapped, you'll need to decide how to store it and how your map will retrieve it. Simple data can be stored in a text file like CSV (that you're probably already comfortable with) but more complex data will often require a database. It's really helpful to know a bit about data structures, and feel comfortable enough with a server to do some basic installation and maintenance.</p>
<p>Design for an interactive map comes in two separate but highly connected pieces. Cartographic design involves designing the "map" part of the map. Most of the design decisions you'll make during this phase of design are no different than if you were doing <a href="http://www.amazon.com/Thematic-Cartography-Visualization-Terry-Slocum/dp/0132097761/ref=sr_1_1?ie=UTF8&amp;qid=1346660063&amp;sr=8-1&amp;keywords=terry+slocum">cartographic design for a paper map</a>. Is this the right thematic representation of this data? Does my visual hierarchy clearly communicate the message of this map? Is my basemap garish and stupid, drawing attention away from the point I'm trying to make? You'll also need to design the UI controls to operate the map. This is a much harder skill to cultivate and is most likely something you haven't been exposed to in your GIS / cartography curriculum. The best way to get to be a better designer is to look critically at lots and lots of web maps. Compartmentalize their interface components and decide for yourself what works on them. Steal the stuff that works and think about how the stuff that doesn't could be improved. Learn how to quickly make UI mock-ups and wireframes of your map. Iterate over your designs before you build them, using that critical eye you've developed critiquing other people's work on your own. Repeat for 2 weeks or so and then put it down because it's probably good enough.</p>
<p>Andy <a href="http://www.axismaps.com/blog/2011/12/web-cartography-thats-like-google-maps-right/">said this best</a>:</p>
<blockquote><p>"Our coding process goes something like this. 1) Load the data. 2) Make things work. 3) Make things pretty. Like I mentioned before, having everything designed ahead of time is vital. We can start with something rough but functional without worrying about design, because we already know how it will look and behave in the end. It also lets us know when we're finished; interactive projects have a way of never ending if there are no clear goals at the outset.</p>
<p>"After hearing from enough of my cartography peers whose hatred of programming burns with the fire of a thousand suns, I must say this: yes, coding sucks. I write code all the time, and it often makes me want to punch the computer in the face. But it's worth it. Totally worth it. It only takes a little skill to produce awesome things. A willingness to write some code opens a lot of doors, and it doesn't require devoting a lifetime to becoming a master programmer. It doesn't even require being a good programmer."</p></blockquote>
<p>If you're an absolute beginner <a href="http://hackety.com">this is a great place to learn the basics</a>. Then, choose a mapping library that you like (they're all good) that will do what you need it to do and run through the basic tutorial (usually gets you a basic map on a blank page). Once you've got that down, all you have to do is start putting in the hours at the keyboard.</p>
<p>Axis Maps has always been a small company with a very strong DIY ethos (just ask Ben who can now add "shipping tycoon" to his CV). My favorite part of working on projects here is we're constantly learning how to solve the hundreds of problems that come up through the course of any project. You'll never know how to do it all yourself but if you give yourself a good foundation in the basic concepts, you can start making maps and learning as you go like the rest of us.</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" title="Pirate-NG-Kids.jpg" src="{{ site.baseurl }}/media/posts/2012/09/Pirate-NG-Kids.jpg" alt="Pirate NG Kids" width="425" height="514" border="0" /></p>
