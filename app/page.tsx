import type { Metadata } from "next";
import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Toyota Hilux Export Specialist — Philippines Spec | Jasmine Global HI-Lux Export",
  description:
    "Buy and export Philippines-spec Toyota Hilux units worldwide. Singapore-based specialist — we source, verify, purchase, lash and ship by container or RoRo. Destination-country delivery only.",
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
              <h1>Export-Ready Toyota Hilux — Philippines Spec, Worldwide Delivery</h1>
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
                src="/images/hilux-hero.jpg"
                alt="Toyota Hilux Philippines export unit at port — Jasmine Global HI-Lux Export"
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
            <div className="stat"><b>2</b><span>Shipping modes — Container &amp; RoRo</span></div>
            <div className="stat"><b>8+</b><span>Toyota Hilux variants available for export</span></div>
            <div className="stat"><b>🇸🇬 + 🇵🇭</b><span>Singapore HQ &amp; Philippines Operations</span></div>
            <div className="stat"><b>1</b><span>Clear scope: export supply only — no local clearance or registration</span></div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section aria-label="How it works" style={{ padding: "72px 0", background: "var(--soft)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="kicker">Our Process</div>
            <h2 style={{ margin: "8px 0 12px" }}>How Your Hilux Export Works</h2>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto" }}>
              From enquiry to destination delivery — a straightforward, transparent process.
            </p>
          </div>
          <div className="how-steps" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "28px" }}>
            {[
              { step: "01", icon: "💬", title: "Send Enquiry", desc: "Contact us via the quote form or WhatsApp with your Hilux variant, destination, and quantity." },
              { step: "02", icon: "🔍", title: "We Source & Verify", desc: "We locate matching Philippines-spec units, verify trim, engine, condition and export eligibility." },
              { step: "03", icon: "📄", title: "Invoice & Lashing", desc: "We issue a proforma invoice, coordinate container or RoRo booking, and professionally lash the unit." },
              { step: "04", icon: "🚢", title: "Shipped to You", desc: "Your Hilux is shipped to your destination port. Customs, taxes and registration are your responsibility." },
            ].map((s) => (
              <div key={s.step} style={{ background: "var(--paper)", borderRadius: 16, padding: "28px 24px", border: "1px solid var(--line)", position: "relative" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ position: "absolute", top: 20, right: 20, fontWeight: 900, fontSize: 11, color: "var(--gold)", letterSpacing: "0.1em" }}>{s.step}</div>
                <h3 style={{ fontSize: 16, margin: "0 0 8px", color: "var(--navy)" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variants Preview */}
      <section aria-label="Hilux variants" style={{ padding: "72px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <div className="kicker">Available Units</div>
              <h2 style={{ margin: "8px 0 16px" }}>Philippines-Spec Toyota Hilux Variants</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                We specialise in the Philippines-market Toyota Hilux range. Whether you need the flagship GR-S 4x4 or the popular Conquest, we can source, verify and prepare units for export.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "24px 0", display: "flex", flexDirection: "column", gap: 10 }}>
                {["2.8 GR-S 4x4 A/T — Top-spec flagship", "2.8 CONQUEST 4x4 A/T — Export popular", "2.4 G 4x4 MT — Mid-range workhorse", "2.4 E 4x2 MT — Entry commercial"].map((v) => (
                  <li key={v} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--ink)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 900 }}>✓</span> {v}
                  </li>
                ))}
              </ul>
              <a className="btn dark" href="/specs">View All Specifications</a>
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow)" }}>
              <Image
                src="/images/hilux-white.jpg"
                alt="White Toyota Hilux GR-S 4x4 Philippines export unit"
                width={580}
                height={380}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section aria-label="Trust signals" style={{ padding: "56px 0", background: "var(--navy)", color: "#dcecff" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", textAlign: "center" }}>
            {[
              { icon: "🇸🇬", title: "Singapore HQ", desc: "Professional coordination from Singapore" },
              { icon: "🔍", title: "Vehicle Verified", desc: "Every unit inspected before export" },
              { icon: "📦", title: "Container & RoRo", desc: "Two shipping modes available" },
              { icon: "🌍", title: "Worldwide Delivery", desc: "Destination-country port delivery" },
            ].map((t) => (
              <div key={t.title}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{t.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#fff", marginBottom: 6 }}>{t.title}</div>
                <div style={{ fontSize: 13, color: "#94b4d4" }}>{t.desc}</div>
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
