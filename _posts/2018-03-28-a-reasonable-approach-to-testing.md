---
layout: post
nav: Blog
status: publish
published: true
title: A Reasonable Approach to Front-End Testing
author:
  display_name: David Heyman
  login: dave
  email: dave@axismaps.com
  url: ''
date: '2018-03-28 09:00:00 +0100'
date_gmt: '2018-03-28 09:00:00 +0100'
categories:
- Testing
tags:
- Testing
- Process
comments: []
project: []
---

We recently got to work with a [professional testing company](http://www.qa4u.com/QA4U/Welcome.html) on one of our larger projects and I was _blown away_ by how they handled front-end testing. My approach to front-end testing was always "bang on it enough with enough different devices and you’ll find most of the bugs." That approach works (mostly), but it’s stupid (totally).

A little while later, I was asked by a client to create a testing plan for a medium sized project. Using the experience of working with the pros (and safe in the knowledge I wouldn’t be the one actually _doing_ the testing), I put together a quick plan. I wanted to share my experiences here because while traditional cartography prepared me for **meticulously editing** a map, front-end testing is something that was (and honestly still is) a bit of a mystery to me.

## What does it do?
The testing plan starts with a thorough rundown of everything the map does.

> We use the word _map_ pretty liberally 'round these parts. Here, it will mean the entire application from map to non-spatial graphics, to controls.  

I made a quick flow chart that shows the hierarchy of functionality in the project, listing major controls plus their options (and sub-options).
<img src="/media/posts/2018/03/hpi_functionality.png" alt="Functionality Flow Chart" style="max-height: none">

It’s a pretty thorough list but I’ve left off some of the foundational level stuff like panning, zooming, and basemap tile loading. If there’s any confusion about setting up the hierarchy, it’s probably laid out for you to see right in your UI. We have a tab for all the big stuff.
<img src="/media/posts/2018/03/hpi_ui.png" alt="Functionality Flow Chart" style="max-height: none">


## Modes and Tasks
Listing out the functionality should be really straightforward, especially this late in the development process. What’s a bit trickier is getting the difference between **modes** and **tasks**.

* Only one **mode** can be active at a time. They usually change the underlying structure of the map or display a different set of graphics. Not every map has multiple modes. Depending on the setup of your system, the order could be significant to testing.
* **Tasks** are what a user can do while in each mode. These tasks can be the same across modes or differ between them. The order tasks are performed will almost always be significant to testing.

## The Perfect Plan
With the functionality all scoped out, you could theoretically create a testing plan that tests every task in every order across every mode and execute that plan on every browser across every desktop operating system and mobile device. However, that would be a bad idea.

Instead, use your functionality list to create a handful of testing scenarios. These scenarios should:
1. Cover all of the modes at least once and all of the tasks multiple times
2. Allow for some randomization where the tester can select a dataset or geography at random 
3. Also allow for randomization on the order certain tasks are performed
4. Most importantly, be grounded in the reality of your actual users as you understand their workflows and potential uses of the map.

When making a plan for testing your datasets, consider how they were created. Were they created by hand? Conversely, are there any weaknesses in your data generation script that may require manual intervention? If so, instead of randomizing your datasets, create a plan that mandates _all_ of them are tested.

The following testing scenario is based off a hypothetical user that has a specific idea of the indicators they’re interested in, but isn’t sure about which geography to perform their analysis.

1. Load the map and select any geography
2. Create a custom score using more than 5 indicators

_Perform steps 3 - 5 in any order_
<ol start="3">
  <li>Change the color scheme</li>
  <li>Click any map unit to view details</li>
  <li>Rank the custom score using any geography <em>larger</em> than what is currently selected</li>
</ol>
<p>&nbsp;</p>
<ol start="6">
  <li>Switch to a different geography</li>
  <li>Select a geographic unit and export</li>
</ol>

The other scenarios are based around other (assumed) types of users including:
1. Total novice users exploring the functionality
2. Users targeting a specific geographic area with no specific indicators in mind
3. Expert users working extensively with the data uploading and exporting features

## Doing the Testing
Now that the formal(ish) testing is ready to begin, we’re probably not going to be the ones doing it. This is because:
1. It’s generally not a good idea to test your own work. You _definitely_ know how to operate it properly and you’ll be more forgiving of an issue that’s not quite a bug but definitely not performing as expected.
2. Off-loading front-end testing to the client is a good way to keep costs down. They usually have motivated staff at varying levels of involvement in the project (and a diverse set of desktop and mobile hardware setups) who are happy to help. 

The problem with external testing, especially with first-time testers, is getting effective bug reports and getting them into a system where we can take action on them. To help with this, we created a bug form on [Airtable](www.airtable.com]) based around [Tom MacWright’s excellent guide to bug reporting](https://polite.technology/reportabug.html). It let’s us collect bug reports from a large number of testers and guide them through giving us the information we need.

<iframe class="airtable-embed" src="https://airtable.com/embed/shrLhtS1gstU8KeVY?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>


We then use [Zapier](https://zapier.com) to connect to Github so each new submission creates an issue that we can fix using our regular development workflow. The client PM is given access to the bug database on Airtable where they can track our progress through the fixes without needing to have full access to our issues (and occasional salty language) on Github.