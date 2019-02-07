---
layout: project
categories: [maps, science, collective]
date: 2015-09-01
title: Cylindrical Projections and Projection Optimisation
tagline: A Jupyter Notebook for interactive teaching and creative coding
organisation: UGent Department of Geography
link: https://github.com/mclaeysb/Map-projection-optimisation
---
While teaching the course 'Map Projections and Coordinate Systems' as a teaching assistant for professor Frank Canters, I developed an interactive Jupyter notebook for a session on Cylindrical Projections and Projection Optimisation.

Notebooks are a new approach for sharing scientific work and are part of the Open Science movement. In stead of asking the reader to jump between a written paper and some data or code that has to be opened and followed along elsewhere, these documents combine narrative text, live data, executable code and interactive visualisations into one artefact. They are created in an open-source web application and are easily shared, which facilitates reproducibility, peer review and an open approach to the scientific method. They can also be exported and used as live webpage, a presentation or a PDF.

For this session, students were asked to explore cylindrical map projections and subject them to various projection optimisation approaches. One way to optimise map projections is to tweak the projection parameters in order to minimise the average local distortion in the concerned area. When varying the projection parameters, the average distortion changes. In this notebook, the students are asked to identify a parameter choice with minimal distortion.  

To achieve this, the projection's scale factors along meridians and parallels as well as a local distortion measure are expressed as Python functions. Then, the average distortion is computed by cleverly averaging over the different latitudes. iPython interactive widgets allow students to see the effect of different parameter choices and try to find an optimal choice. The notebook also explores minimising distortion in specific areas - in casu over the earth's landmass - and investigates whether O.M. Miller's proposed coefficient values for his namesake projection are any good. Finally, at the end of the notebook, the students are asked to complete an exercises, for which they can copy code from earlier parts, tweak it, test it and execute it in the same interactive document.