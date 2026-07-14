import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Contact Us | Jasmine Global HI-Lux Export",
  description:
    "Contact Jasmine Global HI-Lux Export for Toyota Hilux export enquiries. Reach us via WhatsApp, email or use our quote form. Singapore and Philippines offices.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="section-title" aria-label="Contact intro">
        <div className="wrap">
          <span className="variant-note-pill">Get in Touch</span>
          <h1 style={{ marginTop: 12 }}>Contact Us</h1>
          <p style={{ maxWidth: 640, lineHeight: 1.7 }}>
            For Toyota Hilux export enquiries, quotations, shipping questions or document requests — reach us directly via WhatsApp, email or our quote form. We respond promptly to all serious export enquiries.
          </p>
        </div>
      </section>

      {/* ── Contact Methods ── */}
      <section style={{ padding: "72px 0", background: "var(--soft)" }} aria-label="Contact methods">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
              marginBottom: 56,
            }}
          >
            {[
              {
                icon: "💬",
                title: "WhatsApp — English",
                value: "+65 8987 4467",
                link: "https://wa.me/6589874467",
                linkLabel: "Chat on WhatsApp",
                note: "English enquiries, quotations, document requests",
              },
              {
                icon: "💬",
                title: "WhatsApp — عربي",
                value: "+65 8113 9145",
                link: "https://wa.me/6581139145",
                linkLabel: "Chat on WhatsApp",
                note: "Arabic buyer support",
              },
              {
                icon: "✉️",
                title: "Email",
                value: "admin@jasmineglobalexport.com",
                link: "mailto:admin@jasmineglobalexport.com",
                linkLabel: "Send Email",
                note: "Quotations, official communications and document requests",
              },
              {
                icon: "🌐",
                title: "Website",
                value: "www.jasmineglobalexport.com",
                link: "https://www.jasmineglobalexport.com/",
                linkLabel: "Visit Website",
                note: "Hilux specs, shipping options, export procedure and FAQ",
              },
            ].map((c) => (
              <div
                key={c.title}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 20,
                  padding: "28px 24px",
                  boxShadow: "0 8px 24px rgba(7,23,47,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ fontSize: 32 }}>{c.icon}</div>
                <h2 style={{ fontSize: 16, fontWeight: 900, color: "var(--navy)", margin: 0 }}>{c.title}</h2>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{c.note}</p>
                <a
                  href={c.link}
                  target={c.link.startsWith("http") ? "_blank" : undefined}
                  rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "inline-block",
                    marginTop: "auto",
                    background: "var(--navy)",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 900,
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  {c.linkLabel}
                </a>
              </div>
            ))}
          </div>

          {/* ── Offices ── */}
          <div className="grid-2" style={{ gap: 24 }}>
            {[
              {
                flag: "🇸🇬",
                label: "Singapore — Coordination HQ",
                address:
                  "390 Victoria Street, Golden Landmark Shopping Complex, #03-20, Singapore 188061",
                note: "Buyer enquiries · Quotations · Export documentation",
              },
              {
                flag: "🇵🇭",
                label: "Philippines — Operations",
                address:
                  "Regus RM 401, 4th Floor, The Aurora Suites & Pavilion, Canal Road cor. Labitan St., Central Business District, Subic Bay 2222, Freeport Zone, Zambales",
                note: "Vehicle sourcing · Verification · Lashing & shipping",
              },
            ].map((o) => (
              <div
                key={o.label}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  boxShadow: "0 4px 14px rgba(7,23,47,0.04)",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{o.flag}</div>
                <h3 style={{ fontSize: 16, fontWeight: 900, color: "var(--navy)", margin: "0 0 10px" }}>{o.label}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: 12 }}>{o.address}</p>
                <div style={{ fontSize: 12, color: "var(--navy)", fontWeight: 700, opacity: 0.7 }}>{o.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote CTA ── */}
      <section style={{ padding: "72px 0" }} aria-label="Quote CTA">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ margin: "0 0 14px" }}>Prefer a Formal Enquiry?</h2>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Use our structured quote form to provide your destination, vehicle preference, quantity and timeline. We will respond with live stock and a formal proforma invoice.
          </p>
          <a className="btn dark" href="/quote">Request Export Quote</a>
        </div>
      </section>
    </PageLayout>
  );
}
