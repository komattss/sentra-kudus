import ServiceCard from "@/components/ServiceCard";
import {
  Building2,
  CheckCircle,
  Zap,
  Shield,
  Lock,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 pb-12 bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-6">
              <Building2
                className="w-16 h-16 text-white mx-auto"
                strokeWidth={1.5}
              />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Sentrakudus Superapp
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Platform terpadu untuk layanan kota pintar Sentrakudus. Akses
              semua layanan publik, informasi udara, bisnis lokal, dan mobilitas
              dalam satu aplikasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#6b7a5e] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl">
                Mulai Sekarang
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jelajahi berbagai layanan yang dirancang untuk memudahkan hidup Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon="<svg class='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' /></svg>"
            title="Layanan Komunitas"
            description="Akses layanan kesehatan, pendidikan, dan sosial dari pemerintah"
            href="/community"
            color="bg-linear-to-br from-purple-500 to-purple-600"
          />
          <ServiceCard
            icon="<svg class='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' /></svg>"
            title="Monitoring Udara"
            description="Pantau kualitas udara real-time di berbagai lokasi kota"
            href="/air-monitoring"
            color="bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e]"
          />
          <ServiceCard
            icon="<svg class='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' /></svg>"
            title="Peta UMKM"
            description="Temukan bisnis lokal, UMKM, dan produk unggulan daerah"
            href="/umkm-map"
            color="bg-linear-to-br from-orange-500 to-orange-600"
          />
          <ServiceCard
            icon="<svg class='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z' /></svg>"
            title="Smart Mobility"
            description="Informasi lalu lintas real-time dan opsi transportasi terbaik"
            href="/smart-mobility"
            color="bg-linear-to-br from-red-500 to-red-600"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <p className="text-5xl font-bold text-[#8b9e7d] mb-3">100+</p>
              <p className="text-gray-600 font-medium">Layanan Publik</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <p className="text-5xl font-bold text-[#8b9e7d] mb-3">50</p>
              <p className="text-gray-600 font-medium">Titik Monitoring</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <p className="text-5xl font-bold text-[#8b9e7d] mb-3">500+</p>
              <p className="text-gray-600 font-medium">UMKM Terdaftar</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <p className="text-5xl font-bold text-[#8b9e7d] mb-3">24/7</p>
              <p className="text-gray-600 font-medium">Real-time Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
          Kenapa Memilih Sentrakudus Superapp?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] rounded-xl flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Terpusat & Mudah
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Semua layanan dalam satu aplikasi, tidak perlu lagi aplikasi
              terpisah
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Cepat & Real-time
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Informasi terbaru dan akurat diperbarui secara real-time
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Aman & Terpercaya
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Data Anda dilindungi dengan enkripsi tingkat tinggi
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Wujudkan Kota Cerdas Bersama
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan warga yang telah merasakan transformasi
              digital kota Kudus
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Pengguna Aktif</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">4.8★</div>
              <div className="text-white/80">Rating Aplikasi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Layanan Aktif</div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-white text-[#6b7a5e] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-xl">
              Mulai Eksplorasi →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-800">
                  SENTRAKUDUS
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Platform inovatif untuk mengakses layanan kota pintar Kudus
                dengan mudah dan cepat
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Layanan</h4>
              <ul className="text-gray-600 space-y-3 text-sm">
                <li>
                  <a
                    href="/community"
                    className="hover:text-[#8b9e7d] transition flex items-center gap-2"
                  >
                    <span className="text-[#8b9e7d]">→</span> Services &
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="/air-monitoring"
                    className="hover:text-[#8b9e7d] transition flex items-center gap-2"
                  >
                    <span className="text-[#8b9e7d]">→</span> Air Quality
                  </a>
                </li>
                <li>
                  <a
                    href="/umkm-map"
                    className="hover:text-[#8b9e7d] transition flex items-center gap-2"
                  >
                    <span className="text-[#8b9e7d]">→</span> UMKM Map
                  </a>
                </li>
                <li>
                  <a
                    href="/smart-mobility"
                    className="hover:text-[#8b9e7d] transition flex items-center gap-2"
                  >
                    <span className="text-[#8b9e7d]">→</span> Smart Mobility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Tentang</h4>
              <ul className="text-gray-600 space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-[#8b9e7d] transition">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8b9e7d] transition">
                    Tim Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8b9e7d] transition">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#8b9e7d] transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Kontak</h4>
              <ul className="text-gray-600 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-[#8b9e7d] mt-0.5" />
                  <span>info@sentrakudus.id</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-[#8b9e7d] mt-0.5" />
                  <span>+62 291 123456</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#8b9e7d] mt-0.5" />
                  <span>Kudus, Jawa Tengah</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                &copy; 2024 Sentrakudus Superapp. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8b9e7d] transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8b9e7d] transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8b9e7d] transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
