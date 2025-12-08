// Data dummy untuk layanan komunitas
export interface CommunityService {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  phone: string;
  email: string;
  rating: number;
  reviews: number;
  detailedInfo: string;
  bannerUrl: string;
  operatingHours: string;
  facilities: string[];
}

export const communityServices: CommunityService[] = [
  {
    id: 1,
    name: "Klinik Kesehatan Masyarakat",
    category: "Kesehatan",
    description:
      "Layanan kesehatan dasar untuk masyarakat umum dengan dokter profesional",
    location: "Jl. Merdeka No. 123, Sentrakudus",
    phone: "+62-274-123456",
    email: "klinik@sentrakudus.id",
    rating: 4.5,
    reviews: 128,
    detailedInfo:
      "Klinik Kesehatan Masyarakat menyediakan layanan pemeriksaan kesehatan umum, konsultasi dokter, pelayanan gawat darurat 24 jam, serta program vaksinasi untuk semua umur. Kami berkomitmen memberikan pelayanan kesehatan terbaik dengan tenaga medis profesional dan berpengalaman.\n\nKlinik kami dilengkapi dengan peralatan medis modern dan ruang tunggu yang nyaman. Tersedia juga layanan homecare untuk pasien yang membutuhkan perawatan di rumah.",
    bannerUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    operatingHours: "Senin - Minggu: 24 Jam",
    facilities: [
      "Ruang Pemeriksaan Umum",
      "Ruang Gawat Darurat",
      "Laboratorium",
      "Apotek",
      "Ruang Vaksinasi",
      "Layanan Homecare",
      "Ambulans Siaga",
      "Parkir Luas",
    ],
  },
  {
    id: 2,
    name: "Balai Pelatihan Keterampilan",
    category: "Pendidikan",
    description:
      "Program pelatihan gratis untuk pengembangan keterampilan masyarakat",
    location: "Jl. Pendidikan No. 456, Sentrakudus",
    phone: "+62-274-234567",
    email: "pelatihan@sentrakudus.id",
    rating: 4.3,
    reviews: 95,
    detailedInfo:
      "Balai Pelatihan Keterampilan menawarkan berbagai program pelatihan gratis untuk meningkatkan kompetensi masyarakat. Program mencakup pelatihan teknologi informasi, kewirausahaan, bahasa asing, dan keterampilan teknis lainnya.\n\nSetiap peserta yang menyelesaikan program akan mendapatkan sertifikat yang diakui secara nasional. Kami juga menyediakan bantuan penempatan kerja dan pendampingan usaha bagi alumni.",
    bannerUrl:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    operatingHours: "Senin - Jumat: 08.00 - 16.00 WIB",
    facilities: [
      "Ruang Kelas Ber-AC",
      "Lab Komputer",
      "Perpustakaan Digital",
      "Ruang Praktek",
      "WiFi Gratis",
      "Kantin",
      "Area Parkir",
      "Materi Pembelajaran Online",
    ],
  },
  {
    id: 3,
    name: "Taman Bermain Anak",
    category: "Rekreasi",
    description:
      "Taman bermain yang aman dan nyaman untuk anak-anak dengan berbagai wahana",
    location: "Jl. Wisata No. 789, Sentrakudus",
    phone: "+62-274-345678",
    email: "taman@sentrakudus.id",
    rating: 4.7,
    reviews: 234,
    detailedInfo:
      "Taman Bermain Anak adalah destinasi rekreasi keluarga yang menyediakan berbagai wahana permainan edukatif dan menyenangkan. Area bermain dirancang dengan standar keamanan internasional dan dilengkapi dengan petugas keamanan yang berjaga.\n\nTaman kami memiliki area hijau yang luas, tempat duduk untuk orang tua, dan food court dengan berbagai pilihan makanan sehat untuk anak-anak. Cocok untuk acara ulang tahun dan gathering keluarga.",
    bannerUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    operatingHours: "Senin - Minggu: 07.00 - 18.00 WIB",
    facilities: [
      "Wahana Permainan Anak",
      "Area Bermain Indoor",
      "Area Bermain Outdoor",
      "Flying Fox",
      "Kolam Bola",
      "Food Court",
      "Toilet Bersih",
      "Area Parkir Luas",
      "Mushola",
    ],
  },
  {
    id: 4,
    name: "Perpustakaan Umum",
    category: "Pendidikan",
    description:
      "Perpustakaan digital dan fisik dengan koleksi buku dan sumber pembelajaran",
    location: "Jl. Ilmu No. 234, Sentrakudus",
    phone: "+62-274-456789",
    email: "perpustakaan@sentrakudus.id",
    rating: 4.2,
    reviews: 178,
    detailedInfo:
      "Perpustakaan Umum Sentrakudus memiliki koleksi lebih dari 50.000 buku fisik dan akses ke ribuan e-book dan jurnal ilmiah. Kami menyediakan ruang baca yang nyaman dengan AC, pencahayaan yang baik, dan suasana yang kondusif untuk belajar.\n\nPerpustakaan juga mengadakan berbagai program literasi seperti diskusi buku, workshop menulis, dan program membaca untuk anak-anak. Keanggotaan gratis untuk semua warga Sentrakudus.",
    bannerUrl:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
    operatingHours: "Senin - Sabtu: 08.00 - 20.00 WIB",
    facilities: [
      "Ruang Baca Umum",
      "Ruang Baca Anak",
      "Area Diskusi",
      "Komputer Publik",
      "WiFi Gratis",
      "Akses E-book",
      "Layanan Pinjam Buku",
      "Fotokopi & Print",
      "Kantin",
    ],
  },
  {
    id: 5,
    name: "Pusat Olahraga Komunitas",
    category: "Olahraga",
    description:
      "Fasilitas olahraga lengkap dengan pelatih profesional untuk semua usia",
    location: "Jl. Atlet No. 567, Sentrakudus",
    phone: "+62-274-567890",
    email: "olahraga@sentrakudus.id",
    rating: 4.6,
    reviews: 156,
    detailedInfo:
      "Pusat Olahraga Komunitas menyediakan berbagai fasilitas olahraga modern untuk mendukung gaya hidup sehat masyarakat. Kami memiliki lapangan indoor dan outdoor untuk berbagai cabang olahraga.\n\nTersedia program olahraga terstruktur dengan pelatih bersertifikat untuk semua tingkat usia, mulai dari anak-anak hingga lansia. Biaya keanggotaan sangat terjangkau dengan berbagai paket pilihan.",
    bannerUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    operatingHours: "Senin - Minggu: 06.00 - 21.00 WIB",
    facilities: [
      "Lapangan Futsal",
      "Lapangan Basket",
      "Lapangan Badminton",
      "Fitness Center",
      "Kolam Renang",
      "Jogging Track",
      "Ruang Yoga & Aerobik",
      "Ruang Ganti",
      "Kantin Sehat",
      "Parkir Luas",
    ],
  },
  {
    id: 6,
    name: "Program Bimbingan Sosial",
    category: "Sosial",
    description:
      "Layanan konsultasi dan bimbingan sosial untuk keluarga dan individu",
    location: "Jl. Sosial No. 890, Sentrakudus",
    phone: "+62-274-678901",
    email: "sosial@sentrakudus.id",
    rating: 4.4,
    reviews: 87,
    detailedInfo:
      "Program Bimbingan Sosial menyediakan layanan konsultasi profesional untuk membantu mengatasi berbagai permasalahan sosial, keluarga, dan personal. Tim konselor kami terdiri dari psikolog, pekerja sosial, dan konselor bersertifikat.\n\nKami juga menyelenggarakan program pemberdayaan masyarakat, bantuan sosial untuk keluarga kurang mampu, dan pelatihan parenting. Semua layanan bersifat rahasia dan gratis untuk warga Sentrakudus.",
    bannerUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    operatingHours: "Senin - Jumat: 08.00 - 16.00 WIB",
    facilities: [
      "Ruang Konsultasi Privat",
      "Ruang Konseling Keluarga",
      "Ruang Pelatihan",
      "Hotline 24 Jam",
      "Layanan Home Visit",
      "Perpustakaan Referensi",
      "Area Bermain Anak",
      "Ruang Tunggu Nyaman",
    ],
  },
];
