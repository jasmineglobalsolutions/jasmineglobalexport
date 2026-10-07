import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Export Procedure & Purchase Journey | Jasmine Global HI-Lux Export",
  description:
    "Learn the verified 8-step export procedure we follow to source, verify, purchase, lash and ship Toyota Hilux units from the Philippines.",
  alternates: {
    canonical: "/procedure",
  },
};

const PURCHASE_STEPS = [
  {
    step: "1",
    title: "Select your vehicle",
    desc: "Choose make, model, variant, colour, quantity and destination.",
  },
  {
    step: "2",
    title: "Confirm the order details",
    desc: "Confirm availability, lead time, specifications, import eligibility, warranty, compulsory insurance and distributor accessories.",
  },
  {
    step: "3",
    title: "Sign the proforma invoice",
    desc: "Review the itemised PI. Ready stock: pay 30% by TT. Factory order: pay the applicable booking fee through the supplied Stripe link.",
  },
  {
    step: "4",
    title: "Verify warehouse photos",
    desc: "Check the actual unit, VIN/chassis, loading preparation and secured lashing against your order.",
  },
  {
    step: "5",
    title: "Pay the remaining balance",
    desc: "Ready stock: remaining 70%. Factory order: vehicle price less the credited booking fee. Pay shipping/lashing when due.",
  },
  {
    step: "6",
    title: "Submit MT103; funds are confirmed",
    desc: "Provide a bank-issued MT103 for every TT. Jasmine confirms cleared funds before dispatch.",
  },
  {
    step: "7",
    title: "Shipment and documents",
    desc: "Receive shipment updates, commercial invoice, packing list and Bill of Lading at the appropriate stages.",
  },
  {
    step: "8",
    title: "Arrival and local clearance",
    desc: "Your local agent handles destination clearance, duties, taxes, registration and collection.",
  },
];

