"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export function ToastHandler() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const successMessage = searchParams.get("success");
    const errorMessage = searchParams.get("error");

    if (successMessage) {
      toast.success(successMessage);
    }

    if (errorMessage) {
      toast.error(errorMessage);
    }

    if (successMessage || errorMessage) {
      const params = new URLSearchParams(searchParams.toString());

      params.delete("success");
      params.delete("error");

      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

      router.replace(newUrl, { scroll: false });
    }
  }, [pathname, router, searchParams]);

  return null;
}
