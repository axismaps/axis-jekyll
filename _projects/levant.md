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
layout: project
nav: Portfolio
features:
- View a spatially and temporally accurate map of Beirut for a selected year
- See primary source images in spatial and historic context
- Highlight specific feature by their subtype for detailed view of the city
---

diverseLevant is an online mapping platform that illustrates the urban evolution of Beirut, over its entire history as well as across its social, cultural, and religious diversity. Primary sources, such as views of the city, historical maps, archeological surveys, and architectural projects are located in time and in space while their associated visual and geographic data are integrated across a number of databases, including an open-access digital library of images, a geographic information system, an open source relational database, and a content delivery web service.

Powering imagineRio is _iRio_, a Node application that facilitates:

1. Data management and conversion from the shapefiles used by the Rice team to collect data and PostGIS where the data is eventually stored.
2. Tile rendering and caching with options to select the year and layer visibility.
3. An API to request metadata and vector data across the entire database.

When our friends at Rice wanted to launch 2 additional maps, it made sense to re-use the iRio platform; not only because the system was already built and tested, but also because their team was already familiar with the intricacies of the data required to power the map. With this knowledge and their existing best practices, they were able to quickly produce new datasets for new maps of the Rice University Campus in [instituteRice](http://instituterice.org/) and Beirut, Lebanon in [diverseLevant](https://diverselevant.org/).

The diverseLevant basemap on the other hand was inspired by the historical map from which we drew an accent color, borrowing its otherwise pale color palette, yellow roads, and pink buildings, and even mimicking its hand-lettered labels with a strong font choice.
