import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Philippines Source | Jasmine Global HI-Lux Export",
  description:
    "We specialise in Philippines-market Toyota Hilux units. Learn how we source, verify, purchase, lash and ship Toyota Hilux worldwide.",
  alternates: {
    canonical: "/source",
  },
};

export default function SourcePage() {
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
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
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
              Toyota Hilux Export Specialist
            </div>
            <h1 style={{ margin: "0 0 16px", fontSize: "clamp(32px, 5vw, 56px)", color: "#fff", lineHeight: 1.1, fontWeight: 900 }}>
              Specialised in Toyota Hilux Exports
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
              Philippines Spec
            </div>
            <p style={{ fontSize: 18, color: "#94b4d4", lineHeight: 1.6, margin: "0 0 36px" }}>
              We source, verify, purchase, lash and ship Toyota Hilux units worldwide by container or RoRo. We deliver to the destination country or port only. <strong style={{ color: "#fff" }}>Destination customs clearance, taxes, registration and local compliance are handled by the buyer.</strong>
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/specs" className="btn primary" style={{ background: "linear-gradient(135deg,var(--gold),#ffd778)", color: "#111827" }}>
                View Available Specs
              </a>
              <a href="/quote" className="btn outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#dcecff", background: "rgba(255,255,255,0.08)" }}>
                Request a Quote
              </a>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid-4" style={{ gap: 24, marginTop: 64 }}>
            {[
              { title: "Container Shipping", desc: "Controlled lashing and documentation", icon: "📦" },
              { title: "RoRo Shipping", desc: "Port-to-port export coordination", icon: "🚢" },
              { title: "Global Delivery", desc: "Worldwide destination-country supply", icon: "🌍" },
              { title: "Export Documentation", desc: "Invoice, packing list and BL coordination", icon: "📄" },
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

      {/* How the business works */}
      <section style={{ padding: "80px 0", background: "var(--soft)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", color: "var(--navy)", margin: "0 0 16px" }}>How the business works</h2>
            <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto", fontSize: 16 }}>
              We keep the buyer journey clear from the first enquiry to shipment. Our role is to source, verify, purchase, prepare and coordinate export shipment of Toyota Hilux units from the Philippines.
            </p>
          </div>

          <div className="how-steps" style={{ display: "grid", gap: 24 }}>
            {[
              { step: "1", title: "Source", desc: "Identify available Toyota Hilux units from the Philippines based on live market supply, spec, trim and export eligibility." },
              { step: "2", title: "Verify", desc: "Confirm basic vehicle details, condition, photos, trim, year, transmission, engine type and export paperwork before final quotation." },
              { step: "3", title: "Buy & Lash", desc: "Secure purchase, prepare unit for export, arrange lashing/stuffing or RoRo booking, and coordinate invoice, packing list and BL details." },
              { step: "4", title: "Ship", desc: "Ship to the destination country or port only. Buyer handles destination clearance, taxes, registration and all local compliance matters." },
            ].map((s) => (
              <div key={s.step} style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px 24px", position: "relative" }}>
                <div style={{ position: "absolute", top: 16, right: 16, fontSize: 12, fontWeight: 900, color: "var(--gold)", background: "rgba(215,164,74,0.1)", padding: "4px 10px", borderRadius: 999 }}>STEP {s.step}</div>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "var(--navy)", margin: "24px 0 12px" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--ink)", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
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
              { icon: "🔍", title: "Vehicle verification flow", desc: "Before final quotation, confirm photos, trim, year, transmission, engine, condition notes and export eligibility." },
              { icon: "🚢", title: "RoRo & container options", desc: "Guide buyers clearly between port-to-port RoRo and controlled 40HC container loading, depending on route and buyer needs." },
              { icon: "🤝", title: "Multilingual buyer support", desc: "English and Arabic buyers can communicate directly by WhatsApp. Buyers using other languages can still enquire; our team will support the conversation using translation tools and the planned language API." },
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
            <div style={{ fontSize: 24 }}>🌐</div>
            <p style={{ margin: 0, fontSize: 14, color: "var(--navy)", lineHeight: 1.6 }}>
              <strong>Language API ready:</strong> English and Arabic support are available through direct WhatsApp communication. Buyers using other languages may also enquire, and our team can assist using translation support where required.
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
              Export buyers need to see how you protect the process.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { num: "1", title: "Photo and video confirmation", desc: "Send buyer photos or video of the selected Hilux, including exterior, interior, odometer, chassis plate where appropriate, and condition notes." },
                  { num: "2", title: "Proforma invoice before payment", desc: "Issue a clear proforma with buyer name, vehicle description, unit price, shipping scope, payment terms and buyer destination responsibilities." },
                  { num: "3", title: "Loading and shipping proof", desc: "Show photos of container loading, lashing, port delivery or RoRo handover where available, then share shipping milestones and BL details." },
                  { num: "4", title: "Buyer scope transparency", desc: "Repeat clearly that destination customs clearance, tax, registration, homologation and local compliance are handled by the buyer or local agent." },
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
              <h3 style={{ fontSize: 18, fontWeight: 900, color: "var(--navy)", margin: "0 0 20px" }}>Evidence your team should upload later</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                {["Vehicle walkaround photos", "Container lashing photos", "Port or yard handover photos", "Buyer collection photos", "Sample export documents", "Customer testimonials","Sample export documents with private details hidden","Customer collection proof where buyer approval is given"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 15, color: "var(--ink)" }}>
                    <span style={{ color: "var(--gold)" }}>📸</span> {item}
                  </li>
                ))}
              </ul>
              <div style={{ padding: 16, background: "var(--soft)", borderRadius: 10, fontSize: 13, color: "var(--muted)", border: "1px solid var(--line)" }}>
                <strong>Privacy note:</strong> use buyer name, company name or initials only when the buyer has consented.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
