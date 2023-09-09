var mymap = L.map('mapid').setView([0, 0], 2);

L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=GgRZGCIPl5FvjON2sSKD", {
  maxZoom: 20,
}).addTo(mymap);

mymap.on('click', function(e) {
    navigator.clipboard.writeText(`Lat: ${e.latlng.lat}, Lng: ${e.latlng.lng}`);
    let alertBox = L.control();
    alertBox.onAdd = function () {
        this._div = L.DomUtil.create('div', 'alert');
        this.update();
        return this._div;
    };
    alertBox.update = function () {
        this._div.innerHTML = "Copied Latitude and Longitude to Clipboard";
        setTimeout(() => {
            this._div.parentNode.removeChild(this._div);
          }, 3000);
    };
    alertBox.addTo(mymap);
});
