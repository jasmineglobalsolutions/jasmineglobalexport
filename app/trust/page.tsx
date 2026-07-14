import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Buyer Trust & Payment Safety | Jasmine Global HI-Lux Export",
  description:
    "How Jasmine Global HI-Lux Export handles enquiry, quotation, payment and shipment for Toyota Hilux exports. Proforma invoice process, document safety and destination-country responsibilities explained.",
  alternates: { canonical: "/trust" },
};

const trustSteps = [
  {
    step: "01",
    icon: "💬",
    title: "Enquiry",
    desc: "Buyer submits enquiry via form or WhatsApp. We confirm receipt and ask for destination, variant, quantity, shipping preference and buyer type.",
  },
  {
    step: "02",
    icon: "🔍",
    title: "Live Stock Check",
    desc: "We check live Philippines-market Toyota Hilux availability against the buyer's requirements. Trim, colour, model year and export eligibility are confirmed.",
  },
  {
    step: "03",
    icon: "📄",
    title: "Proforma Invoice",
    desc: "A formal proforma invoice is issued before any payment. It states the confirmed vehicle, export scope, payment terms and buyer responsibilities.",
  },
  {
    step: "04",
    icon: "💳",
    title: "Payment Confirmation",
    desc: "Payment instructions are stated only in the official proforma invoice. Buyers verify bank details directly with our official email or WhatsApp before transfer.",
  },
  {
    step: "05",
    icon: "🚢",
    title: "Shipment & Documents",
    desc: "After payment, we finalise export documentation, arrange carrier booking, lashing/loading and provide shipping milestone updates to the buyer.",
  },
  {
    step: "06",
    icon: "🏁",
    title: "Destination Port Handover",
    desc: "Vehicle arrives at the agreed destination port. Buyer or appointed customs broker handles clearance, duties, taxes, registration and local delivery.",
  },
];

const docTypes = [
  { icon: "📋", name: "Proforma Invoice", desc: "Issued before payment — states vehicle, scope, price, payment terms and buyer responsibilities." },
  { icon: "🧾", name: "Commercial Invoice", desc: "Issued after confirmed payment — used for customs declaration at destination." },
  { icon: "📦", name: "Packing List", desc: "Lists vehicle details, weight, dimensions and container/loading reference." },
  { icon: "🚢", name: "Bill of Lading (Draft / Final)", desc: "Shipping line document for cargo release at destination port." },
  { icon: "📸", name: "Vehicle & Loading Photos", desc: "Walkaround, chassis, interior and container lashing photos where available." },
  { icon: "📊", name: "Shipping Milestone Updates", desc: "Booking confirmation, vessel name, voyage and estimated arrival at destination port." },
];

