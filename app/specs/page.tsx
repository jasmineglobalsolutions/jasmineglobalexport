"use client";

import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// ── Spec modal data keyed by variant grade ───────────────────────────────────
const hiluxSpecData: Record<string, { title: string; sub: string; boxes: string; carImage?: string }> = {
  bev: {
    title: `Hilux BEV 4x4`,
    sub: `Philippines Spec • 4x4 BEV • Battery Electric Vehicle`,
    boxes: `<div class="modal-spec-box"><div class="spec-icon">📐</div><h4>Dimensions &amp; Capacity</h4><p>Double-cab Hilux body; approx. 5,320 mm length, 1,855 mm width, 1,845 mm height, and 287 mm ground clearance. Final payload and GVW to be confirmed per unit and Toyota release.</p></div><div class="modal-spec-box"><div class="spec-icon">⚡</div><h4>Powertrain</h4><p>Battery Electric Vehicle with dual electric motors, front and rear eAxles, permanent 4x4 / all-wheel drive, and estimated output of 196 PS and 473 Nm torque.</p></div><div class="modal-spec-box"><div class="spec-icon">🔋</div><h4>Battery</h4><p>59.2 kWh lithium-ion battery pack. High-voltage battery details and warranty confirmation should be checked before invoice.</p></div><div class="modal-spec-box"><div class="spec-icon">🔌</div><h4>Range &amp; Charging</h4><p>Up to 315 km NEDC range / around 240 km WLTP. Charging: AC Type 2 and DC CCS2 fast charging. Actual charging time depends on charger type and battery condition.</p></div><div class="modal-spec-box"><div class="spec-icon">🔧</div><h4>Suspension &amp; Steering</h4><p>Double Wishbone front suspension / Leaf Spring Rigid Axle rear. Electric Power Steering.</p></div><div class="modal-spec-box"><div class="spec-icon">🖥️</div><h4>Interior &amp; Technology</h4><p>12.3-inch display audio, wireless Apple CarPlay and Android Auto, 360-degree camera, synthetic leather seating, and 8-way power driver seat.</p></div><div class="modal-spec-box"><div class="spec-icon">🛡️</div><h4>Safety &amp; Security</h4><p>Toyota Safety Sense 3.0 / SRS airbags / driver-assist features. Exact final safety specification subject to confirmed dealer release.</p></div><div class="modal-spec-box"><div class="spec-icon">ℹ️</div><h4>Important EV Information</h4><p>Driving range varies by load, speed, road conditions, terrain, temperature and driving style. Charging compatibility, stock, colour, VIN, warranty, export documents and destination-country charging suitability must be confirmed before proforma invoice.</p></div>`,
  },
  conquest28at: {
    title: `2.8 Conquest 4x4 A/T`,
    sub: `Philippines Spec • 4x4 A/T • Part-time 4WD • Top Spec Diesel`,
    boxes: `<div class="modal-spec-box"><h4>Engine</h4><p>2.8L 1GD-FTV turbo-diesel, 4-cylinder, DOHC, direct injection.</p></div><div class="modal-spec-box"><h4>Fuel</h4><p>Diesel</p></div><div class="modal-spec-box"><h4>Drive</h4><p>Part-time 4WD (4x4)</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic</p></div><div class="modal-spec-box"><h4>Maximum Output</h4><p>204 PS</p></div><div class="modal-spec-box"><h4>Maximum Torque</h4><p>500 Nm</p></div><div class="modal-spec-box"><h4>Body / Seating</h4><p>Double Cab / 5 seats</p></div><div class="modal-spec-box"><h4>Available Colours</h4><p>Super White II, Emotional Red 2, Attitude Black Mica, Ash</p></div>`,
  },
  v28mt: {
    title: `2.8 V 4x4 M/T`,
    sub: `Philippines Spec • 4x4 M/T • Part-time 4WD`,
    boxes: `<div class="modal-spec-box"><h4>Engine</h4><p>2.8L 1GD-FTV turbo-diesel, 4-cylinder, DOHC, direct injection.</p></div><div class="modal-spec-box"><h4>Fuel</h4><p>Diesel</p></div><div class="modal-spec-box"><h4>Drive</h4><p>Part-time 4WD (4x4)</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed manual</p></div><div class="modal-spec-box"><h4>Maximum Output</h4><p>204 PS</p></div><div class="modal-spec-box"><h4>Maximum Torque</h4><p>420 Nm</p></div><div class="modal-spec-box"><h4>Body / Seating</h4><p>Double Cab / 5 seats</p></div><div class="modal-spec-box"><h4>Available Colours</h4><p>Super White II, Emotional Red 2, Attitude Black Mica, Ash</p></div>`,
  },
  conquest28at4x2: {
    title: `2.8 Conquest 4x2 A/T`,
    sub: `Philippines Spec • 4x2 A/T • Rear-wheel Drive`,
    boxes: `<div class="modal-spec-box"><h4>Engine</h4><p>2.8L 1GD-FTV turbo-diesel, 4-cylinder, DOHC, direct injection.</p></div><div class="modal-spec-box"><h4>Fuel</h4><p>Diesel</p></div><div class="modal-spec-box"><h4>Drive</h4><p>Rear-wheel drive (4x2)</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic</p></div><div class="modal-spec-box"><h4>Maximum Output</h4><p>204 PS</p></div><div class="modal-spec-box"><h4>Maximum Torque</h4><p>500 Nm</p></div><div class="modal-spec-box"><h4>Body / Seating</h4><p>Double Cab / 5 seats</p></div><div class="modal-spec-box"><h4>Available Colours</h4><p>Super White II, Emotional Red 2, Attitude Black Mica, Ash</p></div>`,
  },
  g28at4x2: {
    title: `2.8 G 4x2 A/T`,
    sub: `Philippines Spec • 4x2 A/T • Rear-wheel Drive`,
    boxes: `<div class="modal-spec-box"><h4>Engine</h4><p>2.8L 1GD-FTV turbo-diesel, 4-cylinder, DOHC, direct injection.</p></div><div class="modal-spec-box"><h4>Fuel</h4><p>Diesel</p></div><div class="modal-spec-box"><h4>Drive</h4><p>Rear-wheel drive (4x2)</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic</p></div><div class="modal-spec-box"><h4>Maximum Output</h4><p>204 PS</p></div><div class="modal-spec-box"><h4>Maximum Torque</h4><p>500 Nm</p></div><div class="modal-spec-box"><h4>Body / Seating</h4><p>Double Cab / 5 seats</p></div><div class="modal-spec-box"><h4>Available Colours</h4><p>Super White II, Silver Metallic, Attitude Black Mica</p></div>`,
  },
  g28mt4x2: {
    title: `2.8 G 4x2 M/T`,
    sub: `Philippines Spec • 4x2 M/T • Rear-wheel Drive`,
    boxes: `<div class="modal-spec-box"><h4>Engine</h4><p>2.8L 1GD-FTV turbo-diesel, 4-cylinder, DOHC, direct injection.</p></div><div class="modal-spec-box"><h4>Fuel</h4><p>Diesel</p></div><div class="modal-spec-box"><h4>Drive</h4><p>Rear-wheel drive (4x2)</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed manual</p></div><div class="modal-spec-box"><h4>Maximum Output</h4><p>204 PS</p></div><div class="modal-spec-box"><h4>Maximum Torque</h4><p>420 Nm</p></div><div class="modal-spec-box"><h4>Body / Seating</h4><p>Double Cab / 5 seats</p></div><div class="modal-spec-box"><h4>Available Colours</h4><p>Super White II, Silver Metallic, Attitude Black Mica</p></div>`,
  },
  e28mt4x4: {
    title: `2.8 E 4x4 M/T`,
    sub: `Philippines Spec • 4x4 M/T • Part-time 4WD`,
    boxes: `<div class="modal-spec-box"><h4>Engine</h4><p>2.8L 1GD-FTV turbo-diesel, 4-cylinder, DOHC, direct injection.</p></div><div class="modal-spec-box"><h4>Fuel</h4><p>Diesel</p></div><div class="modal-spec-box"><h4>Drive</h4><p>Part-time 4WD (4x4)</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed manual</p></div><div class="modal-spec-box"><h4>Maximum Output</h4><p>204 PS</p></div><div class="modal-spec-box"><h4>Maximum Torque</h4><p>420 Nm</p></div><div class="modal-spec-box"><h4>Body / Seating</h4><p>Double Cab / 5 seats</p></div><div class="modal-spec-box"><h4>Available Colours</h4><p>Super White II, Silver Metallic, Attitude Black Mica</p></div>`,
  },
  e28at4x2: {
    title: `2.8 E 4x2 A/T`,
    sub: `Philippines Spec • 4x2 A/T • Rear-wheel Drive`,
    boxes: `<div class="modal-spec-box"><h4>Engine</h4><p>2.8L 1GD-FTV turbo-diesel, 4-cylinder, DOHC, direct injection.</p></div><div class="modal-spec-box"><h4>Fuel</h4><p>Diesel</p></div><div class="modal-spec-box"><h4>Drive</h4><p>Rear-wheel drive (4x2)</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic</p></div><div class="modal-spec-box"><h4>Maximum Output</h4><p>204 PS</p></div><div class="modal-spec-box"><h4>Maximum Torque</h4><p>500 Nm</p></div><div class="modal-spec-box"><h4>Body / Seating</h4><p>Double Cab / 5 seats</p></div><div class="modal-spec-box"><h4>Available Colours</h4><p>Super White II, Silver Metallic, Attitude Black Mica</p></div>`,
  },
};

