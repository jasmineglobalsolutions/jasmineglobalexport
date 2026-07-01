import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Toyota Hilux Export Blog — Guides, Tips & Insights",
  description:
    "Export guides, buyer tips and shipping insights for Toyota Hilux international buyers. Learn about Philippines-spec Hilux, container vs RoRo shipping, export documentation and more.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    cat: "Buyer Guide",
    catColor: "#155a9d",
    title: "Philippines Spec Toyota Hilux Export Guide — What Buyers Need to Know",
    excerpt: "A practical buyer guide covering trim selection, export eligibility, colour options and how to prepare your Hilux export order from the Philippines.",
    readTime: "5 min read",
  },
  {
    cat: "Shipping",
    catColor: "#d7a44a",
    title: "RoRo or Container: Which Shipping Method Is Best for Hilux Export?",
    excerpt: "Explain route differences, loading methods, transit times and buyer trade-offs between RoRo and container shipping for a Toyota Hilux export.",
    readTime: "4 min read",
  },
  {
    cat: "Export Process",
    catColor: "#25a244",
    title: "What Documents Are Needed to Export a Toyota Hilux?",
    excerpt: "Cover proforma invoice, commercial invoice, packing list, bill of lading and any export permits involved in a Philippines Hilux export.",
    readTime: "6 min read",
  },
  {
    cat: "Specs",
    catColor: "#8b1a9e",
    title: "Toyota Hilux 2.8 GR-S vs 2.8 Conquest — Which Variant Should You Export?",
    excerpt: "A detailed comparison of the top two Philippines Hilux variants. Engine specs, feature differences, export price range and which buyers each suits.",
    readTime: "7 min read",
  },
  {
    cat: "Buyer Guide",
    catColor: "#155a9d",
    title: "How to Verify a Philippines-Spec Toyota Hilux Before Export",
    excerpt: "Steps buyers should confirm — trim, VIN, model year, engine, colour, condition — before committing to a Hilux purchase for export.",
    readTime: "4 min read",
  },
  {
    cat: "Shipping",
    catColor: "#d7a44a",
    title: "Understanding Destination Customs and Import Duties for Toyota Hilux",
    excerpt: "We ship to the destination port only. This guide helps buyers understand what to expect at the destination country side — duties, registration, compliance.",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <PageLayout>
      <section className="section-title" aria-label="Blog intro">
        <div className="wrap">
          <span className="variant-note-pill">Export Knowledge Base</span>
          <h1 style={{ marginTop: 12 }}>Toyota Hilux Export — Guides &amp; Insights</h1>
          <p>
            Practical guides for international Toyota Hilux buyers. Learn about Philippines-spec variants, export documentation, shipping methods and what to expect at destination.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="blog-grid">
            {posts.map((post, i) => (
              <article key={i} className="blog-card">
                <div className="blog-thumb" style={{ background: `linear-gradient(135deg, ${post.catColor}22, ${post.catColor}08)`, border: `1px solid ${post.catColor}33` }}>
                  <span style={{ background: post.catColor, color: "#fff", borderRadius: 999, padding: "4px 12px", fontSize: 11, fontWeight: 800 }}>{post.cat}</span>
                </div>
                <div className="blog-body">
                  <h2 style={{ fontSize: 16, margin: "0 0 8px", lineHeight: 1.4, color: "var(--navy)" }}>{post.title}</h2>
                  <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6, margin: "0 0 12px" }}>{post.excerpt}</p>
                  <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 700 }}>{post.readTime}</div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a className="btn outline" href="/quote">Have a Question? Request a Quote</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
