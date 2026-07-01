"use client";

import { useState } from "react";
import PageLayout from "../components/PageLayout";

const faqs = [
  {
    q: "Do you handle destination customs clearance and vehicle registration?",
    a: "No. We supply and ship the Toyota Hilux to the destination country or port only. Destination customs clearance, import duties, taxes, registration and local compliance are handled entirely by the buyer.",
  },
  {
    q: "Do you offer both container shipping and RoRo shipping?",
    a: "Yes. We can structure export supply by container shipping (typically 2 Hilux units per 40FT container) or RoRo shipping (drive-on/drive-off vessel service), depending on route availability and buyer preference.",
  },
  {
    q: "Which Toyota Hilux variants are available for export?",
    a: "We specialise in Philippines-spec Hilux variants including the 2.8 GR-S 4x4 A/T, 2.8 Conquest 4x4 A/T, 2.4 G 4x4 MT, 2.4 J 4x2 MT and 2.4 E 4x2 MT. Availability depends on live stock at the time of enquiry.",
  },
  {
    q: "What documents do you provide for the export?",
    a: "We coordinate the proforma invoice, commercial invoice, packing list, and Bill of Lading. The exact documentation package depends on your destination port and shipping method. We communicate all documents clearly before and after shipment.",
  },
  {
    q: "Can you ship to any country?",
    a: "We can deliver to the destination port of many countries worldwide. However, not all routes support RoRo. Container shipping is generally available to more destinations. Contact us with your specific destination and we will confirm route availability.",
  },
  {
    q: "How do I confirm the exact Hilux unit before purchase?",
    a: "Our verification flow includes confirming photos, trim level, model year, transmission, engine details, colour, mileage (if applicable) and export eligibility for each specific unit before issuing a proforma invoice.",
  },
  {
    q: "How many Hilux units fit in one container?",
    a: "Typically, 2 Toyota Hilux Double Cab units can be loaded into a single 40FT container. The final arrangement depends on the vehicle dimensions and actual packing confirmation at the time of loading.",
  },
  {
    q: "How long does shipping take?",
    a: "Transit time varies by destination. Container shipping to nearby Asian destinations may take 7–14 days. Longer routes (Africa, Middle East) can take 3–6 weeks. We provide estimated transit times at the time of quotation.",
  },
  {
    q: "Do you export left-hand drive (LHD) vehicles?",
    a: "Our primary focus is Philippines-spec Hilux, which is right-hand drive (RHD). For LHD market enquiries, please contact us directly — we may be able to assist via our other-makes or alternative sourcing channels.",
  },
  {
    q: "How do I start the process?",
    a: "Submit an enquiry via our quote form or contact us on WhatsApp. Provide your required Hilux variant, destination country and port, quantity and preferred shipping method. We will respond with availability and pricing.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageLayout>
      <section className="section-title" aria-label="FAQ intro">
        <div className="wrap">
          <span className="variant-note-pill">Buyer FAQ</span>
          <h1 style={{ marginTop: 12 }}>Frequently Asked Questions — Toyota Hilux Export</h1>
          <p>
            Answers to the most common questions from international Toyota Hilux export buyers. If your question is not listed here, contact us directly.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="faq-box">
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
                <button
                  className="faq-q"
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  {item.q}
                  <span className="plus">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="faq-a">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <p style={{ color: "var(--muted)", marginBottom: 20 }}>Still have a question? Reach us directly:</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn dark" href="/quote">Submit an Enquiry</a>
              <a className="btn wa" href="https://wa.me/6589874467" target="_blank" rel="noopener noreferrer">WhatsApp • English</a>
              <a className="btn wa" href="https://wa.me/6581139145" target="_blank" rel="noopener noreferrer">WhatsApp • عربي</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
