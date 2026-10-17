"use client";

import React, { useState } from "react";
import { SKILLS } from "@/data/portfolio";

export default function SkillsSection() {
  const [orientation, setOrientation] = useState<"horizontal" | "grid">(
    "horizontal"
  );

  return (
    <div className="space-y-8">
      {/* Section Header with Orientation Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-[#C9973F] uppercase">
            CAPABILITIES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F5F0E6] tracking-tight">
            Technical Skills
          </h2>
        </div>

        {/* Orientation Switcher */}
        <div className="flex items-center space-x-1 bg-[#111009] border border-[#231F19] p-1 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setOrientation("horizontal")}
            className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center space-x-1.5 ${
              orientation === "horizontal"
                ? "bg-[#C9973F] text-[#0B0A08] font-semibold shadow-sm"
                : "text-[#8C8577] hover:text-[#F5F0E6]"
            }`}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span>Horizontal Rows</span>
          </button>
          <button
            onClick={() => setOrientation("grid")}
            className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center space-x-1.5 ${
              orientation === "grid"
                ? "bg-[#C9973F] text-[#0B0A08] font-semibold shadow-sm"
                : "text-[#8C8577] hover:text-[#F5F0E6]"
            }`}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span>Grid Cards</span>
          </button>
        </div>
      </div>

      {orientation === "horizontal" ? (
        /* Simple Horizontal Row-oriented Layout */
        <div className="space-y-4">
          {SKILLS.map((item) => (
            <div
              key={item.category}
              className="bg-[#111009] border border-[#231F19] rounded-xl p-5 sm:p-6 hover:border-[#3A342A] transition-all flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group"
            >
              {/* Category Header (Left Column on md+) */}
              <div className="md:w-60 shrink-0 flex items-center justify-between md:justify-start space-x-3 pb-3 md:pb-0 border-b md:border-b-0 border-[#231F19]">
                <span className="w-2 h-2 rounded-full bg-[#C9973F] group-hover:scale-125 transition-transform" />
                <h3 className="font-mono text-xs font-semibold text-[#C9973F] tracking-wider uppercase">
                  {item.category}
                </h3>
                <span className="text-[10px] font-mono text-[#8C8577] bg-[#0E0D0A] px-2 py-0.5 rounded border border-[#231F19] md:ml-auto">
                  {item.skills.length}
                </span>
              </div>

              {/* Skills Tags (Horizontal Wrap) */}
              <div className="flex flex-wrap gap-2 flex-1 items-center">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs sm:text-sm font-sans font-medium text-[#F5F0E6] bg-[#16140D] border border-[#231F19] rounded-lg hover:border-[#C9973F]/70 hover:text-[#C9973F] hover:bg-[#1A1810] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Simple Clean Grid Orientation */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((item) => (
            <div
              key={item.category}
              className="bg-[#111009] border border-[#231F19] rounded-xl p-5 hover:border-[#3A342A] transition-all flex flex-col space-y-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#231F19]">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F]" />
                  <h3 className="font-mono text-xs font-semibold text-[#C9973F] tracking-wide uppercase">
                    {item.category}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#8C8577] bg-[#0E0D0A] px-2 py-0.5 rounded border border-[#231F19]">
                  {item.skills.length}
                </span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-sans font-medium text-[#F5F0E6] bg-[#16140D] border border-[#231F19] rounded-md hover:border-[#C9973F]/70 hover:text-[#C9973F] hover:bg-[#1A1810] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
