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
        
        <div className="grid gap-16 lg:gap-24 max-w-[1920px] mx-auto">
          {selectedWork.map((project) => {
            const previewCard = (
              <div className="aspect-[16/9] md:aspect-[21/9] bg-bg-card/70 backdrop-blur-md border border-border-hairline rounded-2xl mb-6 overflow-hidden flex flex-col group-hover:border-accent-lime/50 group-hover:shadow-[0_0_35px_rgba(198,255,61,0.12)] transition-all duration-500 relative z-10">
                {/* Browser Mockup Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-black/20 font-mono text-xs text-fg-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-fg-subtle truncate max-w-[180px] md:max-w-xs">
                      {project.links?.live ? project.links.live.replace('https://', '') : project.visualMockType}
                    </span>
                  </div>
                  {project.links?.live && (
                    <div className="flex items-center gap-1.5 text-accent-lime bg-accent-lime/10 px-2.5 py-0.5 rounded-full border border-accent-lime/20 text-[11px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                      <span>JONLI PLATFORMA</span>
                    </div>
                  )}
                </div>

                {/* Center Mockup Info */}
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center my-auto">
                  <div className="w-14 h-14 rounded-2xl bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center text-accent-lime mb-4 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(198,255,61,0.3)] transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="text-xl md:text-2xl font-medium text-white group-hover:text-accent-lime transition-colors">
                    {project.title}
                  </span>
                  <span className="text-xs font-mono text-fg-muted mt-1">
                    {project.links?.live || project.category}
                  </span>
                </div>

                {/* Footer Bar */}
                <div className="flex items-center justify-between px-5 py-2.5 border-t border-white/[0.06] bg-black/20 text-xs font-mono text-fg-muted">
                  <span>{project.category}</span>
                  {project.links?.live && (
                    <span className="text-accent-lime group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium">
                      Saytga o&apos;tish <span>→</span>
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <div key={project.id} className="group relative">
                <div className="absolute inset-0 glow-radial opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-screen pointer-events-none" />
                
                {project.links?.live ? (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                    {previewCard}
                  </a>
                ) : (
                  previewCard
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3 relative z-10">
                  <div>
                    <span className="text-xs font-mono text-accent-lime uppercase tracking-wider mb-1 block">
                      {project.category} · {project.role}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium group-hover:text-accent-lime transition-colors duration-300">
                      {project.links?.live ? (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-2">
                          <Placeholder>{project.title}</Placeholder>
                          <span className="text-accent-lime text-xl">↗</span>
                        </a>
                      ) : (
                        <Placeholder>{project.title}</Placeholder>
                      )}
                    </h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-accent-lime text-black hover:bg-accent-lime/90 hover:shadow-[0_0_20px_rgba(198,255,61,0.35)] transition-all duration-300"
                      >
                        <span>Jonli sayt</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium bg-bg-surface border border-white/10 text-fg-muted hover:text-white hover:border-accent-lime/40 transition-all duration-300"
                      >
                        <span>GitHub</span>
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-fg-subtle max-w-2xl mb-4 relative z-10 leading-relaxed"><Placeholder>{project.problem}</Placeholder></p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-mono px-3 py-1 bg-bg-surface border-hairline rounded-full group-hover:border-accent-lime/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
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
