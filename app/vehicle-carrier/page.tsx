import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Vehicle Carrier Transfer | Jasmine Global HI-Lux Export",
  description:
    "Vehicle carrier transfer services for Toyota Hilux exports. Container shipping and RoRo Roll-on/Roll-off shipping from Philippines. Professional lashing, secure transport, worldwide delivery.",
  alternates: {
    canonical: "/vehicle-carrier",
  },
};

const processSteps = [
  {
    step: "01",
    icon: "🔍",
    title: "Vehicle Inspection & Verification",
    desc: "Every Toyota Hilux is thoroughly inspected before carrier transfer. We verify the chassis number, engine number, trim level, and condition. All units must pass our pre-export checklist.",
  },
  {
    step: "02",
    icon: "📋",
    title: "Export Documentation Preparation",
    desc: "We prepare all required export documents including Commercial Invoice, Packing List, Export Declaration, and arrange the Bill of Lading with the shipping line.",
  },
  {
    step: "03",
    icon: "🏗️",
    title: "Professional Vehicle Lashing",
    desc: "For container shipments, the vehicle is professionally lashed and secured inside the ISO container using certified tie-down straps and wheel chocks to international standards.",
  },
  {
    step: "04",
    icon: "🚢",
    title: "Carrier Loading & Departure",
    desc: "The container or RoRo booking is confirmed with the shipping line. The vehicle is loaded at the Philippines port of origin and the vessel departure is monitored by our team.",
  },
  {
    step: "05",
    icon: "📍",
    title: "Transit Tracking",
    desc: "We provide shipping details including the vessel name, voyage number, and estimated arrival at destination port. You can track your shipment via the shipping line's website.",
  },
  {
    step: "06",
    icon: "🏁",
    title: "Arrival at Destination Port",
    desc: "Upon arrival at your destination port, you or your appointed customs broker will arrange for customs clearance and release of the vehicle. This is the buyer's full responsibility.",
  },
];

const shippingModes = [
  {
    title: "Container Shipping (FCL)",
    image: "/images/ContainerShipping.jpg",
    alt: "Container shipping for Toyota Hilux export",
    badge: "Most Common",
    features: [
      "Full Container Load (FCL) — one vehicle per 20ft container or multiple in 40ft",
      "Maximum protection from weather, salt air, and physical damage during transit",
      "Professional lashing and securing by our team at the port",
      "Suitable for most worldwide destinations",
      "Port-to-port export shipment unless another written arrangement is confirmed in the quotation. Destination clearance, local delivery and registration remain the buyer’s responsibility.",
      "Competitive rates for single and multi-unit shipments",
    ],
    desc: "Container shipping is the most widely used method for our Hilux exports. The vehicle is loaded into a standard ISO shipping container, professionally lashed, and sealed for ocean transit. This method provides maximum protection and is accepted at virtually all ports worldwide.",
  },
  {
    title: "RoRo Shipping (Roll-on/Roll-off)",
    image: "/images/RoRoShipping.jpg",
    alt: "RoRo Roll-on Roll-off shipping for Toyota Hilux export",
    badge: "Cost Effective",
    features: [
      "Vehicle is driven directly onto the vessel's car deck",
      "Cost-effective for high-volume or specific routes",
      "Available on select shipping lanes",
      "Secured by the carrier per international maritime standards",
      "Port-to-port service",
      "Suitable for certain Middle East, Pacific, and African routes",
    ],
    desc: "RoRo (Roll-on/Roll-off) shipping is a cost-effective alternative where the vehicle is driven aboard the vessel. RoRo is available on select routes and is a common method used by large automotive exporters. The vehicle is secured on the car deck by the shipping carrier's crew.",
  },
];

const carriers = [
  { name: "Wallenius Wilhelmsen", type: "RoRo", routes: "Asia Pacific, Middle East, Africa" },
  { name: "K-Line / MOL", type: "RoRo & Container", routes: "Asia Pacific, Middle East" },
  { name: "Evergreen Marine", type: "Container", routes: "Worldwide" },
  { name: "Hapag-Lloyd", type: "Container", routes: "Worldwide" },
  { name: "MSC", type: "Container", routes: "Worldwide" },
  { name: "CMA CGM", type: "Container", routes: "Worldwide" },
];

