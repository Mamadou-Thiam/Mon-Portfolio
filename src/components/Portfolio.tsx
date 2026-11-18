import { ArrowUpRight } from 'lucide-react';
import { highlightedProjectTitles, projects, type Project, type ProjectCategory } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function ProjectLink({ project }: { project: Project }) {
  if (!project.url) {
    return (
      <span className="text-sm text-[rgb(var(--highlight-muted))]">
        {project.context ?? 'Projet sans démonstration publique'}
      </span>
    );
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Voir ${project.title} (nouvel onglet)`}
      className="link-text text-[rgb(var(--highlight-text))] hover:!text-[rgb(var(--highlight-accent))]"
    >
      Voir le projet
      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}

function HighlightProject({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 70}>
      <article className="group">
        {project.image && (
          <img
            src={project.image}
            alt={`Couverture du projet ${project.title}`}
            loading="lazy"
            className="w-full border border-white/15 object-cover"
          />
        )}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--highlight-accent))]">
              {String(index + 1).padStart(2, '0')} — {project.context ?? project.category}
            </p>
            <h3 className="mt-2 font-display text-2xl tracking-[-0.01em] text-[rgb(var(--highlight-text))] sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-[rgb(var(--highlight-muted))] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[rgb(var(--highlight-accent))]"
            aria-hidden="true"
          />
        </div>
        <p className="mt-3 max-w-xl text-sm leading-[1.75] text-[rgb(var(--highlight-muted))]">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="tag border-[color:rgb(var(--highlight-muted))] text-[rgb(var(--highlight-muted))]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <ProjectLink project={project} />
        </div>
      </article>
    </Reveal>
  );
}

function Portfolio() {
  const highlights = highlightedProjectTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter((project): project is Project => Boolean(project));
  const others = projects.filter((project) => !project.highlight);
  const categoryOrder: ProjectCategory[] = ['Applications web', 'Gestion métier', 'Cloud & infrastructure'];
  const groupedOthers = categoryOrder
    .map((category) => ({
      category,
      items: others.filter((project) => project.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="portfolio" className="section rule-top">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projets"
            title={
              <>
                Des réalisations <span className="italic text-accent-indigo">concrètes</span>
              </>
            }
            subtitle="Applications web, outils métier et infrastructures : une sélection de projets menés en freelance, en mission ou en autodidacte."
          />
          <span className="shrink-0 text-sm text-slate-400">
            {String(projects.length).padStart(2, '0')} projets référencés
          </span>
        </div>

        {/* Sélection mise en avant : seuls ces projets ont une couverture. */}
        <Reveal>
          <div className="mt-14 bg-[rgb(var(--highlight-bg))] px-6 pb-10 pt-8 sm:px-10 sm:pb-14 sm:pt-10 lg:px-14">
            <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--highlight-text))]">
                Sélection mise en avant
              </h3>
              <span className="shrink-0 text-xs tabular-nums text-[rgb(var(--highlight-muted))]">
                {String(highlights.length).padStart(2, '0')} projets
              </span>
            </div>

            <div className="mt-9 grid gap-x-10 gap-y-14 sm:grid-cols-2">
              {highlights.map((project, index) => (
                <HighlightProject key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-[rgb(var(--rule))] pt-10">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Autres réalisations
              </h3>
              <span className="shrink-0 text-xs tabular-nums text-slate-400">
                {String(others.length).padStart(2, '0')} projets
              </span>
            </div>
            <div className="mt-6 space-y-10">
              {groupedOthers.map(({ category, items }) => (
                <div key={category}>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[rgb(var(--rule))] pb-3">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {category}
                    </h4>
                    <span className="shrink-0 text-xs tabular-nums text-slate-400">
                      {String(items.length).padStart(2, '0')} projets
                    </span>
                  </div>
                  <ul>
                    {items.map((project) => (
                      <li key={project.title} className="border-b border-[rgb(var(--rule))]">
                        <div className="group flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                          <div className="min-w-0">
                            <p className="font-display text-lg text-white">{project.title}</p>
                            <p className="mt-1 text-xs text-slate-400">{project.tags.join(' · ')}</p>
                          </div>
                          <div className="flex shrink-0 items-center gap-5">
                            {project.url && (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Voir ${project.title} (nouvel onglet)`}
                                className="text-slate-400 transition-colors hover:text-accent-indigo"
                              >
                                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                              </a>
                            )}
                            {!project.url && <span className="text-xs text-slate-400">Projet local</span>}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Portfolio;
