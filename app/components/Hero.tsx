"use client";

import { useRef } from "react";

import { useLanguage } from "@/app/context/LanguageContext";

export function Hero() {
  const { lang } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
        style={{ filter: "brightness(0.4)" }}
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,30,62,0.85)] via-[rgba(11,30,62,0.5)] to-[rgba(0,0,0,0.25)]" />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 text-center">
        <h1
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-balance text-[#c1a45f] font-light"
        >
          {lang === "es"
            ? "Soluciones Integrales para la Industria Marítima"
            : "Comprehensive Solutions for the Maritime Industry"}
        </h1>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(247,246,242,0.35)] font-[family-name:var(--font-subtitle)]">
          {lang === "es" ? "Explorar" : "Scroll"}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c1a45f] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
