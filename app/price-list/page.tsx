import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import "./price-list.css";

export const metadata: Metadata = {
  title: "2026 Vehicle Catalogues & Price List | Jasmine Global Export",
  description:
    "Download Jasmine Global vehicle catalogues by brand, browse available models, and review the verified 8-step purchase journey and payment schedule.",
  alternates: {
    canonical: "/price-list",
  },
};

interface BrandItem {
  name: string;
  pdf: string;
}

const BRANDS: BrandItem[] = [
  { name: "Toyota", pdf: "Jasmine_Global_Toyota_Catalogue.pdf" },
  { name: "Mitsubishi", pdf: "Jasmine_Global_Mitsubishi_Catalogue.pdf" },
  { name: "Honda", pdf: "Jasmine_Global_Honda_Catalogue.pdf" },
  { name: "Ford", pdf: "Jasmine_Global_Ford_Catalogue.pdf" },
  { name: "Isuzu", pdf: "Jasmine_Global_Isuzu_Catalogue.pdf" },
  { name: "Nissan", pdf: "Jasmine_Global_Nissan_Catalogue.pdf" },
  { name: "Hyundai", pdf: "Jasmine_Global_Hyundai_Catalogue.pdf" },
  { name: "Kia", pdf: "Jasmine_Global_Kia_Catalogue.pdf" },
  { name: "Mazda", pdf: "Jasmine_Global_Mazda_Catalogue.pdf" },
  { name: "Suzuki", pdf: "Jasmine_Global_Suzuki_Catalogue.pdf" },
  { name: "Chevrolet", pdf: "Jasmine_Global_Chevrolet_Catalogue.pdf" },
  { name: "Subaru", pdf: "Jasmine_Global_Subaru_Catalogue.pdf" },
  { name: "MG", pdf: "Jasmine_Global_MG_Catalogue.pdf" },
  { name: "BMW", pdf: "Jasmine_Global_BMW_Catalogue.pdf" },
  { name: "Mercedes-Benz", pdf: "Jasmine_Global_Mercedes_Benz_Catalogue.pdf" },
  { name: "Lexus", pdf: "Jasmine_Global_Lexus_Catalogue.pdf" },
  { name: "Fuso", pdf: "Jasmine_Global_Fuso_Catalogue.pdf" },
];

