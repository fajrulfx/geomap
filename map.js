mapboxgl.accessToken = 'pk.eyJ1IjoiZmFqcnVsZngiLCJhIjoiY2xtYnpmNTdlMTFsOTNwbnpjMTlidXNyNCJ9.qr4HjsgqFyimJdxesB24og';

var map = new mapboxgl.Map({
    container: 'mapid',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [118.0149, -2.5489], // Indonesia coordinates
    zoom: 4, // Zoom level for Indonesia
    attributionControl: false,
  });
  
  map.addControl(new mapboxgl.NavigationControl());
  // disable map rotation using right click + drag
map.dragRotate.disable();
 
// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

  map.on('load', function() {
    var layers = map.getStyle().layers;

    // Check if user is on a mobile device
    var isMobile = window.innerWidth <= 900;

    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            map.setLayoutProperty(layers[i].id, 'text-field', [
                'format',
                ['get', 'name_en'],
                { 'font-scale': isMobile ? 2.2 : 1.3 }, // if mobile, font-scale is 2.0, else 1.2
            ]);
        }
    }
});

map.on('click', function (e) {
    navigator.clipboard.writeText(`!guess ${e.lngLat.lat.toFixed(5)} ${e.lngLat.lng.toFixed(5)}`);
  
    let alertBox = document.createElement('div');
    alertBox.innerHTML = "<p>Koordinat telah di-copy.<br>Silahkan paste di Youtube livechat</p>";
    alertBox.classList.add('alert', 'alert-top', 'show', 'slide-up');
  
    document.body.appendChild(alertBox);
  
    setTimeout(() => {
      alertBox.classList.remove('show', 'slide-up');
      setTimeout(() => alertBox.remove(), 2000);
    }, 3000);
  });