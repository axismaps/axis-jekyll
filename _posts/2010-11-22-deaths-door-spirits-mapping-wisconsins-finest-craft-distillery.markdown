---
layout: post
nav: Blog
status: publish
published: true
title: 'Death''s Door Spirits: Mapping Wisconsin''s Finest Craft Distillery'
writer:
  display_name: David Heyman

  email: dave@axismaps.com

author_login: dave
author_email: dave@axismaps.com
wordpress_id: 803
wordpress_url: http://www.axismaps.com/blog/?p=803
date: '2010-11-22 16:44:23 +0000'
date_gmt: '2010-11-22 21:44:23 +0000'
categories:
- Portfolio
tags: []
comments:
- id: 23359
  writer: Adam Fritzler
  author_email: mid@zigamorph.net
  author_url: http://www.zigamorph.net/~mid/
  date: '2010-12-04 13:02:12 +0000'
  date_gmt: '2010-12-04 18:02:12 +0000'
  content: Nice work! If I read this correctly, you're using SimpleDB for the location
    list? How did you approach doing geographic distance searches with SimpleDB? Simplify
    it to counties?
- id: 23727
  writer: dave
  author_email: dave@axismaps.com
  author_url: http://
  date: '2010-12-07 04:52:23 +0000'
  date_gmt: '2010-12-07 09:52:23 +0000'
  content: "Thanks, Adam!\r\n\r\nYou're right. All the data is stored in SimpleDB,
    attributes and geography. Since it's just simple point locations, there's just
    a field for both lat and lon which essentially makes the data just a simple table
    (except for being able to define multiple attribute pairs for locations that stock
    multiple kinds of booze).\r\n\r\nTo do the location search, I use this function:\r\n<code>\r\nfunction
    cal_distance(lat, lon, target) \r\n{\t\r\n     var dis_lat, dis_lng, distance
    = \"\";\r\n     var matches = new Array();\r\n\t\t\r\n     for (var i = 0; i &lt;
    markers.length - 1; i++)\r\n     {\r\n          dis_lat = markers[i].getPosition().lat()
    - lat;\r\n          dis_lng = markers[i].getPosition().lng() - lon;\r\n\r\n          distance
    = Math.pow(Math.pow(dis_lat, 2) + Math.pow(dis_lng, 2), 0.5) * 111;\r\n\t\r\n
    \         distance = Math.ceil(distance * 10000) / 10000;\r\n\t\t\t\r\n          if(
    distance * 1.609344 &lt;= target )\r\n          {\r\n               markers[i].distance
    = Math.round(distance * 1.609344 * 10) / 10;\r\n               matches.push(markers[i]);\r\n
    \         }\r\n     }\r\n     return matches;\r\n}\r\n</code>\r\n\r\nI loop through
    each point (not very efficient; lots of room for improvement here) calculate the
    change in x and y (\"Delta X\" if you're a high school geometry teacher) and then
    run the standard equation for distance to determine the distance from the target:\r\n\r\n<img
    src=\"http://upload.wikimedia.org/math/7/0/f/70f21f8d56472663b4a3daf55117b78c.png\"
    alt=\"Distance Formula\" />\r\n\r\nFrom there I do some unit conversion (multiply
    by  111 to get from degrees to kilometers and multiply by 1.6 to get from kilometers
    to miles) and then push the matches into their own array so I can adjust the display
    from there.\r\n\r\nIt's not the most efficient or accurate function but for a
    map of this size and complexity, it does the job just fine."
- id: 28099
  writer: Jeff
  author_email: jfergon@yahoo.com
  author_url: ''
  date: '2011-01-07 09:29:29 +0000'
  date_gmt: '2011-01-07 14:29:29 +0000'
  content: Of course the punchline to all this is that Deaths Door Distillery is HQ
    in Madison WI where they contract out all their distilling. They are pretty much
    a marketing co.
- id: 121751
  writer: Get the facts
  author_email: Mashore@gmail.com
  author_url: http://www.99polls.com/profile_1789940
  date: '2013-02-01 13:31:21 +0000'
  date_gmt: '2013-02-01 18:31:21 +0000'
  content: Hi there, I discovered your site by the use of Google while searching for
    a related topic, your site got here up, it seems great. I've bookmarked it in
    my google bookmarks.
