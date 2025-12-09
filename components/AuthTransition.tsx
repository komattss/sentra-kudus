/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Loading from "@/components/Loading";
import { useAuth } from "@/lib/auth/AuthContext";

export default function AuthTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuth();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const wasLoggedInRef = useRef<boolean | null>(null);

  useEffect(() => {
    const currentlyLoggedIn = user !== null;

    // Deteksi perubahan dari login ke logout
    if (
      wasLoggedInRef.current === true &&
      currentlyLoggedIn === false &&
      pathname !== "/login" &&
      pathname !== "/register"
    ) {
      setIsTransitioning(true);
      // Redirect dengan Loading screen
      const timer = setTimeout(() => {
        router.push("/login");
        router.refresh();
      }, 2000);

      return () => clearTimeout(timer);
    }

    // Update status login
    wasLoggedInRef.current = currentlyLoggedIn;
  }, [user, pathname, router]);

  if (isTransitioning) {
    return <Loading text="Mengeluarkan akun..." fullScreen={true} />;
  }

  return <>{children}</>;
}
