import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const typeStyles: Record<string, string> = {
  Master: 'bg-accent-violet/20 text-indigo-200 border-accent-violet/30',
  Bootcamp: 'bg-accent-sky/20 text-sky-200 border-accent-sky/30',
  Licence: 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30',
  Séminaire: 'bg-amber-500/20 text-amber-200 border-amber-500/30',
};

function Education() {
  return (
    <section id="education" className="section-shell bg-base-900/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Formation"
          title={
            <>
              Parcours <span className="text-gradient">académique</span>
            </>
          }
          subtitle="Des diplômes et formations continues qui nourrissent ma pratique technique."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 90}>
              <article className="card-premium hover-glow group h-full p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      typeStyles[item.type] ?? 'bg-white/10 text-slate-300 border-white/10'
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-indigo transition-transform duration-500 group-hover:scale-110">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                </div>

                <h3 className="font-display text-base font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-accent-sky">{item.institution}</p>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </span>
                  <span className="font-medium">{item.period}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
