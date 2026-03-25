"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function DeleteButton({ id }: { id: number }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    console.log("CLICK", id);

    const confirmed = window.confirm("Er du sikker?");
    console.log("CONFIRMED:", confirmed);

    if (!confirmed) return;

    console.log("CALL API");

    setLoading(true);

    await fetch(`/api/contact/${id}`, {
      method: "DELETE",
    });

    console.log("DONE");

    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
    >
      <Trash2 size={16} />
      {loading ? "Sletter..." : "Slett"}
    </button>
  );
}
