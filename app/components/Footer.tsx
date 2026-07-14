import Image from "next/image";
import Link from "next/link";
import { SocialIconButtons } from "./SocialIcons";
import FloatingContact from "./FloatingContact";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* ── Main grid ── */}
        <div className="footer-inner">

          {/* Col 1 — Brand */}
          <div className="footer-brand">
            <Image
              src="/images/logo.png"
              alt="Jasmine Global Export logo"
              width={180}
              height={56}
              style={{ objectFit: "contain", maxHeight: 56 }}
            />
            <p style={{ marginTop: 14 }}>
              Your trusted partner for Toyota Hilux export sourcing and shipment coordination from the Philippines. We arrange export supply and shipment coordination to the agreed destination port only. Destination customs clearance, taxes, registration and local compliance are handled by the buyer.
            </p>
            <div className="footer-brand-badges">
              <span className="footer-badge">🇵🇭 Export Procedure</span>
              <span className="footer-badge">🚢 Global Shipping</span>
              <span className="footer-badge">✅ Verified Exporter</span>
            </div>
            <div className="footer-socials">
              <SocialIconButtons />
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <nav className="footer-nav-links">
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/specs">Hilux Specs &amp; Variants</Link>
              <Link href="/procedure">Export Procedure</Link>
              <Link href="/shipping">Shipping Options</Link>
              <Link href="/other-makes">Other Makes &amp; Models</Link>
              <Link href="/trust">Buyer Trust &amp; Payment Safety</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/quote">Request a Quote</Link>
            </nav>
          </div>

          {/* Col 3 — Offices */}
          <div className="footer-col">
            <h3 className="footer-col-title">
              Our Offices
            </h3>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">🇸🇬</span>
              <div>
                <strong style={{ color: "#c2d5e8", fontSize: 12, fontWeight: 800, display: "block", marginBottom: 3 }}>Singapore HQ</strong>
                390 Victoria Street, Golden Landmark Shopping Complex,
                #03-20, Singapore 188061
              </div>
            </div>
            <div className="footer-contact-item" style={{ marginTop: 16 }}>
              <span className="footer-contact-icon">🇵🇭</span>
              <div>
                <strong style={{ color: "#c2d5e8", fontSize: 12, fontWeight: 800, display: "block", marginBottom: 3 }}>Philippines Operations</strong>
                Regus RM 401, 4th Floor, The Aurora Suites &amp; Pavilion,
                Canal Road cor. Labitan St., Central Business District,
                Subic Bay 2222, Freeport Zone, Zambales
              </div>
            </div>
          </div>

          {/* Col 4 — Contact & Scope */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contact &amp; Support</h3>

            <div className="footer-languages-list">
              <span className="footer-lang-pill" style={{ fontWeight: 700, color: "#c2d5e8" }}>Languages / Buyer Support:</span>
              <span className="footer-lang-pill">English &ndash; Arabic &ndash; Spanish &ndash; Italian &ndash; Portuguese</span>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉</span>
              <a href="mailto:admin@jasmineglobalexport.com">
                admin@jasmineglobalexport.com
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">🌐</span>
              <a href="https://www.jasmineglobalexport.com/" target="_blank" rel="noopener noreferrer">
                www.jasmineglobalexport.com
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">💬</span>
              <a href="https://wa.me/6589874467" target="_blank" rel="noopener noreferrer">
                WhatsApp (English)
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">💬</span>
              <a href="https://wa.me/6581139145" target="_blank" rel="noopener noreferrer">
                WhatsApp (عربي)
              </a>
            </div>

            <div className="footer-scope-box">
              <p>Scope of Service</p>
              <ul>
                <li>Export supply only</li>
                <li>No destination customs clearance</li>
                <li>No destination registration</li>
                <li>Buyer handles local compliance</li>
                <li>Quote subject to live stock &amp; verification</li>
              </ul>
            </div>
          </div>

        </div>{/* end footer-inner */}

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jasmine Global Process Solutions OPC. All rights reserved. Jasmine Global HI-Lux Export is a trading/export brand.</p>
          <div className="footer-bottom-links">
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/quote">Get a Quote</Link>
          </div>
        </div>

      </div>

      {/* Floating Buttons — Handled by Client Component */}
      <FloatingContact />
    </footer>
  );
}
