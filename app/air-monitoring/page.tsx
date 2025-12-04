"use client";

import { airQualityData, getAQIColor } from "@/data/airQuality";
import { useState } from "react";
import Badge from "@/components/Badge";
import MapContainer from "@/components/MapContainer";
import { Cloud, MapPin, Info } from "lucide-react";

export default function AirMonitoringPage() {
  const [selectedStation, setSelectedStation] = useState(airQualityData[0]);

  const getStatusColor = (
    status: string
  ): "green" | "yellow" | "red" | "purple" => {
    switch (status) {
      case "Baik":
        return "green";
      case "Sedang":
        return "yellow";
      case "Tidak Sehat":
        return "red";
      case "Sangat Tidak Sehat":
        return "purple";
      default:
        return "green";
    }
  };

  const mapMarkers = airQualityData.map((station) => ({
    id: station.id,
    lat: station.latitude,
    lng: station.longitude,
    label: station.location,
    number: station.aqi,
    color:
      station.status === "Baik"
        ? "#22c55e"
        : station.status === "Sedang"
        ? "#eab308"
        : station.status === "Tidak Sehat"
        ? "#ef4444"
        : "#7c3aed",
    selected: selectedStation.id === station.id,
  }));

  return (
    <main className="min-h-screen pt-20 pb-12">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Air Quality</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl">
            Pantau kualitas udara real-time di berbagai lokasi di Sentrakudus
            untuk membantu Anda membuat keputusan yang lebih baik
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* AQI Map */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-[#8b9e7d]" />
              <h2 className="text-2xl font-bold text-gray-800">
                Peta Kualitas Udara
              </h2>
            </div>

            <MapContainer
              markers={mapMarkers}
              center={{ lat: -6.8048, lng: 110.8405 }}
              zoom={14}
              onMarkerClick={(marker) => {
                const station = airQualityData.find((s) => s.id === marker.id);
                if (station) setSelectedStation(station);
              }}
              height="h-96"
            />

            <div className="flex items-start gap-2 mt-3 text-sm text-gray-600">
              <svg
                className="w-5 h-5 text-[#8b9e7d] shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>
                Klik pada marker di peta untuk melihat detail kualitas udara di
                lokasi tersebut
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Selected Station Detail */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedStation.location}
                  </h2>
                  <Badge
                    text={selectedStation.status}
                    color={getStatusColor(selectedStation.status)}
                    size="lg"
                  />
                </div>

                {/* Main AQI Display */}
                <div
                  className={`${getAQIColor(
                    selectedStation.status
                  )} rounded-lg p-8 text-white mb-8`}
                >
                  <p className="text-lg mb-2 opacity-90">
                    Air Quality Index (AQI)
                  </p>
                  <p className="text-6xl font-bold mb-2">
                    {selectedStation.aqi}
                  </p>
                  <p className="text-lg">{selectedStation.status}</p>
                </div>

                {/* Pollutants Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">PM2.5</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedStation.pm25}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">µg/m³</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">PM10</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedStation.pm10}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">µg/m³</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">O₃</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedStation.o3}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">ppb</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">NO₂</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedStation.no2}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">ppb</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">SO₂</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedStation.so2}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">ppb</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">CO</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedStation.co}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">ppm</p>
                  </div>
                </div>

                {/* Health Recommendations */}
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">
                        Rekomendasi Kesehatan
                      </h3>
                      {selectedStation.status === "Baik" && (
                        <p className="text-blue-800">
                          Udara saat ini baik. Aman untuk aktivitas outdoor
                          sehari-hari.
                        </p>
                      )}
                      {selectedStation.status === "Sedang" && (
                        <p className="text-blue-800">
                          Udara dalam kondisi sedang. Kelompok sensitif
                          sebaiknya membatasi aktivitas outdoor yang berat.
                        </p>
                      )}
                      {selectedStation.status === "Tidak Sehat" && (
                        <p className="text-blue-800">
                          Udara tidak sehat. Hindari aktivitas outdoor jika
                          memungkinkan. Gunakan masker jika harus keluar.
                        </p>
                      )}
                      {selectedStation.status === "Sangat Tidak Sehat" && (
                        <p className="text-blue-800">
                          Udara sangat tidak sehat. Tetap di dalam ruangan.
                          Tutup pintu dan jendela.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stations List */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Stasiun Monitoring
              </h3>
              <div className="space-y-3">
                {airQualityData.map((station) => (
                  <button
                    key={station.id}
                    onClick={() => setSelectedStation(station)}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      selectedStation.id === station.id
                        ? `${getAQIColor(station.status)} text-white font-bold`
                        : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    <div className="font-semibold">{station.location}</div>
                    <div className="text-sm flex justify-between mt-1">
                      <span>AQI: {station.aqi}</span>
                      <span>{station.status}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Memahami AQI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white border border-green-200 p-6 rounded-lg">
              <div className="text-2xl font-bold text-green-700 mb-2">0-50</div>
              <p className="font-semibold text-green-700 mb-2">Baik</p>
              <p className="text-sm text-gray-600">
                Aman untuk semua aktivitas
              </p>
            </div>
            <div className="bg-white border border-yellow-200 p-6 rounded-lg">
              <div className="text-2xl font-bold text-yellow-700 mb-2">
                51-100
              </div>
              <p className="font-semibold text-yellow-700 mb-2">Sedang</p>
              <p className="text-sm text-gray-600">
                Beberapa orang mungkin terpengaruh
              </p>
            </div>
            <div className="bg-white border border-red-200 p-6 rounded-lg">
              <div className="text-2xl font-bold text-red-700 mb-2">
                101-150
              </div>
              <p className="font-semibold text-red-700 mb-2">Tidak Sehat</p>
              <p className="text-sm text-gray-600">
                Hindari aktivitas outdoor yang berat
              </p>
            </div>
            <div className="bg-white border border-purple-200 p-6 rounded-lg">
              <div className="text-2xl font-bold text-purple-700 mb-2">
                150+
              </div>
              <p className="font-semibold text-purple-700 mb-2">
                Sangat Tidak Sehat
              </p>
              <p className="text-sm text-gray-600">Tetap di dalam ruangan</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
