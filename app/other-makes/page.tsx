import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Other Vehicle Makes & Models Export | Jasmine Global",
  description:
    "While we specialise in Toyota Hilux exports, Jasmine Global can source and export other commercial vehicles and SUVs from the Philippines. Submit your requirements for a quote.",
  alternates: { canonical: "/other-makes" },
};

const otherVehicles = [
  {
    name: "Toyota Hiace",
    desc: "Philippines-spec Toyota Hiace Commuter and GL Grandia. Excellent for passenger transport and commercial fleet use. Available for export via RoRo or Container.",
    icon: "🚐",
  },
  {
    name: "Mitsubishi Strada / Triton",
    desc: "A strong alternative to the Hilux. We can source the Mitsubishi Strada (Triton) 4x4 and 4x2 variants for export.",
    icon: "🛻",
  },
  {
    name: "Toyota Fortuner",
    desc: "The SUV sibling to the Hilux. Available in various trims including V, Q, and GR-S. Ideal for buyers needing a robust 7-seater SUV.",
    icon: "🚙",
  },
  {
    name: "Nissan Urvan",
    desc: "Commercial passenger van alternative. We can supply the Nissan Urvan for export markets requiring reliable people movers.",
    icon: "🚌",
  },
];

export default function OtherMakesPage() {
  return (
    <PageLayout>
      <section className="section-title" aria-label="Other makes intro">
        <div className="wrap">
          <span className="variant-note-pill">Alternative Sourcing</span>
          <h1 style={{ marginTop: 12 }}>Exporting Other Commercial Vehicles &amp; SUVs</h1>
          <p>
            While our primary specialty is the Toyota Hilux, our direct access to the Philippines automotive market allows us to source and export other in-demand commercial vehicles, pickup trucks and SUVs.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 30 }}>
            <a className="btn dark" href="/price-list">Browse 2026 Vehicle Catalogues</a>
            <a className="btn outline" href="/quote">Request a Custom Quote</a>
          </div>

          <div className="trust-grid" style={{ marginBottom: 56 }}>
            {otherVehicles.map((v) => (
              <div
                key={v.name}
                className="trust-card"
                style={{
                  color: "#163152",
                  background: "#f4f7fb",
                  border: "1px solid rgba(17, 45, 82, 0.12)",
                }}
              >
                <div className="trust-icon" style={{ color: "#0d2b55" }}>{v.icon}</div>
                <strong style={{ fontSize: 18, marginBottom: 8, display: "block", color: "#0d2b55" }}>{v.name}</strong>
                <span style={{ color: "#1f3553", lineHeight: 1.7 }}>{v.desc}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--soft)", padding: 40, borderRadius: 16, border: "1px solid var(--line)" }}>
            <h2 style={{ marginBottom: 16 }}>Looking for something specific?</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.6, marginBottom: 24, maxWidth: 600 }}>
              The examples above are a sample of the approved 17-brand range. If you require a specific commercial vehicle, LHD configuration or fleet order not listed here, let us know and we can confirm availability before the signed PI.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn dark" href="/price-list">Browse 2026 Vehicle Catalogues</a>
              <a className="btn outline" href="/quote">Request a Custom Quote</a>
              <a className="btn outline" href="https://wa.me/6589874467" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
