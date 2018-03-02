---
pid: eca
title: Europe and Central Asia – Country and Risk Profiles for Floods and Earthquakes
titleshort: ECA – Country and Risk Profiles
client: World Bank Group, Global Facility for Disaster Reduction and Recovery
clientshort: World Bank
logo: world_bank.png
tag: Atlas of risks posed by floods and earthquakes
date: 2017-10-05
category: Environmental
featured: true
slideshow: true
video: 244857456
link: http://documents.worldbank.org/curated/en/958801481798204368/Europe-and-Central-Asia-Country-risk-profiles-for-floods-and-earthquakes
layout: project
nav: Portfolio
features:
- The atlas been published as a book and in PDF format
- Maps are organized by country
- \gif\ Several key map types are repeated for each country
- Charts offer an additional view of modeled risk
---

This 150-page atlas of European and Central Asian (ECA) countries was produced for the World Bank Group in coordination with the Global Facility for Disaster Reduction and Recovery (GFDRR). At the core of the publication are over 100 maps covering 32 countries that assess the impact of floods and earthquakes on gross domestic product (GDP) and population at the provincial level. Supporting these maps are text and figures that describe the history of natural hazards, methodology, and complex models developed by GFDRR to make risk calculations. The atlas is [available as a PDF](http://documents.worldbank.org/curated/en/958801481798204368/Europe-and-Central-Asia-Country-risk-profiles-for-floods-and-earthquakes), published by The World Bank. It has also been printed to distribute the material in book form. National decision makers can use the atlas to identify high risk areas, improve how and where development occurs, and reduce the costs incurred by natural disasters.

The atlas employs a 4-page template that is applied to each country to maintain uniformity in structure and style. The template is flexible enough to accommodate maps and other content of various sizes and shapes, for example, very large countries such as Russia and much smaller ones like Montenegro. The first page of the template contains a large header area with title, country locator map, and table summarizing how GDP and population could be affected by each hazard. Below that, a full-page map displays GDP by province and compares the annual average of affected GDP caused by floods and earthquakes. The second and third pages break down the impact of floods and earthquakes in more detail. They again show annual average of affected GDP but also include bar-symbols that symbolize affected GDP for 10 and 100-year return periods (i.e., the probability that events of a certain magnitude will recur in any given year). The fourth page displays the modeled results of fatalities and capital loss using radial diagrams, as well as the probability that these disasters will occur in the next 10, 50, 100, or 250 years via line charts.

In terms of technical aspects of the design, the centerpiece of the project was development of a [D3 static map production tool](http://www.axismaps.com/blog/2015/09/d3-web-maps-for-static-cartography-production/) that loads a basemap and creates map symbols for each country from World Bank data. The custom tool allows maps to be generated in a standardized and easily repeatable manner, and made handling changes to data and other map revisions much simpler as the atlas was finalized. Given the size of the atlas, automating the process was a highly effective method to save costs that would have otherwise been spent manually updating the maps. SVG exported from the D3 tool was then brought into Illustrator for styling and fine-tuning. Hillshades were created using GDAL tools and Photoshop and also added to the maps. From there, the maps were placed into the appropriate part of our 4-page country template developed in InDesign. Finally, text, tables, images and other material were added to the page layouts around each map.