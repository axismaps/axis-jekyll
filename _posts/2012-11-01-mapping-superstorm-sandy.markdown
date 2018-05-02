---
layout: post
nav: Blog
status: publish
published: true
title: Mapping Superstorm Sandy
writer:
  display_name: David Heyman

  email: dave@axismaps.com

author_login: dave
author_email: dave@axismaps.com
wordpress_id: 1463
wordpress_url: http://www.axismaps.com/blog/?p=1463
date: '2012-11-01 14:13:19 +0000'
date_gmt: '2012-11-01 19:13:19 +0000'
categories:
- Uncategorized
tags: []
comments: []
---
<p>Poking around on Twitter today I saw a couple mentions of <a href="http://tmappsevents.esri.com/website/sandy-impact/" target="_blank">this map from ESRI</a>, next in what I'm sure will be a long line of maps about Superstorm Sandy. This was the first thematic map I've seen about the storm but it struck me as hugely ineffective. Comparing 2 variables (census statistics vs. storm impact) requires a bivariate map. Mapping one variable and hiding the other one behind a mouse action makes it impossible to see any trends or gain any meaning from the two datasets as a whole. Unless you're interested in just a couple of counties or having the clicking abilities of a 14-year old Farmville addict, the relationship between the data will be lost.</p>
<p>After manually replicating the data from the map, I put together some quick maps of a few value-by-alpha maps (here's a <a href="http://www.geovista.psu.edu/publications/2010/RothEtAl_2010_CJ.pdf" target="_blank">stellar though academic introduction</a> from its inventors) using <a href="http://indiemapper.io" target="_blank">indiemapper</a>. VBA maps were originally conceived to <a href="http://www.axismaps.com/blog/2008/11/a-new-kind-of-election-map/" target="_blank">visualize election results</a> by visually-weighting (using alpha) red / blue colored counties by their relative populations. The end result gives you an overall sense of the election by making those counties which contributed more to the result (because of their higher population) more visually prominent.</p>
<!--break-->
<p>These maps use the same technique except now alpha is controlled by storm impact. Areas with a higher level of impact are more visually prominent that areas of less impact. These maps hopefully quickly give you an understanding of the population affected by the storm. While I'm sure this was the intention of the ESRI map, because of some misplaced interactivity trumping <a href="http://www.axismaps.com/blog/2012/10/the-aesthetician-and-the-cartographer/">thoughtful cartography</a>, it can't say the same.</p>
<h2>Median Income</h2>
<p><img class=" aligncenter" style="display: block; margin-left: auto; margin-right: auto;" title="income.jpg" src="{{ site.baseurl }}/media/posts/2012/11/income1.jpg" alt="Income" width="704" height="807" border="0" /></p>
<h2>Black Population</h2>
<p><img class=" aligncenter" style="display: block; margin-left: auto; margin-right: auto;" title="black.jpg" src="{{ site.baseurl }}/media/posts/2012/11/black3.jpg" alt="Black" width="704" height="807" border="0" /></p>
<h2>Percent Residents on Medicare</h2>
<p><img style="display: block; margin-left: auto; margin-right: auto;" title="medicare.jpg" src="{{ site.baseurl }}/media/posts/2012/11/medicare1.jpg" alt="Medicare" width="704" height="807" border="0" /></p>
<h2>Percent Uninsured</h2>
<p><img style="display: block; margin-left: auto; margin-right: auto;" title="uninsured.jpg" src="{{ site.baseurl }}/media/posts/2012/11/uninsured1.jpg" alt="Uninsured" width="704" height="807" border="0" /></p>
<h2>Unemployment Rate</h2>
<p><img style="display: block; margin-left: auto; margin-right: auto;" title="unemployment.jpg" src="{{ site.baseurl }}/media/posts/2012/11/unemployment3.jpg" alt="Unemployment" width="704" height="807" border="0" /></p>
