import Image from "next/image";
import Link from "next/link";
import { SocialIconButtons, SocialPillLinks } from "./SocialIcons";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src="/images/logo.png"
            alt="Jasmine Global logo"
            width={180}
            height={56}
            style={{ objectFit: "contain", maxHeight: 64, marginBottom: 16 }}
          />
          <p>Your trusted partner for Toyota Hilux exports from the Philippines to the world.</p>
        </div>

        <div className="footer-col">
          <h3>Singapore Office <span>(Main HQ)</span></h3>
          <p>390 Victoria Street, Golden Landmark Shopping Complex,<br />#03-20, Singapore 188061</p>
          
          <h3 style={{ marginTop: 32 }}>Quick Links</h3>
          <div className="contact-list" style={{ gap: 4 }}>
            <Link href="/source" style={{ fontSize: 13, color: "var(--muted)" }}>Philippines Source</Link>
            <Link href="/specs" style={{ fontSize: 13, color: "var(--muted)" }}>Hilux Specs</Link>
            <Link href="/shipping" style={{ fontSize: 13, color: "var(--muted)" }}>Shipping</Link>
            <Link href="/testimonials" style={{ fontSize: 13, color: "var(--muted)" }}>Testimonials</Link>
          </div>
        </div>

        <div className="footer-col">
          <h3>Philippines Office <span>(Operation HQ)</span></h3>
          <p>
            Regus RM 401, 4th Floor, The Aurora Suites &amp; Pavilion,<br />
            Canal Road cor. Labitan St., Central Business District,<br />
            Subic Bay 2222, Freeport Zone, Zambales, Philippines
          </p>
        </div>

        <div className="footer-col">
          <h3>Stay Connected</h3>
          <div className="contact-list">
            <a href="mailto:admin@jasmineglobalexport.com">✉ admin@jasmineglobalexport.com</a>
            <a href="https://www.jasmineglobalexport.com/">🌐 www.jasmineglobalexport.com</a>
          </div>
          <div className="socials" style={{ marginTop: 24 }}>
            <SocialIconButtons />
          </div>
        </div>
      </div>
      
      <a
        href="https://wa.me/6589874467"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="floating-wa-btn"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          zIndex: 1000,
          textDecoration: "none"
        }}
      >
        <FaWhatsapp size={32} />
      </a>
    </footer>
  );
}
