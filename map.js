var mymap = L.map('mapid').setView([0, 0], 2);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFqcnVsZngiLCJhIjoiY2xtYnpmNTdlMTFsOTNwbnpjMTlidXNyNCJ9.qr4HjsgqFyimJdxesB24og", 
{
  maxZoom: 20,
  attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  tileSize: 1024,
  zoomOffset: -2,
  id: 'mapbox/streets-v11'
}).addTo(mymap);

mymap.on('click', function(e) {
  navigator.clipboard.writeText(`!guess ${e.latlng.lat} ${e.latlng.lng}`);
  let alertBox = document.createElement('div');
  alertBox.innerHTML = "<p>Koordinat telah di-copy.<br>Silahkan paste di Youtube livechat</p>";
  
  const size = mymap.getSize();
  const point = mymap.latLngToContainerPoint(e.latlng);
  
  if(point.y < size.y / 2) {
    alertBox.style.top = `${point.y + 35}px`;
    alertBox.classList.add('alert', 'alert-top', 'show');
  } else {
    alertBox.style.top = `${point.y - 90}px`;
    alertBox.classList.add('alert', 'alert-bottom', 'show');
  }
  alertBox.style.left = `${point.x}px`;

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.classList.remove('show');
    setTimeout(() => alertBox.remove(), 2000);
  }, 3000);
});