"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const images = [
  { src: "/gallery/gallery-01.jpg", alt: "Toyota Hilux export — Jasmine Global" },
  { src: "/gallery/gallery-02.jpg", alt: "Hilux vehicle inspection and yard handling" },
  { src: "/gallery/gallery-03.jpg", alt: "Hilux container loading preparation" },
  { src: "/gallery/gallery-04.jpg", alt: "Hilux export operation — Jasmine Global" },
  { src: "/gallery/gallery-05.jpg", alt: "Hilux port handling and lashing" },
  { src: "/gallery/gallery-06.jpg", alt: "Toyota Hilux export shipment" },
  { src: "/gallery/gallery-07.jpg", alt: "Hilux yard movement and export prep" },
  { src: "/gallery/gallery-08.jpg", alt: "Container lashing and securing" },
  { src: "/gallery/gallery-09.jpg", alt: "Hilux export — vehicle handover" },
  { src: "/gallery/gallery-10.jpg", alt: "Hilux container export operation" },
];

const videos = [
  { src: "/gallery/gallery-video-01.mp4", label: "Export Operation — Loading" },
  { src: "/gallery/gallery-video-02.mp4", label: "Export Operation — Yard Handling" },
  { src: "/gallery/gallery-video-03.mp4", label: "Export Operation — Container Prep" },
];

/* ── Lightbox ── */
function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];

  // keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(5,12,26,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-modal="true"
      role="dialog"
      aria-label={img.alt}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: 20,
          right: 24,
          background: "rgba(255,255,255,0.10)",
          border: "1px solid rgba(255,255,255,0.20)",
          borderRadius: "50%",
          width: 44,
          height: 44,
          color: "#fff",
          fontSize: 22,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
        }}
      >
        ✕
      </button>

      {/* Counter */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.6)",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
        style={{
          position: "absolute",
          left: 16,
          background: "rgba(255,255,255,0.10)",
          border: "1px solid rgba(255,255,255,0.20)",
          borderRadius: "50%",
          width: 48,
          height: 48,
          color: "#fff",
          fontSize: 22,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ‹
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(90vw, 1100px)",
          height: "min(80vh, 720px)",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="90vw"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>


      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
        style={{
          position: "absolute",
          right: 16,
          background: "rgba(255,255,255,0.10)",
          border: "1px solid rgba(255,255,255,0.20)",
          borderRadius: "50%",
          width: 48,
          height: 48,
          color: "#fff",
          fontSize: 22,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ›
      </button>
    </div>
  );
}

/* ── Video Card ── */
function VideoCard({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [unsupported, setUnsupported] = useState(false);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v || unsupported) return;
    if (v.paused) {
      v.play().then(() => {
        setPlaying(true);
      }).catch(() => {
        // Browser can't play — show fallback, don't crash
        setUnsupported(true);
        setPlaying(false);
      });
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [unsupported]);

  if (unsupported) {
    return (
      <div
        style={{
          borderRadius: 16,
          overflow: "hidden",
          background: "#050c1a",
          boxShadow: "0 8px 32px rgba(7,23,47,0.18)",
          position: "relative",
          aspectRatio: "16/9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 32 }}>🎬</span>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 700, margin: 0, textAlign: "center", padding: "0 20px" }}>
          Your browser can&apos;t play this video directly.
        </p>
        <a
          href={src}
          download
          style={{
            color: "#d7a44a",
            fontSize: 13,
            fontWeight: 800,
            textDecoration: "underline",
          }}
        >
          Download to watch
        </a>
      </div>
    );
  }

  return (
    <div
      style={{
        borderRadius: 16,
        overflow: "hidden",
        background: "#050c1a",
        boxShadow: "0 8px 32px rgba(7,23,47,0.18)",
        position: "relative",
        aspectRatio: "16/9",
        cursor: "pointer",
      }}
      onClick={toggle}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        preload="metadata"
        playsInline
        aria-label={label}
        onEnded={() => setPlaying(false)}
        onError={() => { setUnsupported(true); setPlaying(false); }}
        style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Play / Pause overlay — hides when playing */}
      {!playing && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(160deg, rgba(5,12,26,0.55) 0%, rgba(5,12,26,0.30) 100%)",
            gap: 14,
          }}
        >
          {/* Play button */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(215,164,74,0.92)",
              border: "3px solid rgba(255,255,255,0.30)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 24px rgba(215,164,74,0.45)",
              transition: "transform 0.15s",
            }}
          >
            {/* Triangle */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <polygon points="7,4 19,11 7,18" fill="#071b35" />
            </svg>
          </div>

        </div>
      )}

      {/* Pause indicator while playing — subtle corner badge */}
      {playing && (
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 14,
            background: "rgba(5,12,26,0.55)",
            borderRadius: 8,
            padding: "4px 10px",
            color: "rgba(255,255,255,0.75)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            pointerEvents: "none",
          }}
        >
          ▐▐ PAUSE
        </div>
      )}
    </div>
  );
}

/* ── Main Gallery Component ── */
export default function GalleryClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));

  return (
    <>
      {/* ── Photo Grid ── */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 4, height: 28, borderRadius: 4, background: "var(--gold, #d7a44a)", flexShrink: 0 }} />
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "var(--navy)", margin: 0 }}>
            Photos <span style={{ color: "var(--muted)", fontWeight: 500, fontSize: 15 }}>— click to enlarge</span>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 12,
            marginBottom: 64,
          }}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => openLightbox(i)}
              aria-label={`View: ${img.alt}`}
              style={{
                all: "unset",
                display: "block",
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: 14,
                overflow: "hidden",
                background: "var(--line)",
                boxShadow: "0 4px 16px rgba(7,23,47,0.08)",
                cursor: "zoom-in",
                transition: "transform 0.18s, box-shadow 0.18s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 32px rgba(7,23,47,0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(7,23,47,0.08)";
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover", pointerEvents: "none" }}
              />
              {/* hover zoom icon */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(7,23,47,0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.18s",
                }}
                className="gallery-hover-overlay"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Video Grid ── */}
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 4, height: 28, borderRadius: 4, background: "var(--gold, #d7a44a)", flexShrink: 0 }} />
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "var(--navy)", margin: 0 }}>
            Videos <span style={{ color: "var(--muted)", fontWeight: 500, fontSize: 15 }}>— click to play</span>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {videos.map((vid) => (
            <VideoCard key={vid.src} src={vid.src} label={vid.label} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
