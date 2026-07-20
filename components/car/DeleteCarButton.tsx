"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type DeleteCarButtonProps = {
  id: number;
};

export function DeleteCarButton({ id }: DeleteCarButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  async function handleDelete() {
    setIsLoading(true);

    await fetch(`/api/cars/${id}`, {
      method: "DELETE",
    });
    setIsOpen(false);
    router.refresh();
  }
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        disabled={isLoading}
        className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Sletter bilen..." : "Slett bil"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900">Slett bil</h2>

            <p className="mt-3 text-gray-600">
              Er du sikker på at du vil slette denne bilen?
            </p>

            <p className="mt-2 text-sm text-red-600">
              Denne handlingen kan ikke angres.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                disabled={isLoading}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Avbryt
              </button>

              <button
                onClick={handleDelete}
                disabled={isLoading}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60"
              >
                {isLoading ? "Sletter bilen..." : "Slett bil"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
