---
layout: post
nav: Blog
status: publish
published: true
title: Quick tip about Javascript architecture
author:
  display_name: Josh Ryan
  login: josh
  email: josh@axismaps.com
  url: ''
author_login: josh
author_email: josh@axismaps.com
date: '2015-11-23 14:03:18 +0100'
date_gmt: '2015-11-23 19:03:18 +0100'
categories:
- Code
comments: []
---

Most of the work we do here at Axis involves coding Javascript interactive maps. Frequently, the map will have elements controlled by UI components and/or charts and/or timelines. Calling each of the map functions after a UI component gets interacted with (or chart/timeline/etc…), can get exponentially convoluted if you aren’t careful.

If you are fairly new to coding you may not be familiar that code can have design patterns. Just like there are [cartographic principles](http://www.axismaps.com/guide/) that help with everything from layout to typography to color, there are coding principles that help with code clarity, maintainability, and efficiency.

<!--break-->

A good book to refer to on code design patterns for Javascript is [Learn JavaScript Design Patterns by Addy Osmani](http://addyosmani.com/resources/essentialjsdesignpatterns/book). The particular pattern I found recently useful is Publish/Subscribe (nested under the Observer pattern in the above book). There are a couple of ways to implement it, but since we use jQuery in most everything anyways, I’ll talk about jQuery’s implementation.

jQuery has the ability to register and listen for [custom events](https://learn.jquery.com/events/introduction-to-custom-events/). How this works in practice is fairly easy. First you need to sort out what events are actually going to happen. These aren’t events like 'click', but custom events like 'yearchange' or 'dataupdated' or 'mapmove'. Once you have that set, whenever you create a component that is going to be affected by one of these custom events, you register it on the `document`.

{% highlight js %}
function createMap() {
  ...
  //Create map code
  ...
  $(document).on('yearchange:', function(newyear) {
    //update map with new year information
  });
}
{% endhighlight %}

Then on any and all UI elements that affect the year (menus, animation controls, etc…), all you need to do is call `$(document).trigger('yearchange:', newyear)`. The great thing about this is that you can attach listeners on multiple different components (e.g. maybe the timeline and the chart and the map all get updated with a yearchange) and the UI element doesn’t need to know a thing about any of them.

Couple of notes:

- There is a colon after the word `yearchange`. That is completely optional, but is a way to future-proof your custom event in the off chance that jQuery (or a jQuery plugin) decides to use the same event name. You could also achieve this by using slashes and creating a nesting effect (e.g. `/yearchange`, `/yearchange/increase`, `/yearchange/decrease`, etc…) which might be helpful to group events if you have a lot of them.
- Why register on the `document` element? Because of the way Javascript handles bubbling through the DOM, you can always be sure that if the listener is on `document`, it’s going to be heard; plus it keeps separation of concerns (another code design thing). If you put the listener on the map object for example, then the UI element needs to know where the listener is (breaking the entire reason for this system which was that the UI didn’t need to know anything).

That’s it. If you have a several different components being updated or changed by several other components, consider the Pub/Sub pattern and if you are using jQuery already in your project, consider using custom events.