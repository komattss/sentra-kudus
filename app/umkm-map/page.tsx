"use client";

import { umkmData } from "@/data/umkm";
import { useState } from "react";
import Rating from "@/components/Rating";
import Badge from "@/components/Badge";
import MapContainer from "@/components/MapContainer";
import {
  ShoppingCart,
  MapPin,
  Phone,
  Clock,
  Info,
  Heart,
  Award,
} from "lucide-react";

export default function UMKMMapPage() {
  const [selectedUMKM, setSelectedUMKM] = useState(umkmData[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = ["Semua", ...new Set(umkmData.map((u) => u.category))];

  const filteredUMKM =
    selectedCategory === "Semua"
      ? umkmData
      : umkmData.filter((u) => u.category === selectedCategory);

  const mapMarkers = filteredUMKM.map((umkm) => ({
    id: umkm.id.toString(),
    lat: umkm.latitude,
    lng: umkm.longitude,
    label: umkm.name,
    color: "#8b9e7d",
    selected: selectedUMKM.id === umkm.id,
  }));

  return (
    <main className="min-h-screen pt-20 pb-12">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">UMKM Map</h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl">
            Temukan bisnis lokal, UMKM, dan produk unggulan daerah. Dukung
            ekonomi lokal dengan berbelanja di UMKM terbaik Sentrakudus
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold mb-4 text-gray-800">
            Filter Kategori
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#8b9e7d] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-800 mt-4">
            Menampilkan {filteredUMKM.length} UMKM
          </p>
        </div>
      </section>

      {/* Map and List */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#8b9e7d]" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Peta Lokasi UMKM
                </h2>
              </div>

              <MapContainer
                markers={mapMarkers}
                center={{ lat: -6.8048, lng: 110.8405 }}
                zoom={14}
                onMarkerClick={(marker) => {
                  const umkm = filteredUMKM.find(
                    (u) => u.id.toString() === marker.id
                  );
                  if (umkm) setSelectedUMKM(umkm);
                }}
                height="h-[500px]"
              />

              <div className="flex items-start gap-2 text-sm text-gray-700 mt-3 mb-6">
                <Info className="w-5 h-5 text-[#8b9e7d] shrink-0 mt-0.5" />
                <p>
                  Klik pada marker UMKM di peta untuk melihat detail lengkapnya
                </p>
              </div>

              {/* Selected UMKM Detail Card */}
              {selectedUMKM && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {selectedUMKM.name}
                      </h2>
                      <Badge
                        text={selectedUMKM.category}
                        color="blue"
                        size="md"
                      />
                    </div>
                    <div className="text-4xl">{selectedUMKM.image}</div>
                  </div>

                  <p className="text-gray-700 mb-6">
                    {selectedUMKM.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-gray-800" />
                        <p className="text-sm text-gray-800">Lokasi</p>
                      </div>
                      <p className="font-semibold text-gray-800">
                        {selectedUMKM.address}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Phone className="w-4 h-4 text-gray-800" />
                        <p className="text-sm text-gray-800">Telepon</p>
                      </div>
                      <p className="font-semibold text-gray-800">
                        {selectedUMKM.phone}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-gray-800" />
                        <p className="text-sm text-gray-800">Jam Operasional</p>
                      </div>
                      <p className="font-semibold text-gray-800">
                        {selectedUMKM.openingHours}
                      </p>
                    </div>
                    {selectedUMKM.website && (
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <svg
                            className="w-4 h-4 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                          <p className="text-sm text-gray-800">Website</p>
                        </div>
                        <a
                          href={`https://${selectedUMKM.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#8b9e7d] hover:text-[#6b7a5e]"
                        >
                          {selectedUMKM.website}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <Rating
                      rating={selectedUMKM.rating}
                      reviews={selectedUMKM.reviews}
                    />
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4">
                    <button className="flex-1 bg-[#8b9e7d] hover:bg-[#6b7a5e] text-white font-bold py-3 rounded-lg transition-colors">
                      Hubungi
                    </button>
                    <button className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition-colors">
                      Lihat di Peta
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* UMKM List */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Daftar UMKM
              </h3>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredUMKM.map((umkm) => (
                  <button
                    key={umkm.id}
                    onClick={() => setSelectedUMKM(umkm)}
                    className={`w-full p-4 rounded-lg text-left transition-all border-l-4 ${
                      selectedUMKM.id === umkm.id
                        ? "bg-[#8b9e7d] text-white border-[#6b7a5e]"
                        : "bg-gray-50 border-transparent hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{umkm.image}</span>
                      <div className="flex-1">
                        <div className="font-semibold">{umkm.name}</div>
                        <div
                          className={`text-xs mt-1 ${
                            selectedUMKM.id === umkm.id
                              ? "text-white/90"
                              : "text-gray-800"
                          }`}
                        >
                          {umkm.category}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-1">
                        <svg
                          className={`w-4 h-4 ${
                            selectedUMKM.id === umkm.id
                              ? "text-yellow-300"
                              : "text-yellow-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span
                          className={`text-xs font-semibold ${
                            selectedUMKM.id === umkm.id
                              ? "text-white"
                              : "text-gray-700"
                          }`}
                        >
                          {umkm.rating}
                        </span>
                      </div>
                      <span
                        className={`text-xs ${
                          selectedUMKM.id === umkm.id
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        {umkm.reviews} review
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Mengapa Belanja di UMKM Lokal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8b9e7d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                Dukung Ekonomi Lokal
              </h3>
              <p className="text-gray-800">
                Uang Anda langsung membantu pengusaha lokal dan keluarganya
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8b9e7d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                Kualitas Terjamin
              </h3>
              <p className="text-gray-800">
                Produk dengan kualitas tinggi dan harga yang kompetitif
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8b9e7d] rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                Produk Unik
              </h3>
              <p className="text-gray-800">
                Temukan produk eksklusif yang tidak dijual di tempat lain
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
