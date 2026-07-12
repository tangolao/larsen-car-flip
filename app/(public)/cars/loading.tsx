export default function LoadingCarsPage() {
  const skeletonClass =
    "relative overflow-hidden bg-gray-200/80 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent";

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="mb-8">
          <div className={`${skeletonClass} h-4 w-32 rounded`} />

          <div className={`${skeletonClass} mt-4 h-10 w-72 rounded`} />

          <div
            className={`${skeletonClass} mt-4 h-4 w-full max-w-2xl rounded`}
          />
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <div className={`${skeletonClass} h-12 w-full rounded-xl`} />

          <div className={`${skeletonClass} h-12 w-full rounded-xl sm:w-36`} />

          <div className={`${skeletonClass} h-12 w-full rounded-xl sm:w-44`} />

          <div className={`${skeletonClass} h-12 w-full rounded-xl sm:w-24`} />

          <div className={`${skeletonClass} h-12 w-full rounded-xl sm:w-28`} />
        </div>

        <div className={`${skeletonClass} mb-6 h-5 w-28 rounded`} />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/80"
            >
              <div className={`${skeletonClass} aspect-[4/3] w-full`} />

              <div className="space-y-4 p-5">
                <div className={`${skeletonClass} h-5 w-40 rounded`} />

                <div className={`${skeletonClass} h-8 w-32 rounded`} />

                <div className="grid grid-cols-2 gap-3">
                  <div className={`${skeletonClass} h-4 rounded`} />
                  <div className={`${skeletonClass} h-4 rounded`} />
                  <div className={`${skeletonClass} h-4 rounded`} />
                  <div className={`${skeletonClass} h-4 rounded`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
