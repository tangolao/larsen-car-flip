export default function CarsLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="animate-pulse">
          <div className="h-4 w-32 rounded bg-gray-200" />
          <div className="mt-4 h-10 w-64 rounded bg-gray-200" />
          <div className="mt-3 h-5 max-w-2xl rounded bg-gray-200" />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="h-12 w-full rounded-xl bg-gray-200" />
            <div className="h-12 w-full rounded-xl bg-gray-200 sm:w-36" />
            <div className="h-12 w-full rounded-xl bg-gray-200 sm:w-44" />
            <div className="h-12 w-full rounded-xl bg-gray-200 sm:w-24" />
            <div className="h-12 w-full rounded-xl bg-gray-200 sm:w-28" />
          </div>

          <div className="mt-8 h-5 w-24 rounded bg-gray-200" />

          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200"
              >
                <div className="aspect-[4/3] w-full bg-gray-200" />

                <div className="space-y-4 p-5">
                  <div className="h-5 w-2/3 rounded bg-gray-200" />
                  <div className="h-8 w-1/2 rounded bg-gray-200" />

                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-4 rounded bg-gray-200" />
                    <div className="h-4 rounded bg-gray-200" />
                    <div className="h-4 rounded bg-gray-200" />
                    <div className="h-4 rounded bg-gray-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
