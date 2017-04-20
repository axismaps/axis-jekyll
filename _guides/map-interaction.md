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

![]({{site.baseurl}}/media/guides/interaction_wntb.jpg)

### Types of map interaction

The different kinds of map interaction in large part overlap the kinds of digital and web interaction in general; indeed, many elements of web maps are standard web page elements used in support of a map. There is some [research toward taxonomies of cartographic interaction](http://geography.wisc.edu/faculty/roth/publications/Roth_2013_TVCG.pdf) specifically, however, such as that of Robert Roth.

In simpler terms, we look at map interactions as supporting a few general categories of tasks:

1. Map navigation: changing _where_ the map is focused
2. Data manipulation: changing _what_ the map and supporting elements are showing
3. Search and filter: _finding_ specific objects or sets of objects
4. Information retrieval: getting _more information_ than what the map shows

### Map navigation

For the most part, map navigation means panning and zooming by direct manipulation. A handful of methods are common and expected by users; if a map is going to support panning and zooming at all, it should support these methods as much as possible—and avoid unconventional and confusing methods. (Looking at you, maps that use scroll wheel to pan.)

- Click and drag (or touch and drag)
- Double click to zoom
- Scroll to zoom
- Pinch to zoom
- Arrow keys to pan *(important for accessibility!)*
- Plus and minus keys to zoom *(ditto)*s

Additionally, sophisticated data- or story-driven maps often fold automatic panning and zooming into interactions with the data or story, a helpful way to guide users through something potentially very complex. For example, clicking on the state choropleth map below zooms to a state and reveals data in finer geographic detail.

![]({{site.baseurl}}/media/guides/ajpp_zoom.gif)

Or, in a map with a narrative story such as below, advancing through the story (via arrow buttons at the top left, among other methods) moves the map to different points of interest.

![]({{site.baseurl}}/media/guides/revolt_zoom.gif)

Notably, both of the above examples also allow free panning and zooming, as this is generally expected in web maps. The automated navigation is an extra touch to help guide users' attention to important things.

### Data manipulation

Data manipulation tasks might include:

- Toggling layers (switching between data layers and/or stacking layers on one another)
- Changing data sets
- Changing geographic units (sometimes in conjunction with zoom, as in the example above)
- Reclassifying data

### Search and filter

Searching (looking for specific key words or phrases) and filtering (narrowing down data, for example by category) are common and powerful features of interactive maps that allow users to find what they're looking for amid what could be tons of data. Think of Google Maps: the map contains more information than you can imagine, whether it's visible or not, and its usefulness is in quickly finding what you want by typing in the search box.

Typically searching and filtering will ask one or more of three ways:

- *Where?* Find the location of something
- *When?* Find something based on date or time
- *What?* Find something based on its name, description, etc.

#### Search

Google is both a blessing and a curse to the web cartographer. On the one hand, almost everyone is familiar and comfortable with searching; they know what to do with a text input box. On the other hand, they expect to be able to search anything and everything, with near-perfect accuracy. Most of us don't have the time, resources, or brainpower to build a search as smart and exhaustive as Google's.

Still, we do what we can. A good search addresses both the _where_ and _what_ questions and presents results in a clear, organized manner. _What_ is fairly straightforward to accomplish with text matching in names, descriptions, and/or attributes of the data. (This can blend into the _when_ question if attributes include place names.) _Where_ might tap into a geocoding service, but could also be limited to the universe of your data, for example searching a list of county names if your map uses county-level data.

In all cases, it's good to tame people's expectations of Google-quality search by stating what the search is capable of. We frequently use the `placeholder` attribute of text inputs as a hint about what is searchable.

![]({{site.baseurl}}/media/guides/search_hints.png)

As for the display of results, we can make a couple of recommendations: 1) show live results as the user types and 2) organize results in meaningful ways beyond a simple list. The first point might mean simply popping up a list (after a minimum of two or three characters are entered) that changes as more text is input, but it can go beyond that. For example in the map below, the main contents of the map and sidebar themselves change as you type.

![]({{site.baseurl}}/media/guides/napa_search_results.gif)

Organizing results is helpful especially if data is vast and/or the search is multi-purpose (e.g., for both places and attributes), so that the user doesn't have to wade through a big list to find something. Even small ehancements, such as showing the number of results, are helpful, though. Two examples of organized results are below, both of which separate results into categories. Notice that the second one also highlights the matching text, a small step (that could be expanded further) to help people understand why they got the results they did.

![]({{site.baseurl}}/media/guides/wntb_search_results.png)
![]({{site.baseurl}}/media/guides/rio_search_results.png)

Lastly, two "don'ts" when it comes to search:

1. Don't implement search if the map exists to sell a single specific story from which you don't want the reader to stray. At best it's unnecessary; at worst it's confusing and distracting.
2. Don't make search the _only_ gateway to the map unless you're absolutely certain that people understand the universe they're searching and will have something in mind to look for. Google gets away with this because because it's understood that you're essentially searching _everything_ for _anything_; most maps are not like that. If the map is meant for viewing specific, user-input things (say, a map of Twitter hashtags), at least include a few examples to get people started.

#### Filter

- category/tag checkboxes
- sliders for ranges
- boolean operators across different lists

### Information retrieval

Retrieving more information than is currently visible on the map is a hallmark of interactive mapping, and can be one of the great benefits of interaction, as you can pack a lot more information into an interactive map than a static map by allowing users to get additional details on demand. Retrieval methods are not as standardized as panning and zooming methods, but mostly come in two flavors. Although they're reasonably common, you can't expect everyone to "get it" right away. Include cues that help users see how to retrieve information.

- Click for more
- Hover tooltip

### More interaction guidelines

Always be mindful of [how much interaction to add to a map](../should-map-be-interactive/), if any at all. A good additional resource is Robin Tolochko's master's thesis, which developed some guidelines for when and how to implement many of the interactions described on this page (and others), based on a study of map users and experts.