---
<p>I only have a few rules in life. One of them is when the makers of <a href="http://deathsdoorspirits.com/images/pages/spirits/gin/specs_gin.pdf" target="_blank">this gin</a> offer you a straight-up trade–bottles for maps–you take it... and you don't cut your partners in on the deal. That was the situation when a friend-of-a-friend approached me to build this <a href="http://deathsdoorspirits.com/pages/availability/availability.php" target="_self">simple locator Google maps mashup</a> which I took on as a side-project away from my normal Axis Maps work.</p>
<p><img class="aligncenter size-full wp-image-817" title="fuck_me" src="/media/posts/2010/11/dds_graphic.jpeg" alt="fuck_me" /></p>
<p><a href="http://deathsdoorspirits.com/" target="_blank">Death's Door Spirits</a> is a craft distillery based out of <a href="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=washington+island,+wi&amp;sll=37.0625,-95.677068&amp;sspn=54.137829,92.724609&amp;ie=UTF8&amp;hq=&amp;hnear=Washington+Island,+Door,+Wisconsin&amp;ll=45.356005,-86.929321&amp;spn=1.518903,2.897644&amp;z=9" target="_blank">Washington Island, WI</a> and distilled in Madison, WI. They use locally-sourced ingredients for their gin, vodka, and whisky which they distill in small batches. While their small-scale makes their products excellent, it also makes them tricky to locate. The purpose of the map is to simply show where you can buy bottles or cocktails containing their spirits.</p>
<p>Since the map was so straightforward, it gave me the opportunity to experiment with a few new technologies I've been meaning to check out. Here's what I thought...</p>
<!--break-->
<p><img class="aligncenter size-full wp-image-819" title="Death_s Door Spirits Locator" src="/media/posts/2010/11/Death_s-Door-Spirits-Locator1.jpg" alt="Death_s Door Spirits Locator" /></p>
<p><strong>Styled Google Maps:</strong> <span style="font-weight: normal;">Death's Door has a fantastic <a href="http://deathsdoorspirits.com/media/" target="_blank">graphic identity</a> thanks to some great work by <a href="http://gripdesign.com/" target="_blank">Grip Design</a> (who also contributed some designs to this map). I wanted the map to fit in with their existing style while stripping out a lot of the extra Google Maps data that would clutter up a map like this. Google Maps Styled Map API allowed me to do both. The <a href="http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html" target="_blank">styled map wizard</a> was helpful for sketching out styles but mostly I was making whole groups of features invisible and going with stock colors for the roads and water. <em>Not being able to input RGB values for these styles made the process harder than it should have been.</em></span></p>
<p><strong>Amazon SimpleDB / CloudFusion: </strong>I've been a big fan of <a href="http://aws.amazon.com/simpledb/" target="_blank">Amazon's SimpleDB</a> technology since we used at as the foundation for <a href="http://indiemapper.io/video.php?v=manage" target="_blank">indiemapper user management</a>. I've found it to be more reliable than MySQL and faster as well (but that could just be our budget hosting plan). It was a little unapproachable to me at first but the <a href="http://getcloudfusion.com/" target="_blank">CloudFusion PHP library</a> made it as easy–if not easier–to query the database and parse the results for the map. <em>The biggest missing feature here is a nice front-end browser like PHPMyAdmin which would have allowed the client to edit their data directly. Instead, I had to build some rudimentary tools so they could manage their data themselves.</em></p>
<p><strong>Google Font Directory: </strong>It was nice to have access to a wider variety of fonts than just the standard web-safe font-family sets. The <a href="http://code.google.com/webfonts" target="_blank">Google Font Directory</a> gave me access to a limited but FREE selection of a nice variety of fonts distributed across Google's massive network. Most useful was Yanone Kaffeesatz which is a dead ringer for the Death's Door title font. <em>The fonts can be a lot to load at runtime so it was important to pare down only to the fonts I was using in the map.</em></p>
<p><em><img class="aligncenter size-full wp-image-820" title="Death_s Door Spirits Locator-1" src="/media/posts/2010/11/Death_s-Door-Spirits-Locator-1.jpg" alt="Death_s Door Spirits Locator-1" /></em></p>
<p><strong>jQuery Ajax / jQueryUI: </strong>Made it incredibly easy for someone with my level of programming skill (let's call it "recreational" to be polite) to efficiently get the data into the map and build some nice UI effects like animation and the accordion component. I can't recommend it highly enough so there's going to be no italics section with the caveats in it.</p>
