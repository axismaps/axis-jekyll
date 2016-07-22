---
layout: guide
title: Map interaction
nav: Guide
category: web
---

In the broadest terms, we may think of an _interactive map_ as one that can be changed in some way by user manipulation—even spinning a globe or sticking a pin in a wall map. Most commonly, however, when we talk about an interactive map we mean one that is:

1. Digital (displayed on a computer, tablet, smartphone, etc.)
2. Responsive to direct user manipulation (click, touch, etc.)
3. Changeable in the map contents or data displays themselves, as opposed to swapping out static images.

The third point is not absolute, as stepping through images is still a designed, interactive experience, but here we are focused on interactions within the map itself.

### Types of map interaction

The different kinds of map interaction in large part overlap the kinds of digital and web interaction in general; indeed, many elements of web maps are standard web page elements used in support of a map. There are some types of interactions that are specific to maps, or at least to data visualization. ~~~Roth citations here~~~

In simple terms, we look at map interactions as supporting three general categories of tasks:

1. Map navigation: changing _where_ the map is focused
2. Data manipulation: changing _what_ the map and supporting elements are showing
3. Information retrieval: getting _more information_ than what the map shows

### Panning and zooming

While there are a variety of ways to pan and zoom a map, a handful are the most common and well understood. In our experience it's best to stick with some or all of these, and think extra hard about using other methods, as they may be confusing or at best unnecessary. Most web mapping libraries, such as Leaflet, support these methods as core functionality.

**Click and drag (or touch and drag)**: this is a near-universally understood way to pan a map, thanks to Google Maps and its ilk.

**Double click to zoom**: Double clicking zooms the map in a fixed amount.

**Scroll to zoom**: On non-touch devices, scroll gestures commonly zoom a map in our out (again Google Maps, etc. do this). Some mapping platforms use scrolling to pan the map—please note that this will drive modern web-savvy users absolutely bonkers, so we do not recommend it.

**Pinch to zoom**: Two-finger pinching is a standard touch method for zooming.

**Arrow keys to pan**: Don't forget keyboard support! Not only is this a standard, well-understood capability, keyboard controls are very important for accessibility.

**Plus and minus keys to zoom**: Like above, keyboard control for map zooming is important.

**Click to zoom to a feature**: In strongly data-driven or storytelling maps, clicking on a map feature (such a state or county) may cause the map to zoom in and focus on that feature. It's a good shortcut for bringing the map user directly to the thing they're interested in, skipping a lot of manual map movement. This can also work with non-map elements: for example, if your map of states also includes a list of states, clicking a state in the list can trigger a map zoom to that state.