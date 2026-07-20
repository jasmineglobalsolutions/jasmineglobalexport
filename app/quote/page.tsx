"use client";

import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { useState, FormEvent } from "react";

// Buyer types that require a company name
const COMPANY_BUYER_TYPES = ["Dealer", "Company", "Broker", "Fleet Buyer"];

export default function QuotePage() {
  const [buyerType, setBuyerType] = useState<string>("");
  const [hiluxVariant, setHiluxVariant] = useState<string>("");
  const [otherMake, setOtherMake] = useState<string>("");
  const [otherModel, setOtherModel] = useState<string>("");
  const [vehicleError, setVehicleError] = useState<string>("");
  const [buyerTypeError, setBuyerTypeError] = useState<string>("");

  const requiresCompany = COMPANY_BUYER_TYPES.includes(buyerType);

  function validateAndSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let valid = true;

    // Buyer type must be selected
    if (!buyerType) {
      setBuyerTypeError("Please select a buyer type to continue.");
      valid = false;
    } else {
      setBuyerTypeError("");
    }

    // At least a Hilux variant or an Other Make + Model must be provided
    const hasHilux = hiluxVariant !== "";
    const hasOther = otherMake.trim() !== "" || otherModel.trim() !== "";
    if (!hasHilux && !hasOther) {
      setVehicleError(
        "Please select a Hilux variant or enter an Other Make / Model."
      );
      valid = false;
    } else {
      setVehicleError("");
    }

    if (!valid) return;

    // Native form submission (adjust action/method as needed for your back-end)
    (e.target as HTMLFormElement).submit();
  }

  return (
    <PageLayout>
      <section className="section-title" aria-label="Quote request intro">
        <div className="wrap">
          <span className="variant-note-pill">Export Enquiry</span>
          <h1 style={{ marginTop: 12 }}>Request a Vehicle Export Quote</h1>
          <p>
            Fill in the form below to request an export quote. We supply
            Philippines-spec Toyota Hilux vehicles globally, and can also source
            other makes and models. Please note that destination customs
            clearance and local registration are not included.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="quote-box">
            <form
              className="quote-grid"
              onSubmit={validateAndSubmit}
              method="post"
              action="/api/quote"
              noValidate
            >

              {/* ── SECTION: Contact Details ── */}
              <div className="full quote-section-label">
                <span>👤</span> Contact Details
              </div>

              {/* Full Name */}
              <label className="field field-stacked">
                <span className="field-label">Full Name <span className="req">*</span></span>
                <span className="field-input-row">
                  <span className="field-icon">👤</span>
                  <input placeholder="e.g. Ahmed Al-Rashid" type="text" name="name" required />
                </span>
              </label>

              {/* Company Name — only required for Dealer / Company / Broker / Fleet Buyer */}
              <label className="field field-stacked">
                <span className="field-label">
                  Company Name{" "}
                  {requiresCompany ? (
                    <span className="req">*</span>
                  ) : (
                    <span className="optional">(optional)</span>
                  )}
                </span>
                <span className="field-input-row">
                  <span className="field-icon">🏢</span>
                  <input
                    placeholder="e.g. Al-Rashid Motors LLC"
                    type="text"
                    name="company"
                    required={requiresCompany}
                  />
                </span>
              </label>

              {/* Email */}
              <label className="field field-stacked">
                <span className="field-label">Email Address <span className="req">*</span></span>
                <span className="field-input-row">
                  <span className="field-icon">✉️</span>
                  <input placeholder="e.g. ahmed@example.com" type="email" name="email" required />
                </span>
              </label>

              {/* WhatsApp */}
              <label className="field field-stacked">
                <span className="field-label">WhatsApp Number <span className="req">*</span></span>
                <span className="field-input-row">
                  <span className="field-icon">📱</span>
                  <input
                    placeholder="Include country code, e.g. +971 50 123 4567"
                    type="tel"
                    name="whatsapp"
                    required
                  />
                </span>
              </label>

              {/* Country */}
              <label className="field field-stacked">
                <span className="field-label">Country <span className="req">*</span></span>
                <span className="field-input-row">
                  <span className="field-icon">🌍</span>
                  <input placeholder="e.g. United Arab Emirates" type="text" name="country" required />
                </span>
              </label>

              {/* Destination Port */}
              <label className="field field-stacked">
                <span className="field-label">Destination Port / City <span className="req">*</span></span>
                <span className="field-input-row">
                  <span className="field-icon">⚓</span>
                  <input placeholder="e.g. Port of Jebel Ali, Dubai" type="text" name="port" required />
                </span>
              </label>

              {/* ── SECTION: Buyer Profile ── */}
              <div className="full quote-section-label">
                <span>🏷️</span> Buyer Profile
              </div>

              <div className="full">
                <div className="buyer-type-label">
                  Buyer Type <span className="req">*</span>
                </div>
                <div className="buyer-type-grid">
                  {[
                    { value: "Dealer", icon: "🏪" },
                    { value: "End User", icon: "👤" },
                    { value: "Company", icon: "🏢" },
                    { value: "Broker", icon: "🤝" },
                    { value: "Fleet Buyer", icon: "🚛" },
                  ].map(({ value, icon }) => (
                    <label className="buyer-type-option" key={value}>
                      <input
                        type="radio"
                        name="buyer_type"
                        value={value}
                        checked={buyerType === value}
                        onChange={() => {
                          setBuyerType(value);
                          setBuyerTypeError("");
                        }}
                      />
                      <span className="buyer-type-pill">
                        {icon} {value}
                      </span>
                    </label>
                  ))}
                </div>
                {buyerTypeError && (
                  <p className="form-field-error" role="alert">
                    {buyerTypeError}
                  </p>
                )}
              </div>

              {/* ── SECTION: Vehicle Requirements ── */}
              <div className="full quote-section-label">
                <span>🚙</span> Vehicle Requirements
              </div>

              {/* Hilux Variant */}
              <label className="field field-stacked">
                <span className="field-label">Preferred Hilux Variant</span>
                <span className="field-input-row">
                  <span className="field-icon">🚙</span>
                  <select
                    name="hilux_variant"
                    value={hiluxVariant}
                    onChange={(e) => {
                      setHiluxVariant(e.target.value);
                      setVehicleError("");
                    }}
                  >
                    <option value="">— Select a variant —</option>
                    <option value="Hilux 4x4 BEV">Hilux 4×4 BEV (Battery Electric)</option>
                    <option value="2.8 Conquest 4x4 A/T">2.8 Conquest 4×4 A/T</option>
                    <option value="2.8 V 4x4 M/T">2.8 V 4×4 M/T</option>
                    <option value="2.8 Conquest 4x2 A/T">2.8 Conquest 4×2 A/T</option>
                    <option value="2.8 G 4x2 A/T">2.8 G 4×2 A/T</option>
                    <option value="2.8 G 4x2 M/T">2.8 G 4×2 M/T</option>
                    <option value="2.8 E 4x4 M/T">2.8 E 4×4 M/T</option>
                    <option value="2.8 E 4x2 A/T">2.8 E 4×2 A/T</option>
                    <option value="Not Sure / Please Advise">Not Sure / Please Advise</option>
                  </select>
                </span>
              </label>

              {/* Preferred Colour */}
              <label className="field field-stacked">
                <span className="field-label">Preferred Colour</span>
                <span className="field-input-row">
                  <span className="field-icon">🎨</span>
                  <select name="preferred_colour">
                    <option value="">— Select a colour —</option>
                    <option value="White Pearl">White Pearl</option>
                    <option value="Phantom Matte Black">Phantom Matte Black</option>
                    <option value="Silver Metallic">Silver Metallic</option>
                    <option value="Dark Gray Metallic">Dark Gray Metallic</option>
                    <option value="Red Mica">Red Mica</option>
                    <option value="Crimson Spark Red">Crimson Spark Red</option>
                    <option value="Bronze / Savanna Brown">Bronze / Savanna Brown</option>
                    <option value="Blue / Nebula Blue">Blue / Nebula Blue</option>
                    <option value="Any Colour / No Preference">Any Colour / No Preference</option>
                  </select>
                </span>
              </label>

              {/* Shipping Method */}
              <label className="field field-stacked">
                <span className="field-label">Preferred Shipping Method</span>
                <span className="field-input-row">
                  <span className="field-icon">🚢</span>
                  <select name="shipping_method">
                    <option value="">— Select a method —</option>
                    <option value="RoRo Shipping">RoRo Shipping</option>
                    <option value="Container Shipping (40FT)">Container Shipping (40FT)</option>
                    <option value="Not Sure / Please Advise">Not Sure / Please Advise</option>
                  </select>
                </span>
              </label>

              {/* Timeline */}
              <label className="field field-stacked">
                <span className="field-label">Estimated Timeline / Urgency</span>
                <span className="field-input-row">
                  <span className="field-icon">📅</span>
                  <select name="timeline">
                    <option value="">— Select a timeline —</option>
                    <option value="As soon as possible">As soon as possible</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="6+ months / planning stage">6+ months / planning stage</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </span>
              </label>

              {/* Quantity */}
              <label className="field field-stacked">
                <span className="field-label">Quantity Required <span className="req">*</span></span>
                <span className="field-input-row">
                  <span className="field-icon">🔢</span>
                  <input min="1" placeholder="e.g. 1" type="number" name="quantity" required />
                </span>
              </label>

              {/* ── Other Make & Model Request ── */}
              <div className="full quote-section-label" style={{ marginTop: 4 }}>
                <span>🔍</span> Other Make &amp; Model Request{" "}
                <span style={{ fontWeight: 600, fontSize: 13, color: "#728196" }}>
                  (if not requesting a Hilux)
                </span>
              </div>

              {/* Vehicle error banner */}
              {vehicleError && (
                <div className="full">
                  <p className="form-field-error" role="alert">
                    {vehicleError}
                  </p>
                </div>
              )}

              {/* Other Make */}
              <label className="field field-stacked">
                <span className="field-label">Other Make</span>
                <span className="field-input-row">
                  <span className="field-icon">🚗</span>
                  <input
                    placeholder="e.g. Mitsubishi, Ford, Isuzu…"
                    type="text"
                    name="other_make"
                    value={otherMake}
                    onChange={(e) => {
                      setOtherMake(e.target.value);
                      setVehicleError("");
                    }}
                  />
                </span>
              </label>

              {/* Other Model */}
              <label className="field field-stacked">
                <span className="field-label">Other Model</span>
                <span className="field-input-row">
                  <span className="field-icon">📋</span>
                  <input
                    placeholder="e.g. Strada, Ranger, D-Max…"
                    type="text"
                    name="other_model"
                    value={otherModel}
                    onChange={(e) => {
                      setOtherModel(e.target.value);
                      setVehicleError("");
                    }}
                  />
                </span>
              </label>

              {/* ── Message Box ── */}
              <div className="full quote-section-label">
                <span>📝</span> Message / Additional Requirements
              </div>

              <label className="field field-stacked full" style={{ borderRadius: 18 }}>
                <span className="field-label">Your Message</span>
                <span className="field-input-row" style={{ alignItems: "flex-start" }}>
                  <span className="field-icon" style={{ marginTop: 2 }}>💬</span>
                  <textarea
                    placeholder="Tell us anything else — specific features, urgency, fleet details, or any questions you have for us…"
                    rows={5}
                    name="message"
                  ></textarea>
                </span>
              </label>

              {/* ── Responsibility Checkbox ── */}
              <div className="full">
                <label className="responsibility-check">
                  <input
                    type="checkbox"
                    name="responsibility_agreed"
                    required
                    id="responsibility_agreed"
                  />
                  <span>
                    I understand that destination customs clearance, import
                    duties, taxes, registration, homologation and local
                    compliance are the buyer&apos;s responsibility. Jasmine
                    Global Export delivers to the agreed destination port only.
                  </span>
                </label>
              </div>

              {/* ── Privacy Consent ── */}
              <div className="full">
                <div className="privacy-notice">
                  <span className="privacy-icon">🔒</span>
                  <span>
                    By submitting this form you confirm that the information
                    provided is accurate and that you consent to Jasmine Global
                    Export using it to respond to your enquiry. Your data is
                    handled in accordance with our{" "}
                    <Link href="/privacy" className="privacy-link">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </div>
              </div>

              {/* ── Submit Buttons ── */}
              <div
                className="full"
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  marginTop: "8px",
                }}
              >
                <button className="btn dark" type="submit" id="submit-enquiry-btn">
                  Submit Enquiry
                </button>
                <a
                  className="btn wa"
                  href="https://wa.me/6589874467"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp • English
                </a>
                <a
                  className="btn wa"
                  href="https://wa.me/6581139145"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp • عربي
                </a>
              </div>

            </form>
          </div>
        </div>
      </section>

      {/* Inline styles scoped to quote page */}
      <style>{`
        /* ── Stacked label field layout ── */
        .field-stacked {
          display: flex !important;
          flex-direction: column !important;
          align-items: stretch !important;
          gap: 6px !important;
          padding: 10px 16px 12px !important;
          border-radius: 18px !important;
        }

        .field-label {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #52647d;
          padding-left: 2px;
        }

        .field-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .field-input-row input,
        .field-input-row select,
        .field-input-row textarea {
          flex: 1;
          min-width: 0;
        }

        .field-icon {
          flex-shrink: 0;
          font-size: 16px;
          line-height: 1;
        }

        /* Required / optional markers */
        .req {
          color: #c0392b;
          font-weight: 900;
        }

        .optional {
          font-weight: 600;
          font-size: 11px;
          color: #94a3b8;
          text-transform: none;
          letter-spacing: 0;
        }

        /* ── Inline validation errors ── */
        .form-field-error {
          margin-top: 8px;
          padding: 10px 14px;
          background: #fff1f0;
          border: 1.5px solid #fca5a5;
          border-radius: 12px;
          color: #b91c1c;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
        }

        /* ── Quote section label ── */
        .quote-section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--navy, #071b35);
          padding-bottom: 2px;
          border-bottom: 2px solid var(--gold, #d7a44a);
          margin-top: 10px;
        }

        /* ── Buyer Type Radio Pills ── */
        .buyer-type-label {
          font-size: 13px;
          font-weight: 800;
          color: #52647d;
          margin-bottom: 10px;
        }

        .buyer-type-grid {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .buyer-type-option {
          cursor: pointer;
        }

        .buyer-type-option input[type="radio"] {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .buyer-type-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1.5px solid var(--line, #dbe6f2);
          background: #f7fbff;
          color: var(--navy, #071b35);
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition: border-color 0.15s, background 0.15s, color 0.15s, box-shadow 0.15s;
        }

        .buyer-type-pill:hover {
          border-color: var(--gold, #d7a44a);
          background: #fffbf0;
        }

        .buyer-type-option input[type="radio"]:checked + .buyer-type-pill {
          border-color: var(--navy, #071b35);
          background: var(--navy, #071b35);
          color: #fff;
          box-shadow: 0 4px 14px rgba(7, 27, 53, 0.22);
        }

        /* ── Responsibility Checkbox ── */
        .responsibility-check {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #f0f7ff;
          border: 1.5px solid #cfe5ff;
          border-radius: 14px;
          padding: 16px 18px;
          cursor: pointer;
          line-height: 1.6;
          font-size: 14px;
          color: #1a3251;
          font-weight: 700;
          transition: background 0.15s, border-color 0.15s;
        }

        .responsibility-check:hover {
          background: #e6f2ff;
          border-color: #9dc9f7;
        }

        .responsibility-check input[type="checkbox"] {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          accent-color: var(--navy, #071b35);
          cursor: pointer;
        }

        /* ── Privacy Notice ── */
        .privacy-notice {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: #f8fdf4;
          border: 1.5px solid #bbf0c4;
          border-radius: 14px;
          padding: 14px 16px;
          font-size: 13px;
          color: #1a4228;
          line-height: 1.65;
          font-weight: 600;
        }

        .privacy-icon {
          flex-shrink: 0;
          font-size: 16px;
          margin-top: 1px;
        }

        .privacy-link {
          color: var(--navy, #071b35);
          font-weight: 800;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .privacy-link:hover {
          color: var(--gold, #d7a44a);
        }

        /* ── Textarea field tweak ── */
        .field textarea {
          resize: vertical;
          min-height: 100px;
        }
      `}</style>
    </PageLayout>
  );
}
