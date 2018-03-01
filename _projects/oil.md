---
pid: oil
title: Global Commodities Oil Visualization
titleshort: Oil Visualization
client: Adam Matthew Digital
clientshort: AMD
logo: sage.png
tag: Revealing the globe's energy history
date: 2013-06-15
featured: true
slideshow: true
layout: project
video: 164081343
nav: Portfolio
category: Education
---

This map was an addendum to the Global Commodities project covering oil (and other sources of energy), arguably the most important commodity of the modern era. It was designed to be accessible to a novice audience, unfamiliar with interactive graphics. An auto-rotating globe is the centerpiece of the application and links to bar charts for comparison amongst countries and line charts to compare over time.

The data for this map was taken from the [BP Statistical Review of World Energy and Historical Datasets](http://www.bp.com/en/global/corporate/about-bp/energy-economics/statistical-review-of-world-energy.html). There was a considerable amount of pre-processing conducted on the data to get it from Excel into a MySQL database linked by two-letter country codes. We brought in an external historical population dataset to be able to calculate historical per capita usage on-the-fly.

This design centered around presenting the globe, chart, timeline, and energy details in a clear and easy-to-use interface. Each component is linked to the others so that the whole display responds to user input. To keep the interface simple, content is prioritized for some areas of the display. For example, the timeline swaps out for energy details when mousing over the map. Energy types are color-coded per country with corresponding colors in the user interface help keep oriented. Detailed areas in Europe and the Middle East transition smoothly to larger scale flat maps.

This map was built using D3 which makes the orthographic projection used for the globe possible. The data bindings in D3 made it very easy to link the 3 graphic elements together so interacting with the bar chart rotates the globe and changes the display on the line graph. All classification schemes and y-axis scaling is done dynamically to compensate for huge differences in quantities and units between the different energy datasets.