import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SocialPillLinks } from "../components/SocialIcons";

export const metadata: Metadata = {
  title: "Customer Testimonials | Jasmine Global HI-Lux Export",
  description:
    "See proof of our customer collections and vehicle handovers for Toyota Hilux exports.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: "80px 0", background: "var(--soft)" }} aria-label="Customer collection testimonials">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="kicker">Customer Collection Proof</div>
            <h1 style={{ margin: "10px 0 16px", fontSize: "clamp(26px, 4vw, 44px)", color: "var(--navy)" }}>
              Customer collection testimonials
            </h1>
            <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto", fontSize: 16, lineHeight: 1.6 }}>
              This section is for customers who have collected their vehicles from us. For privacy and business protection, buyer names, company names and private client details are not published unless the customer gives written approval.
            </p>
          </div>

          <div className="proof-cards-grid">
            {[
              {
                title: "Customer Collection & Export Proof",
                quote: "Customer collection and export proof will be shown only when approval is given by the buyer. Private names, company details, chassis numbers and sensitive documents will be hidden for privacy and business protection.",
                tags: ["Name withheld", "Collection proof", "Customer privacy"],
                photoHint: "Customer with collected Hilux / vehicle handover",
              },
              // {
              //   title: "Vehicle Proof",
              //   quote: "Vehicle walkaround photos, chassis and engine verification, trim, year and colour confirmation may be shared where available.",
              //   tags: ["Walkaround photos", "Chassis check", "Vehicle verification"],
              //   photoHint: "Vehicle walkaround and inspection photos",
              // },
              // {
              //   title: "Movement Proof",
              //   quote: "Yard handover, vehicle carrier loading, port handover, container loading and lashing photos may be shared during the export process.",
              //   tags: ["Yard handover", "Carrier loading", "Port movement"],
              //   photoHint: "Loading, lashing and port handling photos",
              // },
              // {
              //   title: "Document Proof",
              //   quote: "Sample proforma invoice, packing list, bill of lading and export document samples may be shared with private details hidden.",
              //   tags: ["Invoice sample", "Packing list", "Export documents"],
              //   photoHint: "Sample export documents and paperwork",
              // },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 12px 32px rgba(7,23,47,0.06)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    background: "#eef2f6",
                    height: 220,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    padding: 24,
                    textAlign: "center",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <div style={{ fontSize: 32 }}>📷</div>
                  <div style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600 }}>
                    {card.photoHint}
                  </div>
                </div>
                <div style={{ padding: "32px 24px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <h2 style={{ fontSize: 18, fontWeight: 900, color: "var(--navy)", margin: "0 0 16px" }}>
                    {card.title}
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--ink)", margin: "0 0 24px", fontStyle: "italic", lineHeight: 1.6, flexGrow: 1 }}>
                    “{card.quote}”
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "rgba(215,164,74,0.1)",
                          color: "#997330",
                          border: "1px solid rgba(215,164,74,0.3)",
                          padding: "4px 10px",
                          borderRadius: 999,
                          fontSize: 11,
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 64,
              background: "var(--navy)",
              color: "#fff",
              borderRadius: 24,
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 900, margin: "0 0 16px" }}>
              For towing, loading, lashing and port handling photos
            </h3>
            <p style={{ color: "#dcecff", fontSize: 16, lineHeight: 1.6, maxWidth: 640, margin: "0 auto 32px" }}>
              We do not place all operational photos directly on the website. Please refer to our official social media pages for actual live photos and videos of towing, loading, lashing, yard movement, port handling and export preparation.
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