export default function TrustPage() {
  return (
    <PageLayout>

      {/* ── Hero ── */}
      <section className="section-title" aria-label="Buyer trust intro">
        <div className="wrap">
          <span className="variant-note-pill">Payment Safety</span>
          <h1 style={{ marginTop: 12 }}>Buyer Trust &amp; Payment Safety</h1>
          <p style={{ maxWidth: 720, lineHeight: 1.7 }}>
            Buying a vehicle for export is a high-value transaction. Jasmine Global HI-Lux Export uses a clear enquiry, quotation, verification, payment and shipment process so buyers understand the vehicle details, export scope, shipping method and destination-country responsibilities before payment and shipment.
          </p>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section style={{ padding: "72px 0", background: "var(--soft)" }} aria-label="Export process steps">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="kicker">How It Works</div>
            <h2 style={{ margin: "10px 0 12px" }}>From Enquiry to Destination Port</h2>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
              A transparent, step-by-step process — no payment before proforma, no surprises at the port.
            </p>
          </div>
          <div className="how-steps" style={{ display: "grid", gap: 24 }}>
            {trustSteps.map((s) => (
              <div
                key={s.step}
                style={{
                  background: "var(--paper)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  border: "1px solid var(--line)",
                  position: "relative",
                  boxShadow: "0 4px 16px rgba(7,23,47,0.05)",
                }}
              >
                <div style={{ position: "absolute", top: 20, right: 20, fontWeight: 900, fontSize: 11, color: "var(--gold)", letterSpacing: "0.1em" }}>
                  STEP {s.step}
                </div>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontSize: 17, margin: "0 0 10px", color: "var(--navy)", fontWeight: 900 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Documents Section ── */}
      <section style={{ padding: "72px 0" }} aria-label="Documents buyers may receive">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="kicker">Documentation</div>
            <h2 style={{ margin: "10px 0 12px" }}>Documents Buyers May Receive</h2>
            <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
              Depending on the confirmed transaction and shipment stage, buyers may receive the following. Private buyer information, bank details, chassis numbers and sensitive documents will be hidden in any public examples.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {docTypes.map((doc) => (
              <div
                key={doc.name}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: "24px 20px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  boxShadow: "0 4px 16px rgba(7,23,47,0.04)",
                }}
              >
                <div style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{doc.icon}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 900, color: "var(--navy)", margin: "0 0 6px" }}>{doc.name}</h3>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Payment Safety ── */}
      <section style={{ padding: "72px 0", background: "var(--soft)" }} aria-label="Payment safety">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="kicker">Payment Safety</div>
            <h2 style={{ margin: "10px 0 12px" }}>How We Handle Payment</h2>
          </div>
          <div
            style={{
              background: "var(--paper)",
              border: "1.5px solid rgba(215,164,74,0.4)",
              borderRadius: 20,
              padding: "40px 36px",
              boxShadow: "0 8px 32px rgba(7,23,47,0.07)",
            }}
          >
            <p style={{ fontSize: 16, color: "var(--ink)", lineHeight: 1.8, marginBottom: 20 }}>
              Payment instructions will be stated only in the official proforma invoice or written confirmation from Jasmine Global. Buyers should verify bank account details directly with our official email or WhatsApp before making payment. Bank charges, intermediary fees and currency conversion costs are borne by the buyer unless otherwise agreed in writing.
            </p>
            <div
              style={{
                background: "rgba(215,164,74,0.08)",
                border: "1px solid rgba(215,164,74,0.3)",
                borderRadius: 12,
                padding: "16px 20px",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
              <p style={{ margin: 0, fontSize: 14, color: "var(--navy)", lineHeight: 1.6, fontWeight: 600 }}>
                Always verify bank account details directly with our official email (<a href="mailto:admin@jasmineglobalexport.com" style={{ color: "var(--navy)" }}>admin@jasmineglobalexport.com</a>) or WhatsApp before any transfer. Do not act on payment instructions received through unofficial channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Destination Responsibility ── */}
      <section style={{ padding: "72px 0" }} aria-label="Destination responsibility">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="kicker">Scope & Responsibility</div>
            <h2 style={{ margin: "10px 0 12px" }}>Destination Responsibility</h2>
          </div>
          <div
            style={{
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderRadius: 20,
              padding: "40px 36px",
              boxShadow: "0 8px 32px rgba(7,23,47,0.06)",
            }}
          >
            <p style={{ fontSize: 16, color: "var(--ink)", lineHeight: 1.8, marginBottom: 24 }}>
              Jasmine Global coordinates export supply and shipment to the agreed destination port only. Buyers are responsible for destination customs clearance, import duties, taxes, registration, homologation, local compliance, insurance, storage, demurrage, port release and local delivery unless separately agreed in writing.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 12,
              }}
            >
              {[
                "Destination customs clearance",
                "Import duties & taxes",
                "Vehicle registration",
                "Homologation / certification",
                "Local compliance checks",
                "Insurance in destination country",
                "Port storage & demurrage",
                "Local delivery from port",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    fontSize: 14,
                    color: "var(--ink)",
                    background: "var(--soft)",
                    borderRadius: 10,
                    padding: "10px 14px",
                    border: "1px solid var(--line)",
                  }}
                >
                  <span style={{ color: "var(--gold)", fontWeight: 900 }}>→</span>
                  {item} <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--muted)", fontWeight: 800 }}>Buyer</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "72px 0", background: "var(--navy)", color: "#fff" }} aria-label="Request quote CTA">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#fff", margin: "0 0 14px" }}>Ready to Request an Export Quote?</h2>
          <p style={{ color: "#94b4d4", fontSize: 16, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Submit your enquiry and we will respond with live stock availability, export scope and a formal proforma invoice before any payment is requested.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn dark" href="/quote" style={{ background: "linear-gradient(135deg,var(--gold),#f0c060)", color: "#071b35", border: "none" }}>
              Request Export Quote
            </a>
            <a className="btn wa" href="https://wa.me/6589874467" target="_blank" rel="noopener noreferrer">
              WhatsApp • English
            </a>
            <a className="btn wa" href="https://wa.me/6581139145" target="_blank" rel="noopener noreferrer">
              WhatsApp • عربي
            </a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
