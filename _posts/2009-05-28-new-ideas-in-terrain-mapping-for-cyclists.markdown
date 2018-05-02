---
layout: post
nav: Blog
status: publish
published: true
title: New ideas in terrain mapping for cyclists
writer:
  display_name: Daniel Huffman
  login: dan
  email: mark@axismaps.com
  url: http://
author_login: dan
author_email: mark@axismaps.com
author_url: http://
wordpress_id: 450
wordpress_url: http://www.axismaps.com/blog/?p=450
date: '2009-05-28 13:57:48 +0100'
date_gmt: '2009-05-28 18:57:48 +0100'
categories:
- Design
tags: []
comments:
- id: 2715
  writer: Sam
  author_email: whatever@mailinator.com
  author_url: ''
  date: '2009-05-28 17:16:38 +0100'
  date_gmt: '2009-05-28 22:16:38 +0100'
  content: Maybe this is too obvious, but why not just put the bike routes onto a
    topographic map?
- id: 2728
  writer: Daniel Huffman
  author_email: mrmunion@yahoo.com
  author_url: ''
  date: '2009-05-29 00:14:22 +0100'
  date_gmt: '2009-05-29 05:14:22 +0100'
  content: Such a combination would certainly convey the terrain while showing the
    route, but I was going for something stripped-down. A standard topo map is going
    to tell you about elevation everywhere, not just along the roads, which is all
    you really need. Anything else will be a distraction, if the map is being put
    to this sole purpose.
- id: 2741
  writer: David
  author_email: david0044@hotmail.com
  author_url: ''
  date: '2009-05-29 07:48:03 +0100'
  date_gmt: '2009-05-29 12:48:03 +0100'
  content: |-
    I really like the map.  It reminds me of Charles Joseph Minard's map of Napoleon's March (made famous by Tufte).  I think its visually striking and conveys a significant amount of additional information without much additional "thinking".  Using line weight in this context trumps both color and symbology (those hideous little chevrons).  I've run into similar issues with color and lighting conditions (my maps are often viewed under red light) and like your solution.
      I do think there's something to your observation about the heavy line weight drawing the attention to the map's center where the terrain is high in elevation but relatively flat-but I can't come up with any better alternatives.
      Nice job!
- id: 2749
  writer: Andy
  author_email: andy@axismaps.com
  author_url: http://www.cartogrammar.com/blog
  date: '2009-05-29 13:56:39 +0100'
  date_gmt: '2009-05-29 18:56:39 +0100'
  content: Hey Daniel, great map; I think it works really well. Did you find that
    elevation data somewhere, or did you manually derive it from a topo map or something
    similar?
- id: 2768
  writer: Daniel Huffman
  author_email: mrmunion@yahoo.com
  author_url: ''
  date: '2009-05-30 01:03:50 +0100'
  date_gmt: '2009-05-30 06:03:50 +0100'
  content: Hi Andy. The elevation data, along with the roads, came from the USGS Seamless
    Server. I used Arc to generate contours at 25m intervals, then had it calculate
    an intersect of the contours and the roads. I used those points to figure the
    line widths. The "how" of the process is probably another post in and of itself,
    but I'm still not satisfied with the technique (it's very painstaking and slow)
    yet. Basically, in order to give it a nice smooth appearance (especially at corners
    in the road), I put proportional circles at the intersect points between the contours
    and the roads, and then I do a blend in Illustrator between each circle and the
    one next down the road. A blend with several hundred steps, so that it's a continuous,
    smooth shape. There are probably more efficient ways to do this, but I haven't
    given it enough thought yet.
- id: 3021
  writer: Kip Mercure
  author_email: pkmercure@gmail.com
  author_url: ''
  date: '2009-06-06 08:57:33 +0100'
  date_gmt: '2009-06-06 13:57:33 +0100'
  content: When I first looked at the map, I thought "rivers" where they start small
    at high elevations and get bigger as they go downstream.  The opposite of what
    you intended.  Going uphill, path getting smaller, would also imply difficulty
    getting into a "smaller space."  Great concept.  I bike a charity ride the MS150,
    and might use your idea for my personal map of the ride.  Crediting you of course.
