## 📚 Panduan Pengembangan - Sentrakudus Superapp

### Cara Menambah Halaman Baru

#### 1. Buat Folder Route Baru

```bash
mkdir app/nama-fitur
touch app/nama-fitur/page.tsx
```

#### 2. Template Halaman

```tsx
export default function NamaPengePage() {
  return (
    <main className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-color-600 to-color-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">🎯 Nama Halaman</h1>
          <p className="text-lg text-color-100">Deskripsi singkat</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Konten utama */}
      </section>
    </main>
  );
}
```

### Cara Menambah Data Dummy

#### 1. Buat File Data di `data/`

```ts
// data/namaFeature.ts

export interface NamaType {
  id: number;
  name: string;
  // ... properties lainnya
}

export const namaData: NamaType[] = [
  {
    id: 1,
    name: "Item 1",
    // ... data
  },
];
```

#### 2. Import dan Gunakan di Halaman

```tsx
import { namaData } from "@/data/namaFeature";

export default function Page() {
  return (
    <div>
      {namaData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

### Cara Menambah Component Baru

#### 1. Buat File Component di `components/`

```tsx
// components/NamaComponent.tsx

interface NamaComponentProps {
  title: string;
  // ... props lainnya
}

export default function NamaComponent({ title }: NamaComponentProps) {
  return (
    <div className="p-4 rounded-lg">
      <h2 className="font-bold">{title}</h2>
    </div>
  );
}
```

#### 2. Import dan Gunakan

```tsx
import NamaComponent from "@/components/NamaComponent";

export default function Page() {
  return <NamaComponent title="Hello" />;
}
```

### Update Navbar dengan Link Baru

Edit `components/Navbar.tsx` dan tambahkan link ke `navLinks`:

```tsx
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/komunitas", label: "Komunitas" },
  { href: "/fitur-baru", label: "Fitur Baru" }, // Tambahkan ini
];
```

### Styling Guidelines

#### Color Variables

Gunakan CSS variables yang sudah didefinisikan di `app/globals.css`:

- `var(--primary)` untuk warna utama
- `var(--success)` untuk success
- `var(--warning)` untuk warning
- `var(--danger)` untuk error

#### Utility Classes

```tsx
// Spacing
<div className="p-4 m-2 px-6 py-4"></div>

// Layout
<div className="flex items-center justify-between gap-4"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>

// Text
<h1 className="text-4xl font-bold text-gray-800 dark:text-white"></h1>

// Responsive
<div className="hidden md:flex"></div>

// Transitions
<button className="hover:bg-blue-600 transition-colors"></button>
```

### Dark Mode Support

Semua styling sudah mendukung dark mode. Gunakan `dark:` prefix:

```tsx
<div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
  Content
</div>
```

### Integrasi dengan API (Untuk Masa Depan)

#### 1. Buat API Route di `app/api/`

```ts
// app/api/nama/route.ts

export async function GET(request: Request) {
  return Response.json({ data: [] });
}
```

#### 2. Gunakan di Component dengan `useEffect`

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/nama")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return <div>{/* Render data */}</div>;
}
```

### TypeScript Best Practices

```tsx
// Selalu define interface untuk props
interface PageProps {
  params: {
    id: string;
  };
}

// Gunakan generics untuk reusable functions
function formatData<T>(data: T[]): T[] {
  return data;
}

// Define return types
function getData(): Promise<Data[]> {
  return fetch("/api/data").then((r) => r.json());
}
```

### SEO & Metadata

Update metadata di `layout.tsx` atau per-page dengan:

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nama Halaman - Sentrakudus",
  description: "Deskripsi halaman untuk SEO",
};
```

### Testing Data Locally

Untuk testing data baru sebelum ditampilkan:

```tsx
// Tambahkan di file page.tsx
const mockData = [
  { id: 1, name: "Test 1" },
  { id: 2, name: "Test 2" },
];

// Gunakan mockData atau realData berdasarkan env variable
const displayData =
  process.env.NODE_ENV === "development" ? mockData : realData;
```

### Performance Tips

1. **Lazy Loading**: Gunakan `next/dynamic` untuk components besar

   ```tsx
   import dynamic from "next/dynamic";
   const HeavyComponent = dynamic(() => import("@/components/Heavy"));
   ```

2. **Image Optimization**: Gunakan `next/image` untuk images

   ```tsx
   import Image from "next/image";
   <Image src="/logo.png" alt="Logo" width={100} height={100} />;
   ```

3. **Memoization**: Untuk components yang sering re-render
   ```tsx
   import { memo } from "react";
   export default memo(MyComponent);
   ```

### Debugging

1. **Console Logging**

   ```tsx
   console.log("Debug:", data);
   ```

2. **React DevTools**: Install extension di browser
3. **Network Tab**: Check API calls dan response

### Useful Commands

```bash
# Format code dengan Prettier (jika installed)
npm run format

# Lint code
npm run lint

# Type check
npx tsc --noEmit

# Clean build
rm -rf .next
npm run build
```

### Common Issues & Solutions

**Issue**: Pages tidak muncul

- **Solution**: Pastikan file diberi nama `page.tsx` atau `layout.tsx`

**Issue**: Styling tidak muncul

- **Solution**: Restart dev server setelah edit globals.css

**Issue**: TypeScript errors

- **Solution**: Check interface definitions dan import statements

**Issue**: Data tidak ter-update

- **Solution**: Gunakan state management atau refresh page

---

📚 **Dokumentasi Lengkap**: https://nextjs.org/docs  
🎨 **Tailwind**: https://tailwindcss.com/docs
