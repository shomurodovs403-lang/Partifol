import React from 'react';
import { techStack } from '@/content/stack';

export function StackSection() {
  const categories = ['Frontend', 'Backend', 'Data', 'Infrastructure'] as const;
  
  const categoryNames: Record<string, string> = {
    Frontend: 'Frontend',
    Backend: 'Backend va Tillar',
    Data: "Ma'lumotlar va Algoritmlar",
    Infrastructure: 'Asboblar va Vositalar'
  };

  const levelNames: Record<string, string> = {
    Advanced: 'Yuqori',
    Proficient: 'Yaxshi',
    Familiar: "Boshlang'ich"
  };

  // Filter only enabled stack items
  const activeStack = techStack.filter(item => item.enabled);

  return (
    <section id="stack" className="px-4 md:px-12 lg:px-24 py-32 border-t border-border-hairline">
      <h2 className="font-mono text-sm text-fg-muted uppercase tracking-widest mb-16 max-w-[1920px] mx-auto">
        <span className="text-accent-lime mr-4">05 //</span> Texnologiyalar Steki
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1920px] mx-auto">
        {categories.map((category) => {
          const items = activeStack.filter(item => item.category === category);
          
          if (items.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="font-mono text-lg text-fg-primary border-b border-border-hairline pb-4 mb-6">
                {categoryNames[category] || category}
              </h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-center">
                      <span className="text-fg-subtle group-hover:text-accent-lime transition-colors">{item.name}</span>
                      <span className="font-mono text-xs text-bg-base bg-fg-muted group-hover:bg-accent-lime transition-colors px-2 py-0.5 rounded-sm opacity-0 group-hover:opacity-100">
                        {levelNames[item.level] || item.level}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
