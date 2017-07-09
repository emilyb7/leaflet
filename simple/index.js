var zoom = 13;
var lat = 51.5;
var lon = 0;

var map = L.map('mapid').setView([lat, lon], zoom);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lon]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.<br><img src="http://kindersay.com/files/images/sheep.png" height="20px">')

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
