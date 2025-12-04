import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 pb-12 bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-6">
              <svg
                className="w-16 h-16 text-white mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Cepat & Real-time
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Informasi terbaru dan akurat diperbarui secara real-time
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] rounded-xl flex items-center justify-center mb-6">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
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
              <svg
                className="w-10 h-10 text-white"
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
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
                  <svg
                    className="w-5 h-5 text-[#8b9e7d] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@sentrakudus.id</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#8b9e7d] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+62 291 123456</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-[#8b9e7d] mt-0.5"
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
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8b9e7d] transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#8b9e7d] transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
