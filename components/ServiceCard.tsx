"use client";

import Link from "next/link";

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
        className={`${color} rounded-2xl shadow-md p-8 h-full cursor-pointer transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border border-white/10`}
      >
        <div className="mb-4" dangerouslySetInnerHTML={{ __html: icon }} />
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/90 mb-6 leading-relaxed">{description}</p>
        <div className="inline-flex items-center gap-2 text-white font-semibold group">
          <span>Jelajahi</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
