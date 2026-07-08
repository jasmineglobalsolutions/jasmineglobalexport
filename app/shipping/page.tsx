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

      <Footer />
    </main>
  );
}
