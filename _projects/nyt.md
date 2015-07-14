# NYT 9/11 Map

## Overview
As part of the New York Times' special report on the 10-year anniversary of September 11, 2001, we built this map of user-generated data that displays more than 40,000 interactive points indicating where people were on that day. Visitors to the map drop a pin to add their own location and short comment. All users' locations are shown as dots colored according to their specified mood after reflection on the past decade, and filtering and search controls allow for more specific views. Built-in links to post on Twitter and Facebook facilitate sharing users' stories with others.

## Data
Unlike most of our projects, this map started with no data. All the data were user-generated after the map launch. Each data point consisted of a location, a selected emotion, and a comment. Developers at the Times built a database to collect and store the points, which were delivered to the map as a single file that was updated every few minutes.

## Design
The map’s design, largely a product of the Times graphics talent, is in line with the typical NYT aesthetic: light and clean. One design challenge was to give an accurate impression of the relative number of points in different cities at distant zoom levels (where, say, a thousand points in New York would look the same as a hundred points in Seattle). To achieve this we allow some dispersal of overlapping points—some geographic accuracy is sacrificed but it better conveys the intended impression.

## Code
We built this map during the final days of Flash in NYT graphics. It uses the now-deprecated Google Maps API for Flash with a few custom elements on top. The map points are not drawn with the API but rather as a separate raster object. It was important that the map be fast, and Flash performs well here. 40,000 vector points would grind the map to a halt, but drawing them to a single raster layer does not. Interactivity is faster too by constantly checking the mouse location for proximity to points rather than creating many mouse event listeners.