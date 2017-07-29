(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('.modal').modal();
        $(".item-l").click(function() {
            $("#home").addClass("hide");
            $("#map").removeClass("hide");
            var platform = new H.service.Platform({
                app_id: 'BtRgpFTmtEuUrzEKGY7W',
                app_code: 'REnj-MMTZHpj29yC9JeFnw',
                useCIT: true,
                useHTTPS: true
            });

            function moveMapToNZ(map) {
                map.setCenter({
                    lat: -41.29798905219789,
                    lng: 174.18283828125004
                });
                map.setZoom(6);
            }

            var defaultLayers = platform.createDefaultLayers();
            var map = new H.Map(document.getElementById('map'), defaultLayers.satellite.map);
            var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

            // Create the default UI components
            var ui = H.ui.UI.createDefault(map, defaultLayers);
            moveMapToNZ(map);
            // $.getJSON("/swamps", function(data) {
            //     var y;
            //     for (x in data.swamps) {
            //         var points = data.swamps[x][Object.keys(data.swamps[x])[0]];
            //         var strip = new H.geo.Strip();
            //         points.forEach(function(point) {
            //             strip.pushPoint(point);
            //         });
            //         var polyline = new H.map.Polyline(strip, {
            //             style: {
            //                 lineWidth: 5,
            //                 strokeColor: 'black'
            //             }
            //         });
            //         map.addObject(polyline);
            //     }
            //     for (x in data.residentials) {
            //         var points = data.residentials[x][Object.keys(data.residentials[x])[0]];
            //         console.log(points);
            //         var strip = new H.geo.Strip();
            //         points.forEach(function(point) {
            //             strip.pushPoint(point);
            //         });
            //         var polyline = new H.map.Polyline(strip, {
            //             style: {
            //                 lineWidth: 5,
            //                 strokeColor: 'red'
            //             }
            //         });
            //         map.addObject(polyline);
            //     }
            //     for (x in data.rapids) {
            //         var points = data.rapids[x][Object.keys(data.rapids[x])[0]];
            //         console.log(points);
            //         var strip = new H.geo.Strip();
            //         points.forEach(function(point) {
            //             strip.pushPoint(point);
            //         });
            //         var polyline = new H.map.Polyline(strip, {
            //             style: {
            //                 lineWidth: 5,
            //                 strokeColor: 'blue'
            //             }
            //         });
            //         map.addObject(polyline);
            //     }
            // });
            $.getJSON("/tidal", function(data) {
                for (x in data.tidals) {
                  console.log(data.tidals[x]);
                    var circle = new H.map.Circle(data.tidals[x], 800, {style: {fillColor: "yellow", strokeColor: "orange"}});

                    // Add the circle to the map:
                    map.addObject(circle);
                }
            });
        });
        $(".item-r").click(function() {

        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
