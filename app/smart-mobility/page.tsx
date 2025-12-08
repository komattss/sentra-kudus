"use client";

import {
  trafficData,
  transportOptions,
  trafficIncidents,
  getCongestionColor,
} from "@/data/traffic";
import { useState } from "react";
import Badge from "@/components/Badge";
import MapContainer from "@/components/MapContainer";
import { useToast } from "@/components/ToastContainer";
import {
  Zap,
  MapPin,
  Info,
  Clock,
  Map,
  Users,
  AlertTriangle,
  Construction,
  AlertCircle,
} from "lucide-react";

export default function SmartMobilityPage() {
  const [selectedRoad, setSelectedRoad] = useState(trafficData[0]);
  const { showWarning, showError } = useToast();

  const handleRoadSelect = (road: (typeof trafficData)[number]) => {
    setSelectedRoad(road);
    if (road.congestionLevel === "Padat") {
      showWarning(
        "Lalu Lintas Padat",
        `Jalur ${road.roadName} sedang padat. Pertimbangkan rute alternatif atau cek transportasi publik.`
      );
    }
    if (road.congestionLevel === "Macet") {
      showError(
        "Peringatan Macet",
        `Jalur ${road.roadName} macet parah. Disarankan menunda perjalanan atau beralih ke moda lain.`
      );
    }
  };

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
    <main className="min-h-screen pt-18 pb-12 bg-linear-to-b from-red-50 via-white to-red-100">
      {/* Hero */}
      <section className="bg-linear-to-br from-red-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
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
      <section className="bg-red-50/90 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Selected Road Detail */}
            <div className="lg:col-span-2">
              {/* Map */}
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-red-500" />
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
                controlColor="#ef4444"
                controlHoverColor="#dc2626"
                controlZIndex={30}
                controlOffset={{ top: 80, left: 12 }}
              />
              <div className="flex items-start gap-2 text-sm text-gray-800 mt-3 mb-6">
                <Info className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p>
                  Klik pada marker jalan di peta untuk melihat detail kondisi
                  lalu lintasnya
                </p>
              </div>

              {/* Road Detail Card */}
              <div className="bg-white/95 rounded-xl shadow-sm border border-red-100 p-8">
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
                  <p className="text-sm text-gray-800 mb-2">
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
                  <div className="flex justify-between text-xs text-gray-800 mt-1">
                    <span>0%</span>
                    <span className="font-semibold">
                      {selectedRoad.density}%
                    </span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Traffic Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-red-200">
                  <div
                    className={`p-4 rounded-lg border ${
                      selectedRoad.congestionLevel === "Lancar"
                        ? "bg-linear-to-br from-green-50 to-green-100 border-green-200"
                        : selectedRoad.congestionLevel === "Normal"
                        ? "bg-linear-to-br from-blue-50 to-blue-100 border-blue-200"
                        : selectedRoad.congestionLevel === "Padat"
                        ? "bg-linear-to-br from-orange-50 to-orange-100 border-orange-200"
                        : "bg-linear-to-br from-red-50 to-red-100 border-red-200"
                    }`}
                  >
                    <p className="text-sm text-gray-800 mb-1">
                      Kecepatan Rata-rata
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedRoad.averageSpeed} km/h
                    </p>
                  </div>
                  <div
                    className={`p-4 rounded-lg border ${
                      selectedRoad.congestionLevel === "Lancar"
                        ? "bg-linear-to-br from-green-50 to-green-100 border-green-200"
                        : selectedRoad.congestionLevel === "Normal"
                        ? "bg-linear-to-br from-blue-50 to-blue-100 border-blue-200"
                        : selectedRoad.congestionLevel === "Padat"
                        ? "bg-linear-to-br from-orange-50 to-orange-100 border-orange-200"
                        : "bg-linear-to-br from-red-50 to-red-100 border-red-200"
                    }`}
                  >
                    <p className="text-sm text-gray-800 mb-1">
                      Kepadatan Lalu Lintas
                    </p>
                    <p className="text-2xl font-bold text-gray-800">
                      {selectedRoad.density}%
                    </p>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="p-6 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Rekomendasi Perjalanan
                      </h3>
                      {selectedRoad.congestionLevel === "Lancar" && (
                        <p className="text-gray-700">
                          Jalan dalam kondisi lancar. Waktu tempuh optimal. Anda
                          dapat melakukan perjalanan sesuai rencana.
                        </p>
                      )}
                      {selectedRoad.congestionLevel === "Normal" && (
                        <p className="text-gray-700">
                          Jalan dalam kondisi normal dengan sedikit kemacetan.
                          Bersiaplah untuk perjalanan sedikit lebih lama dari
                          biasanya.
                        </p>
                      )}
                      {selectedRoad.congestionLevel === "Padat" && (
                        <p className="text-gray-700">
                          Jalan sedang padat. Pertimbangkan untuk menggunakan
                          rute alternatif atau menunggu waktu yang lebih baik.
                        </p>
                      )}
                      {selectedRoad.congestionLevel === "Macet" && (
                        <p className="text-gray-700">
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
            <div
              className="bg-white/95 rounded-lg shadow-lg border border-red-100 flex flex-col"
              style={{ height: "983px" }}
            >
              <div className="p-6 pb-3 border-b border-red-100">
                <h3 className="text-xl font-bold text-gray-800">
                  Jalan-Jalan Utama
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto p-6 pt-3 space-y-3">
                {trafficData.map((road) => {
                  const isSelected = selectedRoad.id === road.id;
                  const getBgColor = (level: string) => {
                    if (!isSelected) return "bg-white";
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
                  const getBorderColor = (level: string) => {
                    if (!isSelected) return "border-gray-200";
                    switch (level) {
                      case "Lancar":
                        return "border-green-600";
                      case "Normal":
                        return "border-blue-600";
                      case "Padat":
                        return "border-orange-600";
                      case "Macet":
                        return "border-red-600";
                      default:
                        return "border-gray-600";
                    }
                  };

                  return (
                    <button
                      key={road.id}
                      onClick={() => handleRoadSelect(road)}
                      className={`w-full p-4 rounded-lg text-left transition-all border-l-4 ${getBgColor(
                        road.congestionLevel
                      )} ${getBorderColor(road.congestionLevel)} ${
                        isSelected
                          ? "text-white"
                          : "text-gray-900 hover:bg-gray-50 hover:border-gray-300"
                      }`}
                    >
                      <div
                        className={`font-semibold ${
                          isSelected ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {road.roadName}
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span
                          className={`text-xs font-semibold ${
                            isSelected
                              ? "text-white"
                              : getCongestionColor(road.congestionLevel)
                          }`}
                        >
                          {road.congestionLevel}
                        </span>
                        <span
                          className={`text-xs ${
                            isSelected ? "text-white/90" : "text-gray-700"
                          }`}
                        >
                          {road.averageSpeed} km/h
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Traffic Incidents & Alerts */}
          <section className="mt-6">
            <div
              className="bg-white/95 rounded-lg shadow-lg border border-red-100 flex flex-col"
              style={{ maxHeight: "400px" }}
            >
              <div className="p-6 pb-3 border-b border-red-100">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Peringatan Lalu Lintas
                  </h3>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 pt-3 space-y-3">
                {trafficIncidents.map((incident) => {
                  const getSeverityColor = (severity: string) => {
                    switch (severity) {
                      case "Tinggi":
                        return "bg-red-50 border-red-300 text-red-800";
                      case "Sedang":
                        return "bg-orange-50 border-orange-300 text-orange-800";
                      case "Rendah":
                        return "bg-yellow-50 border-yellow-300 text-yellow-800";
                      default:
                        return "bg-gray-50 border-gray-300 text-gray-800";
                    }
                  };

                  const getIcon = (type: string) => {
                    switch (type) {
                      case "Kecelakaan":
                        return <AlertCircle className="w-5 h-5" />;
                      case "Perbaikan Jalan":
                        return <Construction className="w-5 h-5" />;
                      default:
                        return <Info className="w-5 h-5" />;
                    }
                  };

                  return (
                    <div
                      key={incident.id}
                      className={`p-4 rounded-lg border-l-4 ${getSeverityColor(
                        incident.severity
                      )} transition-all duration-200 hover:shadow-md`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5">
                          {getIcon(incident.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold text-sm">
                              {incident.type}
                            </h4>
                            <Badge
                              text={incident.severity}
                              color={
                                incident.severity === "Tinggi"
                                  ? "red"
                                  : incident.severity === "Sedang"
                                  ? "yellow"
                                  : "green"
                              }
                              size="sm"
                            />
                          </div>
                          <p className="font-semibold text-xs mb-1">
                            📍 {incident.location}
                          </p>
                          <p className="text-xs mb-2">{incident.description}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {new Date(incident.timestamp).toLocaleTimeString(
                                "id-ID",
                                { hour: "2-digit", minute: "2-digit" }
                              )}
                            </span>
                            {incident.estimatedClearance && (
                              <span className="font-semibold">
                                Estimasi: {incident.estimatedClearance}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

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
                  )} border rounded-lg p-6 transition-all duration-200 cursor-pointer hover:shadow-md hover:scale-[1.02]`}
                >
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    {transport.type}
                  </p>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {transport.name}
                  </h4>
                  <p className="text-xs text-gray-800 mb-4">
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
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Traffic Status Legend */}
      <section className="bg-red-50 py-12 border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Keterangan Status Lalu Lintas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/95 rounded-lg p-6 border border-green-200 transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 cursor-pointer">
              <div className="w-full h-2 bg-green-500 rounded-full mb-4"></div>
              <h4 className="font-bold text-green-600 mb-2">Lancar</h4>
              <p className="text-sm text-gray-800">
                Tidak ada hambatan, lalu lintas berjalan normal
              </p>
            </div>
            <div className="bg-white/95 rounded-lg p-6 border border-gray-200 transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 cursor-pointer">
              <div className="w-full h-2 bg-blue-500 rounded-full mb-4"></div>
              <h4 className="font-bold text-blue-600 mb-2">Normal</h4>
              <p className="text-sm text-gray-800">
                Sedikit hambatan tapi masih lancar
              </p>
            </div>
            <div className="bg-white/95 rounded-lg p-6 border border-orange-200 transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 cursor-pointer">
              <div className="w-full h-2 bg-orange-500 rounded-full mb-4"></div>
              <h4 className="font-bold text-orange-600 mb-2">Padat</h4>
              <p className="text-sm text-gray-800">
                Banyak kendaraan, lalu lintas melambat
              </p>
            </div>
            <div className="bg-white/95 rounded-lg p-6 border border-red-200 transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover:-translate-y-1 cursor-pointer">
              <div className="w-full h-2 bg-red-500 rounded-full mb-4"></div>
              <h4 className="font-bold text-red-600 mb-2">Macet</h4>
              <p className="text-sm text-gray-800">
                Sangat ramai, lalu lintas berhenti-berjalan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-red-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Tips Berkendara Aman
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/95 rounded-lg shadow border border-red-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-300 hover:bg-white">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Rencanakan Perjalanan
              </h3>
              <p className="text-gray-800">
                Cek kondisi lalu lintas sebelum berangkat untuk menentukan waktu
                keberangkatan terbaik
              </p>
            </div>
            <div className="p-6 bg-white/95 rounded-lg shadow border border-red-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-300 hover:bg-white">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Gunakan Rute Alternatif
              </h3>
              <p className="text-gray-800">
                Saat macet, coba rute alternatif yang mungkin lebih lancar untuk
                menghemat waktu
              </p>
            </div>
            <div className="p-6 bg-white/95 rounded-lg shadow border border-red-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-red-300 hover:bg-white">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Gunakan Transportasi Publik
              </h3>
              <p className="text-gray-800">
                Pertimbangkan transportasi umum untuk menghindari stres
                berkendara di saat macet
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
