"use client";

import dynamic from "next/dynamic";
import { CSSProperties } from "react";

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

interface MapContainerProps {
  markers: MapMarker[];
  center?: { lat: number; lng: number } | [number, number];
  zoom?: number;
  onMarkerClick?: (marker: MapMarker) => void;
  height?: string;
  controlColor?: string;
  controlHoverColor?: string;
  controlZIndex?: number;
  controlOffset?: { top?: number; left?: number };
}

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
      <p className="text-gray-600 dark:text-gray-400">Loading map...</p>
    </div>
  ),
});

export default function MapContainer({
  markers,
  center = { lat: -6.8048, lng: 110.8405 },
  zoom = 14,
  onMarkerClick,
  height = "h-96",
  controlColor,
  controlHoverColor,
  controlZIndex,
  controlOffset,
}: MapContainerProps) {
  const controlVars: CSSProperties = {
    ["--leaflet-control-color" as string]: controlColor,
    ["--leaflet-control-hover" as string]: controlHoverColor || controlColor,
    ["--leaflet-control-z" as string]: controlZIndex?.toString(),
    ["--leaflet-control-top" as string]: controlOffset?.top
      ? `${controlOffset.top}px`
      : undefined,
    ["--leaflet-control-left" as string]: controlOffset?.left
      ? `${controlOffset.left}px`
      : undefined,
  };

  return (
    <div
      className={`map-container w-full ${height} rounded-lg overflow-hidden shadow-lg`}
      style={controlVars}
    >
      <LeafletMap
        markers={markers}
        center={center}
        zoom={zoom}
        onMarkerClick={onMarkerClick}
      />
    </div>
  );
}
