---
layout: post
status: publish
published: true
title: The geography of presidential campaign rhetoric
author:
  display_name: Andy Woodruff
  login: andy
  email: andy@axismaps.com
  url: http://www.cartogrammar.com/blog
author_login: andy
author_email: andy@axismaps.com
author_url: http://www.cartogrammar.com/blog
wordpress_id: 122
wordpress_url: http://www.axismaps.com/blog/?p=122
date: '2008-10-29 08:16:46 +0000'
date_gmt: '2008-10-29 13:16:46 +0000'
categories:
- Code
tags:
- Code
- election
comments: []
---
<p>A few months ago I started on a little side project to visualize presidential campaign speeches spatially. My idea was to collect speeches by the 2008 US presidential candidates, generate a word cloud of the most common words in each, and each word cloud on a map in the location where the speech was given.  We've seen a number of text visualizations and analyses, sometimes in-depth, during this campaign, but so far not by geography that I can recall.  (See those from <a href="http://mkweb.bcgsc.ca/debates/"><span class="right">Martin Krzywinski</span></a>, and <a href="http://www.nytimes.com/interactive/2008/09/04/us/politics/20080905_WORDS_GRAPHIC.html">The</a> <a href="http://vizlab.nytimes.com/visualizations/mccain-stump-speech-america-2">New York</a> <a href="http://vizlab.nytimes.com/visualizations/obama-dnc-acceptance-speech-wordle-2">Times</a> with help from <a href="http://services.alphaworks.ibm.com/manyeyes/home">Many Eyes</a>, for just a few examples.)  Are the candidates speaking to different issues in different parts of the country?  Are they talking about jobs in Michigan and immigration in New Mexico?  Are they pandering to everyone, everywhere they go?  (Can we call this project PanderViz?)  <a href="http://www.axismaps.com/campaignspeeches/">Visualizing campaign words on a map</a> might answer such questions.</p>
<p style="text-align: center; "><a href="http://work.axismaps.com/campaignspeeches/"><img class=" aligncenter" title="Campaign speech word clouds" src="http://work.axismaps.com/campaignspeeches/images/wordcloud_medpreview.jpg" alt="Campaign speeches by John McCain and Barack Obama as word clouds. (Click for a larger map)" width="525" height="342" /></a></p>
<p>We hoped to develop this idea into a sophisticated interactive map in which a user could search for words, filter speeches by date, and so on.  Other work has kept us from doing that before the election next week, but it seems worth showing some screenshots from what I did manage to get done originally.</p>
<p>I went to the official websites of the Obama and McCain campaigns, where the text of speeches is transcribed, and ran the speeches through a simple PHP script to count words and record the location of the speech.  This week I revisited the sites to catch up on speeches since the summer.  These sources have their drawbacks, of course.  For one, although as prepared speeches they contain perhaps the most carefully chosen words for a particular audiences, they do not represent the complete vocabulary used on the campaign trail.  Also, Obama's team has been more diligent in posting speeches, it seems, providing close to 80 speeches since May, compared to about 30 for McCain, a disparity that makes comparison between the two candidates a bit difficult.</p>
<p>As far as I got with the capabilities of this map was generating scale-dependent word clouds (I've written more about those on my <a href="http://www.cartogrammar.com/blog/mapping-tag-clouds/">personal site</a>) and searching for individual words to display proportional symbols representing the frequency of use.  With less than a week until election day, we might as well get out of it what we can, so I've generated a series of maps of word clouds and individual word frequencies.</p>
<p style="text-align: center;"><img class=" aligncenter" title="War by McCain" src="http://work.axismaps.com/campaignspeeches/images/war_mccain.jpg" alt="Use of the word war by John McCain" width="525" height="360" /></p>
<p style="text-align: center;"><img class=" aligncenter" title="War by Obama" src="http://work.axismaps.com/campaignspeeches/images/war_obama.jpg" alt="Use of the word war by Barack Obama" width="525" height="360" /></p>
<p>The whole series is long—obnoxiously long for a blog page—so it's at a separate page, linked below.  Enjoy, and please comment if there's an interesting word to look up that I didn't think of!</p>
<p><strong>See the full article:</strong> <a href="http://work.axismaps.com/campaignspeeches">The Geography of Presidential Campaign Speeches</a></p>
