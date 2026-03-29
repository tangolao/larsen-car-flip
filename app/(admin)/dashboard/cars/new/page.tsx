import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

  await prisma.car.create({
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
  revalidatePath("/cars");
  revalidatePath("/dashboard");
  redirect("/cars");
}

export default function NewCarPage() {
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
