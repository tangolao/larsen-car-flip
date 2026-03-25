import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const messageCount = await prisma.contactMessage.count();

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Admin
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

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
