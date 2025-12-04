// QUICK REFERENCE: Sentrakudus Superapp
// File ini untuk quick lookup struktur dan cara penggunaan

/**
 * NAVIGATION LINKS
 * Gunakan di Navbar dan links
 */
export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/community", label: "Layanan Komunitas" },
  { href: "/air-monitoring", label: "Monitoring Udara" },
  { href: "/umkm-map", label: "Peta UMKM" },
  { href: "/smart-mobility", label: "Smart Mobility" },
];

/**
 * IMPORT DATA
 *
 * Community Services:
 * import { communityServices } from "@/data/communityServices";
 *
 * Air Quality:
 * import { airQualityData, getAQIColor } from "@/data/airQuality";
 *
 * UMKM:
 * import { umkmData } from "@/data/umkm";
 *
 * Traffic:
 * import { trafficData, transportOptions, getCongestionColor } from "@/data/traffic";
 */

/**
 * IMPORT COMPONENTS
 *
 * Navbar:
 * import Navbar from "@/components/Navbar";
 *
 * Service Card:
 * import ServiceCard from "@/components/ServiceCard";
 *
 * Badge:
 * import Badge from "@/components/Badge";
 *
 * Rating:
 * import Rating from "@/components/Rating";
 *
 * Stat Box:
 * import StatBox from "@/components/StatBox";
 *
 * Loading:
 * import Loading from "@/components/Loading";
 */

/**
 * IMPORT UTILITIES
 *
 * import { formatNumber, formatDate, truncateText } from "@/lib/utils";
 * import { APP_CONFIG } from "@/lib/config";
 */

/**
 * COLOR MAPPING
 * Gunakan untuk conditional styling
 */
export const colorMap = {
  community: "purple",
  airQuality: "green",
  umkm: "orange",
  mobility: "red",
};

export const bgGradient = {
  community: "from-purple-600 to-purple-800",
  airQuality: "from-green-600 to-green-800",
  umkm: "from-orange-600 to-orange-800",
  mobility: "from-red-600 to-red-800",
};

/**
 * COMPONENT USAGE EXAMPLES
 */

// ServiceCard
/*
<ServiceCard
  icon="👥"
  title="Layanan Komunitas"
  description="Akses layanan kesehatan, pendidikan, dan sosial"
  href="/community"
  color="bg-linear-to-br from-purple-500 to-purple-700"
/>
*/

// Badge
/*
<Badge text="Kesehatan" color="blue" size="md" />
<Badge text="Sedang" color="yellow" size="md" />
*/

// Rating
/*
<Rating rating={4.5} reviews={128} />
<Rating rating={4.5} reviews={128} size="lg" />
*/

// StatBox
/*
<StatBox 
  label="Layanan Aktif" 
  value="100+" 
  icon="👥" 
  color="bg-blue-500" 
/>
*/

/**
 * DATA STRUCTURE QUICK REFERENCE
 */

// Community Service
export interface CommunityServiceQuickRef {
  id: number;
  name: string;
  category: string; // "Kesehatan" | "Pendidikan" | "Olahraga" | "Sosial" | "Rekreasi"
  description: string;
  location: string;
  phone: string;
  email: string;
  rating: number; // 0-5
  reviews: number;
}

// Air Quality
export interface AirQualityQuickRef {
  id: string;
  location: string;
  latitude: number;
  longitude: number;
  aqi: number; // 0-500
  pm25: number;
  pm10: number;
  o3: number;
  no2: number;
  so2: number;
  co: number;
  timestamp: Date;
  status: "Baik" | "Sedang" | "Tidak Sehat" | "Sangat Tidak Sehat";
}

// UMKM
export interface UMKMQuickRef {
  id: number;
  name: string;
  category: string; // "Makanan & Minuman" | "Kerajinan & Fashion" | etc
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  phone: string;
  website?: string;
  rating: number; // 0-5
  reviews: number;
  openingHours: string; // "06:00 - 22:00"
  image: string; // emoji icon
}

// Traffic
export interface TrafficQuickRef {
  id: string;
  roadName: string;
  latitude: number;
  longitude: number;
  congestionLevel: "Lancar" | "Normal" | "Padat" | "Macet";
  averageSpeed: number; // km/h
  density: number; // 0-100 %
  timestamp: Date;
}

/**
 * TAILWIND UTILITY CLASSES QUICK REFERENCE
 */

// Spacing
// Example: p-4 m-2 px-6 py-4 gap-4

// Responsive
// Example: hidden md:flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Colors
// Example: text-blue-600 bg-green-100 border-red-500 dark:bg-gray-800

// Transitions
// Example: hover:bg-blue-600 transition-colors duration-300

/**
 * COMMON PAGE TEMPLATE
 */
export const pageTemplate = `
import Badge from "@/components/Badge";

export default function PageName() {
  return (
    <main className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">🎯 Page Title</h1>
          <p className="text-lg text-purple-100">Description here</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content */}
      </section>
    </main>
  );
}
`;

/**
 * FILTER & SEARCH PATTERN
 */
export const filterPattern = `
"use client";

import { useState } from "react";

export default function Page() {
  const [filter, setFilter] = useState("All");
  
  const filtered = data.filter(item => 
    filter === "All" || item.category === filter
  );
  
  return (
    <>
      {/* Filter buttons */}
      {categories.map(cat => (
        <button
          onClick={() => setFilter(cat)}
          className={filter === cat ? "bg-blue-500" : "bg-gray-200"}
        >
          {cat}
        </button>
      ))}
      
      {/* Display filtered */}
      {filtered.map(item => (...))}
    </>
  );
}
`;

/**
 * FILE CHECKLIST UNTUK HALAMAN BARU
 */
export const newPageChecklist = [
  "☐ Buat folder app/nama-fitur/",
  "☐ Buat file page.tsx",
  "☐ Buat data file di data/ (jika perlu)",
  "☐ Import data dan components",
  "☐ Buat hero section dengan gradient",
  "☐ Buat main content section",
  "☐ Add responsive grid/layout",
  "☐ Update Navbar navLinks di components/Navbar.tsx",
  "☐ Test responsiveness (mobile, tablet, desktop)",
  "☐ Test dark mode",
  "☐ Check TypeScript errors",
  "☐ Add metadata di layout atau page",
];

/**
 * KEYBOARD SHORTCUTS & TIPS
 */
export const devTips = {
  // Format code
  format: "Shift + Alt + F (VS Code)",

  // Find usage
  findUsage: "Shift + F12",

  // Rename
  rename: "F2",

  // Quick fix
  quickFix: "Ctrl + .",

  // Dev tools
  devTools: "F12",
};

/**
 * COMMON ISSUES & SOLUTIONS
 */
export const troubleshooting = {
  // Styling not applying
  solution1: "Restart dev server after editing globals.css",

  // Page not found
  solution2: "Ensure file is named 'page.tsx' not 'page.jsx'",

  // TypeScript error
  solution3: "Check interface definitions and imports",

  // Layout shifting
  solution4: "Add 'pt-20' to main to account for fixed navbar",
};
