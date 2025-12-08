# 🚀 Cara Menjalankan Project Sentrakudus Superapp

## 📋 Prerequisites (Yang Harus Sudah Ada)

Pastikan sudah terinstall:

- ✅ **Node.js** (versi 18 atau lebih baru)
- ✅ **npm** atau **yarn** atau **pnpm**
- ✅ **Git** (opsional)

Cek instalasi:

```bash
node --version
npm --version
```

---

## 🎯 Step-by-Step: Jalankan Project

### **STEP 1: Buka Terminal di Folder Project**

1. Buka **PowerShell** atau **Command Prompt**
2. Navigate ke folder project:

```bash
cd C:\PROJECT\sentrakudus-superapp\superapp-prototype
```

### **STEP 2: Install Dependencies** (Jika Belum)

```bash
npm install
```

⏱️ Proses ini membutuhkan waktu 1-3 menit (tergantung koneksi internet).

### **STEP 3: Setup Environment Variables**

**PENTING!** Anda harus mengisi `.env.local` dengan API keys dari Supabase.

1. Buka file `.env.local` di root project
2. Ganti nilai placeholder dengan API keys Anda:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Cara mendapatkan API Keys:**

1. Login ke [Supabase Dashboard](https://supabase.com/dashboard)
2. Pilih project Anda (atau buat baru)
3. Klik **⚙️ Settings** (di sidebar kiri bawah)
4. Klik **API**
5. Copy:
   - **Project URL** → paste ke `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → paste ke `NEXT_PUBLIC_SUPABASE_ANON_KEY`

📝 **Contoh hasil akhir:**

```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NjIyMjIyMiwiZXhwIjoxOTYxNzk4MjIyfQ.abc123def456ghi789...
```

⚠️ **JANGAN commit file `.env.local` ke Git!** (Sudah otomatis di-ignore)

### **STEP 4: Jalankan Development Server**

```bash
npm run dev
```

Anda akan melihat output seperti ini:

```
   ▲ Next.js 15.x.x
   - Local:        http://localhost:3000
   - Network:      http://192.168.x.x:3000

 ✓ Starting...
 ✓ Ready in 2.5s
```

### **STEP 5: Buka di Browser**

Buka browser dan akses:

```
http://localhost:3000
```

🎉 **Project sudah berjalan!**

---

## 🔐 Test Authentication System

### **1. Register User Baru**

1. Klik tombol **"Login"** di pojok kanan atas Navbar
2. Klik link **"Daftar sekarang"**
3. Isi form:
   - **Nama Lengkap**: John Doe
   - **Email**: john@example.com
   - **Password**: password123 (minimal 6 karakter)
   - **Konfirmasi Password**: password123
4. Klik **"Daftar"**
5. Anda akan otomatis login dan kembali ke homepage

### **2. Login**

1. Klik tombol **"Login"** di Navbar
2. Masukkan email & password yang sudah didaftarkan
3. Klik **"Login"**

### **3. Cek User Info**

Setelah login:

- Lihat Navbar di pojok kanan atas
- Klik icon **User**
- Nama lengkap & email Anda akan muncul di dropdown

### **4. Logout**

1. Klik icon **User** di Navbar
2. Scroll ke bawah dropdown
3. Klik **"Sign Out"**

---

## 🛠️ Perintah NPM Lainnya

### **Development** (dengan hot reload)

```bash
npm run dev
```

### **Build untuk Production**

```bash
npm run build
```

### **Jalankan Production Build**

```bash
npm start
```

### **Lint (Check Code Quality)**

```bash
npm run lint
```

### **Format Code**

```bash
npm run format
```

---

## 📁 Struktur Project

```
superapp-prototype/
├── app/                        # Next.js App Router
│   ├── page.tsx               # Homepage
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   ├── login/                 # Login page
│   ├── register/              # Register page
│   ├── air-monitoring/        # Air quality monitoring
│   ├── community/             # Community services
│   ├── smart-mobility/        # Traffic & mobility
│   └── umkm-map/              # UMKM map
├── components/                 # Reusable components
│   ├── Navbar.tsx             # Navigation bar (with auth)
│   ├── Toast.tsx              # Toast notifications
│   └── ui/                    # UI components
├── lib/                        # Utilities & configs
│   ├── auth/                  # Auth context & hooks
│   ├── supabase/              # Supabase clients
│   └── utils.ts               # Helper functions
├── data/                       # Mock data
├── public/                     # Static assets
├── .env.local                 # Environment variables (SECRET!)
├── middleware.ts              # Auth middleware
└── package.json               # Dependencies
```

---

## 🐛 Troubleshooting

### **Error: Module not found**

Jalankan ulang install:

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### **Port 3000 sudah digunakan**

Gunakan port lain:

```bash
npm run dev -- -p 3001
```

Lalu buka: `http://localhost:3001`

### **Error: supabase is not defined**

✅ Cek file `.env.local` sudah terisi dengan benar
✅ Restart development server: `Ctrl+C` lalu `npm run dev`

### **Changes tidak muncul di browser**

1. Hard refresh: `Ctrl + Shift + R` (Windows) atau `Cmd + Shift + R` (Mac)
2. Clear cache & reload
3. Restart dev server

### **Error TypeScript**

```bash
npm run build
```

Akan menampilkan semua error TypeScript yang perlu diperbaiki.

### **User tidak bisa login setelah register**

**Solusi 1:** Disable email confirmation (untuk development):

1. Buka [Supabase Dashboard](https://supabase.com/dashboard)
2. Pilih project → **Authentication** → **Providers**
3. Klik **Email**
4. Scroll ke **Email Settings**
5. **Uncheck** "Confirm email"
6. Save changes
7. Coba register ulang dengan email baru

**Solusi 2:** Cek email untuk konfirmasi link (jika email confirmation enabled)

---

## 🌐 Deploy ke Production

### **Deploy ke Vercel** (Recommended)

1. Push code ke GitHub:

```bash
git add .
git commit -m "Add authentication system"
git push origin master
```

2. Login ke [Vercel](https://vercel.com)
3. Import repository
4. Tambahkan **Environment Variables** di Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy!

### **Deploy ke Netlify**

1. Build project:

```bash
npm run build
```

2. Install Netlify CLI:

```bash
npm install -g netlify-cli
```

3. Deploy:

```bash
netlify deploy --prod
```

---

## 📊 Features yang Sudah Ada

✅ **Authentication System**

- Login with email/password
- User registration
- Logout
- Protected routes
- Session management

✅ **Smart City Services**

- Air Quality Monitoring
- Traffic & Smart Mobility
- Community Services
- UMKM Map

✅ **UI/UX**

- Responsive design (mobile-first)
- Accessibility features
- Toast notifications
- Loading states

---

## 🔒 Security Notes

🔐 **JANGAN PERNAH:**

- Commit `.env.local` ke Git
- Share API keys di public
- Hardcode sensitive data

✅ **SELALU:**

- Use environment variables
- Enable RLS di Supabase
- Validate user input
- Use HTTPS di production

---

## 📚 Documentation Files

- **`README.md`** - Project overview
- **`AUTH-SETUP-GUIDE.md`** - Authentication setup guide lengkap
- **`CARA-MENJALANKAN-PROJECT.md`** - File ini
- **`DEVELOPMENT-GUIDE.md`** - Development guidelines
- **`TOAST-NOTIFICATION-GUIDE.md`** - Toast notification usage

---

## 💡 Tips

### **Hot Reload Tidak Bekerja?**

```bash
# Windows PowerShell
$env:WATCHPACK_POLLING="true"; npm run dev
```

### **Lihat Environment Variables**

```bash
# Jangan jalankan di production!
node -e "console.log(process.env)"
```

### **Clear Next.js Cache**

```bash
rm -rf .next
npm run dev
```

### **Check Supabase Connection**

Tambahkan di page manapun untuk test:

```tsx
"use client";

import { useAuth } from "@/lib/auth/AuthContext";

export default function TestPage() {
  const { user } = useAuth();
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
```

---

## 🆘 Need Help?

- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## ✅ Checklist Sebelum Development

- [ ] Node.js terinstall
- [ ] Dependencies terinstall (`npm install`)
- [ ] `.env.local` sudah diisi dengan API keys
- [ ] Supabase project sudah dibuat
- [ ] Email confirmation disabled (untuk development)
- [ ] Development server berjalan (`npm run dev`)
- [ ] Browser bisa akses `localhost:3000`
- [ ] Test register, login, logout berhasil

---

## 🎉 Selamat Coding!

Jika ada masalah atau pertanyaan, silakan tanyakan!

**Happy Coding! 🚀**
