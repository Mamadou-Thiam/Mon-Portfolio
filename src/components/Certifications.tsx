import { Award, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <div className="container relative">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Mes <span className="text-gradient">certifications</span>
            </>
          }
          subtitle="Des preuves concrètes de compétences validées par des organismes reconnus."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={(index % 3) * 90}>
              <article className="card-premium hover-glow group flex h-full items-start gap-4 p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-2xl">
                  {cert.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                    <h3 className="text-sm font-semibold leading-snug text-white">{cert.title}</h3>
                  </div>
                  <span className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${cert.badge}`}>
                    {cert.issuer}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-accent-indigo/20 via-accent-violet/10 to-accent-sky/20 p-8 text-center">
            <div className="pointer-events-none absolute inset-0 opacity-30 bg-grid" />
            <div className="relative">
              <Award className="mx-auto mb-4 h-11 w-11 text-accent-indigo" />
              <h3 className="font-display text-2xl font-bold text-white">Formation continue</h3>
              <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300">
                Toujours en quête d'apprentissage et d'amélioration de mes compétences techniques.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Certifications;
