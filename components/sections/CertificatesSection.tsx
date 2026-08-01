"use client";

import React from "react";
import Image from "next/image";
import { CERTIFICATES } from "@/data/portfolio";

export default function CertificatesSection() {
  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono tracking-widest text-[#C9973F] uppercase">
          CREDENTIALS
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F5F0E6] tracking-tight">
          Certificates & Recognition
        </h2>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2 items-stretch">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className="group flex flex-col justify-between bg-[#111009] border border-[#231F19] rounded-lg p-6 hover:border-[#3A342A] transition-all h-full space-y-4"
          >
            {/* Top Details Header */}
            <div className="space-y-2.5">
              {/* Title & Issuer */}
              <div>
                <h3 className="font-sans text-base sm:text-lg font-semibold text-[#F5F0E6] tracking-tight group-hover:text-[#C9973F] transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs font-medium text-[#C9973F] tracking-wide mt-1">
                  {cert.issuer}
                </p>
                {cert.date && (
                  <p className="text-xs text-[#8C8577] mt-0.5 font-sans">
                    {cert.date}
                  </p>
                )}
              </div>

              {/* Description if present */}
              {cert.description && (
                <p className="text-xs sm:text-sm text-[#8C8577] leading-relaxed font-sans pt-1">
                  {cert.description}
                </p>
              )}

              {/* Skills if present */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="pt-1 flex items-center space-x-2">
                  <span className="text-xs font-mono text-[#8C8577]">
                    Skills:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[11px] font-sans font-medium text-[#F5F0E6] bg-[#16140D] border border-[#231F19] rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Show Credential Button if credentialUrl is present */}
              {cert.credentialUrl && (
                <div className="pt-2">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#C9973F]/40 bg-[#1A1810] text-[#C9973F] hover:bg-[#C9973F] hover:text-[#0B0A08] transition-all text-xs font-sans font-medium"
                  >
                    <span>Show credential</span>
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            {/* Certificate Image Preview */}
            <div className="relative w-full aspect-[16/10] bg-[#0E0D0A] rounded-md border border-[#231F19] overflow-hidden mt-auto">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

