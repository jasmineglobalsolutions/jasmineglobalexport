import Image from "next/image";
import Link from "next/link";
import { SocialIconButtons, SocialPillLinks } from "./SocialIcons";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <div className="footer-brand">
            <Image
              src="/images/logo.png"
              alt="Jasmine Global HI-Lux Export"
              width={180}
              height={56}
              style={{ objectFit: "contain", maxHeight: 64 }}
            />
          </div>
          <p>
            Specialised in Toyota Hilux exports from the Philippines. We source,
            verify, purchase, lash and ship Hilux units worldwide by container or
            RoRo, with destination-country delivery only.
          </p>
          <p className="smallnote">
            <b>Singapore Office (Main HQ):</b> 390 Victoria Street, Golden
            Landmark Shopping Complex, #03-20, Singapore 188061
            <br />
            <b>Philippines Office (Operation HQ):</b> Regus RM 401, 4th Floor,
            The Aurora Suites &amp; Pavilion, Canal Road cor. Labitan St., Central
            Business District, Subic Bay 2222, Freeport Zone, Zambales, Philippines
          </p>

          {/* Social Media Icons (Client Component) */}
          <div style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "12px" }}>
              Follow Us
            </p>
            <SocialIconButtons />
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" }}>
            <a
              href="https://wa.me/6589874467"
              target="_blank"
              rel="noopener noreferrer"
              className="btn wa"
              style={{ fontSize: "13px", padding: "10px 16px" }}
            >
              WhatsApp • English
            </a>
            <a
              href="https://wa.me/6581139145"
              target="_blank"
              rel="noopener noreferrer"
              className="btn wa"
              style={{ fontSize: "13px", padding: "10px 16px" }}
            >
              WhatsApp • عربي
            </a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link href="/source">Philippines Source</Link>
          <Link href="/trust">Trust &amp; Process</Link>
          <Link href="/specs">Hilux Specs</Link>
          <Link href="/shipping">Shipping</Link>
          <Link href="/vehicle-carrier">Vehicle Carrier Transfer</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/quote">Request a Quote</Link>
        </div>

        <div id="terms">
          <h3>Export Scope &amp; Legal</h3>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
            We supply and ship Toyota Hilux units to the destination country or port only.
          </p>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <a href="#">Export supply only</a>
          <a href="#">No destination customs clearance</a>
          <a href="#">No destination registration</a>
          <a href="#">Buyer handles local compliance</a>
          <a href="#">Quote subject to live stock &amp; verification</a>

          {/* Social pill links (Client Component) */}
          <div style={{ marginTop: "24px" }}>
            <p style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "10px" }}>
              Connect With Us
            </p>
            <SocialPillLinks />
          </div>

          <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "24px" }}>
            © {new Date().getFullYear()} Jasmine Global HI-Lux Export. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
