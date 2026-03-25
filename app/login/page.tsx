export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">Admin login</h1>
        <p className="mt-2 text-sm text-gray-600">
          Logg inn for å åpne dashboard.
        </p>

        <form action="/api/login" method="POST" className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Passord
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
              placeholder="Skriv passord"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gray-900 px-6 py-4 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Logg inn
          </button>
        </form>
      </div>
    </main>
  );
}
