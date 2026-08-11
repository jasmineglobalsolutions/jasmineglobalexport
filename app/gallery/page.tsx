import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Jasmine Global HI-Lux Export",
  description:
    "Photos and videos of Toyota Hilux vehicles, container loading, lashing, yard handling and export operations by Jasmine Global HI-Lux Export.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main>
      <Nav />

      <section style={{ padding: "80px 0", background: "var(--soft)" }} aria-label="Gallery">
        <div className="wrap">

          {/* ── Header ── */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="kicker">Operations &amp; Export</div>
            <h1
              style={{
                margin: "10px 0 16px",
                fontSize: "clamp(26px, 4vw, 44px)",
                color: "var(--navy)",
              }}
            >
              Gallery
            </h1>
            <p
              style={{
                color: "var(--muted)",
                maxWidth: 640,
                margin: "0 auto",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              Real photos and videos from our export operations — vehicle yard handling, container
              loading, lashing and port preparation for Toyota Hilux shipments worldwide.
            </p>
          </div>

          {/* ── Interactive gallery (photos + videos) ── */}
          <GalleryClient />

          {/* ── CTA ── */}
          <div
            style={{
              background: "var(--navy)",
              color: "#fff",
              borderRadius: 24,
              padding: "40px 36px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 900, margin: "0 0 12px" }}>
              Interested in Exporting a Toyota Hilux?
            </h3>
            <p
              style={{
                color: "#dcecff",
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: 560,
                margin: "0 auto 28px",
              }}
            >
              Contact us for a free quotation. We handle sourcing, verification, lashing, container
              loading and worldwide shipping.
            </p>
            <a
              href="/quote"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, var(--gold, #d7a44a), #f0c060)",
                color: "#071b35",
                fontWeight: 900,
                borderRadius: 999,
                padding: "12px 32px",
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Request a Quote
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
