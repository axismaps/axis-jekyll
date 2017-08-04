---
layout: post
nav: Blog
status: publish
published: true
title: SVG Effects in Leaflet
author:
  display_name: David Heyman
  login: dave
  email: dave@axismaps.com
  url: ''
date: '2016-03-17 09:03:18 +0100'
date_gmt: '2016-03-17 09:03:18 +0100'
categories:
- Cartography
tags:
- Design
- Leaflet
comments: []
project: egypt
---

We recently finished work on a [live election map](http://egypt2015.herokuapp.com/) as part of [The Tahrir Institue for Middle Eastern Policy's parliamentary election coverage](http://timep.org/pem/). Egypt's complex (and ever-changing) election laws made this an interesting and challenging project, one that required novel mapping techniques to represent the data.

## Stripes
The overview map uses value-by-alpha to display the results. Each district is colored according to the party that won the most seats. Transparency is controlled by the number of seats won in that district (not the number of seats available). Because Egypt uses a proportional system representation for each district, a party wins seats _in proportion_ to how much of the vote they won. This leads to lots of ties, especially in the individual results list where the districts are very small with only 2 - 4 seats up for grabs, and many candidates running unaffiliated with any political party.

![Stripes!]({{ site.baseurl }}/media/posts/2016/03/stripes.png)

<!--break-->

Our original solution to this issue was to treat ties as _no data_. This ended up not working because:

1. It failed at giving an overall impression of the geographic distribution of the election results by party
2. There were **lots of ties**

This was aside from the other challenges of _no data_ on this map, including:

1. Unaffiliated candidates could also be considered _no data_ because they don't have a party, but make up a huge section of the candidates running
2. The Al Nour party is associated with the color black. With the varying transparency of a value-by-alpha map, this reserved every shade of gray (usually used for _no data_) for this party's results
3. Because this was a live map, with updating election results, the _real no data_ was results that hadn't been released yet

We settled on using a striped pattern to display both parties' colors when the results are a tie. Fortunately—and as often is the case—there was a fantastic [Leaflet plugin](https://github.com/teastman/Leaflet.pattern) that did nearly all of the hard work for us:

{% highlight js %}
//check to see if there are multiple parties stored as an array
if( _.isArray( party ) ) {
  //name the pattern after both parties
  var patternName = party.join( "-" );
  //create the pattern if it doesn't exist
  if( polygonPatterns[ patternName ] === undefined ){
    polygonPatterns[ patternName ] = new L.StripePattern({
      //2 stripes defined as color + space
      color: parties[ party[ 0 ] ].color,
      spaceColor: parties[ party[ 1 ] ].color,
      spaceOpacity: 1,
      angle: -45
    });
    //patterns must be added to the map before use
    polygonPatterns[ patternName ].addTo( map );
  }
  //create a new style object using the pattern
  style = {
    fillPattern: polygonPatterns[ patternName ],
    color: "#ccc",
    //number of seats won controls fill opacity
    fillOpacity: alphaScale( seats, maxSeats ),
    weight: 1
  }
}
//apply the style
layer.setStyle( style );
{% endhighlight %}


## Shadows

The most challenging part of the brief for this map was in dealing with displaying the changes to the electoral system between the 2011 and 2015 elections. Outside of changes to the law, the most visible change was to the electoral districts themselves, and this was something we needed to show on an already visually complicated map.

![Shadows!]({{ site.baseurl }}/media/posts/2016/03/shadows.png)

To display the former boundaries, we decided to use a shadowy / gradienty type line style. We wanted something that was heavy enough to be visible on top of the complex polygon fills, but transparent and fuzzy enough to suggest that it is no longer present on the map. To achieve this style, we used a simple SVG filter.

To start, create the filter as a standalone SVG in the HTML file that contains your map:

{% highlight html %}
<!-- Be sure to set the width / height to 0 -->
<svg xmlns="w3.org/2000/svg" version="1.1" style="width:0;height:0">
  <defs>
    <!-- Reference this filter in the code using the id -->
    <filter id='dropshadow'>
      <feGaussianBlur in='SourceAlpha' stdDeviation='4' />
    </filter>
  </defs>
</svg>
{% endhighlight %}

Apply the filter to each `_container` in the layer group. You may need to include a nested group to get to all levels:

{% highlight js %}
formerGroup.eachLayer( function( l ){
  //if the layer is a LayerGroup, loop through and apply filter to each _container
  if( l._layers ){
    _.each( l._layers, function( m ){
      $( m._container ).css({ filter: "url(#dropshadow)" });
    });
  }
  else{
    $( l._container ).css({ filter: "url(#dropshadow)" })
  }
});
{% endhighlight %}

American Election maps are so ubiquitous and it was nice to have a change to embrace the challenges of a new election with new geography and new data. You can [view the full map](http://egypt2015.herokuapp.com/) to see more of the data and design challenges and how we worked around them. The exciting thing was being able to solve these problems from a design perspective, and be completely confident we could easily implement whatever solution was deemed best.