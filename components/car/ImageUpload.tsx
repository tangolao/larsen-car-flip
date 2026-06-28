"use client";

import { useState } from "react";
import Image from "next/image";

type ImageUploadProps = {
  name: string;
  defaultValue?: string;
};

export function ImageUpload({ name, defaultValue = "" }: ImageUploadProps) {
  const [imageUrls, setImageUrls] = useState(defaultValue);
  const [isUploading, setIsUploading] = useState(false);

  const previewUrls = imageUrls
    .split("\n")
    .map((url) => url.trim())
    .filter(Boolean);

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

  function removeImage(urlToRemove: string) {
    const nextUrls = previewUrls.filter((url) => url !== urlToRemove);
    setImageUrls(nextUrls.join("\n"));
  }

  return (
    <div className="space-y-4">
      <label className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-sm font-semibold text-gray-700 transition hover:border-gray-900 hover:bg-gray-100">
        + Last opp bilder
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          className="hidden"
        />
      </label>

      {isUploading && (
        <p className="text-sm text-gray-600">Laster opp bilde...</p>
      )}

      {previewUrls.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {previewUrls.map((url) => (
            <div
              key={url}
              className="relative overflow-hidden rounded-xl border"
            >
              <Image
                src={url}
                alt="Bil bilde"
                width={300}
                height={180}
                className="h-28 w-full object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(url)}
                className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-1 text-xs font-bold text-white hover:bg-black cursor-pointer"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
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
