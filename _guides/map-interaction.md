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

![]({{site.baseurl}}/media/guides/interaction_wntb.jpg)

### Types of map interaction

The different kinds of map interaction in large part overlap the kinds of digital and web interaction in general; indeed, many elements of web maps are standard web page elements used in support of a map. There are some types of interactions that are specific to maps, or at least to data visualization. ~~~Roth citations here~~~

In simple terms, we look at map interactions as supporting three general categories of tasks:

1. Map navigation: changing _where_ the map is focused
2. Data manipulation: changing _what_ the map and supporting elements are showing
3. Search and filter: "navigating" data to refine it or find specific things
4. Information retrieval: getting _more information_ than what the map shows

### Map navigation

While there are a variety of ways to pan and zoom a map, a handful are the most common and well understood. In our experience it's best to stick with some or all of these, and think extra hard about relying on unconventional methods, which can confuse people. Most web mapping libraries, such as Leaflet, support these as core functionality.

- Click and drag (or touch and drag)
- Double click to zoom
- Scroll to zoom
- Pinch to zoom
- Arrow keys to pan *(important for accessibility!)*
- Plus and minus keys to zoom *(ditto)*

In strongly data-driven or storytelling maps, panning and zooming can also be more integrated with data exploration or page elements. For example, clicking on a state on the map might zoom to that state and reveal more details (say, counties); or clicking a state name in a list might do the same; or stepping through sections of a story might automatically move the map to different areas of interest. It's a good shortcut for bringing the map user directly to the thing they're interested in, skipping a lot of manual map movement.

![]({{site.baseurl}}/media/guides/click_to_zoom1.jpg)  
![]({{site.baseurl}}/media/guides/click_to_zoom2.jpg)  
_On this map, clicking the state-level choropleth zooms in and reveals more detail. Note the "click to zoom in" hints and that standard zoom controls also exist, as this behavior may not be obvious to users._	

### Data manipulation

Data manipulation tasks might include:

- Toggling layers (switching between data layers and/or stacking layers on one another)
- Changing data sets
- Changing geographic units (sometimes in conjunction with zoom, as in the example above)
- Reclassifying data

### Search and filter

Searching (looking for specific key words or phrases) and filtering (narrowing down data, for example by category) are common and powerful features of interactive maps that allow users to find what they're looking for amid what could be tons of data. Think of Google Maps: the map contains more information than you can imagine, whether it's visible or not, and its usefulness is in quickly finding what you want by typing in the search box.

Search

- well understood (thanks google)
- users may have high expectations because of that
- don't make it the ONLY entry point to the map unless you're sure people understand what this is and know what to look for

Filter

- category/tag checkboxes
- sliders for ranges
- boolean operators across different lists

### Information retrieval

Retrieving more information than is currently visible on the map is a hallmark of interactive mapping, and can be one of the great benefits of interaction, as you can pack a lot more information into an interactive map than a static map by allowing users to get additional details on demand. Retrieval methods are not as standardized as panning and zooming methods, but mostly come in two flavors. Although they're reasonably common, you can't expect everyone to "get it" right away. Include cues that help users see how to retrieve information.

- Click for more
- Hover tooltip

**Floating elements vs fixed panels**