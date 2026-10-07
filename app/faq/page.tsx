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
    a: "No. We supply and ship the vehicle to the destination country or port only. Destination customs clearance, duties, taxes, registration, homologation and local compliance are handled by the buyer or the buyer's local agent.",
  },
  {
    q: "What is your main Philippines source?",
    a: "We specialise in Philippines-spec Toyota Hilux vehicles and also offer selected vehicles from the Philippine market. View our 2026 catalogues for the current range.",
  },
  {
    q: "Do you offer both container shipping and RoRo shipping?",
    a: "Yes. We coordinate export supply by container shipping or RoRo shipping depending on vehicle type, route availability, carrier arrangement and buyer preference.",
  },
  {
    q: "What is the difference between ready stock and a factory/indent order?",
    a: "Ready stock is a confirmed vehicle already available for immediate purchase. Factory/indent orders are for a new unit to be sourced and require the booking fee through the supplied Stripe link after the signed PI. The booking fee is non-refundable and credited toward the vehicle price.",
  },
  {
    q: "How do booking fees and credits work?",
    a: "The booking fee is charged per unit and credited toward the vehicle price. Ready-stock orders do not use the same generic booking fee schedule; a ready-stock order requires the 30% deposit by TT, with the remaining 70% due after warehouse photo verification.",
  },
  {
    q: "Does Stripe apply to all payments?",
    a: "No. Stripe is used only for the factory/indent booking fee after the signed PI. Ready-stock deposits, remaining balances, indent balances and shipping/lashing charges are TT only, with bank-issued MT103 required.",
  },
  {
    q: "Do I need to provide an MT103 for every TT payment?",
    a: "Yes. A bank-issued MT103 is required for every TT payment. Jasmine confirms cleared funds before dispatch and before document release on the relevant stages.",
  },
  {
    q: "What is the photo-verification milestone?",
    a: "The balance-payment milestone requires actual warehouse photos of the selected unit, matching VIN/chassis identity, loading preparation and secured lashing. Public gallery images are not a substitute for the buyer's own unit verification.",
  },
  {
    q: "How are shipping and lashing deadlines handled?",
    a: "Shipping and lashing are separate from the vehicle price. The due date is based on scheduled arrival at the destination port, and revised ETA or payment deadlines are confirmed if the vessel schedule changes.",
  },
  {
    q: "Can I request a specific trim, year, colour or transmission?",
    a: "Yes. You can request the Philippines Hilux trim, model year, transmission, colour and preferred shipping method. Final availability is always subject to live stock, export eligibility and the approved vehicle catalogue information.",
  },
  {
    q: "Do you sell to end users or only dealers?",
    a: "We can sell to both dealers and end users. However, every buyer is responsible for checking destination-country import rules, local duties and compliance before purchase.",
  },
  {
    q: "Are the photos and specs shown on the website final?",
    a: "No. Website visuals and spec guides are for presentation and marketing. Final quotation should confirm the exact unit, trim, model year, factory or stock status, colour, export documents, payment instructions and shipment method.",
  },
  {
    q: "Which languages do you support?",
    a: "We support English and Arabic through published WhatsApp contacts. Other language needs can be discussed by enquiry.",
  },
  {
    q: "Will I receive a proforma invoice before payment?",
    a: "Yes. A formal proforma invoice or quotation is issued before payment, showing the confirmed vehicle details, scope, pricing and payment terms. Payment instructions are only issued through the signed PI.",
  },
  {
    q: "How do payment milestones and deposits work?",
    a: "Ready stock orders require a 30% deposit by TT on confirmed stock reservation, with the remaining 70% due after actual warehouse photo verification. Factory/indent orders use the per-unit booking fee via Stripe, credited toward the vehicle price, then the remaining balance by TT after warehouse photo verification. Shipping and lashing charges are separate and due according to vessel arrival timelines.",
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
