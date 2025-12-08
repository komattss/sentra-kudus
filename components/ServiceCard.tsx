"use client";

import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  color: string;
  onLearnMore?: () => void;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  color,
  onLearnMore,
}: ServiceCardProps) {
  return (
    <div
      className={`${color} rounded-2xl shadow-lg p-8 h-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-3xl border border-white/10 animate-slide-up group relative`}
    >
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: icon }} />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/90 mb-6 leading-relaxed">{description}</p>

      <div className="flex flex-col gap-2">
        <Link href={href} className="w-full">
          <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
            <span>Jelajahi</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
        {onLearnMore && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onLearnMore();
            }}
            className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Info className="w-4 h-4" />
            <span>Info</span>
          </button>
        )}
      </div>
    </div>
  );
}
