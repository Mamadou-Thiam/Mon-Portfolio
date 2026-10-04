import { Briefcase, Check, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function ProfessionalExperience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container relative">
        <SectionHeading
          eyebrow="Parcours"
          title={
            <>
              Expériences <span className="text-gradient">professionnelles</span>
            </>
          }
          subtitle="Mon parcours et les missions qui ont forgé mon expertise full-stack et cloud."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-indigo/70 via-accent-sky/40 to-transparent sm:left-5" />

          <ol className="space-y-6">
            {experiences.map((exp, index) => (
              <li key={`${exp.company}-${index}`} className="relative pl-14 sm:pl-16">
                {/* Node */}
                <span className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-accent-indigo/40 bg-base-950 sm:left-1">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-gradient">
                    {exp.current && (
                      <span className="absolute h-8 w-8 animate-ping rounded-full bg-accent-indigo/30" />
                    )}
                  </span>
                </span>

                <Reveal direction="up" delay={index * 60}>
                  <article className="card-premium hover-glow p-6 sm:p-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">{exp.title}</h3>
                        <p className="mt-1 flex items-center gap-2 text-sm font-medium text-accent-sky">
                          <Briefcase className="h-3.5 w-3.5" />
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-shrink-0 flex-col items-start gap-2 sm:items-end">
                        <span className="rounded-full border border-accent-indigo/30 bg-accent-indigo/10 px-3 py-1 text-xs font-medium text-indigo-200">
                          {exp.type}
                        </span>
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {exp.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-indigo" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalExperience;
