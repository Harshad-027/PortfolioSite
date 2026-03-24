'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();
  
  return (
    <section id="about" className="py-[120px] relative" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-[24px]">
        <div className="grid lg:grid-cols-2 gap-[64px] items-start">
          <div className="reveal">
            <p className="text-[12px] font-[600] text-secondary tracking-[0.2em] uppercase mb-[12px]">
              DISCOVERY
            </p>
            <h2 className="text-[40px] font-[700] text-foreground leading-[1.2] tracking-[-0.02em] mb-[16px]">
              About The Engineer
            </h2>
            <div className="text-textSecondary text-[16px] leading-[1.7] space-y-4 max-w-xl">
              <p>
                I&apos;m Harshad Nikam, a dedicated Backend Developer specializing in Node.js and RESTful API architecture. I build full-stack systems using Next.js, Express, and AWS Lambda — with a strong focus on CI/CD automation and scalable cloud infrastructure.
              </p>
              <p>
                Currently completing my BCA at Sandip University, Nashik, I&apos;m actively upskilling in DevOps, Docker, and Kubernetes to transition into cloud-native engineering.
              </p>
            </div>
          </div>
          
          <div className="space-y-[24px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
              {[
                { title: "2+ Years", desc: "Learning" },
                { title: "3+", desc: "Projects Shipped" },
                { title: "2", desc: "Internships Completed" }
              ].map((stat, i) => (
                <div key={i} className={`reveal-scale delay-${(i + 1) * 100} bg-card border border-border rounded-[12px] p-[24px] transition-all duration-300 hover-glow-card flex flex-col items-center text-center justify-center`}>
                  <h3 className="text-primary text-[28px] font-bold mb-1">{stat.title}</h3>
                  <p className="text-[14px] leading-[1.5] text-textSecondary font-medium">{stat.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="reveal delay-400 bg-card border border-border rounded-[12px] p-[24px] transition-all hover-glow-card relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-cyan-500/10 transition-colors duration-500" />
              <p className="text-[12px] text-secondary font-[600] tracking-wider uppercase mb-2">Education</p>
              <h3 className="text-[20px] font-[600] text-foreground mb-1 leading-[1.4]">Bachelor of Computer Application</h3>
              <p className="text-[16px] text-textSecondary mb-4">Sandip University, Nashik · 2022–2025</p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
                <span className="text-foreground bg-surface px-3 py-1 rounded-md border border-border">
                  GPA: 8.2 / 82%
                </span>
              </div>
              
              <div className="mt-5 pt-5 border-t border-border">
                <p className="text-[14px] text-textMuted leading-[1.5]">
                  <span className="text-textSecondary font-medium">Coursework:</span> DSA, OOP, Computer Networks, OS, DBMS, AI, ML, Deep Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
