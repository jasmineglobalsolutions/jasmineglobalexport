import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Toyota Hilux Shipping — Container & RoRo Export Options",
  description:
    "Export your Toyota Hilux by container or RoRo shipping. Jasmine Global coordinates 40FT container loading with lashing, or RoRo port-to-port service. Destination-country delivery only.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <PageLayout>
      <section className="section-title" aria-label="Shipping options intro">
        <div className="wrap">
          <span className="variant-note-pill">Shipping Methods</span>
          <h1 style={{ marginTop: 12 }}>Container or RoRo — Choose Your Hilux Shipping Method</h1>
          <p>
            We support two export shipping modes for the Toyota Hilux: container shipping (secured loading inside a 40FT container) and RoRo shipping (drive-on/drive-off vessel service). The right method depends on your destination, route availability and buyer preference.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="grid-2">
            {/* Container */}
            <article className="shipping-card">
              <div className="shipping-head">
                <h2>Container Shipping</h2>
                <span className="tag gold">Up to 2 Hilux in 1 × 40FT Container</span>
              </div>
              <div className="diagram photo-diagram" style={{ borderRadius: 12, overflow: "hidden" }}>
                <Image
                  src="/images/hilux-container.jpg"
                  alt="Toyota Hilux container shipping — 40FT container loading at port"
                  width={640}
                  height={360}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
              <div className="clear-wording" style={{ marginTop: 20 }}>
                <h3>40FT Container Shipping</h3>
                <div className="subline">2 Hilux units • secured container loading • export ready</div>
                <p>
                  Suitable when the buyer prefers both Hilux units professionally loaded and secured inside a container. Provides protection during transit and is preferred for longer ocean routes.
                </p>
              </div>
              <ul className="clean">
                <li><strong>Best for:</strong> Multi-unit dealer shipments, longer ocean routes, buyers who need extra protection.</li>
                <li><strong>Loading method:</strong> Professionally lashed and tie-down secured inside a 40FT container.</li>
                <li><strong>Capacity:</strong> Typically 2 Hilux Double Cab units per 40FT container (subject to actual dimensions).</li>
                <li><strong>Documents:</strong> Bill of Lading, export invoice, packing list coordinated by us.</li>
                <li><strong>Important:</strong> Final arrangement depends on vehicle dimensions and packing confirmation.</li>
              </ul>
              <a className="btn dark" href="/quote" style={{ display: "inline-flex", marginTop: 16 }}>
                Request Container Quote
              </a>
            </article>

            {/* RoRo */}
            <article className="shipping-card">
              <div className="shipping-head">
                <h2>RoRo Shipping</h2>
                <span className="tag gold">Drive-On / Drive-Off Vessel</span>
              </div>
              <div className="diagram photo-diagram" style={{ borderRadius: 12, overflow: "hidden" }}>
                <Image
                  src="/images/hilux-roro.jpg"
                  alt="Toyota Hilux RoRo shipping — vehicles on RoRo vessel deck"
                  width={640}
                  height={360}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
              <div className="clear-wording" style={{ marginTop: 20 }}>
                <h3>RoRo Shipping</h3>
                <div className="subline">Driveable Hilux • port handover • vessel loading</div>
                <p>
                  Suitable when the Hilux is driveable and the destination port is served by RoRo routes. Often simpler and faster for single-unit movements.
                </p>
              </div>
              <ul className="clean">
                <li><strong>Best for:</strong> Single units, simple port-to-port movement, route-dependent destinations.</li>
                <li><strong>Loading method:</strong> The vehicle is driven onto the RoRo vessel under its own power.</li>
                <li><strong>Route:</strong> Available on RoRo routes only — confirm destination route availability.</li>
                <li><strong>Documents:</strong> Bill of Lading and export documentation coordinated by us.</li>
                <li><strong>Important:</strong> Destination customs, taxes and registration are buyer responsibilities.</li>
              </ul>
              <a className="btn dark" href="/quote" style={{ display: "inline-flex", marginTop: 16 }}>
                Request RoRo Quote
              </a>
            </article>
          </div>

          <div className="method-note" style={{ marginTop: 40 }}>
            <strong>Which method is right for your shipment?</strong> Container shipping gives more controlled loading, lashing and protection for longer routes. RoRo is simpler when the Hilux is driveable and the route has RoRo vessel availability. Contact us — we will advise based on your destination and quantity.
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a className="btn outline" href="/faq">Read Shipping FAQs</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
