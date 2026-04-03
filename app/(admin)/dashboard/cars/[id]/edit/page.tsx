import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    title?: string;
    price?: string;
    year?: string;
    mileage?: string;
    fuel?: string;
    transmission?: string;
  }>;
};

async function updateCar(id: number, formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const price = Number(formData.get("price"));
  const year = Number(formData.get("year"));
  const mileage = Number(formData.get("mileage"));
  const fuel = formData.get("fuel") as string;
  const transmission = formData.get("transmission") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;

  await prisma.car.update({
    where: {
      id,
    },
    data: {
      title,
      price,
      year,
      mileage,
      fuel,
      transmission,
      description: description || null,
      imageUrl: imageUrl || null,
    },
  });

  redirect("/dashboard/cars");
}

export default async function EditCarPage({ params, searchParams }: Props) {
  const { id } = await params;
  const errors = await searchParams;

  const car = await prisma.car.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!car) {
    return <div className="p-10">Bil ikke funnet.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Admin
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">Rediger bil</h1>

        <p className="mt-3 text-gray-600">Oppdater informasjon om bilen.</p>

        <form
          action={updateCar.bind(null, car.id)}
          className="mt-8 space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Tittel
            </label>
            <input
              name="title"
              type="text"
              defaultValue={car.title}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Pris
              </label>
              <input
                name="price"
                type="number"
                defaultValue={car.price}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
              />
              {errors.price && (
                <p className="mt-2 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Årsmodell
              </label>
              <input
                name="year"
                type="number"
                defaultValue={car.year}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
              />
              {errors.year && (
                <p className="mt-2 text-sm text-red-600">{errors.title}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Kilometer
              </label>
              <input
                name="mileage"
                type="number"
                defaultValue={car.mileage}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
              />
              {errors.mileage && (
                <p className="mt-2 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Drivstoff
              </label>
              <input
                name="fuel"
                type="text"
                defaultValue={car.fuel}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
              />
              {errors.fuel && (
                <p className="mt-2 text-sm text-red-600">{errors.title}</p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Girkasse
            </label>
            <input
              name="transmission"
              type="text"
              defaultValue={car.transmission}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
            />
            {errors.transmission && (
              <p className="mt-2 text-sm text-red-600">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Beskrivelse
            </label>
            <textarea
              name="description"
              defaultValue={car.description ?? ""}
              className="min-h-[140px] w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Bilde-URL
            </label>
            <input
              name="imageUrl"
              type="text"
              defaultValue={car.imageUrl ?? ""}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Lagre endringer
          </button>
        </form>
      </div>
    </main>
  );
}
