---
layout: post
nav: Blog
status: publish
published: true
title: Data Probing and Info Window Design on Web-based Maps
writer:
  display_name: Ben Sheesley
  login: ben
  email: ben@axismaps.com

author_login: ben
author_email: ben@axismaps.com
wordpress_id: 484
wordpress_url: http://www.axismaps.com/blog/?p=484
date: '2009-07-13 10:09:40 +0100'
date_gmt: '2009-07-13 15:09:40 +0100'
categories:
- Design
- Cartography
tags: []
comments:
- id: 4171
  writer: Daniel Huffman
  author_email: mrmunion@yahoo.com
  author_url: http://cartastrophe.wordpress.com
  date: '2009-07-13 12:43:34 +0100'
  date_gmt: '2009-07-13 17:43:34 +0100'
  content: One thing that came to mind when you were talking about keeping the info
    window from obscuring too much of the map was the use of transparency. Do you
    see that as a viable option? One of the examples you gave does make some use of
    it. I can see how there would be a challenge in making things transparent enough
    to be worth it, while still being legible and easy to focus attention on.
- id: 4199
  writer: ben
  author_email: ben@axismaps.com
  author_url: http://
  date: '2009-07-14 08:33:26 +0100'
  date_gmt: '2009-07-14 13:33:26 +0100'
  content: |-
    I think you nailed it on the head, Daniel. I'm hesitant to add background transparency because of the same challenges you mention--legibility and attention should be top priority. (I shy away from transparent menu bars and drop-down lists for these reasons, as well.)

    In the <a href="http://oakland.crimespotting.org/" rel="nofollow">Oakland Crimespotting</a> example, the small amount of transparency can be helpful for detecting the <em>presence</em> of neighboring incidents (but even this takes a good deal of concentration). Anything more, like distinguishing marker colors or reading marker labels is far more work than it's worth. Even so, I think transparency gets us part of the way there without causing legibility problems, and perhaps with a little testing could even be increased a little.

    Another thing to consider here is probe content and base map design. I tend to find longer text descriptions more tiring to read on transparent backgrounds than shorter ones (Crimespotting is mostly just titles and short one-line text strings), especially if the underlying base map is complex (lots of colors, lines, labels, etc.). On the other hand, if images are the primary content or the base map is emptier than a typical Google or OpenStreetMap layer, perhaps more transparency could be added to the window background.
---
<p><strong>Info windows</strong> are the familiar pop-up balloons that often appear when interacting with features on a map. This activity is generally called data probing. For example, click on a <a href="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=chicago,+il&amp;sll=37.0625,-95.677068&amp;sspn=54.753001,74.179688&amp;ie=UTF8&amp;ll=41.908409,-87.624207&amp;spn=0.406764,0.579529&amp;t=h&amp;z=11&amp;iwloc=poi1">Google Maps marker</a> and up comes a little bubble with information about the place. The uses for data probing are seemingly limitless, ranging from the retrieval of map-based comments, annotations, and descriptions of 'what's here?', to map stats and info graphics, to map use instructions (e.g., "get directions"), explanations (e.g., "group of 3 markers"), and controls (e.g., "zoom here"), to alternate map views (e.g., an historical map). All of this, of course, can come through in the form of text, photos, audio, and video.</p>
<p><em>Data probing is essential.</em> In one sense, its needed because we've got tons of data about the world, but just small, low-resolution computer screens to view it all on. Like a drop-down list or an accordion menu on a Web page, data probing is a design compromise that can save space on maps. In another sense, however, data probing is an important design decision that can help direct map readers' attention and understanding from the general to the specific by offering details on demand. Without data probing, we'd either have crazy-cluttered maps or watered-down maps not taking advantage of all of that rich data out there.</p>
<p>Of course, data probing is everywhere outside of mapping as well; on charts, graphs and all sorts of other info graphics. But here I focus on Web maps, specifically on info window design, and outline some major <em>design considerations</em> and provide a few <em>examples</em> that could help inspire your next effort.</p>
<!--break-->
<p><strong>Design Considerations</strong><br />
<strong>1) Size</strong><br />
Large footprint info windows hold lots of data but end up obscuring much of the map itself. Often, it's the <em>geographical context</em> and the <em>distribution of data</em> around a probed location that's helpful for a more complete understanding of a place. When an info window obscures the map, the missing section must be held temporarily in a user's working memory until the window is closed. For this reason, it's usually worth minimizing this kind of cognitive load and coming up with ways to make info windows more compact.</p>
<p><em>Compactness</em> depends a lot on the volume of data that will wind up in the info window. Tiny, "tool tip"-sized window are great for small amounts of data, like a summary statistic, geographical feature name or ID, or a line of text. Larger windows, holding multiline text, images, etc., typically range between 250-350px wide and 100-400px tall. On some maps, both sizes can be used in tandem to good effect, like in the <a href="http://www.map.wisc.edu/">University of Wisconsin Campus Map</a> (below).</p>

