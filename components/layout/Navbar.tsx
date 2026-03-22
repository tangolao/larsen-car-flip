import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Larsen CarFlip
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black">
            Hjem
          </Link>
          <Link href="/cars" className="hover:text-black">
            Biler
          </Link>
          <Link href="/dashboard" className="hover:text-black">
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
}
