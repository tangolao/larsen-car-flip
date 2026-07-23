import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ToastHandler } from "@/components/ui/ToastHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://larsen-car-flip.vercel.app"),

  title: {
    default: "Larsen CarFlip",
    template: "%s | Larsen CarFlip",
  },

  description: "Kjøp trygge, kontrollerte og klargjorte bruktbiler i Norge.",

  keywords: [
    "bruktbil",
    "bil",
    "Larsen CarFlip",
    "Norge",
    "Tesla",
    "BMW",
    "Audi",
    "Volkswagen",
  ],

  authors: [
    {
      name: "Larsen CarFlip",
    },
  ],

  openGraph: {
    title: "Larsen CarFlip",
    description: "Kjøp trygge, kontrollerte og klargjorte bruktbiler i Norge.",
    url: "https://larsen-car-flip.vercel.app",
    siteName: "Larsen CarFlip",
    locale: "nb_NO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Larsen CarFlip",
    description: "Kjøp trygge, kontrollerte og klargjorte bruktbiler i Norge.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}

        <ToastHandler />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
