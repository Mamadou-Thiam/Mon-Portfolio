import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-indigo" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal delay={220}>
        <span className="mt-7 block h-1 w-24 rounded-full bg-brand-gradient" />
      </Reveal>
    </div>
  );
}

export default SectionHeading;