![University of Wisconsin, Campus Map]({{ site.baseurl }}/media/posts/2009/07/uwCampusProbes2.jpg)
_University of Wisconsin Campus Map, showing large and small info windows._

<p>Instead of expanding much beyond the larger size mentioned, its worth considering ways of <em>organizing info window content</em> to keep the footprint compact. One solution we really like is the idea of using tabs to categorize content and/or mini-slideshows for previewing distinct chunks of material. EveryBlock's <a href="http://chicago.everyblock.com/">city maps</a> and Stamen Design's <a href="http://www.london2012.com/in-your-area/map/index.php">London 2012 map</a> are good examples:</p>

![EveryBlock city map]({{ site.baseurl }}/media/posts/2009/07/everyblock_probeSlideshow.jpg)
_EveryBlock info window, showing mini-slideshow content._

![London 2012 map]({{ site.baseurl }}/media/posts/2009/07/stamen_probeTabs.jpg)
_London 2012 info window, showing tabbed content._

<p>We also like the idea of info windows that <em>re-size dynamically</em> (within limits) to best fit their content. When content is just a bit larger than a probe window, this can prevent the need for a scroll bar, which just creates extra work for the map user. Conversely, when content is small, the window shrinks to fit, avoiding big blank spaces that unnecessarily obscure the map. Really large amounts of content, like a full news article, are probably best presented on a new page or somewhere off the map and retrieved via hypertext links (e.g., "full text").</p>

![Avoid too much empty space]({{ site.baseurl }}/media/posts/2009/07/avoidProbe_blankSpace.jpg)
_Avoid too much empty space._

<p><strong>2) Position</strong><br />
If we apply what we learn from <a href="http://en.wikipedia.org/wiki/Eduard_Imhof">Eduard Imhof</a>'s work on label positioning, the preferred place for an info window attached to points and other small objects would be <em>to the right and somewhat above it</em>. In contrast, left and in-line positioning would be less desirable, although Imhof acknowledges that any placement is permissible and sometimes even necessary. Compared to positioning map labels, however, info windows are somewhat of a unique challenge. This is partly because they tend to be larger in size and partly because of our interest in keeping them on screen when opened near the edges of a map or application window.</p>

![Avoid cutting-off info windows.]({{ site.baseurl }}/media/posts/2009/07/avoidProbe_cutOff.jpg)
_Avoid cutting-off info windows._

