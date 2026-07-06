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
    tag: "Buyer Guide",
    title: "Philippines Spec Toyota Hilux Export Guide",
    desc: "A practical buyer guide explaining Philippines-sourced Hilux trims, export checks, shipping options and how to request the right export-ready unit.",
  },
  {
    tag: "Shipping",
    title: "RoRo or Container: Which shipping method is better for Toyota Hilux exports?",
    desc: "Explain when to choose RoRo, when to choose a 40HC container, and how lashing, port handling, route availability and cargo control differ.",
  },
  {
    tag: "Export Process",
    title: "What documents are usually needed to export a Toyota Hilux?",
    desc: "Cover invoice, packing list, bill of lading instructions, export documents, Philippines export paperwork and why destination documents remain buyer-managed.",
  },
  {
    tag: "Market Insights",
    title: "Best Toyota Hilux trims for Africa and the Middle East",
    desc: "Discuss common buyer preferences, workhorse trims, lifestyle trims, LHD destination requirements, and how destination use-case affects the ideal Philippines spec and trim selection.",
  },
  {
    tag: "How It Works",
    title: "How to buy a Toyota Hilux from our Singapore export office",
    desc: "Show the buyer journey: enquiry, stock confirmation, quotation, payment terms, lashing, shipping booking and delivery to destination country or port.",
  },
  {
    tag: "Compliance",
    title: "Important destination-country responsibilities every buyer must know",
    desc: "Make your scope clear: customs clearance, taxes, registration, homologation and local compliance remain the buyer's responsibility after arrival.",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: "80px 0" }} aria-label="Blog section">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="kicker">Blog</div>
            <h1 style={{ margin: "10px 0 16px", fontSize: "clamp(26px, 4vw, 44px)", color: "var(--navy)" }}>
              Blog section
            </h1>
            <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto", fontSize: 16, lineHeight: 1.6 }}>
              Add a real blog to strengthen SEO and educate buyers. These article cards are ready for your developer to convert into dynamic blog pages later.
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
                  href="#"
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
