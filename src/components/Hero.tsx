import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import { cvFiles, profile } from '../data/portfolio';
import Reveal from './ui/Reveal';

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16 sm:pt-32 lg:pt-24">
      <div className="container grid items-center gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        <div className="max-w-3xl">
          <Reveal delay={70}>
            <h1 className="mt-12">
              <span className="block font-display text-[3.35rem] leading-[0.98] tracking-[-0.035em] text-white sm:text-7xl lg:text-[5.4rem]">
                Mamadou <span className="italic">Thiam</span>
              </span>
              <span className="mt-6 block max-w-2xl text-xl font-medium leading-snug text-slate-200 sm:text-2xl">
                Ingénieur Systèmes, Réseaux &amp; Cloud
                <span className="mx-2 text-slate-500">|</span>
                Développeur Full Stack
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl text-base leading-[1.8] text-slate-400 sm:text-lg">
              Je conçois des applications web MERN et je construis l’infrastructure qui les héberge.
              Instructeur en développement web chez GoMyCode, titulaire d'un Master en Systèmes,
              Réseaux &amp; Cloud à l’IAM, je mène également des projets freelance à Dakar.
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#portfolio" className="btn-primary">
                Découvrir mes projets
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={cvFiles[0].file} download={cvFiles[0].download} className="btn-quiet">
                <Download className="h-4 w-4" aria-hidden="true" />
                Télécharger mon CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-400">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent-indigo"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent-indigo"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
              <span className="text-slate-500">{profile.location}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="hidden lg:block">
          <figure className="border border-[rgb(var(--rule))] p-2">
            <img
              src={profile.avatar}
              alt="Portrait de Mamadou THIAM"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <figcaption className="pt-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Mamadou Thiam — Dakar
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