- id: 3024
  writer: Daniel Huffman
  author_email: mrmunion@yahoo.com
  author_url: ''
  date: '2009-06-06 11:05:58 +0100'
  date_gmt: '2009-06-06 16:05:58 +0100'
  content: Hi Kip. Feel free to use the concept - I would be interested to know how
    it works out for you, as it's not yet been field-tested.
- id: 3107
  writer: Bryan
  author_email: bkrouse@cableone.net
  author_url: ''
  date: '2009-06-11 17:36:33 +0100'
  date_gmt: '2009-06-11 22:36:33 +0100'
  content: |-
    Daniel - I like the map and enjoyed the write-up.I,too, would be interested in the methodology of assigning slope to a line. I am in the process of trying to assign slope to a very dense stream network, and have yet to find a method which works. A post on this would be great!

    thanks
- id: 4637
  writer: Jo Wood
  author_email: jwo@soi.city.ac.uk
  author_url: http://www.soi.city.ac.uk/~jwo
  date: '2009-08-04 11:21:22 +0100'
  date_gmt: '2009-08-04 16:21:22 +0100'
  content: |-
    Daniel,

    This is excellent. I am a keen long distance cyclist and a cartographer / infovis person, so your approach really appealed. Following on from your beautiful map, I have been using Processing (www.processing.org) to produce automated profile maps for various cycling routes I have followed using GPS tracks. I have also shared the idea with some fellow cyclists - see http://yacf.co.uk/forum/index.php?topic=20815.0

    More recently I used your approach to create route maps for the 1400km London-Edinburgh-London ride that about 600 of us completed last week -see http://yacf.co.uk/forum/index.php?topic=21759.0. As each of the 18 stages is typically about 80km long with perhaps a hundred or so turnings, I didn't use them for navigation on the bike, but I did use them to assess the lumpiness and effect of wind while out riding. They turned out to be very helpful in deciding whether or not press on or have a sleep stop between stages.

    I tried various experiments with plotting slope, relative and absolute elevation change and using colour symbolisation, but I concluded, like you, that a simple monochrome plot of absolute elevation worked the best. I found that plotting the line width as w = 1 + 20*(z^1.5) where z is the height scaled between 0 (min) and 1 (max height) worked the most effectively. However this does seem to be scale and terrain dependent.
- id: 12048
  writer: Adrianne
  author_email: mareeaguzman@gmail.com
  author_url: http://guitartutorialsblog.com
  date: '2010-06-29 08:40:19 +0100'
  date_gmt: '2010-06-29 13:40:19 +0100'
  content: This is a great idea! I agree with you that it helps the cyclists more
    when we use line widths over color variations.
---
<p style="text-align: center;"><img class="size-full wp-image-452 aligncenter" src="{{ site.baseurl }}/media/posts/2009/05/danielbio1.png" alt="danielbio1" width="525" height="79" /></p>
<p>I live with a couple of cyclists, who spend many of their summer days out on the trails west and south of Madison. A few months ago, one of them asked me to make a bike map for him, pointing out what he felt was a shortcoming of the ones available to him: it's hard to figure out where the hills are. This is particularly critical if you ride in places like the <a href="http://en.wikipedia.org/wiki/Driftless_Area" target="_blank">Driftless Area</a>, as my roomates do. A map showing you where to turn and which roads have wide shoulders and low auto traffic is very useful, but it doesn't tell you how rough the next hill is going to be.</p>

![Figure 1: The above is a draft of one of my first attempts, in this case depicting a particular ride that one of my roommates hopes to participate in this summer. click to see fullsize]({{ site.baseurl }}/media/posts/2009/05/fig13.png)
_Figure 1: The above is a draft of one of my first attempts, in this case depicting a particular ride that one of my roommates hopes to participate in this summer. click to see fullsize_
<!--break-->
<p>So I set to work considering how best to show elevation changes along a route, and I came up with a relatively simple concept: encode the elevation of points along the route using line width.</p>
<p>The symbology here is, I think, fairly efficient. By varying the width I am encoding three pieces of information: the elevation of the path, the slope, and the aspect. The first is not particularly useful, but the other two are the critical pieces of information for the cyclist. Importantly, both need to be on the map together - knowing the slope of a hill is great, but you also have to know whether, as you head along the road, you'll be climbing up that steep grade or coasting down. Getting all that information into one symbol is not necessarily that hard. Both slope and aspect are derived from elevation, so it's really just a matter of producing a map which shows elevation in a way that makes it easy to see the pattern of how elevation changes. Show the one variable, and your brain fills in the other two. But, it works a lot better if the symbology makes it easier for your brain to figure out how elevation changes. Compare the two maps below:</p>

