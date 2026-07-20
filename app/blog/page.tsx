import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog | Jasmine Global HI-Lux Export",
  description:
    "Read our guides on exporting Philippines-spec Toyota Hilux units, shipping methods, and destination-country compliance.",
  alternates: {
    canonical: "/blog",
  },
};

const blogArticles = [
  {
    tag: "Shipping",
    title: "RoRo or Container",
    desc: "Compare RoRo and 40HC container shipping, including loading protection, route availability, port handling and the most suitable option for single or multiple Hilux units.",
    href: "/blog/roro-vs-container-shipping-toyota-hilux",
  },
  {
    tag: "Export Process",
    title: "Export Documents",
    desc: "Understand the commercial invoice, packing list, bill of lading and other documents commonly required when exporting a Toyota Hilux from the Philippines.",
    href: "/blog/toyota-hilux-export-documents",
  },
  {
    tag: "Market Insights",
    title: "Best Hilux Trims",
    desc: "Compare popular workhorse and lifestyle Hilux variants for approved left-hand-drive markets in Africa and the Middle East.",
    href: "/blog/best-hilux-trims-africa-middle-east",
  },
  {
    tag: "How It Works",
    title: "How to Buy",
    desc: "Follow the buyer journey from enquiry and live-stock confirmation to proforma invoice, payment, loading, shipping and destination-port arrival.",
    href: "/blog/how-to-buy-toyota-hilux-from-singapore-export-office",
  },
  {
    tag: "Compliance",
    title: "Buyer Responsibilities",
    desc: "Understand the customs clearance, duties, taxes, registration, homologation and local compliance requirements that remain the buyer’s responsibility.",
    href: "/blog/buyer-responsibilities-after-vehicle-arrival",
  },
  {
    tag: "Buyer Guide",
    title: "Philippines-Spec Guide",
    desc: "A practical guide to Philippines-sourced Hilux variants, export checks, shipping options and selecting the right export-ready unit.",
    href: "/blog/philippines-spec-toyota-hilux-export-guide",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: "80px 0" }} aria-label="Blog section">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="kicker">Export Guides</div>
            <h1 style={{ margin: "10px 0 16px", fontSize: "clamp(26px, 4vw, 44px)", color: "var(--navy)" }}>
              Toyota Hilux Export Guides
            </h1>
            <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto", fontSize: 16, lineHeight: 1.6 }}>
              Read practical buyer guides about Philippines-spec Toyota Hilux sourcing, export documentation, container and RoRo shipping, and destination-country responsibilities.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            {blogArticles.map((article, i) => (
              <div
                key={i}
                className="blog-card"
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 20,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  boxShadow: "0 8px 24px rgba(7,23,47,0.06)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    background: "rgba(215,164,74,0.15)",
                    color: "#997330",
                    border: "1px solid rgba(215,164,74,0.3)",
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 20,
                  }}
                >
                  {article.tag}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 900, color: "var(--navy)", margin: "0 0 16px", lineHeight: 1.4 }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--ink)", margin: "0 0 24px", lineHeight: 1.6, flexGrow: 1 }}>
                  {article.desc}
                </p>
                <a
                  href={article.href}
                  style={{
                    color: "var(--navy)",
                    fontSize: 14,
                    fontWeight: 800,
                    textDecoration: "none",
                    borderBottom: "2px solid var(--gold)",
                    paddingBottom: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Read article &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
