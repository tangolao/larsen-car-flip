"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type DeleteCarButtonProps = {
  id: number;
};

export function DeleteCarButton({ id }: DeleteCarButtonProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && !isLoading) {
        setIsOpen(false);
        setErrorMessage("");
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isLoading]);

  function openModal() {
    setErrorMessage("");
    setIsOpen(true);
  }

  function closeModal() {
    if (isLoading) return;

    setIsOpen(false);
    setErrorMessage("");
  }

  async function handleDelete() {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const response = await fetch(`/api/cars/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Kunne ikke slette bilen.");
      }

      setIsOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Failed to delete car:", error);
      setErrorMessage("Kunne ikke slette bilen. Prøv igjen.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        disabled={isLoading}
        className="cursor-pointer rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Slett
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={closeModal}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-car-title"
            aria-describedby="delete-car-description"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
          >
            <h2
              id="delete-car-title"
              className="text-xl font-bold text-gray-900"
            >
              Slett bil
            </h2>

            <p id="delete-car-description" className="mt-3 text-gray-600">
              Er du sikker på at du vil slette denne bilen?
            </p>

            <p className="mt-2 text-sm text-red-600">
              Denne handlingen kan ikke angres.
            </p>

            {errorMessage && (
              <div
                role="alert"
                className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700"
              >
                {errorMessage}
              </div>
            )}

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeModal}
                disabled={isLoading}
                className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Avbryt
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={isLoading}
                className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
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
