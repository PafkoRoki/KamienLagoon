"use client";

import "leaflet/dist/leaflet.css";
import "./4_Map.css";

import {
  GeoJSON,
  LayersControl,
  MapContainer,
  TileLayer,
} from "react-leaflet";
import type { GeoJsonObject } from "geojson";

import parcels from "../data/parcels";
import KDW from "../data/KDW";
import KS7 from "../data/KS7";
import MN5 from "../data/MN5";
import MR6 from "../data/MR6";
import MW2 from "../data/MW2";
import UMW4 from "../data/UMW4";
import ZL8 from "../data/ZL8";

const { BaseLayer } = LayersControl;

type Category = {
  name: string;
  color: string;
  data: GeoJsonObject;
};

const parcelsGeoJson = parcels as GeoJsonObject;

const categories: Category[] = [
  { name: "KDW", color: "#2d2d2d", data: KDW as GeoJsonObject },
  { name: "KS7", color: "#2f6670", data: KS7 as GeoJsonObject },
  { name: "MN5", color: "#4e848f", data: MN5 as GeoJsonObject },
  { name: "MR6", color: "#6ea4ae", data: MR6 as GeoJsonObject },
  { name: "MW2", color: "#8ec4cf", data: MW2 as GeoJsonObject },
  { name: "UMW4", color: "#afe6f1", data: UMW4 as GeoJsonObject },
  { name: "ZL8", color: "#708f70", data: ZL8 as GeoJsonObject },
];

const parcelStyle = {
  fillColor: "#ffffff",
  fillOpacity: 0.5,
  color: "#102a32",
  weight: 3,
};

const createStyle = (color: string) => ({
  color: "#102a32",
  fillColor: color,
  fillOpacity: 0.35,
  weight: 1,
});

function onFeature(feature: any, layer: any, color: string) {
  const properties = feature?.properties;

  if (properties) {
    const popupContent = Object.entries(properties)
      .map(([key, value]) => `<strong>${key}:</strong> ${String(value)}`)
      .join("<br />");

    layer.bindPopup(popupContent);
  }

  layer.on({
    mouseover: () => {
      layer.setStyle({
        color: "#102a32",
        fillColor: color,
        fillOpacity: 0.75,
        weight: 3,
      });

      layer.bringToFront();
    },

    mouseout: () => {
      layer.setStyle(createStyle(color));
    },
  });
}

export default function Map() {
  return (
    <section id="map" className="map section">
      <div className="map__container container">
        <header className="map__header">
          <p className="map__eyebrow">04 — Lokalizacja na mapie</p>
        </header>

        <div className="map__content">
          <div className="map__intro">
            <h2>POZNAJ OTOCZENIE</h2>

            <p className="map__description">
              Sprawdź układ działek, ich przeznaczenie oraz najbliższe
              otoczenie Żółcino Peninsula.
            </p>
          </div>

          <div className="map__frame">
            <MapContainer
              center={[53.980564, 14.771495]}
              zoom={15}
              scrollWheelZoom
              className="map__leaflet"
            >
              <LayersControl position="topright">
                <BaseLayer checked name="Jasna">
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution="&copy; OpenStreetMap contributors &copy; CARTO"
                  />
                </BaseLayer>

                <BaseLayer name="Ciemna">
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution="&copy; OpenStreetMap contributors &copy; CARTO"
                  />
                </BaseLayer>

                <BaseLayer name="Satelita">
                  <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution='Tiles &copy; Esri'
                  />
                </BaseLayer>

                <BaseLayer name="OpenStreetMap">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                  />
                </BaseLayer>

                <BaseLayer name="Esri Street">
                  <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                    attribution="Tiles &copy; Esri"
                  />
                </BaseLayer>

                <BaseLayer name="Humanitarian">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors, Tiles style by HOT"
                  />
                </BaseLayer>
              </LayersControl>

              <GeoJSON data={parcelsGeoJson} style={parcelStyle} />

              {categories.map((category) => (
                <GeoJSON
                  key={category.name}
                  data={category.data}
                  style={createStyle(category.color)}
                  onEachFeature={(feature, layer) =>
                    onFeature(feature, layer, category.color)
                  }
                />
              ))}
            </MapContainer>

            <div className="map__legend" aria-label="Legenda mapy">
              {categories.map((category) => (
                <div key={category.name} className="map__legend-item">
                  <span
                    className="map__legend-color"
                    style={{ backgroundColor: category.color }}
                  />
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}