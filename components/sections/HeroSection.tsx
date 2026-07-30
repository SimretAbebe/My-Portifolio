"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ROTATING_TEXTS } from "@/data/portfolio";

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
        setFadeState("in");
      }, 300);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-4 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Gold-bordered Mono Tag */}
          <div className="inline-block border border-[#C9973F] px-3 py-1 text-[11px] font-mono tracking-widest text-[#C9973F] uppercase rounded-sm">
            FINTECH ML ENGINEER & BACKEND DEVELOPER
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-[#F5F0E6] leading-[1.15] tracking-tight">
            Building AI that understands financial risk
          </h1>

          {/* Up & Down Vertical Motion Rotating Subtext */}
          <div className="h-8 flex items-center overflow-hidden">
            <span
              className={`font-mono text-base sm:text-lg text-[#C9973F] transition-all duration-300 ease-in-out transform ${
                fadeState === "in"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3"
              }`}
            >
              → {ROTATING_TEXTS[index]}
            </span>
          </div>

          {/* Bio Paragraph */}
          <p className="text-[#8C8577] text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            Computer Science student and backend developer building secure,
            scalable APIs and ML pipelines for Ethiopian and international
            fintech.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="px-6 py-3 text-sm font-mono font-medium text-[#0B0A08] bg-[#F5F0E6] rounded-sm hover:bg-[#C9973F] transition-colors"
            >
              View work
            </a>
            <a
              href="/Simret_Abebe_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-mono font-medium text-[#0B0A08] bg-[#C9973F] rounded-sm hover:bg-[#F5F0E6] transition-colors"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-mono text-[#F5F0E6] bg-transparent border border-[#231F19] rounded-sm hover:border-[#C9973F] hover:text-[#C9973F] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right Column: Headshot Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-[#111009] border-2 border-[#3A342A] rounded-full overflow-hidden group hover:border-[#C9973F] transition-colors shadow-xl">
            <Image
              src="/photo_2026-07-30_18-58-42.jpg"
              alt="Simret Abebe"
              fill
              sizes="(max-width: 768px) 16rem, 20rem"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Optional overlay for aesthetic */}
            <div className="absolute inset-0 bg-[#0B0A08]/10 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
