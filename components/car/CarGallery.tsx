"use client";

import { useEffect, useState } from "react";

type CarGalleryProps = {
  images: string[];
  title: string;
};

export function CarGallery({ images, title }: CarGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  function goToPrevious() {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function goToNext() {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  function openFullscreen() {
    setIsFullscreenOpen(true);
  }

  function closeFullscreen() {
    setIsFullscreenOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "Escape") {
        closeFullscreen();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length]);

  return (
    <>
      <div>
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
          <button
            type="button"
            onClick={openFullscreen}
            className="block w-full cursor-zoom-in"
          >
            <img
              src={images[selectedImage]}
              alt={`${title} ${selectedImage + 1}`}
              className="h-[420px] w-full object-cover"
            />
          </button>

          <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white">
            {selectedImage + 1} / {images.length}
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-xl font-bold text-gray-900 shadow transition hover:bg-white cursor-pointer"
            aria-label="Forrige bilde"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-xl font-bold text-gray-900 shadow transition hover:bg-white cursor-pointer"
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
              onClick={() => {
                setSelectedImage(index);
                openFullscreen();
              }}
              className={`overflow-hidden rounded-xl border-2 transition ${
                selectedImage === index
                  ? "border-gray-900"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="h-24 w-full object-cover cursor-pointer"
              />
            </button>
          ))}
        </div>
      </div>

      {isFullscreenOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={closeFullscreen}
        >
          <button
            type="button"
            onClick={closeFullscreen}
            className="absolute right-6 top-6 rounded-full bg-white/10 px-4 py-2 text-2xl font-bold text-white hover:bg-white/20"
            aria-label="Lukk"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-5 py-3 text-3xl font-bold text-white hover:bg-white/20"
            aria-label="Forrige bilde"
          >
            ‹
          </button>

          <div
            className="flex max-h-full w-full max-w-6xl flex-col items-center "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage]}
              alt={`${title} ${selectedImage + 1}`}
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain "
            />

            <div className="mt-4 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
              {selectedImage + 1} / {images.length}
            </div>
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-5 py-3 text-3xl font-bold text-white hover:bg-white/20"
            aria-label="Neste bilde"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
