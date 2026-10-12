import React from 'react';
import { profileData } from "@/content/profile";
import { Placeholder } from "@/components/ui/Placeholder";

export function Footer() {
  return (
    <footer className="border-t border-border-hairline py-12 px-4 md:px-12 lg:px-24 bg-bg-base/60 backdrop-blur-md">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-2xl font-medium mb-2">G&apos;oyangiz bormi? Birga amalga oshiramiz.</h2>
          <a href={`mailto:${profileData.contact.email}`} className="text-accent-lime hover:underline font-mono">
            <Placeholder>{profileData.contact.email}</Placeholder>
          </a>
        </div>
        
        <div className="flex flex-col md:text-right gap-2 font-mono text-sm text-fg-subtle">
          <p>Mahalliy vaqt: <span className="text-fg-primary">Toshkent (UTC+5)</span></p>
          <div className="flex gap-4">
            <a href={profileData.contact.github} className="hover:text-accent-lime transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profileData.contact.linkedin} className="hover:text-accent-lime transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profileData.contact.telegram} className="hover:text-accent-lime transition-colors" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
