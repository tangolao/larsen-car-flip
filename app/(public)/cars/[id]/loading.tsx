export default function LoadingCarDetailPage() {
  const skeletonClass =
    "relative overflow-hidden bg-gray-200/80 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent";

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className={`${skeletonClass} mb-6 h-4 w-36 rounded`} />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div
              className={`${skeletonClass} aspect-[4/3] w-full rounded-2xl`}
            />

            <div className="mt-4 grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={`${skeletonClass} aspect-[4/3] rounded-xl`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className={`${skeletonClass} h-4 w-32 rounded`} />
            <div className={`${skeletonClass} mt-4 h-10 w-3/4 rounded`} />
            <div className={`${skeletonClass} mt-4 h-9 w-40 rounded`} />

            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-sm">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className={`${skeletonClass} h-4 w-20 rounded`} />
                  <div className={`${skeletonClass} h-5 w-28 rounded`} />
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
              <div className={`${skeletonClass} h-6 w-36 rounded`} />
              <div className={`${skeletonClass} mt-3 h-4 w-56 rounded`} />

              <div className="mt-6 space-y-4">
                <div className={`${skeletonClass} h-12 w-full rounded-xl`} />
                <div className={`${skeletonClass} h-12 w-full rounded-xl`} />
                <div className={`${skeletonClass} h-28 w-full rounded-xl`} />
                <div className={`${skeletonClass} h-12 w-full rounded-xl`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
