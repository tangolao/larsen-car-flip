import { prisma } from "@/lib/prisma";
import { validateCarForm } from "@/lib/validators/car";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{
    title?: string;
    price?: string;
    year?: string;
    mileage?: string;
    fuel?: string;
    transmission?: string;
  }>;
};

async function createCar(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const price = Number(formData.get("price"));
  const year = Number(formData.get("year"));
  const mileage = Number(formData.get("mileage"));
  const fuel = formData.get("fuel") as string;
  const transmission = formData.get("transmission") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;

  const values = {
    title,
    price,
    year,
    mileage,
    fuel,
    transmission,
    description: description || null,
    imageUrl: imageUrl || null,
  };

  const errors = validateCarForm(values);

  const params = new URLSearchParams();

  if (errors.title) params.set("title", errors.title);
  if (errors.price) params.set("price", errors.price);
  if (errors.year) params.set("year", errors.year);
  if (errors.mileage) params.set("mileage", errors.mileage);
  if (errors.fuel) params.set("fuel", errors.fuel);
  if (errors.transmission) params.set("transmission", errors.transmission);

  if (params.toString()) {
    redirect(`/dashboard/cars/new?${params.toString()}`);
  }
  await prisma.car.create({
    data: values,
  });

  revalidatePath("/cars");
  revalidatePath("/dashboard");
  revalidatePath("/dashboard/cars");

  redirect("/dashboard/cars");
}

export default async function NewCarPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Admin
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">Legg til bil</h1>

        <p className="mt-3 text-gray-600">Opprett en ny bilannonse.</p>

        <form
          action={createCar}
          className="mt-8 space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Tittel
            </label>
            <input
              name="title"
              type="text"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
              placeholder="F.eks. BMW 320d xDrive"
            />
            {params.title && (
              <p className="mt-2 text-sm text-red-600">{params.title}</p>
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
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
                placeholder="350000"
              />
              {params.price && (
                <p className="mt-2 text-sm text-red-600">{params.price}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Årsmodell
              </label>
              <input
                name="year"
                type="number"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
                placeholder="2020"
              />
            </div>
            {params.year && (
              <p className="mt-2 text-sm text-red-600">{params.year}</p>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Kilometer
              </label>
              <input
                name="mileage"
                type="number"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
                placeholder="45000"
              />
              {params.mileage && (
                <p className="mt-2 text-sm text-red-600">{params.mileage}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Drivstoff
              </label>
              <input
                name="fuel"
                type="text"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
                placeholder="Diesel"
              />
              {params.fuel && (
                <p className="mt-2 text-sm text-red-600">{params.fuel}</p>
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
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
              placeholder="Automatic"
            />
            {params.transmission && (
              <p className="mt-2 text-sm text-red-600">{params.transmission}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Beskrivelse
            </label>
            <textarea
              name="description"
              className="min-h-[140px] w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
              placeholder="Skriv beskrivelse av bilen"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Bilde-URL
            </label>
            <input
              name="imageUrl"
              type="text"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
              placeholder="/picture/bmw.jpg"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Lagre bil
          </button>
        </form>
      </div>
    </main>
  );
}
