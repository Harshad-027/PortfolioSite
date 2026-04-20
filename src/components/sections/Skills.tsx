'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { title } from 'process';

export default function Skills() {
  const ref = useScrollReveal();

  const customCategories = [
    {
      title: "AI-ML",
      skills: ["Python", "Scikit-Learn", "Data Visualization", "Pandas", "Numpy", "Model Evaluation", "Deployment"]
    },
    {
      title: "Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript", "HTML/CSS", "SQL", "NoSQL", "Embedded C", "Python"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "RESTful APIs", "JWT", "Firebase"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS Lambda", "GitHub Actions", "CI/CD", "Docker (learning)", "Kubernetes (learning)", "Linux", "Vector Databases"]
    },
    {
      title: "Tools & Databases",
      skills: ["SQL", "NoSQL", "Firebase", "Git", "GitHub"]
    },
    {
      title: "Currently Learning",
      skills: ["Docker", "Infrastructure-as-Code"]
    }
  ];

  return (
    <section id="skills" className="py-[120px] relative" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-12 text-center max-w-2xl mx-auto">
          <p className="text-[12px] font-[600] text-secondary tracking-[0.2em] uppercase mb-3">
            INVENTORY
          </p>
          <h2 className="text-[40px] font-[700] text-foreground leading-[1.2] tracking-[-0.02em] mb-4">
            The Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customCategories.map((category, i) => (
            <div 
              key={category.title} 
              className={`reveal-scale delay-${((i % 3) + 1) * 100} bg-card border border-border rounded-[12px] p-6 hover-glow-card transition-all`}
            >
              <h3 className="text-[20px] font-[600] text-foreground mb-6 pb-4 border-b border-border/50">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="bg-[rgba(6,182,212,0.10)] border border-[rgba(6,182,212,0.25)] text-secondary rounded-full px-3 py-[4px] text-[12px] font-[500] hover:bg-[rgba(6,182,212,0.20)] hover:border-secondary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
