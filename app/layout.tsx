import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/legacy.css";
import FloatingTranslate from "./components/FloatingTranslate";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jasmineglobalexport.com"),
  title: {
    default: "Jasmine Global HI-Lux Export | Toyota Hilux Export Specialist",
    template: "%s | Jasmine Global HI-Lux Export",
  },
  description:
    "Jasmine Global HI-Lux Export — Singapore-based Toyota Hilux export specialist. We source, verify, purchase, lash and ship Philippines-spec Hilux units worldwide by container or RoRo. Destination-country delivery only.",
  keywords: [
    "Toyota Hilux export",
    "Philippines spec Hilux",
    "Hilux 4x4 export",
    "Singapore car exporter",
    "RoRo shipping",
    "container shipping",
    "GR-S Hilux",
    "Conquest Hilux",
    "vehicle export specialist",
  ],
  openGraph: {
    title: "Jasmine Global HI-Lux Export | Toyota Hilux Export Specialist",
    description:
      "Source, verify, purchase, lash and ship Philippines-spec Toyota Hilux units worldwide. Container & RoRo shipping. Destination-country delivery only.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hilux-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Toyota Hilux Philippines export — Jasmine Global HI-Lux Export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasmine Global HI-Lux Export | Toyota Hilux Export Specialist",
    description:
      "Philippines-spec Toyota Hilux export. Container & RoRo shipping worldwide. Singapore HQ.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <FloatingTranslate />
      </body>
    </html>
  );
}
