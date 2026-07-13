"use client";

import { useEffect, useState } from "react";

type SuccessToastProps = {
  message: string;
};

export function SuccessToast({ message }: SuccessToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed right-6 top-6 z-50 flex max-w-sm items-start gap-3 rounded-xl border border-green-200 bg-white px-4 py-3 shadow-lg">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
        ✓
      </div>

      <p className="text-sm font-medium text-gray-900">{message}</p>

      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="ml-2 cursor-pointer text-gray-400 hover:text-gray-700"
        aria-label="Lukk varsel"
      >
        ✕
      </button>
    </div>
  );
}
