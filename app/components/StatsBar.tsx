"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { FaUserTie, FaGaugeHigh, FaHandshakeSimple, FaClock } from "react-icons/fa6";

const items = [
  {
    icon: FaUserTie,
    label: { es: "Personal Altamente Calificado en la industria Marítima", en: "Highly Qualified Personnel in the Maritime Industry" },
  },
  {
    icon: FaGaugeHigh,
    label: { es: "Eficiencia", en: "Efficiency" },
  },
  {
    icon: FaHandshakeSimple,
    label: { es: "Servicio al cliente", en: "Customer Service" },
  },
  {
    icon: FaClock,
    label: { es: "Disponibilidad 24/7", en: "24/7 Availability" },
  },
];

export function StatsBar() {
  const { lang } = useLanguage();

  return (
    <div className="bg-[#c1a45f] py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.label.en}
              className={`text-center py-6 px-4 ${
                i < items.length - 1 ? "border-r border-[rgba(11,30,62,0.15)]" : ""
              } ${i === 1 ? "md:border-r" : ""}`}
            >
              <item.icon className="text-3xl md:text-4xl text-[#0b1e3e] mx-auto mb-3" />
              <p className="font-[family-name:var(--font-subtitle)] text-[11px] uppercase tracking-[0.15em] text-[rgba(11,30,62,0.65)] max-w-[150px] mx-auto leading-snug">
                {item.label[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
