var map, pinInfobox;

$(document).ready(function () {
    $('.list a').on('click', listClickHandler);
    renderMap();
});

function renderMap() {
    var geoLocationProvider;
    var options = { credentials: "AqN5QjT9DRov14hb6Y2KP2LwFZEF5g5DHd1tEB8ihKEeZbkxYZyGd-YGwJFtgD9A", zoom: 6, center: new Microsoft.Maps.Location(55.709370, 12.585032), mapTypeId: Microsoft.Maps.MapTypeId.road, enableClickableLogo: false, enableSearchLogo: false };

    map = new Microsoft.Maps.Map(document.getElementById("map_bing"), options);

    geoLocationProvider = new Microsoft.Maps.GeoLocationProvider(map);
    geoLocationProvider.getCurrentPosition();

    Microsoft.Maps.Events.addHandler(map, 'click', onMapClickHandler);
}

function onMapClickHandler(e) {
    displayLatLong(e);
}

function listClickHandler(e) {
    var $target = $(e.target);
    var id = $target.attr('id');
    var data = JSON.parse($target.attr('data-coords'));
    var obj = { latitude: Number(data.latitude), longitude: Number(data.longitude), zoom: Number(data.zoom), name: $target.text() };
    clearAllPins();
    gotoLatLong(obj);
    addPin(obj);
    return false;
}

function gotoLatLong(o) {
    map.setView({ center: new Microsoft.Maps.Location(o.latitude, o.longitude), zoom: o.zoom });
}

function displayLatLong(e) {
    if (e.targetType == "map") {
        var point = new Microsoft.Maps.Point(e.getX(), e.getY());
        var loc = e.target.tryPixelToLocation(point);
        map.setView({ center: new Microsoft.Maps.Location(loc.latitude, loc.longitude) });
    }
}

function clearAllPins() {
    map.entities.clear();
}

function addPin(o) {
    var pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(o.latitude, o.longitude));
    pinInfobox = new Microsoft.Maps.Infobox(pin.getLocation(), { title: o.name, description: 'This pushpin is located at (' + o.latitude + ', ' + o.longitude + ').', offset: new Microsoft.Maps.Point(0, 15) });
    map.entities.push(pin);
    map.entities.push(pinInfobox);
}