import { certifications, education } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function Education() {
  return (
    <section id="education" className="section rule-top">
      <div className="container">
        <SectionHeading
          eyebrow="Formation & certifications"
          title="Un parcours construit dans la durée"
          subtitle="Diplômes, bootcamps et certifications qui soutiennent ma pratique de l’infrastructure et du développement."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Formation</h3>
            <ol className="mt-5 border-t border-[rgb(var(--rule))]">
              {education.map((item, index) => (
                <Reveal key={`${item.title}-${index}`} delay={(index % 3) * 50}>
                  <li className="grid gap-2 border-b border-[rgb(var(--rule))] py-5 sm:grid-cols-[6rem_1fr] sm:gap-5">
                    <span className="text-xs tabular-nums text-accent-indigo">{item.period}</span>
                    <div>
                      <p className="font-display text-lg leading-snug text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.location}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div id="certifications">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Certifications</h3>
            <ul className="mt-5 border-t border-[rgb(var(--rule))]">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Reveal key={cert.title} delay={(index % 3) * 50}>
                    <li className="flex items-start gap-4 border-b border-[rgb(var(--rule))] py-5">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium leading-snug text-white">{cert.title}</p>
                        <p className="mt-1 text-xs text-slate-500">{cert.issuer}</p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
