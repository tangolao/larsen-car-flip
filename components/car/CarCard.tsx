import Link from "next/link";
import Image from "next/image";

type CarCardProps = {
  car: {
    id: number;
    title: string;
    price: number;
    year: number;
    mileage: number;
    fuel: string;
    transmission: string;
    status: string;
    imageUrl: string | null;
    images?: {
      id: number;
      url: string;
    }[];
  };
};

export function CarCard({ car }: CarCardProps) {
  const coverImage = car.images?.[0]?.url || car.imageUrl;

  return (
    <Link
      href={`/cars/${car.id}`}
      className={`rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-200 transition sm:p-4 ${
        car.status === "Solgt" ? "opacity-70" : "hover:shadow-md"
      }`}
    >
      {coverImage ? (
        <Image
          src={coverImage}
          alt={car.title}
          width={600}
          height={450}
          className={`aspect-[4/3] w-full rounded-xl object-cover ${
            car.status === "Solgt" ? "grayscale" : ""
          }`}
        />
      ) : (
        <div className="aspect-[4/3] rounded-xl bg-gray-200" />
      )}

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-gray-900">{car.title}</h2>

          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              car.status === "Til salgs"
                ? "bg-green-100 text-green-700"
                : car.status === "Reservert"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {car.status}
          </span>
        </div>

        <p className="mt-2 text-2xl font-bold text-gray-900">
          {car.price.toLocaleString("no-NO")} kr
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
          <p>{car.year}</p>
          <p>{car.mileage.toLocaleString("no-NO")} km</p>
          <p>{car.fuel}</p>
          <p>{car.transmission}</p>
        </div>
      </div>
    </Link>
  );
}
