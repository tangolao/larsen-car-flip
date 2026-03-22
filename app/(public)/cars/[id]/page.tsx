import { cars } from "@/lib/data/cars";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CarDetailPage({ params }: Props) {
  const { id } = await params;

  const car = cars.find((c) => c.id === id);

  if (!car) {
    return <div className="p-10">Car not found</div>;
  }

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">{car.title}</h1>

      <div className="overflow-hidden rounded-2xl">
        <img
          src={car.imageUrl}
          alt={car.title}
          className="h-[400px] w-full object-cover"
        />
      </div>

      <div className="mt-6 space-y-2 text-lg">
        <p>Pris: {car.price.toLocaleString("no-NO")} kr</p>
        <p>År: {car.year}</p>
        <p>Kilometer: {car.mileage.toLocaleString("no-NO")} km</p>
        <p>Drivstoff: {car.fuel}</p>
        <p>Girkasse: {car.transmission}</p>
      </div>
    </main>
  );
}
