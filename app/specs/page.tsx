"use client";

import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const hiluxSpecData: Record<string, { title: string; sub: string; boxes: string }> = {
  grs: {
    title: `2.8 GR-S 4x4 A/T`,
    sub: `Philippines Spec • 4x4 A/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions & Capacity</h4><p>Double-cab Hilux body; final dimensions, payload and GVW to be confirmed per unit and Toyota dealer release.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.8L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic transmission; 4x4 drivetrain.</p></div><div class="modal-spec-box"><h4>Exterior</h4><p>GR-S presentation with sport styling, black/red accent look, alloy wheels and premium exterior positioning.</p></div><div class="modal-spec-box"><h4>Interior & Function</h4><p>Premium cabin positioning for showroom-grade export buyers; exact seat, audio and convenience items must be checked per VIN.</p></div><div class="modal-spec-box"><h4>Safety & Security</h4><p>Toyota Safety Sense / SRS airbag and safety items subject to confirmed Philippines dealer specification.</p></div>`,
  },
  conquest28at: {
    title: `2.8 CONQUEST 4x4 A/T`,
    sub: `Philippines Spec • 4x4 A/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions & Capacity</h4><p>Premium double-cab 4x4 export option; dimensions/capacity confirmed per final unit.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.8L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Double wishbone front suspension, leaf spring rigid axle rear suspension.</p></div><div class="modal-spec-box"><h4>Exterior</h4><p>Conquest styling, sports bar / overfender look depending on confirmed unit.</p></div><div class="modal-spec-box"><h4>Safety & Security</h4><p>SRS airbag, ABS with Brake Assist + EBD depending on confirmed variant.</p></div>`,
  },
  conquest28mt: {
    title: `2.8 CONQUEST 4x4 M/T`,
    sub: `Philippines Spec • 4x4 M/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions & Capacity</h4><p>Manual premium 4x4 double-cab option; final data confirmed per VIN.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.8L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed manual transmission with iMT.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Double wishbone front suspension, leaf spring rigid axle rear suspension.</p></div><div class="modal-spec-box"><h4>Exterior</h4><p>Conquest exterior trim positioning for buyers who prefer manual 4x4.</p></div><div class="modal-spec-box"><h4>Safety & Security</h4><p>ABS with Brake Assist + EBD and SRS items to be confirmed against dealer release.</p></div>`,
  },
  conquest24at: {
    title: `2.4 CONQUEST 4x2 A/T`,
    sub: `Philippines Spec • 4x2 A/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions & Capacity</h4><p>Premium 4x2 double-cab option; capacity and dimension data confirmed before quotation.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.4L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Ventilated front discs and rear drum type brakes; double wishbone / leaf spring layout.</p></div><div class="modal-spec-box"><h4>Exterior</h4><p>Conquest 4x2 styling with premium appearance at lower entry cost than 4x4.</p></div><div class="modal-spec-box"><h4>Safety & Security</h4><p>SRS airbags and safety items to be confirmed against live dealer specification.</p></div>`,
  },
  g24at: {
    title: `2.4 G 4x2 A/T`,
    sub: `Philippines Spec • 4x2 A/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions & Capacity</h4><p>Practical 4x2 automatic double-cab; final dimensions/capacity checked per unit.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.4L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Ventilated front discs, drum type rear brakes, double wishbone / leaf spring layout.</p></div><div class="modal-spec-box"><h4>Interior & Function</h4><p>Good practical export positioning for buyers who want automatic at lower budget.</p></div><div class="modal-spec-box"><h4>Safety & Security</h4><p>SRS airbag driver + passenger + knee driver listed on Toyota PH variant overview.</p></div>`,
  },
  g24mt: {
    title: `2.4 G 4x2 M/T`,
    sub: `Philippines Spec • 4x2 M/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions & Capacity</h4><p>Manual 4x2 double-cab; dimensions/capacity confirmed before export quote.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.4L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>Manual transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Ventilated front discs and drum rear brakes; standard Hilux suspension layout.</p></div><div class="modal-spec-box"><h4>Interior & Function</h4><p>Lower running-cost positioning for fleet and practical buyers.</p></div><div class="modal-spec-box"><h4>Safety & Security</h4><p>SRS and safety items to be verified per unit.</p></div>`,
  },
  e24at: {
    title: `2.4 E 4x2 A/T`,
    sub: `Philippines Spec • 4x2 A/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions & Capacity</h4><p>Entry/workhorse automatic option; capacity details confirmed per VIN.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.4L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed automatic transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Ventilated front discs, drum type rear brakes, double wishbone / leaf spring layout.</p></div><div class="modal-spec-box"><h4>Interior & Function</h4><p>Workhorse trim for buyers balancing budget and automatic driving.</p></div><div class="modal-spec-box"><h4>Safety & Security</h4><p>SRS airbag and other safety items subject to official unit confirmation.</p></div>`,
  },
  e24mt: {
    title: `2.4 E 4x2 M/T`,
    sub: `Philippines Spec • 4x2 M/T`,
    boxes: `<div class="modal-spec-box"><h4>Dimensions & Capacity</h4><p>Entry/workhorse manual option; final data checked before invoice.</p></div><div class="modal-spec-box"><h4>Engine</h4><p>2.4L diesel, 4-cylinder, 16-valve DOHC variable nozzle turbo with air-cooled intercooler.</p></div><div class="modal-spec-box"><h4>Transmission</h4><p>6-speed manual transmission.</p></div><div class="modal-spec-box"><h4>Chassis</h4><p>Ventilated front discs, drum rear brakes; double wishbone / leaf spring rear layout.</p></div><div class="modal-spec-box"><h4>Interior & Function</h4><p>Lowest-cost workhorse positioning for export buyers needing simple durable supply.</p></div><div class="modal-spec-box"><h4>Safety & Security</h4><p>Safety specifications to be checked per final dealer confirmation.</p></div>`,
  },
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
                    Below the three colour photos, buyers can browse the main Philippines-market Hilux variants. Pricing is removed — only real vehicle photos and key specifications are shown. Click <b>FULL SPECS</b> to view the detailed specification popup.
                  </p>
                </div>
                <a className="btn dark" href="/quote">
                  Ask live stock &amp; export quote
                </a>
              </div>
              <div className="toyota-variant-grid">
                <article className="toyota-card featured">
                  <div className="toyota-card-top">
                    <span className="toyota-badge">Main Display Model</span>
                    <span className="toyota-drive">4x4 A/T</span>
                  </div>
                  <div className="toyota-vehicle real-photo-card">
                    <img alt="White Toyota Hilux Philippines export unit at port" loading="lazy" src="/images/extracted-2-white-philippines-spec-toyota-hilux-at-port.jpg" />
                  </div>
                  <h3>2.8 GR-S 4x4 A/T</h3>
                  <p className="toyota-month">Philippines-market Hilux</p>
                  <ul className="short-specs">
                    <li><b>Engine:</b> 2.8L Diesel, 4-Cylinder, 16-Valve DOHC VNT with intercooler</li>
                    <li><b>Suspension:</b> Double Wishbone + Monotube Shock Absorber / Leaf Spring Rigid Axle + Monotube</li>
                    <li><b>Steering:</b> Power Steering + Variable Flow Control</li>
                  </ul>
                  <button className="full-spec-btn" onClick={() => openHiluxSpec("grs")} type="button">
                    FULL SPECS
                  </button>
                </article>

                <article className="toyota-card">
                  <div className="toyota-card-top">
                    <span className="toyota-badge">Export Popular</span>
                    <span className="toyota-drive">4x4 A/T</span>
                  </div>
                  <div className="toyota-vehicle real-photo-card">
                    <img alt="Black Toyota Hilux Philippines export unit at port" loading="lazy" src="/images/extracted-3-black-philippines-spec-toyota-hilux-at-port.jpg" />
                  </div>
                  <h3>2.8 CONQUEST 4x4 A/T</h3>
                  <p className="toyota-month">Philippines-market Hilux</p>
                  <ul className="short-specs">
                    <li><b>Engine:</b> 2.8L Diesel, 4-Cylinder, 16-Valve DOHC VNT with intercooler</li>
                    <li><b>Transmission:</b> 6-Speed AT</li>
                    <li><b>ABS:</b> With Brake Assist + EBD</li>
                  </ul>
                  <button className="full-spec-btn" onClick={() => openHiluxSpec("conquest28at")} type="button">
                    FULL SPECS
                  </button>
                </article>

                <article className="toyota-card">
                  <div className="toyota-card-top">
                    <span className="toyota-badge">Manual 4x4</span>
                    <span className="toyota-drive">4x4 M/T</span>
                  </div>
                  <div className="toyota-vehicle real-photo-card">
                    <img alt="White Toyota Hilux Philippines export unit at port" loading="lazy" src="/images/extracted-2-white-philippines-spec-toyota-hilux-at-port.jpg" />
                  </div>
                  <h3>2.8 CONQUEST 4x4 M/T</h3>
                  <p className="toyota-month">Philippines-market Hilux</p>
                  <ul className="short-specs">
                    <li><b>Engine:</b> 2.8L Diesel, 4-Cylinder, 16-Valve DOHC VNT with intercooler</li>
                    <li><b>Transmission:</b> 6-Speed MT w/ iMT</li>
                    <li><b>ABS:</b> With Brake Assist + EBD</li>
                  </ul>
                  <button className="full-spec-btn" onClick={() => openHiluxSpec("conquest28mt")} type="button">
                    FULL SPECS
                  </button>
                </article>

                <article className="toyota-card">
                  <div className="toyota-card-top">
                    <span className="toyota-badge">Premium 4x2</span>
                    <span className="toyota-drive">4x2 A/T</span>
                  </div>
                  <div className="toyota-vehicle real-photo-card">
                    <img alt="Red Toyota Hilux Philippines export unit at port" loading="lazy" src="/images/extracted-4-red-philippines-spec-toyota-hilux-at-port.jpg" />
                  </div>
                  <h3>2.4 CONQUEST 4x2 A/T</h3>
                  <p className="toyota-month">Philippines-market Hilux</p>
                  <ul className="short-specs">
                    <li><b>Engine:</b> 2.4L Diesel, 4-Cylinder, 16-Valve DOHC VNT with intercooler</li>
                    <li><b>Transmission:</b> 6-Speed AT</li>
                    <li><b>Safety:</b> SRS Airbag Driver + Passenger + Knee DR</li>
                  </ul>
                  <button className="full-spec-btn" onClick={() => openHiluxSpec("conquest24at")} type="button">
                    FULL SPECS
                  </button>
                </article>

                <article className="toyota-card">
                  <div className="toyota-card-top">
                    <span className="toyota-badge">Practical Export</span>
                    <span className="toyota-drive">4x2 A/T</span>
                  </div>
                  <div className="toyota-vehicle real-photo-card">
                    <img alt="White Toyota Hilux Philippines export unit at port" loading="lazy" src="/images/extracted-2-white-philippines-spec-toyota-hilux-at-port.jpg" />
                  </div>
                  <h3>2.4 G 4x2 A/T</h3>
                  <p className="toyota-month">Philippines-market Hilux</p>
                  <ul className="short-specs">
                    <li><b>Engine:</b> 2.4L Diesel, 4-Cylinder, 16-Valve DOHC VNT with intercooler</li>
                    <li><b>Transmission:</b> 6-Speed AT</li>
                    <li><b>Brakes:</b> Ventilated Discs front / Drum rear</li>
                  </ul>
                  <button className="full-spec-btn" onClick={() => openHiluxSpec("g24at")} type="button">
                    FULL SPECS
                  </button>
                </article>

                <article className="toyota-card">
                  <div className="toyota-card-top">
                    <span className="toyota-badge">Practical Manual</span>
                    <span className="toyota-drive">4x2 M/T</span>
                  </div>
                  <div className="toyota-vehicle real-photo-card">
                    <img alt="Black Toyota Hilux Philippines export unit at port" loading="lazy" src="/images/extracted-3-black-philippines-spec-toyota-hilux-at-port.jpg" />
                  </div>
                  <h3>2.4 G 4x2 M/T</h3>
                  <p className="toyota-month">Philippines-market Hilux</p>
                  <ul className="short-specs">
                    <li><b>Engine:</b> 2.4L Diesel, 4-Cylinder, 16-Valve DOHC VNT with intercooler</li>
                    <li><b>Transmission:</b> Manual transmission</li>
                    <li><b>Safety:</b> SRS Airbag Driver + Passenger + Knee DR</li>
                  </ul>
                  <button className="full-spec-btn" onClick={() => openHiluxSpec("g24mt")} type="button">
                    FULL SPECS
                  </button>
                </article>

                <article className="toyota-card">
                  <div className="toyota-card-top">
                    <span className="toyota-badge">Workhorse Auto</span>
                    <span className="toyota-drive">4x2 A/T</span>
                  </div>
                  <div className="toyota-vehicle real-photo-card">
                    <img alt="Red Toyota Hilux Philippines export unit at port" loading="lazy" src="/images/extracted-4-red-philippines-spec-toyota-hilux-at-port.jpg" />
                  </div>
                  <h3>2.4 E 4x2 A/T</h3>
                  <p className="toyota-month">Philippines-market Hilux</p>
                  <ul className="short-specs">
                    <li><b>Engine:</b> 2.4L Diesel, 4-Cylinder, 16-Valve DOHC VNT with intercooler</li>
                    <li><b>Transmission:</b> 6-Speed AT</li>
                    <li><b>Safety:</b> SRS Airbag Driver + Passenger + Knee DR</li>
                  </ul>
                  <button className="full-spec-btn" onClick={() => openHiluxSpec("e24at")} type="button">
                    FULL SPECS
                  </button>
                </article>

                <article className="toyota-card">
                  <div className="toyota-card-top">
                    <span className="toyota-badge">Workhorse Manual</span>
                    <span className="toyota-drive">4x2 M/T</span>
                  </div>
                  <div className="toyota-vehicle real-photo-card">
                    <img alt="White Toyota Hilux Philippines export unit at port" loading="lazy" src="/images/extracted-2-white-philippines-spec-toyota-hilux-at-port.jpg" />
                  </div>
                  <h3>2.4 E 4x2 M/T</h3>
                  <p className="toyota-month">Philippines-market Hilux</p>
                  <ul className="short-specs">
                    <li><b>Engine:</b> 2.4L Diesel, 4-Cylinder, 16-Valve DOHC VNT with intercooler</li>
                    <li><b>Transmission:</b> 6-Speed MT</li>
                    <li><b>Safety:</b> SRS Airbag Driver + Passenger + Knee DR</li>
                  </ul>
                  <button className="full-spec-btn" onClick={() => openHiluxSpec("e24mt")} type="button">
                    FULL SPECS
                  </button>
                </article>
              </div>

              <div className="export-availability-note">
                <b>Important:</b> Specs, stock, colour, model year, VIN/engine details, VAT/export documents, lashing and shipping cost must be confirmed before invoice. Prices are intentionally not displayed on this page.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <div aria-hidden={!modalOpen ? "true" : "false"} className={`spec-modal-backdrop ${modalOpen ? "open" : ""}`} id="specModal" onClick={(e) => { if ((e.target as HTMLElement).id === "specModal") closeHiluxSpec(); }}>
        <div aria-labelledby="specModalTitle" aria-modal="true" className="spec-modal" role="dialog">
          <div className="spec-modal-head">
            <div>
              <h3 id="specModalTitle">{modalData?.title || "Full specs"}</h3>
              <p id="specModalSub">{modalData?.sub || "Philippines-market Hilux"}</p>
            </div>
            <button aria-label="Close full specifications" className="modal-close" id="specModalClose" type="button" onClick={closeHiluxSpec}>
              ×
            </button>
          </div>
          <div className="spec-modal-body">
            <div className="modal-spec-grid" id="specModalGrid" dangerouslySetInnerHTML={{ __html: modalData?.boxes || "" }}></div>
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
