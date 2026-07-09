import { Navbar } from "@/components/layout/Navbar";
import { prisma } from "@/lib/prisma";
import { Footer } from "@/components/layout/Footer";
import { LoadMoreCars } from "@/components/car/LoadMoreCars";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    q?: string;
    status?: string;
    sort?: string;
  }>;
};

export default async function CarsPage({ searchParams }: Props) {
  const params = await searchParams;
  const q = params.q ?? "";
  const status = params.status ?? "";
  const sort = params.sort ?? "newest";
  const orderBy =
    sort === "price-low"
      ? { price: "asc" as const }
      : sort === "price-high"
        ? { price: "desc" as const }
        : sort === "year-new"
          ? { year: "desc" as const }
          : sort === "mileage-low"
            ? { mileage: "asc" as const }
            : { createdAt: "desc" as const };

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
      ...(status
        ? {
            status,
          }
        : {}),
    },
    orderBy,
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

          <form className="mb-8 flex flex-col gap-3 sm:flex-row">
            <input
              name="q"
              type="text"
              defaultValue={q}
              placeholder="Søk etter bil..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
            />

            <select
              name="status"
              defaultValue={status}
              className="rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
            >
              <option value="">Alle</option>
              <option value="Til salgs">Til salgs</option>
              <option value="Reservert">Reservert</option>
            </select>

            <select
              name="sort"
              defaultValue={sort}
              className="rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
            >
              <option value="newest">Nyeste</option>
              <option value="price-low">Laveste pris</option>
              <option value="price-high">Høyeste pris</option>
              <option value="year-new">Nyeste årsmodell</option>
              <option value="mileage-low">Laveste kilometer</option>
            </select>

            <button
              type="submit"
              className="cursor-pointer rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Søk
            </button>

            <Link
              href="/cars"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Nullstill
            </Link>
          </form>
          <p className="mb-6 text-sm text-gray-600">
            Fant {cars.length} {cars.length === 1 ? "bil" : "biler"}
          </p>

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
