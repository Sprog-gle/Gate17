var platform = new H.service.Platform({
  app_id: 'BtRgpFTmtEuUrzEKGY7W',
  app_code: 'REnj-MMTZHpj29yC9JeFnw',
  useCIT: true,
  useHTTPS: true
});

function moveMapToNZ(map){
  map.setCenter({lat:-41.29798905219789, lng:174.18283828125004});
  map.setZoom(6);
}

var defaultLayers = platform.createDefaultLayers();
var map = new H.Map(document.getElementById('map'),defaultLayers.satellite.map);
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);
moveMapToNZ(map);
