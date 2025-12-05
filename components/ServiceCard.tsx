"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  color: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  color,
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div
        className={`${color} rounded-2xl shadow-lg p-8 h-full cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-3xl border border-white/10 animate-slide-up group`}
      >
        <div className="mb-4" dangerouslySetInnerHTML={{ __html: icon }} />
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/90 mb-6 leading-relaxed">{description}</p>
        <div className="inline-flex items-center gap-2 text-white font-semibold">
          <span>Jelajahi</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
}
