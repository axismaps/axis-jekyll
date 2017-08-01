---
pid: eic
title: East India Company Trade Visualization
titleshort: East India Company Visualization
client: Adam Matthew Digital
clientshort: AMD
logo: sage.png
tag: Visualization of the East India Company's trade between 1760 and 1834
date: 2017-01-11
category: Education
featured: true
slideshow: true
video: 212543335
layout: project
nav: Portfolio
features:
- Three linked views&#58; map, timeline, and commodities
- Each component acts as a filter on the others
- \gif\ Play a year-by-year animation
---

This map and data visualization of the East India Company's trade, along with a chronology and document browser, is a project in our continuted collaboration with Adam Matthew Digital. The visualization explores the company's imports and exports of 13 commodities in 17 markets between 1760 and 1834. The map may also be played as an animation, showing year-by-year values of imports and exports in the various markets. Along with numerical data about prices and trade volume, it also provides further information and history for each of the commodities and markets.

Year, location, and value data were drawn from set of some 6,000 discrete data points, and are organized and approached in three different ways: by geography, by time, and by commodity. These are presented as three separate but linked interactive components: a map, a timeline with a chart of overall import and export values, and a list of commodities with small charts of their values over time. Interacting with a component allows filtering to a specific time range, market, or commodities, and triggers live updates to the other components. Such tightly linked views between the charts and map well as UI elements that double as filter controls—is a hallmark of interactive visualization design.

The front end of this project makes heavy use of [D3](http://d3js.org), taking advantage of its core functions to bind data to page elements, and draw and update them accordingly. With the help of D3, we can use a single data file, arrange it in different ways, and tie it to SVG map and chart elements; we can also easily add interactivity and a system of events to ensure that all the visual components are linked to one another.