import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { DeleteCarButton } from "@/components/car/DeleteCarButton";

export const dynamic = "force-dynamic";

export default async function AdminCarsPage() {
  const cars = await prisma.car.findMany({
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

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
          {cars.length === 0 ? (
            <div className="p-8 text-gray-600">Ingen biler funnet.</div>
          ) : (
            <div className="divide-y divide-gray-200">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="flex items-center justify-between gap-4 p-6"
                >
                  <div className="flex items-center gap-4">
                    {car.imageUrl ? (
                      <img
                        src={car.imageUrl}
                        alt={car.title}
                        className="h-20 w-28 rounded-xl object-cover bg-gray-200"
                      />
                    ) : (
                      <div className="h-20 w-28 rounded-xl bg-gray-200" />
                    )}

                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {car.title}
                      </h2>
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
