import { Navbar } from "@/components/layout/Navbar";
import { prisma } from "@/lib/prisma";
import { Footer } from "@/components/layout/Footer";
import { LoadMoreCars } from "@/components/car/LoadMoreCars";
import Link from "next/link";
import type { Metadata } from "next";
import type { Prisma } from "@prisma/client";

type Props = {
  searchParams: Promise<{
    q?: string;
    status?: string;
    sort?: string;
    page?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Biler til salgs",
  description:
    "Se vårt utvalg av kontrollerte og klargjorte bruktbiler til salgs.",
};

export default async function CarsPage({ searchParams }: Props) {
  const params = await searchParams;
  const q = params.q ?? "";
  const status = params.status ?? "";
  const sort = params.sort ?? "newest";
  const requestedPage = Number(params.page);
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;

  const pageSize = 2;

  const where: Prisma.CarWhereInput = {
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
  };
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

  const [cars, totalCars] = await Promise.all([
    prisma.car.findMany({
      include: {
        images: true,
      },
      where,
      orderBy,
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    }),

    prisma.car.count({
      where,
    }),
  ]);

  const totalPages = Math.ceil(totalCars / pageSize);

  function createPageUrl(pageNumber: number) {
    const search = new URLSearchParams();

    if (q) search.set("q", q);
    if (status) search.set("status", status);
    if (sort) search.set("sort", sort);

    search.set("page", String(pageNumber));

    return `/cars?${search.toString()}`;
  }

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
          <p
            className={`mb-6 text-base font-semibold ${
              totalCars > 0 ? "text-green-700" : "text-red-600"
            }`}
          >
            Fant {totalCars} {totalCars === 1 ? "bil" : "biler"}
          </p>

          {(q || status) && (
            <p className="-mt-4 mb-6 text-sm text-gray-500">
              {q && (
                <>
                  Søker etter: <span className="font-medium">{q}</span>
                </>
              )}
              {q && status && " · "}
              {status && (
                <>
                  Status: <span className="font-medium">{status}</span>
                </>
              )}
            </p>
          )}

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
            <>
              <LoadMoreCars cars={cars} />

              {totalPages > 1 && (
                <nav
                  aria-label="Sidenavigasjon"
                  className="mt-10 flex flex-wrap items-center justify-center gap-2"
                >
                  {currentPage > 1 ? (
                    <Link
                      href={createPageUrl(currentPage - 1)}
                      className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Forrige
                    </Link>
                  ) : (
                    <span className="cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-400">
                      Forrige
                    </span>
                  )}

                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isCurrentPage = pageNumber === currentPage;

                    return (
                      <Link
                        key={pageNumber}
                        href={createPageUrl(pageNumber)}
                        aria-current={isCurrentPage ? "page" : undefined}
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold ${
                          isCurrentPage
                            ? "bg-gray-900 text-white"
                            : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {pageNumber}
                      </Link>
                    );
                  })}

                  {currentPage < totalPages ? (
                    <Link
                      href={createPageUrl(currentPage + 1)}
                      className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Neste
                    </Link>
                  ) : (
                    <span className="cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-400">
                      Neste
                    </span>
                  )}
                </nav>
              )}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
