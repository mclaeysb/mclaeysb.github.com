---
layout: project
categories: [collective]
date: 2024-03-01
title: Agora Questionnaire
tagline: Online tool for participation organisers and participants
organisation: Agora
link: http://questionnaire.agora.brussels
---

After five years of organising citizen assemblies and representing them in the Brussels regional parliament, the Brussels citizen initiative Agora decided not to take part in the next elections, but rather close of it's experiment with grace. At the inter-working group meeting the decision also was taken to 'leave a trace' and create some reference works that can help or inspire those who wish to set up or take part in similar participation projects.

One of the conceived outputs was an online tool capturing the lessons learned during these five years, and presenting them to two distinct audiences: citizens who received an invitation to participate in a citizen assembly helping them deciding whether to go or not, and organisations setting up a participatory process looking for quality guidance. For the latter audience, we set out not to produce yet another 'how to' document reiterating typical attention points that are well known in the field, but rather to focus on what we specifically learned during this experience and felt new for us as well.

Like every project at Agora, this was a real teamwork: the main work was done by Ada after reviewing the various feedback forms and interviewing some participants and facilitators as she selected lessons learned and wrote the main body of text, Françoise, François-Xavier and Sixtine performed the proof-reading, Betül created some illustrations, I was entrusted the creation the online tool and Johannes coordinated the development.

I made this website in Svelte, because it seemed like a good fit, because it's used in my other main project Allmaps as well and because it looks so cool! So this was my first full Svelte project. Overall it was a great experience. I started by going through the official tutorial and REPL examples and felt ready to get going after those - it's great to see how much effort was put into the onboarding experience! Svelte has great documentation and there rare lots of how-to blog posts to be found online. Many of its main features turned out to be useful for the tool we wanted to build: reactive components (obviously), nested routing and the wide choice in adapters (of which I used the adapter-static for static site generation).

Other tools I used were [Pico CSS](https://picocss.com/) as a light-weight CSS Framework (and alternative to Tailwind CSS which seems to be very popular right now), [micromark](https://github.com/micromark/micromark) to parse the markdown parts of the content which was stored in three yaml files, and my browser's 'Device mode' to simulate the viewing experience on smaller screens. The website had to work in different modes: white/dark, large/small screen and french/dutch so it took quite some time to check if everything looked ok.

The nicest thing was how Svelte's interactivity felt magical so often: it was so nice to find, again and again, how something that seemed like and advanced feature could be performed using standard Svelte features like subscribing to stores, passing props in components, executing functions on click, reactive statements, ... Even though there are many packages to be found for common website features, this pushed me to implement some functionality myself, like internationalisation via a store used during content research, and exporting as pdf via a dedicated page with `onMount(() => {window.print()})`. One feature I thought would be more straight-forward to create was to store information on the client side that's retained while the user closes the page and comes back later. Something like the infamous 'cookie', but with more storage and better privacy (e.g. processed in the client instead of the server). Maybe I though this would be a more common thing? It seemed hard to find at first, but ended up finding that this can be achieved using a classic store, updated (via `subscribe()`) and initialised with a '[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)' item.

This was a cool project. I hope it will be useful to some people as the journey of citizen participation continues.