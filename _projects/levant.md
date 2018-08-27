---
pid: levant
title: Diverse Levant
client: Rice University Humanities Research Center
clientshort: Rice University
logo: rice.png
tag: Mapping the urban evolution of Beirut across its social, cultural, and religious diversity
date: 2018-04-09
category: Education
featured: true
slideshow: true
video: 286491323
link: http://diverselevant.org
github: https://github.com/axismaps/imaginerio/tree/beirut
layout: project
nav: Portfolio
features:
- \gif\ View a spatially and temporally accurate map of Beirut for a selected year
- \gif\ See primary source images in spatial and historic context
- Highlight specific feature by their subtype for detailed view of the city
---

diverseLevant is an online mapping platform that illustrates the urban evolution of Beirut, over its entire history as well as across its social, cultural, and religious diversity. Primary sources, such as views of the city, historical maps, archeological surveys, and architectural projects are located in time and in space while their associated visual and geographic data are integrated across a number of databases, including an open-access digital library of images, a geographic information system, an open source relational database, and a content delivery web service.

Powering diverseLevant is (_iRio_)[https://github.com/axismaps/irio], a Node application that facilitates:

1. Data management and conversion from the shapefiles used by the Rice team to collect data and PostGIS where the data is eventually stored.
2. Tile rendering and caching with options to select the year and layer visibility.
3. An API to request metadata and vector data across the entire database.

The iRio platform was first developed for use in the imagineRio project. It made sense to re-use it here; not only because the system was already built and tested, but also because the data collection team at Rice was already familiar with the intricacies of the data required to power the map. With this knowledge and their existing best practices, they were able to quickly produce new the dataset for this map.

The diverseLevant basemap was inspired by the historical map from which we drew an accent color, borrowing its otherwise pale color palette, yellow roads, and pink buildings, and even mimicking its hand-lettered labels with a strong font choice. The pink accent color runs throughout the map UI, unifying it with the visual style of the basemap.

The UI of diverseLevant places extra emphasis on the primary source images that have been georeferenced and added to the map. These images are divided into views, maps, plans and surveys. The display the city as it was and as it was planned to be at multiple scales. Users can view thumbnails of the images in the filmstrip along the bottom of the map as well as in a gallery view that displays all available images for a year. When added to the map, the georeferenced maps integrate with the _iRio_ systems, allowing users to probe and retrieve information about areas and features contained on the historic maps.