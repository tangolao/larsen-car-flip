"use client";

import { useState } from "react";

type ImageUploadProps = {
  name: string;
  defaultValue?: string;
};

export function ImageUpload({ name, defaultValue = "" }: ImageUploadProps) {
  const [imageUrls, setImageUrls] = useState(defaultValue);
  const [isUploading, setIsUploading] = useState(false);

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files) return;

    setIsUploading(true);

    try {
      const uploadedUrls: string[] = [];

      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        const data = await response.json();
        uploadedUrls.push(data.url);
      }

      setImageUrls((prev) =>
        [prev, ...uploadedUrls].filter(Boolean).join("\n"),
      );
    } catch (error) {
      console.error(error);
      alert("Kunne ikke laste opp bilde.");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="space-y-3">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleUpload}
        className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900"
      />

      {isUploading && (
        <p className="text-sm text-gray-600">Laster opp bilde...</p>
      )}

      <textarea
        name={name}
        value={imageUrls}
        onChange={(event) => setImageUrls(event.target.value)}
        className="min-h-[120px] w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
        placeholder="Bilde-URL vises her etter opplasting"
      />
    </div>
  );
}
