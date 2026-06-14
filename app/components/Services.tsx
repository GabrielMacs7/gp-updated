"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { FaAnchor, FaBox, FaRulerCombined, FaArrowRight } from "react-icons/fa6";

const departments = [
  {
    id: "ship-agency",
    logo: "/shipagencyandco.png",
    icon: FaAnchor,
    title: { es: "G&P Ship Agency & Co.", en: "G&P Ship Agency & Co." },
    subtitle: { es: "Agenciamiento Marítimo", en: "Ship Agency" },
    short: { es: "Ship Agency", en: "Ship Agency" },
    sections: [
      {
        heading: { es: "Agenciamiento Marítimo", en: "Ship Agency" },
        items: [
          { es: "Representación de armadores y operadores.", en: "Owner and operator representation." },
          { es: "Coordinación de arribo y zarpe de embarcaciones.", en: "Vessel arrival and departure coordination." },
          { es: "Trámites ante Capitanía de Puerto, Aduanas, Migración y Autoridades Sanitarias.", en: "Procedures before Harbor Master, Customs, Immigration and Health Authorities." },
          { es: "Gestión de permisos y documentación portuaria.", en: "Port permits and documentation management." },
          { es: "Coordinación de prácticos, remolcadores y amarradores.", en: "Pilot, tug and mooring coordination." },
          { es: "Elaboración y control de Disbursement Accounts (DA).", en: "Disbursement Accounts (DA) preparation and control." },
        ],
      },
      {
        heading: { es: "Husbandry Services", en: "Husbandry Services" },
        items: [
          { es: "Relevo y cambio de tripulaciones.", en: "Crew changes and relief." },
          { es: "Reservas de hoteles y transporte terrestre.", en: "Hotel bookings and ground transportation." },
          { es: "Asistencia médica para tripulantes.", en: "Medical assistance for crew." },
          { es: "Cash to Master (CTM).", en: "Cash to Master (CTM)." },
          { es: "Gestión de visas e inmigración.", en: "Visa and immigration management." },
        ],
      },
    ],
  },
  {
    id: "marine-survey",
    logo: "/marinesurveyengineering.png",
    icon: FaRulerCombined,
    title: { es: "G&P Marine Survey Engineering", en: "G&P Marine Survey Engineering" },
    subtitle: { es: "Inspección Marítima", en: "Marine Survey" },
    short: { es: "Marine Survey", en: "Marine Survey" },
    sections: [
      {
        heading: { es: "Marine Survey & Cargo", en: "Marine Survey & Cargo" },
        items: [
          { es: "Draft Survey — peso de carga por cálculos de calado.", en: "Draft Survey — cargo weight by draft calculations." },
          { es: "Bunker Quantity Survey (BQS) — verificación de combustible.", en: "Bunker Quantity Survey (BQS) — fuel verification." },
          { es: "Off-Hire / On-Hire Survey — inspección de estado del buque.", en: "Off-Hire / On-Hire Survey — vessel condition inspection." },
          { es: "Cargo Survey — inspección de mercancías.", en: "Cargo Survey — cargo inspection." },
          { es: "Damage Survey — evaluación de daños.", en: "Damage Survey — damage assessment." },
        ],
      },
      {
        heading: { es: "Ingeniería y Mantenimiento", en: "Engineering & Maintenance" },
        items: [
          { es: "Sandblasting y Pintura Industrial — protección anticorrosiva.", en: "Sandblasting & Industrial Painting — anticorrosive protection." },
          { es: "Mantenimiento Metalmecánico — estructuras, soldadura certificada.", en: "Metal-Mechanical Maintenance — structures, certified welding." },
          { es: "Fabricación de Piezas en Caucho para Buques.", en: "Rubber Parts Manufacturing for Vessels." },
        ],
      },
      {
        heading: { es: "Consultoría y Proyectos", en: "Consulting & Projects" },
        items: [
          { es: "Asesoría Técnica Marítima — estudios, riesgos, optimización.", en: "Maritime Technical Advisory — studies, risk, optimization." },
          { es: "Project Cargo & Heavy Lift — cargas de proyecto.", en: "Project Cargo & Heavy Lift." },
          { es: "Representación Comercial y Técnica en Colombia y Suramérica.", en: "Commercial & Technical Representation in Colombia and South America." },
        ],
      },
    ],
  },
  {
    id: "container-management",
    logo: "/containermanagment.png",
    icon: FaBox,
    title: { es: "G&P Container Management", en: "G&P Container Management" },
    subtitle: { es: "Gestión de Contenedores", en: "Container Management" },
    short: { es: "Container", en: "Container" },
    sections: [
      {
        heading: { es: "Servicios para Contenedores", en: "Container Services" },
        items: [
          { es: "Inspección Técnica de Contenedores (IICL) — bajo estándares IICL y CIC.", en: "Technical Container Inspection (IICL) — under IICL and CIC standards." },
          { es: "Reparación de Contenedores — estructural, paneles, puertas, soldadura y pintura.", en: "Container Repair — structural, panels, doors, welding and painting." },
          { es: "Survey de Contenedores Refrigerados (Reefer).", en: "Reefer Container Survey." },
          { es: "Almacenamiento y Gestión de Contenedores.", en: "Container Storage & Management." },
          { es: "Compra, Venta y Alquiler de Contenedores — Dry, Reefer, Open Top, Flat Rack.", en: "Container Sale, Purchase & Rental — Dry, Reefer, Open Top, Flat Rack." },
        ],
      },
    ],
  },
];

