import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold text-gray-900 sm:text-xl">
          Larsen CarFlip
        </Link>

        <div className="flex items-center gap-3 text-sm font-medium sm:gap-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Hjem
          </Link>

          <Link href="/cars" className="text-gray-600 hover:text-gray-900">
            Biler
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
          >
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
}
