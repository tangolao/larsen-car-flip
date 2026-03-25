"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ClearLoginError() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
}
