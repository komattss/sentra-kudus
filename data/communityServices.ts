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
  },
];
