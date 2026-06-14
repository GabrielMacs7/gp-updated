"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export function MissionVision() {
  const { lang } = useLanguage();

  return (
    <section id="sobre" className="bg-[#0b1e3e] py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="text-center">
          <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f]">
            {lang === "es" ? "Nuestra razón de ser" : "Our purpose"}
          </p>
        </div>
      </div>
    </section>
  );
}
