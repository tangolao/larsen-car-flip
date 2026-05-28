import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { DeleteCarButton } from "@/components/car/DeleteCarButton";
import Image from "next/image";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{
    success?: string;
    q?: string;
    status?: string;
  }>;
};

export default async function AdminCarsPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params.q || "";
  const status = params.status || "";
  const cars = await prisma.car.findMany({
    where: {
      AND: [
        {
          OR: [
            {
              title: {
                contains: query,
              },
            },
            {
              fuel: {
                contains: query,
              },
            },
          ],
        },
        status
          ? {
              status: status,
            }
          : {},
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">Biler</h1>
            <p className="mt-3 text-gray-600">
              Oversikt over biler i systemet.
            </p>
          </div>

          <Link
            href="/dashboard/cars/new"
            className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            + Legg til bil
          </Link>
        </div>

        {params.success && (
          <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {params.success}
          </div>
        )}
        <form className="mt-6 space-y-3">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Søk etter bil..."
            className="w-full rounded-xl border border-gray-300 px-4 py-4 text-gray-900 outline-none focus:border-gray-900"
          />
          <div className="flex items-center gap-3">
            <select
              name="status"
              defaultValue={status}
              className="w-72 cursor-pointer rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-sm font-medium text-gray-800 outline-none hover:bg-gray-200 focus:border-gray-900"
            >
              <option value="">Alle statuser</option>
              <option value="Til salgs">Til salgs</option>
              <option value="Reservert">Reservert</option>
              <option value="Solgt">Solgt</option>
            </select>

            <button
              type="submit"
              className="cursor-pointer rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Søk
            </button>

            <Link
              href="/dashboard/cars"
              className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Nullstill
            </Link>
          </div>
        </form>

        <p className="mt-4 text-sm text-gray-600">Viser {cars.length} biler</p>
        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
          {cars.length === 0 ? (
            <div className="p-10 text-center">
              <h2 className="text-xl font-bold text-gray-900">
                Ingen biler funnet
              </h2>

              <p className="mt-2 text-gray-600">
                Prøv å endre søket eller nullstille filteret.
              </p>

              <Link
                href="/dashboard/cars"
                className="mt-6 inline-block rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Nullstill filter
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="flex items-center justify-between gap-4 p-6"
                >
                  <div className="flex items-center gap-4">
                    {car.imageUrl ? (
                      <Image
                        src={car.imageUrl}
                        alt={car.title}
                        width={112}
                        height={80}
                        className="h-20 w-28 rounded-xl object-cover bg-gray-200"
                      />
                    ) : (
                      <div className="h-20 w-28 rounded-xl bg-gray-200" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold text-gray-900">
                          {car.title}
                        </h2>

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

                      <p className="mt-1 text-sm text-gray-600">
                        {car.year} • {car.mileage.toLocaleString("no-NO")} km •{" "}
                        {car.fuel}
                      </p>

                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {car.price.toLocaleString("no-NO")} kr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/cars/${car.id}`}
                      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Se
                    </Link>

                    <Link
                      href={`/dashboard/cars/${car.id}/edit`}
                      className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
                    >
                      Rediger
                    </Link>

                    <DeleteCarButton id={car.id} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
