import { experiences } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function ProfessionalExperience() {
  return (
    <section id="experience" className="section rule-top bg-base-900/40">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="Parcours"
          title={
            <>
              Expériences <span className="italic text-accent-indigo">professionnelles</span>
            </>
          }
          subtitle="Enseignement, développement freelance et mission en entreprise : les contextes dans lesquels je travaille."
        />

        <ol className="border-l border-[rgb(var(--rule))] pl-7 sm:pl-9">
          {experiences.map((exp, index) => (
            <li key={`${exp.company}-${index}`} className={`relative ${index > 0 ? 'mt-11' : ''}`}>
              <span
                className={`absolute -left-[calc(1.75rem+4px)] top-2 h-[9px] w-[9px] rounded-full border-2 border-base-950 sm:-left-[calc(2.25rem+4px)] ${
                  exp.current ? 'bg-accent-indigo' : 'bg-slate-500'
                }`}
                aria-hidden="true"
              />
              <Reveal delay={index * 60}>
                <article>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-2xl tracking-[-0.01em] text-white">{exp.title}</h3>
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm text-slate-400">
                    {exp.company} <span className="mx-2 text-slate-600">·</span> {exp.type}
                    <span className="mx-2 text-slate-600">·</span> {exp.location}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {exp.tasks.map((task) => (
                      <li key={task} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                        <span className="mt-2 h-px w-4 shrink-0 bg-accent-indigo/60" aria-hidden="true" />
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
    </section>
  );
}

export default ProfessionalExperience;