export function Services() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const dept = departments[activeTab];

  return (
    <>
    <section id="servicios" className="bg-[#f7f6f2] py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f]">
            {lang === "es" ? "Nuestras Divisiones" : "Our Divisions"}
          </p>

        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-[rgba(11,30,62,0.08)] shadow-sm">
            {departments.map((d, idx) => (
              <button
                key={d.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3.5 sm:px-7 sm:py-4 text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-subtitle)] transition-all ${
                  idx === activeTab
                    ? "bg-[#0b1e3e] text-[#c1a45f]"
                    : "text-[#3b3b3b] hover:bg-[#f7f6f2]"
                } ${idx > 0 ? "border-l border-[rgba(11,30,62,0.06)]" : ""}`}
              >
                <d.icon className={`text-sm ${idx === activeTab ? "text-[#c1a45f]" : ""}`} />
                <span className="hidden sm:inline">{d.short[lang]}</span>
                <span className="sm:hidden">{d.short[lang].split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active department content */}
        <div key={dept.id} className="animate-fadeIn">
          {/* Logo + Title */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 mb-10">
            <div
              className="bg-[#c1a45f] border border-[#c1a45f] p-4 shadow-lg cursor-zoom-in hover:shadow-xl transition-all shrink-0 w-48 sm:w-56"
              onClick={() => setLightbox(dept.logo)}
            >
              <Image
                src={dept.logo}
                alt={dept.title.en}
                width={600}
                height={400}
                className="w-full h-auto object-contain pointer-events-none"
              />
            </div>
            <div className="text-center sm:text-left pt-1">
              <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f] mb-2">
                {dept.subtitle[lang]}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#0b1e3e]">
                {dept.title[lang]}
              </h3>
            </div>
          </div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {dept.sections.map((section) => (
              <div
                key={section.heading.en}
                className="bg-white border border-[rgba(11,30,62,0.08)] p-6 shadow-[0_8px_25px_rgba(11,30,62,0.05)]"
              >
                <h4 className="font-[family-name:var(--font-display)] text-xl text-[#0b1e3e] mb-4 pb-3 border-b border-[rgba(193,164,95,0.2)]">
                  {section.heading[lang]}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item.es.substring(0, 15)}
                      className="flex items-start gap-2.5 text-sm leading-6 text-[#3b3b3b] font-[family-name:var(--font-subtitle)]"
                    >
                      <FaArrowRight className="text-[#c1a45f] mt-1 text-[10px] shrink-0" />
                      <span>{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <style>{`
      @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      .animate-fadeIn { animation: fadeIn 0.35s ease forwards; }
    `}</style>

    {lightbox && (
      <div
        className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4 sm:p-8"
        onClick={() => setLightbox(null)}
      >
        <button
          onClick={() => setLightbox(null)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white text-3xl leading-none w-10 h-10 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
          <Image
            src={lightbox}
            alt=""
            width={1200}
            height={800}
            className="w-full h-auto max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )}
    </>
  );
}
