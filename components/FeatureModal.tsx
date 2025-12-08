"use client";

import { X, CheckCircle, Star } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";
import { useToast } from "@/components/ToastContainer";

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  detailedInfo: string;
  bannerUrl: string;
  keyFeatures: string[];
  benefits: string[];
  href: string;
}

export default function FeatureModal({
  isOpen,
  onClose,
  title,
  description,
  detailedInfo,
  bannerUrl,
  keyFeatures,
  benefits,
  href,
}: FeatureModalProps) {
  const { showSuccess } = useToast();

  const handleOpenFeature = () => {
    showSuccess("Membuka Fitur", `Mengarahkan ke ${title}...`);
    setTimeout(() => {
      window.location.href = href;
    }, 1000);
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
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Banner Image */}
        <div className="relative h-72 w-full bg-gray-200">
          <Image
            src={bannerUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
              {title}
            </h2>
            <p className="text-white/95 text-lg drop-shadow-md">
              {description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-500">📋</span>
              Tentang Fitur Ini
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {detailedInfo}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Key Features */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-blue-500" />
                Fitur Utama
              </h3>
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Manfaat
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleOpenFeature}
              className="flex-1 bg-linear-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-center"
            >
              Buka Fitur →
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
