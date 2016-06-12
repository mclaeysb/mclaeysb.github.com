var buffer = require('../turf-buffer')

var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myTrace = new L.GeoJSON.AJAX('myTrace.geojson');
var myBuffer = buffer(myTrace);
myBuffer.addTo(map);
