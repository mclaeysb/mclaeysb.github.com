---
layout: project
categories: maps
date_start: 2023-01-01
date: 2023-08-01
title: Allmaps
tagline: Bringing Thin Plate Spline warping to IIIF maps
organisation: Allmaps
link: https://allmaps.org
---
Allmaps in an Open Source tool for curating, georeferencing and exploring historical maps. I've had the pleasure to contribute to it's codebase since 2023. My first project was to bring Thin Plate Spline warping to the Allmaps Viewer. 

## Georeferencing IIIF maps

Many archives and libraries have have digitised scans of the old maps in their collections. These used to be difficult to access and work with: these scans have file-sizes in the gigabytes, and manipulating them required a fast computer, a lot of patience and fluency in specific software like QGIS's 'georeferencer' tool. The arrival of [IIIF](https://iiif.io/), a new standard for publishings images online, changed the game: institutions implementing this technology can 'serve' an image using a so called Manifest, a JSON object (accessible through a URL) explaining how to access the image. Specific applications have been built to view or manipulate IIIF Manifests online. These only require a Manifest URL: no need to download the images on your computer, the viewer will request the part of the image at the right scale and resolution as you pan and zoom! 

[Allmaps](https://allmaps.org) is built around this new standard: the Allmaps Editor takes a IIIF Manifest URL and lets you georeference the map(s) it contains by indicating which points on the image and a reference map correspond. This information in stored in a so called IIIF Georeference Annotation: a JSON object specifies additional information to a referenced Manifest URL. A second tool, the Allmaps Viewer, takes such a Georeference Annotation and lets you view it's georeferenced map overlaid on a webmap. You can inspect the map by zooming in, play around with the opacity to see how well it overlays with the reference map or export to a third party tool as GeoTIFF or XYZ tile service. 

## Adding Thin Plate Spline transformations

I had worked with historical maps before when <a href="projects/academia_ferraris" class="internal">studying the Ferraris map</a> and knew about georeferencing, transformations and distortions. Through this work I was also familiar with the struggle of getting access to scans in archives, manipulating huge image files and creating duplicates for every georeference attempt. So Allmaps felt like a bright approach and the right path forward when I learned about it in the fall of 2022. Not just in it's technical approach but also in its spirit: using open data standards and open source tools, building a system to share information without locking it up, and sharing their development process and learnings in the open through [Observable notebooks](https://observablehq.com/@allmaps?tab=notebooks) and on [GitHub](https://github.com/allmaps/allmaps). And the two founders Bert Spaan, Jules Schoonman lived just next door, in the Netherlands!

I noticed the then current version only supported affine transformations and I sent them an explaining I had worked with old maps before and was wondering if more advanced transformations were planned and if I could be of help with them. It turned out Thin Plate Spline warping was a feature they wanted to add in the near future, and they where happy to give a collaboration a try. 

In the spring of 2023 I joined the small Allmaps development team and we took the necessary steps to add Thin Plate Spline warping (and other transformations!) to the Allmaps Viewer. I made some Observable notebooks myself documenting this journey to share what I learned. We started by designing [a simple polygon triangulation algorithm](https://observablehq.com/d/199e169d58f0bf0d), then implemented [Thin Plate Spline interpolation in the Allmaps Transform module](https://observablehq.com/d/0b57d3b587542794) as a special case of Radial Basis function interpolation, and finally [put it all together](https://observablehq.com/d/4c1a0f7c09dfcb49) adding UI components etc. I hope these notebooks can be useful to others.

This was my first time working with WebGL. I had heard about it for a long time but it looked too scary to start experimenting with it myself. I find myself struggling with the syntax and most of the time I only half-understand what I'm doing, but when I look up things online it seems like thats the case for most people. It's also my first time with TypeScript, which I found very easy to get used too and typing stays one of the best ways write better code. The project also uses Svelte, which I was curious to learn more about (even though I have no ambition to become a front-end expert), and we're experimenting with some other frameworks for the database etc. 

Experimenting with coding languages and frameworks is nice, but it's clear for my that I'm here for the maps and for the Maths: it's so nice to browse through [the latests maps being georeferenced](https://latest.allmaps.org/) and I feel at home when I get to work with triangles and matrices.

## Thoughts

First of all I'm super grateful I found a kind group of people working on a project that's about a commons (assets stored in public libraries), doesn't make people or institutions dependent on a new service by locking up their data (but serves their existing data from their servers in a new way, keeping an open copy of the data produced along the way) and builds open source software on public standards (IIIF Manifests and Annotations).

There's also some open questions I have. One is when to use the newest coolest library, and when to stick with the old(er), maybe more boring approaches. WebGL, for example, is a central part of this project and it's a good thing this project uses it. But now [WebGPU](https://en.wikipedia.org/wiki/WebGPU) is the new kid around the block, so should we swich all our code to it? And then there's this new component framework and that new database service provider etc. When a project has been built in a modular way then switching costs should be relatively low, but there's also the mental energy required to switch and the technical backlog that needs to be ported too. The feeling can quickly arise that we might be doing it just because it's the new popular thing. But also, it often means we restrict what we build to newer browsers, which in turn stimulates the 'you should really update your computer every x years' consumer narrative -- one I don't support. Interestingly, the core of the georeferencing transformations code are a bunch of simple mathematical functions and some matrix inversions, algorithms which have existed (and have been able to run on pc's) for decades now and there's no reason they should become unusable in a couple of years because some other library is not supported anymore on your device.

## Future

When I was working on the Ferraris map I wrote some code to study distortions in old maps. It was written in Matlab/Octave -- the language I was most comfortable with at the time and an approach that seemed to make sense working with (large) files and images on my laptop. With a webtool like Allmaps my hope is to bring that code over one day and make it more accessible for researchers everywhere!

We have many other ideas in mind to make historical maps easy to discover and play around with. Some will require a lot of effort to build and probably some financial sponsorship, others could be cooked up quickly once this or that thing is in place. We hope to keep building in the same open spirit, closer to our goal for a set of standards and tools that make *all maps* easily accessible.
