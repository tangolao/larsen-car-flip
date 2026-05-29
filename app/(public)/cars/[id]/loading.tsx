export default function LoadingCarDetailPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 h-4 w-32 animate-pulse rounded bg-gray-200" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="aspect-[4/3] animate-pulse rounded-2xl bg-gray-200" />

          <div>
            <div className="h-4 w-36 animate-pulse rounded bg-gray-200" />
            <div className="mt-4 h-10 w-72 animate-pulse rounded bg-gray-200" />
            <div className="mt-6 h-8 w-40 animate-pulse rounded bg-gray-200" />

            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-sm">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                  <div className="mt-2 h-5 w-28 animate-pulse rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
