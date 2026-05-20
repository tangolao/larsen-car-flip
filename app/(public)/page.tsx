import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { CarCard } from "@/components/car/CarCard";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const featuredCars = await prisma.car.findMany({
    where: {
      status: {
        not: "Solgt",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Larsen CarFlip
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Kjøp trygge og klargjorte bruktbiler
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Vi kjøper, reparerer og selger nøye utvalgte bruktbiler i Norge.
            </p>

            <div className="mt-8">
              <Link
                href="/cars"
                className="rounded-xl bg-gray-900 px-6 py-4 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Se biler til salgs
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Nylig lagt til
              </h2>

              <Link
                href="/cars"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Se alle biler →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
