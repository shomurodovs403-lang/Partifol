"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-bg-base/80 backdrop-blur-md border-b border-border-hairline' : 'py-8'
      }`}
    >
      <div className="px-4 md:px-12 lg:px-24 flex justify-between items-center max-w-[1920px] mx-auto">
        <Link href="/" className="font-mono text-sm tracking-wider font-bold">
          AKBARJONOV SHAMSHOD<span className="text-accent-lime">.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          <Link href="#work" className="hover:text-accent-lime transition-colors">Loyihalar</Link>
          <Link href="#systems" className="hover:text-accent-lime transition-colors">Tizimlar</Link>
          <Link href="#stack" className="hover:text-accent-lime transition-colors">Texnologiyalar</Link>
          <Link href="#about" className="hover:text-accent-lime transition-colors">Haqimda</Link>
        </nav>

        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center justify-center font-mono text-sm px-6 py-2 border border-border-hairline rounded-full hover:border-accent-lime hover:text-accent-lime transition-colors"
        >
          Bog&apos;lanish
        </a>
        
        {/* Mobile menu button could go here */}
        <button className="md:hidden p-2 text-fg-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
