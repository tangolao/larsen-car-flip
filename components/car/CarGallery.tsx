"use client";

import { useState } from "react";

type CarGalleryProps = {
  images: string[];
  title: string;
};

export function CarGallery({ images, title }: CarGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <img
          src={images[selectedImage]}
          alt={title}
          className="h-[420px] w-full object-cover"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(index)}
            className={`overflow-hidden rounded-xl border ${
              selectedImage === index ? "border-gray-900" : "border-gray-200"
            }`}
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="h-24 w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
