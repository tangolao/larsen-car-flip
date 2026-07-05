import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const messageCount = await prisma.contactMessage.count();
  const carCount = await prisma.car.count();
  const availableCount = await prisma.car.count({
    where: { status: "Til salgs" },
  });
  const reservedCount = await prisma.car.count({
    where: { status: "Reservert" },
  });
  const soldCount = await prisma.car.count({
    where: { status: "Solgt" },
  });

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Admin
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
          </div>

          <form action="/api/logout" method="POST">
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Logg ut
            </button>
          </form>
        </div>

        <p className="mt-3 text-gray-600">
          Oversikt over administrasjonssider.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-medium text-gray-500">Biler totalt</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {carCount}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-medium text-gray-500">Til salgs</p>
            <h2 className="mt-2 text-3xl font-bold text-green-700">
              {availableCount}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-medium text-gray-500">Reservert</p>
            <h2 className="mt-2 text-3xl font-bold text-yellow-700">
              {reservedCount}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-medium text-gray-500">Solgt</p>
            <h2 className="mt-2 text-3xl font-bold text-red-700">
              {soldCount}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-medium text-gray-500">Meldinger</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {messageCount}
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            href="/dashboard/messages"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
          >
            <p className="text-sm font-medium text-gray-500">Meldinger</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Se henvendelser
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Se kundehenvendelser fra kontaktskjemaet
            </p>
          </Link>

          <Link
            href="/dashboard/cars/new"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
          >
            <p className="text-sm font-medium text-gray-500">Biler</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Legg til bil
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Opprett en ny bilannonse i systemet
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
