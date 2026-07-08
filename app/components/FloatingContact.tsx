"use client";

import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaTimes } from "react-icons/fa";

export default function FloatingContact() {
  const [waOpen, setWaOpen] = useState(false);
  const waRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (waRef.current && !waRef.current.contains(e.target as Node)) {
        setWaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
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

        {/* WhatsApp Group */}
        <div ref={waRef} style={{ position: "relative" }}>
          
          {/* Menu popup */}
          {waOpen && (
            <div style={{
              position: "absolute",
              bottom: "100%",
              left: "0",
              marginBottom: "12px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
              padding: "6px 0",
              minWidth: "140px",
              display: "flex",
              flexDirection: "column",
              animation: "floatMenuFade 0.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards",
              transformOrigin: "bottom left"
            }}>
              <a 
                href="https://wa.me/6589874467"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-menu-item"
                onClick={() => setWaOpen(false)}
              >
                <FaWhatsapp color="#25D366" size={18} />
                English
              </a>
              <div style={{ height: "1px", background: "#f0f0f0", margin: "4px 0" }} />
              <a 
                href="https://wa.me/6581139145"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-menu-item"
                onClick={() => setWaOpen(false)}
              >
                <FaWhatsapp color="#25D366" size={18} />
                عربي
              </a>
            </div>
          )}

          {/* Main WA Button */}
          <button
            onClick={() => setWaOpen(!waOpen)}
            aria-label="WhatsApp options"
            className="float-fab float-fab-wa"
          >
            <span className="float-fab-icon">{waOpen ? <FaTimes size={20} /> : <FaWhatsapp size={20} />}</span>
            <span className="float-fab-label">{waOpen ? "Close" : "WhatsApp"}</span>
          </button>
        </div>

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
                      transform 0.2s ease,
                      background 0.2s ease;
          cursor: pointer;
          border: none;
          outline: none;
          padding: 0;
          font-family: inherit;
        }
        .float-fab:hover {
          width: 150px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.36);
          transform: translateY(-1px);
        }
        
        .float-fab-wa { 
          background: #25D366; 
          color: #fff; 
        }
        .float-fab-wa:hover {
          background: #20b858;
        }
        
        .float-fab-email { 
          background: #071b35; 
          color: #fff; 
        }
        .float-fab-email:hover {
          background: #0a264a;
        }

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

        .wa-menu-item {
          padding: 10px 16px;
          color: #111;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: background 0.15s ease;
        }
        .wa-menu-item:hover {
          background: #f7f9fc;
        }
        
        @keyframes floatMenuFade {
          from { opacity: 0; transform: scale(0.95) translateY(5px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
}
