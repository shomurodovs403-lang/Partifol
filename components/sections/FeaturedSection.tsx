"use client";

import React, { useState } from 'react';
import { featuredCaseStudy } from '@/content/projects';
import { Placeholder } from '@/components/ui/Placeholder';

export function FeaturedSection() {
  const [activeChapter, setActiveChapter] = useState(featuredCaseStudy.chapters[0].id);

  // In a real implementation, we would use IntersectionObserver to set the active chapter
  // based on scroll position. For now, we'll keep it simple for the skeleton.

  return (
    <section id="featured" className="px-4 md:px-12 lg:px-24 py-32 border-t border-border-hairline">
      <h2 className="font-mono text-sm text-fg-muted uppercase tracking-widest mb-16">
        <span className="text-accent-lime mr-4">02 //</span> Asosiy Loyiha Tahlili
      </h2>

      <div className="mb-12">
        <h3 className="text-4xl md:text-5xl font-medium mb-4"><Placeholder>{featuredCaseStudy.title}</Placeholder></h3>
        <p className="text-xl text-fg-subtle max-w-3xl"><Placeholder>{featuredCaseStudy.overview}</Placeholder></p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative">
        {/* Left Column: Scrollable Chapters */}
        <div className="w-full lg:w-1/2 space-y-32 py-12 lg:pr-12">
          {featuredCaseStudy.chapters.map((chapter) => (
            <div 
              key={chapter.id} 
              className={`transition-opacity duration-500 ${activeChapter === chapter.id ? 'opacity-100' : 'opacity-30'}`}
              onMouseEnter={() => setActiveChapter(chapter.id)} // For demo purposes on desktop
            >
              <h4 className="text-2xl font-medium mb-4">{chapter.title}</h4>
              <p className="text-fg-subtle text-lg leading-relaxed"><Placeholder>{chapter.content}</Placeholder></p>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky Visuals */}
        <div className="w-full lg:w-1/2 hidden lg:block">
          <div className="sticky top-32 aspect-square bg-bg-card border border-border-hairline rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-accent-lime border-dashed mx-auto mb-4 animate-spin-slow" />
              <p className="font-mono text-fg-muted">Vizual Turi:</p>
              <p className="font-mono text-accent-lime text-xl mt-2">
                {featuredCaseStudy.chapters.find(c => c.id === activeChapter)?.visualType || 'ui'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
