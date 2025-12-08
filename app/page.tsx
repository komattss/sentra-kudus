"use client";

import ServiceCard from "@/components/ServiceCard";
import FeatureModal from "@/components/FeatureModal";
import { homeFeatures } from "@/data/homeFeatures";
import Image from "next/image";
import { useState } from "react";
import {
  CheckCircle,
  Zap,
  Shield,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Users,
  Cloud,
  ShoppingCart,
  Star as StarIcon,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Wind,
} from "lucide-react";

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<
    (typeof homeFeatures)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (feature: (typeof homeFeatures)[0]) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const getFeatureIcon = (id: number) => {
    switch (id) {
      case 1:
        return "<svg class='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' /></svg>";
      case 2:
        return "<svg class='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2' /></svg>";
      case 3:
        return "<svg class='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' /></svg>";
      case 4:
        return "<svg class='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M5 17H3v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2' /></svg>";
      default:
        return "<svg class='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z' /></svg>";
    }
  };

  return (
    <main className="min-h-screen pt-18 pb-12 bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/backgroundsentra.jpg"
            alt="Sentrakudus Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Gradient Overlay untuk keterbacaan teks */}
          <div className="absolute inset-0 bg-linear-to-br from-sage-600/90 via-sage-700/88 to-sage-900/92"></div>
          {/* Vignette to darken edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.7)_100%)]"></div>
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-8 animate-scale-in">
              <Image
                src="/sentrakuduslogo.png"
                alt="Logo Sentrakudus"
                width={84}
                height={84}
                className="mx-auto drop-shadow-lg object-contain"
                priority
              />
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] animate-fade-in tracking-tight">
              Sentrakudus
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)] font-light animate-slide-up">
              Platform terpadu untuk layanan kota pintar Sentrakudus. Akses
              semua layanan publik, informasi udara, bisnis lokal, dan mobilitas
              dalam satu aplikasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slide-up">
              <button className="border-2 border-white/80 bg-linear-to-r from-sage-400 via-sage-500 to-sage-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/15 hover:border-white transition-all duration-300 shadow-xl hover:scale-105 animate-fade-in">
                Mulai Sekarang →
              </button>
              <button className="border-2 border-white/80 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/15 transition-all duration-300 shadow-xl hover:border-white hover:scale-105 animate-fade-in">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white/90 border border-sage-100 shadow-lg rounded-3xl p-10 backdrop-blur-sm">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 text-gray-900 tracking-tight">
              Fitur Unggulan
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto leading-relaxed">
              Jelajahi berbagai layanan yang dirancang untuk memudahkan hidup
              Anda dan mewujudkan kota pintar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeFeatures.map((feature) => (
              <ServiceCard
                key={feature.id}
                icon={getFeatureIcon(feature.id)}
                title={feature.title}
                description={feature.description}
                href={feature.href}
                color={feature.color}
                onLearnMore={() => handleLearnMore(feature)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-sage-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in bg-white/95 rounded-3xl border-2 border-sage-200 shadow-lg p-12 backdrop-blur-sm">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 text-gray-900 tracking-tight">
              Statistik Sentrakudus
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Platform yang dipercaya oleh ribuan pengguna untuk mengakses
              layanan kota pintar
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center p-8 bg-white rounded-2xl border-2 border-red-500 shadow-md hover:shadow-xl transition-all duration-300 hover:shadow-red-200 animate-slide-up hover:scale-105">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-all">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-3">
                100+
              </p>
              <p className="text-red-700 font-semibold text-sm sm:text-base">
                Layanan Publik
              </p>
            </div>
            <div
              className="group text-center p-8 bg-white rounded-2xl border-2 border-yellow-500 shadow-md hover:shadow-xl transition-all duration-300 hover:shadow-yellow-200 animate-slide-up hover:scale-105"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-100 transition-all">
                <Cloud className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-3">
                50
              </p>
              <p className="text-yellow-700 font-semibold text-sm sm:text-base">
                Titik Monitoring
              </p>
            </div>
            <div
              className="group text-center p-8 bg-white rounded-2xl border-2 border-green-500 shadow-md hover:shadow-xl transition-all duration-300 hover:shadow-green-200 animate-slide-up hover:scale-105"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-all">
                <ShoppingCart className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-3">
                500+
              </p>
              <p className="text-green-700 font-semibold text-sm sm:text-base">
                UMKM Terdaftar
              </p>
            </div>
            <div
              className="group text-center p-8 bg-white rounded-2xl border-2 border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 hover:shadow-blue-200 animate-slide-up hover:scale-105"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-all">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-3">
                24/7
              </p>
              <p className="text-blue-700 font-semibold text-sm sm:text-base">
                Real-time Data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16 animate-fade-in bg-white/95 rounded-3xl border-2 border-sage-200 shadow-lg p-12 backdrop-blur-sm">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 text-gray-900 tracking-tight">
            Kenapa Memilih Sentrakudus?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Platform yang dirancang dengan fokus pada kemudahan, kecepatan, dan
            keamanan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative p-8 bg-white rounded-2xl shadow-md border-2 border-green-200 hover:shadow-xl hover:border-green-400 transition-all duration-300 hover:scale-105 animate-slide-up">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
              <CheckCircle className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Terpusat & Mudah
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Semua layanan dalam satu aplikasi, tidak perlu lagi aplikasi
              terpisah
            </p>
          </div>
          <div
            className="group relative p-8 bg-white rounded-2xl shadow-md border-2 border-yellow-200 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300">
              <Zap className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Cepat & Real-time
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Informasi terbaru dan akurat diperbarui secara real-time
            </p>
          </div>
          <div
            className="group relative p-8 bg-white rounded-2xl shadow-md border-2 border-blue-200 hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
              <Shield className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Aman & Terpercaya
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Data Anda dilindungi dengan enkripsi tingkat tinggi
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-sage-700 py-24 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
              Jadilah Bagian dari Kota Cerdas Kudus
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto leading-relaxed">
              Sentrakudus Superapp hadir untuk memudahkan hidup Anda. Satu
              aplikasi, semua layanan kota, informasi, dan UMKM Kudus. Aman,
              mudah, dan ramah lingkungan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group relative p-8 bg-white/95 rounded-2xl shadow-lg border-2 border-white hover:shadow-2xl hover:bg-white transition-all duration-300 hover:scale-105 animate-slide-up">
              <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-600 group-hover:scale-110 transition-all duration-300">
                <Users className="w-7 h-7 text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">50K+</h3>
              <p className="text-black leading-relaxed">Pengguna Aktif</p>
            </div>
            <div
              className="group relative p-8 bg-white/95 rounded-2xl shadow-lg border-2 border-white hover:shadow-2xl hover:bg-white transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-600 group-hover:scale-110 transition-all duration-300">
                <StarIcon className="w-7 h-7 text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">4.8⭐</h3>
              <p className="text-black leading-relaxed">Rating Aplikasi</p>
            </div>
            <div
              className="group relative p-8 bg-white/95 rounded-2xl shadow-lg border-2 border-white hover:shadow-2xl hover:bg-white transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-600 group-hover:scale-110 transition-all duration-300">
                <Shield className="w-7 h-7 text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">24/7</h3>
              <p className="text-black leading-relaxed">Layanan Aktif</p>
            </div>
          </div>
          <div className="text-center mb-8">
            <button className="bg-white text-black px-12 py-4 rounded-xl font-bold text-lg hover:bg-sage-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
              Mulai Eksplorasi Sekarang →
            </button>
          </div>
          <div className="text-center text-black text-base">
            <span>
              Dapatkan kemudahan akses layanan publik, info kota, dan UMKM hanya
              di Sentrakudus. Bersama, kita wujudkan Kudus yang lebih hijau,
              cerdas, dan terhubung.
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-linear-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Image
                    src="/sentrakuduslogo.png"
                    alt="Logo Sentrakudus"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl text-gray-800">
                  SENTRAKUDUS
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Platform inovatif untuk mengakses layanan kota pintar Kudus
                dengan mudah dan cepat
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-sage-500 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-600 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                  aria-label="X"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.308l7.725-8.835L.424 2.25h6.7l4.8 6.35 5.52-6.35zm-1.06 17.03h1.828L5.884 3.986H3.922L17.184 19.28z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-sage-500 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-600 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-base">
                Layanan
              </h4>
              <ul className="text-gray-600 space-y-3 text-sm">
                <li>
                  <a
                    href="/community"
                    className="hover:text-gray-900 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-gray-500 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <span>Services & Community</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/air-monitoring"
                    className="hover:text-gray-900 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-gray-500 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <span>Air Quality</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/umkm-map"
                    className="hover:text-gray-900 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-gray-500 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <span>UMKM Map</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/smart-mobility"
                    className="hover:text-gray-900 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-gray-500 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <span>Smart Mobility</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-base">
                Tentang
              </h4>
              <ul className="text-gray-600 space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Tim Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-base">Kontak</h4>
              <ul className="text-gray-600 space-y-4 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-gray-600 mt-0.5" />
                  <span>info@sentrakudus.id</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-gray-600 mt-0.5" />
                  <span>+62 291 123456</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
                  <span>Kudus, Jawa Tengah</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm font-medium">
                © {new Date().getFullYear()} Sentrakudus Superapp. All rights
                reserved.
              </p>
              <div className="flex gap-4 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Kebijakan Privasi
                </a>
                <span className="text-gray-300">|</span>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Syarat & Ketentuan
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Feature Modal */}
      {selectedFeature && (
        <FeatureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedFeature.title}
          description={selectedFeature.description}
          detailedInfo={selectedFeature.detailedInfo}
          bannerUrl={selectedFeature.bannerUrl}
          keyFeatures={selectedFeature.keyFeatures}
          benefits={selectedFeature.benefits}
          href={selectedFeature.href}
        />
      )}
    </main>
  );
}
