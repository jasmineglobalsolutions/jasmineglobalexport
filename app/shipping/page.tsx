import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Shipping Options: Container & RoRo | Jasmine Global HI-Lux Export",
  description:
    "We coordinate vehicle carrier transfer for Toyota Hilux exports via container shipping or Roll-on/Roll-off (RoRo) vessels. Worldwide shipping from the Philippines.",
  alternates: {
    canonical: "/shipping",
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
export default function ShippingPage() {
  return (
    <main>
      <Nav />

      {/* Section 1 - Vehicle carrier transfer */}
      <section style={{ padding: "80px 0" }} aria-label="Vehicle carrier transfer">
        <div className="wrap">
          <div className="grid-2" style={{ gap: "48px", alignItems: "center" }}>
            <div>
              <div className="kicker">Pre-shipment handling</div>
              <h2 style={{ margin: "10px 0 16px", fontSize: "clamp(26px, 4vw, 44px)", color: "var(--navy)" }}>
                Shipping Options: Container or RoRo
              </h2>
              <p style={{ color: "var(--ink)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                Jasmine Global HI-Lux Export coordinates international shipment of Toyota Hilux units from the Philippines by container or RoRo, depending on destination route, vehicle quantity, carrier availability and buyer requirements.
              </p>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 12px 32px rgba(7,23,47,0.12)" }}>
              <Image
                src="/images/extracted-13-four-brand-new-toyota-hilux-units-on-a-professional-vehicle-.jpg"
                alt="Four brand-new Toyota Hilux units on a professional vehicle carrier at the port"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
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

      {/* Section 2 - Global shipping coverage */}
      <section style={{ padding: "80px 0", background: "var(--soft)" }} aria-label="Global shipping coverage">
        <div className="wrap">
          <div className="grid-2" style={{ gap: "48px", alignItems: "center" }}>
            <div style={{ order: 2 }}>
              <h2 style={{ margin: "0 0 16px", fontSize: "clamp(26px, 4vw, 44px)", color: "var(--navy)" }}>
                Global shipping coverage
              </h2>
              <p style={{ color: "var(--ink)", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                From the Philippines, Jasmine Global coordinates shipment of Toyota Hilux units to approved destination markets across Asia, the Middle East, Africa, Europe, Oceania, North America and South America by container or RoRo, subject to route availability and import regulations.
              </p>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 12px 32px rgba(7,23,47,0.12)", order: 1 }}>
              <Image
                src="/images/extracted-14-global-shipping-coverage-map-showing-toyota-hilux-exports-fr.jpg"
                alt="Global shipping coverage map showing Toyota Hilux exports from the Philippines to Asia, Middle East, Africa, Europe, Oceania, North America and South America"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Shipping Options */}
      <section style={{ padding: "80px 0" }} aria-label="Shipping Options">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", color: "var(--navy)", margin: "0 0 16px" }}>
              Shipping Options: Container or RoRo
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: 700, margin: "0 auto", fontSize: 16 }}>
              Buyers can choose between container shipping and RoRo shipping, subject to route availability. Container shipping is for secured loading inside a container. RoRo shipping is for a driveable Hilux that is driven onto the vessel at the port.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 32 }}>
            {/* Container Article */}
            <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 24, overflow: "hidden", boxShadow: "0 12px 32px rgba(7,23,47,0.06)" }}>
              <div style={{ position: "relative" }}>
                <Image
                  src="/images/extracted-15-two-toyota-hilux-units-secured-back-to-back-inside-a-40hc-co.jpg"
                  alt="Two Toyota Hilux units secured back-to-back inside a 40HC container"
                  width={500}
                  height={300}
                  style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(7,27,53,0.9)", color: "#fff", padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 800 }}>
                  2 Hilux in 1 container
                </div>
              </div>
              <div style={{ padding: 32 }}>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "var(--navy)", margin: "0 0 8px" }}>
                  Container Shipping
                </h3>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--gold)", margin: "0 0 16px" }}>
                  40FT Container Shipping
                </h4>
                <div style={{ fontSize: 13, fontWeight: 800, color: "var(--blue)", background: "rgba(21,90,157,0.1)", padding: "4px 10px", borderRadius: 6, display: "inline-block", marginBottom: 20 }}>
                  2 Hilux units • secured container loading • export ready
                </div>
                <p style={{ fontSize: 15, color: "var(--ink)", margin: "0 0 24px", lineHeight: 1.6 }}>
                  Suitable when the buyer prefers both Hilux units professionally loaded and secured inside a container. This option is ideal for controlled export handling and a clean, protected presentation for shipment.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 900 }}>✓</span>
                    <strong>Best for:</strong> dealer shipments, multiple units, and routes where container freight is preferred.
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 900 }}>✓</span>
                    <strong>Loading method:</strong> both vehicles are professionally positioned and secured inside the container for export shipment.
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 900 }}>✓</span>
                    <strong>Important:</strong> final loading arrangement remains subject to actual vehicle dimensions and packing confirmation before shipment.
                  </li>
                </ul>
              </div>
            </div>

            {/* RoRo Article */}
            <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 24, overflow: "hidden", boxShadow: "0 12px 32px rgba(7,23,47,0.06)" }}>
              <div style={{ position: "relative" }}>
                <Image
                  src="/images/extracted-16-toyota-hilux-lashed-on-a-roro-vessel-deck-for-shipping.jpg"
                  alt="Toyota Hilux lashed on a RoRo vessel deck for shipping"
                  width={500}
                  height={300}
                  style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(7,27,53,0.9)", color: "#fff", padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 800 }}>
                  Drive-on / drive-off
                </div>
              </div>
              <div style={{ padding: 32 }}>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "var(--navy)", margin: "0 0 8px" }}>
                  RoRo Shipping
                </h3>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--gold)", margin: "0 0 16px" }}>
                  RoRo Shipping
                </h4>
                <div style={{ fontSize: 13, fontWeight: 800, color: "var(--blue)", background: "rgba(21,90,157,0.1)", padding: "4px 10px", borderRadius: 6, display: "inline-block", marginBottom: 20 }}>
                  Driveable Hilux • port handover • vessel loading
                </div>
                <p style={{ fontSize: 15, color: "var(--ink)", margin: "0 0 24px", lineHeight: 1.6 }}>
                  Suitable when the Hilux is driveable and the destination route has RoRo vessel service. The unit is delivered to the port, handed over to the RoRo operator, and driven onto the vessel for port-to-port shipment.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 900 }}>✓</span>
                    <strong>Best for:</strong> single units, simple port-to-port movement, and routes with available RoRo service.
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 900 }}>✓</span>
                    <strong>Loading method:</strong> no container stuffing. The vehicle is driven onto the RoRo vessel.
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 900 }}>✓</span>
                    <strong>Important:</strong> buyer handles destination customs clearance, taxes, registration and local compliance.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 40, padding: 32, background: "var(--navy)", color: "#fff", borderRadius: 20, textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 600, lineHeight: 1.6 }}>
              <strong style={{ color: "var(--gold)" }}>Clear message for customers:</strong> Container shipping gives more controlled loading and lashing. RoRo shipping may be suitable for single units or routes where drive-on / drive-off vessel service is available. Final shipping method will be confirmed before quotation.
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
