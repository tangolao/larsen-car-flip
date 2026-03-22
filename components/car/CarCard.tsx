import Link from "next/link";
import { Car } from "@/types/car";

type CarCardProps = {
  car: Car;
};

export function CarCard({ car }: CarCardProps) {
  return (
    <Link
      href={`/cars/${car.id}`}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <img
          src={car.imageUrl}
          alt={car.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-900">{car.title}</h2>
          <p className="whitespace-nowrap text-lg font-bold text-gray-900">
            {car.price.toLocaleString("no-NO")} kr
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
          <span className="rounded-full bg-gray-100 px-3 py-1">{car.year}</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">
            {car.mileage.toLocaleString("no-NO")} km
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1">{car.fuel}</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">
            {car.transmission}
          </span>
        </div>
      </div>
    </Link>
  );
}
