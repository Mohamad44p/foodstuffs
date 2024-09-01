// app/[locale]/admin/_components/AuthCheck.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AdminLogin from "../login/page";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/admin/check-auth', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.ok) {
          const data = await res.json();
          if (data.isAuthenticated) {
            setIsAuthenticated(true);
          } else if (!pathname.includes('/admin/login')) {
            const locale = pathname.split('/')[1];
            router.push(`/${locale}/admin/login`);
          }
        } else {
          throw new Error('Authentication check failed');
        }
      } catch (error) {
        console.error("Auth check error:", error);
        if (!pathname.includes('/admin/login')) {
          const locale = pathname.split('/')[1];
          router.push(`/${locale}/admin/login`);
        }
      } finally {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [router, pathname]);

  if (isChecking) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Checking authentication...</p>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <AdminLogin />;
}