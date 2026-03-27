import { Navbar } from "@/components/layout/Navbar";
import { CarCard } from "@/components/car/CarCard";
import { prisma } from "@/lib/prisma";

export default async function CarsPage() {
  const cars = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Larsen CarFlip
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Biler til salgs
            </h1>
            <p className="mt-3 max-w-2xl text-gray-600">
              Utforsk vårt utvalg av brukte biler som er nøye valgt, kontrollert
              og klargjort for salg.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
