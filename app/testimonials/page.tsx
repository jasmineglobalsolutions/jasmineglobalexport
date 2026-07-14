import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SocialPillLinks } from "../components/SocialIcons";

export const metadata: Metadata = {
  title: "Customer Collection & Export Proof | Jasmine Global HI-Lux Export",
  description:
    "Approved customer proof, vehicle handover photos, container loading, export documents and buyer feedback from Jasmine Global HI-Lux Export. Published only with buyer approval.",
  alternates: {
    canonical: "/testimonials",
  },
};

const proofCategories = [
  {
    icon: "🚗",
    title: "Vehicle Handover / Collection Photos",
    desc: "Photos of buyer collection, vehicle handover at yard or port, with private names and chassis details hidden unless written approval is given.",
  },
  {
    icon: "📦",
    title: "Container Loading & Lashing Photos",
    desc: "40HC container loading, internal lashing and securing of the Hilux unit prior to port departure. Shared where available and appropriate.",
  },
  {
    icon: "🚢",
    title: "RoRo Handover or Port Proof",
    desc: "RoRo vessel handover, drive-on documentation and port-side movement photos where the shipping route uses RoRo service.",
  },
  {
    icon: "📊",
    title: "Shipping Milestone Screenshots",
    desc: "Bill of lading confirmation, booking reference, container tracking or shipping line milestone screenshots may be shared during the export process.",
  },
  {
    icon: "📄",
    title: "Sample Export Documents",
    desc: "Sample proforma invoice, packing list, and export document layouts with all private data, chassis numbers, and bank details removed.",
  },
  {
    icon: "💬",
    title: "Buyer Feedback",
    desc: "Written feedback or communication from buyers may be shared — name, company name or initials only, and only where the buyer has given written approval.",
  },
];

export default function TestimonialsPage() {
  return (
    <main>
      <Nav />

      {/* ── Hero Section ── */}
      <section style={{ padding: "80px 0", background: "var(--soft)" }} aria-label="Customer Collection & Export Proof">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="kicker">Customer Collection Proof</div>
            <h1 style={{ margin: "10px 0 16px", fontSize: "clamp(26px, 4vw, 44px)", color: "var(--navy)" }}>
              Customer Collection &amp; Export Proof
            </h1>
            <p style={{ color: "var(--muted)", maxWidth: 680, margin: "0 auto", fontSize: 16, lineHeight: 1.7 }}>
              Approved customer proof will be uploaded after completed export shipments. Private names, company names, chassis numbers, bank details and sensitive documents will be hidden unless written approval is given.
            </p>
          </div>

          {/* ── Coming Soon Banner ── */}
          <div
            style={{
              background: "var(--paper)",
              border: "2px dashed var(--gold)",
              borderRadius: 20,
              padding: "48px 40px",
              textAlign: "center",
              marginBottom: 64,
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>⏳</div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "var(--navy)", margin: "0 0 12px" }}>
              Coming Soon After Approved Completed Shipments
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
              We do not publish fake testimonials or staged content. Real buyer proof — vehicle photos, container loading, port handover and export documents — will be published here after shipments are completed and written buyer approval is received.
            </p>
          </div>

          {/* ── Proof Categories ── */}
          <div style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "var(--navy)", margin: "0 0 8px", textAlign: "center" }}>
              Proof Categories
            </h2>
            <p style={{ color: "var(--muted)", textAlign: "center", fontSize: 15, marginBottom: 36 }}>
              These are the types of export proof we may provide, subject to shipment stage and buyer approval.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 24,
              }}
            >
              {proofCategories.map((cat) => (
                <div
                  key={cat.title}
                  style={{
                    background: "var(--paper)",
                    border: "1px solid var(--line)",
                    borderRadius: 16,
                    padding: "28px 24px",
                    display: "flex",
                    gap: 18,
                    alignItems: "flex-start",
                    boxShadow: "0 4px 16px rgba(7,23,47,0.05)",
                  }}
                >
                  <div style={{ fontSize: 32, lineHeight: 1, flexShrink: 0 }}>{cat.icon}</div>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 900, color: "var(--navy)", margin: "0 0 8px" }}>
                      {cat.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                      {cat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Privacy Note ── */}
          <div
            style={{
              background: "rgba(21,90,157,0.06)",
              border: "1px solid rgba(21,90,157,0.2)",
              borderRadius: 14,
              padding: "20px 24px",
              marginBottom: 64,
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
            }}
          >
            <div style={{ fontSize: 22, flexShrink: 0 }}>🔒</div>
            <p style={{ margin: 0, fontSize: 14, color: "var(--navy)", lineHeight: 1.7 }}>
              <strong>Privacy commitment:</strong> We will never publish buyer names, company names, chassis numbers, bank details or sensitive shipping documents without explicit written permission. Buyer initials or company type only — unless the buyer approves full disclosure in writing.
            </p>
          </div>

          {/* ── Social Media CTA ── */}
          <div
            style={{
              background: "var(--navy)",
              color: "#fff",
              borderRadius: 24,
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 900, margin: "0 0 14px" }}>
              Operational Photos &amp; Videos — Follow Us on Social Media
            </h3>
            <p style={{ color: "#dcecff", fontSize: 15, lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>
              Live photos and videos of towing, loading, lashing, yard movement, port handling and export preparation are shared on our official social media channels. Selected approved proof will also be published here on the website.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SocialPillLinks />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
