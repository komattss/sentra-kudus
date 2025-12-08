"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";
import { useToast } from "@/components/ToastContainer";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  detailedInfo: string;
  bannerUrl: string;
  location?: string;
  phone?: string;
  email?: string;
  operatingHours?: string;
  facilities?: string[];
}

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
  detailedInfo,
  bannerUrl,
  location,
  phone,
  email,
  operatingHours,
  facilities,
}: ServiceModalProps) {
  const { showSuccess } = useToast();

  const handleContact = () => {
    showSuccess(
      "Berhasil Menghubungi!",
      `Permintaan kontak untuk ${title} telah dikirim. Tim akan segera menghubungi Anda.`
    );
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Banner Image */}
        <div className="relative h-64 w-full bg-gray-200">
          <Image
            src={bannerUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {description}
          </p>

          <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-6 border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Informasi Detail
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {detailedInfo}
            </p>
          </div>

          {/* Additional Info Grid */}
          {(location || phone || email || operatingHours) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {location && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    📍 Lokasi
                  </h4>
                  <p className="text-gray-700 text-sm">{location}</p>
                </div>
              )}
              {phone && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    📞 Kontak
                  </h4>
                  <p className="text-gray-700 text-sm">{phone}</p>
                </div>
              )}
              {email && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    ✉️ Email
                  </h4>
                  <p className="text-gray-700 text-sm">{email}</p>
                </div>
              )}
              {operatingHours && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    🕒 Jam Operasional
                  </h4>
                  <p className="text-gray-700 text-sm">{operatingHours}</p>
                </div>
              )}
            </div>
          )}

          {/* Facilities */}
          {facilities && facilities.length > 0 && (
            <div className="bg-linear-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Fasilitas & Layanan
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {facilities.map((facility, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={handleContact}
              className="flex-1 bg-linear-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Hubungi Sekarang
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
