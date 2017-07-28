var platform = new H.service.Platform({
  app_id: 'BtRgpFTmtEuUrzEKGY7W',
  app_code: 'REnj-MMTZHpj29yC9JeFnw',
  useCIT: true,
  useHTTPS: true
});

function moveMapToBerlin(map){
  map.setCenter({lat:-40.9006, lng:174.8860});
  map.setZoom(4);
}

var defaultLayers = platform.createDefaultLayers();
var map = new H.Map(document.getElementById('map'),defaultLayers.satellite.map);
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);
moveMapToBerlin(map);
