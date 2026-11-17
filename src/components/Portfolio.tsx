import { useState } from 'react';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { projects, projectCategories, type Project, type ProjectCategory } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';

type ProjectFilter = ProjectCategory | 'Tous';

const filters: ProjectFilter[] = ['Tous', ...projectCategories];

function getHostname(url?: string) {
  if (!url) return 'projet local';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function getInitials(title: string) {
  return title
    .split(/[\s—–-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-white/10 transition-colors duration-500 group-hover/tilt:border-white/20"
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
          {getHostname(project.url)}
        </span>
      </div>

      <div className="relative flex h-40 items-center justify-center">
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div
          className="relative flex items-center justify-center rounded-2xl border p-4"
          style={{ background: project.colorBg, borderColor: `${project.color}40` }}
        >
          <Icon className="project-accent h-9 w-9" style={{ color: project.color }} />
        </div>
        <span
          className="project-accent absolute bottom-3 right-4 font-display text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: project.color }}
        >
          {project.tags[0]}
        </span>
      </div>
    </div>
  );
}

function FeaturedVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div
      className="relative flex min-h-[300px] flex-col justify-between overflow-hidden border-t border-white/10 p-7 sm:p-9 lg:min-h-full lg:border-l lg:border-t-0"
      style={{
        background: `radial-gradient(130% 120% at 80% 10%, ${project.colorBg}, transparent 65%), rgb(var(--rgb-base-900))`,
      }}
    >
      <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgb(var(--rgb-white) / 0.12) 0 1px, transparent 1px 18px)' }} />

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />
        </div>
        <span
          className="truncate rounded-full px-3 py-1 text-[10px] tracking-wide text-slate-400"
          style={{ background: 'var(--url-pill-bg)' }}
        >
          {getHostname(project.url)}
        </span>
      </div>

      <div className="relative flex flex-1 items-center justify-center py-8">
        <div
          className="flex h-44 w-44 items-center justify-center rounded-full border"
          style={{ borderColor: `${project.color}55`, boxShadow: `0 0 90px -35px ${project.color}` }}
        >
          <span className="project-accent font-serif text-5xl italic" style={{ color: project.color }}>
            {getInitials(project.title)}
          </span>
        </div>
        <Icon
          className="project-accent absolute bottom-10 right-10 h-6 w-6 opacity-70"
          style={{ color: project.color }}
        />
      </div>

      <div className="relative flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
        <span>{project.category}</span>
        <span>{project.tags[0]}</span>
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

function ProjectLinks({ project, label = 'Voir le site' }: { project: Project; label?: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} : ${project.title} (nouvel onglet)`}
          className="inline-flex items-center gap-1.5 rounded-full border border-accent-indigo/40 bg-accent-indigo/15 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-indigo/25 hover:shadow-glow"
        >
          {label}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Voir le code de ${project.title} sur GitHub (nouvel onglet)`}
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
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('Tous');

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProject = projects.find((project) => project.featured);
  const visibleFeatured =
    featuredProject && filteredProjects.includes(featuredProject) ? featuredProject : undefined;
  const gridProjects = visibleFeatured
    ? filteredProjects.filter((project) => project !== visibleFeatured)
    : filteredProjects;

  return (
    <section id="portfolio" className="section-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-32 h-96 w-96 rounded-full bg-accent-indigo/10 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Réalisations"
          title={
            <>
              Mes <span className="text-gradient">projets</span>
            </>
          }
          subtitle="Du site vitrine à l'infrastructure cloud : une sélection de solutions conçues pour être utiles, robustes et durables."
        />

        {/* Filtres par domaine */}
        <Reveal delay={180} className="mt-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filtrer les projets par domaine"
            >
              {filters.map((filter) => {
                const count =
                  filter === 'Tous'
                    ? projects.length
                    : projects.filter((project) => project.category === filter).length;
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(filter)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? 'border-accent-indigo/60 bg-accent-indigo/15 text-white shadow-glow'
                        : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {filter}
                    <span
                      className={`rounded-full px-1.5 text-xs ${
                        isActive ? 'bg-white/15' : 'bg-white/5'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="shrink-0 text-sm text-slate-500" aria-live="polite">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} affiché
              {filteredProjects.length > 1 ? 's' : ''}
            </p>
          </div>
        </Reveal>

        {/* Projet à la une */}
        {visibleFeatured && (
          <Reveal delay={100} className="mt-8">
            <TiltCard maxTilt={4} className="h-full">
              <article className="card-premium hover-glow overflow-hidden">
                <div className="grid lg:grid-cols-[1.05fr_1fr]">
                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="eyebrow">
                        <Sparkles className="h-3.5 w-3.5" />
                        À la une
                      </span>
                      <span className="chip">Dernière réalisation</span>
                    </div>
                    <h3 className="mt-7 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                      {visibleFeatured.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                      {visibleFeatured.description}
                    </p>
                    <div className="mt-6">
                      <ProjectTags project={visibleFeatured} />
                    </div>
                    <ProjectLinks project={visibleFeatured} label="Découvrir le site" />
                  </div>
                  <FeaturedVisual project={visibleFeatured} />
                </div>
              </article>
            </TiltCard>
          </Reveal>
        )}

        {/* Grille des projets */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gridProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 80}>
              <TiltCard maxTilt={6} className="h-full">
                <article className="card-premium hover-glow flex h-full flex-col p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="font-display text-xs font-semibold tracking-[0.2em] text-slate-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                      {project.category}
                    </span>
                  </div>
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

        <Reveal delay={120} className="mt-14">
          <div className="flex flex-col items-center gap-5 border-t border-white/10 pt-10 text-center">
            <p className="text-sm text-slate-500">
              <span className="font-semibold text-slate-200">{projects.length}</span> projets réalisés
              <span className="mx-3 hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
              <span className="font-semibold text-slate-200">{projectCategories.length}</span> domaines
              d'expertise — et ce n'est qu'un début.
            </p>
            <a href="#contact" className="btn-ghost !px-6 !py-2.5 text-sm">
              Un projet en tête ? Parlons-en
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Portfolio;
