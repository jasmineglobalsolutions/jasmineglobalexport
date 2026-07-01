import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Request a Toyota Hilux Export Quote | Jasmine Global",
  description:
    "Request an export quote for a Philippines-spec Toyota Hilux. We supply the 2.8 GR-S, 2.8 Conquest, 2.4 G, and 2.4 E variants. Container & RoRo shipping options available.",
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
            Select a Toyota Hilux variant or request another make and model. We supply Philippines-spec vehicles globally. Please note that destination customs clearance and local registration are not included.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="quote-box">
            <div className="quote-grid">
              <label className="field"><span>👤</span><input placeholder="Full Name" type="text" name="name" /></label>
              <label className="field"><span>🏢</span><input placeholder="Company Name" type="text" name="company" /></label>
              <label className="field"><span>✉️</span><input placeholder="Email Address" type="email" name="email" /></label>
              <label className="field"><span>📱</span><input placeholder="WhatsApp / Mobile Number" type="text" name="phone" /></label>
              <label className="field"><span>🌍</span><input placeholder="Buyer Country" type="text" name="country" /></label>
              <label className="field"><span>⚓</span><input placeholder="Destination Port / City" type="text" name="port" /></label>
              
              <label className="field">
                <span>🚙</span>
                <select name="vehicle_request">
                  <option value="">Select Hilux variant or request another model</option>
                  <option value="2.8 GR-S 4x4 A/T">2.8 GR-S 4x4 A/T</option>
                  <option value="2.8 CONQUEST 4x4 A/T">2.8 CONQUEST 4x4 A/T</option>
                  <option value="2.4 G 4x4 MT">2.4 G 4x4 MT</option>
                  <option value="2.4 J 4x2 MT">2.4 J 4x2 MT</option>
                  <option value="2.4 E 4x2 MT">2.4 E 4x2 MT</option>
                  <option value="Other Make/Model">Other Make &amp; Model (Specify Below)</option>
                </select>
              </label>

              <label className="field">
                <span>🚢</span>
                <select name="shipping_method">
                  <option value="">Preferred shipping method</option>
                  <option value="RoRo Shipping">RoRo Shipping</option>
                  <option value="Container Shipping">Container Shipping (40FT)</option>
                  <option value="Not Sure / Please Advise">Not Sure / Please Advise</option>
                </select>
              </label>

              <label className="field"><span>🔢</span><input min="1" placeholder="Quantity Needed" type="number" name="quantity" /></label>
              <label className="field">
                <span>💰</span>
                <select name="budget">
                  <option value="">Budget range per unit</option>
                  <option value="Below USD 20,000">Below USD 20,000</option>
                  <option value="USD 20,000 - 30,000">USD 20,000 - 30,000</option>
                  <option value="USD 30,000 - 40,000">USD 30,000 - 40,000</option>
                  <option value="Above USD 40,000">Above USD 40,000</option>
                </select>
              </label>

              <label className="field full">
                <span>📝</span>
                <textarea placeholder="Tell us your requirement (e.g., preferred colour, specific features, LHD request...)" rows={6} name="message"></textarea>
              </label>

              <div className="form-helper">
                <b>Hilux variants:</b> choose the exact Hilux variant above. If you select &quot;Other Make &amp; Model&quot;, please provide details in the message box.
              </div>

              <div className="full notice" style={{ background: "var(--navy)", color: "#fff", padding: "16px", borderRadius: "8px", marginTop: "16px" }}>
                <strong>Important:</strong> We deliver to the destination country or port only. Destination customs clearance, import duties, taxes, registration and local compliance are entirely the buyer&apos;s responsibility.
              </div>

              <div className="full" style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "flex-start", marginTop: "24px" }}>
                <button className="btn dark" type="button">Submit Enquiry</button>
                <a className="btn wa" href="https://wa.me/6589874467" target="_blank" rel="noopener noreferrer">WhatsApp • English</a>
                <a className="btn wa" href="https://wa.me/6581139145" target="_blank" rel="noopener noreferrer">WhatsApp • عربي</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
