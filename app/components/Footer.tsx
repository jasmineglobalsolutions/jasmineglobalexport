import Image from "next/image";
import Link from "next/link";
import { SocialIconButtons } from "./SocialIcons";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

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
              Your trusted partner for Toyota Hilux exports from the Philippines to the world.
              Serving 30+ countries with transparent, door-to-port service.
            </p>
            <div className="footer-brand-badges">
              <span className="footer-badge">🇵🇭 Philippines Source</span>
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
              <Link href="/specs">Hilux Specs &amp; Variants</Link>
              <Link href="/source">Philippines Source</Link>
              <Link href="/shipping">Shipping Options</Link>
              <Link href="/other-makes">Other Makes &amp; Models</Link>
              <Link href="/testimonials">Testimonials</Link>
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
              {["English", "العربية", "Español", "Italiano", "Português"].map((lang) => (
                <span key={lang} className="footer-lang-pill">{lang}</span>
              ))}
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
          <p>© {new Date().getFullYear()} Jasmine Global Export Pte. Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/quote">Get a Quote</Link>
          </div>
        </div>

      </div>

      {/* ── Floating action buttons (bottom-left stack) ── */}
      <div style={{
        position: "fixed",
        bottom: "24px",
        left: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 1000,
        alignItems: "flex-start",
      }}>

        {/* WhatsApp — English */}
        <a
          href="https://wa.me/6589874467"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us in English"
          className="float-fab float-fab-wa"
        >
          <span className="float-fab-icon"><FaWhatsapp size={20} /></span>
          <span className="float-fab-label">WhatsApp • English</span>
        </a>

        {/* WhatsApp — Arabic */}
        <a
          href="https://wa.me/6581139145"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us in Arabic"
          className="float-fab float-fab-wa"
        >
          <span className="float-fab-icon"><FaWhatsapp size={20} /></span>
          <span className="float-fab-label">واتساب • عربي</span>
        </a>

        {/* Email */}
        <a
          href="mailto:admin@jasmineglobalexport.com"
          aria-label="Email us"
          className="float-fab float-fab-email"
        >
          <span className="float-fab-icon"><FaEnvelope size={18} /></span>
          <span className="float-fab-label">Email Us</span>
        </a>

      </div>

      <style>{`
        .float-fab {
          display: inline-flex;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.02em;
          white-space: nowrap;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(0,0,0,0.28);
          transition: width 0.25s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.2s ease,
                      transform 0.2s ease;
          cursor: pointer;
        }
        .float-fab:hover {
          width: 190px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.36);
          transform: translateY(-1px);
        }
        .float-fab-wa  { background: #25D366; color: #fff; }
        .float-fab-email { background: #071b35; color: #fff; }

        .float-fab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 50px;
          height: 50px;
        }
        .float-fab-label {
          flex-shrink: 0;
          padding-right: 16px;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.2s ease 0.08s, transform 0.2s ease 0.08s;
          pointer-events: none;
        }
        .float-fab:hover .float-fab-label {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </footer>
  );
}
