import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Philippines Hilux Source — Why We Buy From the Philippines",
  description:
    "Jasmine Global sources Philippines-spec Toyota Hilux units directly from the Philippines market. Learn why Philippines-spec Hilux is well-suited for export to many destinations worldwide.",
  alternates: { canonical: "/source" },
};

const gallery = [
  {
    img: "/images/hilux-white.jpg",
    alt: "White Philippines-spec Toyota Hilux at port, ready for export",
    title: "White Hilux",
    desc: "The most popular fleet and retail colour. Clean export presentation for buyers who prefer the standard option.",
    badge: "Most Popular",
  },
  {
    img: "/images/hilux-black.jpg",
    alt: "Black Philippines-spec Toyota Hilux — Conquest/GR-S export unit",
    title: "Black Hilux",
    desc: "Premium look for GR-S, Conquest and higher-tier quotations. High-demand colour for specialist buyers.",
    badge: "Premium Spec",
  },
  {
    img: "/images/hilux-silver.jpg",
    alt: "Silver Philippines-spec Toyota Hilux export unit",
    title: "Silver Hilux",
    desc: "Clean metallic option. Suited to commercial and fleet buyers who need a neutral, durable finish.",
    badge: "Commercial Ready",
  },
];

const advantages = [
  { icon: "🇵🇭", title: "Right-Hand Drive Market", desc: "Philippines is a right-hand drive market — ideal for RHD destination countries across Africa, Pacific Islands and Southeast Asia." },
  { icon: "🏭", title: "Toyota Philippines Spec", desc: "Philippines-spec Hilux units are produced to Toyota Motor Philippines specifications, suitable for many export destinations." },
  { icon: "⚙️", title: "Full Diesel Range", desc: "Both 2.4L and 2.8L diesel variants are available in the Philippines market, covering multiple buyer requirements." },
  { icon: "🔍", title: "Verified Sourcing", desc: "We verify each unit — trim, year, VIN, engine, condition — before preparing an export quote." },
];

export default function SourcePage() {
  return (
    <PageLayout>
      <section className="hero" aria-label="Philippines source overview">
        <div className="wrap">
          <div className="section-title">
            <span className="variant-note-pill">Sourcing Market</span>
            <h1 style={{ marginTop: 12 }}>Why We Source Toyota Hilux from the Philippines</h1>
            <p>
              The Philippines is our primary sourcing market for Toyota Hilux exports. We operate from Singapore (Main HQ) and the Philippines (Operations HQ), giving us direct access to Philippines-spec units across the full Hilux range.
            </p>
          </div>

          {/* Advantages */}
          <div className="trust-grid" style={{ marginBottom: "56px" }}>
            {advantages.map((a) => (
              <div key={a.title} className="trust-card">
                <div className="trust-icon">{a.icon}</div>
                <strong>{a.title}</strong>
                <span>{a.desc}</span>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div>
            <h2 style={{ marginBottom: 24, textAlign: "center" }}>Export-Ready Hilux — Available Colours</h2>
            <div className="market-showcase">
              <div className="market-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
                {gallery.map((g) => (
                  <article key={g.title} className="market-tile">
                    <div className="market-photo" style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "16/10" }}>
                      <Image
                        src={g.img}
                        alt={g.alt}
                        width={480}
                        height={300}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="market-caption" style={{ padding: "16px 0 0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <h3 style={{ margin: 0, fontSize: 17 }}>{g.title}</h3>
                        <span style={{ background: "var(--sky)", color: "var(--blue)", fontSize: 11, fontWeight: 800, borderRadius: 999, padding: "3px 10px" }}>{g.badge}</span>
                      </div>
                      <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{g.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="export-availability-note" style={{ marginTop: 40 }}>
            <b>Note:</b> Colour availability depends on live stock at the time of enquiry. Contact us to confirm current available colours, trim levels and model years before requesting a quote.
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a className="btn dark" href="/quote">Request a Hilux Export Quote</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
