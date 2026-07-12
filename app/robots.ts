import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://larsen-car-flip.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/login"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
