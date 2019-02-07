---
layout: project
categories: [maps, science]
date: 2015-01-01
title: Analysing distortion in old maps
tagline: A technique from map projection analysis I developed to study distortion in historical maps
organisation: UGent Department of Geography
link: https://github.com/mclaeysb/distortionAnalysis
---
Old, historical maps can be inaccurate for many reasons (primitive techniques, surveying errors, mixed inputs, conservation, etc). A distortion represents a loss in geographic information, but, by its specific origin, can also yield new historical information.

At the Department of Geography, we were presented with the specific case of the 1777 'Carte de Cabinet' of the Austrian Netherlands by count de Ferraris. It has many curious distortions and was georeferenced in high detail as commissioned by the various Belgian regional governments. To visualise the structure and uncover the patterns of these distortions, I enveloped a new technique called 'Differential Distortion Analysis', which ports approaches from the study of map projection distortions to the case of historic maps. It uses a collection of ground control points to build an interpolation and compute distortion metrics on every place on the map. 

We were then able to put the resulting distortion patterns in their historic context by correlating them with the historic documents explaining the course of the 18th century mapping campaign.

The code of this technique and scientific paper explaining its foundations are freely available online. The main code is written in Matlab/Octave and was processed using GDAL and QGIS.