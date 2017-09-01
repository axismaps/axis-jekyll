---
pid: massobservation
title: Mass Observation Map
titleshort: Mass Observation
client: Adam Matthew Digital
clientshort: AMD
logo: sage.png
tag: Mapping everyday life in mid-century Britain
date: 2014-07-15
featured: true
slideshow: true
video: 212543476
layout: project
nav: Portfolio
category: History
features:
- Curated collections highlight pertinent entries by category
- \gif\ Custom basemap based on maps of the period
- \gif\ Full text search
---

The Mass Observation project recorded everyday life in mid-century Britain. About 500 men and women kept personal diaries which they sent to Mass Observation in monthly installments. No special instructions were given to diarists, and although some people maintained a continuous flow for years on end, other diarists wrote intermittently or for one short period. This map plots the location of each diarist as it was given in their records. The points are located by city. To avoid overlap, any city with multiple diarists have had their location randomized in a radius around the city point.

The key feature of this map is the curated collections. These collections group a series of diary entries around a central theme. These collections are an excellent about of entry for novice users. Instead of initially presenting them with a map with over 500 identical points, the curated collections offer a less intimidation point-of-entry while also revealing what's available in the dataset. It also gives users the ability to access the content by clicking previous / next instead of navigating the map. Furthermore, these collections highlight some of the best and most relevant data points, entries that might otherwise have been missed.

To provide geographic context while also giving a sense of place and time for the map, we designed a custom basemap for the data. The design was based on a road map from the 1940's produced by the British Automobile Association but produced in Tilemill using contemporary data from the Ordinance Survey. The map uses a high-resolution scan of a folded piece of paper to approximate the feel of the folds in the old road map used as a source.

The map also includes a few small designs touches to improve usability. Each curated collection is given its own unique color. When activating one of these collections, the points on the map and the UI change to use this color for highlights. This helps communicate to the user that they have switched the map mode. There are also a few playful touches like a paperclip and paper perforation attaching the data probe window to the toolbar and typewriter-esque typography for the quotes.

The map is built using Leaflet which handles displaying both the basemap tiles and the point. The text search and filtering controls operate on the client side so the points can update instantaneously as the user operates either filter. When moving from point-to-point in a collection or when searching, the map uses a 3-step animated transition:
  1. Zoom out in place to show more of Britain
  2. Animated pan while zoomed out to new location
  3. Zoom in in place to new location

This process helps prevent disorientation by showing less local detail when panning the map, helping users see both where they are going and where they came from.