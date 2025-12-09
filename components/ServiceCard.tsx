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
    <div
      className={`${color} rounded-2xl shadow-lg p-8 h-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-3xl border border-white/10 dark:border-slate-800 dark:bg-slate-900 animate-slide-up group relative flex flex-col`}
    >
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: icon }} />
      <h3 className="text-xl font-bold text-white dark:text-slate-100 mb-3">
        {title}
      </h3>
      <p className="text-white/90 dark:text-slate-300 mb-6 leading-relaxed grow">
        {description}
      </p>

      <Link href={href} className="w-full mt-auto">
        <button className="w-full bg-white/20 hover:bg-white/40 dark:bg-slate-800/60 dark:hover:bg-slate-800/80 backdrop-blur-md border border-white/40 dark:border-slate-700 text-white dark:text-slate-100 font-semibold py-3 px-5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group-hover:border-white/60 dark:group-hover:border-slate-400">
          <span>Jelajahi</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </div>
  );
}
