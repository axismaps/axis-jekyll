---
pid: bpl
title: Zooming In On History
titleshort: Zooming In On History
client: Leventhal Map Center, Boston Public Library
clientshort: BPL
logo: bpl.png
tag: Interactive touchscreen feature for a map exhibition
date: 2015-11-29
category: Education
featured: true
slideshow: true
video: 148411946
link: http://zoominginonhistory.com
github: https://github.com/axismaps/zooming-in-on-history
layout: project
nav: Portfolio
features:
- Touchscreen map browser lets exhibition visitors further explore maps
- Historical maps are overlaid on modern maps
- Search for a city to find it on the historical map
---

"Zooming In On History" was designed as an interactive feature for two large touchscreen in the We Are One exhibition by the Normal B. Leventhal Map Center at the Boston Public Library, open from May through November of 2015. A commemoration of the 250th anniversary of the Stamp Act, the exhibition featured an impressive collection of contemporary maps from the years prior to the American Revolution through the early years of the new nation, documenting and providing context for the events leading to American independence.

The map browser, which lives on as a standalone web site, allowed exhibition visitors to explore many of the maps on display more closely. A visitor could drag a slider to fade between the historical and modern maps, and could search for a city to see where it would be on the historical map. A curated set of details accompanies most maps, offering further information about something on the map or its historical context.

The overall design leads the visitor through several ever-deeper stages: from theme, to map selection, to map information, and finally to the map itself. We incorporated a lot of animation, aiming to draw in visitors passing by and encourage them to interact with the maps. Map thumbnails gradually move when idle, and most interactions trigger an animated transition.

Maps themselves were georectified and tiled to allow overlay on a simple Leaflet map, with Stamen's Toner tiles as a basemap. A simple CSV file contains titles, authors, and other details about each map, making it easy for exhibition staff to make changes and updates to text content or which maps were displayed.