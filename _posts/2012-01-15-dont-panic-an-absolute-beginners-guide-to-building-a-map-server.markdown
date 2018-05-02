---
layout: post
nav: Blog
status: publish
published: true
title: 'Don''t Panic: An Absolute Beginner''s Guide to Building a Map Server'
writer:
  display_name: David Heyman

  email: dave@axismaps.com

author_login: dave
author_email: dave@axismaps.com
wordpress_id: 1205
wordpress_url: http://www.axismaps.com/blog/?p=1205
date: '2012-01-15 07:36:53 +0000'
date_gmt: '2012-01-15 12:36:53 +0000'
categories:
- Code
tags: []
comments:
- id: 76520
  writer: jhon
  author_email: brandon@beejn.com
  author_url: ''
  date: '2012-01-17 13:48:44 +0000'
  date_gmt: '2012-01-17 18:48:44 +0000'
  content: "Hey guys, Thanks a lot for this article.\r\n\r\nAny chance you can give
    a complete primer on GIS/GPS programming and how all of what you've discussed
    above ties together? \r\n\r\nWhat's the difference between mapnik and open street
    maps?\r\n\r\nI want to do stuff like this - http://bit.ly/yO71Uy . Do i need a
    map server for this?\r\n\r\nThanks!"
- id: 76614
  writer: David Heyman
  author_email: dave@axismaps.com
  author_url: ''
  date: '2012-01-18 12:06:42 +0000'
  date_gmt: '2012-01-18 17:06:42 +0000'
  content: "How about this for a bare-bones primer:\n\nOpenStreetMap Data --gets stored
    in-> \nPostGIS Database --which is accessed by->\nMapnik --to draw map tiles for->\nTileStache
    --which sends them->\nWeb Browser\n\nThis setup can produce lots of different
    kinds of maps, thematic and reference maps at any scale. It could definitely make
    something like what's in your example... just not in 3D."
- id: 76955
  writer: Ben Stoltz
  author_email: stoltz.ben@me.com
  author_url: ''
  date: '2012-01-23 09:38:24 +0000'
  date_gmt: '2012-01-23 14:38:24 +0000'
  content: Hey there David.  Would there be any way to add in, say, geo-processing
    tools to the server?
- id: 76996
  writer: David Heyman
  author_email: dave@axismaps.com
  author_url: ''
  date: '2012-01-24 04:03:28 +0000'
  date_gmt: '2012-01-24 09:03:28 +0000'
  content: There is <a href="http://www.gdal.org/" target="_blank" rel="nofollow">GDAL</a>
    / <a href="http://www.gdal.org/ogr/" target="_blank" rel="nofollow">OGR</a> already
    installed. These libraries are really useful for data manipulation (conversion,
    projection, etc) of both raster (GDAL) and vector (OGR) data. Beyond that, I've
    never really considered doing geo-processing on the server as I've always wanted
    a GUI to be able to see the results. If you need to do complex data manipulation
    directly on the server, it might be worth looking into <a href="http://grass.fbk.eu/intro/index.php"
    target="_blank" rel="nofollow">GRASS</a> for running geo-processing commands directly
    from the shell.
- id: 121879
  writer: Alan Smiles
  author_email: alansmiles@gmail.com
  author_url: http://primarysolutions.org
  date: '2013-02-26 14:11:48 +0000'
  date_gmt: '2013-02-26 19:11:48 +0000'
  content: "Being a bit of a Luddite i feel there is always perhaps an assumption
    by people who know how to achieve something that everyone will understand.  I'm
    hoping someone will eventually provide a video with text commands included in
    an attachment......... http://www.youtube.com/watch?v=aQx2e-sgENU&amp;feature=youtu.be
    \  perhaps someone will do something like this to help me. However you have certainly
    taken it a level above what i have seen to date...... thank you for taking the
    time to do that.\r\n\r\nAl"
