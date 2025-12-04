# Cara Menambahkan Logo/Foto di Halaman Home

## 📋 Langkah-langkah:

### 1. **Siapkan File Logo Anda**

Pastikan Anda memiliki file logo dalam format:

- **PNG** (rekomendasi - mendukung transparansi)
- **JPG/JPEG**
- **SVG** (vektor, ukuran file kecil)
- **WEBP** (modern, optimal)

**Ukuran rekomendasi:**

- Logo besar (hero): minimal 256x256px
- Logo kecil (navbar/footer): minimal 64x64px

---

### 2. **Letakkan File Logo di Folder Public**

Simpan file logo Anda di:

```
c:\PROJECT\sentrakudus-superapp\superapp-prototype\public\
```

**Contoh nama file:**

- `logo-sentrakudus.png`
- `logo-sentrakudus.svg`
- `logo.png`

---

### 3. **Update Nama File di Kode (Jika Berbeda)**

Saya sudah mengupdate 3 lokasi di kode yang menggunakan logo:

#### **A. Hero Section (Halaman Home - Besar)**

File: `app/page.tsx` (baris ~23-33)

Jika nama file logo Anda berbeda dari `logo-sentrakudus.png`, ganti di sini:

```tsx
<Image
  src="/logo-sentrakudus.png" // ← GANTI dengan nama file Anda
  alt="Logo Sentrakudus"
  width={64}
  height={64}
  className="mx-auto"
  priority
/>
```

#### **B. Navbar (Kiri Atas)**

File: `components/Navbar.tsx` (baris ~23-32)

```tsx
<Image
  src="/logo-sentrakudus.png" // ← GANTI dengan nama file Anda
  alt="Logo Sentrakudus"
  width={24}
  height={24}
/>
```

#### **C. Footer (Bawah Halaman)**

File: `app/page.tsx` (baris ~214-223)

```tsx
<Image
  src="/logo-sentrakudus.png" // ← GANTI dengan nama file Anda
  alt="Logo Sentrakudus"
  width={24}
  height={24}
/>
```

---

### 4. **Sesuaikan Ukuran Logo (Opsional)**

Anda bisa mengubah ukuran logo dengan mengatur `width` dan `height`:

**Logo Hero (Besar):**

```tsx
width={64}   // 64px = icon standard
height={64}  // bisa diperbesar jadi 80, 96, 128, dll
```

**Logo Navbar/Footer (Kecil):**

```tsx
width={24}   // 24px = icon kecil
height={24}  // bisa disesuaikan
```

---

### 5. **Test Aplikasi**

Jalankan development server untuk melihat hasilnya:

```bash
npm run dev
```

Buka browser: `http://localhost:3000`

---

## 🎨 Tips Desain Logo:

### **Untuk Background Hijau Sage:**

- Logo dengan background **transparan** (PNG) lebih bagus
- Warna logo sebaiknya **putih** atau **cream/light** agar kontras di background hijau
- Jika logo berwarna gelap, tambahkan padding/border putih

### **Contoh Kode untuk Logo Bundar:**

```tsx
<div className="inline-block p-4 bg-white/20 rounded-full backdrop-blur-sm mb-6">
  <Image
    src="/logo-sentrakudus.png"
    alt="Logo Sentrakudus"
    width={80}
    height={80}
    className="mx-auto rounded-full"
  />
</div>
```

---

## 🔧 Troubleshooting:

### **Logo tidak muncul?**

1. ✅ Pastikan file ada di folder `public/`
2. ✅ Nama file harus **sama persis** (case-sensitive)
3. ✅ Restart development server (`Ctrl+C` lalu `npm run dev`)

### **Logo terlalu besar/kecil?**

- Ubah nilai `width` dan `height` di `<Image>` component

### **Logo blur/pecah?**

- Gunakan file dengan resolusi lebih tinggi (minimal 2x ukuran tampilan)
- Contoh: untuk tampilan 64px, gunakan file 128px atau lebih

### **Ingin kembali ke icon Building2?**

Uncomment baris yang ada comment `{/* Backup icon: ... */}` dan hapus `<Image>` component

---

## 📝 Contoh File Logo yang Sudah Siap:

Jika Anda belum punya logo, saya sudah menyiapkan placeholder.
Letakkan file logo Anda dengan nama **`logo-sentrakudus.png`** di folder `public/`

Atau edit nama file di 3 lokasi yang disebutkan di atas.

---

## ✅ Checklist:

- [ ] File logo sudah ada di folder `public/`
- [ ] Nama file sudah sesuai di kode (atau sudah diganti)
- [ ] Development server sudah restart
- [ ] Logo terlihat di Hero Section
- [ ] Logo terlihat di Navbar
- [ ] Logo terlihat di Footer
- [ ] Ukuran logo sudah sesuai

---

**Selesai!** Logo/foto Anda sekarang sudah terpasang di 3 lokasi di halaman home 🎉
