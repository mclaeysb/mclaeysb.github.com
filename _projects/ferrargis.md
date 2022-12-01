---
layout: project
categories: maps
date: 2021-10-01
title: FerrarGIS
tagline: Using QGIS to apply a 1777 style to today's OpenStreetMap data.
organisation: Home
link: https://github.com/mclaeysb/FerrarGIS
---

<!-- before-effect-slider style -->
<style type="text/css">

    /*
    *
    * before-effect-slider.js | V 1.0
    *
    * Copyright (C) 2020 Amine Jafur
    *
    * https://github.com/aminejafur/before-effect-slider.js
    *
    */

    .before-effect-main-div { /* plugin main div */
        position: relative;
        overflow: hidden;
        width:100%;
        border-radius:5px;
    }

    .before-effect-main-div img { /* it's images */
        width: 100%;
        display:block;
        pointer-events: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .before-effect-resizable-div { /* resizable div*/
        position: absolute;
        top:0;
        left: 0;
        overflow: hidden;
    }

    .before-effect-line { /* Tha seperator line */
        position:absolute; 
        left:50%;
        top:0;
        bottom:0;
        /*width:4px;*/
        margin-left:-2px;
        background: var(--LineColor);
        Cursor: var(--Cursor);
    }

    .before-effect-line:after {  /* Line middle button */
        text-align: center;
        position: absolute;
        color:var(--IconColor);
        top: var(--IconPosT);
        right: var(--IconPosR);
        width: 56px;
        height: 56px;
        margin: -28px 0 0 -28px;
        transition: all 0.2s;
        content:var(--icon);
        background-image: linear-gradient(180deg, var(--buttonG1) 0%, var(--buttonG2) 100%);
        border: 1px solid var(--ButtonBorder);
        background-size:56px;
        border-radius: var(--ButtonRaduis);
        font-size: var(--IconSize);
        line-height: 52px;
        box-sizing: border-box;
    }

    .before-effect-line:hover:after { /* let's scale button on hover! */
        transform: scale(1.03);
    }

    .dragging:hover:after { /* it's dragging !!! */
        transform: scale(1.03) translateY(2px);
    }


    .before-effect-button { /* slider buttons */
        position: absolute;
        bottom: 0;
        background: #121212;
        color: #fff;
        pointer-events: none;
        border-radius: .2rem;
        padding: 2px 10px;
        margin: 1rem;
        font-size: 1em;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .before-effect-button-right { /* Tha before one! */
        right: 0;
    }

    .after-effect-button { /* Tha before one! */
        /*z-index: 9;*/
    }

    @media screen and (max-width: 1000px) { /* some responsive */
      .before-effect-line:after { 
        width: 28px; 
        height: 28px; 
        margin: -14px 0 0 -14px; 
        font-size: 12px; 
        line-height: 26px; 
      }
    }
</style>

<style>
    .compare {
        margin-bottom: 10px;
    }
</style>

## Context

In 2015, while I was working at the UGent Department of Geography, I was lucky enough to collaborate on a project around the 1777 *Ferraris map* - or more precisely the *'Carte de Cabinet' of the Austrian Netherlands by count Joseph de Ferraris*. The Ferraris map is the result of the first systematic, large scale mapping effort in Belgium and even Western Europe; an impressive undertaking that resulted in a map detailing all houses, roads and forests in the surveyed territory. It is still widely appreciated today for it's historical significance, archeological value and aesthetic qualities.

As a contributor to OpenStreetMap and user of modern GIS tools for desktop and browser, I had been dreaming for some time of applying the iconic style of the Ferraris map to today's geographic data, wondering: 

> What would it look like if count de Ferraris would have made his map today?

So in this project, I *strapped on a pair* and took the tools I know as far as I could with that goal in mind. Let me tell you how that went. But first, here's a peek at the result (drag the slider in the middle to compare):

<div id="compare_ferrargis_gent_a5_landscape"></div>

## Setup

After some exploration, I decided on a desktop oriented setup: I downloaded and stored the OpenStreetMap data of Belgium in a local Postgres database, loaded it in QGIS and did all the styling there, taking full advantage of QGIS's powerful symbology and label styling features.

## Styling

The Ferraris maps have a very recognisable style, but not every Ferraris map sheet looks the same. The three different copies that exist of this map (one is kept in the archives of Brussels, Amsterdam and Vienna respectively) as well as the long project time-span over which this map was produced, create quite some variability in the sheet styles. I selected the *Ghent* map sheet of the Brussels' copy as the main point of reference for this project. 

To make the QGIS style-sheet resemble the original Ferraris map as much as possible, I used carefully sampled colors and fill-images in the style definitions of the drawn objects. To obtain the right fill colors for things like buildings, grass and water polygons, I used a color picker tool to find the right colors on the old map. For more complex features like woodlands, marshes and heath that are drawn with beautiful textures and miniatures on the old map, I took a screenshot of such these drawings, used GIMP to clean up the images and make them seamlessly tileable, and then used them as the background images for the corresponding features.

To get as close as possible to the 1777 style, I used quite a few advanced QGIS features, including *draw effects*, drawing things as *merged feature*, adding some trees in a randomised way, styling polygons with gradient fills and adding a custom *speckle* layer on top of the map to give it an *old* finish. I found a suiting typeface called *Youngbae* which I used for the labels, and gave these a small tilt similar to what you get when you plot the old maps with their tilted north baring on top of a modern map.

## Result

I'm proud of the final result. It's not perfect, but I think it succeeds as a thorough exploration of recreating the old style with modern techniques and data.

There are some differences between my results and the 1777 map. For example, there are some polygon features I could have styled but didn't, either because I didn't find a corresponding image on the old map or because I didn't like the result. Such areas include rocky areas, shallows/fords and, most notably, pine forests. Also, the old map's place names were all in French. While I did add specific drawings for windmills, watermills and trees, the original map included many more drawings, for things such as gallows, battlefields, pillories and archery targets. I also didn't find a suitable way (yet) to reproduce the map's characteristic relief shading. Finally, the 1777 map didn't have some modern features like railroads and tramlines, for which I chose to invent a suitable style.

You can find out more details on how this map was made or how to re-use this style on this project's [GitHub page]({{page.link}}). If you have ideas on how to improve this map, or want to use it in a project or exhibition, feel free to contact me at <a href="mailto:manuel.claeys.b@gmail.com" class="email">manuel.claeys.b@gmail.com</a>!

# Showcase

Here are some more examples of the end result. I've added some notes here and there on things that caught my eye. I hope you enjoy these maps as much as I do!

<div id="compare_ferrargis_munte_a5_landscape" class="compare"></div>

Some of the old forests are still intact. The Ferraris map is widely used to study the forest extent in Belgium.

<div id="compare_ferrargis_mechelen_a5_landscape" class="compare"></div>

The city of Mechelen was the starting point for count de Ferraris and his team. The natural features still define the layout of the city today.

<div id="compare_ferrargis_oostende_a5_landscape" class="compare"></div>

While the coastal area has changed much, the street pattern in the city center is still exactly the same.

<div id="compare_ferrargis_namur_a5_landscape" class="compare"></div>

Next to the city's fortified citadel, notice how the railway was built over the old town's fortifications.

<div id="compare_ferrargis_brussels_a1_portrait" class="compare"></div>

The difference between the changes inside and outside of the pre-industrial city walls are striking!

<div id="compare_ferrargis_antwerpen_a1_portrait" class="compare"></div>

Notice how many hedges there were! Also, you can see how the city's harbour extensions were mostly built in the extensive marshlands along the river.

<div id="compare_ferrargis_brugge_a1_portrait" class="compare"></div>

Again, the old town hasn't changed much. Also notice the fortifications of Damme in the North-East of the map.

<div id="compare_ferrargis_gent_a1_portrait" class="compare"></div>

<img src="/img/compare_ferrargis_gent_a1_portrait_ferrargis_large.png"/>

Closing off where we started with this map of Ghent and its surroundings. I'm quite proud to report that an A1 print of this map won [first price](https://www.nobohan.be/2022/11/18/foss4g-be-2022/) at the 2022 FOSS4G-Be/SOTM conference during it's map competition -- which featured submissions as creative, quirky and diverse as the collection of geeky map enthousiasts participating at the conference.

<!-- before-effect-slider script -->
<script type="text/javascript">

    /*
    *
    * before-effect-slider.js | V 1.0
    *
    * Copyright (C) 2020 Amine Jafur
    *
    * https://github.com/aminejafur/before-effect-slider.js
    *
    */

    (function(root, factory){
        if(typeof define === 'function' && define.amd){
            define([], function(){
                return factory(root);
            });
        }else if(typeof exports === 'object'){
            module.exports = factory(root);
        }else{
            root.beforeEffectslider = factory(root);
        }
    })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function(root){

      // stay strict, stay clean!
      'use strict';
      
      // helpers
        const logError = message => console.log(`%c ${message} `, "color:red;font-weight:bold;");

        const createNode = element => document.createElement(element);
      
        const append = (parent, el) => parent.appendChild(el);
      
        const onMultiListener = (el, s, fn)  => {
          s.split(' ').forEach(e => el.addEventListener(e, fn, false));
        }
      
        const setAttributes = elem => {
            for (let i = 1; i < arguments.length; i+=2) {
                elem.setAttribute(arguments[i], arguments[i+1]);
            }
        }

      // feature test
      const supports = 'querySelectorAll' in document && 'addEventListener' in root;
      
      // our main function
      const beforeEffectslider = options => {

          // validate feature test
          if(!supports) return logError("beforeEffectslider is not supported on this browser");
          // validate passed data
          if(!!options && typeof options !== 'object') return logError("Option error, please check the documentation");
      
          // default params
          const defaults = {
            Selector: "#beforeEffectslider", // Element that the slider will be build in
            Vertical: false, // Vertical is false as default 
            BeforeImage: "https://raw.githubusercontent.com/aminejafur/before-effect-slider.js/master/img/before.jpg",  // Before Image
            BeforeAlt: "Before image",  // Before Image Alt
            AfterImage: "https://raw.githubusercontent.com/aminejafur/before-effect-slider.js/master/img/after.jpg", // After Image
            AftereAlt: "After image", // After Image Alt
            DragFrom:50, // Percent % of before Image
            MaxDrag: 0,  //Max drag from right or bottom if vertical
            MinDrag: 30, //Min drag from left or top if vertical
            DragIcon: '↔', //no html, only codes
            IconSize: '24', //Icon size
            IconColor:'#FFF', //Icon Color
            LineColor:'#282828', //Line size
            ButtonGradient:['#282828','#000000'], // Line Button gradient (keep same color for no gradient)
            ButtonBorder:'#000000', //Line Button Border Color
            ButtonRaduis:50, // Line Button Raduis
            Cursor:'ew-resize', // Cursor style on button hover, for more: https://developer.mozilla.org/fr/docs/Web/CSS/cursor
            Buttons:true, // Show before and after buttons ?
            ButtonsText:{ //After Before Buttons Texts
              before:'Before',
              after:'After'
            },
            Border:{ // Border properties
                    width:5, // 0 for no border
                    style:'solid',
                    color:'black'
                   },
            callbackBefore: () => {}, //Callback Before building slider
            callbackAfter: () => {} //Callback After building slider
          };
      
        // Merge user options with default ones
        if(!!options){
          if(!!options.Border){
            Object.assign(options.Border, Object.assign(defaults.Border, options.Border));
          }
          if(!!options.ButtonsText){
            Object.assign(options.ButtonsText, Object.assign(defaults.ButtonsText, options.ButtonsText));
          }
        } 

        Object.assign(defaults, options || {});

        //get mainElement
        const mainElement = document.querySelector(defaults.Selector);
        // store all elements for resize on windows Resize
        (root.beforeEffectsliderElements = root.beforeEffectsliderElements || []).push(mainElement);

        // does it exist?
        if(!!!mainElement){
            logError(`beforeEffectslider : Error cannot find ${defaults.Selector} element`);
            return false;
        }

        // elements
        let mainDiv = null , 
          beforeImage = null , 
          resizeDiv = null , 
          afterImage = null , 
          handler = null;

        //Classes
        let mainDivClass = '.before-effect-main-div',
            resizableDivClass = '.before-effect-resizable-div',
            lineClass = 'before-effect-line',
            pluginBeforeButton = 'before-effect-button',
            pluginLeftButton = 'after-effect-button',
            pluginRightButton = 'before-effect-button-right',
            dragginClass = 'dragging',
            resizingClass = 'resizable';

        // da work!
        const beforeEffect = {
              init: function() {
                      // call back before
                      defaults.callbackBefore();
                      /*
                      *
                      *   Create the UI
                      *
                      *
                      *   <div class="before-effect-main-div">
                      *   <img src="BeforeImage" alt="Before image">
                      *   <div class="before-effect-button before-effect-button-label">Before</div>
                      *       <div class="before-effect-resizable-div">
                      *       <div class="before-effect-button">After</div>
                      *          <img src="AfterImage" alt="After image">
                      *       </div>
                      *   <span class="before-effect-line"></span>
                      *   </div>
                      *
                      */
                      mainDiv = createNode("div");
                      mainDiv.classList.add('before-effect-main-div');
                      beforeImage = createNode("img");
                      beforeImage.src=defaults.BeforeImage;
                      beforeImage.alt=defaults.BeforeAlt;

                      // styling border
                      mainDiv.style.border = `${defaults.Border.width}px ${defaults.Border.style} ${defaults.Border.color} `;

                      append(mainDiv,beforeImage);

                      resizeDiv = createNode("div");
                      resizeDiv.classList.add('before-effect-resizable-div');

                      if(defaults.Buttons){

                      // After button and before buttons
                      let beforeButton = createNode("div");
                      beforeButton.classList.add(pluginBeforeButton);
                      beforeButton.classList.add(pluginRightButton);
                      beforeButton.innerHTML = defaults.ButtonsText.before

                      // appending to selected div
                      append(mainDiv,beforeButton); 
                      let afterButton = createNode("div");
                      afterButton.classList.add(pluginBeforeButton);
                      afterButton.classList.add(pluginLeftButton);
                      afterButton.innerHTML = defaults.ButtonsText.after

                      // appending buttons
                      append(resizeDiv,afterButton); 
                      } 

                      // is vertical ?
                      resizeDiv.style.width = defaults.Vertical ? '100%' : `${defaults.DragFrom}%`;
                      resizeDiv.style.height = defaults.Vertical ? `${defaults.DragFrom}%` : '100%';

                      afterImage = createNode("img");
                      afterImage.src=defaults.AfterImage;
                      afterImage.alt=defaults.AftereAlt;
                      append(resizeDiv,afterImage);
                      append(mainDiv,resizeDiv);
                    
                      handler = createNode("span");
                      handler.classList.add(lineClass);

                      // styling
                      handler.style.setProperty('--icon',`"${defaults.DragIcon}"`)
                      handler.style.setProperty('--LineColor',`${defaults.LineColor}`)
                      handler.style.setProperty('--buttonG1',`${defaults.ButtonGradient[0]}`)
                      handler.style.setProperty('--buttonG2',`${defaults.ButtonGradient[1]}`)
                      handler.style.setProperty('--ButtonBorder',`${defaults.ButtonBorder}`)
                      handler.style.setProperty('--ButtonRaduis',`${defaults.ButtonRaduis}%`)
                      handler.style.setProperty('--IconSize',`${defaults.IconSize}px`)
                      handler.style.setProperty('--IconColor',`${defaults.IconColor}`)
                      handler.style.setProperty('--Cursor',`${defaults.Cursor}`)
                      
                      // is vertical ?
                      handler.style.top = defaults.Vertical ? `${defaults.DragFrom}%` : '0';
                      handler.style.left = defaults.Vertical ? '0' : `${defaults.DragFrom}%`;
                      handler.style.width = defaults.Vertical ? '100%' : '4px';
                      handler.style.height = defaults.Vertical ? '4px' : '100%';
                      handler.style.setProperty('--IconPosT',defaults.Vertical ? '0' : '50%')
                      handler.style.setProperty('--IconPosR',defaults.Vertical ? '50%' : '-27')

                      append(mainDiv,handler);
                    
                      // appending to selected div
                      append(mainElement,mainDiv);

                      //adjust width
                      this.adjustwidth();



                      //On resize function, fix focus on last only
                      window.onresize = function(){
                        this.adjustwidth()
                      }.bind(this)

                      // call back after
                      defaults.callbackAfter();

                      // call draggingStarted on drag events
                      this.draggingStarted(handler, resizeDiv, mainDiv);
              },
              adjustwidth: function() {
                    [...beforeEffectsliderElements].forEach(el => {
                      mainDiv = el.querySelector(mainDivClass);
                      // Adjust the slider
                      let width = mainDiv.getBoundingClientRect().width+'px';

                      mainDiv.querySelector(resizableDivClass).querySelector('img').style.width = width;
                      mainDiv.querySelector('img').style.width = width;
                    })
              },
              draggingStarted: function(dragdHandler, resizableImage, parentNode) {
                  
                  // Initialize the dragging event on mousedown.
                  onMultiListener(dragdHandler, 'mousedown touchstart', e => {
              
                    dragdHandler.classList.add(dragginClass);
                    resizableImage.classList.add(resizingClass);
                    
                    // Check if its a mouse or touch event and get starting cursor position
                    let CursorStartPos = defaults.Vertical 
                          ? (e.pageY) 
                            ? e.pageY 
                            : e.originalEvent.touches[0].pageY 
                          : (e.pageX) 
                            ? e.pageX 
                            : e.originalEvent.touches[0].pageX;

                    // Get positions
                    let parentNodeBorder = parseInt(parentNode.style.borderWidth.replace(/px|%|/g,  (x) => '')),
                        dragOffset_h_w = defaults.Vertical ? dragdHandler.offsetHeight : dragdHandler.offsetWidth,
                        dragOffset_t_l = defaults.Vertical ? dragdHandler.offsetTop : dragdHandler.offsetLeft,
                        calcPos = dragOffset_t_l + dragOffset_h_w + parentNodeBorder - CursorStartPos,
                        parentNodeOffset = defaults.Vertical ? parentNode.offsetHeight : parentNode.offsetWidth;

                    // Set limits
                    let minDrag = defaults.MinDrag;
                    let MaxDrag = parentNodeOffset - dragOffset_h_w - defaults.MaxDrag;
                    
                    // Dragging distance on mousemove.
                    onMultiListener(parentNode, 'mousemove touchmove', e => {

                      // Check if its a mouse or touch event and get current cursor position
                      let cursorCurrentPos = defaults.Vertical 
                          ? (e.pageY) 
                            ? e.pageY 
                            : e.originalEvent.touches[0].pageY 
                          : (e.pageX) 
                            ? e.pageX 
                            : e.originalEvent.touches[0].pageX;
                
                      let leftOrTopValue = cursorCurrentPos + calcPos - dragOffset_h_w;
                      
                      // Prevent going off limits
                      if ( leftOrTopValue < minDrag) {
                        leftOrTopValue = minDrag;
                      } else if (leftOrTopValue > MaxDrag) {
                        leftOrTopValue = MaxDrag;
                      }
                      
                      // handle's value to divs width.
                      let currentDragPosition = (leftOrTopValue + dragOffset_h_w/2)*100/parentNodeOffset+'%';

                      // Changing to new values
                      if(!!document.querySelector(`.${dragginClass}`)){ 
                        if(defaults.Vertical){
                          document.querySelector(`.${dragginClass}`).style.top = currentDragPosition;
                          resizableImage.style.height = currentDragPosition;
                        }else{
                          document.querySelector(`.${dragginClass}`).style.left = currentDragPosition;
                          resizableImage.style.width = currentDragPosition;
                        }
                    }
                
                    });
              
                    onMultiListener(parentNode, 'mouseup touchend touchcancel', e => {
                      dragdHandler.classList.remove(dragginClass);
                      resizableImage.classList.remove(resizingClass);
                    });
      
                    e.preventDefault();
                  });
                    onMultiListener(root, 'mouseup', e => {
                      dragdHandler.classList.remove(dragginClass);
                      resizableImage.classList.remove(resizingClass);
                    });
              },
        }

        // call init
        return beforeEffect.init();
        }

        return beforeEffectslider;

    }); // End
</script>

<!-- before-effect-slider div specifications -->
<script type="text/javascript">

    var pictureList = [
        {'name': 'gent_a5_landscape', 'city': 'Gent'},
        {'name': 'munte_a5_landscape', 'city': 'Munte'},
        {'name': 'mechelen_a5_landscape', 'city': 'Mechelen'},
        {'name': 'oostende_a5_landscape', 'city': 'Oostende'},
        {'name': 'namur_a5_landscape', 'city': 'Namur'},
        {'name': 'brussels_a1_portrait', 'city': 'Brussels'},
        {'name': 'antwerpen_a1_portrait', 'city': 'Antwerpen'},
        {'name': 'brugge_a1_portrait', 'city': 'Brugge'}
    ]

    for (const picture of pictureList) { 
        beforeEffectslider({
            Selector: "#compare_ferrargis_" + picture.name, // Element that the slider will be build in
            BeforeImage: "/img/compare_ferrargis_" + picture.name + "_1777.png", // Before Image
            BeforeAlt: "Ferraris 1777", // Before Image Alt
            AfterImage: "/img/compare_ferrargis_" + picture.name + "_ferrargis.png", // After Image
            AftereAlt: "FerrarGIS", // After Image Alt
            DragFrom: 50, // Percent % of before Image
            IconSize: 20, //Icon size
            IconColor: 'white', //Icon Color
            LineColor: 'black', //Line Color
            ButtonBorder: 'black', //Line Button Border Color
            ButtonRaduis: 5, // Line Button Raduis
            Cursor: 'grab', // Cursor style on button hover, for more: https://developer.mozilla.org/fr/docs/Web/CSS/cursor
            Buttons: true, // Show before and after buttons ?
            ButtonsText: { //After Before Buttons Texts
                before: picture.city + " (Ferraris 1777)",
                after: picture.city + " (FerrarGIS 2021)"
            },
            Border: { // Border properties
                color: 'black',
                width: 1, // 0 for no border
                style: 'solid'
            }
        });
    }
</script>