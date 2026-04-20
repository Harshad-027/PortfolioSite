import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Radial Violet Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.15),transparent)] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fadeUp">
          <p className="text-[12px] font-[600] text-secondary tracking-[0.2em] uppercase mb-3">
            WELCOME TO MY UNIVERSE
          </p>
          <h1 className="text-5xl md:text-[72px] font-[700] text-foreground leading-[1.1] tracking-[-0.03em] mb-6">
            Crafting Scalable <br className="hidden md:block" /> Backends
          </h1>
          <p className="text-[18px] text-textSecondary mb-10 max-w-xl leading-[1.7]">
            I'm Harshad Nikam, a Backend Developer building high-performance APIs, cloud-integrated systems, and open-source tools.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-primary hover:bg-[#6d28d9] text-white text-[15px] font-[600] py-[12px] px-[28px] rounded-[8px] transition-all hover-glow-violet shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              Let's Collaborate
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="Harshad_Nikam_Resume.pdf"
              className="bg-transparent border border-[#374151] hover:border-primary hover:text-primary text-foreground text-[15px] font-[600] py-[12px] px-[28px] rounded-[8px] transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
        
        <div className="lg:justify-self-end w-full max-w-md animate-fadeUpDelay mt-12 lg:mt-0">
          <div className="bg-[#0d1117] border border-border rounded-[12px] p-[24px] shadow-2xl relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <pre className="font-mono text-[14px] leading-[1.6] overflow-x-auto">
              <code className="text-secondary">
<span className="text-textMuted mr-4 select-none">01</span><span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">developer</span> <span className="text-[#56b6c2]">=</span> {'{'}<br/>
<span className="text-textMuted mr-4 select-none">02</span>  name: <span className="text-[#98c379]">'Harshad Nikam'</span>,<br/>
<span className="text-textMuted mr-4 select-none">03</span>  focus: <span className="text-[#98c379]">'Backend Mastery'</span>,<br/>
<span className="text-textMuted mr-4 select-none">04</span>  skills: [<span className="text-[#98c379]">'Node.js'</span>, <span className="text-[#98c379]">'AWS'</span>, <span className="text-[#98c379]">'DevOps'</span>],<br/>
<span className="text-textMuted mr-4 select-none">05</span>  passionate: <span className="text-[#d19a66]">true</span>,<br/>
<span className="text-textMuted mr-4 select-none">06</span>  motto: <span className="text-[#98c379]">"Build with Purpose"</span><br/>
<span className="text-textMuted mr-4 select-none">07</span>{'}'};<br/>
<span className="text-textMuted mr-4 select-none">08</span><span className="text-[#e5c07b]">developer</span>.<span className="text-[#61afef]">deploy</span>();
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
