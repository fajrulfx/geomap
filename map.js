var mymap = L.map('mapid').setView([0, 0], 2);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFqcnVsZngiLCJhIjoiY2xtYnpmNTdlMTFsOTNwbnpjMTlidXNyNCJ9.qr4HjsgqFyimJdxesB24og", 
{
  maxZoom: 20,
  attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  tileSize: 512,
  zoomOffset: -1,
  id: 'mapbox/streets-v11'
}).addTo(mymap);

var alertBox = null;
var timeoutId = null;

mymap.on('click', function(e) {
  // Remove the previous alert box, if it exists
  if (alertBox) {
    clearTimeout(timeoutId);
    alertBox.classList.remove('show');
    setTimeout(() => alertBox.remove(), 500);
  }

  navigator.clipboard.writeText(`Lat: ${e.latlng.lat}, Lng: ${e.latlng.lng}`);
  alertBox = document.createElement('div');
  alertBox.innerHTML = "<p>The location is copied</p><p>Go to YouTube livechat</p>";

  const size = mymap.getSize();
  const point = mymap.latLngToContainerPoint(e.latlng);

  if (point.y < size.y / 2) {
    alertBox.style.top = `${point.y + 35}px`;
    alertBox.classList.add('alert', 'alert-top', 'show');
  } else {
    alertBox.style.top = `${point.y - 90}px`;
    alertBox.classList.add('alert', 'alert-bottom', 'show');
  }
  alertBox.style.left = `${point.x}px`;

  document.body.appendChild(alertBox);

  timeoutId = setTimeout(() => {
    alertBox.classList.remove('show');
    setTimeout(() => alertBox.remove(), 500);
  }, 5000);
});

// Event listeners to remove the alert box when clicking elsewhere on the map or the document
document.getElementById('mapid').addEventListener('click', function(e) {
  e.stopPropagation();
});

document.addEventListener('click', function(e) {
  if (alertBox) {
    clearTimeout(timeoutId);
    alertBox.classList.remove('show');
    setTimeout(() => alertBox.remove(), 500);
  }
});