export default function ProcedurePage() {
  return (
    <main>
      <Nav />

      {/* Hero section */}
      <section
        style={{
          background: "linear-gradient(135deg,#071b35 0%,#0d2b55 100%)",
          color: "#dcecff",
          padding: "80px 0 60px",
        }}
        aria-label="Hero section"
      >
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(215,164,74,0.15)",
                border: "1px solid rgba(215,164,74,0.35)",
                borderRadius: 999,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 800,
                color: "var(--gold)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Toyota Hilux Export Procedure
            </div>
            <h1 style={{ margin: "0 0 16px", fontSize: "clamp(32px, 5vw, 56px)", color: "#fff", lineHeight: 1.1, fontWeight: 900 }}>
              The Hilux Export Procedure
            </h1>
            <div
              style={{
                display: "inline-block",
                background: "var(--blue)",
                color: "#fff",
                padding: "4px 12px",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 800,
                marginBottom: 24,
              }}
            >
              Philippines Export Sourcing &amp; Shipment
            </div>
            <p style={{ fontSize: 18, color: "#94b4d4", lineHeight: 1.6, margin: "0 0 36px" }}>
              We follow a verified, structured eight-step export procedure for Toyota Hilux units worldwide by container or RoRo. We deliver to the agreed destination port only. <strong style={{ color: "#fff" }}>Destination customs clearance, taxes, registration and local compliance are handled by the buyer.</strong>
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/specs" className="btn primary" style={{ background: "linear-gradient(135deg,var(--gold),#ffd778)", color: "#111827" }}>
                View Available Specs
              </Link>
              <Link href="/price-list" className="btn outline" style={{ borderColor: "rgba(215,164,74,0.6)", color: "#ffd778", background: "rgba(215,164,74,0.1)" }}>
                View Price List &amp; Catalogues
              </Link>
              <Link href="/quote" className="btn outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#dcecff", background: "rgba(255,255,255,0.08)" }}>
                Request an Export Quote
              </Link>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid-4" style={{ gap: 24, marginTop: 64 }}>
            {[
              { title: "Container Shipping", desc: "Standard 2 units per 40FT/40HC container with controlled lashing", icon: "📦" },
              { title: "RoRo Shipping", desc: "Confirmed carrier arrangements and port-to-port export coordination", icon: "🚢" },
              { title: "Global Delivery", desc: "Worldwide destination port supply to approved import markets", icon: "🌍" },
              { title: "Export Documentation", desc: "Itemised PI, commercial invoice, packing list and Bill of Lading", icon: "📄" },
            ].map((f) => (
              <div key={f.title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "#94b4d4", lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ padding: "40px 0", background: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, textAlign: "center" }}>
            {[
              { val: "1", label: "Core sourcing market: Philippines" },
              { val: "2", label: "Shipping modes: Container and RoRo" },
              { val: "3", label: "Clear scope: export supply only — no destination clearance or registration" },
            ].map((stat) => (
              <div key={stat.label} style={{ flex: "0 1 260px" }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: "var(--gold)", marginBottom: 8 }}>{stat.val}</div>
                <div style={{ fontSize: 13, color: "#dcecff", lineHeight: 1.4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Step Purchase Journey Section (Matching Mockup 03) */}
      <section id="purchase-journey" style={{ padding: "80px 0", background: "var(--soft)", scrollMarginTop: "30px" }}>
        <div className="wrap">
          <div className="purchase-journey-card" style={{ marginTop: 0 }}>
            <p className="purchase-journey-kicker">Verified Export Process</p>
            <h2 className="purchase-journey-title" id="purchase-journey-title">
              Purchase Journey
            </h2>
            <p className="purchase-journey-subtitle">
              From vehicle selection to destination collection
            </p>

            <div className="purchase-journey-grid">
              {PURCHASE_STEPS.map((s) => (
                <div key={s.step} className="journey-item">
                  <div className="journey-badge" aria-hidden="true">
                    {s.step}
                  </div>
                  <div className="journey-content">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="journey-callout-box" style={{ marginTop: 32 }}>
              <strong style={{ display: "block", marginBottom: 6 }}>Confirm before placing the order:</strong>
              Confirm the original manufacturer version, selected specification, colour, stock/order status, lead time,
              destination eligibility and warranty. Confirm any compulsory insurance and distributor-supplied
              accessories and itemise the applicable charges in the proforma invoice.
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(215,164,74,0.25)" }}>
                <strong>Container arrangement standard:</strong> Standard Hilux container arrangement: 2 vehicles in a
                40FT / 40HC container. A 3-vehicle arrangement is a special request and requires an approved loading
                plan. Other vehicles and routes are assessed individually.
              </div>
            </div>
          </div>

          {/* Order Distinction & Payment Journey Link Callout */}
          <div
            style={{
              marginTop: 32,
              padding: "28px 32px",
              background: "linear-gradient(135deg, #071b35 0%, #0d2b55 100%)",
              borderRadius: 16,
              border: "1px solid rgba(215, 164, 74, 0.35)",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <div>
                <span style={{ color: "#f4c86a", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  Distinct Payment Schedule
                </span>
                <h3 style={{ margin: "6px 0 0", fontSize: 20, color: "#fff", fontWeight: 850 }}>
                  Ready Stock vs. Factory Orders
                </h3>
              </div>
              <Link
                href="/price-list#payment-journey"
                className="btn primary"
                style={{
                  background: "linear-gradient(135deg, var(--gold), #ffd778)",
                  color: "#071b35",
                  fontWeight: 800,
                  fontSize: 13,
                  padding: "10px 20px",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                }}
              >
                View Payment Journey &rarr;
              </Link>
            </div>
            <p style={{ margin: 0, color: "#c6d7e9", fontSize: 14.5, lineHeight: 1.75 }}>
              <strong style={{ color: "#f4c86a" }}>No generic booking fees:</strong> No customer is asked for a generic booking fee and a 30% deposit for the same ready-stock order. Ready stock requires only the 30% deposit via TT. Factory/indent orders require the booking fee via Stripe. Final balances are due only after actual warehouse photo verification.
            </p>
            <div style={{ paddingTop: 14, borderTop: "1px solid rgba(215,164,74,0.25)", color: "#a8bdd4", fontSize: 13.5, lineHeight: 1.7 }}>
              <strong style={{ color: "#f4c86a" }}>Container loading standard:</strong> Standard Hilux container arrangement: 2 vehicles in a 40FT / 40HC container. A 3-vehicle arrangement is a special request and requires an approved loading plan. Other vehicles and routes are assessed individually.
            </div>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", color: "var(--navy)", margin: "0 0 16px" }}>Built for serious international Hilux buyers</h2>
            <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto", fontSize: 16 }}>
              Built for serious international buyers who need clear communication, vehicle verification and transparent export scope before sending documents, deposits or purchase funds.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 32 }}>
            {[
              { icon: "🇸🇬", title: "Singapore-based coordination", desc: "Our Singapore office acts as the main coordination point for buyer enquiries, quotation, documentation communication and export updates." },
              { icon: "🔍", title: "Vehicle verification flow", desc: "Before final quotation, confirm actual unit photos, trim, year, transmission, engine, condition notes, import eligibility and warranty." },
              { icon: "🚢", title: "RoRo & container options", desc: "Guide buyers clearly between port-to-port RoRo and controlled 40HC container loading, with carrier arrangements confirmed prior to quotation." },
              { icon: "🤝", title: "Multilingual buyer support", desc: "English and Arabic buyers can communicate directly via official WhatsApp. Buyers using other languages can also enquire, and our team will support the conversation." },
            ].map((t) => (
              <div key={t.title} style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "var(--paper)", border: "1px solid var(--line)", padding: 24, borderRadius: 16 }}>
                <div style={{ fontSize: 40, lineHeight: 1 }}>{t.icon}</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: "var(--navy)", margin: "0 0 8px" }}>{t.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--ink)", margin: 0, lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, padding: 24, background: "rgba(21,90,157,0.06)", border: "1px solid rgba(21,90,157,0.2)", borderRadius: 12, display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ fontSize: 24 }}>💬</div>
            <p style={{ margin: 0, fontSize: 14, color: "var(--navy)", lineHeight: 1.6 }}>
              <strong>Direct WhatsApp assistance:</strong> English and Arabic support are available through our direct WhatsApp lines. Buyers can verify specifications, stock status and proforma terms directly with our operations team.
            </p>
          </div>
        </div>
      </section>

      {/* Proof section */}
      <section style={{ padding: "80px 0", background: "var(--soft)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", color: "var(--navy)", margin: "0 0 16px" }}>Proof, documentation and buyer confidence</h2>
            <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto", fontSize: 16 }}>
              How Jasmine Global verifies each unit and protects your order through documented milestones.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { num: "1", title: "Actual unit photo & video verification", desc: "Verify actual warehouse photos and video of the selected unit, including exterior, interior, odometer, and VIN/chassis plate matched to the order." },
                  { num: "2", title: "Signed proforma invoice before payment", desc: "Issue an itemised PI confirming unit price, compulsory insurance, accessories, freight charges, delivery terms, payment instructions and deadlines." },
                  { num: "3", title: "Loading preparation and secured lashing", desc: "Verify container stuffing, secured lashing and port handover photos before settling the vehicle balance. For RoRo, evidence arrangements are confirmed with the carrier." },
                  { num: "4", title: "Buyer scope transparency", desc: "Jasmine delivers to the destination port only. Destination customs clearance, taxes, duties, registration and local homologation are the buyer's responsibility." },
                ].map((item) => (
                  <div key={item.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, flexShrink: 0 }}>{item.num}</div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 900, color: "var(--navy)", margin: "0 0 6px" }}>{item.title}</h4>
                      <p style={{ fontSize: 14, color: "var(--ink)", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 20, padding: 32, boxShadow: "0 12px 40px rgba(7,23,47,0.08)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 900, color: "var(--navy)", margin: "0 0 20px" }}>Evidence provided for your order</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Vehicle walkaround photos (exterior & interior)",
                  "VIN and chassis number verification photos",
                  "Container loading and secured lashing photos",
                  "Port or yard handover photos",
                  "Commercial invoice and packing list",
                  "Draft and original Bill of Lading documents",
                  "Vessel departure and transit updates",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 15, color: "var(--ink)" }}>
                    <span style={{ color: "var(--gold)" }}>📸</span> {item}
                  </li>
                ))}
              </ul>
              <div style={{ padding: 16, background: "var(--soft)", borderRadius: 10, fontSize: 13, color: "var(--muted)", border: "1px solid var(--line)" }}>
                <strong>Verification guarantee:</strong> Vehicle balance payments are triggered only after actual warehouse photo verification of your assigned unit.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
