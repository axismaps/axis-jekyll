# Global Commodities Chronology

## Overview
This chronology is the centerpiece of both the Global Commodities and Empire Online projects. The primary goal was to create an engaging way to get students to interact with chronological information. The map pulls short entries from a database covering thousands years organized by category and tag.

## Data
The primary challenge with this dataset was working with over 3,000 entries and balancing load speed with the browser limitations of dynamically rendering each entry as a block. By working with the client before they started their extensive data collection process, we were able to arrive at a suitable compromise between the data they wanted to collect and the technical constraints of the project.	

## Design
First and foremost, the chronology needed to be visually engaging to get students clicking and exploring. Since Adam Matthew had a great collection of images to accompany the entries, we wanted to feature the images to draw users in. There was a tricky balance between showing relative time and presenting the entries in an easy-to-use manner. The compromise was to place non-adjacent years next to each other and use the histogram to give an idea of relative time.

## Code
The chronology renders each square dynamically, calculating it's size based on the content length and the presense of the image. Priority is given to entries with images, which shrinks the other entries. The biggest challenge was writing this positioning Javascript to run acceptably in IE8.