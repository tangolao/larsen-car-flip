import { Navbar } from "@/components/layout/Navbar";
import { prisma } from "@/lib/prisma";
import { Footer } from "@/components/layout/Footer";
import { LoadMoreCars } from "@/components/car/LoadMoreCars";

export default async function CarsPage() {
  const cars = await prisma.car.findMany({
    where: {
      NOT: {
        status: "Solgt",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
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

          <LoadMoreCars cars={cars} />
        </section>
      </main>
      <Footer />
    </>
  );
}