<p>Perhaps the most common approach to keeping info windows on the screen is to <em>auto-pan the map</em>. This works especially well if the map extent is limitless in all directions, because there's no concern about auto-panning off the edge. Too much auto panning, however, can be disorienting, especially when the action itself is unexpected or the distance and speed of panning are too great. Auto panning can also be disrupting to users, due to a change in the map extent, which can alter the location or visibility of markers and data layers previously in view.</p>
<p>One 'smart' info window that I really like repositions itself left/right/top/bottom around a probed location to stay on screen AND minimize the amount of auto-panning. There's a <a href="http://gmaps-samples-flash.googlecode.com/svn/trunk/demos/SmartInfoWindowDemo/SmartInfoWindowDemo.html">working example</a> and <a href="http://gmaps-samples-flash.googlecode.com/svn/trunk/demos/SmartInfoWindowDemo/srcview/index.html">source code</a> for this by Dmitir Abramov. Maybe, a 'super-smart' info window would also be aware of related geo-data (e.g., map markers) and reposition itself to minimize contact with that, as well?</p>
<p><strong>3) Stem</strong><br />
The info window stem is the visual link that connects it to a probed location. The problem of obscuring map context <em>in the immediate spatial neighborhood</em> can be solved by lengthening and/or shifting the stem along the window's edge. It's often the immediate geographical context that we're most interested in, anyway. The question, 'what's near here?' can be as interesting, if not more interesting than 'what's here?'. So, generally speaking, we prefer longish tails, but can think of cases where a short tail would be preferred (e.g., like on cell phone maps or other tiny map windows).</p>

![Longer stems can reveal neighboring map content.]({{ site.baseurl }}/media/posts/2009/07/longStem.jpg)
_Longer stems can reveal neighboring map content._

<p>Another option is to go without a stem at all, which keeps the area around a probed location totally open. The strong connection between location and info window is lost, but this can be restored to some degree with a highlighting technique, like in the The New York Times map, <a href="http://www.nytimes.com/interactive/2009/03/03/us/20090303_LEONHARDT.html">Geography of a Recession</a>, below. Here, the highlight (black outline) gives users positive feedback and helps link it to the info window, which appears/disappears on mouse-over/off. For stemless windows that are persistent, (i.e., require a click to open and/or close) highlighting becomes even more important to maintain this visual connection.</p>

![New York Times info window without a stem.]({{ site.baseurl }}/media/posts/2009/07/nyTimes_stemlessProbe.jpg)
_New York Times info window without a stem._

<p><strong>4) Open/Close</strong><br />
Opening and closing an info window should be immediately obvious to users. The advantage of mouse-over windows, like in the NYTimes example above, is that they appear with almost no effort at all and can't easily be missed. However, this 'always on' nature can make if feel 'in the way' sometimes, especially if finding non-probable map or window space takes work.</p>
<p>A really obvious "X" button in the upper right corner is maybe the most immediately obvious way to close a probe. Clicking 'away' from the info window itself can also be effective, as long as other uses for a mouse click are also considered. In other words, should an info window close upon click+drag map panning? (Probably not.) Should it close when another location is probed via mouse click? (Probably, yes.)</p>
<p>One option that I don't see too much of is that for opening <em>multiple info windows simultaneously</em>. Two or more open windows is very basic, yet invaluable, way of comparing details across locations. Universal Mind's <a href="http://www.universalmind.com/demo/launchpad/GeoLayer.html">LaunchPad demo</a> (below) allows users to open multiple info windows and then drag-and-drop them anywhere on the map. A similar approach might give users the option of "pinning" info windows to the map at their stem points, thus maintaining stronger visual linkages to locations. Perhaps, the windows could also be repositioned, with stems changing in length and direction.</p>

![Universal Mind's LaunchPad, showing multiple info windows.]({{ site.baseurl }}/media/posts/2009/07/universalMind_multiProbe.jpg)
_Universal Mind's LaunchPad, showing multiple info windows._

<p><strong>5) Look and Feel</strong></p>
<ul>
<li><strong>Drop Shadow.</strong> Drop shadows helps focus attention on info windows, elevating them above other map content and setting them apart from visually complex map backgrounds.</li>
</ul>
<ul>
<li><strong>Window Corners.</strong> Choice of square or rounded corners is mostly a stylistic decision. If rounded, make sure that the corner radius stays constant when scaling dynamically (<a href="http://livedocs.adobe.com/flash/9.0/UsingFlash/help.html?content=WSd60f23110762d6b883b18f10cb1fe1af6-7db8.html">9-slice scaling</a> works well for this).</li>
</ul>
<ul>
<li><strong>Title.</strong> Window titles should help users answer basic questions like, 'what are we looking at here?', or 'what is the name / address of this probed location?'</li>
</ul>
<ul>
<li><strong>Graphic Styles.</strong> Good use of type styles and colors, background color, and/or subtle divider lines can help organize content and go along way in making it faster and easier to read.</li>
</ul>
<ul>
<li><strong>Stem Position and Angle.</strong> Stems positioned too closely to a corner can appear somewhat unstable. An angled stem, as opposed to a stem that extends perpendicularly from a side, can add a bit of visual interest, but too sharp of an angle can appear awkward, as shown below. <em>Corner-anchored stems</em>, although more uncommon, distance a window farther from its location than side-anchored stems, assuming equal lengths. They seem to appear most stable when extending at about 45 degrees (see below).</li>
</ul>

