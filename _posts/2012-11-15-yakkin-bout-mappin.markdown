---
layout: post
status: publish
published: true
title: Yakkin' 'Bout Mappin'
author:
  display_name: Ben Sheesley
  login: ben
  email: ben@axismaps.com
  url: ''
author_login: ben
author_email: ben@axismaps.com
wordpress_id: 1502
wordpress_url: http://www.axismaps.com/blog/?p=1502
date: '2012-11-15 10:18:48 +0000'
date_gmt: '2012-11-15 15:18:48 +0000'
categories:
- Design
- Cartography
tags: []
comments:
- id: 113815
  author: Gretchen
  author_email: gretchen@petersongis.com
  author_url: http://www.gretchenpeterson.com/blog
  date: '2012-11-16 12:57:24 +0000'
  date_gmt: '2012-11-16 17:57:24 +0000'
  content: Both funny and instructive. My kind of information transfer. Thanks for
    the post and the great finished product!
---
<p>Last week, we made an <a href="http://axismaps.com/election2012/">election map</a> that shows how counties voted in relationship to several different demographic variables. It gave us a chance to take value-by-alpha (VBA) mapping one step further than we did after the 2008 election. Back then, we produced a nice little <a href="http://www.axismaps.com/blog/2008/11/a-new-kind-of-election-map/?csspreview=true">static map</a>. Our new, interactive map is a bit more substantial, having a user interface, loading data, including a charting component, and displaying a data probe with details on mouseover.</p>
<p>Unlike our typical interactive mapping project, this one was rather small in scope. We wanted to make something that could come together quickly and easily and be seen before people stopped caring about the election. There was also no client, so we were free to work however we pleased in order to get done fast. In other words, no one was telling us that we had to make this work in IE7! All said and done, we devoted twenty-eight hours to the map before sharing it on Twitter.</p>
<p>Because the project was short and received a sustained, concentrated effort from each of us, a behind-the-scenes look at its development seems like it might be of interest to other mapmakers. If nothing else, it serves as an example of how three people, working in different parts of the world, interact together online to get work done. Something for the <a href="http://en.wikipedia.org/wiki/Human_geography">human geographers</a> out there, at least, if not for the cartographers.</p>
<p>What follows is our <a href="http://campfirenow.com/">Campfire</a> transcript covering the duration of the project. Outside of this transcript, there was no video, voice or other written communication between us. The language here has been smoothed out and edited somewhat in order to reduce each thought, question, or decision to its essence, although there are some direct quotations thrown into the mix.</p>
<p>We think about every project, large or small, slow or fast, client or not, in terms of three primary components: data, design, and code. They are <a href="http://www.axismaps.com/blog/2011/12/web-cartography-thats-like-google-maps-right/?csspreview=true">essential ingredients of web cartography</a> and <a href="http://www.axismaps.com/blog/2012/09/advice-to-the-aspiring-interactive-cartographer/?csspreview=true">what any aspiring cartographer should learn</a>. To that end, the transcript below has been tagged with colored dots that represent the predominant component in play at any given moment in time, plus a yellow dot for instances when our thoughts were mostly on project planning or management issues.</p>
<p>As you scan through, some patterns to note are:</p>
<ol>
<li>Entries pertaining to all three components, as well as a basic project plan, are found in the first 30 minutes.</li>
<li>The number of entries about data start out heavy and all but disappear on Day 2.</li>
<li>Entries about code pick up steam toward the middle and end of the project.</li>
<li>Entries about design appear rather consistently throughout the project, with a run of back and forth data-design entries in the middle of Day 1 and a similar back and forth run of code-design entries at the end of Day 2. Interesting!</li>
</ol>
<p><img style="border: none; background: none; margin: 0; padding: 0; display: inline;" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /> = Planning<br />
<img style="border: none; background: none; margin: 0; padding: 0; display: inline;" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="" width="16" height="16" /> = Data<br />
<img class="alignnone size-full wp-image-1505" style="border: none; background: none; margin: 0; padding: 0; display: inline;" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /> = Design<br />
<img class="alignnone size-full wp-image-1503" style="border: none; background: none; margin: 0; padding: 0; display: inline;" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /> = Code</p>
<style>td{ min-width: 25px; }table{ table-layout: auto; }</style>
<p><strong>Day 1 - November 7, 2012</strong></p>
<table width="100%" border="0" cellpadding="10">
<tbody>
<tr>
<td>8:15 AM</td>
<td><img class="aligncenter size-full wp-image-1504" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /></td>
<td class="quote">"Want to make a map?" <em>-Dave</em></td>
</tr>
<tr>
<td>8:15 AM</td>
<td><img class="aligncenter size-full wp-image-1504" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /></td>
<td class="quote">"Maybe just this one last time. Then I'm retiring." <em>-Andy</em></td>
</tr>
<tr>
<td>8:20 AM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>How about an election-by-demographics map using the value-by-alpha (VBA) technique?</td>
</tr>
<tr>
<td>8:25 AM</td>
<td><img class="aligncenter size-full wp-image-1507" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>What's the best technology setup for this? (Polymaps? CSS?).</td>
</tr>
<tr>
<td>8:25 AM</td>
<td><img class="aligncenter size-full wp-image-1504" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /></td>
<td>Let's get started this way:</p>
<ul>
<li>Andy: prepare the data</li>
<li>Dave: get interactive setup going</li>
<li>Ben: put together an interface design</li>
</ul>
</td>
</tr>
<tr>
<td>8:30 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>I'm exploring election data from The Guardian in Excel.</td>
</tr>
<tr>
<td>9:05 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>What kinds of demographic data would be worth mapping? Which are effected by geography?</td>
</tr>
<tr>
<td>9:05 AM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>What kind of chart should accompany the map?</td>
</tr>
<tr>
<td>9:15 AM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Margin of victory versus demographic variable by county sounds like a decent chart.</td>
</tr>
<tr>
<td>9:25 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Here's a Shapefile with geographic and election+demographic data.</td>
</tr>
<tr>
<td>9:25 AM</td>
<td><img class="aligncenter size-full wp-image-1504" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /></td>
<td>We need to share this file with the world.</td>
</tr>
<tr>
<td>9:25 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Let's explore the Shapefile in indiemapper.</td>
</tr>
<tr>
<td>9:30 AM</td>
<td><img class="aligncenter size-full wp-image-1504" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Design" width="16" height="16" /></td>
<td>We should wait and share this data once it's all cleaned up.</td>
</tr>
<tr>
<td>9:40 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Here's a second version of the Shapefile with our map data.</td>
</tr>
<tr>
<td>10:00 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>What's the best way to store the data? A series of JSON files?.</td>
</tr>
<tr>
<td>10:05 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>What scale is appropriate for the county boundary data? Will we need to zoom in?</td>
</tr>
<tr>
<td>10:10 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>There's no need for detailed, large-scale county data.</td>
</tr>
<tr>
<td>10:10 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Let's store data and geography separately.</td>
</tr>
<tr>
<td>10:10 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>I'm preparing the data in Google Refine.</td>
</tr>
<tr>
<td>10:20 AM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Anyone have good red/blue color specs?</td>
</tr>
<tr>
<td>10:25 AM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Here are two 5-class sequential color schemes, one for red and one for blue.</td>
</tr>
<tr>
<td>10:30 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Looks like there are problems with this data.</td>
</tr>
<tr>
<td></td>
<td></td>
<td class="quote">"It has Obama winning most of Wyoming handily." <em>-Andy</em></td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/wyoming.png?csspreview=true"><img class="size-thumbnail wp-image-1551 alignleft" title="wyoming" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/wyoming-150x150.png" alt="" height="150" /></a></td>
</tr>
<tr>
<td>10:40 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td class="quote">"In Colorado, that's showing the Constitution Party candidate!" <em>-Andy</em></td>
</tr>
<tr>
<td>10:55 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>I'm fighting with pivot tables in Excel. Trying to get sums into columns instead of grouped in rows.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/pivot.png?csspreview=true"><img class="alignnone size-thumbnail wp-image-1642" title="pivot" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/pivot-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>11:00 AM</td>
<td><img class="aligncenter size-full wp-image-1504" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /></td>
<td class="quote">"Back in a moment... need to go do something to my car before it starts raining." <em>-Andy</em></td>
</tr>
<tr>
<td>11:45 AM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Here's a third version of the Shapefile with our map data.</td>
</tr>
<tr>
<td>11:50 AM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Here's a VBA map showing county margin of victory by population.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_marginbypop.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1560" title="vba_marginbypop" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_marginbypop-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>11:50 AM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Switch to black background.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_marginbypop_black.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1563" title="vba_marginbypop_black" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_marginbypop_black-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>11:55 AM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Let's go with 2-class winners. It's too hard to see both change in color and alpha.</td>
</tr>
<tr>
<td>12:05 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Here are new red and blue color specs.</td>
</tr>
<tr>
<td>12:10 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Here's a new VBA map showing county winner (2-class) by population.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_winnerbypop_1.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1569" title="vba_winnerbypop_1" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_winnerbypop_1-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>12:10 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td class="quote">"That's looking pretty okay." <em>-Dave</em></td>
</tr>
<tr>
<td>12:10 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>How is population classified? The map looks kinda bright, making it hard to see population differences.</td>
</tr>
<tr>
<td>12:10 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Should we go with equal-interval or unclassed population instead of quantiles?</td>
</tr>
<tr>
<td>12:20 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td class="quote">"Argh, this stupid data. Chicago is red!" <em>-Andy</em></td>
</tr>
<tr>
<td>12:25 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>For unclassed data, opacity should be a percentage of the max, right?</td>
</tr>
<tr>
<td>12:25 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td class="quote">"Los Angeles is ruining it for everybody." <em>-Dave</em></td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_winnerbypop_2.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1572" title="vba_winnerbypop_2" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_winnerbypop_2-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>12:30 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>How about capping the population values at a certain threshold?</td>
</tr>
<tr>
<td>12:50 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Here's a new VBA map showing winner by population, capped at the 90th percentile.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_winnerbypop_3.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1575" title="vba_winnerbypop_3" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_winnerbypop_3-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>12:55 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>What about going with population density instead, in order to control for county size?</td>
</tr>
<tr>
<td>12:55 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Here's a new VBA map showing winner by population density.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_winnerbypopdens.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1577" title="vba_winnerbypopdens" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/vba_winnerbypopdens-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>1:20 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Here's the fourth version of a Shapefile with our map data.</td>
</tr>
<tr>
<td></td>
<td></td>
<td class="quote">"Gave up on Excel, used a Python. Er, Python, not a Python. No snakes involved." <em>-Andy</em></td>
</tr>
<tr>
<td>1:25 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>The user interface mockups are done.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/mockup.jpg?csspreview=true"><img class="alignleft size-thumbnail wp-image-1580" title="mockup" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/mockup-150x150.jpg" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>2:00 PM</td>
<td><img class="aligncenter size-full wp-image-1507" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>Maybe we ought to go with D3 so we can use a map projection.</td>
</tr>
<tr>
<td>2:05 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Does using VBA even make sense for mapping demographic variables? What if there is no real correlation between the demographic variable and county winner? VBA might be best for things that are magnitudes or certainty.</td>
</tr>
<tr>
<td>2:15 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>It's worth a try. In the end, it's just a bivariate color scheme.</td>
</tr>
<tr>
<td>2:25 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Here's the final version of the Shapefile with our map data.</td>
</tr>
<tr>
<td>2:25 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /></td>
<td>Let's tweet that data.</td>
</tr>
<tr>
<td>2:25 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>I'm still not sure if population or population density makes more sense here. If we think of VBA as a cartogram, shouldn't we just map totals?</td>
</tr>
<tr>
<td>3:05 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Does this map need a legend?</td>
</tr>
<tr>
<td>3:10 PM</td>
<td><img class="aligncenter size-full wp-image-1504" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /></td>
<td>How should we proceed, now that we've got data and an interface design?</td>
</tr>
<tr>
<td>3:15 PM</td>
<td><img class="aligncenter size-full wp-image-1504" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /></td>
<td>What exactly are we trying to make here? A static map viewer? A basic interactive map with data probe and linked chart?</td>
</tr>
<tr>
<td>3:20 PM</td>
<td><img class="aligncenter size-full wp-image-1507" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>If it's a static map viewer, how about using indiemapper + SVG?</td>
</tr>
<tr>
<td>3:25 PM</td>
<td><img class="aligncenter size-full wp-image-1507" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>There are problems getting a good data probe and chart that way, plus the SVG is too huge.</td>
</tr>
<tr>
<td>3:30 PM</td>
<td><img class="aligncenter size-full wp-image-1507" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>D3 and JSON is sounding like the best approach.</td>
</tr>
<tr>
<td>3:45 PM</td>
<td><img class="aligncenter size-full wp-image-1507" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>The D3 shell is made.</td>
</tr>
<tr>
<td></td>
<td></td>
<td class="quote">"It was an election day sweep for President Robert Smith of the Goth Party." <em>-Dave</em></td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/gothmap.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1586" title="gothmap" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/gothmap-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>4:10 PM</td>
<td><img class="aligncenter size-full wp-image-1507" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>Here's what it looks like with colored data.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/d3_colored.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1588" title="d3_colored" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/d3_colored-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>4:20 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>The JSON files are ready.</td>
</tr>
<tr>
<td>4:30 PM</td>
<td><img class="aligncenter size-full wp-image-1504" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /></td>
<td>Let's divide up the remaining work (data probe, data loading, chart, and ui).</td>
</tr>
<tr>
<td>4:40 PM</td>
<td><img class="aligncenter size-full wp-image-1504" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Design" width="16" height="16" /></td>
<td>Let's put the project data on SVN so it's easier to work together.</td>
</tr>
<tr>
<td>4:55 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Any other interesting demographic variables we should be mapping?</td>
</tr>
<tr>
<td>5:15 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Here is poverty:</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/poverty.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1590" title="poverty" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/poverty-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>5:30 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Here is uninsured:</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/uninsured.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1591" title="uninsured" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/uninsured-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>6:10 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Data loading is complete for five demographic variables (birth rate, medicare, poverty, uninsured, wealthy, and non-white).</td>
</tr>
<tr>
<td>9:05 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>We should go back to quantiles for the demographic data so the maps look balanced with respect to alpha.</td>
</tr>
<tr>
<td>9:10 PM</td>
<td><img class="aligncenter size-full wp-image-1505" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>We probably need non-linear alpha steps to make them look right. Differences should be optical, not mathematical.</td>
</tr>
<tr>
<td>9:40 PM</td>
<td><img class="aligncenter size-full wp-image-1506" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Can we get data indexed by FIPS code in those JSON files?</td>
</tr>
</tbody>
</table>
<p><strong>Day 2 - November 8, 2012</strong></p>
<table width="100%" border="0" cellpadding="10">
<colgroup>
<col width="100" /></colgroup>
<tbody>
<tr>
<td>8:30 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Yeah, let's do 10-class quantiles for the demographic variables.</td>
</tr>
<tr>
<td>8:45 AM</td>
<td><img class="size-full wp-image-1506 aligncenter" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Get rid of Alaska and Hawaii. There's no data for those in the source.</td>
</tr>
<tr>
<td>8:50 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>The 10-class quantile maps are online.</td>
</tr>
<tr>
<td>8:50 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>They still look too bright overall.</td>
</tr>
<tr>
<td>8:55 AM</td>
<td><img class="size-full wp-image-1506 aligncenter" title="red" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/red.png" alt="Data" width="16" height="16" /></td>
<td>Let's problem solve any data issues. Class breaks and data distribution look okay, at least.</td>
</tr>
<tr>
<td>9:05 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Let's try that non-linear alpha scale to even these out visually.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/alphascale.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1600" title="alphascale" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/alphascale-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>9:10 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td class="quote">"That's hella-nicer." <em>-Dave</em></td>
</tr>
<tr>
<td>9:15 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>What kind of instructions will people need to understand these maps? E.g., Brightness is NOT margin of victory.</td>
</tr>
<tr>
<td>9:25 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>A basic chart is working.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/chart.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1602" title="chart" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/chart-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>9:25 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>How can we easily link the map and chart on mouseover?</td>
</tr>
<tr>
<td>9:30 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>Try looping through counties to find matches.</td>
</tr>
<tr>
<td>9:30 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Here's a new, cleaner, down-pointing triangle PNG for the user interface.</td>
</tr>
<tr>
<td>9:30 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>How's that chart looking?</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/chart_2.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1606" title="chart_2" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/chart_2-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>9:35 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>Are the fonts in the mockup on TypeKit?</td>
</tr>
<tr>
<td>9:40 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Design" width="16" height="16" /></td>
<td>Yep, that's Ubuntu Regular and Condensed.</td>
</tr>
<tr>
<td>9:55 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>We need a red and blue PNG for the bars in the chart.</td>
</tr>
<tr>
<td>10:10 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>The new fonts are in.</td>
</tr>
<tr>
<td>10:25 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>We need a better way to do the x-axis labels on the chart. They get buried and probably aren't very clear.</td>
</tr>
<tr>
<td>10:25 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>Let's drop in an Axis Maps Logo.</td>
</tr>
<tr>
<td>10:30 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Does the page feel too tall? Can we fix that without shrinking the map?</td>
</tr>
<tr>
<td>10:40 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Here's a mockup showing new chart labels.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/chart_3.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1608" title="chart_3" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/chart_3-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>10:55 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>Implemented the new chart label design.</td>
</tr>
<tr>
<td>11:00 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Let's put in an active state for the selected variable text in the UI.</td>
</tr>
<tr>
<td>11:05 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>Implemented the new active state.</td>
</tr>
<tr>
<td>11:05 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>There's a problem with positioning the divider in the new chart labels design. How about a text pipe instead?</td>
</tr>
<tr>
<td>11:15 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>Implemented chart label tweak.</td>
</tr>
<tr>
<td>11:20 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Horizontal page scrolling won't go away.</td>
</tr>
<tr>
<td>11:25 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>The scrolling problem is fixed.</td>
</tr>
<tr>
<td>11:25 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Let's give the map a final look over.</td>
</tr>
<tr>
<td>11:30 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>Let's stick in a new map title and add some instructions for users.</td>
</tr>
<tr>
<td>11:30 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Dang. The page gets cut-off in Firefox.</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="http://www.axismaps.com/blog/wp-content/uploads/2012/11/ff.png?csspreview=true"><img class="alignleft size-thumbnail wp-image-1611" title="ff" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/ff-150x150.png" alt="" width="150" height="150" /></a></td>
</tr>
<tr>
<td>11:45 AM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>The FF page problem is fixed.</td>
</tr>
<tr>
<td>11:50 AM</td>
<td><img class="size-full wp-image-1505 aligncenter" title="blue" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/blue.png" alt="Design" width="16" height="16" /></td>
<td>Dang. The chart isn't showing up in Safari.</td>
</tr>
<tr>
<td>12:05 PM</td>
<td><img class="size-full wp-image-1507 aligncenter" title="green" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/green.png" alt="Code" width="16" height="16" /></td>
<td>The Safari chart problem is fixed.</td>
</tr>
<tr>
<td>12:10 PM</td>
<td><img class="size-full wp-image-1504 aligncenter" title="yellow" src="http://www.axismaps.com/blog/wp-content/uploads/2012/11/yellow.png" alt="Planning" width="16" height="16" /></td>
<td>Let's tweet this map to the world!</td>
</tr>
</tbody>
</table>