// ── 8 variant cards — images extracted from jasmine-hilux-specs-equal-size-v6.html ──
const variantCards = [
  // 1 — Hilux BEV 4x4 (real photo from HTML card 1)
  {
    key: "bev",
    badge: "Battery Electric",
    drive: "4x4 A/T",
    featured: true,
    img: "/images/specs/specs-card-1.png",
    imgAlt: "Hilux BEV 4x4 Travo-e – Philippines Battery Electric Vehicle export",
    title: "Hilux BEV 4x4",
    photoNote: "Current model",
    specs: [
      { label: "Powertrain", value: "Dual Electric Motors, Permanent 4x4 AWD" },
      { label: "Battery", value: "59.2 kWh Lithium-Ion" },
      { label: "Range", value: "Up to 315 km NEDC / ~240 km WLTP" },
    ],
  },
  // 2 — 2.8 Conquest 4x4 A/T (real photo from HTML card 2 — orange Overland)
  {
    key: "conquest28at",
    badge: "Top Spec — Diesel",
    drive: "4x4 A/T",
    featured: true,
    img: "/images/specs/specs-card-2.png",
    imgAlt: "2.8 Conquest 4x4 A/T – Philippines export",
    title: "2.8 Conquest 4x4 A/T",
    photoNote: "Current model cutout",
    specs: [
      { label: "Engine", value: "2.8L 1GD-FTV Turbo-Diesel" },
      { label: "Drive", value: "Part-time 4WD" },
      { label: "Output", value: "204 PS / 500 Nm" },
    ],
  },
  // 3 — 2.8 V 4x4 M/T (illustration black from HTML)
  {
    key: "v28mt",
    badge: "Premium 4x4",
    drive: "4x4 M/T",
    featured: false,
    img: "/images/specs/hilux-black.png",
    imgAlt: "2.8 V 4x4 M/T – Philippines export",
    title: "2.8 V 4x4 M/T",
    photoNote: "Photo for illustration",
    specs: [
      { label: "Engine", value: "2.8L 1GD-FTV Turbo-Diesel" },
      { label: "Drive", value: "Part-time 4WD" },
      { label: "Output", value: "204 PS / 420 Nm" },
    ],
  },
  // 4 — 2.8 Conquest 4x2 A/T (illustration white from HTML)
  {
    key: "conquest28at4x2",
    badge: "Export Popular",
    drive: "4x2 A/T",
    featured: false,
    img: "/images/specs/hilux-white.png",
    imgAlt: "2.8 Conquest 4x2 A/T – Philippines export",
    title: "2.8 Conquest 4x2 A/T",
    photoNote: "Photo for illustration",
    specs: [
      { label: "Engine", value: "2.8L 1GD-FTV Turbo-Diesel" },
      { label: "Drive", value: "Rear-wheel drive" },
      { label: "Output", value: "204 PS / 500 Nm" },
    ],
  },
  // 5 — 2.8 G 4x2 A/T (illustration black from HTML)
  {
    key: "g28at4x2",
    badge: "Practical Export",
    drive: "4x2 A/T",
    featured: false,
    img: "/images/specs/hilux-black.png",
    imgAlt: "2.8 G 4x2 A/T – Philippines export",
    title: "2.8 G 4x2 A/T",
    photoNote: "Photo for illustration",
    specs: [
      { label: "Engine", value: "2.8L 1GD-FTV Turbo-Diesel" },
      { label: "Drive", value: "Rear-wheel drive" },
      { label: "Output", value: "204 PS / 500 Nm" },
    ],
  },
  // 6 — 2.8 G 4x2 M/T (illustration white from HTML)
  {
    key: "g28mt4x2",
    badge: "Practical Manual",
    drive: "4x2 M/T",
    featured: false,
    img: "/images/specs/hilux-white.png",
    imgAlt: "2.8 G 4x2 M/T – Philippines export",
    title: "2.8 G 4x2 M/T",
    photoNote: "Photo for illustration",
    specs: [
      { label: "Engine", value: "2.8L 1GD-FTV Turbo-Diesel" },
      { label: "Drive", value: "Rear-wheel drive" },
      { label: "Output", value: "204 PS / 420 Nm" },
    ],
  },
  // 7 — 2.8 E 4x4 M/T (illustration black from HTML)
  {
    key: "e28mt4x4",
    badge: "Workhorse 4x4",
    drive: "4x4 M/T",
    featured: false,
    img: "/images/specs/hilux-black.png",
    imgAlt: "2.8 E 4x4 M/T – Philippines export",
    title: "2.8 E 4x4 M/T",
    photoNote: "Photo for illustration",
    specs: [
      { label: "Engine", value: "2.8L 1GD-FTV Turbo-Diesel" },
      { label: "Drive", value: "Part-time 4WD" },
      { label: "Output", value: "204 PS / 420 Nm" },
    ],
  },
  // 8 — 2.8 E 4x2 A/T (illustration white from HTML)
  {
    key: "e28at4x2",
    badge: "Workhorse Auto",
    drive: "4x2 A/T",
    featured: false,
    img: "/images/specs/hilux-white.png",
    imgAlt: "2.8 E 4x2 A/T – Philippines export",
    title: "2.8 E 4x2 A/T",
    photoNote: "Photo for illustration",
    specs: [
      { label: "Engine", value: "2.8L 1GD-FTV Turbo-Diesel" },
      { label: "Drive", value: "Rear-wheel drive" },
      { label: "Output", value: "204 PS / 500 Nm" },
    ],
  },
];

