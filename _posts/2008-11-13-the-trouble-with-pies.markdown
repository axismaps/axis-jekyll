---
layout: post
nav: Blog
status: publish
published: true
title: The trouble with pies
writer:
  display_name: Mark Harrower
  login: mark
  email: mark@axismaps.com
  url: http://www.geography.wisc.edu/~harrower/
author_login: mark
author_email: mark@axismaps.com
author_url: http://www.geography.wisc.edu/~harrower/
wordpress_id: 72
wordpress_url: http://www.axismaps.com/blog/?p=72
date: '2008-11-13 09:29:19 +0000'
date_gmt: '2008-11-13 14:29:19 +0000'
categories:
- Design
tags:
- Design
- graphics
comments:
- id: 25
  writer: Jon Peltier
  author_email: jonpeltier@gmail.com
  author_url: http://peltiertech.com/WordPress/
  date: '2008-11-13 13:32:03 +0000'
  date_gmt: '2008-11-13 18:32:03 +0000'
  content: |-
    Lat's take this one step further. If you have more than about three categories, don't use a pie chart. The pies used in the margins of http://fivethirtyeight.com are a good example: these are effective because they only compare two segments (and sometimes three, and the third is tiny).

    If you have more than three segments (or five if you work in marketing), use a bar or column chart. These avoid several problems with pie charts:

    * a need for different colors for different categories: bar charts can use the same color for all bars, or allow selective highlighting of a bar with a different color.

    * different orientations of different segments: the bars in a bar chart are parallel.

    * ineffective coding of values in areas or angles: bar charts use lengths, which are a snap to compare.
---
<p>I made mention of 3D pie charts in an earlier post and thought I'd outline exactly why they are such a bad idea. As both a teacher and designer I campaign hard against "chart junk" and the needless and confusing eye candy tricks that software companies create to clutter-up our lives. I know these companies need to offer something to try and convince us to upgrade to the new version, but let's be clear: drop-shadowing every element on the page, or adding an outer glow to the text isn't going to make your message any clearer, and will most likely distract from the very thing you're trying to show. My design philosophy can be summed up as:</p>
<p style="text-align: center;"><em>In cartography, aim to be clear, not cool.</em></p>
<!--break-->
<p>Anything that doesn't contribute to the message, or worse, distracts from it, probably doesn't need to be on the page. Since maps are small and the world is large, every inch on the page and every pixel on the screen has to count and we can't afford to waste any of them. Draw what you need, and no more. Fans of Edward Tufte, Presentation Zen (recent post on <a href="http://www.presentationzen.com/presentationzen/2008/07/environmental-graffiti-posted-a-bar-chart-suitable-for-entry-into-the-bar-chart-hall-of-shame-i-made-a-list-of-at-least-ten.html" target="_blank">'chart junk'</a>), or old-school cartographer's like J. K. Wright and Arthur Robinson will recognize all of this - this is hardly a new message. But it is one that still needs to be heard, apparently. For a quick overview of many of these arguments I'd strongly recommend reading <a href="http://go.owu.edu/~jbkrygie/" target="_blank">John Krygier</a>'s excellent post "<a href="http://makingmaps.wordpress.com/2007/08/16/how-useful-is-tufte-for-making-maps/">How useful is Tufte for making maps</a>" (his 20 Tufte-isms is a great crash-course in Tufte).</p>
<p>Consider this graph (<a href="http://www.chartexample.com/chart_example/piechart.php" target="_blank">from here</a>):</p>

