"use client";

import { communityServices } from "@/data/communityServices";
import Rating from "@/components/Rating";
import ServiceModal from "@/components/ServiceModal";
import { Users, MapPin, Phone, Mail, Search, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [selectedService, setSelectedService] = useState<
    (typeof communityServices)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    ...new Set(communityServices.map((service) => service.category)),
  ];

  const filteredServices =
    selectedCategory === "Semua"
      ? communityServices
      : communityServices.filter(
          (service) => service.category === selectedCategory
        );

  const handleSelengkapnya = (service: (typeof communityServices)[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen pt-18 pb-12 bg-linear-to-b from-purple-50 via-white to-purple-100">
      {/* Hero */}
      <section className="bg-linear-to-br from-purple-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Services & Community
            </h1>
          </div>
          <p className="text-lg text-white/90 max-w-2xl">
            Akses berbagai layanan publik untuk kesehatan, pendidikan, olahraga,
            dan kemasyarakatan di wilayah Sentrakudus
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-purple-50/90 py-8 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold mb-4 text-gray-900">
            Kategori Layanan
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("Semua")}
              className={`px-4 py-2 rounded-full font-medium transition-all border shadow-sm ${
                selectedCategory === "Semua"
                  ? "bg-purple-500 text-white border-purple-600"
                  : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              Semua
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all border shadow-sm ${
                  selectedCategory === category
                    ? "bg-purple-500 text-white border-purple-600"
                    : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white/95 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-purple-100 hover:border-purple-300 hover:scale-[1.02]"
              >
                {/* Header */}
                <div className="bg-linear-to-br from-purple-500 to-purple-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Location */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <MapPin className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                      <span>{service.location}</span>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-purple-500" />
                      <span>{service.phone}</span>
                    </div>
                    <div className="flex itemscenter gap-2 text-gray-700">
                      <Mail className="w-4 h-4 text-purple-500" />
                      <span>{service.email}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="pt-4 border-t border-gray-100">
                    <Rating rating={service.rating} reviews={service.reviews} />
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleSelengkapnya(service)}
                    className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  >
                    Selengkapnya →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-purple-50 py-16 border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-6 bg-white/95 rounded-lg shadow border border-purple-100 hover:shadow-xl hover:border-purple-300 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Mudah Diakses
              </h3>
              <p className="text-gray-800">
                Cari dan temukan layanan yang Anda butuhkan dengan mudah
              </p>
            </div>
            <div className="group p-6 bg-white/95 rounded-lg shadow border border-purple-100 hover:shadow-xl hover:border-purple-300 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Terverifikasi
              </h3>
              <p className="text-gray-800">
                Semua layanan telah diverifikasi oleh pemerintah lokal
              </p>
            </div>
            <div className="group p-6 bg-white/95 rounded-lg shadow border border-purple-100 hover:shadow-xl hover:border-purple-300 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Berdasarkan Review
              </h3>
              <p className="text-gray-800">
                Rating dari pengguna nyata yang telah mencoba layanan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedService.name}
          description={selectedService.description}
          detailedInfo={selectedService.detailedInfo}
          bannerUrl={selectedService.bannerUrl}
          location={selectedService.location}
          phone={selectedService.phone}
          email={selectedService.email}
          operatingHours={selectedService.operatingHours}
          facilities={selectedService.facilities}
        />
      )}
    </main>
  );
}
