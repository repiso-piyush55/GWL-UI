import  { useEffect, useRef, useState } from "react";

import "leaflet/dist/leaflet.css";

import "leaflet-draw/dist/leaflet.draw.css";

import L from "leaflet";

import "leaflet-draw";

import { saveAs } from "file-saver";
import CommonButton from "./CommonButton/CommonButton";
import getStyles from "./Map.styles";

const Map = () => {
  const classes = getStyles();
  const mapRef = useRef(null);

  const drawnItemsRef = useRef(new L.FeatureGroup());

  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    mapRef.current = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

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

    mapRef.current.addControl(drawControl);

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
  }, []);

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
     console.log('ccldsafasd')
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

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          zIndex: "9999",
        }}
      >
      
        <CommonButton
          for="files"
          class="btn"
          buttonStyles={{
            borderRadius: "40px",
            padding: "0px 20px",
            "@media screen and (max-width:900px)": {
              padding: "0.5rem 0rem",
              minWidth: "50%",
            },
          }}
        >
          <label
            htmlFor="files"
            style={{ minWidth: "100%", fontSize: "0.8rem" }}
          >
            Choose Location
          </label>
          <input
            id="files"
            type="file"
            style={{
              visibility: "hidden",
              minWidth: "100%",
              position: "absolute",
            }}
            multiple={false}
            className={classes.imageSelectorStyle}
            accept=".geojson" 
            onChange={handleFileChange}
          />
        </CommonButton>

        <CommonButton onClick={handleShare} disabled={!geoJsonData}>
          Share
        </CommonButton>

        {/* <button onClick={handleShare} disabled={!geoJsonData}>
          Share
        </button> */}
      </div>
    </div>
  );
};

export default Map;
