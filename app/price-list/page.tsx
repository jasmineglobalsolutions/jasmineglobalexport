import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import "./price-list.css";

export const metadata: Metadata = {
  title: "2026 Vehicle Catalogues & Price List | Jasmine Global Export",
  description:
    "Download Jasmine Global vehicle catalogues by brand, browse available models, and review the purchase and payment journey.",
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
            Below you will also find our verified purchase steps, milestone schedule and payment terms.
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

          {/* Section: Purchase Journey */}
          <section
            className="customer-journey purchase-journey"
            id="purchase-journey"
            aria-labelledby="purchase-journey-title"
          >
            <p className="journey-eyebrow">Ordering with Jasmine Global</p>
            <h2 className="journey-heading" id="purchase-journey-title">
              Your Purchase Journey
            </h2>
            <p className="journey-intro">
              Your order, from vehicle selection to collection at the destination port.
            </p>
            <ol className="journey-steps">
              <li className="journey-step">
                <span className="journey-number" aria-hidden="true">
                  01
                </span>
                <div className="journey-step-body">
                  <h3>Select &amp; Confirm</h3>
                  <p>
                    Tell us your preferred model, specification and quantity. We confirm availability, lead time and any
                    compulsory insurance or distributor accessories. Confirm destination import eligibility with your local
                    agent and warranty coverage with us.
                  </p>
                </div>
              </li>
              <li className="journey-step">
                <span className="journey-number" aria-hidden="true">
                  02
                </span>
                <div className="journey-step-body">
                  <h3>Shipping Details</h3>
                  <p>
                    Provide your destination seaport. We confirm shipping options and freight costs. Where practical,
                    group <strong>three vehicles per shipment</strong>, subject to the route and loading arrangement.
                  </p>
                </div>
              </li>
              <li className="journey-step">
                <span className="journey-number" aria-hidden="true">
                  03
                </span>
                <div className="journey-step-body">
                  <h3>Proforma Invoice</h3>
                  <p>
                    Review and sign the proforma invoice confirming the vehicle specification, itemised charges, delivery
                    terms, insurance cover, payment instructions and deadlines.
                  </p>
                </div>
              </li>
              <li className="journey-step">
                <span className="journey-number" aria-hidden="true">
                  04
                </span>
                <div className="journey-step-body">
                  <h3>Secure Your Order</h3>
                  <p>
                    Complete the initial payment for your order type. We then reserve the available stock or place your
                    factory order. See the <a href="#payment-journey">payment journey below</a>.
                  </p>
                </div>
              </li>
              <li className="journey-step">
                <span className="journey-number" aria-hidden="true">
                  05
                </span>
                <div className="journey-step-body">
                  <h3>Warehouse Verification</h3>
                  <p>
                    Verify <strong>actual warehouse photos</strong> showing your vehicle, loading preparation and secured
                    lashing. Match the VIN/chassis number to your order documents.
                  </p>
                </div>
              </li>
              <li className="journey-step">
                <span className="journey-number" aria-hidden="true">
                  06
                </span>
                <div className="journey-step-body">
                  <h3>Balance &amp; Shipment Schedule</h3>
                  <p>
                    After photo verification, settle the remaining vehicle balance. Confirm the shipment schedule and pay
                    shipping and lashing charges according to the arrival timeline below.
                  </p>
                </div>
              </li>
              <li className="journey-step">
                <span className="journey-number" aria-hidden="true">
                  07
                </span>
                <div className="journey-step-body">
                  <h3>Vessel Departure &amp; Documents</h3>
                  <p>
                    After the required payments clear, we dispatch your vehicle on the confirmed vessel and provide the
                    commercial invoice, packing list and Bill of Lading.
                  </p>
                </div>
              </li>
              <li className="journey-step">
                <span className="journey-number" aria-hidden="true">
                  08
                </span>
                <div className="journey-step-body">
                  <h3>Arrival &amp; Collection</h3>
                  <p>
                    Your local agent coordinates customs clearance, destination duties and taxes, registration and vehicle
                    collection.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Section: Payment Journey */}
          <section
            className="customer-journey payment-journey"
            id="payment-journey"
            aria-labelledby="payment-journey-title"
          >
            <p className="journey-eyebrow">Payments with Jasmine Global</p>
            <h2 className="journey-heading" id="payment-journey-title">
              Your Payment Journey
            </h2>
            <p className="journey-intro">
              <strong>Factory-order booking fees: Stripe.</strong> The 30% deposit, vehicle balance and shipping/lashing
              charges require <strong>telegraphic transfer with MT103</strong>.
            </p>

            <div className="payment-top-layout">
              {/* Factory-Order Booking Fee */}
              <div className="booking-fee-block">
                <h3 className="payment-section-heading">Factory-Order Booking Fee</h3>
                <p className="payment-caption">Non-refundable, per vehicle. Credited toward the vehicle price.</p>
                <table className="journey-table booking-fee-table">
                  <caption className="journey-sr-only">
                    Factory-order booking fee per vehicle by vehicle price
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Vehicle price</th>
                      <th scope="col">Booking fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">USD 40,000 or less</th>
                      <td>USD 2,000</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Over USD 40,000
                        <br />
                        up to USD 100,000
                      </th>
                      <td>USD 4,000</td>
                    </tr>
                    <tr>
                      <th scope="row">Over USD 100,000</th>
                      <td>USD 5,000</td>
                    </tr>
                  </tbody>
                </table>
                <p className="booking-payment-note">
                  <strong>Pay through Stripe</strong> using the booking payment link we provide.
                </p>
              </div>

              {/* Vehicle Payment Milestones */}
              <div className="payment-milestones-block">
                <h3 className="payment-section-heading">Vehicle Payment Milestones</h3>
                <div className="payment-paths">
                  <div className="payment-path">
                    <h4>Ready Stock</h4>
                    <ol>
                      <li>
                        <h5>30% Deposit</h5>
                        <p>Pay 30% of the vehicle price when we confirm your stock reservation.</p>
                        <p className="payment-method">
                          Telegraphic transfer only
                          <br />
                          <strong>MT103 required</strong>
                        </p>
                      </li>
                      <li>
                        <h5>Remaining 70%</h5>
                        <p>Due after you receive and verify the warehouse photos.</p>
                        <p className="payment-method">
                          Telegraphic transfer only
                          <br />
                          <strong>MT103 required</strong>
                        </p>
                      </li>
                    </ol>
                  </div>
                  <div className="payment-path">
                    <h4>Factory Order / Indent</h4>
                    <ol>
                      <li>
                        <h5>Booking Fee</h5>
                        <p>Due per vehicle when you place your order.</p>
                        <p className="payment-method">
                          <strong>Pay through Stripe</strong>
                        </p>
                      </li>
                      <li>
                        <h5>Remaining Vehicle Balance</h5>
                        <p>Due after photo verification. We deduct the booking fee from the vehicle price.</p>
                        <p className="payment-method">
                          Telegraphic transfer only
                          <br />
                          <strong>MT103 required</strong>
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <p className="warehouse-payment-note">
              <strong>Before paying the vehicle balance:</strong> verify actual warehouse photos showing your unit,
              loading preparation and secured lashing.
            </p>

            {/* Shipping & Lashing Charges */}
            <div className="shipping-payment-block">
              <h3 className="payment-section-heading">Shipping &amp; Lashing Charges</h3>
              <p className="payment-caption">
                Charged separately from the vehicle price. Full payment by telegraphic transfer only; MT103 required.
                Deadlines follow the scheduled vessel arrival at your destination port.
              </p>
              <table className="journey-table shipping-fee-table">
                <caption className="journey-sr-only">
                  Shipping and lashing payment deadline based on time until destination arrival
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Time until destination arrival</th>
                    <th scope="col">When to pay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">At least 3 weeks</th>
                    <td>
                      Pay the full shipping and lashing fee <strong>3 weeks before vessel arrival</strong> at the destination
                      port.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Less than 3 weeks</th>
                    <td>
                      Pay the full shipping and lashing fee{" "}
                      <strong>together with the remaining vehicle balance</strong>.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="payment-caption shipping-schedule-note">
                Vessel schedules and arrival dates can change. We will confirm any revised payment deadline with you.
              </p>
            </div>

            {/* Payment Requirements Grid */}
            <div className="payment-requirements">
              <div>
                <h3 className="payment-section-heading">Bank Transfer Confirmation</h3>
                <p>
                  Use the beneficiary bank details and currency in your proforma invoice. Quote the invoice/order reference
                  and send a bank-issued <strong>MT103 for every telegraphic transfer</strong>.
                </p>
                <p>
                  We confirm payment when funds clear in our account. If your bank cannot issue an MT103,{" "}
                  <strong>contact us before transferring</strong>.
                </p>
              </div>
              <div>
                <h3 className="payment-section-heading">Model Requirements &amp; Insurance</h3>
                <p>
                  Some models require <strong>compulsory insurance and distributor-supplied accessories</strong>. Confirm
                  the package and charges before ordering. Any shipping insurance cover must also be agreed and identified
                  in your quotation.
                </p>
              </div>
              <div>
                <h3 className="payment-section-heading">Invoice &amp; Charges</h3>
                <p>
                  Your proforma invoice confirms the vehicle price, booking fee credit, freight/lashing charges and payment
                  deadlines. Confirm responsibility for any bank or processing fees before paying. Request any order
                  amendments in writing.
                </p>
              </div>
              <div>
                <h3 className="payment-section-heading">Destination Responsibilities</h3>
                <p>
                  The buyer and local agent arrange import approvals, customs clearance, local duties and taxes,
                  registration and collection. Confirm destination requirements before committing to your order.
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
