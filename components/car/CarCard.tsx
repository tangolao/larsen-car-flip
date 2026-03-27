import Link from "next/link";

type CarCardProps = {
  car: {
    id: number;
    title: string;
    price: number;
    year: number;
    mileage: number;
    fuel: string;
    transmission: string;
  };
};

export function CarCard({ car }: CarCardProps) {
  return (
    <Link
      href={`/cars/${car.id}`}
      className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
    >
      <div className="aspect-[4/3] rounded-xl bg-gray-200" />

      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-900">{car.title}</h2>

        <p className="mt-2 text-2xl font-bold text-gray-900">
          {car.price.toLocaleString("no-NO")} kr
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
          <p>{car.year}</p>
          <p>{car.mileage.toLocaleString("no-NO")} km</p>
          <p>{car.fuel}</p>
          <p>{car.transmission}</p>
        </div>
      </div>
    </Link>
  );
}