![Pure chart junk: This pie chart commits a half dozen major design mistakes rendered it as little more than visual junk food (looks tasty at first, but isn't that good for you).]({{ site.baseurl }}/media/posts/2008/09/pie_chart_lo_res.jpg)
_Pure chart junk: This pie chart commits a half dozen major design mistakes rendered it as little more than visual junk food (looks tasty at first, but isn't that good for you)._

<p>As an information graphic, let's step back and think about what a pie chart is <strong>suppose to do</strong> and how it works at a perceptual level: Pie charts are used to tell us (1) <strong>how much of something exists</strong>, and (2) <strong>how much that is <em>compared</em> to the other categories</strong>. 'How much' is encoded by the size of the pie (or segment) and 'relatively how much' by the internal angles of the pies and/or their relative sizes. To extract data from the graphic you have to be able to quickly visually compute both areas and angles.</p>
<p><strong>The bad news</strong>: Years of testing has shown that most of us are really bad at estimating the areas of even simple shapes - just try visually estimating how much carpet you'll need for a room, especially if the room isn't square if you don't believe me - and we're pretty bad at eyeballing and comparing angles too.</p>
<p><em>Not convinced, you say? </em>Looking at the pie chart above:</p>
<ul>
<li>What percent of the total does DP Tech have?</li>
<li>Is that more or less than IBM?</li>
<li>How much more/less?</li>
</ul>
<p>Now think about presenting those data as a boring old table: DP Tech 4%, IBM 5%. Done. Simple. Think about the difference in <strong>mental workload</strong>, and the <strong>confidence you have in your answer</strong><em> </em>when the data are presented as a 3D oblique pie chart and when they're numbers sitting in front of you. This problem is so commonplace (and yet ignored) that most folks resort to putting numbers on pie charts because the graphic itself is not sufficient, which is waste of ink, their time and mine.<span style="color: #000080;"><strong><span style="color: #000000;"> </span><span style="color: #000000;">If you have that little confidence in your charts, just give me the numbers!</span></strong><br />
</span></p>
<p><span style="color: #000000;">Here's a rule of thumb I like to use: </span></p>
<p style="padding-left: 30px;"><em><span style="color: #000000;">If a map/graphic needs 'crutches' like number labels and can't stand on its own, don't use it. It's the difference between "A Tale of Two Cities" and "A Tale of Two Cities: A Novel."</span></em></p>

![People read the simple 2D pie faster, with greater accuracy AND greater confidence.]({{ site.baseurl }}/media/posts/2008/09/piessmall1.jpg)
_People read the simple 2D pie faster, with greater accuracy AND greater confidence._

<p>The same data is presented three different ways above, and each change made to "enhance" the simple 2D pie chart makes it worse because the two basic perceptual tasks - 'how big is something' and 'what are the angles' - are much harder to perform when the pie is lying down. This is exactly what happens when design decisions are made in a vacuum and based simply on "it looks cooler this way" rather than an understanding what we need from a graphic to make it readable/work.</p>
<p><strong>Problem 1: </strong>Adding the 3rd dimension <em>adds no new information</em> to the graphic. That's bad because it is wasted ink (that could be doing real work) and it requires the tilting of the pie so the designer can show off the 3D effect.<em> If</em> the height (z-dimension) added some additional data (i.e., a second data variable), it might be worth adding, although I would caution against that since we're even worse at estimating volumes than we are at estimating areas (which is why "how many jelly beans in the jar" contests or "how big a moving van do I need?" continue to challenge us - we're terrible at numerically estimating volumes beyond the crude level of "bigger / smaller").</p>
<p><strong>Problem 2:</strong> On both oblique pies <em>the scale is not consistent across the graphic</em>. In other words, the same pie segment will look larger or smaller to you the observer simply based on where it lands in the circle...things closer to us will look larger, even if they're not. This couldn't be more counter-productive when we're simultaneously asking the viewer to estimate areas. <strong>This is an absolute rule:</strong> <span style="text-decoration: underline;"><strong>If you expect people to judge the size of things, don't change the scale of the objects on them.</strong></span></p>
<p><strong>Problem 3:</strong> Splitting the pie apart makes matters worse because the further objects are from each other, the harder it is to compare them (which is why we like to hold things side-by-side if we want to carefully compare them). Why? The extra time and effort it takes for your eyes to search for and <em>acquire</em> the now-separated segments uses-up your precious (visual) working memory and requires more eye trips back-and-forth to make the same estimation. Cognitive scientists call those back-and-forth trips <em>extraneous cognitive load</em> which cut the available brainpower (working memory) that can be devoted to the real task of comparing segments (<em>intrinsic</em> and <em>germane</em> cognitive load).</p>
<p><strong>Solution? </strong>Simple: Stop using oblique, exploded, jazzed-up 3D pie charts. 2D work better, are easy to read, faster to read, and easier to make. Importantly, they also can be drawn much smaller and remain legible - as cartographers we're always looking for ways to do more with less ink. If your powerpoint slides feel naked without fancy transitions and giant 3D graphics, you'd do better to work on the substance of the talk, rather than bury your good ideas in a pile of chart junk.</p>
<p>I'll leave with one of my all-time favorite spoofs - the <a href="http://norvig.com/Gettysburg/sld001.htm" target="_blank">Gettysburg Address as Powerpoint</a>.</div>
