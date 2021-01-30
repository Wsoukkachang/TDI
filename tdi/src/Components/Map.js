import React from "react";
import "animate.css"; // you need to require the css for animation
import "leaflet/dist/leaflet.css";
import "./Map.css";

export default function SiteMap({ center, zoom }) {
  return (
    <div className="animate__animated animate__backInUp animate__delay-1s mapContainer">
      <iframe
        title="myMap"
        className="windyMap"
        src="https://embed.windy.com/embed2.html?lat=32.741&lon=-96.768&detailLat=31.142&detailLon=-99.338&width=650&height=450&zoom=7&level=surface&overlay=gustAccu&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
        frameborder="10"
      ></iframe>
    </div>
  );
}