export default function PriceListPage() {
  return (
    <PageLayout>
      <main id="main-content" className="catalogue-page">
        <div className="wrap">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Price List &amp; Catalogues</span>
          </nav>

          <p className="catalogue-eyebrow">Jasmine Global Export</p>
          <h1 className="catalogue-heading">2026 Vehicle Catalogues</h1>
          <p className="catalogue-intro">
            Select a brand to view or download its complete export catalogue and browse available models.
            Below you will also find our verified eight-step purchase journey, milestone schedule and payment terms.
          </p>

          {/* Section: Brand Catalogues */}
          <section id="catalogues" aria-labelledby="brands-title">
            <div className="catalogue-toolbar">
              <h2 id="brands-title">Browse by brand</h2>
              <p className="availability-note" id="availability-note">
                All 17 brand catalogues are ready to view and download.
              </p>
            </div>

            <ul className="brand-grid" aria-describedby="availability-note">
              {BRANDS.map((brand) => (
                <li key={brand.name}>
                  <div className="brand-card">
                    <div className="brand-card-header">
                      <h3 className="brand-card-title">{brand.name}</h3>
                      <span className="brand-card-badge">PDF</span>
                    </div>
                    <div className="brand-card-actions">
                      <a
                        href={`/catalogues/${brand.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brand-action-btn brand-action-view"
                        aria-label={`View ${brand.name} catalogue in new tab`}
                      >
                        View PDF
                      </a>
                      <a
                        href={`/catalogues/${brand.pdf}`}
                        download={brand.pdf}
                        className="brand-action-btn brand-action-download"
                        aria-label={`Download ${brand.name} catalogue`}
                      >
                        Download
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" />
                        </svg>
                      </a>
                      <Link
                        href={`/quote?make=${encodeURIComponent(brand.name)}`}
                        className="brand-action-btn brand-action-quote"
                        aria-label={`Request quote for ${brand.name}`}
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Purchase Journey (Mockup 03 Layout) */}
          <section
            className="purchase-journey-card"
            id="purchase-journey"
            aria-labelledby="purchase-journey-title"
          >
            <p className="purchase-journey-kicker">BELOW THE BRAND CATALOGUES</p>
            <h2 className="purchase-journey-title" id="purchase-journey-title">
              Purchase Journey
            </h2>
            <p className="purchase-journey-subtitle">
              From vehicle selection to destination collection
            </p>

            <div className="purchase-journey-grid">
              <div className="journey-item">
                <div className="journey-badge" aria-hidden="true">1</div>
                <div className="journey-content">
                  <h3>Select your vehicle</h3>
                  <p>Choose make, model, variant, colour, quantity and destination.</p>
                </div>
              </div>

              <div className="journey-item">
                <div className="journey-badge" aria-hidden="true">2</div>
                <div className="journey-content">
                  <h3>Confirm the order details</h3>
                  <p>
                    Confirm availability, lead time, specifications, import eligibility, warranty, compulsory insurance
                    and distributor accessories.
                  </p>
                </div>
              </div>

              <div className="journey-item">
                <div className="journey-badge" aria-hidden="true">3</div>
                <div className="journey-content">
                  <h3>Sign the proforma invoice</h3>
                  <p>
                    Review the itemised PI. Ready stock: pay 30% by TT. Factory order: pay the applicable booking fee
                    through the supplied Stripe link.
                  </p>
                </div>
              </div>

              <div className="journey-item">
                <div className="journey-badge" aria-hidden="true">4</div>
                <div className="journey-content">
                  <h3>Verify warehouse photos</h3>
                  <p>
                    Check the actual unit, VIN/chassis, loading preparation and secured lashing against your order.
                  </p>
                </div>
              </div>

              <div className="journey-item">
                <div className="journey-badge" aria-hidden="true">5</div>
                <div className="journey-content">
                  <h3>Pay the remaining balance</h3>
                  <p>
                    Ready stock: remaining 70%. Factory order: vehicle price less the credited booking fee. Pay
                    shipping/lashing when due.
                  </p>
                </div>
              </div>

              <div className="journey-item">
                <div className="journey-badge" aria-hidden="true">6</div>
                <div className="journey-content">
                  <h3>Submit MT103; funds are confirmed</h3>
                  <p>
                    Provide a bank-issued MT103 for every TT. Jasmine confirms cleared funds before dispatch.
                  </p>
                </div>
              </div>

              <div className="journey-item">
                <div className="journey-badge" aria-hidden="true">7</div>
                <div className="journey-content">
                  <h3>Shipment and documents</h3>
                  <p>
                    Receive shipment updates, commercial invoice, packing list and Bill of Lading at the appropriate
                    stages.
                  </p>
                </div>
              </div>

              <div className="journey-item">
                <div className="journey-badge" aria-hidden="true">8</div>
                <div className="journey-content">
                  <h3>Arrival and local clearance</h3>
                  <p>
                    Your local agent handles destination clearance, duties, taxes, registration and collection.
                  </p>
                </div>
              </div>
            </div>

            <div className="journey-callout-box" style={{ marginTop: 32 }}>
              <strong style={{ display: "block", marginBottom: 6 }}>Confirm before placing the order:</strong>
              Confirm the original manufacturer version, selected specification, colour, stock/order status, lead time,
              destination eligibility and warranty. Confirm any compulsory insurance and distributor-supplied
              accessories and itemise the applicable charges in the proforma invoice.
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(215,164,74,0.25)" }}>
                <strong>Container arrangement standard:</strong> Standard Hilux container arrangement: 2 vehicles in a
                40FT / 40HC container. A 3-vehicle arrangement is a special request and requires an approved loading
                plan. Other vehicles and routes are assessed individually.
              </div>
            </div>
          </section>

          {/* Section: Payment Journey (Mockup 04 Layout) */}
          <section
            className="customer-journey payment-journey"
            id="payment-journey"
            aria-labelledby="payment-journey-title"
          >
            <p className="journey-eyebrow">Below the purchase journey</p>
            <h2 className="journey-heading" id="payment-journey-title">
              Payment Journey
            </h2>
            <p className="journey-intro">
              Confirm your order type before making a payment. Payment instructions are issued after the proforma
              invoice is signed.
            </p>

            <div className="payment-mockup-grid">
              {/* Box 1: Ready stock */}
              <div className="payment-order-card">
                <div>
                  <h3>Ready stock</h3>
                  <p>
                    <strong>30% deposit</strong> on confirmed stock reservation.
                  </p>
                  <p>
                    <strong>Remaining 70%</strong> after actual warehouse photos are received and verified.
                  </p>
                </div>
                <div className="payment-method-pill">
                  Telegraphic transfer only &middot; MT103 required
                </div>
              </div>

              {/* Box 2: Factory / indent order */}
              <div className="payment-order-card">
                <div>
                  <h3>Factory / indent order</h3>
                  <p>
                    <strong>Booking fee</strong> after signing the PI, through the supplied Stripe booking link.
                  </p>

                  <table className="payment-mockup-table">
                    <thead>
                      <tr>
                        <th>Vehicle price per unit</th>
                        <th>Booking fee per unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>USD 40,000 or less</td>
                        <td>USD 2,000</td>
                      </tr>
                      <tr>
                        <td>Above USD 40,000 up to USD 100,000</td>
                        <td>USD 4,000</td>
                      </tr>
                      <tr>
                        <td>Above USD 100,000</td>
                        <td>USD 5,000</td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="payment-fee-note">
                    Non-refundable per vehicle; credited toward the vehicle price.
                  </p>
                  <p>
                    <strong>Balance:</strong> vehicle price less the credited booking fee, after actual warehouse photo
                    verification.
                  </p>
                </div>
                <div className="payment-method-pill">
                  Vehicle balance: TT only &middot; MT103 required
                </div>
              </div>
            </div>

            {/* Shipping & Lashing Banner */}
            <div className="payment-shipping-banner">
              <h4>Shipping &amp; lashing &middot; separate charges &middot; TT only &middot; MT103 required</h4>
              <p>
                <strong>3+ weeks to scheduled destination arrival:</strong> full fee due 3 weeks before vessel arrival.
              </p>
              <p>
                <strong>Less than 3 weeks:</strong> pay in full with the remaining vehicle balance.
              </p>
            </div>

            <p className="payment-dispatch-note">
              Actual unit, loading preparation and secured lashing must be verified. Send a bank-issued MT103 for every
              TT; dispatch follows cleared funds.
            </p>

            {/* Additional verification & instruction details */}
            <div className="payment-requirements">
              <div>
                <h3 className="payment-section-heading">Bank Transfer &amp; Beneficiary Confirmation</h3>
                <p>
                  Use the beneficiary bank details, currency and order/invoice reference stated in the signed PI. Quote
                  the reference and send a bank-issued <strong>MT103 for every telegraphic transfer</strong>.
                </p>
                <p>
                  We confirm payment when funds clear in our account. If your bank cannot provide an MT103,{" "}
                  <strong>contact Jasmine before transferring</strong>. Bank charges follow the written PI terms.
                </p>
              </div>
              <div>
                <h3 className="payment-section-heading">Model Requirements &amp; Separate Freight</h3>
                <p>
                  Some models require <strong>compulsory insurance and distributor-supplied accessories</strong>. Confirm
                  the package and charges before ordering, and ensure these are itemised in the PI.
                </p>
                <p>
                  Shipping and lashing charges are separate from the vehicle price. Confirm revised ETA and payment
                  deadlines if the vessel schedule changes. Destination duties, taxes, clearance, registration and
                  collection are handled by the buyer/local agent.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Help & Quote CTA */}
          <section className="catalogue-help" aria-labelledby="help-title">
            <div>
              <h2 id="help-title">Found a model you like?</h2>
              <p>Tell us the model and quantity, and we will prepare a complete, itemised export and freight quote.</p>
            </div>
            <div className="help-actions">
              <Link className="btn btn-navy" href="/quote">
                Request a quote <span aria-hidden="true">→</span>
              </Link>
              <a
                className="btn btn-outline"
                href="https://wa.me/6589874467"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
