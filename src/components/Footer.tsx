import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="max-w-md flex flex-col items-center md:items-start">
            <Logo size={96} />
            <p className="mt-6 text-textSecondary leading-relaxed">
              Backend Developer dedicated to crafting high-performance, scalable systems with cutting-edge technology.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#about" className="text-sm font-medium text-textSecondary hover:text-white transition-colors">About</Link>
              <Link href="#experience" className="text-sm font-medium text-textSecondary hover:text-white transition-colors">Experience</Link>
              <Link href="#projects" className="text-sm font-medium text-textSecondary hover:text-white transition-colors">Projects</Link>
              <Link href="#skills" className="text-sm font-medium text-textSecondary hover:text-white transition-colors">Skills</Link>
              <Link href="#contact" className="text-sm font-medium text-textSecondary hover:text-white transition-colors">Contact</Link>
            </div>
            
            <div className="flex gap-4">
              <a href="mailto:harshadnikma@gmail.com" className="p-2 border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                <Mail size={18} />
              </a>
              <a href="https://github.com/Harshad-027" target="_blank" rel="noreferrer" className="p-2 border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/harshadnikam27" target="_blank" rel="noreferrer" className="p-2 border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="tel:+917058328680" className="p-2 border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-textMuted">
          <p>© {new Date().getFullYear()} Harshad Nikam. All rights reserved.</p>
          <p>Made with ❤️ in Nashik, India</p>
        </div>
      </div>
    </footer>
  );
}
