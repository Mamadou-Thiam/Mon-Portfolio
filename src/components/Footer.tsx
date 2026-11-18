import { ArrowUp, Download, Github, Linkedin, Mail } from 'lucide-react';
import { cvFiles, navLinks, profile } from '../data/portfolio';

const secondaryLinks = [
  { id: 'education', label: 'Formation' },
  { id: 'certifications', label: 'Certifications' },
];

function Footer() {
  return (
    <footer className="rule-top bg-base-950">
      <div className="container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-display text-2xl tracking-[-0.02em] text-white">
              Mamadou <span className="italic text-accent-indigo">Thiam</span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {profile.role}. Instructeur en développement web et concepteur d’infrastructures cloud
              basé à Dakar.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-accent-indigo"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-accent-indigo"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-accent-indigo"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Navigation</h2>
            <ul className="mt-4 space-y-2.5">
              {[...navLinks, ...secondaryLinks].map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#/blog" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Journal
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Documents</h2>
            <ul className="mt-4 space-y-3">
              {cvFiles.map((cv) => (
                <li key={cv.file}>
                  <a
                    href={cv.file}
                    download={cv.download}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <Download className="h-3.5 w-3.5 text-accent-indigo" aria-hidden="true" />
                    {cv.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-xs leading-relaxed text-slate-500">
              {profile.location}
              <br />
              {profile.phone}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[rgb(var(--rule))] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
          </p>
          <p>Conçu et développé avec React, TypeScript et Tailwind CSS.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-accent-indigo"
          >
            Retour en haut
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
