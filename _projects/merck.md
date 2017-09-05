---
pid: merck
title: Rotavirus Visualization
titleshort: Rotavirus Visualization
client: Merck
clientshort: Merck
logo: merck.png
tag: Animated map of rotavirus vaccination rates over ten years
date: 2017-02-01
category: Healthcare
featured: true
slideshow: true
video: 
link: https://merck.axismaps.io/
layout: project
nav: Portfolio
features:
- Animated map from 2006 to 2016
- Data probe shows detailed vaccination rate over time
- \gif\ Zip codes are shown as points at small scale and vector tile polygons at large scale
---

This animated map, produced for Merck, shows the uptake in vaccination for rotavirus since 2006. Rotavirus, a common cause of diarrheal disease among infants and young children, routinely caused many hospitalizations and a number of deaths prior to vaccination programs. Merck, which produces several vaccines, commissioned this map to see how the usage of those vaccines has increased and/or changed over time and geography.

The map shows weekly vaccination rates at three levels of geography: state, county, and zip code. With such a fine temporal resolution, a key challenge of this project was to deliver vast amounts of data in reasonably-sized chunks for a web map. Rather than load actual data values for all weeks and geographies (which would be over 15 million data points), we used database queries to calculate data classes and deliver only information about when a unit's value crosses a certain threshold. Detailed information about vaccination rates are then only loaded on demand, when the user interacts with points or polygons on the map. For this we built an API to get the actual weekly data for a given geography, which we show in a small line chart.

We used D3 to build the front end of this project, taking advantage of map projection capabilities. In addition to the data challenges described above, zip codes also presented challenges for display, as at a national scale the number and small size of them makes them burdensome on the browser and difficult to read. We show them as points (drawn on a raster canvas) until the user zooms in far enough for tabulation area polygons to be legible. For the closer zoom levels, we built a simple vector tile server to deliver ZCTA polygons which are displayed on a more traditional tiled web map, along with a detailed basemap.