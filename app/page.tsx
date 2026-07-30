"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import WorkSection from "@/components/sections/WorkSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Home / Hero Section */}
      <section id="home" className="scroll-mt-24">
        <HeroSection />
      </section>

      {/* 2. About Section */}
      <section id="about" className="scroll-mt-24 pt-16 border-t border-[#231F19]">
        <AboutSection />
      </section>

      {/* 3. Experience Section */}
      <section
        id="experience"
        className="scroll-mt-24 pt-16 border-t border-[#231F19]"
      >
        <ExperienceSection />
      </section>

      {/* 4. Work / Projects Section */}
      <section id="work" className="scroll-mt-24 pt-16 border-t border-[#231F19]">
        <WorkSection />
      </section>

      {/* 5. Skills Section */}
      <section
        id="skills"
        className="scroll-mt-24 pt-16 border-t border-[#231F19]"
      >
        <SkillsSection />
      </section>

      {/* 6. Achievements Section */}
      <section
        id="achievements"
        className="scroll-mt-24 pt-16 border-t border-[#231F19]"
      >
        <AchievementsSection />
      </section>

      {/* 7. Certificates Section */}
      <section
        id="certificates"
        className="scroll-mt-24 pt-16 border-t border-[#231F19]"
      >
        <CertificatesSection />
      </section>

      {/* 8. Contact Section */}
      <section
        id="contact"
        className="scroll-mt-24 pt-16 border-t border-[#231F19]"
      >
        <ContactSection />
      </section>
    </div>
  );
}
