#Illinois Public Health Community Map

## Overview
As a collaboration with the Illinois Department of Public Health and IPRO, this map makes information about the quality of health in communities available to the public, highlighting socioeconomic disparities that may exist. Displayed through interactive maps and charts, the clinical data in the map can be used to examine the health needs of a community, county or region for better policy and planning. This second-generation map, originally built in Flash, was updated and completely rebuilt with modern web technology to give users a faster, more accessible experience.

## Data
IPRO's Pellucid database lies at the heart of the map, providing data on dozens of public health measures at state, region, county, and zip code level. Measures are organized in four top-level categories and a variety of subcategories broken down by different health and demographic factors. Additional demographic data aguments the health data at all levels. The map loads data from the live database, allowing easy and instant updates, but also employs caching to ensure speedy loading in most cases.

## Design
We designed this map for data exploration, aiming for a clean yet data-rich display. The result is a page layout consisting of maps and charts of health data on one side and supplementary demographic charts on the other. Maps and charts are linked to each other so that interaction with the map updates the charts. Unlike many other freely movable maps, panning and zooming here are accomplished by drilling down through the overview map, helping users understand the hierarchy of geographic entities.

## Code
The current incarnation of this map replaces an older version we built in Flash using our indiemapper platform. While the design saw some small updates, the major change was a completely different code basis. The map and charts—everything interactive, in fact—are all based on D3, which is ideal for the data-driven and connected nature of this project. (Just for fun, the site eschews jQuery for the usual HTML manipulation tasks.) The result is much faster interactivity and animation, and clearer, more transparent code.