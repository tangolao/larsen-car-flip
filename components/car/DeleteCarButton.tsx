"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type DeleteCarButtonProps = {
  id: number;
};

export function DeleteCarButton({ id }: DeleteCarButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm("Er du sikker på at du vil slette bilen?");
    if (!confirmed) return;

    setIsLoading(true);

    await fetch(`/api/cars/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  }
  return (
    <button
      onClick={handleDelete}
      disabled={isLoading}
      className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isLoading ? "Sletter..." : "Slett"}
    </button>
  );
}
