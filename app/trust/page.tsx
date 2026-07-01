import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Trust & Export Process — How We Work | Jasmine Global HI-Lux Export",
  description:
    "Built for serious international Toyota Hilux buyers. Singapore-based coordination, vehicle verification flow, multilingual buyer support, transparent export process with full documentation.",
  alternates: { canonical: "/trust" },
};

const trustCards = [
  {
    icon: "🇸🇬",
    title: "Singapore-Based Coordination",
    desc: "Our Singapore Main HQ acts as the professional contact point for buyer enquiries, quotation, documentation coordination and export communication.",
  },
  {
    icon: "🔍",
    title: "Vehicle Verification Flow",
    desc: "Before any invoice, we confirm photos, trim, year, transmission, engine, condition notes and export eligibility of each specific unit.",
  },
  {
    icon: "📄",
    title: "Transparent Documentation",
    desc: "We coordinate all export documents — proforma invoice, packing list, bill of lading — and communicate clearly at each step.",
  },
  {
    icon: "🚢",
    title: "RoRo & Container Options",
    desc: "We guide buyers clearly between port-to-port RoRo and controlled 40HC container loading depending on destination and quantity.",
  },
  {
    icon: "🤝",
    title: "Multilingual Buyer Support",
    desc: "English and Arabic buyers can communicate directly by WhatsApp. Other market languages may be supported through translation.",
  },
  {
    icon: "⚠️",
    title: "Clear Scope — No Surprises",
    desc: "We are export supply specialists only. Destination customs clearance, registration, taxes and local compliance are clearly the buyer's responsibility.",
  },
];

const steps = [
  { n: "1", title: "Enquiry Received", desc: "You submit a quote request with your required variant, destination and quantity." },
  { n: "2", title: "Stock Located & Verified", desc: "We locate matching Philippines-spec units and verify condition, trim, year and eligibility." },
  { n: "3", title: "Proforma Invoice Issued", desc: "Upon agreement, we issue a proforma invoice with all agreed terms, pricing and shipping details." },
  { n: "4", title: "Lashing & Loading", desc: "Vehicle is professionally prepared — lashed and loaded for container or positioned for RoRo." },
  { n: "5", title: "Shipped to Destination", desc: "We provide the Bill of Lading and shipping documents. Your Hilux is on its way." },
];

export default function TrustPage() {
  return (
    <PageLayout>
      <section className="premium-band" aria-label="Trust and process">
        <div className="wrap">
          <div className="section-title">
            <span className="variant-note-pill">How We Work</span>
            <h1 style={{ marginTop: 12 }}>Built for Serious International Toyota Hilux Buyers</h1>
            <p>
              This page explains exactly how we work — from first enquiry to destination delivery. Our process is designed to be transparent and straightforward for international buyers sending funds and documents across borders.
            </p>
          </div>

          {/* Trust Grid */}
          <div className="trust-grid">
            {trustCards.map((t) => (
              <div key={t.title} className="trust-card">
                <div className="trust-icon">{t.icon}</div>
                <strong>{t.title}</strong>
                <span>{t.desc}</span>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div style={{ marginTop: 64 }}>
            <h2 style={{ marginBottom: 32, textAlign: "center" }}>Our Export Process — Step by Step</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 720, margin: "0 auto" }}>
              {steps.map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "var(--soft)", borderRadius: 14, padding: "20px 24px", border: "1px solid var(--line)" }}>
                  <div style={{ minWidth: 40, height: 40, borderRadius: "50%", background: "var(--navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16 }}>
                    {s.n}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15, color: "var(--navy)", marginBottom: 4 }}>{s.title}</div>
                    <div style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="method-note" style={{ marginTop: 40 }}>
            <strong>Important scope reminder:</strong> Jasmine Global HI-Lux Export supplies and ships vehicles to the destination country or port only. Destination customs clearance, import duties, registration and local compliance are entirely the buyer&apos;s responsibility.
          </div>

          <div style={{ textAlign: "center", marginTop: 40, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn dark" href="/quote">Start an Export Enquiry</a>
            <a className="btn wa" href="https://wa.me/6589874467" target="_blank" rel="noopener noreferrer">WhatsApp • English</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
