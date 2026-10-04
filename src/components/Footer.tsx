import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone, Terminal } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';
import MagneticButton from './ui/MagneticButton';
import Reveal from './ui/Reveal';

const socials = [
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
];

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: profile.location, href: undefined },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-base-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-indigo/50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent-indigo/10 blur-[120px]" />

      <div className="container relative py-16">
        {/* CTA band */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent-indigo/20 via-accent-violet/10 to-accent-sky/15 p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
            <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
              <div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Prêt à construire quelque chose de <span className="text-gradient">grand</span> ?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-300">
                  Discutons de votre projet ou de votre prochaine opportunité.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <MagneticButton href="#contact">Démarrer un projet</MagneticButton>
                <MagneticButton href="#portfolio" variant="ghost">
                  Voir mes projets
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 font-display text-xl font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-indigo">
                <Terminal className="h-4 w-4" />
              </span>
              Mamadou<span className="text-gradient">.dev</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {profile.role}. De l'idée à la production, je conçois des expériences web et des
              infrastructures à la hauteur de vos ambitions.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-accent-indigo/50 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h3>
            <ul className="mt-4 space-y-3">
              {contactLinks.map((item) => {
                const inner = (
                  <span className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-white">
                    <item.icon className="h-4 w-4 flex-shrink-0 text-accent-indigo" />
                    {item.label}
                  </span>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1.5">
            Conçu &amp; développé avec
            <span className="text-gradient font-semibold">React · TypeScript · Tailwind</span>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
          >
            Retour en haut
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
