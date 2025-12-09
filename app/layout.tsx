import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthTransition from "@/components/AuthTransition";
import { ToastProvider } from "@/components/ToastContainer";
import { AuthProvider } from "@/lib/auth/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentrakudus Superapp",
  description: "Smart city services platform untuk Sentrakudus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sage-50 text-gray-900 dark:bg-[#1a1a1a] dark:text-white`}
      >
        <AuthProvider>
          <AuthTransition>
            <ToastProvider>
              <Navbar />
              {children}
            </ToastProvider>
          </AuthTransition>
        </AuthProvider>
      </body>
    </html>
  );
}
