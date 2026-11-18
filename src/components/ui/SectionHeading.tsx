import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}

function SectionHeading({ eyebrow, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Reveal>
        <span className="eyebrow">
          <span className="inline-block h-px w-6 bg-accent-indigo" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="kicker mt-5 text-balance">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={140}>
          <p className="lead mt-5">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

export default SectionHeading;
