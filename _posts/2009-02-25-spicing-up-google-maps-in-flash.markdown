---
layout: post
nav: Blog
status: publish
published: true
title: Spicing up Google Maps in Flash
author:
  display_name: Andy Woodruff
  login: andy
  email: andy@axismaps.com
  url: http://www.cartogrammar.com/blog
author_login: andy
author_email: andy@axismaps.com
author_url: http://www.cartogrammar.com/blog
wordpress_id: 257
wordpress_url: http://www.axismaps.com/blog/?p=257
date: '2009-02-25 09:05:43 +0000'
date_gmt: '2009-02-25 14:05:43 +0000'
categories:
- Code
tags:
- Code
- Google Maps
comments:
- id: 2248
  author: Martijn
  author_email: marvanni@hotmail.com
  author_url: ''
  date: '2009-05-15 03:51:16 +0100'
  date_gmt: '2009-05-15 08:51:16 +0100'
  content: "Hi.\n\nThis is awesome!\nI'm trying to make my maps in grayscale and show
    normal colors on mouse over.\n\nQuestion:\n\nI managed it to make the complete
    map in grayscale, but when I try to use your map.getChildAt(1) trick, I get errors.
    \n\nI know this is not a supportforum, but if you could post some more of the
    AS code, I would be greatfull to you!"
- id: 2258
  author: Martijn
  author_email: marvanni@hotmail.com
  author_url: ''
  date: '2009-05-15 12:21:23 +0100'
  date_gmt: '2009-05-15 17:21:23 +0100'
  content: |-
    Nevermind.

    I forgot to add a sprite to the Library.

    Thanks for this Tip!
- id: 6201
  author: Markoff
  author_email: markoff@dir.bg
  author_url: ''
  date: '2009-11-16 19:34:12 +0000'
  date_gmt: '2009-11-17 00:34:12 +0000'
  content: Martijn can you send me working fla for Inverted Grayscale because i can't
    do it. Something's wrong with my code. Thank you markoff__aatt__dir.bg (replace
    __aatt__ with "@")
- id: 73861
  author: Ronald
  author_email: no@thankyou.com
  author_url: ''
  date: '2011-12-19 06:38:54 +0000'
  date_gmt: '2011-12-19 11:38:54 +0000'
  content: it doesn't work anymore..
---
<p><strong><em>Note from the future: the example in this post broke somewhere along the line, but this whole post is obsolete anyway now that the Google Maps API allows <a href="http://www.41latitude.com/post/1268734799/google-styled-maps">styled maps</a>!</em></strong></p>
<p>This isn't news to everyone, but it's worth pointing out the fun things one can do with maps using the ActionScript ColorMatrixFilter.  Tired of the boring old yellow and orange Google map in the Flash API (or any other map in Flash/Flex)?  Lay down a ColorMatrixFilter on that sucker!</p>
<p>The ColorMatrixFilter, if it needs to be pointed out, essentially allows you to mix up the red, green, blue, and alpha channels of vector or raster graphics to produce exciting new colors.  Adobe has a nice little <a href="http://www.adobe.com/devnet/flash/articles/matrix_transformations_04.html">article</a> explaining it, along with an interactive demo.</p>
<p>Here's a little example of simple effects I threw together for Google Maps.  Click the links at the bottom for different looks.</p>
<p>[kml_flashembed publishmethod="static" fversion="9.0.0" useexpressinstall="true" movie="http://work.axismaps.com/flashdemos/Google.swf" width="525" height="440" targetclass="flashmovie"]</p>
<p><a href="http://adobe.com/go/getflashplayer"><img style="border: 0px initial initial;" src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p>
<p>[/kml_flashembed]</p>
<p>I poked around the Google Maps Flash API to find exactly where to apply the filter.  If you apply it directly to the Map instance, you'll color everything, including the Google logo and whatever else floats on top of the map.  One level deeper is better, but will still color makers and info windows.  A second level deeper is the spot.  It's basically like this, where <code>map</code> is the Map instance:</p>
<p><code>var a:Sprite = map.getChildAt(1) as Sprite;<br />
var b:Sprite = a.getChildAt(0) as Sprite;<br />
b.filters = [new ColorMatrixFilter([ /* color matrix values */ ])];</code></p>
<p>In the example above, "Winter" takes the red and green input channels and distributes them equally across all channels, but the blue input remains blue on output.  The result is an desaturated, icy-looking blue. "Inverted Grayscale" turns everything to grayscale, but additionally sets the map's <code>blendMode</code> property to "subtract" and sets it against a white background.  That inverts the grayscale image for a somewhat stylish effect.</p>
<p>Now, let's face it: this is a quick and easy but very limited method for "customizing" a map.  (And to be honest, I'm not sure how kosher it is according to the terms of service.)  It can make a map look cool, but applying the effect to pre-made tiles means that you're altering the colors of <em>all</em> features on the map.  You can't keep the official blue and red of interstate highway shields, for example.</p>
<p>So keep this little trick in mind, but be more excited about <em>actual</em> customization (and open data) with <a href="http://cloudmade.com/products/style-editor">CloudMade</a>.</p>
