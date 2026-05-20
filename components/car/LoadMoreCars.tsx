"use client";

import { useState } from "react";
import { CarCard } from "./CarCard";

type Car = {
  id: number;
  title: string;
  price: number;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  status: string;
  imageUrl: string | null;
};

type LoadMoreCarsProps = {
  cars: Car[];
};

export function LoadMoreCars({ cars }: LoadMoreCarsProps) {
  const [visibleCount, setVisibleCount] = useState(2);

  const visibleCars = cars.slice(0, visibleCount);
  const hasMoreCars = visibleCount < cars.length;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visibleCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {hasMoreCars && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => current + 2)}
            className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Vis flere biler
          </button>
        </div>
      )}
    </>
  );
}
