var mymap = L.map('mapid').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(mymap);

mymap.on('click', function(e) {
    navigator.clipboard.writeText(`Lat: ${e.latlng.lat}, Lng: ${e.latlng.lng}`);
    alert("Copied Latitude and Longitude to Clipboard");
});
