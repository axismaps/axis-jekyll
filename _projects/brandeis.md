---
id: brandeis
title: American Jewish Population Map
titleshort: American Jewish Population
client: Brandeis University
clientshort: Brandeis
tag: Nationwide population study
date: 2013-09-27
featured: true
slideshow: true
link: http://ajpp.brandeis.edu
---

# American Jewish Population Map

## Overview
This project seeks to provide answers to social research questions about the Jewish population in the United States. Commissioned by The Steinhardt Social Research Institute (SSRI) at the Cohen Center for Modern Jewish Studies (CMJS) at Brandeis University, the map uses the synthesized results of targeted surveys to provide high quality, unbiased data about the distribution of the contemporary Jewish population in the US. Applying cutting-edge research methods to inform and influence religo-ethnic policymaking, the SSRI hopes that this interactive map will generate greater interest in its work while increasing its reach and use. 
The map is intended to track population trends but it also offers potential utility as a benchmarking tool that could improve effectiveness in implementing and appraising outreach/engagement initiatives. It is hoped it will be used alongside SSRI’s report to assist local organizations in understanding the scale and demographics of the communities they serve, thereby helping to ensure a vibrant future for the North American Jewish population.

## Data
There being no standard census-like data source on characteristics like religion and ethnicity, the map is based on The Steinhardt Social Research Institute’s estimates from six years (2006-2012) of combined survey data from numerous sources. This allows both for more accurate estimates as well as an opportunity to explore differences across data sets. The map displays these estimates across a low, mid and high range. It includes information for the self-identified Jewish population broken down by age, education and race – comparing these with statistics for the total US population by country, state, and county – as well as institutions and synagogues. The data was used to create a file database (for easy implementation), which was optimized for loading speed and linked to in-house generated PUMAN geography that was stored as TopoJSON to maximize loading speed.

## Design
Employing a choropleth state map that integrates seamlessly with The Steinhardt Social Research Institute (SSRI)/Brandeis University website branding, the design presents Jewish population data by state. Hovering over a location reveals population estimates across the top, and colored animated graphics (pie charts) in the right sidebar present location-linked statistics on age, education, and race as against the total US population. Information on Jewish institutions and synagogues is also provided and users can easily zoom back and forth between state and county views for more detailed demographics. Scale was very important to the design of this project. Information had to be presented in a way that was both aesthetically appealing and faithful to the data. Therefore visual cues such as darker shading for more populous areas and animated graphics timed to correspond broadly with actual pace of change were used.

## Code
Designed to be used alongside SSRI’s full report, the map works with data based on a small subset of a population with no standardised data source. This necessarily meant working with estimates. However, by aggregating data from a number of sources over a reasonable period of time and working with a database that is easily updatable, the data (and therefore the map) should become increasingly more accurate and/or representative over time. The map is built on the D3 library, which effortlessly handles the zooming transitions and allowed the use of Albers projection, which is the most appropriate projection for choropleth maps of the US.
