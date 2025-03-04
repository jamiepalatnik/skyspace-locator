var map = L.map('map').setView([40.734132513933325, -73.98467225762525], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([40.734132513933325, -73.98467225762525]).addTo(map);
marker.bindPopup("<b><i>Leading</i></b><br>2023<br><br>Friends Seminary").openPopup();