export default function VehicleCarrierPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg,#071b35 0%,#0d2b55 100%)",
          color: "#dcecff",
          padding: "80px 0 64px",
        }}
        aria-label="Vehicle Carrier Transfer hero"
      >
        <div className="wrap">
          <div className="grid-2" style={{ gap: "56px", alignItems: "center" }}>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(215,164,74,0.15)",
                  border: "1px solid rgba(215,164,74,0.35)",
                  borderRadius: 999,
                  padding: "6px 16px",
                  fontSize: 12,
                  fontWeight: 800,
                  color: "var(--gold)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                🚢 Shipping Services
              </div>
              <h1
                style={{
                  fontSize: "clamp(26px, 4vw, 44px)",
                  color: "#ffffff",
                  margin: "0 0 18px",
                  lineHeight: 1.15,
                  fontWeight: 900,
                }}
              >
                Vehicle Carrier Transfer Before Export Shipment
              </h1>
              <p style={{ color: "#94b4d4", fontSize: 16, lineHeight: 1.75, margin: "0 0 32px", maxWidth: 520 }}>
                Before export shipment, Toyota Hilux units may be moved by professional vehicle carrier from the dealer, yard or holding location to the designated loading area or port. This helps reduce unnecessary road mileage and protects the vehicle condition before container loading or RoRo handover.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="/quote"
                  className="btn primary"
                  style={{ background: "linear-gradient(135deg,var(--gold),#ffd778)", color: "#111827" }}
                >
                  Request Shipping Quote
                </a>
                <a
                  href="https://wa.me/6589874467"
                  className="btn wa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid-3" style={{ gap: "16px", marginTop: 36 }}>
                {[
                  { value: "2", label: "Shipping Modes" },
                  { value: "🌍", label: "Worldwide Routes" },
                  { value: "FCL", label: "Full Container Load" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 14,
                      padding: "18px 14px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 28, fontWeight: 900, color: "var(--gold)", marginBottom: 4 }}>{stat.value}</div>
                    <div style={{ fontSize: 12, color: "#94b4d4", fontWeight: 600 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
              <Image
                src="/images/Vehicle-carrier-transfer.jpg"
                alt="Vehicle carrier transfer — Toyota Hilux being loaded for export shipping"
                width={600}
                height={450}
                priority
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Modes */}
      <section style={{ padding: "80px 0" }} aria-label="Shipping modes">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="kicker">Shipping Options</div>
            <h2 style={{ margin: "10px 0 14px" }}>Two Modes of Vehicle Carrier Transfer</h2>
            <p style={{ color: "var(--muted)", maxWidth: 580, margin: "0 auto", fontSize: 16 }}>
              We coordinate both container and RoRo shipping for Toyota Hilux exports. The best method depends on your destination, budget, and timeline.
            </p>
          </div>

          <div className="grid-2" style={{ gap: "36px" }}>
            {shippingModes.map((mode) => (
              <div
                key={mode.title}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 18px 45px rgba(7,23,47,0.10)",
                }}
              >
                <div style={{ position: "relative" }}>
                  <Image
                    src={mode.image}
                    alt={mode.alt}
                    width={580}
                    height={320}
                    style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "linear-gradient(135deg,var(--gold),#ffd778)",
                    color: "#111827",
                    fontWeight: 900,
                    fontSize: 11,
                    padding: "5px 14px",
                    borderRadius: 999,
                    letterSpacing: "0.05em",
                  }}>
                    {mode.badge}
                  </div>
                </div>
                <div style={{ padding: "32px 36px" }}>
                  <h3 style={{ fontSize: 22, fontWeight: 900, color: "var(--navy)", margin: "0 0 14px" }}>
                    {mode.title}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7, margin: "0 0 24px" }}>
                    {mode.desc}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {mode.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink)", lineHeight: 1.5 }}>
                        <span style={{ color: "var(--gold)", fontWeight: 900, flexShrink: 0, marginTop: 1 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/quote" className="btn dark" style={{ fontSize: 14, padding: "12px 24px" }}>
                    Get a Quote for {mode.title.split("(")[0].trim()}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section style={{ padding: "80px 0", background: "var(--soft)" }} aria-label="Vehicle carrier transfer process">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="kicker">How It Works</div>
            <h2 style={{ margin: "10px 0 14px" }}>Vehicle Carrier Transfer Process</h2>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto" }}>
              From vehicle inspection to arrival at your destination port — a transparent, step-by-step process.
            </p>
          </div>

          <div className="grid-3" style={{ gap: "24px" }}>
            {processSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  padding: "32px 28px",
                  position: "relative",
                  boxShadow: "0 8px 24px rgba(7,23,47,0.07)",
                }}
              >
                <div style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  fontWeight: 900,
                  fontSize: 11,
                  color: "var(--gold)",
                  letterSpacing: "0.1em",
                  background: "rgba(215,164,74,0.1)",
                  padding: "4px 10px",
                  borderRadius: 999,
                }}>
                  {step.step}
                </div>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{step.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 900, color: "var(--navy)", margin: "0 0 12px" }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Lines */}
      <section style={{ padding: "72px 0" }} aria-label="Shipping partners">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="kicker">Shipping Lines</div>
            <h2 style={{ margin: "10px 0 14px" }}>Major Carriers We Work With</h2>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto" }}>
              We coordinate with leading international shipping lines to ensure reliable vessel options for your Hilux export.
            </p>
          </div>

          <div className="grid-3" style={{ gap: "18px", marginBottom: 48 }}>
            {carriers.map((carrier) => (
              <div
                key={carrier.name}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: "22px 24px",
                  boxShadow: "0 4px 16px rgba(7,23,47,0.07)",
                }}
              >
                <div style={{ fontWeight: 900, fontSize: 16, color: "var(--navy)", marginBottom: 6 }}>{carrier.name}</div>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "3px 10px",
                  borderRadius: 999,
                  background: "rgba(21,90,157,0.1)",
                  color: "var(--blue)",
                  fontSize: 12,
                  fontWeight: 700,
                  marginBottom: 8,
                }}>
                  {carrier.type}
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>📍 {carrier.routes}</div>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div
            style={{
              background: "var(--sky)",
              border: "1px solid #c3d9f0",
              borderRadius: 16,
              padding: "28px 32px",
            }}
          >
            <h3 style={{ fontSize: 17, fontWeight: 900, color: "var(--navy)", margin: "0 0 12px" }}>
              ⚠️ Important: Buyer Responsibilities at Destination
            </h3>
            <p style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.7, margin: 0 }}>
              Jasmine Global&apos;s vehicle carrier transfer service ends when the vehicle is delivered to the agreed destination port.
              All costs and processes after port arrival — including <strong>customs clearance, import duties, local taxes, vehicle registration,
              and compliance with destination country regulations</strong> — are the sole responsibility of the buyer.
              We recommend engaging a licensed customs broker in your destination country before shipment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "72px 0",
          background: "linear-gradient(135deg,#071b35 0%,#0d2b55 100%)",
          color: "#dcecff",
        }}
        aria-label="Get a shipping quote"
      >
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "#fff", margin: "0 0 14px" }}>
            Ready to Ship Your Toyota Hilux?
          </h2>
          <p style={{ color: "#94b4d4", margin: "0 0 32px", maxWidth: 520, marginLeft: "auto", marginRight: "auto", fontSize: 16 }}>
            Contact us with your destination, vehicle variant and quantity. We will confirm available shipping modes and provide a freight estimate.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/quote"
              className="btn primary"
              style={{ background: "linear-gradient(135deg,var(--gold),#ffd778)", color: "#111827" }}
            >
              Request Shipping Quote
            </a>
            <a
              href="https://wa.me/6589874467"
              className="btn wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp • English
            </a>
            <a
              href="https://wa.me/6581139145"
              className="btn wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp • عربي
            </a>
            <a
              href="mailto:admin@jasmineglobalexport.com"
              className="btn outline"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#dcecff", background: "rgba(255,255,255,0.08)" }}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
