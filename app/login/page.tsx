import { ClearLoginError } from "@/components/ClearLoginError";
export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Admin login</h1>

        <p className="mt-2 text-sm text-gray-600">
          Logg inn for å åpne dashboard.
        </p>

        {/* ERROR MESSAGE */}
        {params.error && (
          <>
            <ClearLoginError />
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 animate-fade">
              Feil passord! Prøve igjen.
            </p>
          </>
        )}

        <form action="/api/login" method="POST" className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Passord
            </label>

            <input
              name="password"
              type="password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400"
              placeholder="Skriv passord"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full rounded-xl bg-gray-900 px-6 py-4 text-white"
          >
            Logg inn
          </button>
        </form>
      </div>
    </main>
  );
}
