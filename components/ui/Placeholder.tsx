import React from 'react';

export function Placeholder({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  // We can add a dev-only visual check here if we want to get fancy,
  // but for now, we just style it with a dashed border and distinct color
  // if it matches the placeholder pattern.
  const isString = typeof children === 'string';
  const isPlaceholder = isString && /^\[.*\]$/.test(children as string);

  if (isPlaceholder && process.env.NODE_ENV === 'development') {
    return (
      <span className={`inline-block border-b border-dashed border-accent-lime text-accent-lime/80 ${className}`}>
        {children}
      </span>
    );
  }

  return <span className={className}>{children}</span>;
}
