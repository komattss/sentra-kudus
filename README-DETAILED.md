# 🏙️ Sentrakudus Superapp - Prototype

Platform superapp terpadu untuk layanan kota pintar Sentrakudus. Aplikasi web interaktif yang menampilkan 4 fitur utama dalam satu dashboard.

## ✨ Fitur Utama

### 1. 👥 Layanan Komunitas

- Akses berbagai layanan publik (kesehatan, pendidikan, sosial, olahraga, rekreasi)
- Informasi lengkap tentang lokasi, jam operasional, dan kontak
- Rating dan review dari pengguna
- Filter berdasarkan kategori layanan

### 2. 💨 Monitoring Kualitas Udara

- Monitor kualitas udara real-time di berbagai lokasi
- Data detail tentang polutan (PM2.5, PM10, O₃, NO₂, SO₂, CO)
- Status AQI (Air Quality Index) dengan rekomendasi kesehatan
- Visualisasi interaktif dengan peta mock
- 5 stasiun monitoring di berbagai area kota

### 3. 🏪 Peta UMKM

- Jelajahi 8+ UMKM lokal dari berbagai kategori
- Filter berdasarkan jenis bisnis (makanan, kerajinan, furnitur, dll)
- Detail lengkap setiap UMKM (lokasi, jam operasional, kontak, website)
- Peta interaktif dengan marker lokasi
- Rating dan review dari customer

### 4. 🚗 Smart Mobility & Traffic

- Informasi lalu lintas real-time 5 jalan utama
- Status kemacetan (Lancar, Normal, Padat, Macet)
- Rekomendasi rute alternatif
- Opsi transportasi (Bus, Angkot, Ojek, Taksi, Bike Sharing)
- Waktu tunggu dan jumlah kendaraan aktif

## 🏗️ Struktur Project

```
superapp-prototype/
├── app/
│   ├── layout.tsx              # Layout utama dengan Navbar
│   ├── globals.css             # CSS global dengan tema
│   ├── page.tsx                # Home landing page
│   ├── community/
│   │   └── page.tsx            # Halaman Layanan Komunitas
│   ├── air-monitoring/
│   │   └── page.tsx            # Halaman Monitoring Udara
│   ├── umkm-map/
│   │   └── page.tsx            # Halaman Peta UMKM
│   └── smart-mobility/
│       └── page.tsx            # Halaman Smart Mobility
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── ServiceCard.tsx         # Card untuk fitur di home
│   ├── StatBox.tsx             # Box untuk statistik
│   ├── Badge.tsx               # Badge untuk kategori
│   ├── Rating.tsx              # Rating stars & review count
│   └── Loading.tsx             # Loading placeholder
├── data/
│   ├── communityServices.ts    # Data dummy layanan komunitas
│   ├── airQuality.ts           # Data dummy kualitas udara
│   ├── umkm.ts                 # Data dummy UMKM
│   └── traffic.ts              # Data dummy lalu lintas
├── lib/
│   └── (utilities akan ditambahkan sesuai kebutuhan)
├── public/
│   ├── icons/                  # Icon assets
│   └── images/                 # Image assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🚀 Cara Menjalankan

### Prerequisites

- Node.js 18+
- npm atau yarn

### Instalasi & Jalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Start production server
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ dengan App Router
- **UI Framework**: React 19+
- **Styling**: Tailwind CSS 4 + CSS Modules
- **Language**: TypeScript
- **Font**: Geist (Google Fonts)

## 📋 Interface Components

### Reusable Components

1. **Navbar** - Navigation header dengan responsive mobile menu
2. **ServiceCard** - Card untuk menampilkan fitur layanan
3. **Badge** - Label dengan berbagai warna
4. **Rating** - Star rating dengan jumlah review
5. **StatBox** - Box untuk menampilkan statistik
6. **Loading** - Loading placeholder

## 📊 Data Structure

### Community Services

- ID, Nama, Kategori, Deskripsi
- Lokasi, Nomor Telepon, Email
- Rating dan Review Count

### Air Quality

- Lokasi, Koordinat (lat/long)
- AQI, PM2.5, PM10, O₃, NO₂, SO₂, CO
- Status (Baik, Sedang, Tidak Sehat, Sangat Tidak Sehat)
- Timestamp

### UMKM

- ID, Nama, Kategori, Deskripsi
- Koordinat lokasi, Alamat
- Kontak, Website, Jam Operasional
- Rating, Review Count, Emoji Icon

### Traffic

- Nama Jalan, Koordinat
- Tingkat Kemacetan, Kecepatan Rata-rata, Kepadatan
- Opsi Transportasi dengan info kendaraan aktif & waktu tunggu

## 🎨 Tema & Styling

### Warna Utama

- **Primary**: Blue (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Orange (#f59e0b)
- **Danger**: Red (#ef4444)

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface

## 📝 Catatan Pengembangan

### Status: Prototype

- Fitur ditampilkan dengan data dummy (tidak ada database)
- Map placeholder (untuk integrasi dengan Google Maps atau Mapbox di masa depan)
- Interaksi UI sudah tersedia (filter, select, dll)

### Siap untuk Dikembangkan

- Integrasi dengan backend API
- Koneksi ke database real
- Google Maps API untuk lokasi UMKM & traffic
- Real-time data dari sensor kualitas udara
- Authentication & user accounts
- Dark mode full integration

## 📧 Kontak & Support

Email: info@sentrakudus.id  
Telepon: +62-274-000000

## 📄 Lisensi

© 2024 Sentrakudus Superapp. All rights reserved.

---

**Made with ❤️ for Smart City Sentrakudus**
