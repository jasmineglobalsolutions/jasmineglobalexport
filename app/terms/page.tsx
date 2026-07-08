import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Jasmine Global HI-Lux Export",
  description:
    "Terms and Conditions for Jasmine Global HI-Lux Export. Read our export supply scope, buyer responsibilities, shipping terms, and disclaimers.",
  alternates: {
    canonical: "/terms",
  },
};

const terms = [
  {
    num: "1",
    title: "Company scope",
    content: "Jasmine Global HI-Lux Export acts as an export sourcing and coordination provider for selected vehicles, with a focus on Philippines-market Toyota Hilux units and approved left-hand-drive destination requests. We are not responsible for destination-country import approval, customs clearance, vehicle registration, insurance, roadworthiness approval, local taxes, duties, port storage or local delivery unless the service is expressly written into the confirmed quotation.",
  },
  {
    num: "2",
    title: "Vehicle information",
    content: "Photos, specifications, dimensions, accessories and website descriptions are for guidance and marketing. Final vehicle details must be confirmed through live stock verification, dealer confirmation, VIN or chassis details, inspection photos, proforma invoice and export documents. Minor specification differences may occur by market, production batch, dealer allocation or manufacturer update.",
  },
  {
    num: "3",
    title: "Quotations and validity",
    content: "All quotations are subject to live vehicle availability, foreign exchange movement, shipping space, carrier rate changes, port charges, documentation requirements and supplier confirmation. A quotation does not reserve a vehicle unless the required deposit or full payment is received and confirmed in writing.",
  },
  {
    num: "4",
    title: "Payment and reservation",
    content: "Payment terms will be stated in the proforma invoice or sales agreement. Bank charges, intermediary bank fees, currency conversion costs and delayed payment consequences are borne by the buyer unless otherwise agreed. A vehicle reservation may be cancelled if payment is delayed, incomplete or cannot be verified.",
  },
  {
    num: "5",
    title: "Cancellation and refunds",
    content: "Any cancellation, refund or change request is subject to supplier terms, bank charges, document costs, inspection costs, inland transport costs, shipping booking costs, port costs and any work already performed. Once a unit is purchased, prepared, documented, loaded or shipped, cancellation may not be possible.",
  },
  {
    num: "6",
    title: "Shipping and delivery",
    content: "Shipping may be arranged by container or RoRo depending on route availability, buyer preference and carrier acceptance. Estimated sailing dates, transit times and arrival dates are not guaranteed. Delays may occur due to carrier schedule changes, customs inspection, port congestion, weather, documentation checks, transshipment or force majeure events.",
  },
  {
    num: "7",
    title: "Buyer responsibilities",
    content: "The buyer is responsible for confirming import eligibility, destination duty and tax, local compliance, local agent appointment, customs clearance, registration, insurance, storage, demurrage, port collection and any destination-country documents not listed in our confirmed scope.",
  },
  {
    num: "8",
    title: "Inspection and handover proof",
    content: "We may provide available dealer photos, yard photos, loading photos, shipping documents and handover records where applicable. Buyer-requested third-party inspection, special photos, detailed condition report or additional verification may involve extra cost and must be requested before shipment.",
  },
  {
    num: "9",
    title: "Limitation of liability",
    content: "To the fullest extent permitted by law, our responsibility is limited to the services expressly stated in the confirmed invoice or agreement. We are not liable for destination import refusal, changes in law, carrier delay, port delay, buyer-side documentation failure, local registration rejection, loss of profit or indirect loss.",
  },
  {
    num: "10",
    title: "Brand and manufacturer notice",
    content: "Toyota, Hilux and related model names belong to their respective trademark owners. Jasmine Global HI-Lux Export is an independent export sourcing and coordination business and is not Toyota Motor Corporation, Toyota Motor Philippines or an official Toyota distributor unless expressly stated in writing by the relevant party.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <Nav />

      {/* Hero section */}
      <section
        style={{
          background: "var(--navy)",
          color: "#dcecff",
          padding: "80px 0",
        }}
        aria-label="Terms and Conditions"
      >
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ margin: "0 0 16px", fontSize: "clamp(32px, 5vw, 48px)", color: "#fff", fontWeight: 900 }}>
              Terms &amp; Conditions
            </h1>
            <p style={{ fontSize: 16, color: "#94b4d4", lineHeight: 1.6, margin: 0 }}>
              These terms explain the scope of Jasmine Global HI-Lux Export enquiries, quotations, vehicle supply, payment, shipment and buyer responsibilities. The final signed proforma invoice, sales agreement and shipping documents will control the confirmed transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Important Buyer Notice */}
      <section style={{ padding: "20px 0 24px", background: "var(--soft)" }}>
        <div className="wrap">
          <div
            style={{
              background: "linear-gradient(135deg, #fff7e6 0%, #fffdf7 100%)",
              border: "2px solid rgba(215,164,74,0.35)",
              borderRadius: 18,
              padding: "24px 28px",
              boxShadow: "0 10px 24px rgba(7,23,47,0.06)",
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "var(--navy)", margin: "0 0 10px" }}>
              Important Buyer Notice
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink)", margin: 0, lineHeight: 1.7 }}>
              Jasmine Global HI-Lux Export supplies and coordinates export shipment only. Destination customs clearance, import duties, taxes, registration, local compliance and local delivery are the buyer’s responsibility unless separately agreed in writing.
            </p>
          </div>
        </div>
      </section>

      {/* Scope Highlights */}
      <section style={{ padding: "20px 0 40px", background: "var(--soft)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginTop: -30 }}>
            {[
              {
                title: "Export supply only",
                content: "We source, verify, purchase, prepare and arrange export shipment of vehicles. Destination customs clearance, tax, registration, homologation and local road approval are not included unless separately agreed in writing.",
              },
              {
                title: "Subject to live stock",
                content: "Vehicle availability, colour, variant, model year, price, delivery time and shipping route are subject to confirmation at the time of quotation and payment.",
              },
              {
                title: "Buyer compliance duty",
                content: "The buyer must confirm that the vehicle can be legally imported, cleared, registered and used in the destination country before purchase.",
              },
            ].map((box) => (
              <div key={box.title} style={{ background: "var(--paper)", border: "2px solid var(--gold)", borderRadius: 16, padding: 32, boxShadow: "0 12px 32px rgba(7,23,47,0.12)" }}>
                <h3 style={{ fontSize: 18, fontWeight: 900, color: "var(--navy)", margin: "0 0 12px" }}>{box.title}</h3>
                <p style={{ fontSize: 14, color: "var(--ink)", margin: 0, lineHeight: 1.6 }}>{box.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main clauses */}
      <section style={{ padding: "40px 0 80px", background: "var(--soft)" }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {terms.map((term) => (
              <div
                key={term.num}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: "20px 32px", background: "rgba(21,90,157,0.05)", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ background: "var(--navy)", color: "#fff", width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900 }}>
                    {term.num}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: "var(--navy)", margin: 0 }}>
                    {term.title}
                  </h3>
                </div>
                <div style={{ padding: "28px 32px" }}>
                  <p style={{ fontSize: 15, color: "var(--ink)", margin: 0, lineHeight: 1.7 }}>
                    {term.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
