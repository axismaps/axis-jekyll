---
layout: guide
title: Should a map be interactive?
nav: Guide
category: web
---

The wealth and power of digital tools makes it tempting and easy to turn every map into an interactive, but it is wise to be cautious and conservative when building interactive maps. Interactive maps are costly: in the time and effort required to produce them, in the bandwidth and performance of the sites where they live, and in the work demanded of their users.

### Know your audience

Understansing who will use your map is an important first step in deciding how richly interactive a map ought to be, if at all. Is the map for experts in its subject who will use it for deep explorations of data? Great, harness the power of interactivity and build something sophisticated? Is it for news readers who want to get a quick story? Maybe go with a couple of static maps instead. Especially with maps meant for broad public consumption, be aware that [most people probably won't interact with them](http://mapbrief.com/2017/04/06/few-interact-with-our-interactive-maps-what-can-we-do-about-it/).

![]({{site.baseurl}}/media/guides/complexity_vs_motivation.jpg)

More broadly speaking, the complexity of interactivity, and of the user interface, should be in line with people's motivation to use the map. An overly simplistic map is a failure for highly motivated users just as much as an overly complicated map is a failure for people with short attention spans. It's more than a one-to-one match, though: the map can support users with different levels of motivation, for example greeting people with a friendly a simply interface up front but have more complex tools and actions a bit more hidden for advanced users. [Roth and Harrower discuss this kind of support](http://www.cartographicperspectives.org/index.php/journal/article/view/cp60-roth-harrower/292) on a project we did at the University of Wisconsin; and Gregor Aisch, in a [general defense of interactive graphics](https://www.vis4.net/blog/posts/in-defense-of-interactive-graphics/), gives an interesting example of deliberately hiding advanced uses.

### Let the map speak for itself

As a general rule, if something is important to the purpose of the map, it should be on the map without requiring user interaction. Don't lean on interaction as a crutch to get you out of smart map design. As much as possible, interaction should be an enhancement, not a requirement. An easy example: if you have a choropleth map, show its legend and don't hide it behind a "more info" button.

![]({{site.baseurl}}/media/guides/revolt_tooltip.gif)

Interactive elements can also do the users' work for them. In the animated map above, which shows movement of troops, a tooltip will appear on hover but also automatically opens with some pertinent details, hding even further detail behind a click.

![]({{site.baseurl}}/media/guides/eic_menu_control.gif)

In a similar vein, interactive pieces in and around the map can serve a functional purpose even if the user does not interact with them. Above, the box highlighted in red serves as a drop-down filtering control but also contains text explaining what the map is showing.

![]({{site.baseurl}}/media/guides/merck_labels.png)

Besides thematic data, it's easy to forget that interactive maps need basic elements of static cartography, too. The map above contains tons of points for zip codes and yes, we can hover over them to see what and where they are, but a simple label layer and state boundaries let us orient ourselves without having to probe the map.

### When interactivity is expected

Raise your hand if you've ever done this: you're looking at a paper map on the table and absentmindedly tap it or spread two fingers across it, expecting to see a pop-up or zoom in. The ubiquity of Google Maps et al. in our lives has trained us to expect some level of interactivity in digital maps. While it's not necessarily advisable to build interactivity just because people expect it, it is at least worth managing those expectations.

If something looks interactive, it should be interactive, or else it's a frustrating tease. Take the map below, a static image. Doesn't it just *look* like a web map? (Mercator projection, choropleth plopped on top of a reference layer, etc.) It's frustrating not to be able to pan and zoom.

![]({{site.baseurl}}/media/guides/static_choropleth.png)

buttons etc., and things we think look interactive but that many people probably don't. (why our clients always want big ol' "click to learn more" hints)


### Alternatives to interactivity

per Timoney: lil multies, animated gifs, simple static maps, sticking with comfortable elements (text search)