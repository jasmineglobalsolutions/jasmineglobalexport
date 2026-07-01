import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Client Testimonials | Jasmine Global HI-Lux Export",
  description:
    "Read testimonials from international buyers who have exported Toyota Hilux units from the Philippines through Jasmine Global.",
  alternates: { canonical: "/testimonials" },
};

const testimonials = [
  {
    quote: "Jasmine Global made the export process incredibly smooth. We ordered two GR-S Hilux units for our project in East Africa. The container lashing was professional, and the documentation was spot on. Highly recommended.",
    author: "Mohammed A.",
    role: "Project Manager",
    location: "East Africa",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    quote: "Sourcing Philippines-spec Hilux was exactly what we needed for our mining fleet. Jasmine verified all units before shipping. Clear communication via WhatsApp kept us informed at every step.",
    author: "David S.",
    role: "Fleet Procurement",
    location: "Oceania",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    quote: "Very transparent process. They made it clear from day one that they handle supply and shipping only, which was perfect as we have our own customs brokers. The RoRo shipment arrived on schedule.",
    author: "Khalid R.",
    role: "Auto Importer",
    location: "Middle East",
    rating: "⭐⭐⭐⭐",
  },
  {
    quote: "Excellent service. It's hard to find a reliable exporter who understands exactly what trims are available. They secured four Conquest variants for us when local supply was tight.",
    author: "John T.",
    role: "Independent Dealer",
    location: "Pacific Islands",
    rating: "⭐⭐⭐⭐⭐",
  },
];

export default function TestimonialsPage() {
  return (
    <PageLayout>
      <section className="section-title" aria-label="Testimonials intro">
        <div className="wrap">
          <span className="variant-note-pill">Buyer Feedback</span>
          <h1 style={{ marginTop: 12 }}>What Our International Buyers Say</h1>
          <p>
            We take pride in delivering a transparent, professional export service. Read feedback from our clients across Africa, the Middle East, Oceania, and the Pacific.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "var(--soft)", padding: 32, borderRadius: 16, border: "1px solid var(--line)", display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 16, fontSize: 18 }}>{t.rating}</div>
                <blockquote style={{ margin: 0, padding: 0, fontStyle: "italic", fontSize: 15, color: "var(--navy)", lineHeight: 1.6, flexGrow: 1 }}>
                  &quot;{t.quote}&quot;
                </blockquote>
                <div style={{ marginTop: 24, borderTop: "1px solid var(--line)", paddingTop: 16 }}>
                  <div style={{ fontWeight: 800, color: "var(--navy)" }}>{t.author}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{t.role} • {t.location}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 64, padding: "48px 0", borderTop: "1px solid var(--line)" }}>
            <h2 style={{ marginBottom: 16 }}>Experience Our Service Firsthand</h2>
            <p style={{ color: "var(--muted)", marginBottom: 24 }}>Contact us today to discuss your Toyota Hilux export requirements.</p>
            <a className="btn dark" href="/quote">Request a Quote</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
