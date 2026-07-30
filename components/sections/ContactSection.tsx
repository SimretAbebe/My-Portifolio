"use client";

import React, { useState } from "react";
import { CONTACT_INFO } from "@/data/portfolio";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono tracking-widest text-[#C9973F] uppercase">
          GET IN TOUCH
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F5F0E6] tracking-tight">
          Let&apos;s work together
        </h2>
      </div>

      {/* Two Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 items-start">
        {/* Left Column: Details & Socials */}
        <div className="lg:col-span-5 space-y-8">
          <p className="text-[#8C8577] text-base sm:text-lg leading-relaxed font-sans">
            Open to fintech-focused ML and backend roles, and freelance projects
            across credit risk, fraud, and financial NLP — for the Ethiopian and
            international market.
          </p>

          {/* Stacked Contact List */}
          <div className="space-y-4 font-mono text-sm">
            {/* GitHub */}
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-[#F5F0E6] hover:text-[#C9973F] transition-colors p-2 -ml-2 rounded-sm"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>{CONTACT_INFO.githubHandle}</span>
            </a>

            {/* LinkedIn */}
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-[#F5F0E6] hover:text-[#C9973F] transition-colors p-2 -ml-2 rounded-sm"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>{CONTACT_INFO.linkedinHandle}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center space-x-3 text-[#F5F0E6] hover:text-[#C9973F] transition-colors p-2 -ml-2 rounded-sm"
            >
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{CONTACT_INFO.email}</span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center space-x-3 text-[#F5F0E6] hover:text-[#C9973F] transition-colors p-2 -ml-2 rounded-sm"
            >
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{CONTACT_INFO.phone}</span>
            </a>

            {/* Location */}
            <div className="flex items-center space-x-3 text-[#8C8577] p-2 -ml-2">
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-[#111009] border border-[#231F19] rounded-lg p-6 sm:p-8 space-y-6"
          >
            {submitted && (
              <div className="p-4 bg-[#1B4332] border border-[#8FBC9F]/30 rounded-sm text-[#8FBC9F] font-mono text-xs">
                ✓ Message recorded! Thank you for reaching out.
              </div>
            )}

            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block font-mono text-xs text-[#8C8577] tracking-wider uppercase"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your full name"
                className="w-full bg-[#0E0D0A] border border-[#231F19] rounded-sm px-4 py-3 text-sm text-[#F5F0E6] placeholder-[#8C8577]/50 focus:outline-none focus:border-[#C9973F] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block font-mono text-xs text-[#8C8577] tracking-wider uppercase"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your.email@example.com"
                className="w-full bg-[#0E0D0A] border border-[#231F19] rounded-sm px-4 py-3 text-sm text-[#F5F0E6] placeholder-[#8C8577]/50 focus:outline-none focus:border-[#C9973F] transition-colors"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block font-mono text-xs text-[#8C8577] tracking-wider uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-[#0E0D0A] border border-[#231F19] rounded-sm px-4 py-3 text-sm text-[#F5F0E6] placeholder-[#8C8577]/50 focus:outline-none focus:border-[#C9973F] transition-colors resize-y"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 font-mono text-xs font-medium uppercase tracking-wider text-[#0B0A08] bg-[#F5F0E6] rounded-sm hover:bg-[#C9973F] transition-colors cursor-pointer"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