export default function SpecsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ title: string; sub: string; boxes: string; carImage?: string } | null>(null);

  const openHiluxSpec = (key: string) => {
    const data = hiluxSpecData[key];
    if (data) {
      setModalData(data);
      setModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeHiluxSpec = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeHiluxSpec();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#fbfdff" }}>
      <Nav />
      <main>
        <section className="toyota-variant-section" id="specs">
          <div className="wrap">
            <div className="toyota-variant-panel">
              <div className="variant-title-row">
                <div>
                  <span className="variant-note-pill">Philippines Variant Guide</span>
                  <h2>Choose your Hilux variant</h2>
                  <p>
                    Browse the main 2026 Philippines-market Toyota Hilux variants available for export.
                    Colours, model year, trim and availability are subject to live stock confirmation before quotation.
                  </p>
                </div>
                <a className="btn dark" href="/quote">
                  Ask live stock &amp; export quote
                </a>
              </div>

              {/* 8-card grid */}
              <div className="toyota-variant-grid">
                {variantCards.map((card, idx) => (
                  <article
                    key={idx}
                    className={`toyota-card${card.featured ? " featured" : ""}`}
                  >
                    <div className="toyota-card-top">
                      <span className="toyota-badge">{card.badge}</span>
                      <span className="toyota-drive">{card.drive}</span>
                    </div>

                    <div className="toyota-vehicle real-photo-card" style={{ position: "relative" }}>
                      <img
                        alt={card.imgAlt}
                        loading="lazy"
                        src={card.img}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                          mixBlendMode: "multiply",
                        }}
                      />
                      {card.photoNote && (
                        <span style={{
                          position: "absolute",
                          left: 9,
                          bottom: 8,
                          padding: "5px 7px",
                          borderRadius: 7,
                          background: "rgba(255,255,255,0.6)",
                          color: "#715a16",
                          fontSize: 8,
                          fontWeight: 900,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}>
                          {card.photoNote}
                        </span>
                      )}
                    </div>

                    <h3>{card.title}</h3>

                    <ul className="short-specs">
                      {card.specs.map((s, si) => (
                        <li key={si}><b>{s.label}:</b> {s.value}</li>
                      ))}
                    </ul>

                    <button
                      className="full-spec-btn"
                      onClick={() => openHiluxSpec(card.key)}
                      type="button"
                    >
                      FULL SPECS
                    </button>
                  </article>
                ))}
              </div>

              <div className="export-availability-note">
                <b>Important:</b> Specs, stock, colour, model year, VIN/engine details, VAT/export documents,
                lashing and shipping cost must be confirmed before invoice.
                Prices are intentionally not displayed on this page.
                Cards marked &quot;Photo for illustration&quot; use a previous-generation Hilux.
                Actual 2026 appearance and equipment must be confirmed before invoice.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Spec modal */}
      <div
        aria-hidden={!modalOpen ? "true" : "false"}
        className={`spec-modal-backdrop ${modalOpen ? "open" : ""}`}
        id="specModal"
        onClick={(e) => {
          if ((e.target as HTMLElement).id === "specModal") closeHiluxSpec();
        }}
      >
        <div aria-labelledby="specModalTitle" aria-modal="true" className="spec-modal" role="dialog">
          <div className="spec-modal-head">
            <div>
              <h3 id="specModalTitle">{modalData?.title || "Full specs"}</h3>
              <p id="specModalSub">{modalData?.sub || "Philippines-market Hilux"}</p>
            </div>
            <button
              aria-label="Close full specifications"
              className="modal-close"
              id="specModalClose"
              type="button"
              onClick={closeHiluxSpec}
            >
              ×
            </button>
          </div>
          <div className="spec-modal-body">
            {modalData?.carImage && (
              <div className="modal-car-image-wrap">
                <img
                  src={modalData.carImage}
                  alt={modalData.title}
                  className="modal-car-image"
                />
              </div>
            )}
            <div
              className="modal-spec-grid"
              id="specModalGrid"
              dangerouslySetInnerHTML={{ __html: modalData?.boxes || "" }}
            ></div>
            <div className="modal-actions">
              <a className="btn primary" href="/quote">
                Request this variant
              </a>
              <button className="btn outline" id="specModalClose2" type="button" onClick={closeHiluxSpec}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
