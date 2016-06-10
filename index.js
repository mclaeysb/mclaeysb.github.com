var map = L.map('map').setView([51, 3.5], 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myStyle = {
    "color": "#cec4bc", // medium? brown
    "weight": 1,  // stroke weight in pixels
    "opacity": 0.65
};

var geojsonLayer = new L.GeoJSON.AJAX('myTrace.geojson', {onEachFeature: popUp}, {style: myStyle});
geojsonLayer.addTo(map);
