"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useLanguage } from "@/app/context/LanguageContext";

const navLinks = [
  { label: { es: "Quienes somos", en: "About Us" }, href: "#sobre" },
  { label: { es: "Servicios", en: "Services" }, href: "#servicios" },
  { label: { es: "Puertos", en: "Ports" }, href: "#puertos" },
  { label: { es: "Contacto", en: "Contact" }, href: "#contacto" },
];

export function Header() {
  const { lang, setLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Lang Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0b1e3e]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="flex justify-end items-center gap-3 py-1.5">
            <button
              onClick={() => setLang("es")}
              className={`text-[11px] uppercase tracking-[0.12em] font-[family-name:var(--font-subtitle)] transition-colors ${
                lang === "es" ? "text-[#c1a45f]" : "text-white/55 hover:text-[#c1a45f]"
              }`}
            >
              Español
            </button>
            <span className="text-[11px] text-white/20">|</span>
            <button
              onClick={() => setLang("en")}
              className={`text-[11px] uppercase tracking-[0.12em] font-[family-name:var(--font-subtitle)] transition-colors ${
                lang === "en" ? "text-[#c1a45f]" : "text-white/55 hover:text-[#c1a45f]"
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="fixed top-[28px] left-0 right-0 z-[60] bg-[#F6F5F1] shadow-sm">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="flex items-center justify-between h-[180px]">
              <nav className="hidden lg:flex lg:items-center lg:gap-10">
                {navLinks.slice(0, 2).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-[family-name:var(--font-subtitle)] text-base uppercase tracking-[0.2em] text-[#0b1e3e] transition-colors hover:text-[#c1a45f]"
                  >
                    {item.label[lang]}
                  </a>
                ))}
              </nav>

              <div className="flex flex-1 items-center justify-center lg:flex-none">
                <Link href="/" className="block w-72 transition-opacity hover:opacity-80">
                  <Image
                    src="/logo.png"
                    alt="G&P Ship Agency & Co."
                    width={800}
                    height={600}
                    priority
                    className="h-auto w-full"
                  />
                </Link>
              </div>

              <nav className="hidden lg:flex lg:items-center lg:gap-10">
                {navLinks.slice(2).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-[family-name:var(--font-subtitle)] text-base uppercase tracking-[0.2em] text-[#0b1e3e] transition-colors hover:text-[#c1a45f]"
                  >
                    {item.label[lang]}
                  </a>
                ))}
              </nav>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#0b1e3e] transition-colors hover:text-[#c1a45f] lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FaXmark className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[70] bg-[#F6F5F1] transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col p-6 pt-[208px]">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-[#0b1e3e] transition-colors hover:text-[#c1a45f]"
            aria-label="Close menu"
          >
            <FaXmark className="h-6 w-6" />
          </button>
          <nav className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-[family-name:var(--font-subtitle)] text-base uppercase tracking-[0.26em] text-[#0b1e3e] transition-colors hover:text-[#c1a45f]"
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>

          <div className="mt-12 border-t border-[rgba(11,30,62,0.08)] pt-8">
            <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.34em] text-[#c1a45f]">
              {lang === "es" ? "Contacto" : "Contact"}
            </p>
            <div className="mt-4 space-y-3">
              <a href="mailto:Info@gpshippingcm.com" className="block text-sm text-[#3b3b3b] transition-colors hover:text-[#c1a45f]">
                Info@gpshippingcm.com
              </a>
              <a href="tel:+573116406379" className="block text-sm text-[#3b3b3b] transition-colors hover:text-[#c1a45f]">
                +57 3116406379
              </a>
              <p className="text-sm text-[#3b3b3b]">Barranquilla, Atlántico</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
