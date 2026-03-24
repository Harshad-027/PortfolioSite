'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Experience() {
  const ref = useScrollReveal();

  const experiences = [
    {
      company: "DATAMATICS SOFTWARE LTD.",
      role: "IT Support Team Associate",
      duration: "May 2025 – Oct 2025",
      bullets: [
        "Managed analytical and physical breakdown resolution for computer systems across the organization.",
        "Led a team of 7 to efficiently resolve employee IT complaints, improving response turnaround time.",
        "Coordinated with cross-functional teams to diagnose hardware/software issues, minimizing system downtime.",
        "Documented recurring technical issues and built an internal knowledge base for faster resolutions."
      ]
    },
    {
      company: "BYTEUPRISE SOFTWARE SOLUTIONS (Remote)",
      role: "Backend Developer Intern",
      duration: "Dec 2024 – May 2025",
      bullets: [
        "Developed RESTful APIs for the PrintIt website using Node.js and Express.",
        "Designed and deployed 5+ scalable RESTful APIs, improving system modularity and response performance.",
        "Automated CI/CD pipelines using GitHub Actions, reducing deployment time by 40%.",
        "Integrated AWS Lambda functions, cutting server infrastructure costs by 15%.",
        "Collaborated in agile sprints, participating in code reviews and technical documentation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-[120px] relative" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-12">
          <p className="text-[12px] font-semibold text-secondary tracking-[0.2em] uppercase mb-3">
            PROFESSIONAL JOURNEY
          </p>
          <h2 className="text-[40px] font-bold text-foreground leading-[1.2] tracking-[-0.02em]">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-border ml-3 md:ml-4 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className={`relative pl-8 md:pl-12 reveal-left delay-${(i + 1) * 200}`}>
              <span className="absolute -left-[5px] top-6 w-[8px] h-[8px] rounded-full bg-primary ring-[2px] ring-[#030712] content-['']" />
              
              <div className="bg-card border border-border rounded-[12px] p-6 hover-glow-card transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-[20px] font-semibold text-foreground leading-[1.4]">{exp.role}</h3>
                    <p className="text-[16px] text-textSecondary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-textMuted bg-surface px-3 py-1 rounded-full border border-border w-fit">
                    {exp.duration}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-[16px] text-textSecondary leading-[1.7] flex items-start">
                      <span className="text-secondary mr-3 mt-[4px] leading-none text-xl">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
