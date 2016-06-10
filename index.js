var map = L.map('map').setView([51, 3.5], 5);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var geojsonLayer = new L.GeoJSON.AJAX('myTrace.geojson');
geojsonLayer.addTo(map);
