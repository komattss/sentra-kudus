"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  Bell,
  User,
  UserCircle2,
  Settings,
  HelpCircle,
  UserCog,
  Link2,
  BookOpen,
  Database,
  LogOut,
  Accessibility,
  Volume2,
  ZoomIn,
  ZoomOut,
  Palette,
  Sun,
  Moon,
  AlignLeft,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Info,
  Clock,
} from "lucide-react";
import { useAccessibility } from "@/lib/useAccessibility";
import { useAuth } from "@/lib/auth/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notifications = 3; // Jumlah notifikasi
  const profileRef = useRef<HTMLDivElement>(null);
  const accessibilityRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { user, signOut } = useAuth();

  const {
    settings,
    increaseFontSize,
    decreaseFontSize,
    toggleGrayscale,
    toggleHighContrast,
    toggleDarkMode,
    setTextAlignment,
    toggleSpeech,
    reset,
  } = useAccessibility();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
      if (
        accessibilityRef.current &&
        !accessibilityRef.current.contains(event.target as Node)
      ) {
        setIsAccessibilityOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const profileMenuItems = [
    { icon: User, label: "Informasi Akun", href: "/account/info" },
    { icon: UserCog, label: "Personalisasi", href: "/account/personalization" },
    { icon: Link2, label: "Integrasi", href: "/account/integrations" },
    { icon: BookOpen, label: "Panduan", href: "/account/guide" },
    { icon: Settings, label: "Pengaturan", href: "/account/settings" },
    { icon: HelpCircle, label: "Bantuan", href: "/account/help" },
    {
      icon: Database,
      label: "Data Kependudukan",
      href: "/account/population-data",
    },
  ];

  const notificationItems = [
    {
      id: 1,
      type: "success",
      icon: CheckCircle,
      title: "Laporan Berhasil Dikirim",
      message:
        "Laporan Anda tentang kualitas udara telah berhasil dikirim dan sedang diproses.",
      time: "2 menit yang lalu",
      isRead: false,
    },
    {
      id: 2,
      type: "warning",
      icon: AlertCircle,
      title: "Kualitas Udara Menurun",
      message:
        "Kualitas udara di wilayah Anda saat ini dalam kategori tidak sehat. Disarankan mengurangi aktivitas outdoor.",
      time: "1 jam yang lalu",
      isRead: false,
    },
    {
      id: 3,
      type: "info",
      icon: Info,
      title: "UMKM Baru Terdaftar",
      message:
        "5 UMKM baru telah terdaftar di wilayah Kudus. Lihat di peta UMKM untuk informasi lebih lanjut.",
      time: "3 jam yang lalu",
      isRead: true,
    },
    {
      id: 4,
      type: "info",
      icon: Clock,
      title: "Pembaruan Sistem",
      message:
        "Sistem akan menjalani pemeliharaan terjadwal pada tanggal 10 Desember 2025, pukul 01:00 - 03:00 WIB.",
      time: "1 hari yang lalu",
      isRead: true,
    },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/community", label: "Services & Community" },
    { href: "/air-monitoring", label: "Air Quality" },
    { href: "/umkm-map", label: "UMKM Map" },
    { href: "/smart-mobility", label: "Smart Mobility" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg z-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-linear-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
              <Image
                src="/sentrakuduslogo.png"
                alt="Logo Sentrakudus"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold text-black hidden sm:inline transition-all duration-300 group-hover:scale-105 group-hover:text-sage-600">
              SENTRAKUDUS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 text-gray-700 hover:text-sage-600 hover:bg-sage-100 rounded-xl transition-all font-semibold text-sm hover:scale-102 hover:-translate-y-0.5"
              >
                {link.label}
              </Link>
            ))}

            {/* Accessibility Menu */}
            <div className="relative" ref={accessibilityRef}>
              <button
                onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
                className="p-2 rounded-xl text-gray-600 hover:bg-sage-100 hover:text-sage-600 hover:scale-105 transition-all duration-200 relative w-11 h-11 flex items-center justify-center"
                title="Menu Aksesibilitas"
              >
                <Accessibility className="w-6 h-6" />
              </button>

              {/* Accessibility Dropdown */}
              {isAccessibilityOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 animate-slide-down z-50">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <Accessibility className="w-8 h-8 text-sage-600" />
                      <div>
                        <p className="font-bold text-gray-800">Aksesibilitas</p>
                        <p className="text-xs text-gray-500">
                          Sesuaikan tampilan untuk kenyamanan Anda
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2 px-2 max-h-[70vh] overflow-y-auto">
                    {/* Voice Mode */}
                    <button
                      onClick={toggleSpeech}
                      className={`flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 mb-1 ${
                        settings.isSpeechEnabled
                          ? "bg-blue-50 text-blue-600"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Volume2 className="w-5 h-5" />
                        <span className="font-medium text-sm">Mode Suara</span>
                      </div>
                      <div
                        className={`w-10 h-5 rounded-full transition-colors ${
                          settings.isSpeechEnabled
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        } relative`}
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.isSpeechEnabled ? "right-0.5" : "left-0.5"
                          }`}
                        />
                      </div>
                    </button>

                    {/* Font Size Controls */}
                    <div className="px-4 py-2.5 mb-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm text-gray-700">
                          Ukuran Teks
                        </span>
                        <span className="text-xs text-gray-500">
                          {settings.fontSize}%
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={decreaseFontSize}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 rounded-lg transition-all duration-200"
                          disabled={settings.fontSize <= 80}
                        >
                          <ZoomOut className="w-4 h-4" />
                          <span className="text-sm font-medium">Kecil</span>
                        </button>
                        <button
                          onClick={increaseFontSize}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 rounded-lg transition-all duration-200"
                          disabled={settings.fontSize >= 200}
                        >
                          <ZoomIn className="w-4 h-4" />
                          <span className="text-sm font-medium">Besar</span>
                        </button>
                      </div>
                    </div>

                    {/* Grayscale */}
                    <button
                      onClick={toggleGrayscale}
                      className={`flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 mb-1 ${
                        settings.isGrayscale ? "bg-blue-50 text-blue-600" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Palette className="w-5 h-5" />
                        <span className="font-medium text-sm">
                          Skala Abu-abu
                        </span>
                      </div>
                      <div
                        className={`w-10 h-5 rounded-full transition-colors ${
                          settings.isGrayscale ? "bg-blue-500" : "bg-gray-300"
                        } relative`}
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.isGrayscale ? "right-0.5" : "left-0.5"
                          }`}
                        />
                      </div>
                    </button>

                    {/* High Contrast */}
                    <button
                      onClick={toggleHighContrast}
                      className={`flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 mb-1 ${
                        settings.isHighContrast
                          ? "bg-blue-50 text-blue-600"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Sun className="w-5 h-5" />
                        <span className="font-medium text-sm">
                          Kontras Tinggi
                        </span>
                      </div>
                      <div
                        className={`w-10 h-5 rounded-full transition-colors ${
                          settings.isHighContrast
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        } relative`}
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                            settings.isHighContrast ? "right-0.5" : "left-0.5"
                          }`}
                        />
                      </div>
                    </button>

                    {/* Dark/Light Mode */}
                    <div className="px-4 py-2.5 mb-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm text-gray-700">
                          Mode Tampilan
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={toggleDarkMode}
                          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                            settings.isDarkMode
                              ? "bg-gray-900 text-white hover:bg-gray-800"
                              : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                          }`}
                        >
                          <Moon className="w-4 h-4" />
                          <span className="text-sm font-medium">Gelap</span>
                        </button>
                        <button
                          onClick={() =>
                            settings.isDarkMode && toggleDarkMode()
                          }
                          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                            !settings.isDarkMode
                              ? "bg-yellow-400 border border-yellow-500 text-gray-900 hover:bg-yellow-500"
                              : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                          }`}
                        >
                          <Sun className="w-4 h-4" />
                          <span className="text-sm font-medium">Terang</span>
                        </button>
                      </div>
                    </div>

                    {/* Text Alignment */}
                    <div className="px-4 py-2.5 mb-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm text-gray-700">
                          Rata Tulisan
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <button
                          onClick={() => setTextAlignment("left")}
                          className={`flex items-center justify-center p-2.5 rounded-lg transition-all duration-200 ${
                            settings.textAlign === "left"
                              ? "bg-blue-500 text-white hover:bg-blue-600"
                              : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                          }`}
                          title="Kiri"
                        >
                          <AlignLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setTextAlignment("center")}
                          className={`flex items-center justify-center p-2.5 rounded-lg transition-all duration-200 ${
                            settings.textAlign === "center"
                              ? "bg-blue-500 text-white hover:bg-blue-600"
                              : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                          }`}
                          title="Tengah"
                        >
                          <AlignLeft className="w-4 h-4 rotate-90" />
                        </button>
                        <button
                          onClick={() => setTextAlignment("right")}
                          className={`flex items-center justify-center p-2.5 rounded-lg transition-all duration-200 ${
                            settings.textAlign === "right"
                              ? "bg-blue-500 text-white hover:bg-blue-600"
                              : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                          }`}
                          title="Kanan"
                        >
                          <AlignLeft className="w-4 h-4 rotate-180" />
                        </button>
                        <button
                          onClick={() => setTextAlignment("justify")}
                          className={`flex items-center justify-center p-2.5 rounded-lg transition-all duration-200 ${
                            settings.textAlign === "justify"
                              ? "bg-blue-500 text-white hover:bg-blue-600"
                              : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                          }`}
                          title="Rata Kiri-Kanan"
                        >
                          <AlignLeft
                            className="w-4 h-4"
                            style={{ transform: "scaleX(1.2)" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <div className="border-t border-gray-200 pt-2 px-2">
                    <button
                      onClick={() => {
                        reset();
                        setIsAccessibilityOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-200 w-full"
                    >
                      <RotateCcw className="w-5 h-5" />
                      <span className="font-medium text-sm">Atur Ulang</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-2 rounded-xl text-gray-600 hover:bg-sage-100 hover:text-sage-600 hover:scale-105 transition-all duration-200 relative w-11 h-11 flex items-center justify-center"
              >
                <Bell className="w-6 h-6" />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Notification Dropdown */}
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 animate-slide-down z-50 max-h-[80vh] overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-800">Notifikasi</p>
                        <p className="text-xs text-gray-500">
                          {notifications} notifikasi baru
                        </p>
                      </div>
                      <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                        Tandai Semua Dibaca
                      </button>
                    </div>
                  </div>

                  {/* Notification List */}
                  <div className="overflow-y-auto flex-1 notification-scroll">
                    {notificationItems.map((notif) => (
                      <button
                        key={notif.id}
                        className={`w-full px-4 py-3 border-b border-gray-100 text-left transition-all duration-300 ease-out group hover:pl-5 ${
                          !notif.isRead
                            ? "bg-blue-50/50 hover:bg-blue-100/30"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex gap-3">
                          <div
                            className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${
                              notif.type === "success"
                                ? "bg-green-100"
                                : notif.type === "warning"
                                ? "bg-orange-100"
                                : "bg-blue-100"
                            }`}
                          >
                            <notif.icon
                              className={`w-5 h-5 transition-all duration-300 ${
                                notif.type === "success"
                                  ? "text-green-600 group-hover:text-green-700"
                                  : notif.type === "warning"
                                  ? "text-orange-600 group-hover:text-orange-700"
                                  : "text-blue-600 group-hover:text-blue-700"
                              }`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <p className="font-semibold text-sm text-gray-800 line-clamp-1 transition-colors duration-300 group-hover:text-gray-900">
                                {notif.title}
                              </p>
                              {!notif.isRead && (
                                <span className="shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-1 group-hover:scale-125 transition-transform duration-300"></span>
                              )}
                            </div>
                            <p className="text-xs text-gray-600 mb-1 transition-all duration-300 group-hover:text-gray-700 wrap-break-word overflow-hidden notification-message">
                              {notif.message}
                            </p>
                            <p className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-gray-500">
                              {notif.time}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-3 border-t border-gray-200">
                    <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Lihat Semua Notifikasi
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              {user ? (
                <>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 rounded-xl hover:bg-sage-100 transition-all duration-200 w-11 h-11 justify-center"
                  >
                    <UserCircle2 className="w-9 h-9 text-gray-600 hover:text-sage-600 hover:scale-110 transition-all duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  {isProfileOpen && (
                    <div className="absolute -right-5 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 py-2 animate-slide-down z-50">
                      {/* User Info Header */}
                      <div className="px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <UserCircle2 className="w-12 h-12 text-gray-400" />
                          <div>
                            <p className="font-bold text-gray-800">
                              {user?.user_metadata?.full_name || "Pengguna"}
                            </p>
                            <p className="text-sm text-gray-500">
                              {user?.email || ""}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2 px-2">
                        {profileMenuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 mb-1"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium text-sm">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* Sign Out */}
                      <div className="border-t border-gray-200 pt-2 px-2">
                        <button
                          className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-200 w-full"
                          onClick={async () => {
                            setIsProfileOpen(false);
                            await signOut();
                            router.push("/login");
                            router.refresh();
                          }}
                        >
                          <LogOut className="w-5 h-5" />
                          <span className="font-medium text-sm">Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-2 bg-sage-600 hover:bg-sage-700 text-white rounded-lg transition-all duration-200 text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Accessibility */}
            <button
              onClick={() => setIsAccessibilityOpen(!isAccessibilityOpen)}
              className="p-1.5 rounded-xl text-gray-600 hover:bg-sage-100 hover:text-sage-600 hover:scale-105 transition-all duration-200 w-10 h-10 flex items-center justify-center"
            >
              <Accessibility className="w-6 h-6" />
            </button>

            {/* Mobile Notification */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-1.5 rounded-xl text-gray-600 hover:bg-sage-100 hover:text-sage-600 hover:scale-105 transition-all duration-200 relative w-10 h-10 flex items-center justify-center"
              >
                <Bell className="w-6 h-6" />
                {notifications > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Profile */}
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="rounded-xl hover:bg-sage-100 transition-all duration-200 w-10 h-10 flex items-center justify-center"
            >
              <UserCircle2 className="w-8 h-8 text-gray-600 hover:text-sage-600 hover:scale-110 transition-all duration-200" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-gray-600 hover:bg-sage-100 hover:text-sage-600 transition-all"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-5 space-y-2 border-t border-gray-200 pt-5 animate-slide-down">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-5 py-3 text-gray-700 hover:text-sage-600 hover:bg-sage-100 rounded-xl transition-all font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Profile Dropdown */}
        {isProfileOpen && (
          <div className="md:hidden pb-5 space-y-1 border-t border-gray-200 pt-5 animate-slide-down">
            {/* User Info */}
            <div className="px-4 py-3 mb-2">
              <div className="flex items-center gap-3">
                <UserCircle2 className="w-12 h-12 text-gray-400" />
                <div>
                  <p className="font-bold text-gray-800">
                    {user?.user_metadata?.full_name || "Pengguna"}
                  </p>
                  <p className="text-sm text-gray-500">{user?.email || ""}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            {profileMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-5 py-3 mx-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                onClick={() => setIsProfileOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-semibold text-sm">{item.label}</span>
              </Link>
            ))}

            {/* Sign Out */}
            <button
              className="flex items-center gap-3 px-5 py-3 mx-2 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-200 w-auto mt-2"
              onClick={async () => {
                setIsProfileOpen(false);
                await signOut();
                router.push("/login");
                router.refresh();
              }}
            >
              <LogOut className="w-5 h-5" />
              <span className="font-semibold text-sm">Sign Out</span>
            </button>
          </div>
        )}

        {/* Mobile Notification Dropdown */}
        {isNotificationOpen && (
          <div className="md:hidden pb-5 space-y-1 border-t border-gray-200 pt-5 animate-slide-down max-h-[70vh] overflow-y-auto notification-scroll">
            {/* Header */}
            <div className="px-4 py-3 mb-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-800">Notifikasi</p>
                  <p className="text-xs text-gray-500">
                    {notifications} notifikasi baru
                  </p>
                </div>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  Tandai Semua Dibaca
                </button>
              </div>
            </div>

            {/* Notification List */}
            {notificationItems.map((notif) => (
              <button
                key={notif.id}
                className={`w-full px-4 py-3 mx-2 rounded-xl text-left transition-all duration-300 ease-out group hover:px-5 ${
                  !notif.isRead
                    ? "bg-blue-50/50 hover:bg-blue-100/30"
                    : "hover:bg-slate-50"
                }`}
              >
                <div className="flex gap-3">
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${
                      notif.type === "success"
                        ? "bg-green-100"
                        : notif.type === "warning"
                        ? "bg-orange-100"
                        : "bg-blue-100"
                    }`}
                  >
                    <notif.icon
                      className={`w-5 h-5 transition-all duration-300 ${
                        notif.type === "success"
                          ? "text-green-600 group-hover:text-green-700"
                          : notif.type === "warning"
                          ? "text-orange-600 group-hover:text-orange-700"
                          : "text-blue-600 group-hover:text-blue-700"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-semibold text-sm text-gray-800 line-clamp-1 transition-colors duration-300 group-hover:text-gray-900">
                        {notif.title}
                      </p>
                      {!notif.isRead && (
                        <span className="shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-1 group-hover:scale-125 transition-transform duration-300"></span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-1 transition-all duration-300 group-hover:text-gray-700 wrap-break-word overflow-hidden notification-message">
                      {notif.message}
                    </p>
                    <p className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-gray-500">
                      {notif.time}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            {/* Footer */}
            <div className="px-4 py-3 mt-2">
              <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-2 hover:bg-blue-50 rounded-xl transition-all duration-200">
                Lihat Semua Notifikasi
              </button>
            </div>
          </div>
        )}

        {/* Mobile Accessibility Dropdown */}
        {isAccessibilityOpen && (
          <div className="md:hidden pb-5 space-y-1 border-t border-gray-200 pt-5 animate-slide-down">
            {/* Header */}
            <div className="px-4 py-3 mb-2">
              <div className="flex items-center gap-3">
                <Accessibility className="w-8 h-8 text-sage-600" />
                <div>
                  <p className="font-bold text-gray-800">Aksesibilitas</p>
                  <p className="text-xs text-gray-500">
                    Sesuaikan tampilan untuk kenyamanan Anda
                  </p>
                </div>
              </div>
            </div>

            {/* Voice Mode */}
            <button
              onClick={toggleSpeech}
              className={`flex items-center justify-between w-full px-5 py-3 mx-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 ${
                settings.isSpeechEnabled ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5" />
                <span className="font-semibold text-sm">Mode Suara</span>
              </div>
              <div
                className={`w-10 h-5 rounded-full transition-colors ${
                  settings.isSpeechEnabled ? "bg-blue-500" : "bg-gray-300"
                } relative`}
              >
                <div
                  className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.isSpeechEnabled ? "right-0.5" : "left-0.5"
                  }`}
                />
              </div>
            </button>

            {/* Font Size Controls */}
            <div className="px-5 py-3 mx-2 mb-1">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-gray-700">
                  Ukuran Teks
                </span>
                <span className="text-xs text-gray-500">
                  {settings.fontSize}%
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 rounded-lg transition-all duration-200"
                  disabled={settings.fontSize <= 80}
                >
                  <ZoomOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Kecil</span>
                </button>
                <button
                  onClick={increaseFontSize}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 rounded-lg transition-all duration-200"
                  disabled={settings.fontSize >= 200}
                >
                  <ZoomIn className="w-4 h-4" />
                  <span className="text-sm font-medium">Besar</span>
                </button>
              </div>
            </div>

            {/* Grayscale */}
            <button
              onClick={toggleGrayscale}
              className={`flex items-center justify-between w-full px-5 py-3 mx-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 ${
                settings.isGrayscale ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Palette className="w-5 h-5" />
                <span className="font-semibold text-sm">Skala Abu-abu</span>
              </div>
              <div
                className={`w-10 h-5 rounded-full transition-colors ${
                  settings.isGrayscale ? "bg-blue-500" : "bg-gray-300"
                } relative`}
              >
                <div
                  className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.isGrayscale ? "right-0.5" : "left-0.5"
                  }`}
                />
              </div>
            </button>

            {/* High Contrast */}
            <button
              onClick={toggleHighContrast}
              className={`flex items-center justify-between w-full px-5 py-3 mx-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 ${
                settings.isHighContrast ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5" />
                <span className="font-semibold text-sm">Kontras Tinggi</span>
              </div>
              <div
                className={`w-10 h-5 rounded-full transition-colors ${
                  settings.isHighContrast ? "bg-blue-500" : "bg-gray-300"
                } relative`}
              >
                <div
                  className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                    settings.isHighContrast ? "right-0.5" : "left-0.5"
                  }`}
                />
              </div>
            </button>

            {/* Dark/Light Mode */}
            <div className="px-5 py-3 mx-2 mb-1">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-gray-700">
                  Mode Tampilan
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={toggleDarkMode}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    settings.isDarkMode
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  <span className="text-sm font-medium">Gelap</span>
                </button>
                <button
                  onClick={() => settings.isDarkMode && toggleDarkMode()}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    !settings.isDarkMode
                      ? "bg-yellow-400 border border-yellow-500 text-gray-900 hover:bg-yellow-500"
                      : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  <span className="text-sm font-medium">Terang</span>
                </button>
              </div>
            </div>

            {/* Text Alignment */}
            <div className="px-5 py-3 mx-2 mb-1">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-gray-700">
                  Rata Tulisan
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => setTextAlignment("left")}
                  className={`flex items-center justify-center p-2.5 rounded-lg transition-all duration-200 ${
                    settings.textAlign === "left"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                  title="Kiri"
                >
                  <AlignLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTextAlignment("center")}
                  className={`flex items-center justify-center p-2.5 rounded-lg transition-all duration-200 ${
                    settings.textAlign === "center"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                  title="Tengah"
                >
                  <AlignLeft className="w-4 h-4 rotate-90" />
                </button>
                <button
                  onClick={() => setTextAlignment("right")}
                  className={`flex items-center justify-center p-2.5 rounded-lg transition-all duration-200 ${
                    settings.textAlign === "right"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                  title="Kanan"
                >
                  <AlignLeft className="w-4 h-4 rotate-180" />
                </button>
                <button
                  onClick={() => setTextAlignment("justify")}
                  className={`flex items-center justify-center p-2.5 rounded-lg transition-all duration-200 ${
                    settings.textAlign === "justify"
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                  title="Rata Kiri-Kanan"
                >
                  <AlignLeft
                    className="w-4 h-4"
                    style={{ transform: "scaleX(1.2)" }}
                  />
                </button>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                reset();
                setIsAccessibilityOpen(false);
              }}
              className="flex items-center gap-3 px-5 py-3 mx-2 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-200 w-auto mt-2"
            >
              <RotateCcw className="w-5 h-5" />
              <span className="font-semibold text-sm">Atur Ulang</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
