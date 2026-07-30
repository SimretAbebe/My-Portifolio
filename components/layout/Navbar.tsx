"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/data/portfolio";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(targetId);
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0A08]/90 backdrop-blur-md border-b border-[#231F19]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="font-display font-medium text-lg tracking-tight text-[#F5F0E6] hover:text-[#C9973F] transition-colors"
        >
          Simret Abebe
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-mono tracking-wider uppercase">
          {NAV_ITEMS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`py-1 transition-colors ${
                  isActive
                    ? "text-[#C9973F] border-b border-[#C9973F]"
                    : "text-[#8C8577] hover:text-[#F5F0E6]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Hire Me CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="px-4 py-1.5 text-xs font-mono uppercase text-[#F5F0E6] bg-[#111009] border border-[#231F19] rounded-sm hover:border-[#C9973F] hover:text-[#C9973F] transition-all"
          >
            Hire me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#8C8577] hover:text-[#F5F0E6] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111009] border-b border-[#231F19] px-4 pt-3 pb-6 space-y-3 font-mono text-xs uppercase tracking-wider">
          {NAV_ITEMS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block py-2 border-b border-[#231F19]/50 ${
                  isActive ? "text-[#C9973F]" : "text-[#8C8577]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="block text-center px-4 py-2 text-xs font-mono uppercase text-[#F5F0E6] bg-[#0B0A08] border border-[#C9973F] rounded-sm"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