![Stems at steep angles or near corners appear less stable.]({{ site.baseurl }}/media/posts/2009/07/angleProbes.jpg)
_Stems at steep angles or near corners appear less stable._

![Corner stems appear most stable at a 45-degree angle.]({{ site.baseurl }}/media/posts/2009/07/cornerProbe.jpg)
_Corner stems appear most stable at a 45-degree angle._

<p><strong>Alternatives to Info Windows</strong><br />
There are plenty of examples in which data probing doesn't bring up an info window at all. Rather, data is presented in some other part of the page or user interface. Although obscuring map surface area can be avoided this way, one issue to consider is <em>split attention</em>. This can weaken linkages and create more work for the user, whose attention has to be in multiple places--and potentially across large distances--on screen. <a href="http://www.openstreetmap.org/">OpenStreetMap</a> and <a href="http://www.flickr.com/map/">Flickr's Yahoo! Maps mashup</a> are both good examples of this alternative.</p>

![OpenStreetMap splits apart a probed location (blue outline) and its related info.]({{ site.baseurl }}/media/posts/2009/07/osmProbe.jpg)
_OpenStreetMap splits apart a probed location (blue outline) and its related info._

![Flickr's map splits apart a probed location (white star outline) and its info.]({{ site.baseurl }}/media/posts/2009/07/flickrProbe.jpg)
_Flickr's map splits apart a probed location (white star outline) and its info._

<p><strong>Other Examples of Info Windows</strong><br />
<strong>1) Bing Maps</strong><br />
<strong> </strong>Mouse over/off to open/close. Dynamic window and stem positioning. No auto-panning. Short stem. Dynamic scaling.</p>

![Bing Maps]({{ site.baseurl }}/media/posts/2009/07/bingProbe.jpg)
_Bing Maps_

<p><strong>2) Google Maps</strong><br />
Click to open/close. Window and stem are fixed position. Auto-pan to stay on screen. Long stem. Dynamic scaling.</p>

![Google Maps]({{ site.baseurl }}/media/posts/2009/07/googleProbe1.jpg)
_Google Maps_

<p><strong>3) Stamen Design, Oakland Crimespotting</strong><br />
Click to open/close. Scrolling content. Fixed size and position. Short stem. Slight semi-transparent background.</p>

![Stamen Design, Oakland Crimespotting]({{ site.baseurl }}/media/posts/2009/07/stamenProbe_2.jpg)
_Stamen Design, Oakland Crimespotting_

<p><strong>4) Washington post, Time-Space: World</strong><br />
Modified Google info window. Click to open/close (small info window on mouse-over). Blue scroll buttons move between points in the cluster for a unique way of organizing content.</p>

![Washington Post, Time-Space: World]({{ site.baseurl }}/media/posts/2009/07/washPost_probe.jpg)
_Washington Post, Time-Space: World_

<p><strong>5) Yahoo! Maps</strong><br />
Click to open/close (small info window on mouse-over). Window and stem are fixed position. Auto-pan to stay on screen. Short, almost non-existent, stem. Dynamic scaling.</p>

![Yahoo! Maps]({{ site.baseurl }}/media/posts/2009/07/yahooProbe_2.jpg)
_Yahoo! Maps_