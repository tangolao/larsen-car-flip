import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Larsen CarFlip
        </p>

        <h1 className="mt-4 text-6xl font-bold text-gray-900">404</h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Siden finnes ikke
        </h2>

        <p className="mt-3 text-gray-600">
          Siden du leter etter finnes ikke, eller kan ha blitt flyttet.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Gå til forsiden
          </Link>

          <Link
            href="/cars"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            Se biler
          </Link>
        </div>
      </div>
    </main>
  );
}
