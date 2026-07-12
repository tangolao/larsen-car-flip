import { Navbar } from "@/components/layout/Navbar";
import { ContactSellerForm } from "@/components/car/ContactSellerForm";
import { prisma } from "@/lib/prisma";
import { Footer } from "@/components/layout/Footer";
import { CarGallery } from "@/components/car/CarGallery";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const car = await prisma.car.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      title: true,
      description: true,
      imageUrl: true,
    },
  });

  if (!car) {
    return {
      title: "Bil ikke funnet",
      description: "Bilen du leter etter finnes ikke.",
    };
  }

  return {
    title: car.title,
    description:
      car.description ??
      `Se detaljer, pris og informasjon om ${car.title} hos Larsen CarFlip.`,
    openGraph: {
      title: car.title,
      description:
        car.description ??
        `Se detaljer, pris og informasjon om ${car.title} hos Larsen CarFlip.`,
      images: car.imageUrl ? [car.imageUrl] : [],
    },
  };
}

export default async function CarDetailPage({ params }: Props) {
  const { id } = await params;

  const car = await prisma.car.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      images: true,
    },
  });

  if (!car) {
    return <div className="p-10">Car not found</div>;
  }

  const isSold = car.status === "Solgt";
  const galleryImages =
    car.images.length > 0
      ? car.images.map((image) => image.url)
      : car.imageUrl
        ? [car.imageUrl]
        : [];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto max-w-6xl px-6 py-10">
          <Breadcrumb
            items={[
              { label: "Hjem", href: "/" },
              { label: "Biler", href: "/cars" },
              { label: car.title },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-2">
            {galleryImages.length > 0 ? (
              <CarGallery images={galleryImages} title={car.title} />
            ) : (
              <div className="aspect-[4/3] w-full rounded-2xl bg-gray-200" />
            )}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Larsen CarFlip
              </p>
              <div className="mt-3 flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {car.title}
                </h1>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    car.status === "Til salgs"
                      ? "bg-green-100 text-green-700"
                      : car.status === "Reservert"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {car.status}
                </span>
              </div>

              <p className="mt-4 text-3xl font-bold text-gray-900">
                {car.price.toLocaleString("no-NO")} kr
              </p>

              {car.description && (
                <p className="mt-4 text-gray-600">{car.description}</p>
              )}

              <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <div>
                  <p className="text-sm text-gray-500">Årsmodell</p>
                  <p className="mt-1 font-semibold text-gray-900">{car.year}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Kilometer</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {car.mileage.toLocaleString("no-NO")} km
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Drivstoff</p>
                  <p className="mt-1 font-semibold text-gray-900">{car.fuel}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Girkasse</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {car.transmission}
                  </p>
                </div>
              </div>

              {isSold ? (
                <div className="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  Denne bilen er solgt og kan ikke lenger kontaktes.
                </div>
              ) : (
                <ContactSellerForm carTitle={car.title} />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
