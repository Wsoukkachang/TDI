// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Card,
//   FormControlLabel,
//   Switch,
//   Typography,
//   TextField,
//   Button,
//   CardActionArea,
// } from "@material-ui/core";
import Script from "react-load-script";
import { makeStyles } from "@material-ui/core/styles";
// import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, setState, useEffect } from "react";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Map, TileLayer, Marker, Popup } from "react-windy-leaflet";
import "./Map.css";
// import { DEBUG, W, windyInit } from "./Components/Windy";

export default function SiteMap({ center, zoom }) {
  //   const classes = useStyles();
  const [count, setCount] = useState(0);
  const [script, setScript] = useState(false);

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  let handleScriptCreate = () => {
    if (count === 0) {
      setScript(false);
      console.log("Create Script");
    }
  };

  let handleScriptError = () => {
    setState({ scriptError: true });
  };

  let handleScriptLoad = () => {
    if (count === 0) {
      setScript(true);
      console.log("Script Loaded");
      setCount(1);
    }
  };

  const options = {
    // Required: API key
    key: "twn8QbY4rUT6jyTY2f1GGRfbJD31Fldo", // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 50.4,
    lon: 14.3,
    zoom: 5,
  };

  // Initialize Windy API
  let windyInit =
    (options,
    (windyAPI) => {
      // windyAPI is ready, and contain 'map', 'store',
      // 'picker' and other usefull stuff

      const { map } = windyAPI;
      console.log("This is windyInit");
      // .map is instance of Leaflet map

      L.popup().setLatLng([50.4, 14.3]).setContent("Hello World").openOn(map);
    });

  return (
    <div className="mapContainer">
      <iframe
        className="windyMap"
        src="https://embed.windy.com/embed2.html?lat=32.741&lon=-96.768&detailLat=31.142&detailLon=-99.338&width=650&height=450&zoom=7&level=surface&overlay=gustAccu&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
        frameborder="10"
      ></iframe>
      {/* <Map center={center} zoom={zoom}>
        <Marker position={center}>
          <Popup> Hello </Popup>
        </Marker>

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=0ea065ba13mshcd46c3b0a24ab40p1fdad0jsn6f4ee991f91f"
        />
      </Map> */}
    </div>
  );
}
