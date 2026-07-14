import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Request a Vehicle Export Quote | Jasmine Global Export",
  description:
    "Request an export quote for a Philippines-spec Toyota Hilux or other vehicle. We supply the 2.8 GR-S, 2.8 Conquest, 2.4 G, and 2.4 E variants. Container & RoRo shipping options available.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <PageLayout>
      <section className="section-title" aria-label="Quote request intro">
        <div className="wrap">
          <span className="variant-note-pill">Export Enquiry</span>
          <h1 style={{ marginTop: 12 }}>Request a Vehicle Export Quote</h1>
          <p>
            Fill in the form below to request an export quote. We supply Philippines-spec Toyota Hilux vehicles globally, and can also source other makes and models. Please note that destination customs clearance and local registration are not included.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="quote-box">
            <div className="quote-grid">

              {/* ── SECTION: Contact Details ── */}
              <div className="full quote-section-label">
                <span>👤</span> Contact Details
              </div>

              <label className="field">
                <span>👤</span>
                <input placeholder="Full Name *" type="text" name="name" required />
              </label>

              <label className="field">
                <span>🏢</span>
                <input placeholder="Company Name *" type="text" name="company" required />
              </label>

              <label className="field">
                <span>✉️</span>
                <input placeholder="Email Address *" type="email" name="email" required />
              </label>

              <label className="field">
                <span>📱</span>
                <input placeholder="WhatsApp Number (with country code) *" type="tel" name="whatsapp" required />
              </label>

              <label className="field">
                <span>🌍</span>
                <input placeholder="Country *" type="text" name="country" required />
              </label>

              <label className="field">
                <span>⚓</span>
                <input placeholder="Destination Port / City *" type="text" name="port" required />
              </label>

              {/* ── SECTION: Buyer Profile ── */}
              <div className="full quote-section-label">
                <span>🏷️</span> Buyer Profile
              </div>

              <div className="full">
                <div className="buyer-type-label">Buyer Type *</div>
                <div className="buyer-type-grid">
                  <label className="buyer-type-option">
                    <input type="radio" name="buyer_type" value="Dealer" />
                    <span className="buyer-type-pill">🏪 Dealer</span>
                  </label>
                  <label className="buyer-type-option">
                    <input type="radio" name="buyer_type" value="End User" />
                    <span className="buyer-type-pill">👤 End User</span>
                  </label>
                  <label className="buyer-type-option">
                    <input type="radio" name="buyer_type" value="Company" />
                    <span className="buyer-type-pill">🏢 Company</span>
                  </label>
                  <label className="buyer-type-option">
                    <input type="radio" name="buyer_type" value="Broker" />
                    <span className="buyer-type-pill">🤝 Broker</span>
                  </label>
                  <label className="buyer-type-option">
                    <input type="radio" name="buyer_type" value="Fleet Buyer" />
                    <span className="buyer-type-pill">🚛 Fleet Buyer</span>
                  </label>
                </div>
              </div>

              {/* ── SECTION: Vehicle Requirements ── */}
              <div className="full quote-section-label">
                <span>🚙</span> Vehicle Requirements
              </div>

              <label className="field">
                <span>🚙</span>
                <select name="hilux_variant">
                  <option value="">Preferred Hilux Variant</option>
                  <option value="2.8 GR-S 4x4 A/T">2.8 GR-S 4×4 A/T</option>
                  <option value="2.8 Conquest 4x4 A/T">2.8 Conquest 4×4 A/T</option>
                  <option value="2.8 Conquest 4x4 M/T">2.8 Conquest 4×4 M/T</option>
                  <option value="2.4 Conquest 4x2 A/T">2.4 Conquest 4×2 A/T</option>
                  <option value="2.4 G 4x2 A/T">2.4 G 4×2 A/T</option>
                  <option value="2.4 G 4x2 M/T">2.4 G 4×2 M/T</option>
                  <option value="2.4 E 4x2 A/T">2.4 E 4×2 A/T</option>
                  <option value="2.4 E 4x2 M/T">2.4 E 4×2 M/T</option>
                  <option value="Not Sure / Please Advise">Not Sure / Please Advise</option>
                </select>
              </label>

              <label className="field">
                <span>🎨</span>
                <select name="preferred_colour">
                  <option value="">Preferred Colour</option>
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
              </label>

              <label className="field">
                <span>🚢</span>
                <select name="shipping_method">
                  <option value="">Preferred Shipping Method</option>
                  <option value="RoRo Shipping">RoRo Shipping</option>
                  <option value="Container Shipping (40FT)">Container Shipping (40FT)</option>
                  <option value="Not Sure / Please Advise">Not Sure / Please Advise</option>
                </select>
              </label>

              <label className="field">
                <span>📅</span>
                <select name="timeline">
                  <option value="">Estimated Timeline / Urgency</option>
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="3–6 months">3–6 months</option>
                  <option value="6+ months / planning stage">6+ months / planning stage</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </label>

              <label className="field">
                <span>🔢</span>
                <input min="1" placeholder="Quantity Required *" type="number" name="quantity" required />
              </label>

              {/* ── Other Make & Model Request ── */}
              <div className="full quote-section-label" style={{ marginTop: 4 }}>
                <span>🔍</span> Other Make &amp; Model Request <span style={{ fontWeight: 600, fontSize: 13, color: '#728196' }}>(optional — if not requesting a Hilux)</span>
              </div>

              <label className="field">
                <span>🚗</span>
                <input placeholder="Other Make (e.g. Mitsubishi, Ford, Isuzu…)" type="text" name="other_make" />
              </label>

              <label className="field">
                <span>📋</span>
                <input placeholder="Other Model (e.g. Strada, Ranger, D-Max…)" type="text" name="other_model" />
              </label>

              {/* ── Message Box ── */}
              <div className="full quote-section-label">
                <span>📝</span> Message / Additional Requirements
              </div>

              <label className="field full" style={{ borderRadius: 18 }}>
                <span style={{ alignSelf: 'flex-start', marginTop: 2 }}>💬</span>
                <textarea
                  placeholder="Tell us anything else — specific features, LHD/RHD requirement, urgency, fleet details, or any questions you have for us…"
                  rows={5}
                  name="message"
                ></textarea>
              </label>

              {/* ── Responsibility Checkbox ── */}
              <div className="full">
                <label className="responsibility-check">
                  <input type="checkbox" name="responsibility_agreed" required id="responsibility_agreed" />
                  <span>
                    I understand that destination customs clearance, import duties, taxes, registration, homologation and local compliance are the buyer&apos;s responsibility. Jasmine Global Export delivers to the agreed destination port only.
                  </span>
                </label>
              </div>

              {/* ── Submit Buttons ── */}
              <div className="full" style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "flex-start", marginTop: "8px" }}>
                <button className="btn dark" type="button" id="submit-enquiry-btn">Submit Enquiry</button>
                <a className="btn wa" href="https://wa.me/6589874467" target="_blank" rel="noopener noreferrer">WhatsApp • English</a>
                <a className="btn wa" href="https://wa.me/6581139145" target="_blank" rel="noopener noreferrer">WhatsApp • عربي</a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Inline styles scoped to quote page */}
      <style>{`
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

        /* Buyer Type Radio Pills */
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

        /* Responsibility Checkbox */
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

        /* Textarea field tweak */
        .field textarea {
          resize: vertical;
          min-height: 100px;
        }
      `}</style>
    </PageLayout>
  );
}
