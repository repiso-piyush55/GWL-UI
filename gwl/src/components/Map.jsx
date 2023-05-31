import React, { useEffect, useRef, useState } from "react";

import "leaflet/dist/leaflet.css";

import "leaflet-draw/dist/leaflet.draw.css";

import L from "leaflet";

import "leaflet-draw";

import { saveAs } from "file-saver";

import { useSelector } from "react-redux";

const Map = () => {
  const mapRef = useRef(null);

  const drawnItemsRef = useRef(new L.FeatureGroup());

  const [geoJsonData, setGeoJsonData] = useState(null);

  const { isLoggedIn } = useSelector((store) => store.login);

  useEffect(() => {
    mapRef.current = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    console.log("isLogged is printing ", isLoggedIn);

    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,

        marker: false,

        circlemarker: false,

        polyline: false,

        circle: false,

        rectangle: false,
      },

      edit: {
        featureGroup: drawnItemsRef.current,
      },
    });

    console.log("Now isLogged is true");

    if (isLoggedIn) {
      mapRef.current.addControl(drawControl);
    }

    mapRef.current.addLayer(drawnItemsRef.current);

    mapRef.current.on("draw:created", (event) => {
      const layer = event.layer;

      const coordinates = layer

        .getLatLngs()[0]
        .map((latLng) => [latLng.lng, latLng.lat]);

      const geoJsonData = {
        type: "Feature",

        properties: {},

        geometry: {
          type: "Polygon",

          coordinates: [coordinates],
        },
      };

      setGeoJsonData(geoJsonData);

      drawnItemsRef.current.addLayer(layer); // Add the layer to the drawnItems feature group
    });

    return () => {
      mapRef.current.remove();
    };
  }, [isLoggedIn]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;

      const geoJsonData = JSON.parse(contents);

      const newLayer = L.geoJSON(geoJsonData);

      newLayer.addTo(mapRef.current);

      drawnItemsRef.current.addLayer(newLayer);

      mapRef.current.fitBounds(drawnItemsRef.current.getBounds());
    };

    reader.readAsText(file);
  };

  const handleShare = () => {
    if (geoJsonData) {
      const blob = new Blob([JSON.stringify(geoJsonData)], {
        type: "application/json",
      });

      saveAs(blob, "polygon.geojson");
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <div id="map" style={{ height: "100%", width: "100%" }} />

      {/* {console.log("Insider Return ",isLoggedIn)} */}

      {isLoggedIn && (
        <div
          style={{
            position: "absolute",

            bottom: "10px",

            left: "10px",

            zIndex: "9999",
          }}
        >
          <input type="file" accept=".geojson" onChange={handleFileChange} />

          <button onClick={handleShare} disabled={!geoJsonData}>
            Share
          </button>
        </div>
      )}
    </div>
  );
};

export default Map;
