---
template: BlogPost
path: /wedding-name-tags-part2
date: 2020-07-26T04:37:28.412Z
title: Wedding Favor Glass Name Tags - Part 2
thumbnail: /assets/20200725_171122.jpg
---
In order to engrave names into the tags I needed to make a fixture to hold them in place. Since I'm going to be making quite a few of these the fixture also needs to be made so that the tags can be swapped out quickly but still accurately located. The solution I came up with is to create 3D printed fixture plate to hold 2 tags at a time. There are 2 [threaded inserts](https://www.mcmaster.com/93365A130/) in the fixture for the 2 [MITEE-BITE](https://www.mcmaster.com/84865A31/) fixture clamps. I got these clamps from McMaster-Carr, they have an eccentric screw that clamps the tag in place with a small turn of the screw. These are really easy to use and make swapping the tags out a simple operation. 

![Fixture](/assets/20200725_170850.jpg "Fixture")

I needed the surface to be as flat as possible so that when the tags are engraved the depth is even so after 3D printing I milled the entire surface of the fixture to create an even flat surface. Here's the toolpath that Fusion360 generated for me, unfortunately I only had a 1mm end mill at the time so it took quite a while to complete this operation. 

![tool path](/assets/FacingOperation.JPG "Tool Path")

With this fixture it's as simple as dropping the tag down, sliding it against the stops and then a turn of the screw for the clamp. To help with consistency and accounting for the inaccuracies of my cheap CNC mill the tag on the left is my G54 work offset and the tag on the right is my G55 work offset. What this allows me to do is set the Z height independently for each tag. In practice they are only a fraction of a millimeter off but it is enough to make a difference when I'm only engraving 0.250 mm deep.

***Next up***.....generating the toolpaths.
