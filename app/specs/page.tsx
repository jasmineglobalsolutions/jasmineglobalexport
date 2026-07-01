import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Toyota Hilux Variants & Specifications — Philippines Spec",
  description:
    "Browse Philippines-market Toyota Hilux variants available for export: 2.8 GR-S 4x4 A/T, 2.8 Conquest 4x4 A/T, 2.4 G 4x4 MT, 2.4 E 4x2 MT and more. Contact us for live stock and export quote.",
  alternates: { canonical: "/specs" },
};

const variants = [
  {
    badge: "Top Spec",
    drive: "4x4 A/T",
    img: "/images/hilux-white.jpg",
    imgAlt: "White Toyota Hilux GR-S 4x4 Philippines export unit",
    name: "2.8 GR-S 4x4 A/T",
    featured: true,
    specs: [
      { label: "Engine", value: "2.8L Diesel, 4-Cyl, 16V DOHC VNT" },
      { label: "Power", value: "201 hp / 500 Nm torque" },
      { label: "Transmission", value: "6-Speed Automatic" },
      { label: "Suspension", value: "Double Wishbone + Monotube Shock" },
      { label: "Steering", value: "Power Steering + Variable Flow Control" },
      { label: "Drive", value: "4WD with Active Traction Control" },
    ],
  },
  {
    badge: "Export Popular",
    drive: "4x4 A/T",
    img: "/images/hilux-black.jpg",
    imgAlt: "Black Toyota Hilux Conquest 4x4 Philippines export unit",
    name: "2.8 CONQUEST 4x4 A/T",
    featured: false,
    specs: [
      { label: "Engine", value: "2.8L Diesel, 4-Cyl, 16V DOHC VNT" },
      { label: "Power", value: "174 hp / 450 Nm torque" },
      { label: "Transmission", value: "6-Speed Automatic" },
      { label: "ABS", value: "With Brake Assist + EBD" },
      { label: "Safety", value: "7 Airbags" },
      { label: "Drive", value: "4WD with Traction Control" },
    ],
  },
  {
    badge: "Mid Range",
    drive: "4x4 MT",
    img: "/images/hilux-silver.jpg",
    imgAlt: "Silver Toyota Hilux G 4x4 Philippines export unit",
    name: "2.4 G 4x4 MT",
    featured: false,
    specs: [
      { label: "Engine", value: "2.4L Diesel, 4-Cyl" },
      { label: "Power", value: "147 hp / 400 Nm torque" },
      { label: "Transmission", value: "6-Speed Manual" },
      { label: "ABS", value: "With Brake Assist" },
      { label: "Safety", value: "2 Airbags" },
      { label: "Drive", value: "4WD Part-Time" },
    ],
  },
  {
    badge: "Commercial",
    drive: "4x2 MT",
    img: "/images/hilux-white.jpg",
    imgAlt: "White Toyota Hilux E 4x2 Philippines export unit",
    name: "2.4 E 4x2 MT",
    featured: false,
    specs: [
      { label: "Engine", value: "2.4L Diesel, 4-Cyl" },
      { label: "Power", value: "147 hp / 400 Nm torque" },
      { label: "Transmission", value: "6-Speed Manual" },
      { label: "Drive", value: "2WD Rear Wheel" },
      { label: "Best For", value: "Fleet & Commercial" },
      { label: "ABS", value: "Standard" },
    ],
  },
];

export default function SpecsPage() {
  return (
    <PageLayout>
      <section className="toyota-variant-section">
        <div className="wrap">
          <div className="toyota-variant-panel">
            <div className="variant-title-row">
              <div>
                <span className="variant-note-pill">Philippines Variant Guide</span>
                <h1>Choose Your Toyota Hilux Variant</h1>
                <p>
                  Browse the main Philippines-market Toyota Hilux variants available for export. All specs are subject to live stock confirmation. Contact us for exact availability, VIN, model year and pricing.
                </p>
              </div>
              <a className="btn dark" href="/quote">
                Ask for Live Stock &amp; Export Quote
              </a>
            </div>

            <div className="toyota-variant-grid">
              {variants.map((v) => (
                <article key={v.name} className={`toyota-card${v.featured ? " featured" : ""}`}>
                  <div className="toyota-card-top">
                    <span className="toyota-badge">{v.badge}</span>
                    <span className="toyota-drive">{v.drive}</span>
                  </div>
                  <div className="toyota-vehicle real-photo-card" style={{ borderRadius: 12, overflow: "hidden" }}>
                    <Image
                      src={v.img}
                      alt={v.imgAlt}
                      width={480}
                      height={280}
                      style={{ width: "100%", height: "auto", objectFit: "cover" }}
                    />
                  </div>
                  <h2 style={{ fontSize: 18, margin: "16px 0 12px", color: "var(--navy)" }}>{v.name}</h2>
                  <ul className="short-specs">
                    {v.specs.map((s) => (
                      <li key={s.label}><b>{s.label}:</b> {s.value}</li>
                    ))}
                  </ul>
                  <a className="full-spec-btn" href="/quote">
                    Request Export Quote
                  </a>
                </article>
              ))}
            </div>

            <div className="export-availability-note">
              <b>Important:</b> Specs, stock, colour, model year, VIN/engine details, lashing and shipping cost must be confirmed before invoice. All quoted prices are subject to live stock availability.
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
