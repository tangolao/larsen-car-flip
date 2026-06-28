"use client";

import { useState } from "react";
import Image from "next/image";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type ImageUploadProps = {
  name: string;
  defaultValue?: string;
};

type SortableImageProps = {
  url: string;
  index: number;
  onRemove: (url: string) => void;
};

function SortableImage({ url, index, onRemove }: SortableImageProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: url });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative overflow-hidden rounded-xl border bg-white ${
        isDragging ? "z-10 opacity-60" : ""
      }`}
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        className="block w-full cursor-grab active:cursor-grabbing"
      >
        <Image
          src={url}
          alt="Bil bilde"
          width={300}
          height={180}
          className="h-28 w-full object-cover"
        />
      </button>
      {index === 0 && (
        <div className="absolute left-2 top-2 rounded-full bg-green-600 px-2 py-1 text-xs font-bold text-white">
          Cover
        </div>
      )}
      <button
        type="button"
        onClick={() => onRemove(url)}
        className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-1 text-xs font-bold text-white hover:bg-black cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
}

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

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = previewUrls.findIndex((url) => url === active.id);
    const newIndex = previewUrls.findIndex((url) => url === over.id);

    const nextUrls = arrayMove(previewUrls, oldIndex, newIndex);
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
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={previewUrls} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {previewUrls.map((url, index) => (
                <SortableImage
                  key={url}
                  url={url}
                  index={index}
                  onRemove={removeImage}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
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
