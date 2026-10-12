import { profileData } from "@/content/profile";
import { selectedWork } from "@/content/projects";
import { Placeholder } from "@/components/ui/Placeholder";

import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { SystemsSection } from "@/components/sections/SystemsSection";
import { ThinkingSection } from "@/components/sections/ThinkingSection";
import { StackSection } from "@/components/sections/StackSection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { AboutSection } from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen text-fg-primary relative z-10">
      {/* 01. HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-24 overflow-hidden">
        
        <div className="max-w-5xl z-10 relative mt-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-accent-lime/30 bg-accent-lime/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(198,255,61,0.15)]">
            <div className="w-2 h-2 rounded-full bg-accent-lime animate-pulse shadow-[0_0_8px_#C6FF3D]" />
            <span className="font-mono text-xs text-accent-lime font-medium uppercase tracking-widest">
              <Placeholder>{profileData.status.text}</Placeholder>
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 text-balance">
            <span className="text-white drop-shadow-sm">{profileData.name}</span>{" "}
            <span className="text-fg-muted font-light">/</span>{" "}
            <span className="bg-gradient-to-r from-accent-lime via-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium drop-shadow-[0_0_35px_rgba(198,255,61,0.25)]">
              {profileData.role}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-fg-subtle max-w-2xl mb-12 text-balance leading-relaxed">
            {profileData.heroStatement}
          </p>

          <div className="font-mono text-sm text-fg-muted bg-bg-card/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 max-w-xl inline-block shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-xs text-fg-muted/60 ml-2">bash ~ shamshod.terminal</span>
            </div>
            {profileData.terminalLines.map((line, i) => (
              <div key={i} className="mb-2 last:mb-0">
                <span className="text-accent-lime mr-2 font-bold">$</span>
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. TANLANGAN LOYIHALAR */}
      <section id="work" className="px-4 md:px-12 lg:px-24 py-32 border-t border-border-hairline">
        <h2 className="font-mono text-sm text-fg-muted uppercase tracking-widest mb-16 max-w-[1920px] mx-auto">
          <span className="text-accent-lime mr-4">01 //</span> Tanlangan Loyihalar
        </h2>
        
        <div className="grid gap-12 lg:gap-24 max-w-[1920px] mx-auto">
          {selectedWork.map((project) => (
            <div key={project.id} className="group relative">
              <div className="absolute inset-0 glow-radial opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-screen pointer-events-none" />
              <div className="aspect-[16/9] md:aspect-[21/9] bg-bg-card/60 backdrop-blur-md border border-border-hairline rounded-2xl mb-6 overflow-hidden flex items-center justify-center group-hover:border-accent-lime/40 group-hover:shadow-[0_0_30px_rgba(198,255,61,0.08)] transition-all duration-500 relative z-10">
                <span className="font-mono text-fg-muted opacity-50 group-hover:text-accent-lime group-hover:text-glow transition-all">Vizual namuna: {project.visualMockType}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mb-2 relative z-10 group-hover:text-accent-lime transition-colors duration-300"><Placeholder>{project.title}</Placeholder></h3>
              <p className="text-fg-subtle max-w-xl mb-4 relative z-10"><Placeholder>{project.problem}</Placeholder></p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs font-mono px-3 py-1 bg-bg-surface border-hairline rounded-full group-hover:border-accent-lime/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FeaturedSection />
      <SystemsSection />
      <ThinkingSection />
      <StackSection />
      <IdentitySection />
      <AboutSection />

    </div>
  );
}
