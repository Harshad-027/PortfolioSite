'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-[120px] relative" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-12 max-w-2xl">
          <p className="text-[12px] font-[600] text-secondary tracking-[0.2em] uppercase mb-3">
            COMMUNICATION
          </p>
          <h2 className="text-[40px] font-[700] text-foreground leading-[1.2] tracking-[-0.02em] mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-[16px] text-textSecondary leading-[1.7]">
            Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            className="reveal space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-[14px] font-[500] text-textSecondary mb-2">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-card border border-border rounded-[8px] px-4 py-3 text-foreground text-[16px] placeholder:text-textMuted focus:outline-none focus:border-secondary focus:shadow-[0_0_8px_rgba(6,182,212,0.2)] transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[14px] font-[500] text-textSecondary mb-2">Your Email</label>
              <input
                id="email"
                type="email"
                placeholder="yourmail@example.com"
                className="w-full bg-card border border-border rounded-[8px] px-4 py-3 text-foreground text-[16px] placeholder:text-textMuted focus:outline-none focus:border-secondary focus:shadow-[0_0_8px_rgba(6,182,212,0.2)] transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[14px] font-[500] text-textSecondary mb-2">Your Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-card border border-border rounded-[8px] px-4 py-3 text-foreground text-[16px] placeholder:text-textMuted focus:outline-none focus:border-secondary focus:shadow-[0_0_8px_rgba(6,182,212,0.2)] transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-[#6d28d9] text-white text-[15px] font-[600] py-3 px-8 rounded-[8px] transition-all hover-glow-violet w-full sm:w-auto"
            >
              Send Message
            </button>
            <p className="text-[14px] text-textMuted mt-2">I&apos;ll get back to you within 24 hours.</p>
          </form>

          {/* Direct Contact Info */}
          <div className="reveal delay-200 space-y-6">
            <div className="bg-card border border-border rounded-[12px] p-6 hover-glow-card transition-all">
              <h3 className="text-[20px] font-[600] text-foreground mb-6">Direct Contact</h3>
              <div className="space-y-5">
                <a href="mailto:harshadnikma@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-2 border border-border rounded-lg group-hover:border-primary group-hover:text-primary transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[14px] text-textMuted">Email</p>
                    <p className="text-[16px] text-foreground group-hover:text-primary transition-colors">harshadnikma@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+917058328680" className="flex items-center gap-4 group">
                  <div className="p-2 border border-border rounded-lg group-hover:border-primary group-hover:text-primary transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[14px] text-textMuted">Phone</p>
                    <p className="text-[16px] text-foreground group-hover:text-primary transition-colors">+91 7058328680</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="p-2 border border-border rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[14px] text-textMuted">Location</p>
                    <p className="text-[16px] text-foreground">Nashik, Maharashtra, India</p>
                  </div>
                </div>
                <a href="https://github.com/Harshad-027" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="p-2 border border-border rounded-lg group-hover:border-primary group-hover:text-primary transition-all">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </div>
                  <div>
                    <p className="text-[14px] text-textMuted">GitHub</p>
                    <p className="text-[16px] text-foreground group-hover:text-primary transition-colors">github.com/Harshad-027</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/harshadnikam27" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="p-2 border border-border rounded-lg group-hover:border-primary group-hover:text-primary transition-all">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  <div>
                    <p className="text-[14px] text-textMuted">LinkedIn</p>
                    <p className="text-[16px] text-foreground group-hover:text-primary transition-colors">linkedin.com/in/harshadnikam27</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
