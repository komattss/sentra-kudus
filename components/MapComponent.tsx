"use client";

// Komponen ini sekarang memakai Leaflet, bukan Google Maps.

import { MapContainer as LeafletContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  label: string;
  color?: string;
  icon?: string;
}

interface MapProps {
  markers: MapMarker[];
  center: { lat: number; lng: number };
  zoom: number;
  onMarkerClick?: (marker: MapMarker) => void;
}

const defaultIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

export default function MapComponent({
  markers,
  center,
  zoom,
  onMarkerClick,
}: MapProps) {
  return (
    <LeafletContainer
      center={[center.lat, center.lng]}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {markers.map((m) => (
        <Marker
          key={m.id}
          position={[m.lat, m.lng]}
          icon={defaultIcon}
          eventHandlers={{
            click: () => onMarkerClick?.(m),
          }}
        >
          <Popup>{m.label}</Popup>
        </Marker>
      ))}
    </LeafletContainer>
  );
}