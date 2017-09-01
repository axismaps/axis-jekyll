---
pid: rio
title: imagineRio
titleshort: imagineRio
client: Rice University Humanities Research Center
clientshort: Rice University
logo: rice.png
tag: Temporally and spatially accurate maps of Rio from 1500 to now
date: 2016-05-01
category: History
featured: true
slideshow: true
video: 212543609
layout: project
link: http://imaginerio.org
github: https://github.com/axismaps/rio
nav: Portfolio
features:
- View maps from 1500 to present day
- Georeferenced historic maps with features and labels on top
- Export custom maps to PNG
---

This ongoing project is a collaboration with the Rice Humanities Research Center. It was built as a platform for historic scholarship and education by providing maps of Rio de Janeiro that are both spatially and temporally accurate. These maps can help researchers understand more about Rio's development as a city and can serve as the background for more specialized research into the city.

The map serves data from 1500 to the present day, covering the entire life of the city. Each feature on the map has been digitized and verified from georeferenced primary source documents (historic maps / plans / atlases) and verified against a modern aerial photo. From these documents, we get not only the position of the feature but also a date range that it existed in the city in that form. Knowing both the start and end date, we can dynamically render a map from a selection data and get a relatively accurate picture of what was in the city in that year.

As time is equally important to navigating the map as geography, the temporal controls are given a large prominent space on top. Users can select any year from 1500 to the current year, but will be automatically snapped to the closest year with data available. Users also have full control of the layers that appear on the map. This feature was included to support researchers who may only be interested in a certain aspect of the city's development (e.g., water infrastructure like fountains and aqueducts), allowing them to visually prioritize them on the map.

In addition to storing data on time and space, the dataset contains basic attributes for nearly every feature including name and a detailed categorization (buildings have a few more attribute fields). To help users access the data, we've built a few tools for feature identification:
  1. A data probe for identifying features by clicking the map
  2. A search box for finding and identifying features by name
  3. A feature highlighting tool built into the legend for identifying all features that match a subcategory

The imagineRio project is built in two related sections. The server-side code:
  1. Stores and serves geographic data from PostGIS
  2. Renders map tiles and user-exported maps with Mapnik
  3. Serves metadata and vector geographic data through an API built with NodeJS and Express

The biggest challenge for this project was optimizing the tile rendering process. Giving users control over the year to render maps as well as the layers that appear on the maps, means there are millions of potential maps that can be made by imagineRio. This means all of the map tiles are generated on-demand based on a user-request via the API. Each tile is then logged to the database and cached to S3 to prevent rendering the same tile multiple times.

<iframe class="inline" src="https://player.vimeo.com/video/212543580" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

The client side code is a simple Leaflet map that interfaces with the metadata and map tile API. The map users 3 layers of map tiles, physical map, historic maps, and primary features and labels. These stack to allow the primary features and labels to appear on top of the historic maps when they are displayed together, improving their legibility and giving them context. The client also interfaces with the image library that stores the images of Rio used in the project, displaying them with a cone of vision that displays the view of the artist or photographer on the map. Finally, the map is built with a responsive design and geolocation to allow users in Rio to see how the city developed at their current location.