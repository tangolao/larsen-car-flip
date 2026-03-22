import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Larsen CarFlip
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Kvalitetssikrede bruktbiler i Norge
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Vi kjøper, reparerer og selger brukte biler med fokus på kvalitet,
            trygghet og enkel handel.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/cars"
              className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Se biler
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              Admin
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
