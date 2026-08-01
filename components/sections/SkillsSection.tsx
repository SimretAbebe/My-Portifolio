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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
        {SKILLS.map((item, idx) => {
          let col1: string[] = [];
          let col2: string[] = [];

          if (item.category === "LANGUAGES") {
            // List all languages down in a single column
            col1 = item.skills;
            col2 = [];
          } else if (item.category === "FRAMEWORKS") {
            // Next.js and Tailwind CSS only in the side column
            const sideSkills = ["Next.js", "Tailwind CSS"];
            col2 = item.skills.filter((s) => sideSkills.includes(s));
            col1 = item.skills.filter((s) => !sideSkills.includes(s));
          } else {
            const midPoint = Math.ceil(item.skills.length / 2);
            col1 = item.skills.slice(0, midPoint);
            col2 = item.skills.slice(midPoint);
          }

          return (
            <div
              key={idx}
              className="bg-[#111009] border border-[#231F19] rounded-lg p-6 flex flex-col justify-start hover:border-[#3A342A] transition-colors h-full space-y-4"
            >
              {/* Category Label */}
              <div className="pb-3 border-b border-[#231F19]">
                <span className="font-mono text-xs font-medium text-[#C9973F] tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              {/* Column Layout */}
              <div
                className={`grid gap-2.5 pt-1 items-start ${
                  col2.length > 0 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                }`}
              >
                {/* Left Column List */}
                <div className="flex flex-col gap-2.5">
                  {col1.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center space-x-2.5 px-3 py-2 rounded-md border border-[#231F19] bg-[#16140D] hover:border-[#C9973F]/40 hover:bg-[#1A1810] transition-all group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F]/70 group-hover:bg-[#C9973F] group-hover:scale-110 transition-all flex-shrink-0" />
                      <span className="text-[#F5F0E6] text-xs sm:text-sm font-sans font-medium tracking-wide leading-tight">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Side Column List */}
                {col2.length > 0 && (
                  <div className="flex flex-col gap-2.5">
                    {col2.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center space-x-2.5 px-3 py-2 rounded-md border border-[#231F19] bg-[#16140D] hover:border-[#C9973F]/40 hover:bg-[#1A1810] transition-all group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F]/70 group-hover:bg-[#C9973F] group-hover:scale-110 transition-all flex-shrink-0" />
                        <span className="text-[#F5F0E6] text-xs sm:text-sm font-sans font-medium tracking-wide leading-tight">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}