![Figure 2: Using the visual variables of lightness or size to encode data]({{ site.baseurl }}/media/posts/2009/05/fig2.png)
_Figure 2: Using the visual variables of lightness or size to encode data_

<p>One encodes elevation along the path by width, and the other by color value. In my opinion, slope is much easier to figure out when line width changes than when the color value does. The color at A is darker than the color at B - but can you quantify <em>how much</em> darker? And can you do it as easily as you can tell how much wider the line is it at A vs B? Speed and ease of understanding are, I think, particularly important given how the maps are to be used. I am told that these will be read by people who don't even stop their bikes while reading the map (I don't really know anything about biking - I'm not usually permitted outside the confines of the UW Cartography Lab). So, the map has to work when they're not looking closely or long at it. The second advantage of line widths over something like color variations is that line widths are more robust - they won't vary according to lighting conditions, as the users bike in and out of the shade of trees and in varying levels of cloud cover.</p>
<p>The map on the left (using lightness) does have a couple advantages of its own. A small one: by not changing line width, we don't have to worry about lines getting too wide (causing crowding) or too narrow (and thus being hard to see). The other advantage is really more of a lack of a disadvantage - the highest elevations are not dominant. Look back at Figure One for a moment - notice how the south-center part of the map stands out the most. It's at the highest elevation, so it has the widest lines. But it's also mostly flat stretches, which means that it's not a big deal to our cyclist - they want to know about the hills, about the changes. Encoding elevation by colors keeps the reader from focusing attention as much on the high elevations, which won't stand out quite so badly.</p>
<p>Instead of encoding something the cyclist doesn't care about (elevation) and letting them figure out the things they do want to know (slope and aspect), we could just encode the latter directly. Again, though, we need both for it to be useful, and so here's where it gets tricky. Slope isn't so bad - it's just however many degrees the angle is, so that's something we can pretty easily put into a color ramp, for example. But aspect is the hard part, since it depends on which way you're going down the road. It's uphill one way, and downhill the other. You could put little arrows or some other indicator next to the road to indicate which way is uphill. Or perhaps encode the aspect in color hue (red for north, blue for east, etc.) while changing the lightness of the color to indicate the grade. Or, you might try this:</p>

![Figure 3: The arrow points downhill, and larger arrows or darker ones indicate steeper slopes.]({{ site.baseurl }}/media/posts/2009/05/fig3.png)
_Figure 3: The arrow points downhill, and larger arrows or darker ones indicate steeper slopes._

<p>There are more possibilities, obviously. But I am of the opinion that these solutions are somewhat weaker than simply showing elevation directly - the reader has to process two different symbols (or two properties of the same symbol) and extract two pieces of information. Maybe that's still easier than processing the symbols to extract elevation, and then calculating slope and aspect internally. But I do not think so. If you present someone with a map they intend to use to figure out the lay of the land, they're expecting to see the terrain - hills, valleys, etc. Figure 3 above is getting <em>too</em> abstract. It doesn't feel like land anymore, and so it's harder to interpret. This is why people like hillshading - mountains look like mountains, and that's something we can understand without a lot of processing.</p>
<p>I imagine a reader could train themselves to interpret something like Figure 3 faster and easier, since it does show what they want to know with about the least amount of ink possible, and without showing anything extraneous. But that will take effort and learning. Right out of the gate, I think a map showing elevation is easier to understand, because it's a lot easier to figure out what the landscape is going to look like.</p>
<p>Thinking about the landscape was, in fact, what led me to the initial technique of encoding elevation by line weight. I had simply thought of it in terms of looking down on the world from high up. Roads which are at a higher elevation would be closer to your eye, and so appear larger than those far down in valleys. Whether or not this particular concept is working in the back of people's minds when they see these maps is another matter, but it at least provided the inspiration. The more academic analysis came later, much of it while I was writing this up.</p>
<p>While I appreciate any general feedback readers would be so kind as to provide, I'm particularly interested to know if anyone's seen anything like this before. It's not a terribly complicated symbology idea, so I imagine someone somewhere must have thought of this.</p>
