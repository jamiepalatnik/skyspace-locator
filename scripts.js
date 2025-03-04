var map = L.map('map').setView([40.734132513933325, -73.98467225762525], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([40.734132513933325, -73.98467225762525]).addTo(map);
marker.bindPopup("<b><i>Leading</i></b><br>2023<br><br><a href='https://www.friendsskyspace.com/'>Friends Seminary</a>").openPopup();

var marker = L.marker([40.76695662055577, -73.91418457585772]).addTo(map);
marker.bindPopup("<b><i>Meeting</i></b><br>1986<br><br><a href='https://www.momaps1.org/en/programs/123-james-turrell'>MoMA PS1</a>").openPopup();