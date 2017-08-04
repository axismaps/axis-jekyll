---
layout: post
nav: Blog
status: publish
published: true
title: Offline Web-Maps
author:
  display_name: David Heyman
  login: dave
  email: dave@axismaps.com
  url: ''
author_login: dave
author_email: dave@axismaps.com
wordpress_id: 1843
wordpress_url: http://www.axismaps.com/blog/?p=1843
date: '2014-10-30 02:21:44 +0000'
date_gmt: '2014-10-30 07:21:44 +0000'
categories:
- Code
tags: []
comments: []
---
<p>Recently I said something silly to a client:</p>
<blockquote><p>...and because we're not using a database, you'll be able to run this map offline on your local computer.</p></blockquote>
<p>Great! They give lots of presentations where they want to show off the map and this means they wouldn't have to rely on conference wifi, the most overstretched resource on the planet. We delivered the completed map to be deployed on their site along with the instructions:</p>
<blockquote><p>Just open index.html in your web-browser and you'll be up and running.</p></blockquote>
<p>Nope.</p>
<!--break-->
<blockquote><p>Did you try Chrome instead of IE?</p></blockquote>
<p>That ol' chestnut? Still nope.</p>
<p>Why was it working for me but not for them? We developed this map running the files locally so what was the difference between our machines and theirs?</p>
<h3>The Development Webserver</h3>
<p>Everyone doesn't use one of these? If you develop stuff for the web, you most likely have some kind of webserver running on your computer (<a href="http://www.mamp.info/en/">MAMP</a>, <a href="http://www.wampserver.com/en/">WAMP</a>, <a href="http://en.wikipedia.org/wiki/LAMP_(software_bundle)">LAMP</a>, et al) so when you view a project in the browser, the URL looks like:</p>
<pre>http://localhost/...</pre>
<p>The page is loaded over the same protocol used when it is on the web, it's just not looking outside your actual computer to do so. However, if you just open any old HTML file in the browser, you'd get something like:</p>
<pre>file:///Users/...</pre>
<p>This local file protocol means your browser is loading your file <em>without</em> it being initially processed by a webserver, which opens it up to some potential security issues that make the browser say "nah... not loading that guy". If it's a really simple page (static HTML, CSS), no problem. It is a problem, however, if you're running any XMLHttpRequests to asynchronously load data. In D3, these requests look something like:</p>
<pre>d3.json()</pre>
<p>or <a href="https://github.com/mbostock/d3/wiki/Requests">any of these</a>. In jQuery, <a href="http://api.jquery.com/jquery.ajax/">this is the guy</a> you're looking for:</p>
<pre>$.ajax()</pre>
<h3>The Fix</h3>
<p>Once I've located all the XMLHttpRequests on the page, it's a relatively simple job to replace them. In this map, I have this block of code that loads a topojson file:</p>
<pre>d3.json("json/states.json", function(error, us) {
   map.selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .enter()
      .append("path")</pre>
<p>This loads the states.json file and as soon as it is received, runs the function that takes an error and a variable called <strong>us</strong>. The second variable contains the contents of the loaded file and that's the important one for what we're doing.</p>
<p>There's two changes to make. The first is to open states.json and at the beginning of the file, add:</p>
<pre>var us =</pre>
<p>This takes the proceeding JSON object and declares it as the variable <strong>us</strong>, the same variable used in the success function for the d3.json request. Now, delete the first line of the request (and the closure at the end) so you're code becomes:</p>
<pre>map.selectAll("path")
   .data(topojson.feature(us, us.objects.states).features)
   .enter()
   .append("path")</pre>
<p>The new code is still looking for the <strong>us</strong> variable, but now it isn't wrapped in the d3.json function that waits for the XMLHttpRequest to finish before executing. It will just run as soon as it gets to that line in the flow of the code. Because of that, you need to make sure that data is available when it gets there.</p>
<p>In your index.html file add the modified states.json file like it was a regular javascript file:</p>
<pre>&lt;script src="json/states.json"&gt;&lt;/script&gt;</pre>
<p><em>before the javascript file</em> that executes the code. Just put it at the top of the &lt;head&gt;, below your CSS files. You don't need to worry about it slowing down the load time of the page because none of these files are being transmitted over the web.</p>
<p>You now have a set of files that will work wherever you send them. Anyone can open your index.html file in a browser and see your map as you intended.</p>
<h3>Some Caveats</h3>
<ol>
<li>Watch out for convenience functions like d3.csv() that have conversions built into them. This method only works for files that are already Javascript objects and can be declared as variables. If you must have your data stored as CSV, you'll need to alter the file to become one long string and parse it yourself.</li>
<li>The variable you use in the external file will be <em>global</em>. Be careful with that. You can't reuse any of those variables in your code so it's worth a quick search to make sure the names don't come up again.</li>
<li>There's a reason we don't load our data like this all the time. It will be slow and gross.</li>
<li>The latest version of Firefox appears to be cool with XMLHttpRequests over file:/// so if you're lazy, just tell your clients to use that instead.</li>
</ol>
