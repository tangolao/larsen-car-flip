import { Navbar } from "@/components/layout/Navbar";
import { prisma } from "@/lib/prisma";
import { Footer } from "@/components/layout/Footer";
import { LoadMoreCars } from "@/components/car/LoadMoreCars";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function CarsPage({ searchParams }: Props) {
  const params = await searchParams;
  const q = params.q ?? "";
  const cars = await prisma.car.findMany({
    include: {
      images: true,
    },
    where: {
      NOT: {
        status: "Solgt",
      },
      title: {
        contains: q,
        mode: "insensitive",
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

          <form className="mb-8 flex gap-3">
            <input
              name="q"
              type="text"
              defaultValue={q}
              placeholder="Søk etter bil..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
            />

            <button
              type="submit"
              className="cursor-pointer rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Søk
            </button>
          </form>

          {cars.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                Ingen biler tilgjengelig
              </h2>

              <p className="mt-2 text-gray-600">
                Det er ingen biler tilgjengelig akkurat nå.
              </p>
            </div>
          ) : (
            <LoadMoreCars cars={cars} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
