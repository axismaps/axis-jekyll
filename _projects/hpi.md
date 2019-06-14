---
pid: hpi
title: Healthy Places Index
client: Public Health Alliance of Southern California
clientshort: Public Health Alliance
logo: pha.png
tag: A public health atlas of California
date: 2018-06-14
category: Health
featured: true
slideshow: true
video: 292156875
link: https://map.healthyplacesindex.org/
layout: project
nav: Portfolio
features:
- Smart search box searches across all geographies and addresses
- \gif\ Pool geographic units to see combined data
- Upload and style shapefile data
---

The Public Health Alliance of Southern California, a non-profit public health foundation, contracted us to update and modernize their Healthy Places Index mapping tool. The Healthy Places Index examines combines weighted data across 25 different measurements at the census tract level to give a detailed and holistic metric of a community’s health. It is designed to be used by public health and community development professionals and contains many tools found in desktop GIS software.

The entire project is built on a robust back-end that used PostGIS to serve geographic and attribute data. A key-feature of this project is it allows for analysis across multiple analysis units from census tracts to cities and Congressional districts. To serve all this geographic data, we build our own vector tiles server that delivers TopoJSON on-demand to the browser. To speed up rendering during high traffic, these tiles are automatically cached to a high-availability CDN for future use. 

In addition to using pre-existing geographic boundaries, the Healthy Places Index tool allows users to create their own _pooled geographies_ that combine multiple user-selected areas into a single polygon. The map then calcultes both the new polygon boundaries and uses a population-weighted average to recalculate the score for the new area. Map users can also modify the indicators that contribute to the overall score to create their own custom scores.

Once a user has completed their analysis, they can export their findings in a custom report. The report combines the map created by the user with policy actions they select when creating it. The result is a multi-page PDF with maps and graphics that can be shared and distributed publicly. Additional features include:

* A smart-search box that searches across analysis units and geocoded addresses in a single location
* A ranking function that highlights the highest and lowest scoring areas
* An upload tool to allow users to add their own shapefiles or CSVs to the map for additional reference
