---
layout: post
nav: Blog
status: publish
published: true
title: Probing on a Tiled Map
author:
  display_name: David Heyman
  login: dave
  email: dave@axismaps.com
  url: ''
date: '2016-05-12 09:03:18 +0100'
date_gmt: '2016-05-12 09:03:18 +0100'
categories:
- Cartography
tags:
- Code
- PostGIS
- NodeJS
comments: []
project: rio
---

For the past few weeks, we've been working through the soft launch of [imagineRio](http://imaginerio.org), a project we've been working on for a couple of years with Rice University. **Fun fact:** The Portuguese translation of imagineRio is _imagináRio_ which directly translates to _imaginary_. There's more background information about the project on the [Rice Humanities Research Center website](http://hrc.rice.edu/imagineRio/home), but in short, the goal of the project was to create a platform to display spatially and temporally accurate reference of Rio de Janeiro from 1500 to the present day. The current front-end for the project uses these maps to display a range of iconography, including maps, plans, urban projects and images of the city (with viewsheds).

The project has numerous technical challenges (which of course pale in comparison to the challenge of digitizing _all that historical data_), but I just wanted to focus on one of them for this post: **data probing and feature identification on a raster map.** First, a little background on the tools (or stack) being used for this project. Here they are as a sandwich:

![Stack sandwich]({{ site.baseurl }}/media/posts/2016/05/sandwich.jpg) 

Delicious! And here they are as a stack of pancakes:

![Stack of pancakes]({{ site.baseurl }}/media/posts/2016/05/pancakes.jpg) 

Tasty! All of geographic data is stored in the PostGIS database. Each feature is tagged with a start date and end date, base on its first and last appearance (in that particular form) in the primary source documents. Map tiles are rendered using Mapnik (through [Tilelive](https://github.com/mapbox/tilelive)) based on:

1. The layers requested by the user (all is the default)
2. The features available for those layers at the requested year

Once delivered to the browser, the tiles are cached on AWS S3 so they won't be rendered again (unless the data in the database changes). The API (outside of the tile requests) is handled through [ExpressJS](http://expressjs.com).

Hopefully that provides enough context for the technical side of this post. I imagine it's a _stack_ that's pretty familiar to lots of you. Personally, I prefer it in sandwich form. The basic flow of data probing on a raster map involves 3 separate functions:

1. The user clicks the map, requesting features at the lat / lon coordinates under their mouse
2. The API uses PostGIS to identify which features exist at that given location and returns those features back to the browser
3. The user selects the specific feature they're interested in (by name) and its outline is drawn on the map

### Requesting from the client

In order for the client to request intersecting features from the database, we need to know 2 things:

1. The coordinates the user clicked
2. The radius to search for features

First, setup a function that runs every time the map is clicked. The `event` object that gets passed to that function contains the coordinates we need:

{% highlight js %}
map.on( "click", probe );

function probe( e ){
	var lng = e.latlng.lng;
	var lat = e.latlng.lat;
}
{% endhighlight %}

Because this probing will operate on a multi-zoom map, we need to account for difference in zoom levels while the user is probing. At lower zoom levels (more zoomed-out), we need to search a larger radius because the tiny pixel at the very tip of the mouse pointer literally takes up more geographic space than it does at higher zoom levels. Furthermore, because this isn't as seamless as vector zooming where we can instantly highlight features on mouseover and there is a small amount of waiting involved, we want to cast the widest net so user's get the features they're looking for. We set the search radius on a `zoomend` event like so:

{% highlight js %}
map.on( "zoomend", function(){
  var zoom = map.getZoom();
  switch ( zoom ){
    case 15:
      probeZoom = 0.0005;
      break;
    case 16:
      probeZoom = 0.00035;
      break;
    case 17:
      probeZoom = 0.0002;
      break;
    default:
      probeZoom = 0.0006;
      break;
  }
});
{% endhighlight %}

The units assigned to `probeZoom` are decimal degrees (which is why they are so small). This was determined mostly by trial and error and you may want to go with smaller numbers depending on the density of your features.

The last thing we should do on the client side is provide a little bit of feedback to the user. Since the request to the server may take a small amount of time, we can prevent duplicate requests and frustrations by letting the user know their request has been received (and we're working on it, OK). We display a very small animation where the user clicks that runs until the response is received.

![Animated user feedback]({{ site.baseurl }}/media/posts/2016/05/probe_animation.gif)

It's built using [pure CSS](https://github.com/axismaps/rio/blob/master/css/animate.css) so it loads much faster than an animated GIF. It can be places at the mouse cursor if it is appended to the `#map` div using the `x` and `y` properties of the `event` object passed to the click function.

## Finding intersecting features in PostGIS



{% highlight sql %}
SELECT id, name, layer
  FROM basepoly
  WHERE ST_DWithin(geom, ST_SetSRID( ST_MakePoint( -43.1941, -22.9286 ), 4326 ), 0.0005 )
  ORDER BY layer
{% endhighlight %}


