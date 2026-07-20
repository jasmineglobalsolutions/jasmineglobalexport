import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Vehicle Export Quote | Jasmine Global Export",
  description:
    "Request an export quote for a Philippines-spec Toyota Hilux or other vehicle. We supply the 2.8 GR-S, 2.8 Conquest, 2.4 G, and 2.4 E variants. Container & RoRo shipping options available.",
  alternates: { canonical: "/quote" },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
