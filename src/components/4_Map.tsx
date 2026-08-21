"use client";

import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./4_Map.css";

import {
  GeoJSON,
  LayersControl,
  MapContainer,
  TileLayer,
} from "react-leaflet";
import type { Layer, PathOptions } from "leaflet";
import type { Feature } from "geojson";

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
  data: any;
};

const categories: Category[] = [
  { name: "KDW", color: "#ff6b6b", data: KDW },
  { name: "KS7", color: "#4dabf7", data: KS7 },
  { name: "MN5", color: "#51cf66", data: MN5 },
  { name: "MR6", color: "#ffd43b", data: MR6 },
  { name: "MW2", color: "#cc5de8", data: MW2 },
  { name: "UMW4", color: "#20c997", data: UMW4 },
  { name: "ZL8", color: "#ff922b", data: ZL8 },
];

const parcelStyle: PathOptions = {
  fillColor: "transparent",
  fillOpacity: 0,
  color: "#fff",
  weight: 1,
};

const createStyle = (color: string): PathOptions => ({
  color,
  fillColor: color,
  fillOpacity: 0.35,
  weight: 2,
});

const hoverStyle = (color: string): PathOptions => ({
  color,
  fillColor: color,
  fillOpacity: 0.7,
  weight: 4,
});

const selectedStyle = (color: string): PathOptions => ({
  color: "var(--white)",
  fillColor: color,
  fillOpacity: 0.85,
  weight: 4,
});

export default function Map() {
  // referencja do aktualnie zaznaczonej (kliknięciem) warstwy — trwa między wszystkimi kategoriami
  const selectedLayerRef = useRef<Layer | null>(null);

  const onFeature = (feature: Feature, layer: Layer, color: string) => {
    const properties = feature?.properties;

    if (properties) {
      const popupContent = Object.entries(properties)
        .map(([key, value]) => `<strong>${key}:</strong> ${String(value)}`)
        .join("<br />");

      (layer as any).bindPopup(popupContent);
    }

    layer.on({
      mouseover: () => {
        // jeśli warstwa jest aktualnie zaznaczona kliknięciem — nie nadpisuj jej stylu
        if (selectedLayerRef.current === layer) return;

        (layer as any).setStyle(hoverStyle(color));
        (layer as any).bringToFront();
      },

      mouseout: () => {
        // jeśli warstwa jest zaznaczona — zostaw jej styl "selected"
        if (selectedLayerRef.current === layer) return;

        (layer as any).setStyle(createStyle(color));
      },

      click: () => {
        // przywróć normalny styl poprzednio zaznaczonej warstwie (jeśli inna)
        if (selectedLayerRef.current && selectedLayerRef.current !== layer) {
          const prevLayer = selectedLayerRef.current as any;
          const prevColor = prevLayer.options?.color as string;
          prevLayer.setStyle(createStyle(prevColor));
        }

        selectedLayerRef.current = layer;

        (layer as any).setStyle(selectedStyle(color));
        (layer as any).bringToFront();
        (layer as any).openPopup();
      },

      popupclose: () => {
        // po zamknięciu popupu odznacz warstwę (usuń ten blok, jeśli podświetlenie ma zostać na stałe)
        if (selectedLayerRef.current === layer) {
          selectedLayerRef.current = null;
          (layer as any).setStyle(createStyle(color));
        }
      },
    });
  };

  return (
    <section id="map" className="map section">
      <div className="map__container container">
        <header className="map__header">
          <p className="map__eyebrow">04 — Lokalizacja na mapie</p>
        </header>

        <div className="map__frame">
          <MapContainer
            center={[53.980564, 14.771495]}
            zoom={15}
            scrollWheelZoom
            className="map__leaflet"
          >
            <LayersControl position="topright">
              <BaseLayer checked name="Mapa">
                <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
              </BaseLayer>

              <BaseLayer name="Satelita">
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
              </BaseLayer>
            </LayersControl>

            <GeoJSON data={parcels} style={parcelStyle} />

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
    </section>
  );
}
