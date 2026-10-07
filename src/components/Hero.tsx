import { useEffect, useRef } from 'react';
import { ArrowDown, Code2, Cloud, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { profile, techMarquee } from '../data/portfolio';
import MagneticButton from './ui/MagneticButton';
import CvDownloadButton from './ui/CvDownloadButton';
import Reveal from './ui/Reveal';
import Particles from './effects/Particles';

function Hero() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layer = layerRef.current;
    if (!layer) return;

    let raf = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const loop = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      layer.querySelectorAll<HTMLElement>('[data-depth]').forEach((el) => {
        const depth = Number(el.dataset.depth ?? 0);
        el.style.transform = `translate3d(${current.x * depth}px, ${current.y * depth}px, 0)`;
      });
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-accent-indigo/20 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent-sky/15 blur-[120px] animate-pulse-glow" />
      <div className="absolute inset-0">
        <Particles />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Left: copy */}
          <div ref={layerRef} className="text-center lg:text-left">
            <Reveal>
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-sm lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.available ? 'Disponible pour de nouveaux projets' : 'En mission'}
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
                <span data-depth="8" className="block">
                  {profile.firstName}
                </span>
                <span data-depth="16" className="block text-gradient-animated">
                  {profile.lastName}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 text-lg font-medium text-slate-200 sm:text-xl lg:text-2xl">
                MERN Stack Developer
                <span className="mx-2 text-accent-indigo">&</span>
                <span className="text-accent-sky">Cloud / DevOps Engineer</span>
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={340} className="relative z-50">
              <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
                <MagneticButton href="#portfolio">
                  <Sparkles className="h-4 w-4" />
                  Voir mes projets
                </MagneticButton>
                <MagneticButton href="#contact" variant="ghost">
                  <Mail className="h-4 w-4" />
                  Me contacter
                </MagneticButton>
                <CvDownloadButton />
              </div>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400 lg:justify-start">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-accent-indigo" />
                  {profile.email}
                </a>
                <a href={profile.phoneHref} className="flex items-center gap-2 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-accent-indigo" />
                  {profile.phone}
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-indigo" />
                  {profile.location}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right: avatar */}
          <Reveal delay={200} direction="scale" className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-square">
              <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#6366F1,#4F46E5,#0EA5E9,#6366F1)] opacity-70 blur-[2px]" />
              <div className="absolute inset-[6px] rounded-full bg-base-950" />
              <div className="absolute inset-[10px] overflow-hidden rounded-full border border-white/10">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <div
                data-depth="-22"
                className="absolute -left-4 top-8 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-base-900/80 px-4 py-3 backdrop-blur-xl sm:-left-8"
              >
                <Code2 className="h-5 w-5 text-accent-sky" />
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">MERN Stack</p>
                  <p className="text-[10px] text-slate-400">Full-Stack</p>
                </div>
              </div>

              <div
                data-depth="24"
                className="absolute -right-3 bottom-10 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-base-900/80 px-4 py-3 backdrop-blur-xl sm:-right-8"
              >
                <Cloud className="h-5 w-5 text-accent-violet" />
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Cloud & DevOps</p>
                  <p className="text-[10px] text-slate-400">AWS · K8s</p>
                </div>
              </div>

              <div
                data-depth="-14"
                className="absolute -bottom-3 left-6 rounded-2xl border border-white/10 bg-base-900/80 px-4 py-2.5 backdrop-blur-xl"
              >
                <p className="font-display text-sm font-bold text-gradient">10+ projets</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tech marquee */}
        <Reveal delay={500} className="mt-16">
          <div className="mask-fade-x overflow-hidden">
            <div className="flex w-max animate-marquee gap-3">
              {[...techMarquee, ...techMarquee].map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-white sm:flex"
        aria-label="Défiler vers le bas"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}

export default Hero;
