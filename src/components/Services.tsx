import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function Services() {
  return (
    <section id="services" className="section-shell bg-base-900/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Expertise"
          title={
            <>
              Des services <span className="text-gradient">de bout en bout</span>
            </>
          }
          subtitle="Du front à l'infrastructure : une offre complète pour transformer vos idées en produits fiables et scalables."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article className="card-premium hover-glow group relative h-full p-7">
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-accent-sky opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Découvrir
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.8), transparent 70%)' }}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
