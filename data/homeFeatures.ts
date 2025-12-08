// Data untuk fitur unggulan di homepage
export interface HomeFeature {
  id: number;
  title: string;
  description: string;
  href: string;
  color: string;
  detailedInfo: string;
  bannerUrl: string;
  keyFeatures: string[];
  benefits: string[];
}

export const homeFeatures: HomeFeature[] = [
  {
    id: 1,
    title: "Services & Community",
    description:
      "Akses layanan kesehatan, pendidikan, dan sosial dari pemerintah",
    href: "/community",
    color: "bg-linear-to-br from-purple-500 to-purple-600 text-white",
    detailedInfo:
      "Platform Services & Community Sentrakudus menghubungkan Anda dengan berbagai layanan publik yang dikelola oleh pemerintah daerah. Dari layanan kesehatan hingga pendidikan, semua dapat diakses dengan mudah melalui satu aplikasi.\n\nKami menyediakan informasi lengkap tentang setiap layanan, termasuk lokasi, jam operasional, kontak, dan review dari pengguna lain. Sistem rating dan review membantu Anda membuat keputusan yang tepat dalam memilih layanan yang sesuai dengan kebutuhan Anda.",
    bannerUrl:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80",
    keyFeatures: [
      "Database lengkap layanan publik",
      "Sistem rating dan review terpercaya",
      "Informasi kontak dan lokasi akurat",
      "Kategori terorganisir dengan baik",
      "Update informasi secara real-time",
      "Akses mudah untuk semua kalangan",
    ],
    benefits: [
      "Hemat waktu mencari informasi layanan",
      "Dapatkan layanan berkualitas berdasarkan review",
      "Akses informasi kapan saja, dimana saja",
      "Transparansi pelayanan publik",
      "Kemudahan komunikasi dengan penyedia layanan",
    ],
  },
  {
    id: 2,
    title: "Air Quality",
    description: "Pantau kualitas udara real-time di berbagai lokasi kota",
    href: "/air-monitoring",
    color: "bg-linear-to-br from-green-500 to-green-600 text-white",
    detailedInfo:
      "Sistem Air Quality Monitoring Sentrakudus menyediakan data kualitas udara real-time dari berbagai stasiun monitoring yang tersebar di seluruh kota. Anda dapat melihat indeks kualitas udara (AQI), tingkat polutan seperti PM2.5, PM10, O₃, NO₂, SO₂, dan CO.\n\nSistem kami memberikan peringatan otomatis ketika kualitas udara mencapai level yang tidak sehat, sehingga Anda dapat mengambil tindakan pencegahan yang diperlukan. Data ditampilkan dalam format yang mudah dipahami dengan visualisasi peta interaktif.",
    bannerUrl:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    keyFeatures: [
      "Monitoring kualitas udara real-time",
      "7 stasiun monitoring tersebar di kota",
      "Data 6 jenis polutan udara",
      "Visualisasi peta interaktif",
      "Notifikasi peringatan otomatis",
      "Rekomendasi kesehatan berdasarkan AQI",
      "Historical data untuk analisis trend",
    ],
    benefits: [
      "Lindungi kesehatan Anda dan keluarga",
      "Rencanakan aktivitas outdoor dengan bijak",
      "Hindari paparan polusi berbahaya",
      "Data akurat untuk keputusan yang tepat",
      "Berkontribusi pada lingkungan yang lebih sehat",
    ],
  },
  {
    id: 3,
    title: "Peta UMKM",
    description: "Temukan bisnis lokal, UMKM, dan produk unggulan daerah",
    href: "/umkm-map",
    color: "bg-linear-to-br from-orange-500 to-orange-600 text-white",
    detailedInfo:
      "Peta UMKM Sentrakudus adalah direktori digital yang menampilkan seluruh usaha mikro, kecil, dan menengah di wilayah Kudus. Aplikasi ini membantu Anda menemukan produk lokal berkualitas, mendukung ekonomi lokal, dan mempromosikan UMKM kepada pasar yang lebih luas.\n\nSetiap UMKM memiliki profil lengkap dengan informasi produk, harga, lokasi, kontak, dan review dari pembeli. Anda dapat melihat lokasi UMKM pada peta interaktif dan mendapatkan rute menuju lokasi tersebut.",
    bannerUrl:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
    keyFeatures: [
      "Database 500+ UMKM terdaftar",
      "Peta lokasi interaktif dengan GPS",
      "Kategori produk beragam",
      "Sistem rating dan review",
      "Fitur kontak langsung (WhatsApp, Telepon)",
      "Profil lengkap setiap UMKM",
      "Filter pencarian berdasarkan kategori",
    ],
    benefits: [
      "Dukung ekonomi lokal dan UMKM",
      "Temukan produk berkualitas dari tetangga",
      "Belanja dengan mudah dan praktis",
      "Promosi UMKM lebih luas",
      "Transparansi harga dan kualitas produk",
    ],
  },
  {
    id: 4,
    title: "Smart Mobility",
    description:
      "Informasi lalu lintas real-time dan opsi transportasi terbaik",
    href: "/smart-mobility",
    color: "bg-linear-to-br from-red-500 to-red-600 text-white",
    detailedInfo:
      "Smart Mobility Sentrakudus menyediakan informasi lalu lintas secara real-time untuk membantu Anda merencanakan perjalanan dengan lebih efisien. Sistem ini menampilkan kondisi jalan, tingkat kemacetan, dan estimasi waktu tempuh.\n\nFitur ini juga menyediakan informasi tentang opsi transportasi publik yang tersedia, rute alternatif, dan rekomendasi waktu terbaik untuk perjalanan. Dengan data yang akurat, Anda dapat menghemat waktu dan bahan bakar, serta mengurangi stress di jalan.",
    bannerUrl:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    keyFeatures: [
      "Monitoring lalu lintas real-time",
      "Peta kondisi jalan interaktif",
      "Notifikasi kemacetan otomatis",
      "Informasi transportasi publik",
      "Rekomendasi rute alternatif",
      "Estimasi waktu perjalanan",
      "Data historis untuk prediksi",
    ],
    benefits: [
      "Hemat waktu perjalanan",
      "Hindari kemacetan",
      "Kurangi konsumsi bahan bakar",
      "Rencanakan perjalanan lebih baik",
      "Berkontribusi pada mobilitas kota yang lebih lancar",
    ],
  },
];
