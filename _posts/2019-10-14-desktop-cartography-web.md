---
layout: post
nav: Blog
status: publish
published: true
title: Desktop-style cartography with web graphics
author: awoodruff
writer:
  display_name: Andy Woodruff
  email: andy@axismaps.com
  twitter: awoodruff
image: /media/posts/2019/05/watercolor.jpg
date: '2019-10-14 09:00:00 +0100'
date_gmt: '2019-10-14 09:00:00 +0100'
categories:
- Cartography
tags:
- Canvas
- SVG
comments: []
project: []
permalink: /nacis2019/
---

This is a companion post to my [NACIS](http://nacis.org) 2019 Practical Cartography Day talk, in which there's not enough time to say anything practical. If you've arrived here after seeing the slides, I hope you're ready for some coding!

Desktop computer and hand-drawn cartography have a long history of subtle-yet-advanced design tricks to turn good maps into great maps. With web maps, it's easy to spend all your effort on getting code to work or building user interfaces or programming interactivity, and neglect little cartographic design enhancements. Today I'm here to demonstrate web technology as a design tool and show some processes for bringing desktop-esque design enhancements to web maps. My hope is to explain some technical approaches well enough for cartographers to get the hang of them and adapt them to their own design ideas.

A helpful prerequisite—and it's a doozy—is a basic understanding of [using D3](https://www.d3indepth.com/) to draw maps on the web. But don't run away if you're not a D3 expert. Start by playing with the forthcoming map examples, and fill in gaps later.

As promised, here are links to fully explained examples and code. They are written in [Observable](https://observablehq.com) notebooks, which are live and interactive. Play around with the code and see what happens!

- ## [SVG Cartography, Part One](https://observablehq.com/d/bc6a51b864a90bc9)  
- ## [SVG Cartography, Part Two](https://observablehq.com/d/5dd62606489f1751)  
- ## [Canvas Cartography](https://observablehq.com/d/3379040b71f37cbd)

The presentation also includes a few images of Canvas examples not contained in the tutorials:

- [Halftone map](https://observablehq.com/@awoodruff/halftone-map)
- [Watercolor map](https://observablehq.com/@awoodruff/watercolor-map)
- [In-browser hillshade](https://observablehq.com/@awoodruff/diy-hillshade)
- [Illuminated contours](https://observablehq.com/@awoodruff/illuminated-contours)

If you've arrived here from elsewhere, below are the less-than-informative slides that these tutorials are meant to accompany.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQX4k49KS1dVhB2NafvSk1S2rhbnrfoCUxxH040TPWH--WvhICJwjjcNArqKRLFgrQOBSX8NiQEgPNy/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Happy mapping!
