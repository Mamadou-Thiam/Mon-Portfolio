import { Code2, Cloud, GraduationCap, Server, Sparkles } from 'lucide-react';
import { stats } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import Counter from './ui/Counter';

const domains = [
  {
    icon: Code2,
    title: 'Développement Web',
    text: 'Applications MERN performantes, du design system à la mise en production.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    text: 'Infrastructure as Code, CI/CD et environnements cloud scalables.',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    text: 'Virtualisation, haute disponibilité, stockage distribué et supervision.',
  },
  {
    icon: GraduationCap,
    title: 'Formation',
    text: "Transmission des bonnes pratiques et mentorat de nouveaux talents.",
  },
];

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container relative">
        <SectionHeading
          eyebrow="À propos"
          title={
            <>
              Un profil hybride <span className="text-gradient">Web, Cloud & DevOps</span>
            </>
          }
          subtitle="Je conçois des produits web complets et l'infrastructure qui les fait tourner : de l'interface utilisateur jusqu'au déploiement automatisé."
        />

        {/* Domains */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, index) => (
            <Reveal key={domain.title} delay={index * 90}>
              <div className="card-premium hover-glow group h-full p-6">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent-indigo/25 bg-accent-indigo/10 text-accent-indigo transition-colors group-hover:bg-accent-indigo/20">
                  <domain.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{domain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{domain.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-base-950/60 p-7 text-center">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-10 flex justify-center">
          <p className="flex items-center gap-2 text-sm text-slate-500">
            <Sparkles className="h-4 w-4 text-accent-indigo" />
            Toujours en veille, toujours en apprentissage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
