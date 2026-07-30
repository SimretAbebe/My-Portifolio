import React from "react";
import { CONTACT_INFO } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#231F19] bg-[#0B0A08] py-8 text-xs font-mono text-[#8C8577]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© {new Date().getFullYear()} Simret Abebe. All rights reserved.</span>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9973F] transition-colors"
          >
            GitHub
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9973F] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="hover:text-[#C9973F] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
