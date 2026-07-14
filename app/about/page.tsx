import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "About Jasmine Global HI-Lux Export | Philippines Toyota Hilux Export Specialist",
  description:
    "Jasmine Global HI-Lux Export is a Toyota Hilux export specialist coordinated from Singapore with Philippines operations in Subic Bay. We source, verify, purchase and ship Philippines-spec Hilux units to approved international markets.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="section-title" aria-label="About intro">
        <div className="wrap">
          <span className="variant-note-pill">About Us</span>
          <h1 style={{ marginTop: 12 }}>About Jasmine Global HI-Lux Export</h1>
          <p style={{ maxWidth: 700, lineHeight: 1.7 }}>
            Jasmine Global HI-Lux Export is a Toyota Hilux export specialist. We source, verify, purchase and ship Philippines-spec Toyota Hilux units to international buyers via container or RoRo shipping. Our coordination is based in Singapore, with direct operations at Subic Bay Freeport Zone, Philippines.
          </p>
        </div>
      </section>

      {/* ── Brand vs Legal Note ── */}
      <section style={{ padding: "56px 0", background: "var(--soft)" }} aria-label="Brand identity">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div
            style={{
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderRadius: 20,
              padding: "36px 32px",
              boxShadow: "0 8px 24px rgba(7,23,47,0.06)",
            }}
          >
            <div className="kicker" style={{ marginBottom: 12 }}>Brand &amp; Legal Entity</div>
            <h2 style={{ margin: "0 0 16px", fontSize: "clamp(20px,3vw,28px)" }}>HI-Lux Export is our trading brand</h2>
            <p style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.7, marginBottom: 16 }}>
              <strong>Jasmine Global HI-Lux Export</strong> is the trading and export brand operated under <strong>Jasmine Global Process Solutions OPC</strong>. All invoices, agreements and official communications are issued under the correct registered legal entity. Buyers should verify legal entity details on any invoice before payment.
            </p>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
              This website and the Jasmine Global HI-Lux Export brand are not affiliated with, authorised by or endorsed by Toyota Motor Corporation or any Toyota subsidiary. Toyota and Hilux are registered trademarks of Toyota Motor Corporation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Offices ── */}
      <section style={{ padding: "72px 0" }} aria-label="Offices">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="kicker">Our Locations</div>
            <h2 style={{ margin: "10px 0 12px" }}>Singapore &amp; Philippines</h2>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
              Buyer coordination, enquiry management and export documentation are handled from Singapore. Vehicle sourcing, verification and shipment operations are based in the Philippines.
            </p>
          </div>
          <div className="grid-2" style={{ gap: 32 }}>
            {[
              {
                flag: "🇸🇬",
                label: "Singapore — Coordination HQ",
                address: "390 Victoria Street, Golden Landmark Shopping Complex, #03-20, Singapore 188061",
                role: "Buyer enquiries · Quotations · Export documentation · Payments",
              },
              {
                flag: "🇵🇭",
                label: "Philippines — Operations",
                address: "Regus RM 401, 4th Floor, The Aurora Suites & Pavilion, Canal Road cor. Labitan St., Central Business District, Subic Bay 2222, Freeport Zone, Zambales",
                role: "Vehicle sourcing · Verification · Lashing & loading · Port operations",
              },
            ].map((office) => (
              <div
                key={office.label}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  boxShadow: "0 8px 24px rgba(7,23,47,0.05)",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{office.flag}</div>
                <h3 style={{ fontSize: 18, fontWeight: 900, color: "var(--navy)", margin: "0 0 10px" }}>{office.label}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: 16 }}>{office.address}</p>
                <div
                  style={{
                    background: "rgba(215,164,74,0.08)",
                    border: "1px solid rgba(215,164,74,0.25)",
                    borderRadius: 10,
                    padding: "10px 14px",
                    fontSize: 13,
                    color: "var(--navy)",
                    fontWeight: 700,
                  }}
                >
                  {office.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scope ── */}
      <section style={{ padding: "72px 0", background: "var(--soft)" }} aria-label="What we do">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="kicker">What We Do</div>
            <h2 style={{ margin: "10px 0 12px" }}>Export Supply Only — Destination Port</h2>
          </div>
          <div
            style={{
              background: "var(--navy)",
              color: "#dcecff",
              borderRadius: 20,
              padding: "40px 36px",
            }}
          >
            <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 24, color: "#dcecff" }}>
              Jasmine Global coordinates export supply and shipment coordination from the Philippines to the agreed destination port. We do not handle destination customs clearance, import duties, taxes, vehicle registration, homologation, local compliance, storage, port release or local delivery unless separately agreed in writing.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Source", "Verify", "Purchase & Prepare", "Ship to Destination Port"].map((step, i) => (
                <div
                  key={step}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10,
                    padding: "10px 18px",
                    fontSize: 13,
                    fontWeight: 900,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "var(--gold)" }}>{i + 1}.</span> {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section style={{ padding: "72px 0" }} aria-label="Contact CTA">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ margin: "0 0 14px" }}>Get in Touch</h2>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
            For export enquiries, quotations or any questions about our company, reach us via email or WhatsApp.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn dark" href="/quote">Request Export Quote</a>
            <a className="btn wa" href="https://wa.me/6589874467" target="_blank" rel="noopener noreferrer">WhatsApp • English</a>
            <a className="btn wa" href="https://wa.me/6581139145" target="_blank" rel="noopener noreferrer">WhatsApp • عربي</a>
            <a className="btn dark" href="mailto:admin@jasmineglobalexport.com">Email Us</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
