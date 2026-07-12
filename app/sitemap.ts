import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://larsen-car-flip.vercel.app";

  const cars = await prisma.car.findMany({
    select: {
      id: true,
      createdAt: true,
    },
    where: {
      NOT: {
        status: "Solgt",
      },
    },
  });

  const carUrls = cars.map((car) => ({
    url: `${baseUrl}/cars/${car.id}`,
    lastModified: car.createdAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/cars`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...carUrls,
  ];
}
