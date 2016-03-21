---
pid: egypt
title: Egypt Election Map
titleshort: Egyptian Parliamentary Election Map
client: Tahrir Institue for Middle Eastern Policy
clientshort: TIMEP
tag: Live parliamentary election map
date: 2015-10-17
category: Politics
featured: true
slideshow: true
video: 159471756
link: http://egypt2015.herokuapp.com
layout: project
nav: Portfolio
features:
- Linked grid chart shows overall party results
- View detailed results
- Multiple years of results
- Responsive layout for mobile
---

For their coverage of the 2015 Egyptian Parliamentary Elections, the Tahrir Institute for Middle Eastern Policy asked us to build a live election map to display election results as they were returned. In addition to displaying live results for both the individual and party list candidates, they wanted to make sure the map highlighted the disparities between the election law and geography between this election and the last one in 2011.

This project presented a few major data challenges. There was no reliable source for the electoral district boundaries from either the 2011 or the 2015 elections. Our first task was to digitize these from a variety of sources, relying heavily on local knowledge from colleagues inside Egypt. Once we had the geographic boundaries complete, our next task was to design a data model to both store results from previous elections and collect and validate new results as they were released. This became especially challenging due to the differences between the two elections.

The design of the map was particularly focused on communicating the intricacies of the election process to novice users. The grid chart on top of the map shows the number of seats that each party has won, split between the two lists. It also serves as a control that allows users to:

1. Switch between maps of the two lists.
2. View details for each party including a choropleth maps of seats won by district and a details view listing all districts where seats have been won.

Clicking on a district reveals a details view that gives more information about the candidates that won seats, historical results, and a small demographic breakdown of the district.

This backend for this project was built using Ruby on Rails. The built-in data validations and ease of constructing input forms made this an easy choice. Using Heroku also made it easy to deploy both map and database when the map went live just before the election. Ruby was also very useful in pre-processing a lot of the components in the map. The grid chart, data probes, and details sidebar are all assembled on the server side and sent to the browser as HTML ready for speedy rendering, especially on mobile devices.