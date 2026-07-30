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
          Certificates
        </h2>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className="group relative flex flex-col bg-[#111009] border border-[#231F19] rounded-lg overflow-hidden hover:border-[#C9973F] transition-colors"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] bg-[#0E0D0A]">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Certificate Title */}
            <div className="p-4 border-t border-[#231F19]">
              <h3 className="font-mono text-xs sm:text-sm text-[#F5F0E6] uppercase tracking-wider">
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
