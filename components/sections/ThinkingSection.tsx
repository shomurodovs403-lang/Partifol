import React from 'react';
import { workflow, principles } from '@/content/thinking';

export function ThinkingSection() {
  return (
    <section id="thinking" className="px-4 md:px-12 lg:px-24 py-32 border-t border-border-hairline">
      <div className="grid lg:grid-cols-2 gap-24 max-w-[1920px] mx-auto">
        
        {/* Left: 5 Engineering Principles */}
        <div>
          <h2 className="font-mono text-sm text-fg-muted uppercase tracking-widest mb-16">
            <span className="text-accent-lime mr-4">03 //</span> Tamoyillar
          </h2>
          
          <div className="space-y-12">
            {principles.map((principle) => (
              <div key={principle.id} className="border-l border-border-hairline pl-6 hover:border-accent-lime transition-colors">
                <h3 className="text-2xl font-medium mb-2">{principle.title}</h3>
                <p className="text-accent-lime font-mono text-sm mb-4">&quot;{principle.stance}&quot;</p>
                <p className="text-fg-subtle">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 8-Stage Workflow */}
        <div>
          <h2 className="font-mono text-sm text-fg-muted uppercase tracking-widest mb-16">
            <span className="text-accent-lime mr-4">04 //</span> Ish Jarayoni
          </h2>

          <div className="space-y-8">
            {workflow.map((stage) => (
              <div key={stage.stepNumber} className="group flex gap-6">
                <div className="font-mono text-fg-muted group-hover:text-accent-lime transition-colors mt-1">
                  {stage.stepNumber}
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">{stage.title} <span className="text-fg-muted font-normal text-base">— {stage.subtitle}</span></h4>
                  <p className="text-fg-subtle text-sm mb-3">{stage.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {stage.deliverables.map(d => (
                      <span key={d} className="text-xs font-mono bg-bg-card border border-border-hairline px-2 py-1 rounded">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
