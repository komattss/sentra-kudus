"use client";

import {
  trafficData,
  transportOptions,
  getCongestionColor,
} from "@/data/traffic";
import { useState } from "react";
import Badge from "@/components/Badge";
import MapContainer from "@/components/MapContainer";

export default function SmartMobilityPage() {
  const [selectedRoad, setSelectedRoad] = useState(trafficData[0]);

  const getCongestionLevelColor = (level: string) => {
    switch (level) {
      case "Lancar":
        return "bg-green-500";
      case "Normal":
        return "bg-blue-500";
      case "Padat":
        return "bg-orange-500";
      case "Macet":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTransportBgColor = (type: string) => {
    switch (type) {
      case "Publik":
        return "bg-blue-50 border-blue-200";
      case "Pribadi":
        return "bg-yellow-50 border-yellow-200";
      case "Micro":
        return "bg-green-50 border-green-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const mapMarkers = trafficData.map((road) => ({
    id: road.id,
    lat: road.latitude,
    lng: road.longitude,
    label: road.roadName,
    color:
      road.congestionLevel === "Lancar"
        ? "#22c55e"
        : road.congestionLevel === "Normal"
        ? "#3b82f6"
        : road.congestionLevel === "Padat"
        ? "#f97316"
        : "#ef4444",
    selected: selectedRoad.id === road.id,
  }));

  return (
    <main className="min-h-screen pt-20 pb-12">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Smart Mobility</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl">
            Informasi lalu lintas real-time dan rekomendasi transportasi terbaik
            untuk perjalanan Anda di Sentrakudus
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Selected Road Detail */}
            <div className="lg:col-span-2">
              {/* Map */}
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-[#8b9e7d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800">
                  Peta Lalu Lintas
                </h2>
              </div>

              <MapContainer
                markers={mapMarkers}
                center={{ lat: -6.8048, lng: 110.8405 }}
                zoom={14}
                onMarkerClick={(marker) => {
                  const road = trafficData.find((r) => r.id === marker.id);
                  if (road) setSelectedRoad(road);
                }}
                height="h-96"
              />

              <div className="flex items-start gap-2 text-sm text-gray-600 mt-3 mb-6">
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
                  Klik pada marker jalan di peta untuk melihat detail kondisi
                  lalu lintasnya
                </p>
              </div>

              {/* Road Detail Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedRoad.roadName}
                  </h2>
                  <Badge
                    text={selectedRoad.congestionLevel}
                    color={
                      selectedRoad.congestionLevel === "Lancar"
                        ? "green"
                        : selectedRoad.congestionLevel === "Normal"
                        ? "blue"
                        : selectedRoad.congestionLevel === "Padat"
                        ? "yellow"
                        : "red"
                    }
                    size="lg"
                  />
                </div>

                {/* Traffic Status Visual */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">
                    Tingkat Kemacetan
                  </p>
                  <div className="bg-gray-100 rounded-full h-6 overflow-hidden">
                    <div
                      className={`h-full ${getCongestionLevelColor(
                        selectedRoad.congestionLevel
                      )} transition-all`}
                      style={{ width: `${selectedRoad.density}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>0%</span>
                    <span className="font-semibold">
                      {selectedRoad.density}%
                    </span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Traffic Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="bg-linear-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">
                      Kecepatan Rata-rata
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedRoad.averageSpeed} km/h
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-600 mb-1">
                      Kepadatan Lalu Lintas
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedRoad.density}%
                    </p>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-blue-600 shrink-0 mt-0.5"
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
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">
                        Rekomendasi Perjalanan
                      </h3>
                      {selectedRoad.congestionLevel === "Lancar" && (
                        <p className="text-blue-800">
                          Jalan dalam kondisi lancar. Waktu tempuh optimal. Anda
                          dapat melakukan perjalanan sesuai rencana.
                        </p>
                      )}
                      {selectedRoad.congestionLevel === "Normal" && (
                        <p className="text-blue-800">
                          Jalan dalam kondisi normal dengan sedikit kemacetan.
                          Bersiaplah untuk perjalanan sedikit lebih lama dari
                          biasanya.
                        </p>
                      )}
                      {selectedRoad.congestionLevel === "Padat" && (
                        <p className="text-blue-800">
                          Jalan sedang padat. Pertimbangkan untuk menggunakan
                          rute alternatif atau menunggu waktu yang lebih baik.
                        </p>
                      )}
                      {selectedRoad.congestionLevel === "Macet" && (
                        <p className="text-blue-800">
                          Jalan sedang macet. Sangat disarankan untuk
                          menggunakan transportasi alternatif atau menunggu
                          kemacetan mereda.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Roads List */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Jalan-Jalan Utama
              </h3>
              <div className="space-y-3">
                {trafficData.map((road) => (
                  <button
                    key={road.id}
                    onClick={() => setSelectedRoad(road)}
                    className={`w-full p-4 rounded-lg text-left transition-all border-l-4 ${
                      selectedRoad.id === road.id
                        ? "bg-[#8b9e7d] text-white border-[#6b7a5e]"
                        : "bg-gray-50 border-transparent hover:bg-gray-100"
                    }`}
                  >
                    <div className="font-semibold">{road.roadName}</div>
                    <div className="flex justify-between items-center mt-2">
                      <span
                        className={`text-xs font-semibold ${
                          selectedRoad.id === road.id
                            ? "text-white"
                            : getCongestionColor(road.congestionLevel)
                        }`}
                      >
                        {road.congestionLevel}
                      </span>
                      <span
                        className={`text-xs ${
                          selectedRoad.id === road.id
                            ? "text-white/90"
                            : "text-gray-600"
                        }`}
                      >
                        {road.averageSpeed} km/h
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Transport Options */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Opsi Transportasi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {transportOptions.map((transport) => (
                <div
                  key={transport.id}
                  className={`${getTransportBgColor(
                    transport.type
                  )} border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer`}
                >
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    {transport.type}
                  </p>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {transport.name}
                  </h4>
                  <p className="text-xs text-gray-600 mb-4">
                    {transport.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Kendaraan Aktif</span>
                      <span className="font-bold">
                        {transport.activeVehicles}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Waktu Tunggu</span>
                      <span className="font-bold text-green-600">
                        ~{transport.waitingTime} min
                      </span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-[#8b9e7d] hover:bg-[#6b7a5e] text-white font-semibold py-2 rounded-lg transition-colors">
                    Pesan
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Traffic Status Legend */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Keterangan Status Lalu Lintas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 border border-green-200">
              <div className="w-full h-2 bg-green-500 rounded-full mb-4"></div>
              <h4 className="font-bold text-green-600 mb-2">Lancar</h4>
              <p className="text-sm text-gray-600">
                Tidak ada hambatan, lalu lintas berjalan normal
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <div className="w-full h-2 bg-blue-500 rounded-full mb-4"></div>
              <h4 className="font-bold text-blue-600 mb-2">Normal</h4>
              <p className="text-sm text-gray-600">
                Sedikit hambatan tapi masih lancar
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <div className="w-full h-2 bg-orange-500 rounded-full mb-4"></div>
              <h4 className="font-bold text-orange-600 mb-2">Padat</h4>
              <p className="text-sm text-gray-600">
                Banyak kendaraan, lalu lintas melambat
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-red-200">
              <div className="w-full h-2 bg-red-500 rounded-full mb-4"></div>
              <h4 className="font-bold text-red-600 mb-2">Macet</h4>
              <p className="text-sm text-gray-600">
                Sangat ramai, lalu lintas berhenti-berjalan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Tips Berkendara Aman
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow border border-gray-100">
            <div className="w-12 h-12 bg-[#8b9e7d] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Rencanakan Perjalanan
            </h3>
            <p className="text-gray-600">
              Cek kondisi lalu lintas sebelum berangkat untuk menentukan waktu
              keberangkatan terbaik
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow border border-gray-100">
            <div className="w-12 h-12 bg-[#8b9e7d] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Gunakan Rute Alternatif
            </h3>
            <p className="text-gray-600">
              Saat macet, coba rute alternatif yang mungkin lebih lancar untuk
              menghemat waktu
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow border border-gray-100">
            <div className="w-12 h-12 bg-[#8b9e7d] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Gunakan Transportasi Publik
            </h3>
            <p className="text-gray-600">
              Pertimbangkan transportasi umum untuk menghindari stres berkendara
              di saat macet
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
