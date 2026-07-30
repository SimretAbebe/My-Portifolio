import React from "react";

export default function AboutSection() {
  return (
    <div className="space-y-10 max-w-4xl">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono tracking-widest text-[#C9973F] uppercase">
          BACKGROUND
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F5F0E6] tracking-tight">
          Summary
        </h2>
      </div>

      {/* Paragraphs */}
      <div className="space-y-6 text-[#8C8577] text-base sm:text-lg leading-relaxed font-sans">
        <p>
          Computer Science student and backend developer with a strong focus on
          machine learning for financial systems. Skilled in building secure,
          scalable backend APIs with Django, and in designing ML pipelines that
          turn raw transaction, review, and complaint data into credit risk,
          fraud, and NLP models with measurable accuracy.
        </p>
        <p>
          Comfortable working across the full ML lifecycle — from data cleaning
          and model training to deployment and production-grade authentication
          — with a particular interest in solving financial inclusion problems
          for both the Ethiopian and international fintech markets.
        </p>
      </div>

      {/* Hairline Divided Details Row */}
      <div className="pt-8 border-t border-[#231F19] grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Location Column */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-[#8C8577] tracking-widest uppercase">
            LOCATION
          </div>
          <div className="text-[#F5F0E6] font-mono text-sm sm:text-base">
            Bahir Dar, Ethiopia
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-[#8C8577] tracking-widest uppercase">
            EDUCATION
          </div>
          <div className="text-[#F5F0E6] font-mono text-sm sm:text-base">
            B.Sc. Computer Science, Bahir Dar University (BiT) — Expected Jul 2027
          </div>
        </div>
      </div>
    </div>
  );
}
