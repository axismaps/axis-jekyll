---
layout: post
nav: Blog
status: publish
published: true
title: 'Geography of Jobs: animated mapping with D3'
author:
  display_name: Andy Woodruff
  login: andy
  email: andy@axismaps.com
  url: http://www.cartogrammar.com/blog
author_login: andy
author_email: andy@axismaps.com
author_url: http://www.cartogrammar.com/blog
wordpress_id: 1824
wordpress_url: http://www.axismaps.com/blog/?p=1824
date: '2014-10-29 09:18:56 +0000'
date_gmt: '2014-10-29 14:18:56 +0000'
categories:
- Portfolio
tags: []
comments: []
---
<p>One of our recently completed projects is a new <a href="http://tipstrategies.com/geography-of-jobs/" target="_blank">Geography of Jobs</a> map for TIP Strategies. Have a look at it, and read <a href="http://tipstrategies.com/blog/2014/10/the-new-and-improved-geography-of-jobs/" target="_blank">what they have to say about it</a>.</p>
<p><a href="http://tipstrategies.com/geography-of-jobs/" target="_blank"><img class="aligncenter size-full wp-image-1825" src="{{ site.baseurl }}/media/posts/2014/10/geog_of_jobs.jpg" alt="Geography of Jobs" width="767" height="600" /></a></p>
<p>It's a month-by-month map of job gains or losses over the prior twelve months for most (or all?) of the metropolitan areas of the United States, from 1999 to present. Proportional circles are colored to indicate gain or loss, and the map can either be animated or controlled by moving a slider.</p>
<!--break-->
<p>This is a very straightforward project, and we like it as an example of animated proportional symbol mapping using the <a href="http://d3js.org" target="_blank">D3 library</a>. Data are loaded from a CSV file and plotted on a map drawn with D3's convenient <a href="http://bl.ocks.org/mbostock/5545680" target="_blank">Albers USA projection</a>, which automatically handles Alaska and Hawaii insets. Then we use basic transitions and timers to create animation. The timeline slider uses Bjørn Sandvik's <a href="http://thematicmapping.org/playground/d3/d3.slider/" target="_blank">d3.slider plugin</a>.</p>
<p>Smooth transitions between frames are achieved by tweens (created with D3's <a href="https://github.com/mbostock/d3/wiki/Transitions" target="_blank">transition</a> method) that are the same length as the frames. Although this may obfuscate specific point values, tweening <a href="http://thecartofish.com/FishGoldsBatts2011.pdf" target="_blank">improves change blindness problems</a>, and is just plain nice to watch. Compare the smooth transitions:</p>
<p><img class="alignnone wp-image-1828 size-full" style="margin: 2em 0;" src="{{ site.baseurl }}/media/posts/2014/10/tween.gif" alt="Tween" width="245" height="217" /></p>
<p>With an abrupt version:</p>
<p><img class="alignnone wp-image-1827 size-full" style="margin: 2em 0;" src="{{ site.baseurl }}/media/posts/2014/10/notween.gif" alt="No tween" width="245" height="217" /></p>
<p>Perhaps the latter would be easier to interpret numerically, but in general we expect people to retrieve exact values by poking around the map, rather than watching the animation.</p>
<p>In any case, view source on the map if you're looking for code examples of animated D3 maps!</p>
<p><a href="http://tipstrategies.com/interactive/2014_map/" target="_blank">Geography of Jobs</a></p>
