import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="px-4 md:px-12 lg:px-24 py-32 border-t border-border-hairline">
      <div className="max-w-[1920px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-bg-card border border-border-hairline rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-fg-muted font-mono">
              [FOTORASOM / VIZUAL]
            </div>
            {/* The actual Image component would go here */}
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent-lime rounded-full opacity-20" />
        </div>

        <div className="lg:col-span-7">
          <h2 className="font-mono text-sm text-fg-muted uppercase tracking-widest mb-8">
            <span className="text-accent-lime mr-4">09 //</span> Akbarjonov Shamshod Haqida
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-medium mb-8 leading-tight">
            Murakkab g&apos;oyalarni <span className="text-fg-muted">ishlaydigan tizimlarga aylantiraman.</span>
          </h3>

          <div className="space-y-6 text-lg text-fg-subtle leading-relaxed max-w-2xl">
            <p>
              Men dasturlashga insonlarning muammolarini hal qilish vositasi sifatida qaraydigan dasturchiman. Shunchaki kod yozibgina qolmay, tizim arxitekturasini loyihalashtiraman, algoritmlarni optimallashtiraman va foydalanish juda qulay bo&apos;lgan zamonaviy interfeyslarni yarataman.
            </p>
            <p>
              Faoliyatim davomida JavaScript, React, CSS, Python va C++ texnologiyalari bilan ishlayman. Har doim toza kod (clean code), tezkorlik va foydalanuvchi tajribasini (UX) birinchi o&apos;ringa qo&apos;yaman.
            </p>
            <p>
              Bo&apos;sh vaqtimda yangi texnologiyalarni tadqiq qilaman, algoritmik masalalarni yechaman va doimo o&apos;z sohamda rivojlanishga intilaman.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
