---
layout: project
categories: mapping
date: 2018-02-01
title: Artisanal mining in DRC
tagline: Making data collected at 2000+ artisanal mining sites explorable for conflict researchers.
organisation: IPIS
image: ipis_cod_v5.gif
link: http://www.ipisresearch.be/mapping/webmapping/drcongo/v6/
---
This map was designed to allow conflict researchers to explore the large amount of data IPIS collects has collected at 2000+ artisanal mining sites since 2009. In eastern DRC, artisanal mining is closely entangled with the regional conflict dynamics, with armed groups controling and mining sites and asking a taxation is return for their 'protection', or in worse cases pillaging sites or violating human rights (forced labour, ...). To understand these dynamics, IPIS sent local enqueteurs to these sites, where they talk informally to miners and complete questionnairs ansering various questions on the sites minerals (kind, production, price, mercury usage, final destination), armed actors (kind, taxation or other illegal activities) and state services. This data is cleaned, checked and entered in a database. This maps makes the explorable in different ways: on a site-by-site level through pop-up panels, in a regional overview through filters, but also by connection specific data columns to visualise things link shipping routes and armed actors zones of influence.

This map is made using Mapbox GL JS and some vanilla JS on the front end, and uses PostgreSQL, PHP and GeoServer in the backend.

![alt text](/img/ipis_cod_v5_fancy.gif "Test") ![alt text](/img/ipis_cod_v5_discover.gif) ![alt text](/img/ipis_cod_v5_roadblocks.gif)