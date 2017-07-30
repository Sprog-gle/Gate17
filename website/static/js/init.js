var tidalObjects = [];
var tidalact = false;
var rapidObjects = [];
var rapidact = false;
var swampObjects = [];
var swampact = false;
var residentialObjects = [];
var residentialact = false;
var infocentersObjects = [];
var infocentersact = false;
var schoolsObjects = [];
var schoolsact = false;
var lostObjects = [] ;
var lostact = false;

var map ;
var group
(function($) {
  $(function() {
    var platform = new H.service.Platform({
      app_id: "BtRgpFTmtEuUrzEKGY7W",
      app_code: "REnj-MMTZHpj29yC9JeFnw",
      useCIT: true,
      useHTTPS: true
    });

    $("select").material_select();

    $("#severity").autocomplete({
      data: {
        "mild": null,
        "moderate": null,
        "severe dementia": null
      },
      limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
      onAutocomplete: function(val) {
        // Callback function when value is autcompleted.
      },
      minLength: 1 // The minimum length of the input for the autocomplete to start. Default: 1.
    });

    $(".datepicker").pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: "Today",
      clear: "Clear",
      close: "Ok",
      closeOnSelect: false // Close upon selecting a date,
    });

    $("#lost-friend").click(function() {
      $("#lost-options").addClass("hide");
      $("#lost-friend-form").removeClass("hide");
    });
    $("#form-submit").click(function() {
      $("#lost-friend-form").addClass("hide");
      //$("#map-possible-location1").removeClass("hide");
      //$("#home").addClass("hide");
      // $("#lost").modal("close");
      $("#map1").removeClass("hide");

      var defaultLayers = platform.createDefaultLayers();
      var map1 = new H.Map(
        document.getElementById("map1"),
        defaultLayers.satellite.map
      );

      function moveMapToNZ(map) {
        map.setCenter({
          lat: -41.29798905219789,
          lng: 174.18283828125004
        });
        map.setZoom(6);
      }

      behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map1));

      // Create the default UI components
      ui = H.ui.UI.createDefault(map1, defaultLayers);
      map1.setCenter({
          lat: -41.29798905219789,
          lng: 174.18283828125004
      });
      map1.setZoom(8);
      map1.addEventListener('tap', (evt) => console.log(evt.current.pointer));
      //moveMapToNZ(map1);
    });

    $("#lostuser").click(function() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log(
            position.coords.latitude + " : " + position.coords.longitude
          );
        });
      } else {
      }
    });
    $("#rapidaction").click(function() {
      if (rapidact) {
        map.removeObjects(rapidObjects);
        rapidact = false;
      } else {
        map.addObjects(rapidObjects);
        rapidact = true;
      }
    });
    $("#tidalaction").click(function() {
      if (tidalact) {
        map.removeObjects(tidalObjects);
        tidalact = false;
      } else {
        map.addObjects(tidalObjects);
        tidalact = true;
      }
    });
    $("#residentialaction").click(function() {
      if (residentialact) {
        map.removeObjects(residentialObjects);
        residentialact = false;
      } else {
        map.addObjects(residentialObjects);
        residentialact = true;
      }
    });
    $("#swampaction").click(function() {
      if (swampact) {
        map.removeObjects(swampObjects);
        swampact = false;
      } else {
        map.addObjects(swampObjects);
        swampact = true;
      }
    });
    $("#infocenteraction").click(function() {
      if (infocentersact) {
        map.removeObjects(infocentersObjects);
        infocentersact = false;
      } else {
        map.addObjects(infocentersObjects);
        infocentersact = true;
      }
    });
    $("#schoolaction").click(function() {
      if (schoolsact) {
        map.removeObjects(schoolsObjects);
        schoolsact = false;
      } else {
        map.addObjects(schoolsObjects);
        schoolsact = true;
      }
    });
        $("#lostaction").click(function() {

            var lastSeenList = [] ;
            for(i in lostObjects){
                    p = lostObjects[i]
                    lastSeenList.push(p.lastSeenMap)
             }
            console.log(lastSeenList) ;
            if (lostact) {
                map.removeObjects(lastSeenList);
                lostact = false;
            } else {
                 map.addObjects(lastSeenList);
                lostact = true;
            }
        });


    $(".button-collapse").sideNav();
    $(".modal").modal();
    $(".item-r").click(function() {
      $("#lost").modal("open");
    });
    $(".item-l").click(function() {
      $("#home").addClass("hide");
      $("#map").removeClass("hide");

      function moveMapToNZ(map) {
        map.setCenter({
          lat: -41.29798905219789,
          lng: 174.18283828125004
        });
        map.setZoom(6);
      }

      var defaultLayers = platform.createDefaultLayers();
      map = new H.Map(
        document.getElementById("map"),
        defaultLayers.satellite.map
      );

      behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // Create the default UI components
      ui = H.ui.UI.createDefault(map, defaultLayers);
      moveMapToNZ(map);
            group = new H.map.Group();
            map.addObject(group);

              group.addEventListener('tap', function (evt) {
                    // event target is the marker itself, group is a parent event target
                    // for all objects that it contains
                    var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
                      // read custom data
                      content: evt.target.getData()
                    });
                    // show info bubble
                    ui.addBubble(bubble);
                  }, false);

      $.getJSON("/swamps", function(data) {
        var y;
        for (x in data.swamps) {
          var points = data.swamps[x][Object.keys(data.swamps[x])[0]];
          var strip = new H.geo.Strip();
          points.forEach(function(point) {
            strip.pushPoint(point);
          });
          var polyline = new H.map.Polyline(strip, {
            style: {
              lineWidth: 5,
              strokeColor: "black"
            }
          });
          swampObjects.push(polyline);
        }
        for (x in data.residentials) {
          var points =
            data.residentials[x][Object.keys(data.residentials[x])[0]];
          console.log(points);
          var strip = new H.geo.Strip();
          points.forEach(function(point) {
            strip.pushPoint(point);
          });
          var polyline = new H.map.Polyline(strip, {
            style: {
              lineWidth: 5,
              strokeColor: "red"
            }
          });
          residentialObjects.push(polyline);
        }
        for (x in data.rapids) {
          var points = data.rapids[x][Object.keys(data.rapids[x])[0]];
          console.log(points);
          var strip = new H.geo.Strip();
          points.forEach(function(point) {
            strip.pushPoint(point);
          });
          var polyline = new H.map.Polyline(strip, {
            style: {
              lineWidth: 5,
              strokeColor: "blue"
            }
          });
          rapidObjects.push(polyline);
        }
      });

      $.getJSON("/tidal", function(data) {
        for (x in data.tidals) {
          var circle = new H.map.Circle(data.tidals[x], 800, {
            style: {
              fillColor: "yellow",
              strokeColor: "orange"
            }
          });
          tidalObjects.push(circle);
        }
      });

      $.getJSON("/infocenters", function(data) {
        for (x in data) {
          var circle = new H.map.Circle(data[x], 800, {
            style: {
              fillColor: "white",
              strokeColor: "orange"
            }
          });
          infocentersObjects.push(circle);
        }
      });

     $.getJSON("/lost", function(data) {
                for (x in data.lost) {
                    var p =  data.lost[x];
                    var marker = new H.map.Marker(p.lastSeenPlace);
                    marker.setData('<div>' +  p.name + '</div>');
                    p.lastSeenMap = marker ;
                    lostObjects.push(p);
                  }
            });

      $.getJSON("/schools", function(data) {
        for (x in data) {
          var circle = new H.map.Circle(data[x], 800, {
            style: {
              fillColor: "red",
              strokeColor: "white"
            }
          });
          schoolsObjects.push(circle);
        }
      });
    });
    $(".item-r").click(function() {});
  }); // end of document ready
})(jQuery); // end of jQuery name space
