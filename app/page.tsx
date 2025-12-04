import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import {
  CheckCircle,
  Zap,
  Shield,
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
          <div className="absolute inset-0 bg-linear-to-br from-[#8b9e7d]/90 via-[#6b7a5e]/85 to-[#5a6850]/90"></div>
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-5 bg-white/20 rounded-3xl backdrop-blur-md mb-8 shadow-2xl border border-white/30">
              <Image
                src="/logo-sentrakudus.svg"
                alt="Logo Sentrakudus"
                width={72}
                height={72}
                className="mx-auto drop-shadow-lg"
                priority
              />
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 drop-shadow-lg">
              Sentrakudus Superapp
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md font-light">
              Platform terpadu untuk layanan kota pintar Sentrakudus. Akses
              semua layanan publik, informasi udara, bisnis lokal, dan mobilitas
              dalam satu aplikasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="bg-white text-[#6b7a5e] px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
                Mulai Sekarang →
              </button>
              <button className="border-2 border-white/80 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-md shadow-xl hover:border-white">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#8b9e7d]/10 text-[#6b7a5e] rounded-full text-sm font-semibold mb-4">
            ✨ Layanan Kami
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 text-gray-900">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Jelajahi berbagai layanan yang dirancang untuk memudahkan hidup Anda
            dan mewujudkan kota pintar
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
      <section className="bg-linear-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <p className="text-5xl sm:text-6xl font-bold text-[#8b9e7d] mb-3">
                100+
              </p>
              <p className="text-gray-700 font-semibold text-sm sm:text-base">
                Layanan Publik
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <p className="text-5xl sm:text-6xl font-bold text-[#8b9e7d] mb-3">
                50
              </p>
              <p className="text-gray-700 font-semibold text-sm sm:text-base">
                Titik Monitoring
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <p className="text-5xl sm:text-6xl font-bold text-[#8b9e7d] mb-3">
                500+
              </p>
              <p className="text-gray-700 font-semibold text-sm sm:text-base">
                UMKM Terdaftar
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <p className="text-5xl sm:text-6xl font-bold text-[#8b9e7d] mb-3">
                24/7
              </p>
              <p className="text-gray-700 font-semibold text-sm sm:text-base">
                Real-time Data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#8b9e7d]/10 text-[#6b7a5e] rounded-full text-sm font-semibold mb-4">
            ✨ Keunggulan
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 text-gray-900">
            Kenapa Memilih Sentrakudus?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platform yang dirancang dengan fokus pada kemudahan, kecepatan, dan
            keamanan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-[#8b9e7d]/30 transition-all duration-300">
            <div className="w-16 h-16 bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <CheckCircle className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Terpusat & Mudah
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Semua layanan dalam satu aplikasi, tidak perlu lagi aplikasi
              terpisah
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-[#8b9e7d]/30 transition-all duration-300">
            <div className="w-16 h-16 bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Zap className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Cepat & Real-time
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Informasi terbaru dan akurat diperbarui secara real-time
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-[#8b9e7d]/30 transition-all duration-300">
            <div className="w-16 h-16 bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Shield className="w-9 h-9 text-white" />
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
      <section className="relative bg-linear-to-br from-[#8b9e7d] via-[#7a8c6e] to-[#6b7a5e] text-white py-28 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl mb-8 shadow-2xl border border-white/30">
              <Zap className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-lg">
              Wujudkan Kota Cerdas Bersama
            </h2>
            <p className="text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Bergabunglah dengan ribuan warga yang telah merasakan transformasi
              digital kota Kudus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
              <div className="text-4xl font-bold mb-2 drop-shadow-md">50K+</div>
              <div className="text-white/90 font-medium">Pengguna Aktif</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
              <div className="text-4xl font-bold mb-2 drop-shadow-md">
                4.8⭐
              </div>
              <div className="text-white/90 font-medium">Rating Aplikasi</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
              <div className="text-4xl font-bold mb-2 drop-shadow-md">24/7</div>
              <div className="text-white/90 font-medium">Layanan Aktif</div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-[#6b7a5e] px-12 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:scale-105 hover:shadow-3xl">
              Mulai Eksplorasi Sekarang →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] rounded-xl flex items-center justify-center shadow-lg">
                  <Image
                    src="/logo-sentrakudus.svg"
                    alt="Logo Sentrakudus"
                    width={28}
                    height={28}
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
                  className="w-10 h-10 bg-gray-100 hover:bg-[#8b9e7d] rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-[#8b9e7d] rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-[#8b9e7d] rounded-lg flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
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
                    className="hover:text-[#8b9e7d] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#8b9e7d] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <span>Services & Community</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/air-monitoring"
                    className="hover:text-[#8b9e7d] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#8b9e7d] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <span>Air Quality</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/umkm-map"
                    className="hover:text-[#8b9e7d] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#8b9e7d] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <span>UMKM Map</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/smart-mobility"
                    className="hover:text-[#8b9e7d] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#8b9e7d] group-hover:translate-x-1 transition-transform">
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
                  <a
                    href="#"
                    className="hover:text-[#8b9e7d] transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#8b9e7d] transition-colors"
                  >
                    Tim Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#8b9e7d] transition-colors"
                  >
                    Karir
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#8b9e7d] transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-base">Kontak</h4>
              <ul className="text-gray-600 space-y-4 text-sm">
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
          <div className="border-t border-gray-200 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm font-medium">
                © {new Date().getFullYear()} Sentrakudus Superapp. All rights
                reserved.
              </p>
              <div className="flex gap-4 text-sm text-gray-600">
                <a href="#" className="hover:text-[#8b9e7d] transition-colors">
                  Kebijakan Privasi
                </a>
                <span className="text-gray-300">|</span>
                <a href="#" className="hover:text-[#8b9e7d] transition-colors">
                  Syarat & Ketentuan
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
