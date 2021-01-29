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

import React from "react";

import "leaflet/dist/leaflet.css";
// import { Map, TileLayer, Marker, Popup } from "react-windy-leaflet";
import "./Map.css";

export default function SiteMap({ center, zoom }) {
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
