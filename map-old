var mymap = L.map('mapid').setView([0, 0], 2);


L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=GgRZGCIPl5FvjON2sSKD", {
  maxZoom: 20,
}).addTo(mymap);

mymap.on('click', function(e) {
  navigator.clipboard.writeText(`Lat: ${e.latlng.lat}, Lng: ${e.latlng.lng}`);
  let alertBox = document.createElement('div');
  alertBox.innerHTML = "<p>Copied Latitude and Longitude to Clipboard</p>";
  alertBox.classList.add('alert', 'show');
  document.body.appendChild(alertBox);
  setTimeout(() => {
      alertBox.classList.remove('show');
      setTimeout(() => {
          document.body.removeChild(alertBox);
      }, 500);
  }, 3000);
});