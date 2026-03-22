import Link from "next/link";
import { cars } from "@/lib/data/cars";
import { Navbar } from "@/components/layout/Navbar";
import { CarGallery } from "@/components/car/CarGallery";

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
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto max-w-6xl px-6 py-10">
          <Link
            href="/cars"
            className="mb-6 inline-block text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            ← Tilbake til biler
          </Link>

          <div className="grid gap-10 lg:grid-cols-2">
            <CarGallery images={car.images} title={car.title} />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Larsen CarFlip
              </p>

              <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                {car.title}
              </h1>

              <p className="mt-4 text-3xl font-bold text-gray-900">
                {car.price.toLocaleString("no-NO")} kr
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <div>
                  <p className="text-sm text-gray-500">Årsmodell</p>
                  <p className="mt-1 font-semibold text-gray-900">{car.year}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Kilometer</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {car.mileage.toLocaleString("no-NO")} km
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Drivstoff</p>
                  <p className="mt-1 font-semibold text-gray-900">{car.fuel}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Girkasse</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {car.transmission}
                  </p>
                </div>
              </div>

              <button className="mt-8 w-full rounded-xl bg-gray-900 px-6 py-4 text-sm font-semibold text-white hover:bg-gray-800">
                Kontakt selger
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
