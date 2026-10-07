import { ExternalLink, Github } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-white/10"
      style={{
        background: `radial-gradient(120% 120% at 0% 0%, ${project.colorBg}, transparent 60%), rgb(var(--rgb-base-900))`,
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span
          className="ml-3 truncate rounded-md px-3 py-1 text-[10px] text-slate-500"
          style={{ background: 'var(--url-pill-bg)' }}
        >
          {project.title.toLowerCase().replace(/\s+/g, '-')}
        </span>
      </div>

      <div className="relative flex items-center justify-center h-44">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgb(var(--rgb-white) / 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--rgb-white) / 0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="relative flex items-center justify-center rounded-2xl border border-white/10 p-5"
          style={{ background: project.colorBg, boxShadow: `0 0 60px ${project.colorBg}` }}
        >
          <Icon className="project-accent h-10 w-10" style={{ color: project.color }} />
        </div>
        <span
          className="project-accent absolute bottom-3 right-4 font-display text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: project.color }}
        >
          {project.tags[0]}
        </span>
      </div>
    </div>
  );
}

function ProjectTags({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="project-accent rounded-full border px-3 py-1 text-xs font-medium"
          style={{ borderColor: `${project.color}40`, backgroundColor: project.colorBg, color: project.color }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-accent-indigo/40 bg-accent-indigo/15 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-indigo/25 hover:shadow-glow"
        >
          Live Demo
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-white/30 hover:text-white"
        >
          <Github className="h-3.5 w-3.5" />
          GitHub
        </a>
      )}
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Réalisations"
          title={
            <>
              Mes <span className="text-gradient">projets</span>
            </>
          }
          subtitle="Des solutions concrètes mêlant développement web, cloud et applications métier."
        />

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 90}>
              <TiltCard maxTilt={7} className="h-full">
                <article className="card-premium hover-glow flex h-full flex-col p-5">
                  <ProjectVisual project={project} />
                  <div className="flex flex-1 flex-col pt-5">
                    <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover/tilt:text-indigo-200">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4">
                      <ProjectTags project={project} />
                    </div>
                    <ProjectLinks project={project} />
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-14 text-center">
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-300">{projects.length}</span> projets réalisés
            — et ce n'est qu'un début.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Portfolio;
