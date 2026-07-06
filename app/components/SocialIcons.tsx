"use client";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591332737862",
    color: "#1877f2",
    Icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jasmineglobalexport/",
    color: "#c13584",
    Icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/jasmine-global-export/",
    color: "#0a66c2",
    Icon: FaLinkedin,
  },
];

/** Large round icon buttons — used in brand column */
export function SocialIconButtons() {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
      {socialLinks.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${s.name}`}
          title={s.name}
          style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: s.color,
            transition: "transform 0.15s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <s.Icon size={26} aria-hidden="true" style={{ display: "block" }} />
        </a>
      ))}
    </div>
  );
}

/** Pill-style text links — used in legal column */
export function SocialPillLinks() {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", flexDirection: "column" }}>
      {socialLinks.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "8px",
            color: s.color, 
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            transition: "transform 0.15s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <s.Icon size={18} aria-hidden="true" style={{ display: "block" }} />
          </span>
          {s.name}
        </a>
      ))}
    </div>
  );
}