---
<p>There are a lot of great mapping applications out there that run on a server. They can be intimidating to install and configure so I thought I would document my steps so everything would be in one place. This a a guide for the absolute beginner so if you have some command-line experience, I promise I'm not being condescending. Future posts will cover how we're actually using these tools to build our maps.</p>
<p>This tutorial should take you from absolutely nothing to a fully-functional web server containing:</p>
<ul>
<li><strong><a href="http://postgis.refractions.net/" target="_blank">PostGIS</a>: </strong>A PostgreSQL database optimize to store spatial information. It can easily import shapefiles and OSM data using command line tools as well as connect to mapping services like QGIS and Mapnik.</li>
<li><strong><a href="http://mapnik.org/" target="_blank">Mapnik</a>: </strong>A very powerful tool for automatically generating maps from geographic data with lots of control over cartographic display and rendering.</li>
<li><strong><a href="http://tilestache.org/" target="_blank">TileStache</a>: </strong>A simple way to efficiently serve geographic data to mapping applications. It can send tiled vector or raster data and will speed up any application that needs to load lots of data.</li>
</ul>
<!--break-->
<h2></h2>
<h2>Basic Setup</h2>
<p>I'm going to be using a <a href="http://www.rackspacecloud.com/2936.html" target="_blank">Rackspace Cloud Server</a> for this example. It's a cheap way to get a server up and running and I've found them to be great with support. They automatically build your server and install the operating system. You just need to select 3 things:</p>
<ol>
<li><strong>Operating System: </strong>Ubuntu 11.10 (Oneric Ocelot)</li>
<li><strong>Server Name: </strong><em>tiles</em></li>
<li><strong>Server Size: </strong>1024 MB of RAM and 40GB of disk</li>
</ol>
<p>The RAM and disk space are the bare minimum requirements. Fortunately, Rackspace let's you upgrade your server at any time so it's easy to configure it small as a sandbox and then beef it up if you decide to put it into production later on.</p>
<p>Once you click "Create server" you'll see your new root password. Copy it to the clipboard but don't worry about keeping it super-safe. We'll change it as soon as we log in for the first time (they also email it to you). Setup will take about 5 minutes to complete and they'll email you when it's finished.</p>
<h2></h2>
<h2>Terminal and Remote Access</h2>
<p>Since this server is in the cloud (<em>ooooooh</em>), the only way to access it is remotely through SSH. Open any SSH client you like (Terminal is already installed on OSX) and get comfortable. First thing we need to do is to log on to our remote server. Make sure you have that email with your root password and IP address and type into the terminal window:</p>
<pre>ssh root@(<strong><em>your ip-address)</em></strong></pre>
<p>That command tells the terminal to start an SSH session, logging in as <em>root</em> to the server at the specified IP address. The <em>root</em> username is the default admin of the server. We'll do most of this setup as <em>root</em> since it has full control over the system.</p>
<p>When it asks, just paste your root password from the email and you should be logged in and should see something like this:</p>
<pre>root@tiles:~#</pre>
<p>The <em>#</em> tells you the system is ready to receive commands. Let's now change the root password into something we'll remember. Type:</p>
<pre>passwd</pre>
<p>and hit enter and follow the prompts.</p>
<p>Now we want to do a quick software update to make sure everything is secure. Run both of these commands:</p>
<pre>sudo aptitude update</pre>
<pre>sudo aptitude upgrade</pre>
<p>We'll use the <em>sudo</em> command often. It tells the server to perform the task as a super-user which gives you extra permissions to modify the system. Here's another top-tip: At the command prompt, you can hit the up arrow on your keyboard to cycle through your previous commands.</p>
<h2></h2>
<h2>Installing the Web Server Bits</h2>
<p><em>This part of the tutorial is taken from <a href="http://www.symana.com/2010/12/setup-a-lamp-rackspace-cloud-server-running-ubuntu-10-10/" target="_blank">symana.labs</a></em></p>
<p>The next step is to install the LAMP stack. LAMP stands for (Linux, Apache, MySQL, PHP) and has all the basics to turn your server into a web server. It can be installed with a single command:</p>
<pre>sudo tasksel install lamp-server</pre>
<p>and follow the prompts. To secure the MySQL server from common database attacks, run:</p>
<pre>mysql_secure_installation</pre>
<p>Enter the password you set in the previous step and then enter "n" to keep it. Enter "Y" for the rest of the questions.</p>
<p>If you think you are going to be using MySQL for other applications on the server, you can install phpmyadmin to give you a graphical way to interact with the DB by running:</p>
<pre>sudo apt-get install phpmyadmin</pre>
<p>When the install completes, we need to modify the Apache2 config file to include information about phpmyadmin:</p>
<pre>sudo nano /etc/apache2/apache2.conf</pre>
<p>Use Ctrl-V to scroll down to the bottom of the file and add:</p>
<pre># Include phpmyadmin configuration:
Include /etc/phpmyadmin/apache.conf</pre>
<p>Press Ctrl-O to save (write out) the file and press Enter to save it in its current location. Then press Ctrl-X to exit editing the file.<br />
When you're done configuring everything, restart apache with:</p>
<pre>/etc/init.d/apache2 restart</pre>
<p>To configure a fully qualified domain name for apache type:</p>
<pre>echo "ServerName localhost" | sudo tee /etc/apache2/conf.d/fqdn</pre>
<p>Now we have to configure the server's hostname so we can contact it via a URL instead of the IP address. If you enter:</p>
<pre>hostname -f</pre>
<p>you should see the server name you entered when you setup the server. We want to turn that into a subdomain for our primary domain (for me it will be <strong>tiles.axismaps.com</strong>) but you can skip this if you don't have your own domain (you'll just keep using your IP address to connect to the server). To tell the server what the rest of the domain is, we'll need to edit a few text files using <strong>nano</strong>, the built-in terminal text editor.</p>
<pre>sudo nano /etc/hostname</pre>
<p>Will show you something like:</p>
<pre>tiles</pre>
<p>You'll want to change that to:</p>
<pre>tiles.<strong><em>(primary domain name).</em></strong>com</pre>
<p>We are using <strong>tiles.axismaps.com</strong> for ours. When you've edited the file, hit Ctrl-X (not command if you're on a Mac) then enter Y to save changes and hit Enter to overwrite the file. Do the same thing and add your domain to the second entry in:</p>
<pre>sudo nano /etc/hosts</pre>
<p>To make the changes stick, reboot your server with:</p>
<pre>sudo reboot</pre>
<p>The final step is to add a DNS record with your web host that points back to the server. From your server management page in Rackspace, click the DNS tab then click your domain name. Click "Add" to enter a new record with values:</p>
<ul>
<li><strong>Type: </strong>A</li>
<li><strong>Name: </strong>tiles.<strong><em>(primary domain name)</em></strong>.com</li>
<li><strong>Content: <em>(server ip-address)</em></strong></li>
</ul>
<p>By this point, the server will have rebooted so you can log in again with:</p>
<pre>ssh root@(<strong><em>your ip-address)</em></strong></pre>
<p>To allow established connections to continue to function:</p>
<pre>iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT</pre>
<p>To allow SSH traffic:</p>
<pre>iptables -A INPUT -p tcp --dport 22 -j ACCEPT</pre>
<p>To allow HTTP traffic:</p>
<pre>iptables -A INPUT -p tcp --dport 80 -j ACCEPT</pre>
<p>To allow HTTPS traffic:</p>
<pre>iptables -A INPUT -p tcp --dport 443 -j ACCEPT</pre>
<p>To allow remote database connections:</p>
<pre style="margin: 8px;">iptables -A INPUT -p tcp --dport 5432 -j ACCEPT</pre>
<p>Drop all remaining traffic:</p>
<pre>iptables -A INPUT -j DROP</pre>
<p>Save all the rules to a file:</p>
<pre>sudo iptables-save &gt; /etc/iptables.rules</pre>
<p>To enable the firewall, we need to add the rules to the network adapter by editing the interfaces file:</p>
<pre>sudo nano /etc/network/interfaces</pre>
<p>and add the line:</p>
<pre>pre-up iptables-restore &lt; /etc/iptables.rules</pre>
<p>just after <em>iface eth0 inet static</em> and make sure it is indented like the other lines. Save and exit the file then reboot the server.</p>
<p>This is a good time to create a server backup. In Rackspace, click on "Images" then click "New On-Demand Image" to create a backup of your server. This way, if something goes wrong, you can be up and running again quickly.</p>
<h2></h2>
<h2>Installing PostGIS</h2>
<p><em>Some parts of this tutorial is taken from <a href="http://wiki.openstreetmap.org/wiki/Mapnik/PostGIS#Complete_Installation_for_Ubuntu">OpenStreetMap Wiki</a></em></p>
<p>To give us access to all the software we'll need, we need to add an additional software repository. First, enter:</p>
<pre>sudo apt-get install python-software-properties</pre>
<p>to install the command that will allow us to add new repositories. Then we can add a <a href="https://launchpad.net/~ubuntugis/+archive/ubuntugis-unstable">GIS-specific software repository</a> by doing:</p>
<pre>sudo add-apt-repository ppa:ubuntugis/ubuntugis-unstable</pre>
<p>Now we need to update the system to allow it to pull down the available software from the new repository:</p>
<pre style="margin: 8px;">sudo aptitude update</pre>
<p>We should be ready to install all of the PostGIS packages with:</p>
<pre>sudo apt-get install postgresql-9.1-postgis postgresql-contrib-9.1</pre>
<p>Now we need to setup PostGIS to make the newly installed database ready for GIS. Swtich to the database user:</p>
<pre>sudo -u postgres -iH</pre>
<p>Now we will create a user within the database that can access your maps:</p>
<pre>createuser -SdRP gisuser</pre>
<p>Enter a password for connecting to the database (it should be different from your root password).</p>
<p>Now we will create and configure a database to hold your spatial data:</p>
<pre>createdb -E UTF8 -O gisuser gis</pre>
<pre>psql -d gis -f /usr/share/postgresql/9.1/contrib/postgis-1.5/postgis.sql</pre>
<pre>psql -d gis -f /usr/share/postgresql/9.1/contrib/postgis-1.5/spatial_ref_sys.sql</pre>
<pre>psql gis -c "ALTER TABLE geometry_columns OWNER TO gisuser"</pre>
<pre>psql gis -c "ALTER TABLE spatial_ref_sys OWNER TO gisuser"</pre>
<pre>exit</pre>
<p>Now we need to configure access to our database first by editing the access file:</p>
<pre>sudo nano /etc/postgresql/9.1/main/pg_hba.conf</pre>
<p>Scroll down to the bottom of the file and change the words <strong>ident</strong> and <strong>md5 </strong>to "trust" (there should be 3). If you want to connect to this database remotely (to view your data in an external manager or view it in QGIS) you should add the line:</p>
<pre># Enable remote connections:</pre>
<pre>host    all         all         0.0.0.0/0             md5</pre>
<p>to the bottom of the file and then save and close. You'll also need to enable remote listening by editing the main configuration file here:</p>
<pre>sudo nano /etc/postgresql/9.1/main/postgresql.conf</pre>
<p>and change the line:</p>
<pre>#listen_addresses = 'localhost'</pre>
<p>to</p>
<pre>listen_addresses = '*'</pre>
<p>(don't forget to remove the "#" in front). Save and overwrite the file. To apply the changes, restart the database server:</p>
<pre>sudo /etc/init.d/postgresql restart</pre>
<p>To test if everything has been installed properly, log into the database as the new user we created.</p>
<pre>psql gis gisuser</pre>
<p>If you type <strong>\d</strong> you should be able to see all 3 tables. Then type <strong>\q </strong>to return.</p>
<h2></h2>
<h2>Installing Mapnik2</h2>
<p><em>Copied exactly from the <a href="https://github.com/mapnik/mapnik/wiki/UbuntuInstallation">Mapnik Wiki</a></em></p>
<p>To install Mapnik, enter:</p>
<pre>sudo add-apt-repository ppa:mapnik/nightly-2.0</pre>
<pre>sudo apt-get update</pre>
<pre>sudo apt-get install libmapnik mapnik-utils python-mapnik</pre>
<p>That's it!</p>
<h2></h2>
<h2>Installing TileStache</h2>
<p><em>Some parts of this tutorial is taken from <a href="https://github.com/migurski/TileStache/blob/master/README">TileStache on GitHub</a></em></p>
<p>The first step in installing TileStache is to install mod_python which is the interface TileStache will use to communicate with the web server. You can install it with:</p>
<pre>sudo apt-get install libapache2-mod-python</pre>
<p>Then restart your web server with:</p>
<pre>sudo /etc/init.d/apache2 restart</pre>
<p>Now we need to install some more packages that TileStache depends on. First we'll switch to the directory where we'll keep the new applications:</p>
<pre>cd /etc</pre>
<p>Install packages Curl and Git via aptitude to help with the install:</p>
<pre>sudo apt-get install curl</pre>
<pre>sudo apt-get install git-core</pre>
<p>Now install some python tools and libraries that are required:</p>
<pre>sudo apt-get install python-setuptools</pre>
<pre>sudo aptitude install python-dev</pre>
<pre>sudo apt-get install libjpeg8 libjpeg62-dev libfreetype6 libfreetype6-dev</pre>
<p>We'll grab and install PIP to easily install python modules:</p>
<pre>curl -O https://raw.github.com/pypa/pip/master/contrib/get-pip.py</pre>
<pre>sudo python get-pip.py</pre>
<p>Now install the required python modules</p>
<pre>sudo pip install -U werkzeug</pre>
<pre>sudo pip install -U simplejson</pre>
<pre>sudo pip install -U modestmaps</pre>
<p>The Python Image Library module has some quirks in Ubuntu 11.10 so we need to do some quick fixes:</p>
<pre>sudo ln -s /usr/lib/x86_64-linux-gnu/libjpeg.so /usr/lib</pre>
<pre>sudo ln -s /usr/lib/x86_64-linux-gnu/libfreetype.so /usr/lib</pre>
<pre>sudo ln -s /usr/lib/x86_64-linux-gnu/libz.so /usr/lib</pre>
<p>Before we can install it:</p>
<pre>sudo pip install -U pil</pre>
<p>Finally we'll download TileStache from GitHub:</p>
<pre>git clone https://github.com/migurski/TileStache.git</pre>
<p>And install it globally by running the install script:</p>
<pre>cd TileStache/</pre>
<pre>python setup.py install</pre>
<p>Finally, we'll have to add the mod_python configuration to tell our web server which URLs to have TileStache process. Start by editing the apache configuration file:</p>
<pre>sudo nano /etc/apache2/httpd.conf</pre>
<p>and add this:</p>
<pre>&lt;Directory /var/www/tiles&gt;</pre>
<pre>  AddHandler mod_python .py</pre>
<pre>  PythonHandler TileStache::modpythonHandler</pre>
<pre>  PythonOption config /etc/TileStache/tilestache.cfg</pre>
<pre>&lt;/Directory&gt;</pre>
<p>This will direct any web traffic to the "tiles" folder containing the file extension ".py" to TileStache. We just need to add a tiles directory to the web directory so we don't get an error:</p>
<pre>mkdir /var/www/tiles</pre>
<p>Reboot your server to finish it off:</p>
<pre>reboot</pre>
<h2></h2>
<h2>Testing Your Server</h2>
<p>Once your server reboots, we can test to make sure TileStache is installed correctly and is running through mod_python and receiving maps from Mapnik.</p>
<p>In your browser, go to: http://tiles.<em style="font-weight: bold;"></em>.com/tiles/tiles.py/osm/preview.html</p>
<p>You should see a OSM tiled map fullscreen, confirming TileStache is correctly installed and running. When you work with TileStache, you can always preview your tilesets at .../tiles/tiles.py/<strong><em></em></strong>/preview.html</p>
<p>Now go to: http://tiles.<em style="font-weight: bold;"></em>.com/tiles/tiles.py/example/preview.html</p>
<p>You should see a simple gray country map which confirms that TileStache is talking to Mapnik, rendering a shapefile stored in the TileStache directory.</p>
<h2></h2>
<h2>Finished</h2>
<p>Now that everything is installed, you can go nuts with TileStache, Mapnik and PostGIS to render your own tiled maps. We'll come back to this point in the coming weeks to show examples of how you can actually use these tools to make some maps. Some sample topics might include:</p>
<ul>
<li>Thematic cartography with TileStache and Mapnik</li>
<li>Combining raster and vector tiles to optimize mapping for iPad</li>
<li>Custom map tiles from OSM data</li>
</ul>
