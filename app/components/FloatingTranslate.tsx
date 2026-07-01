"use client";

import { useEffect, useState } from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
  { code: "es", label: "Spanish" },
  { code: "it", label: "Italian" },
  { code: "pt", label: "Portuguese" },
];

export default function FloatingTranslate() {
  const [selected, setSelected] = useState("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.getElementById("google-translate-script")) {
      setReady(true);
      return;
    }

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ar,es,it,pt",
        },
        "gt_hidden_element"
      );
      setReady(true);
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (code: string) => {
    setSelected(code);
    // Trigger the hidden Google Translate combo
    const combo = document.querySelector(
      "#gt_hidden_element .goog-te-combo"
    ) as HTMLSelectElement | null;
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* Hidden Google Translate widget — does the actual work */}
      <div id="gt_hidden_element" style={{ display: "none" }} />

      {/* Floating custom selector */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "20px",
          zIndex: 9999,
          background: "linear-gradient(135deg,#1565c0,#1976d2)",
          borderRadius: "40px",
          padding: "6px 12px 6px 10px",
          boxShadow: "0 4px 20px rgba(21,101,192,.38)",
          display: "flex",
          alignItems: "center",
          gap: "7px",
          height: "36px",
        }}
      >
        {/* Google "G" logo */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#ffffff"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#ffffffcc"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            fill="#ffffffaa"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#ffffffdd"
          />
        </svg>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "18px",
            background: "rgba(255,255,255,0.3)",
          }}
        />

        {/* Custom dropdown */}
        <select
          value={selected}
          onChange={(e) => handleChange(e.target.value)}
          aria-label="Select language"
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            cursor: "pointer",
            outline: "none",
            appearance: "none",
            WebkitAppearance: "none",
            paddingRight: "14px",
            lineHeight: "1",
          }}
        >
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code} style={{ color: "#071b35", background: "#fff" }}>
              {l.label}
            </option>
          ))}
        </select>

        {/* Custom chevron */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          style={{ flexShrink: 0, marginLeft: "-12px", pointerEvents: "none" }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
}
