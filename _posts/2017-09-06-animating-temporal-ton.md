---
layout: post
nav: Blog
status: publish
published: false
title: Animating a temporal ton in a web map
author:
  display_name: Andy Woodruff
  login: andy
  email: andy@axismaps.com
  url: ''
date: '2017-09-04 09:03:18 +0100'
date_gmt: '2017-09-04 09:03:18 +0100'
categories:
- Cartography
tags:
- D3
- Animation
comments: []
project: merck
---

<table style="text-align:center;">
<tr>
<td style="width:8%; text-align: left;">Boss:</td>
<td style="width:23%">"We need an animated map of this data set."</td>
<td style="width:23%">"It's by zip code."</td>
<td style="width:23%">"Over ten years."</td>
<td style="width:23%">"By week."</td>
</tr>
<tr>
<td style="text-align: left;">You:</td>
<td><img src="{{ site.baseurl }}/media/posts/2017/09/emoji1.png"/></td>
<td><img src="{{ site.baseurl }}/media/posts/2017/09/emoji2.png"/></td>
<td><img src="{{ site.baseurl }}/media/posts/2017/09/emoji3.png"/></td>
<td><img src="{{ site.baseurl }}/media/posts/2017/09/emoji4.png"/></td>
</tr>
</table>

We faced a challenge along those lines earlier this year when we set out to [visualize usage of rotavirus vaccines](https://merck.axismaps.io/) produced by Merck. Simple-sounding on the surface, it involved some tricky design and back-end work, notably because weekly data by zip code over ten years means more than 1.5 million data points: a ton of data for a web map to be loading.

First, a brief overview of this map, which is at [https://merck.axismaps.io/](https://merck.axismaps.io/) or in a video demo below. It shows the percent of eligible children receiving a vaccine each week over approximately ten years at state, county, or zip code level. More detailed numbers are found in a chart at the bottom and by poking around the map. And that's about it. Simple, right?

--video--

### Prototyping

This project involved several prototypes to work through design decisions. Although in the end it became a fairly straightforward choropleth and point map, the client and we wanted to explore some map types that we thought might best show the spatial and temporal patterns. Early on we had a request for the map to appear such that the entire United States, even unpopulated areas, are covered, to avoid suggesting that there are areas that the vaccines hadn't even reached. To this end we tried binning into grid cells, but this comes with a couple of problems.

There are places that zip code tabulation areas don't touch—because nobody lives there—so ensuring no blank space means a certain minimum grid cell size, which may or may not be a good resolution for the more populated parts of the country.

![Zip code centroids binned to various cell sizes]({{ site.baseurl }}/media/posts/2017/09/merck_grid_size.gif)

At one point we experimented with variable cell sizes, where each cell contained approximately the same number of zip codes. Big squares mean sparse populations, and small cells mean dense population, where there are a lot of zip codes in a small area. I'm still a little intrigued by this idea, but cartographically the effect is kind of opposite of the intended representation: all cells are meant to be "equal" in a sense, but the larger, sparser cells carry a lot more visual weight.

![Variable grid cell sizes with approximately equal numbers of zip codes]({{ site.baseurl }}/media/posts/2017/09/merck_variable_size.jpg)

A second problem with binning is that it requires aggregations that depend on actually having the necessary data. In this case, we had vaccination rates already aggregated to geographies like zip codes, but we did not have the actual number of vaccinations and the total number of eligible children. Without those, we weren't able to display actual vaccination rates in a grid. Instead it was something like _"percent of zip codes with rates above 50%,"_ so for example if a cell had 100 zip codes and 40 of them had vaccination rates above 50%, the map would show this cell as 40%. This is a bit too convoluted and may not do a great job at showing real spatial patterns anyway.

### Data overload: time

As previously mentioned, weekly data for thousands of geographies over ten years is a boatload of data, way too much for a simple web map to load up front. The default county map would be well over a million values, and that's one chunky CSV. A more efficient way to handle animated data is to deal with _change_ in values, not values themselves. If a value for a county doesn't change from one frame to the next, there's no need to store data for that frame for that county. By pre-processing all the data with some fancy SQL to pull out changes, we can cut down significantly on the amount of data being sent to the map and improve rendering performance.

For states and counties, we use a 10-class equal interval classification, and for zip codes only two classes. Whenever a unit's vaccination rate moves it from one class to another, we store the date (week), FIPS code, and new class number. If it changes to, say, class 8 and stays that way for six weeks, we don't end up with six rows of data, but rather just one with the week when the class changed. A snippet of data looks something like this:

{% highlight csv %}
date,fips,newclass
...
200951,12015,1
201236,22107,6
201550,53031,3
...
{% endhighlight %}

Detailed data with actual vaccination rates is loaded on demand through a simple API to get values for a specific geographic entity.

![Probe for actual data values]({{ site.baseurl }}/media/posts/2017/09/merck_probe.jpg)

To everyone's surprise the data was pretty noisy. While we expected that rates would steadily increase over time, instead they fluctate a lot and switch back and forth between data classes. We tried to smooth this out and see broader patterns by using four-week rolling averages, but it seems that noise simply is reality. More noise meant more _change_ data and more rows in our CSVs, but we still ended up with file sizes acceptable for this purpose and a lot smaller than we would have had otherwise.

### Data overload: space

Besides the attribute data load, a national map at the level of something like zip codes means too much geographic data. For one, it's another file size problem; for another, it's a legibility problem.

Legibility concerns led us to the zip code point map. At a national scale, even county polygons are pushing it in terms of crowding, and most zip code polygons are definitely too small to be discernable. Thus we make you zoom in pretty far before zip codes resolve to polygon representations; before that they're shown as centroid points, which are still crowded on a national map but are a bit easier to pick out.

Most of the map is drawn as SVG using standard [D3 methods](https://github.com/d3/d3-geo), but the zip code point layer is an exception. This number of points, some 33,000, do not perform well as vector graphics and instead are drawn to a canvas element. It means some extra work to account for things like interactivity (we can't just attach mouse handlers and have to search for nearby points on mouse move), but it's worth it to avoid completely choking on rendering.

![Zip code point probe]({{ site.baseurl }}/media/posts/2017/09/merck_zip_probe.png)

At the scale where we do show zip code polygons, the problem remains that this is a ton of geographic data. For this we built a simple Node vector tile server which queries a PostGIS database for zip codes whose centroids fall within a [tile's bounds](https://github.com/mapbox/sphericalmercator#bboxx-y-zoom-tms_style-srs), then sends the polygons as topojson (and caches them to S3). On the front end, when the user zooms past a scale threshold, the map switches to a standard web Mercator map (using [d3-tile](https://github.com/d3/d3-tile)) onto which we can load zip code tiles as the map is panned. (As a bonus we can also easily load reference basemap tiles underneath to help with orientation.)

![Zip code vector tiles]({{ site.baseurl }}/media/posts/2017/09/merck_pan.gif)

### Recap

A few things we learned about animating a ton of data over time:

- Animation can be hard to follow especially with so many data points. **Explore ways to aggregate data (both spatially and temporally)** that might be better than exact data values at showing trends. They may not work out, but it's worth investigating.
- Instead of loading all values, **try loading only _changes_ in values** to cut down on file sizes; let exact values be retrieved in smaller doses on demand.
- [Generalize](http://www.axismaps.com/guide/general/scale-and-generalization/)! Different scales call for different complexities of geometry, and this can go beyond polygon simplification to things like collapsing polygons to points.
- Don't be mystified by vector tiles! It's not too difficult to **make your own vector tiles** for excessively detailed geodata.