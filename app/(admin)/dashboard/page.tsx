import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const messageCount = await prisma.contactMessage.count();

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
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 cursor-pointer"
            >
              Logg ut
            </button>
          </form>
        </div>

        <p className="mt-3 text-gray-600">
          Oversikt over administrasjonssider.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            href="/dashboard/messages"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
          >
            <p className="text-sm font-medium text-gray-500">Meldinger</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              {messageCount}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Se kundehenvendelser fra kontaktskjemaet
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
