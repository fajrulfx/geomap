mapboxgl.accessToken = 'pk.eyJ1IjoiZmFqcnVsZngiLCJhIjoiY2xtYnpmNTdlMTFsOTNwbnpjMTlidXNyNCJ9.qr4HjsgqFyimJdxesB24og';

var map = new mapboxgl.Map({
    container: 'mapid',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [118.0149, -2.5489], // Indonesia coordinates
    zoom: 4, // Zoom level for Indonesia
    attributionControl: false
  });
  
  map.addControl(new mapboxgl.NavigationControl());

  map.on('load', function() {
    var layers = map.getStyle().layers;

    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            map.setLayoutProperty(layers[i].id, 'text-field', [
                'format',
                ['get', 'name_en'],
                { 'font-scale': 1.2 }, // change these scale factors according to your preference
            ]);
        }
    }
});

  map.on('click', function(e) {
    navigator.clipboard.writeText(`!guess ${e.lngLat.lat.toFixed(5)} ${e.lngLat.lng.toFixed(5)}`);
    let alertBox = document.createElement('div');
    alertBox.innerHTML = "<p>Koordinat telah di-copy.<br>Silahkan paste di Youtube livechat</p>";
    
    const size = map.getContainer().getBoundingClientRect();
    const point = map.project(e.lngLat);
  
    if (point.y < size.height / 2) {
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