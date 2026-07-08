"use client";

import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// ── Spec modal data keyed by variant grade ───────────────────────────────────
const hiluxSpecData: Record<string, { title: string; sub: string; boxes: string }> = {
  grs: {
    title: `2.8 GR-S 4x4 A/T`,
    sub: `Philippines Spec • 4x4 A/T • Top-Spec Sport`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions &amp; Capacity</h4><p>Double-cab Hilux body; final dimensions, payload and GVW to be confirmed per unit and Toyota dealer release.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.8L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo (VNT) with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic transmission; 4x4 drivetrain with multi-terrain select.</p></div><div class="modal-spec-box"><h4>Suspension</h4><p>Double Wishbone + Monotube Shock Absorber (front) / Leaf Spring Rigid Axle + Monotube (rear).</p></div><div class="modal-spec-box"><h4>Steering</h4><p>Power Steering + Variable Flow Control.</p></div><div class="modal-spec-box"><h4>Exterior</h4><p>GR-S sport styling, black/red accent trim, alloy wheels and premium exterior positioning.</p></div><div class="modal-spec-box"><h4>Interior &amp; Function</h4><p>Premium cabin for showroom-grade export buyers; exact seat, audio and convenience items confirmed per VIN.</p></div><div class="modal-spec-box"><h4>Safety &amp; Security</h4><p>Toyota Safety Sense / SRS airbags; full safety spec subject to confirmed Philippines dealer release.</p></div>`,
  },
  conquest28at: {
    title: `2.8 CONQUEST 4x4 A/T`,
    sub: `Philippines Spec • 4x4 A/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions &amp; Capacity</h4><p>Premium double-cab 4x4 export option; dimensions/capacity confirmed per final unit.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.8L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo (VNT) with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Double wishbone front suspension, leaf spring rigid axle rear suspension.</p></div><div class="modal-spec-box"><h4>Brakes</h4><p>ABS with Brake Assist + EBD.</p></div><div class="modal-spec-box"><h4>Exterior</h4><p>Conquest styling; sports bar / overfender look depending on confirmed unit.</p></div><div class="modal-spec-box"><h4>Safety &amp; Security</h4><p>SRS airbag, ABS with Brake Assist + EBD depending on confirmed variant.</p></div>`,
  },
  conquest28mt: {
    title: `2.8 CONQUEST 4x4 M/T`,
    sub: `Philippines Spec • 4x4 M/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions &amp; Capacity</h4><p>Manual premium 4x4 double-cab option; final data confirmed per VIN.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.8L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo (VNT) with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed manual transmission with iMT (intelligent Manual Transmission).</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Double wishbone front suspension, leaf spring rigid axle rear suspension.</p></div><div class="modal-spec-box"><h4>Brakes</h4><p>ABS with Brake Assist + EBD.</p></div><div class="modal-spec-box"><h4>Exterior</h4><p>Conquest exterior trim for buyers who prefer manual 4x4.</p></div><div class="modal-spec-box"><h4>Safety &amp; Security</h4><p>ABS with Brake Assist + EBD; SRS items confirmed against dealer release.</p></div>`,
  },
  conquest24at: {
    title: `2.4 CONQUEST 4x2 A/T`,
    sub: `Philippines Spec • 4x2 A/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions &amp; Capacity</h4><p>Premium 4x2 double-cab option; capacity and dimension data confirmed before quotation.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.4L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo (VNT) with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Ventilated front discs and rear drum type brakes; double wishbone / leaf spring layout.</p></div><div class="modal-spec-box"><h4>Exterior</h4><p>Conquest 4x2 styling with premium appearance at lower entry cost than 4x4.</p></div><div class="modal-spec-box"><h4>Safety &amp; Security</h4><p>SRS Airbag – Driver + Passenger + Knee (DR); safety items confirmed against live dealer specification.</p></div>`,
  },
  g24at: {
    title: `2.4 G 4x2 A/T`,
    sub: `Philippines Spec • 4x2 A/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions &amp; Capacity</h4><p>Practical 4x2 automatic double-cab; final dimensions/capacity checked per unit.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.4L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo (VNT) with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Ventilated front discs, drum type rear brakes, double wishbone / leaf spring layout.</p></div><div class="modal-spec-box"><h4>Interior &amp; Function</h4><p>Practical export positioning for buyers who want automatic at a lower budget.</p></div><div class="modal-spec-box"><h4>Safety &amp; Security</h4><p>SRS Airbag – Driver + Passenger + Knee (DR).</p></div>`,
  },
  g24mt: {
    title: `2.4 G 4x2 M/T`,
    sub: `Philippines Spec • 4x2 M/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions &amp; Capacity</h4><p>Manual 4x2 double-cab; dimensions/capacity confirmed before export quote.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.4L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo (VNT) with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>Manual transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Ventilated front discs and drum rear brakes; standard Hilux suspension layout.</p></div><div class="modal-spec-box"><h4>Interior &amp; Function</h4><p>Lower running-cost positioning for fleet and practical buyers.</p></div><div class="modal-spec-box"><h4>Safety &amp; Security</h4><p>SRS Airbag – Driver + Passenger + Knee (DR); items verified per unit.</p></div>`,
  },
  e24at: {
    title: `2.4 E 4x2 A/T`,
    sub: `Philippines Spec • 4x2 A/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions &amp; Capacity</h4><p>Entry/workhorse automatic option; capacity details confirmed per VIN.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.4L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo (VNT) with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Ventilated front discs, drum type rear brakes, double wishbone / leaf spring layout.</p></div><div class="modal-spec-box"><h4>Interior &amp; Function</h4><p>Workhorse trim for buyers balancing budget and automatic driving convenience.</p></div><div class="modal-spec-box"><h4>Safety &amp; Security</h4><p>SRS Airbag – Driver + Passenger + Knee (DR); items subject to official unit confirmation.</p></div>`,
  },
  e24mt: {
    title: `2.4 E 4x2 M/T`,
    sub: `Philippines Spec • 4x2 M/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions &amp; Capacity</h4><p>Entry/workhorse manual option; final data checked before invoice.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.4L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo (VNT) with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed manual transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Ventilated front discs, drum rear brakes; double wishbone / leaf spring rear layout.</p></div><div class="modal-spec-box"><h4>Interior &amp; Function</h4><p>Lowest-cost workhorse positioning for export buyers needing simple, durable supply.</p></div><div class="modal-spec-box"><h4>Safety &amp; Security</h4><p>SRS Airbag – Driver + Passenger + Knee (DR); safety specs checked per final dealer confirmation.</p></div>`,
  },
};

// ── 12 variant cards matching the reference HTML ─────────────────────────────
const variantCards = [
  // 1 — GR-S Emotional Red
  {
    key: "grs",
    badge: "Top Spec — Sport",
    drive: "4x4 A/T",
    featured: true,
    img: "/images/extracted-4-red-philippines-spec-toyota-hilux-at-port.jpg",
    imgAlt: "2.8 GR-S 4x4 A/T Emotional Red – Philippines export",
    title: "2.8 GR-S 4x4 A/T",
    colour: "Emotional Red",
    specs: [
      { label: "Engine", value: "2.8L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed AT" },
      { label: "Suspension", value: "Double Wishbone + Monotube / Leaf Spring Rigid Axle" },
    ],
  },
  // 2 — GR-S Attitude Black Mica
  {
    key: "grs",
    badge: "Top Spec — Sport",
    drive: "4x4 A/T",
    featured: true,
    img: "/images/extracted-3-black-philippines-spec-toyota-hilux-at-port.jpg",
    imgAlt: "2.8 GR-S 4x4 A/T Attitude Black Mica – Philippines export",
    title: "2.8 GR-S 4x4 A/T",
    colour: "Attitude Black Mica",
    specs: [
      { label: "Engine", value: "2.8L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed AT" },
      { label: "Steering", value: "Power Steering + Variable Flow Control" },
    ],
  },
  // 3 — Conquest 4x4 AT Emotional Red
  {
    key: "conquest28at",
    badge: "Export Popular",
    drive: "4x4 A/T",
    featured: false,
    img: "/images/extracted-11-red-toyota-hilux-philippines-export-unit-at-port.jpg",
    imgAlt: "2.8 Conquest 4x4 A/T Emotional Red – Philippines export",
    title: "2.8 CONQUEST 4x4 A/T",
    colour: "Emotional Red",
    specs: [
      { label: "Engine", value: "2.8L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed AT" },
      { label: "ABS", value: "With Brake Assist + EBD" },
    ],
  },
  // 4 — Conquest 4x4 AT Super White II
  {
    key: "conquest28at",
    badge: "Export Popular",
    drive: "4x4 A/T",
    featured: false,
    img: "/images/extracted-2-white-philippines-spec-toyota-hilux-at-port.jpg",
    imgAlt: "2.8 Conquest 4x4 A/T Super White II – Philippines export",
    title: "2.8 CONQUEST 4x4 A/T",
    colour: "Super White II",
    specs: [
      { label: "Engine", value: "2.8L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed AT" },
      { label: "ABS", value: "With Brake Assist + EBD" },
    ],
  },
  // 5 — Conquest 4x4 MT Emotional Red
  {
    key: "conquest28mt",
    badge: "Manual 4x4",
    drive: "4x4 M/T",
    featured: false,
    img: "/images/extracted-8-red-toyota-hilux-philippines-export-unit-at-port.jpg",
    imgAlt: "2.8 Conquest 4x4 M/T Emotional Red – Philippines export",
    title: "2.8 CONQUEST 4x4 M/T",
    colour: "Emotional Red",
    specs: [
      { label: "Engine", value: "2.8L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed MT w/ iMT" },
      { label: "ABS", value: "With Brake Assist + EBD" },
    ],
  },
  // 6 — Conquest 4x4 MT Super White II
  {
    key: "conquest28mt",
    badge: "Manual 4x4",
    drive: "4x4 M/T",
    featured: false,
    img: "/images/extracted-5-white-toyota-hilux-philippines-export-unit-at-port.jpg",
    imgAlt: "2.8 Conquest 4x4 M/T Super White II – Philippines export",
    title: "2.8 CONQUEST 4x4 M/T",
    colour: "Super White II",
    specs: [
      { label: "Engine", value: "2.8L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed MT w/ iMT" },
      { label: "ABS", value: "With Brake Assist + EBD" },
    ],
  },
  // 7 — Conquest 4x2 AT Emotional Red
  {
    key: "conquest24at",
    badge: "Premium 4x2",
    drive: "4x2 A/T",
    featured: false,
    img: "/images/extracted-4-red-philippines-spec-toyota-hilux-at-port.jpg",
    imgAlt: "2.4 Conquest 4x2 A/T Emotional Red – Philippines export",
    title: "2.4 CONQUEST 4x2 A/T",
    colour: "Emotional Red",
    specs: [
      { label: "Engine", value: "2.4L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed AT" },
      { label: "Safety", value: "SRS Airbag Driver + Passenger + Knee DR" },
    ],
  },
  // 8 — Conquest 4x2 AT Super White II
  {
    key: "conquest24at",
    badge: "Premium 4x2",
    drive: "4x2 A/T",
    featured: false,
    img: "/images/extracted-9-white-toyota-hilux-philippines-export-unit-at-port.jpg",
    imgAlt: "2.4 Conquest 4x2 A/T Super White II – Philippines export",
    title: "2.4 CONQUEST 4x2 A/T",
    colour: "Super White II",
    specs: [
      { label: "Engine", value: "2.4L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed AT" },
      { label: "Safety", value: "SRS Airbag Driver + Passenger + Knee DR" },
    ],
  },
  // 9 — G 4x2 AT Attitude Black Mica
  {
    key: "g24at",
    badge: "Practical Export",
    drive: "4x2 A/T",
    featured: false,
    img: "/images/extracted-10-black-toyota-hilux-philippines-export-unit-at-port.jpg",
    imgAlt: "2.4 G 4x2 A/T Attitude Black Mica – Philippines export",
    title: "2.4 G 4x2 A/T",
    colour: "Attitude Black Mica",
    specs: [
      { label: "Engine", value: "2.4L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed AT" },
      { label: "Brakes", value: "Ventilated Discs front / Drum rear" },
    ],
  },
  // 10 — E 4x2 AT Super White II
  {
    key: "e24at",
    badge: "Workhorse Auto",
    drive: "4x2 A/T",
    featured: false,
    img: "/images/extracted-12-white-toyota-hilux-philippines-export-unit-at-port.jpg",
    imgAlt: "2.4 E 4x2 A/T Super White II – Philippines export",
    title: "2.4 E 4x2 A/T",
    colour: "Super White II",
    specs: [
      { label: "Engine", value: "2.4L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed AT" },
      { label: "Safety", value: "SRS Airbag Driver + Passenger + Knee DR" },
    ],
  },
  // 11 — G 4x2 MT Attitude Black Mica
  {
    key: "g24mt",
    badge: "Practical Manual",
    drive: "4x2 M/T",
    featured: false,
    img: "/images/extracted-6-black-toyota-hilux-philippines-export-unit-at-port.jpg",
    imgAlt: "2.4 G 4x2 M/T Attitude Black Mica – Philippines export",
    title: "2.4 G 4x2 M/T",
    colour: "Attitude Black Mica",
    specs: [
      { label: "Engine", value: "2.4L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "Manual" },
      { label: "Safety", value: "SRS Airbag Driver + Passenger + Knee DR" },
    ],
  },
  // 12 — E 4x2 MT Super White II
  {
    key: "e24mt",
    badge: "Workhorse Manual",
    drive: "4x2 M/T",
    featured: false,
    img: "/images/extracted-7-white-toyota-hilux-philippines-export-unit-at-port.jpg",
    imgAlt: "2.4 E 4x2 M/T Super White II – Philippines export",
    title: "2.4 E 4x2 M/T",
    colour: "Super White II",
    specs: [
      { label: "Engine", value: "2.4L Diesel DOHC VNT with intercooler" },
      { label: "Transmission", value: "6-Speed MT" },
      { label: "Safety", value: "SRS Airbag Driver + Passenger + Knee DR" },
    ],
  },
];

// Colour dot map
const colourDotMap: Record<string, string> = {
  "Emotional Red": "#9b111e",
  "Attitude Black Mica": "#111827",
  "Super White II": "#f0f0ef",
};

export default function SpecsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ title: string; sub: string; boxes: string } | null>(null);

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
                    All 12 Philippines-market Hilux variant and colour combinations available for export.
                    Pricing is not displayed — click <b>FULL SPECS</b> for detailed specifications,
                    then request a live export quote.
                  </p>
                </div>
                <a className="btn dark" href="/quote">
                  Ask live stock &amp; export quote
                </a>
              </div>

              {/* 12-card grid */}
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

                    <div className="toyota-vehicle real-photo-card">
                      <img
                        alt={card.imgAlt}
                        loading="lazy"
                        src={card.img}
                      />
                      {/* Colour indicator dot */}
                      <div className="color-dots">
                        <span
                          title={card.colour}
                          style={{
                            background: colourDotMap[card.colour] ?? "#ccc",
                            border: card.colour === "Super White II"
                              ? "1.5px solid #bbb"
                              : "1.5px solid rgba(7,23,47,0.18)",
                          }}
                        />
                      </div>
                    </div>

                    <h3>{card.title}</h3>
                    <p className="toyota-month" style={{ color: "#8599b0", fontSize: 12, fontWeight: 700 }}>
                      {card.colour}
                    </p>

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
