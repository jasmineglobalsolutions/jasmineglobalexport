import type { Metadata } from "next";
import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Toyota Hilux Export Specialist — Philippines Spec | Jasmine Global HI-Lux Export",
  description:
    "We source, verify, purchase, lash and ship Toyota Hilux units worldwide by container or RoRo. Destination-country delivery only.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="hero" aria-label="Hero section">
        <div className="wrap">
          <div className="hero-top-pill office-duo">
            <div className="office-box sg">
              <div className="office-flag">🇸🇬</div>
              <div>
                <div className="office-title">
                  Singapore Office <span className="office-role">Main HQ</span>
                </div>
                <div className="office-address">
                  390 Victoria Street, Golden Landmark Shopping Complex,
                  <br />#03-20, Singapore 188061
                </div>
              </div>
            </div>
            <div className="office-box ph">
              <div className="office-flag">🇵🇭</div>
              <div>
                <div className="office-title">
                  Philippines Office <span className="office-role">Operation HQ</span>
                </div>
                <div className="office-address">
                  Regus RM 401, 4th Floor, The Aurora Suites &amp; Pavilion,
                  <br />Canal Road cor. Labitan St., Central Business District,
                  <br />Subic Bay 2222, Freeport Zone, Zambales, Philippines
                </div>
              </div>
            </div>
          </div>

          <div className="hero-chip-stack">
            <div className="mini-chip">Specialised in Toyota Hilux</div>
            <div className="mini-chip">Container &amp; RoRo Export</div>
            <div className="mini-chip">Destination Country Delivery Only</div>
          </div>

          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div className="hero-text">
              <div className="kicker">Toyota Hilux Export Specialist</div>
              <h1>Specialised in Toyota Hilux Exports</h1>
              <div className="hero-subline">
                <span>Philippines Spec</span>
              </div>
              <p className="lead">
                We source, verify, purchase, lash and ship Toyota Hilux units
                worldwide by container or RoRo. We deliver to the destination
                country or port only.{" "}
                <strong>
                  Destination customs clearance, taxes, registration and local
                  compliance are handled by the buyer.
                </strong>
              </p>
              <div className="cta-row">
                <a className="btn dark" href="/specs">
                  View Available Specs
                </a>
                <a className="btn outline" href="/quote">
                  Request a Quote
                </a>
              </div>
              <div className="hero-bottom">
                <div className="feature">
                  <svg fill="none" viewBox="0 0 64 64">
                    <rect x="8" y="18" width="48" height="30" rx="4" stroke="#0f2a50" strokeWidth="3" />
                    <path d="M16 18v-6m32 6v-6M14 26h36M22 34h20" stroke="#d7a44a" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                  <div>
                    <b>Container Shipping</b>
                    <span>Controlled lashing and documentation</span>
                  </div>
                </div>
                <div className="feature">
                  <svg fill="none" viewBox="0 0 64 64">
                    <path d="M7 39h40l6-10h4c2 0 4 2 4 4v11H7z" stroke="#0f2a50" strokeWidth="3" />
                    <circle cx="20" cy="46" r="4" stroke="#d7a44a" strokeWidth="3" />
                    <circle cx="47" cy="46" r="4" stroke="#d7a44a" strokeWidth="3" />
                    <path d="M14 25h18l10 8" stroke="#0f2a50" strokeWidth="3" />
                  </svg>
                  <div>
                    <b>RoRo Shipping</b>
                    <span>Port-to-port export coordination</span>
                  </div>
                </div>
                <div className="feature">
                  <svg fill="none" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="22" stroke="#0f2a50" strokeWidth="3" />
                    <path d="M10 32h44M32 10c7 7 9 15 9 22s-2 15-9 22c-7-7-9-15-9-22s2-15 9-22z" stroke="#d7a44a" strokeWidth="3" />
                  </svg>
                  <div>
                    <b>Global Delivery</b>
                    <span>Worldwide destination-country supply</span>
                  </div>
                </div>
                <div className="feature">
                  <svg fill="none" viewBox="0 0 64 64">
                    <path d="M18 8h22l10 10v34a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" stroke="#0f2a50" strokeWidth="3" />
                    <path d="M40 8v12h12M22 34h20M22 42h14" stroke="#d7a44a" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                  <div>
                    <b>Export Documentation</b>
                    <span>Invoice, packing list and BL coordination</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-car-img" style={{ position: "relative", borderRadius: 20, overflow: "hidden", boxShadow: "0 32px 80px rgba(7,23,47,0.22)" }}>
              <Image
                src="/images/extracted-2-white-philippines-spec-toyota-hilux-at-port.jpg"
                alt="White Toyota Hilux Philippines export unit at port — Jasmine Global HI-Lux Export"
                width={620}
                height={440}
                priority
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Key facts">
        <div className="wrap">
          <div className="stats">
            <div className="stat"><b>1</b><span>Core sourcing market: Philippines</span></div>
            <div className="stat"><b>2</b><span>Shipping modes: Container and RoRo</span></div>
            <div className="stat"><b>190+</b><span>Country-location SEO pages supported</span></div>
            <div className="stat"><b>1</b><span>Clear scope: export supply only — no destination clearance or registration</span></div>
          </div>
        </div>
      </section>

      {/* 3 Colour Showcase */}
      <section aria-label="Philippines Hilux export positioning" style={{ padding: "72px 0", background: "var(--soft)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ margin: "8px 0 12px" }}>Philippines Hilux export positioning</h2>
            <p style={{ color: "var(--muted)", maxWidth: 700, margin: "0 auto" }}>
              Position the company as a specialist in Philippines-market spec Toyota Hilux units. The showcase below displays three separate Hilux colour examples in one clean row for export buyers.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
            {[
              {
                src: "/images/extracted-2-white-philippines-spec-toyota-hilux-at-port.jpg",
                alt: "White Toyota Hilux Philippines export unit",
                title: "White Hilux",
                desc: "Clean export presentation for buyers who prefer the most common fleet and retail colour.",
              },
              {
                src: "/images/extracted-3-black-philippines-spec-toyota-hilux-at-port.jpg",
                alt: "Black Toyota Hilux Philippines export unit",
                title: "Black Hilux",
                desc: "Premium look for GR-S, Conquest and higher-display customer quotations.",
              },
              {
                src: "/images/extracted-4-red-philippines-spec-toyota-hilux-at-port.jpg",
                alt: "Red Toyota Hilux Philippines export unit",
                title: "Red Hilux",
                desc: "Bright showroom-style colour option for buyers who want stronger visual impact.",
              },
            ].map((car) => (
              <div
                key={car.title}
                style={{
                  background: "var(--paper)",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                  boxShadow: "0 18px 45px rgba(7,23,47,0.10)",
                }}
              >
                <Image
                  src={car.src}
                  alt={car.alt}
                  width={480}
                  height={300}
                  style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "22px 24px 26px" }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: 18, color: "var(--navy)", fontWeight: 900 }}>{car.title}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{car.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Shipping Coverage Section */}
      <section aria-label="Global shipping coverage" style={{ padding: "80px 0", background: "linear-gradient(180deg,#071b35 0%,#0d2b55 100%)", color: "#dcecff" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
            <div>
              <h2 style={{ margin: "12px 0 18px", color: "#ffffff", fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: 1.2 }}>
                Global shipping coverage
              </h2>
              <p style={{ color: "#94b4d4", lineHeight: 1.75, marginBottom: "32px", fontSize: 16 }}>
                From the Philippines, Jasmine Global coordinates shipment of Toyota Hilux units to approved destination markets across Asia, the Middle East, Africa, Europe, Oceania, North America and South America by container or RoRo, subject to route availability and import regulations.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="/shipping" className="btn primary" style={{ background: "linear-gradient(135deg,var(--gold),#ffd778)", color: "#111827" }}>
                  Shipping Details
                </a>
                <a href="/vehicle-carrier" className="btn outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#dcecff", background: "rgba(255,255,255,0.08)" }}>
                  Vehicle Carrier Transfer
                </a>
              </div>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
              <Image
                src="/images/extracted-14-global-shipping-coverage-map-showing-toyota-hilux-exports-fr.jpg"
                alt="Global shipping coverage map showing Toyota Hilux exports from the Philippines to Asia, Middle East, Africa, Europe, Oceania, North America and South America"
                width={600}
                height={450}
                style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section aria-label="How the business works" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ margin: "8px 0 12px" }}>How the business works</h2>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto" }}>
              Keep the customer journey simple, visual and professional. The website should communicate a clean export-only scope from sourcing to international delivery.
            </p>
          </div>
          <div className="how-steps" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "28px" }}>
            {[
              { step: "1", title: "Source", desc: "Identify available Toyota Hilux units from the Philippines based on live market supply, spec, trim and export eligibility." },
              { step: "2", title: "Verify", desc: "Confirm basic vehicle details, condition, photos, trim, year, transmission, engine type and export paperwork before final quotation." },
              { step: "3", title: "Buy & Lash", desc: "Secure purchase, prepare unit for export, arrange lashing/stuffing or RoRo booking, and coordinate invoice, packing list and BL details." },
              { step: "4", title: "Ship", desc: "Ship to the destination country or port only. Buyer handles destination clearance, taxes, registration and all local compliance matters." },
            ].map((s) => (
              <div key={s.step} style={{ background: "var(--paper)", borderRadius: 16, padding: "28px 24px", border: "1px solid var(--line)", position: "relative" }}>
                <div style={{ position: "absolute", top: 20, right: 20, fontWeight: 900, fontSize: 11, color: "var(--gold)", letterSpacing: "0.1em" }}>STEP {s.step}</div>
                <h3 style={{ fontSize: 18, margin: "0 0 12px", color: "var(--navy)" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section aria-label="Trust signals" style={{ padding: "56px 0", background: "var(--navy)", color: "#dcecff" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", textAlign: "center" }}>
            {[
              { title: "Singapore-based coordination" },
              { title: "Vehicle verified" },
              { title: "Container & RoRo" },
              { title: "Worldwide delivery" },
            ].map((t) => (
              <div key={t.title}>
                <div style={{ fontWeight: 900, fontSize: 16, color: "#fff" }}>{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section aria-label="Call to action" style={{ padding: "72px 0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", marginBottom: 12 }}>Ready to Export Your Toyota Hilux?</h2>
          <p style={{ color: "var(--muted)", marginBottom: 32, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            Submit an enquiry or message us on WhatsApp. We respond promptly to all serious export enquiries.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn dark" href="/quote">Request Export Quote</a>
            <a className="btn wa" href="https://wa.me/6589874467" target="_blank" rel="noopener noreferrer">WhatsApp • English</a>
            <a className="btn wa" href="https://wa.me/6581139145" target="_blank" rel="noopener noreferrer">WhatsApp • عربي</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
