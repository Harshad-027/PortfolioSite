'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Projects() {
  const ref = useScrollReveal();

  const projects = [
    {
      title: "NextJS Portfolio Site",
      year: "2025",
      desc: "Modern personal portfolio built with Next.js, featuring 3D UI integrations, smooth animations, and optimized SEO. Deployed on Vercel with continuous delivery via GitHub Actions.",
      tags: ["Next.js", "Vercel", "GitHub Actions", "SEO", "3D UI"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "Source", url: "#" }
      ]
    },
    {
      title: "JWT Shield",
      year: "2025",
      desc: "Robust authentication backend implementing JWT-based session management, secure cookie-based auth flows, and role-based access control. Open-sourced on GitHub with community recognition.",
      tags: ["Node.js", "JWT", "RBAC", "Security", "Open Source"],
      links: [
        { label: "Source", url: "#" }
      ]
    },
    {
      title: "NextJS Todo",
      year: "2025",
      desc: "Full-stack to-do application demonstrating server-side rendering, API routing, and persistent state management with Next.js.",
      tags: ["Next.js", "SSR", "API Routes", "Full Stack"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "Source", url: "#" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-[120px] relative" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-12 max-w-2xl">
          <p className="text-[12px] font-semibold text-secondary tracking-[0.2em] uppercase mb-3">
            PROJECTS SHOWCASE
          </p>
          <h2 className="text-[40px] font-bold text-foreground leading-[1.2] tracking-[-0.02em] mb-4">
            Featured Creations
          </h2>
          <p className="text-[16px] text-textSecondary leading-[1.7]">
            A selection of backend systems, full-stack apps, and open-source tools — built with focus on scalability, performance, and developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`reveal-scale delay-${(i + 1) * 100} bg-card border border-border rounded-[12px] p-6 flex flex-col h-full hover-glow-card transition-all`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[20px] font-semibold text-foreground leading-[1.4]">{project.title}</h3>
                <span className="text-[12px] font-mono font-medium text-textMuted bg-surface px-2 py-1 rounded border border-border">{project.year}</span>
              </div>
              
              <p className="text-[16px] text-textSecondary leading-[1.7] flex-grow mb-6">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-[rgba(6,182,212,0.10)] border border-[rgba(6,182,212,0.25)] text-secondary rounded-full px-3 py-[4px] text-[12px] font-medium leading-[1]">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                {project.links.map(link => (
                  <a 
                    key={link.label}
                    href={link.url}
                    className="bg-transparent border border-[#374151] hover:border-primary hover:text-primary text-foreground text-[14px] font-semibold py-2 px-4 rounded-[8px] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
