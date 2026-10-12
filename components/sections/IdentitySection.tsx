import React from 'react';
import { timelineData, currentlyExploring } from '@/content/timeline';
import { Placeholder } from '@/components/ui/Placeholder';

export function IdentitySection() {
  return (
    <section id="identity" className="px-4 md:px-12 lg:px-24 py-32 border-t border-border-hairline">
      <div className="grid lg:grid-cols-2 gap-24 max-w-[1920px] mx-auto">
        
        {/* Timeline */}
        <div>
          <h2 className="font-mono text-sm text-fg-muted uppercase tracking-widest mb-16">
            <span className="text-accent-lime mr-4">07 //</span> Tajriba
          </h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border-hairline before:to-transparent">
            {timelineData.map((item) => (
              <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-accent-lime bg-bg-surface shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(198,255,61,0.2)]" />
                
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-6 rounded-2xl border border-border-hairline bg-bg-card/70 backdrop-blur-md hover:border-accent-lime/40 hover:shadow-[0_0_25px_rgba(198,255,61,0.06)] transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium"><Placeholder>{item.title}</Placeholder></h3>
                    <span className="font-mono text-xs text-accent-lime border border-accent-lime/30 px-2 py-1 rounded bg-accent-lime/5">{item.year}</span>
                  </div>
                  <p className="font-mono text-sm text-fg-muted mb-4">{item.company} • {item.type}</p>
                  <p className="text-fg-subtle text-sm leading-relaxed"><Placeholder>{item.description}</Placeholder></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Identity & Exploring */}
        <div>
          <h2 className="font-mono text-sm text-fg-muted uppercase tracking-widest mb-16">
            <span className="text-accent-lime mr-4">08 //</span> Dasturchi Shaxsi
          </h2>
          
          <div className="mb-16 border border-border-hairline rounded-2xl p-8 bg-bg-card/70 backdrop-blur-md">
            <h3 className="text-xl font-medium mb-4">Dasturlash Faoliyati</h3>
            <p className="text-fg-subtle mb-6">
              Ochiq kodli loyihalar (Open Source) ustida ishlayman va mustaqil dasturiy loyihalar yarataman.
              <br/><br/>
              <span className="font-mono text-xs text-accent-lime bg-accent-lime/10 px-2 py-1 rounded">
                [GITHUB STATISTIKASI]
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">O&apos;rganilayotgan Yo&apos;nalishlar</h3>
            <div className="flex flex-wrap gap-3">
              {currentlyExploring.map(topic => (
                <span key={topic} className="px-4 py-2 border border-border-hairline rounded-full text-sm text-fg-primary hover:border-accent-lime transition-colors cursor-default">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
