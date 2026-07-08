import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Jasmine Global HI-Lux Export",
  description:
    "Find answers to frequently asked questions about exporting Toyota Hilux from the Philippines, shipping, documents and buyer responsibilities.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    q: "Do you handle destination customs clearance and vehicle registration?",
    a: "No. We supply and ship the Toyota Hilux to the destination country or port only. Destination customs clearance, taxes, registration, homologation and local compliance are handled by the buyer or the buyer's local agent.",
  },
  {
    q: "What is your main Philippines source?",
    a: "We specialise in Philippines-spec Toyota Hilux units only.",
  },
  {
    q: "Do you offer both container shipping and RoRo shipping?",
    a: "Yes. We can structure export supply by container shipping or RoRo shipping depending on vehicle type, route availability, loading strategy and buyer preference.",
  },
  {
    q: "Can I request a specific trim, year, colour or transmission?",
    a: "Yes. You can request the Philippines Hilux trim, model year, transmission, colour and preferred shipping method. Final availability is always subject to live stock and export eligibility.",
  },
  {
    q: "Do you sell to end users or only dealers?",
    a: "We can sell to both dealers and end users. However, every buyer is responsible for checking destination-country import rules and local compliance before purchase.",
  },
  {
    q: "Are the photos and specs shown on the website final?",
    a: "No. Website visuals and spec guides are for presentation and marketing. Final quotation should confirm the exact unit, trim, model year, condition, export documents and shipment method.",
  },
  {
    q: "Which languages do you support?",
    a: "Our main communication language is English. Arabic support is available through direct WhatsApp communication. Buyers using other languages may also enquire, and our team can assist with translation support where required.",
  },
  {
    q: "Will I receive a proforma invoice before payment?",
    a: "Yes. A formal proforma invoice or quotation will be issued before payment, showing confirmed vehicle details, export scope, payment terms and buyer responsibilities.",
  },
];

export default function FaqPage() {
  return (
    <main>
      <Nav />

      {/* Header */}
      <section style={{ padding: "80px 0 40px", background: "var(--soft)" }} aria-label="FAQ Header">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
            <div className="kicker">FAQ</div>
            <h1 style={{ margin: "10px 0 16px", fontSize: "clamp(26px, 4vw, 44px)", color: "var(--navy)" }}>
              Frequently Asked Questions
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.6 }}>
            Find answers to common questions about Toyota Hilux export, shipping methods, buyer responsibilities, quotations and destination compliance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section style={{ padding: "40px 0 80px", background: "var(--soft)" }} aria-label="FAQ Items">
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(7,23,47,0.04)",
                }}
              >
                <div style={{ padding: "24px 32px", background: "var(--navy)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.4 }}>
                    {faq.q}
                  </h3>
                </div>
                <div style={{ padding: "28px 32px" }}>
                  <p style={{ fontSize: 15, color: "var(--ink)", margin: 0, lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 0" }} aria-label="Contact CTA">
        <div className="wrap" style={{ textAlign: "center", maxWidth: 640 }}>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", color: "var(--navy)", margin: "0 0 16px" }}>
            Still have questions?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 16, margin: "0 0 32px" }}>
            Contact us directly via WhatsApp or email. We respond promptly.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/6589874467" className="btn wa" target="_blank" rel="noopener noreferrer">
              WhatsApp • English
            </a>
            <a href="https://wa.me/6581139145" className="btn wa" target="_blank" rel="noopener noreferrer">
              WhatsApp • عربي
            </a>
            <a href="mailto:admin@jasmineglobalexport.com" className="btn dark">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
