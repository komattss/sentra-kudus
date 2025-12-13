"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { FormField } from "@/components/FormField";
import Loading from "@/components/Loading";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  // Clear any existing session on component mount
  useEffect(() => {
    const clearSession = async () => {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.error("Error clearing session:", err);
      }
    };
    clearSession();
  }, [supabase.auth]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Clear any stale session first
      await supabase.auth.signOut();

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user && data.session) {
        // Show loading page for 1.5 seconds
        await new Promise((resolve) => setTimeout(resolve, 1500));
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Login gagal. Silakan coba lagi."
      );
      setLoading(false);
    }
  };

  // Show loading page during transition
  if (loading) {
    return <Loading text="Sedang masuk ke akun..." fullScreen />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 backdrop-blur-sm border border-slate-100">
          {/* Header */}
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Selamat Datang
            </h1>
            <p className="text-slate-600 text-sm font-medium">
              Masuk ke akun Anda untuk melanjutkan
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-md text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <FormField
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              required
            />

            <FormField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-linear-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:from-slate-600 disabled:to-slate-700 shadow-md hover:shadow-lg active:scale-95 transform"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Memproses...
                </div>
              ) : (
                "Masuk"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-slate-500 font-medium text-xs tracking-wide">
                ATAU
              </span>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center space-y-3">
            <p className="text-slate-600 text-sm font-medium">
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="text-slate-700 hover:text-slate-900 font-bold transition-colors duration-200 relative group"
              >
                Daftar sekarang
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-slate-700 to-slate-900 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-slate-500 text-xs mt-8 font-medium tracking-wide">
          © 2025 Sentrakudus Superapp — Semua hak dilindungi
        </p>
      </div>
    </div>
  );
}
