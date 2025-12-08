# 🔐 Panduan Authentication dengan Supabase

## ✅ Setup Telah Selesai!

Authentication system telah berhasil diimplementasikan dengan fitur:

- ✅ Login dengan email & password
- ✅ Register user baru
- ✅ Logout functionality
- ✅ Protected routes (middleware)
- ✅ User info di Navbar
- ✅ Auth Context untuk global state management

---

## 📝 Cara Setup Environment Variables

### 1. Buka file `.env.local` di root project

File ini sudah dibuat, Anda perlu mengisi dengan API keys dari Supabase.

### 2. Isi dengan API Keys dari Supabase:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3. Cara Mendapatkan API Keys:

1. Login ke [Supabase Dashboard](https://supabase.com/dashboard)
2. Pilih project Anda
3. Klik **⚙️ Settings** di sidebar
4. Klik **API**
5. Copy:
   - **Project URL** → masukkan ke `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → masukkan ke `NEXT_PUBLIC_SUPABASE_ANON_KEY`

⚠️ **PENTING:** Setelah mengisi `.env.local`, restart development server!

---

## 🚀 Cara Menjalankan

### 1. Pastikan `.env.local` sudah terisi

Cek apakah API keys sudah diisi dengan benar.

### 2. Jalankan development server:

```bash
npm run dev
```

### 3. Buka browser:

```
http://localhost:3000
```

---

## 🎯 Cara Menggunakan

### **1. Register User Baru**

1. Klik tombol **"Login"** di Navbar (kanan atas)
2. Klik **"Daftar sekarang"**
3. Isi form registrasi:
   - Nama Lengkap
   - Email
   - Password (minimal 6 karakter)
   - Konfirmasi Password
4. Klik **"Daftar"**
5. Anda akan otomatis login dan redirect ke homepage

### **2. Login**

1. Klik tombol **"Login"** di Navbar
2. Masukkan email & password
3. Klik **"Login"**
4. Anda akan redirect ke homepage

### **3. Logout**

1. Klik icon **User** di Navbar (kanan atas)
2. Klik **"Sign Out"** di bagian bawah dropdown

### **4. Protected Routes**

- Semua halaman selain `/`, `/login`, dan `/register` memerlukan authentication
- Jika user belum login, akan otomatis redirect ke `/login`
- Middleware akan handle ini secara otomatis

---

## 📂 Struktur File yang Dibuat

```
superapp-prototype/
├── .env.local                          # Environment variables (API keys)
├── middleware.ts                       # Route protection middleware
├── lib/
│   ├── auth/
│   │   └── AuthContext.tsx            # Auth context provider
│   └── supabase/
│       ├── client.ts                  # Browser Supabase client
│       ├── server.ts                  # Server Supabase client
│       └── middleware.ts              # Session refresh logic
├── app/
│   ├── login/
│   │   └── page.tsx                   # Login page
│   ├── register/
│   │   └── page.tsx                   # Register page
│   └── layout.tsx                     # Updated dengan AuthProvider
└── components/
    └── Navbar.tsx                     # Updated dengan auth logic
```

---

## 🔧 Fitur yang Tersedia

### **1. Auth Context (`lib/auth/AuthContext.tsx`)**

- Global state management untuk user
- Hook `useAuth()` untuk akses user info di component manapun

**Cara pakai:**

```tsx
import { useAuth } from "@/lib/auth/AuthContext";

function MyComponent() {
  const { user, loading, signOut } = useAuth();

  if (loading) return <div>Loading...</div>;

  return <div>{user ? <p>Hello, {user.email}</p> : <p>Not logged in</p>}</div>;
}
```

### **2. Supabase Clients**

**Browser Client (`lib/supabase/client.ts`):**

```tsx
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();
```

**Server Client (`lib/supabase/server.ts`):**

```tsx
import { createClient } from "@/lib/supabase/server";

const supabase = await createClient();
```

### **3. Protected Routes**

Middleware sudah dikonfigurasi untuk protect semua routes kecuali:

- `/` (homepage)
- `/login`
- `/register`
- Static files

Edit `lib/supabase/middleware.ts` untuk customize logic.

---

## 🎨 Customization

### **1. Menambah Protected Routes**

Edit `lib/supabase/middleware.ts`:

```tsx
// Tambahkan route yang tidak perlu auth
if (
  !user &&
  !request.nextUrl.pathname.startsWith("/login") &&
  !request.nextUrl.pathname.startsWith("/register") &&
  !request.nextUrl.pathname.startsWith("/about") && // Route baru
  request.nextUrl.pathname !== "/"
) {
  // Redirect ke login
}
```

### **2. Menambah User Metadata**

Saat register, bisa tambahkan metadata lain:

```tsx
const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      full_name: fullName,
      phone: phone, // Tambahan
      city: "Kudus", // Tambahan
    },
  },
});
```

### **3. Disable Email Confirmation (Development)**

Agar tidak perlu konfirmasi email saat register:

1. Buka Supabase Dashboard
2. **Authentication** → **Providers** → **Email**
3. Scroll ke **Email Settings**
4. **Uncheck** "Confirm email"
5. Save

---

## 🐛 Troubleshooting

### **Error: "Invalid login credentials"**

- Cek apakah email & password benar
- Pastikan user sudah register di Supabase

### **Error: "supabase is not defined"**

- Cek `.env.local` sudah terisi dengan benar
- Restart development server: `npm run dev`

### **User tidak bisa login setelah register**

- Cek apakah email confirmation dinonaktifkan di Supabase Dashboard
- Atau cek email untuk konfirmasi link

### **Redirect loop ke /login**

- Cek middleware logic di `lib/supabase/middleware.ts`
- Pastikan route yang diakses tidak di-block

### **User info tidak muncul di Navbar**

- Cek apakah `AuthProvider` sudah wrap semua component di `app/layout.tsx`
- Refresh browser

---

## 📊 Database (Opsional)

Supabase sudah include PostgreSQL database. Jika ingin menyimpan data tambahan:

### **1. Buat Table di Supabase**

1. Dashboard → **Table Editor**
2. **New Table** → misal: `profiles`
3. Columns:
   - `id` (uuid, primary key)
   - `user_id` (uuid, foreign key ke auth.users)
   - `full_name` (text)
   - `avatar_url` (text)
   - `created_at` (timestamp)

### **2. Enable Row Level Security (RLS)**

```sql
-- Enable RLS
alter table profiles enable row level security;

-- Policy: Users can view their own profile
create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = user_id);

-- Policy: Users can update their own profile
create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = user_id);
```

### **3. Insert/Update Profile Data**

```tsx
const { data, error } = await supabase.from("profiles").upsert({
  user_id: user.id,
  full_name: "John Doe",
  avatar_url: "https://...",
});
```

---

## 🔐 Security Best Practices

1. ✅ **Never commit `.env.local`** - Sudah ada di `.gitignore`
2. ✅ **Enable RLS** di Supabase untuk semua tables
3. ✅ **Validate input** di client & server
4. ✅ **Use HTTPS** di production
5. ✅ **Rotate keys** secara berkala

---

## 📚 Resources

- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)

---

## 🎉 Selesai!

Authentication system sudah siap digunakan. Jika ada pertanyaan atau error, silakan tanyakan!

**Next Steps:**

1. Isi `.env.local` dengan API keys dari Supabase
2. Restart development server
3. Test register, login, dan logout
4. Customize sesuai kebutuhan

---

**Created with ❤️ for Sentrakudus Superapp**
