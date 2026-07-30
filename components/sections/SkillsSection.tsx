import React from "react";
import { SKILLS } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono tracking-widest text-[#C9973F] uppercase">
          CAPABILITIES
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F5F0E6] tracking-tight">
          Skills
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#111009] border border-[#231F19] rounded-lg p-6 space-y-4"
          >
            {/* Small Gold Mono Label with Hairline Border */}
            <div className="pb-3 border-b border-[#231F19]">
              <span className="font-mono text-xs font-medium text-[#C9973F] tracking-wider uppercase">
                {item.category}
              </span>
            </div>

            {/* Middot-separated List in Regular Body Text */}
            <p className="text-[#F5F0E6] text-sm sm:text-base leading-relaxed font-sans">
              {item.skills.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
