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
Allmaps in an Open Source tool for curating, georeferencing and exploring historical maps. I've had the pleasure to contribute it's codebase since 2023, starting by bringing Thin Plate Spline warping to the Allmaps viewer. I'm learning about new technologies and it's been a joy to work together on this small but brave project.

## The idea

Many archives and libraries have have digitised scans of the old maps in their collections. These used to be difficult to access and work with: these scans have file-sizes in the gigabytes, and manipulating them required a fast computer, a lot of patience and fluency in specific software like QGIS's 'georeferencer' tool. The arrival of [IIIF](https://iiif.io/), a new standard for publishings images online, changed the game: institutions implementing this technology can 'serve' an image using a so called Manifest URL. Specific applications have been built to view or manipulate IIIF images online. These only require a Manifest URL: no need to download the images on your computer, the viewer will request the part of the image at the right scale and resolution as you pan and zoom! 

Allmaps is built around this new standard: the Allmaps Editor takes a IIIF Manifest URL and lets you georeference the map(s) it contains by indicating which points on the image and current map correspond. This information in stored in a so called IIIF Georeference Annotation, which can also be accessed through a URL. A second tool, the Allmaps Viewer, takes such an Annotation and lets you view it's georeferenced map overlaid on a webmap. You can inspect the map by zooming in, compare the overlays by removing the background color or export to a third party tool using the (still experimental) XYZ tile-server. 

For those who know something about GIS, it's a bit like a WMTS viewer, but with an extra step to store the georeferencing information.

Visit the [Allmaps website](https://allmaps.org) to learn more.

## Adding Thin Plate Spline transformations

I had worked with historical maps and their georeferencing, warping transformations and distortions before when <a href="projects/academia_ferraris" class="internal">studying the Ferraris map</a>, and I knew the struggle of getting access to scans in archives, manipulating huge image files and creating duplicates for every georeference attempt. So I was quite amazed when I learned about Allmaps in the fall of 2022. Not just by the system they had already built, but also by the approach they took: using open source standards and tools, building a system to share information without locking it up, and sharing their development process and learnings in the open through [Observable notebooks](https://observablehq.com/@allmaps?tab=notebooks) and on [GitHub](https://github.com/allmaps/allmaps). And they were just next door, in Amsterdam!

I noticed the current version only supported affine transformations. So I sent an email to Bert Spaan, who started the Allmaps project, explaining I had worked with old maps before and was wondering if more advanced transformations were planned. Turns out Thin Plate Spline warping was a feature they wanted to add in the near future, and they explained they would be happy to have someone on board with experience in these transformations and the mathematics they require. 

In the spring of 2023 I joined Bert Spaan, Jules Schoonman and the other contributors, and we are currently going through the different steps to add Thin Plate Spline warping (and other transformations!) to the Allmaps viewer. I made some Observable notebooks myself documenting this journey to share what I learned. We started by designing [a simple polygon triangulation algorithm](https://observablehq.com/d/199e169d58f0bf0d), then implemented [Thin Plate Spline interpolation in the Allmaps Transform module](https://observablehq.com/d/0b57d3b587542794) as a special case of Radial Basis function interpolation, and are now [putting it all together](https://observablehq.com/d/4c1a0f7c09dfcb49), adding UI components etc. I hope these notebooks can be useful to others.

This is my first time working with WebGL. I had heard about it for a long time but it looked so scary! I still only half-know what I'm doing, but standing on the shoulders of others -- and seeing how they just try and google stuff every time too -- really helps. It's also my first time with TypeScript, which I found very easy to get used too and very powerful to improve the code even before testing it. The project also uses Svelte, which i'm curious to learn more about (eventhough I have no ambition to become a front-end expert), and we're experimenting with some other frameworks for the database etc. 

But more then for the newest coding tools, I'm here for the maps and for the Maths: it's so nice to browse through [the latests maps being georeferenced](https://latest.allmaps.org/) and I feel at home when I get to work with triangles and matrices.

## Thoughts

I'm grateful I found a kind group of people working on a project that's about a commons (assets stored in public libraries), doesn't make people or institutions dependent on a new service by locking in their data (but keeps the data and the tool separate) and builds on existing, public standards (IIIF Manifests and Annotations).

There's also some open questions I have. One is when to use the newest coolest library, and when to stick with the old(er) approaches. WebGL, for example, is a central part of this project and it's a good thing this projet uses it. But when I hear about this new approach that will be the next big thing or that new framework that has a lot of pro's, while some of them can be useful, I feel they take a lot of mental energy to keep up with. But also, it often means we restrict what we build to newer browsers, which in turn stimulates the 'you should really update your computer every x years' consumer narrative -- one I don't support. The core of the georeferencing transformations code are a bunch of matrix inversions, whose algorithms have existed (and have been able to run on pc's) for decades now and there's no reason they should become unusable in a couple of years because some library is not supported anymore.

## Future

When I was working on the Ferraris map I wrote some code to study distortions in old maps. It was written in Matlab/Octave -- the language I was most comfortable with at the time and an approach that seemed to make sense working with (large) files and images on my laptop. With a webtool like Allmaps my hope is to bring that code over one day and make it more accessible for researchers everywhere!

We have many other ideas in mind to make historical maps easy to discover and play around with. Some will require a lot of effort to build and probably some financial sponsorship, others could be cooked up quickly once this or that thing is in place. We hope to keep building in the same open spirit, closer to our goal for a set of standards and tools that make *all maps* easily accessible.
