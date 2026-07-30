import React from "react";
import { ACHIEVEMENTS } from "@/data/portfolio";

export default function AchievementsSection() {
  return (
    <div className="space-y-10 max-w-4xl">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono tracking-widest text-[#C9973F] uppercase">
          RECOGNITION
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F5F0E6] tracking-tight">
          Volunteering & achievements
        </h2>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.id}
            className="border-l-2 border-[#C9973F] pl-6 py-2 space-y-2"
          >
            <h3 className="font-display text-xl sm:text-2xl font-medium text-[#F5F0E6]">
              {item.title}
            </h3>
            <div className="font-mono text-xs text-[#C9973F]">
              {item.subtitle}
            </div>
            <p className="text-[#8C8577] text-sm sm:text-base leading-relaxed font-sans pt-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
