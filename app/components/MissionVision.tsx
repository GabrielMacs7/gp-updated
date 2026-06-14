"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { FaBullseye, FaEye } from "react-icons/fa6";

export function MissionVision() {
  const { lang } = useLanguage();

  return (
    <section id="sobre" className="bg-[#0b1e3e] py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaBullseye className="text-[#c1a45f] text-2xl" />
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#c1a45f]">
                {lang === "es" ? "MISIÓN" : "MISSION"}
              </h3>
            </div>
            <p className="font-[family-name:var(--font-subtitle)] text-sm leading-7 text-[rgba(247,246,242,0.75)]">
              {lang === "es"
                ? "En G&P brindamos soluciones integrales para los sectores marítimo, logístico e industrial, ofreciendo servicios especializados de inspección, ingeniería, agencia marítima, mantenimiento técnico, gestión logística y soporte operativo. Nos comprometemos a generar valor para nuestros clientes mediante la excelencia operacional, la innovación continua, la seguridad, el cumplimiento de los más altos estándares internacionales y un equipo humano altamente calificado, contribuyendo al desarrollo eficiente y sostenible de la cadena de suministro global."
                : "At G&P we provide comprehensive solutions for the maritime, logistics and industrial sectors, offering specialized services in inspection, engineering, ship agency, technical maintenance, logistics management and operational support. We are committed to generating value for our clients through operational excellence, continuous innovation, safety, compliance with the highest international standards and a highly qualified team, contributing to the efficient and sustainable development of the global supply chain."}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaEye className="text-[#c1a45f] text-2xl" />
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#c1a45f]">
                {lang === "es" ? "VISIÓN" : "VISION"}
              </h3>
            </div>
            <p className="font-[family-name:var(--font-subtitle)] text-sm leading-7 text-[rgba(247,246,242,0.75)]">
              {lang === "es"
                ? "Ser una empresa líder y referente en América Latina en la prestación de servicios integrales para el sector marítimo, reconocida por la calidad de nuestras soluciones, la confiabilidad de nuestras operaciones y nuestra capacidad para desarrollar proyectos que impulsen la eficiencia, competitividad y crecimiento de nuestros clientes. Para el año 2035, consolidarnos como un aliado estratégico de alcance internacional, con presencia en los principales puertos y centros logísticos de la región, distinguiéndonos por nuestra innovación, excelencia y compromiso con el desarrollo sostenible."
                : "To be a leading and benchmark company in Latin America in the provision of comprehensive services for the maritime sector, recognized for the quality of our solutions, the reliability of our operations and our ability to develop projects that drive the efficiency, competitiveness and growth of our clients. By 2035, to consolidate ourselves as a strategic ally with international reach, with presence in the main ports and logistics centers of the region, distinguishing ourselves by our innovation, excellence and commitment to sustainable development."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
