import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./map.css";

export default class Map extends Component {
  componentWillMount() {
    document.getElementById("map").style.display = "block";
  }

  componentDidMount() {
    const platform = new window.H.service.Platform({
      app_id: "BtRgpFTmtEuUrzEKGY7W",
      app_code: "REnj-MMTZHpj29yC9JeFnw",
      useCIT: true,
      useHTTPS: true
    });

    function moveMapToNZ(map) {
      map.setCenter({ lat: -41.29798905219789, lng: 174.18283828125004 });
      map.setZoom(6);
    }

    var defaultLayers = platform.createDefaultLayers();
    var map = new window.H.Map(
      document.getElementById("map"),
      defaultLayers.satellite.map
    );
    var behavior = new window.H.mapevents.Behavior(
      new window.H.mapevents.MapEvents(map)
    );

    // Create the default UI components
    var ui = window.H.ui.UI.createDefault(map, defaultLayers);
    moveMapToNZ(map);
  }

  render() {
    return null;
  }
}
