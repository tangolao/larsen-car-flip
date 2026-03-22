"use client";

import { useEffect, useState } from "react";

type CarGalleryProps = {
  images: string[];
  title: string;
};

export function CarGallery({ images, title }: CarGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  function goToPrevious() {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function goToNext() {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length]);

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
        <img
          src={images[selectedImage]}
          alt={`${title} ${selectedImage + 1}`}
          className="h-[420px] w-full object-cover"
        />

        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-lg font-bold text-gray-900 shadow hover:bg-white cursor-pointer"
          aria-label="Forrige bilde"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-lg font-bold text-gray-900 shadow hover:bg-white cursor-pointer"
          aria-label="Neste bilde"
        >
          ›
        </button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(index)}
            className={` overflow-hidden rounded-xl border  ${
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
