import React from "react";
import { EXPERIENCES } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <div className="space-y-10 max-w-4xl">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono tracking-widest text-[#C9973F] uppercase">
          CAREER
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F5F0E6] tracking-tight">
          Experience
        </h2>
      </div>

      {/* Experience Timeline Rows */}
      <div className="divide-y divide-[#231F19] border-t border-b border-[#231F19]">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
          >
            {/* Date Column */}
            <div className="md:col-span-4 font-mono text-xs text-[#8C8577] tracking-wider uppercase pt-1">
              {exp.date}
            </div>

            {/* Details Column */}
            <div className="md:col-span-8 space-y-3">
              <div>
                <h3 className="font-display text-xl text-[#F5F0E6] font-medium">
                  {exp.title}
                </h3>
                <div className="font-mono text-xs text-[#C9973F] mt-1">
                  {exp.org}
                </div>
              </div>

              <ul className="space-y-2 text-[#8C8577] text-sm leading-relaxed font-sans">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start">
                    <span className="font-mono text-[#8C8577] mr-3 select-none">
                      —
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
