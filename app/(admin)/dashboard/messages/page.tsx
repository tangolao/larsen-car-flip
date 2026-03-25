import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Admin
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">Dashboard</h1>

        <p className="mt-3 text-gray-600">
          Administrer biler og henvendelser fra kunder.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/dashboard/messages"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Kundehenvendelser
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Se meldinger som er sendt fra kontaktskjemaet.
            </p>
          </Link>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Biler</h2>
            <p className="mt-2 text-sm text-gray-600">
              Her kan du senere legge til, redigere og slette biler.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
