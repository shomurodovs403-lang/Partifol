import React from 'react';

export function SystemsSection() {
  return (
    <section id="systems" className="px-4 md:px-12 lg:px-24 py-32 border-t border-border-hairline">
      <h2 className="font-mono text-sm text-fg-muted uppercase tracking-widest mb-16 max-w-[1920px] mx-auto">
        <span className="text-accent-lime mr-4">06 //</span> Dasturiy Tizimlar
      </h2>

      <div className="max-w-[1920px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="p-8 border border-border-hairline rounded-2xl bg-bg-surface/70 backdrop-blur-md hover:border-accent-lime/40 hover:shadow-[0_0_30px_rgba(198,255,61,0.06)] transition-all duration-300">
            <h3 className="text-2xl font-medium mb-4">Frontend</h3>
            <p className="text-fg-subtle mb-6">Komponentlar arxitekturasi, holatni boshqarish (state management), moslashuvchan dizayn va yuqori tezlikdagi foydalanuvchi interfeyslari.</p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'CSS3', 'Tailwind', 'HTML5'].map(tag => (
                <span key={tag} className="font-mono text-xs px-2 py-1 border border-border-hairline rounded text-fg-muted">{tag}</span>
              ))}
            </div>
          </div>

          <div className="p-8 border border-border-hairline rounded-2xl bg-bg-surface/70 backdrop-blur-md hover:border-accent-lime/40 hover:shadow-[0_0_30px_rgba(198,255,61,0.06)] transition-all duration-300">
            <h3 className="text-2xl font-medium mb-4">Backend va Asosiy Tillar</h3>
            <p className="text-fg-subtle mb-6">Algoritmik masalalar, API integratsiyalari, ma&apos;lumotlar tuzilmalari, tizim dizayni va ma&apos;lumotlar bazasi bilan ishlash.</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'C++', 'Node.js', 'Data Structures', 'SQL'].map(tag => (
                <span key={tag} className="font-mono text-xs px-2 py-1 border border-border-hairline rounded text-fg-muted">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* SVG Diagram Placeholder */}
        <div className="w-full aspect-[21/9] border border-border-hairline rounded-2xl bg-bg-surface/60 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-grid-pattern opacity-10" />
           <p className="relative z-10 font-mono text-accent-lime mb-4">[INTERAKTIV ARXITEKTURA DIAGRAMMASI]</p>
           <p className="relative z-10 text-fg-subtle max-w-lg">Foydalanuvchi → Frontend → API → Autentifikatsiya → Biznes mantiq → Ma&apos;lumotlar bazasi → Tashqi xizmatlar.</p>
        </div>
      </div>
    </section>
  );
}
