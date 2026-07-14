import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/procedure", label: "Export Procedure" },
  { href: "/specs", label: "Hilux Specs" },
  { href: "/shipping", label: "Shipping" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms" },
];

export default function Nav() {
  return (
    <header>
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label="Jasmine Global HI-Lux Export Home">
          <Image
            src="/images/logo.png"
            alt="Jasmine Global logo"
            width={120}
            height={44}
            className="logo"
            priority
            style={{ objectFit: "contain", maxHeight: 48 }}
          />
          <div style={{ marginLeft: "6px" }}>
            <h2 style={{ fontSize: "14px", whiteSpace: "nowrap", margin: 0, fontWeight: 900 }}>HI-LUX EXPORT</h2>
          </div>
        </Link>

        {/* Mobile hamburger — pure CSS toggle */}
        <input type="checkbox" id="nav-toggle" aria-label="Open navigation menu" />
        <label htmlFor="nav-toggle" className="nav-hamburger" aria-hidden="true">
          <span />
          <span />
          <span />
        </label>

        <nav className="navlinks" aria-label="Main navigation">
          <div className="nav-links-grid">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <Link href="/quote" className="btn primary" id="nav-quote-cta">
              Request Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
