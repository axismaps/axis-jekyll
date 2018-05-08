---
layout: post
nav: Blog
status: publish
published: true
title: Zooming In On History
writer:
  display_name: Andy Woodruff
  login: andy
  email: andy@axismaps.com

author_login: andy
author_email: andy@axismaps.com
date: '2015-12-02 14:03:18 +0100'
date_gmt: '2015-12-02 19:03:18 +0100'
categories:
- Cartography
tags:
- Design
- Touch
- Historical
comments: []
project: bpl
---

Last weekend saw the close of a six-month exhibition by the Norman B. Leventhal Map Center at the Boston Public Library titled ["We Are One: Mapping America’s Road from Revolution to Independence,"](http://maps.bpl.org/weareone) a piece of which we at Axis Maps had the pleasure of creating. A commemoration of the 250th anniversary of the [Stamp Act](https://en.wikipedia.org/wiki/Stamp_Act_1765), the exhibition featured an impressive collection of contemporary maps from the years prior to the American Revolution through the early years of the new nation, documenting and providing context for the events leading to American independence.

![A few maps from 'We Are One'](/media/posts/2015/11/bplthumbs.jpg)

<!--break-->

!['We Are One' exhibition](/media/posts/2015/11/bpl_exhibit.jpg)

As part of the exhibit, we designed interactive features for two large touchscreen displays, which allowed visitors to explore many of the maps on display more closely. (This was handy, because one of the display cases literally yelled at you to stand back if you got too close.) The two interactive displays featured maps of different themes, georectified and overlaid on a modern map. Visitors could search for locations and see them in the context of the historic maps, and also browse a curated set of map details.

[![Touchscreen at 'We Are One' exhibition](/media/posts/2015/11/bpl_screen.jpg)](http://zoominginonhistory.com)

If you didn't have the great fortune of being in Boston during the past six months, don't worry! Though the touchscreens are gone, the interactive map browser is on the web—and will work nicely on your phone if you still want to touch it: **[zoominginonhistory.com](http://www.zoominginonhistory.com/)**. (The exhibition itself will be at Colonial Williamsburg in 2016 and at the New York Historical Society after that.)

[![Zooming In On History](/media/posts/2015/11/bpl_screenshot.jpg)](http://zoominginonhistory.com)

This was a fun project to work on, not least because as the lucky local Axis Mapper, I got to pay a few visits with behind-the-scenes looks at the exhibition and other collections of the Leventhal Map Center, as well as attend a fancy opening reception.

More than that, it was an interesting opportunity to make something for a public space where all sorts of different people would see it. This meant some different design choices from our typical web maps. For example, we used a lot of animation with [Animate.css](https://daneden.github.io/animate.css/). Almost everything touchable triggers an animated transition. Even when it's idle, maps still move. The idea was to catch people's eyes as they walk past, and draw them in to explore.

We found that there are special challenges to this kind of work. Put an interactive map in a room with a bunch of tourists for a few months, and you will learn all kinds of new ways in which your map can break. We recommend testing your map by placing a bored yet excitable 4-year-old in front of it.

The touchscreen feature ran simply as a web page in full screen mode. We thought of some precautions to prevent this from breaking—for example, when the screen keyboard appeared, we needed to remove or disable some keys so that someone couldn't press Control-W and kill the whole thing—but didn't fully anticipate the effects of impatient fingers banging on everything in sight, or what would happen when a lot of CSS transitions run for hours on end. So it broke occasionally, and I'd get nerve-wracking video messages from my friends.

<video src="/media/posts/2015/11/bpl.m4v" loop="true" autoplay="true" muted="true" title="#fostertech"></video>

While we easily fixed bugs, implementing a fix was tricky for the exhibition staff. In the exhibition, the interactives ran on local machines, not the web, to ensure connectivity. And in a public space, they couldn't exactly have the computers sitting where visitors could reach them. So to date, this is probably our only project where deploying and update required a ladder.

Go explore **[zoominginonhistory.com](http://www.zoominginonhistory.com/)**, see some cool maps, and learn something about American history—no ladder required!