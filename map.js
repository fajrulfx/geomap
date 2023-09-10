var mymap = L.map('mapid').setView([-2.5489, 118.0149], 4);
var markerIcon = L.icon({
    iconUrl: 'marker.png',
    iconSize: [40, 40], // adjust the size according to your marker icon image
    iconAnchor: [20, 40] // adjust the anchor point according to your marker icon image
  });
  var marker;
var marker;

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en&key=AIzaSyD0U_Q9bCY4FvFayVUM2vxFrRzuChJkKtY', {
    minZoom: 2,
    maxZoom: 21,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(mymap);

mymap.on('click', function(e) {
    if (marker) {
        mymap.removeLayer(marker);
      }
    navigator.clipboard.writeText(`!guess ${e.latlng.lat.toFixed(5)} ${e.latlng.lng.toFixed(5)}`);

    marker = L.marker(e.latlng, { icon: markerIcon }).addTo(mymap);
    
    var popupOffset = L.point(0, -25); // Adjust the Y offset to position the popup above the marker
  var popupText = `
    Lat: ${e.latlng.lat.toFixed(5)} Long: ${e.latlng.lng.toFixed(5)}<br><br>
    <span style="font-weight: bold;">Koordinat telah di-copy, silahkan<br>
    paste di Youtube livechat</span>
  `;
  marker.bindPopup(popupText, { offset: popupOffset, className: 'custom-popup' }).openPopup();
});
