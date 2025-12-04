/**
 * Konfigurasi Sentrakudus Superapp
 * File ini berisi konfigurasi global untuk aplikasi
 */

export const APP_CONFIG = {
  // App Info
  name: "Sentrakudus Superapp",
  description: "Platform layanan kota pintar untuk Sentrakudus",
  version: "0.1.0",

  // Contact Info
  contact: {
    email: "info@sentrakudus.id",
    phone: "+62-274-000000",
    address: "Sentrakudus, Jawa Tengah, Indonesia",
  },

  // Features
  features: [
    {
      id: "community",
      name: "Layanan Komunitas",
      icon: "👥",
      path: "/community",
      color: "from-purple-600 to-purple-800",
      description:
        "Akses layanan kesehatan, pendidikan, dan sosial dari pemerintah",
    },
    {
      id: "air-quality",
      name: "Monitoring Udara",
      icon: "💨",
      path: "/air-monitoring",
      color: "from-green-600 to-green-800",
      description: "Pantau kualitas udara real-time di berbagai lokasi kota",
    },
    {
      id: "umkm",
      name: "Peta UMKM",
      icon: "🏪",
      path: "/umkm-map",
      color: "from-orange-600 to-orange-800",
      description: "Temukan bisnis lokal, UMKM, dan produk unggulan daerah",
    },
    {
      id: "mobility",
      name: "Smart Mobility",
      icon: "🚗",
      path: "/smart-mobility",
      color: "from-red-600 to-red-800",
      description:
        "Informasi lalu lintas real-time dan opsi transportasi terbaik",
    },
  ],

  // Theme Colors
  colors: {
    primary: "#3b82f6",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    dark: "#111827",
    light: "#f9fafb",
  },

  // Navigation Links
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/community", label: "Layanan Komunitas" },
    { href: "/air-monitoring", label: "Monitoring Udara" },
    { href: "/umkm-map", label: "Peta UMKM" },
    { href: "/smart-mobility", label: "Smart Mobility" },
  ],

  // SEO
  seo: {
    siteName: "Sentrakudus Superapp",
    locale: "id_ID",
    keywords: "sentrakudus, superapp, smart city, kota pintar",
  },

  // Pagination
  pagination: {
    itemsPerPage: 10,
    maxPages: 5,
  },

  // API Endpoints (untuk integrasi future)
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
    timeout: 5000,
  },

  // Feature Flags
  features_enabled: {
    darkMode: true,
    search: false, // Coming soon
    notifications: false, // Coming soon
    authentication: false, // Coming soon
  },
};

// Type definitions
export type Feature = (typeof APP_CONFIG.features)[0];
export type NavLink = (typeof APP_CONFIG.navLinks)[0];
