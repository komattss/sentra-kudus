"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  label: string;
  color?: string;
  icon?: string;
  selected?: boolean;
  number?: string | number; // For displaying AQI or other numbers
}

interface LeafletMapProps {
  markers: MapMarker[];
  center?: { lat: number; lng: number } | [number, number];
  zoom?: number;
  onMarkerClick?: (marker: MapMarker) => void;
}

export default function LeafletMap({
  markers,
  center = { lat: -6.8048, lng: 110.8405 },
  zoom = 14,
  onMarkerClick,
}: LeafletMapProps) {
  const centerCoords: [number, number] = Array.isArray(center)
    ? center
    : [center.lat, center.lng];

  // Fix icon default (React-Leaflet bug)
  const defaultIcon = L.icon({
    iconUrl: "/leaflet/marker-icon.png",
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const createCustomIcon = (color?: string, number?: string | number) => {
    if (!color && !number) return defaultIcon;

    // If number is provided, create a marker with number inside
    if (number !== undefined) {
      const markerColor = color || "#3b82f6";
      const svg = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="${markerColor}" stroke="#fff" stroke-width="3"/>
        <text x="20" y="20" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#fff">${number}</text>
      </svg>`;
      return L.divIcon({
        html: svg,
        className: "custom-marker-with-number",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });
    }

    // Default colored marker without number
    const svg = `<svg width="25" height="41" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 0C5.596 0 0 5.596 0 12.5c0 9.375 12.5 28.5 12.5 28.5S25 21.875 25 12.5C25 5.596 19.404 0 12.5 0z" fill="${color}" stroke="#fff" stroke-width="1.5"/><circle cx="12.5" cy="12.5" r="5" fill="#fff"/></svg>`;
    return L.divIcon({
      html: svg,
      className: "custom-marker",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
  };

  return (
    <MapContainer
      center={centerCoords}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={[marker.lat, marker.lng]}
          icon={createCustomIcon(marker.color, marker.number)}
          eventHandlers={{
            click: () => onMarkerClick?.(marker),
          }}
        >
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
