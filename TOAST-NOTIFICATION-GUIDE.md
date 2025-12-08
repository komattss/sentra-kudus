# Toast Notification System - Panduan Penggunaan

## Overview

Sistem toast notification dengan 4 tipe notifikasi yang berbeda:

### 🟢 Success (Hijau)

- **Warna**: Hijau dengan icon CheckCircle
- **Penggunaan**: Ketika ada berita bagus atau sesuatu berhasil
- **Contoh**: Data berhasil disimpan, proses berhasil, operasi sukses

### 🟡 Warning (Kuning)

- **Warna**: Kuning dengan icon AlertTriangle
- **Penggunaan**: Peringatan atau hal yang perlu perhatian
- **Contoh**: Kualitas udara menurun, traffic padat, maintenance

### 🔴 Error (Merah)

- **Warna**: Merah dengan icon XCircle
- **Penggunaan**: Bahaya, gagal, atau error
- **Contoh**: Kualitas udara berbahaya, sistem error, data gagal dimuat

### 🟣 Info (Ungu)

- **Warna**: Ungu dengan icon Bell
- **Penggunaan**: Pesan masuk, informasi, live update
- **Contoh**: UMKM baru, update layanan, notifikasi pesan

## Cara Penggunaan

### 1. Import useToast hook

```tsx
import { useToast } from "@/components/ToastContainer";
```

### 2. Gunakan hook di component

```tsx
const { showSuccess, showWarning, showError, showInfo } = useToast();
```

### 3. Tampilkan notifikasi

```tsx
// Success
showSuccess("Berhasil!", "Data telah disimpan");

// Warning
showWarning("Peringatan", "Kualitas udara menurun");

// Error
showError("Gagal!", "Koneksi terputus");

// Info
showInfo("UMKM Baru", "Ada 3 UMKM baru di daerah Anda");
```

## Contoh Implementasi

### Air Quality Monitoring

```tsx
// Ketika AQI berbahaya (>200)
showError(
  "Bahaya! Kualitas Udara Buruk",
  "AQI di atas 200. Hindari aktivitas outdoor."
);

// Ketika AQI membaik
showSuccess(
  "Kualitas Udara Baik",
  "AQI kembali normal. Aman untuk aktivitas outdoor."
);

// Peringatan AQI sedang (100-200)
showWarning(
  "Peringatan Kualitas Udara",
  "AQI sedang. Kurangi aktivitas outdoor untuk grup sensitif."
);
```

### Smart Mobility

```tsx
// Traffic jam detected
showWarning(
  "Kemacetan Terdeteksi",
  "Jalan Raya Kudus mengalami kemacetan parah"
);

// Incident reported
showError(
  "Kecelakaan!",
  "Kecelakaan di Jalan Sunan Muria. Cari rute alternatif."
);

// Route optimization success
showSuccess(
  "Rute Optimal Ditemukan",
  "Rute tercepat: 15 menit via Jalan Getas"
);
```

### UMKM & Community Services

```tsx
// New UMKM registered
showInfo(
  "UMKM Baru Terdaftar",
  "Warung Soto Pak Kumis telah bergabung di platform"
);

// Service update
showInfo("Layanan Diperbarui", "Jadwal operasional bank sampah telah berubah");

// Booking success
showSuccess("Booking Berhasil", "Layanan perbaikan AC telah dijadwalkan");
```

## Parameter Opsional

### Duration

Anda bisa mengatur durasi tampilan toast (default: 5000ms):

```tsx
showSuccess("Berhasil!", "Data tersimpan", 3000); // 3 detik
showInfo("Update", "Ada pembaruan", 7000); // 7 detik
```

### Auto Dismiss

Toast akan otomatis hilang setelah duration selesai. User juga bisa menutup manual dengan klik tombol X.

## Styling

Toast menggunakan Tailwind CSS dengan:

- Border-left 4px untuk indikator warna
- Rounded corners (rounded-xl)
- Shadow untuk depth
- Animasi slide-in dari kanan
- Responsive design

## Best Practices

1. Gunakan success untuk feedback positif
2. Gunakan warning untuk hal yang perlu perhatian tapi tidak urgent
3. Gunakan error untuk kondisi berbahaya atau kegagalan
4. Gunakan info untuk notifikasi umum, update, dan pesan
5. Jangan spam notifikasi - batasi frekuensi munculnya
6. Gunakan pesan yang jelas dan singkat
