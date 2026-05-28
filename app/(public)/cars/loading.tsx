export default function LoadingCarsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="mb-8">
          <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-10 w-72 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded bg-gray-200" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200"
            >
              <div className="aspect-[4/3] animate-pulse rounded-xl bg-gray-200" />

              <div className="mt-4">
                <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
                <div className="mt-4 h-7 w-32 animate-pulse rounded bg-gray-200" />

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="h-4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
