var mymap = L.map('mapid').setView([-2.5489, 118.0149], 5);

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en&key=AIzaSyD0U_Q9bCY4FvFayVUM2vxFrRzuChJkKtY', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(mymap);

mymap.on('click', function(e) {
    navigator.clipboard.writeText(`!guess ${e.latlng.lat.toFixed(5)} ${e.latlng.lng.toFixed(5)}`);

    let alertBox = document.createElement('div');
  alertBox.innerHTML = "<p>Koordinat telah di-copy.<br>Silahkan paste di Youtube livechat</p>";
  
  const size = mymap.getSize();
  const point = mymap.latLngToContainerPoint(e.latlng);
  
  alertBox.style.top = `${e.containerPoint.y}px`;
alertBox.style.left = `${e.containerPoint.x}px`;

if (e.containerPoint.y < size.y / 2) {
    alertBox.classList.add('alert', 'alert-top', 'show');
} else {
    alertBox.classList.add('alert', 'alert-top', 'show');
}

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.classList.remove('show');
    setTimeout(() => alertBox.remove(), 2000);
  }, 3000);
});
