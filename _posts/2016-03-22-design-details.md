---
layout: post
nav: Blog
status: publish
published: true
title: Little Design Details in a Simple Map
author:
	display_name: David Heyman
	login: dave
	email: dave@axismaps.com
	url: ''
date: '2016-03-22 09:03:18 +0100'
date_gmt: '2016-03-22 09:03:18 +0100'
categories:
- Cartography
tags:
- Design
- Leaflet
comments: []
project: eshhad
---

## Use color sparingly
Nobody does it better than New York Times
Most important thing on the map should be the most visible
	- Map points not UI elements
Use color variation to reduce visual intimidation
	- Even if understanding spatial differentiation isn't that important
	- Lots of 1 thing becomes a few groups of less things
Use subtle differences in color to reiterate connections
	- Good thing about categorical schemes
Great to have so many lovely basemaps to choose from!
	
## Data probes
A little information (floating)
	- Appears on investigative action (mouseover)
A lot of information (fixed and scrolling)
	- Appears on deliberate action (click)
	- Organize your text using headers or tables!
Mobile
	- Skip the hover probe
	- Take a more modal approach
Map symbols echo level of probe
Any place where you ask a question should be probable
	- Any place where a visual variable is used, should be probe-able to get exact value

## Integrated legends
Because information can be presented on-demand with data probes, legends are less necessary.
Integrate legend into other controls to save valuable map space and reinforce connections

## Non-map controls
Not everyone wants to browse your data by map
 - They're interested in a non-spatial narrative
 - Not most comfortable using a map
Give tools to allow these users to access the data in their own way
Lightweight accessibility
