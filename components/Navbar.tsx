"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Building2, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="w-11 h-11 bg-linear-to-br from-[#8b9e7d] to-[#6b7a5e] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src="/logo-sentrakudus.svg"
                alt="Logo Sentrakudus"
                width={26}
                height={26}
              />
            </div>
            <span className="font-bold text-xl text-gray-800 group-hover:text-[#8b9e7d] transition-colors">
              SENTRAKUDUS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 text-gray-700 hover:text-[#8b9e7d] hover:bg-[#8b9e7d]/5 rounded-xl transition-all font-semibold text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl text-gray-600 hover:bg-[#8b9e7d]/10 hover:text-[#8b9e7d] transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-5 space-y-2 border-t border-gray-200 pt-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-5 py-3 text-gray-700 hover:text-[#8b9e7d] hover:bg-[#8b9e7d]/5 rounded-xl transition-all font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
