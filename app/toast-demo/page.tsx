"use client";

import { useToast } from "@/components/ToastContainer";
import { CheckCircle, AlertTriangle, XCircle, Bell } from "lucide-react";

export default function ToastDemoPage() {
  const { showSuccess, showWarning, showError, showInfo } = useToast();

  const demoToasts = [
    {
      type: "success",
      icon: CheckCircle,
      title: "Success",
      bgColor: "bg-green-100",
      borderColor: "border-green-500",
      textColor: "text-green-800",
      examples: [
        {
          title: "Data Berhasil Disimpan",
          message: "Informasi Anda telah tersimpan dengan aman",
        },
        {
          title: "Kualitas Udara Baik",
          message: "AQI kembali normal. Aman untuk aktivitas outdoor",
        },
        {
          title: "UMKM Terdaftar",
          message: "Bisnis Anda berhasil didaftarkan di platform",
        },
      ],
      action: (title: string, message: string) => showSuccess(title, message),
    },
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Warning",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-800",
      examples: [
        {
          title: "Kemacetan Terdeteksi",
          message: "Jalan Raya Kudus mengalami kemacetan parah",
        },
        {
          title: "Peringatan Kualitas Udara",
          message: "AQI sedang. Kurangi aktivitas outdoor",
        },
        {
          title: "Maintenance Terjadwal",
          message: "Sistem akan maintenance hari Minggu jam 02:00",
        },
      ],
      action: (title: string, message: string) => showWarning(title, message),
    },
    {
      type: "error",
      icon: XCircle,
      title: "Error/Danger",
      bgColor: "bg-red-100",
      borderColor: "border-red-500",
      textColor: "text-red-800",
      examples: [
        {
          title: "Bahaya! Kualitas Udara Buruk",
          message: "AQI di atas 200. Hindari aktivitas outdoor",
        },
        {
          title: "Kecelakaan!",
          message: "Kecelakaan di Jalan Sunan Muria. Cari rute alternatif",
        },
        {
          title: "Koneksi Gagal",
          message: "Tidak dapat terhubung ke server. Coba lagi",
        },
      ],
      action: (title: string, message: string) => showError(title, message),
    },
    {
      type: "info",
      icon: Bell,
      title: "Info/Message",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-500",
      textColor: "text-purple-800",
      examples: [
        {
          title: "UMKM Baru Terdaftar",
          message: "Warung Soto Pak Kumis telah bergabung di platform",
        },
        {
          title: "Pesan Baru",
          message: "Anda menerima pesan dari admin komunitas",
        },
        {
          title: "Live Update",
          message: "Ada 5 layanan baru di daerah Anda",
        },
      ],
      action: (title: string, message: string) => showInfo(title, message),
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-12 `bg-gradient-to-b` from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Toast Notification System
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sistem notifikasi dengan 4 tipe: Success (hijau), Warning (kuning),
            Error (merah), dan Info (ungu). Klik tombol untuk melihat demo
            notifikasi.
          </p>
        </div>

        {/* Toast Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {demoToasts.map((toast) => {
            const Icon = toast.icon;
            return (
              <div
                key={toast.type}
                className={`${toast.bgColor} ${toast.borderColor} border-l-4 rounded-xl p-6 shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-8 h-8 ${toast.textColor}`} />
                  <h2
                    className={`text-2xl font-bold ${toast.textColor} capitalize`}
                  >
                    {toast.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {toast.examples.map((example, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        toast.action(example.title, example.message)
                      }
                      className={`w-full text-left p-4 bg-white rounded-lg shadow hover:shadow-md transition-all duration-200 hover:scale-102 ${toast.textColor}`}
                    >
                      <p className="font-semibold mb-1">{example.title}</p>
                      <p className="text-sm opacity-75">{example.message}</p>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Usage Guide */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Panduan Penggunaan
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                1. Import Hook
              </h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`import { useToast } from "@/components/ToastContainer";`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                2. Gunakan di Component
              </h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`const { showSuccess, showWarning, showError, showInfo } = useToast();`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                3. Tampilkan Notifikasi
              </h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Success (Hijau)
showSuccess("Berhasil!", "Data telah disimpan");

// Warning (Kuning)
showWarning("Peringatan", "Kualitas udara menurun");

// Error (Merah)
showError("Gagal!", "Koneksi terputus");

// Info (Ungu)
showInfo("UMKM Baru", "Ada 3 UMKM baru di daerah Anda");`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                4. Dengan Custom Duration (opsional)
              </h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`showSuccess("Berhasil!", "Data tersimpan", 3000); // 3 detik`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🌍 Air Quality Monitoring
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Success: Kualitas udara membaik</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">⚠</span>
                <span>Warning: AQI sedang</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Error: AQI berbahaya</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🚗 Smart Mobility
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Success: Rute optimal ditemukan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">⚠</span>
                <span>Warning: Kemacetan terdeteksi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Error: Kecelakaan di rute</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🏪 UMKM & Services
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Success: Booking berhasil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">🔔</span>
                <span>Info: UMKM baru terdaftar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">🔔</span>
                <span>Info: Update layanan</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              💬 Messages & Updates
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">🔔</span>
                <span>Info: Pesan masuk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">🔔</span>
                <span>Info: Live update tersedia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">🔔</span>
                <span>Info: Notifikasi komunitas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
