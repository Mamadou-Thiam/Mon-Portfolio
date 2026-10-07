import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Moon, Play, Sun, Terminal, X } from 'lucide-react';
import { profile } from '../data/portfolio';
import { articleCategories, blogArticles, type ArticleCategory, type BlogArticle } from '../data/blogArticles';
import { useTheme } from '../hooks/useTheme';
import WhatsAppIcon from '../components/WhatsAppIcon';

const badgeStyles: Record<ArticleCategory, string> = {
  'Intelligence Artificielle': 'bg-accent-indigo/40 text-white border-accent-indigo/60 shadow-glow',
  Développement: 'bg-emerald-500/40 text-white border-emerald-500/60',
  DevOps: 'bg-accent-sky/40 text-white border-accent-sky/60',
  Événements: 'bg-amber-500/40 text-white border-amber-500/60',
};

type Filter = 'Tous' | ArticleCategory;

function BlogPage() {
  const [filter, setFilter] = useState<Filter>('Tous');
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const goHome = () => {
    window.location.hash = '';
  };

  const visible = filter === 'Tous' ? blogArticles : blogArticles.filter((a) => a.category === filter);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-base-950/70 backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between lg:h-20">
          <button
            onClick={goHome}
            className="group flex items-center gap-2.5 font-display text-lg font-bold text-white"
            aria-label="Retour à l'accueil"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-indigo transition-colors group-hover:border-accent-indigo/50">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="hidden sm:inline">
              Mamadou<span className="text-gradient">.dev</span>
            </span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href={profile.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discuter sur WhatsApp"
              title="Discuter sur WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:shadow-glow"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>

            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all hover:border-accent-indigo/50 hover:text-accent-indigo"
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              aria-pressed={theme === 'light'}
              title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              <span className="relative block h-5 w-5">
                <Sun
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                    theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                  }`}
                />
                <Moon
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                    theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                  }`}
                />
              </span>
            </button>

            <button
              onClick={goHome}
              className="hidden items-center gap-2 rounded-full border border-accent-indigo/40 bg-accent-indigo/10 px-5 py-2.5 text-sm font-semibold text-indigo-200 transition-all hover:bg-accent-indigo/20 hover:shadow-glow lg:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" />
              Accueil
            </button>
          </div>
        </nav>
      </header>

      <main>
        {article ? (
          <ArticleView
            post={article}
            articles={blogArticles}
            onBack={() => setArticle(null)}
            onOpen={(post) => setArticle(post)}
            onLightbox={setLightbox}
          />
        ) : (
          <>
            <section className="section-shell bg-base-950 pb-10 pt-32 lg:pt-40">
              <div className="container">
                <span className="eyebrow mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-indigo" />
                  Le blog
                </span>
                <h1 className="font-display max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                  IA, <span className="text-gradient">développement</span> & DevOps
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                  Articles, retours d'expérience et conseils concrets sur mon métier de développeur
                  full-stack et d'encadrant de projets numériques.
                </p>
              </div>
            </section>

            <section className="section-shell bg-base-950 pt-0">
              <div className="container">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {(['Tous', ...articleCategories] as Filter[]).map((item) => (
                      <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          filter === item
                            ? 'border-transparent bg-brand-gradient text-[#fff] shadow-glow'
                            : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-accent-indigo/40 hover:text-white'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                    {visible.length} article{visible.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {visible.map((post) => (
                    <article key={post.id} className="card-premium hover-glow group flex flex-col overflow-hidden p-0">
                      <button
                        onClick={() => setArticle(post)}
                        className="relative block h-52 w-full overflow-hidden text-left"
                        aria-label={`Lire l'article : ${post.title}`}
                      >
                        <img
                          src={post.cover}
                          alt={post.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-base-950/60 via-transparent to-transparent" />
                        <span
                          className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[post.category]}`}
                        >
                          {post.category}
                        </span>
                      </button>

                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <BookOpen className="h-3.5 w-3.5" />
                            {post.readTime} de lecture
                          </span>
                        </div>

                        <button onClick={() => setArticle(post)} className="mt-2 text-left">
                          <h2 className="font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-indigo-200">
                            {post.title}
                          </h2>
                        </button>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>

                        <button
                          onClick={() => setArticle(post)}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-sky transition-colors hover:text-indigo-200"
                        >
                          Lire l'article
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-white/10 bg-base-950 py-10">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Mamadou THIAM — Développeur full-stack
          </p>
          <button
            onClick={goHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-sky transition-colors hover:text-indigo-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </button>
        </div>
      </footer>

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-base-950/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo agrandie"
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-accent-indigo/50 hover:text-accent-indigo"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt="Photo agrandie"
            className="max-h-[90vh] max-w-full rounded-2xl border border-white/10 object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function ArticleView({
  post,
  articles,
  onBack,
  onOpen,
  onLightbox,
}: {
  post: BlogArticle;
  articles: BlogArticle[];
  onBack: () => void;
  onOpen: (post: BlogArticle) => void;
  onLightbox: (src: string) => void;
}) {
  const [progress, setProgress] = useState(0);

  const index = articles.findIndex((item) => item.id === post.id);
  const previous = index > 0 ? articles[index - 1] : null;
  const next = index >= 0 && index < articles.length - 1 ? articles[index + 1] : null;
  const related = articles.filter((item) => item.id !== post.id && item.category === post.category).slice(0, 3);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [post.id]);

  return (
    <section className="section-shell bg-base-950 pt-28 lg:pt-36">
      <div className="fixed inset-x-0 top-16 z-40 h-[3px] bg-white/5 lg:top-20" aria-hidden="true">
        <div
          className="h-full bg-brand-gradient transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="container max-w-4xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-sky transition-colors hover:text-indigo-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Tous les articles
        </button>

        <div className="mt-8">
          <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[post.category]}`}>
            {post.category}
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h2>
          <div className="mt-4 flex items-center gap-4 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              {post.readTime} de lecture
            </span>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <img src={post.cover} alt={post.title} className="h-72 w-full object-cover sm:h-96" />
        </div>

        <div className="mt-12 space-y-10">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-display text-2xl font-semibold text-white">{section.heading}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-400">{section.text}</p>
              {section.list && (
                <ul className="mt-4 space-y-2.5">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {post.video && (
          <div className="mt-12">
            <div className="mb-4 flex items-center gap-2 text-white">
              <Play className="h-4 w-4 text-accent-indigo" />
              <h3 className="font-display text-xl font-semibold">Vidéo du moment</h3>
            </div>
            <video
              src={post.video}
              controls
              preload="metadata"
              className="aspect-video w-full rounded-2xl border border-white/10 bg-base-900"
            />
          </div>
        )}

        {post.gallery && (
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold text-white">Galerie photos</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {post.gallery.map((src) => (
                <button
                  key={src}
                  onClick={() => onLightbox(src)}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
                  aria-label="Agrandir la photo"
                >
                  <img
                    src={src}
                    alt="Photo de l'événement"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {(previous || next) && (
          <div className="mt-14 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
            {previous ? (
              <button
                onClick={() => onOpen(previous)}
                className="card-premium group flex flex-col items-start gap-2 p-5 text-left"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                  Article précédent
                </span>
                <span className="font-display text-base font-semibold text-white transition-colors group-hover:text-indigo-200">
                  {previous.title}
                </span>
              </button>
            ) : (
              <span aria-hidden="true" />
            )}

            {next && (
              <button
                onClick={() => onOpen(next)}
                className="card-premium group flex flex-col items-end gap-2 p-5 text-right"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Article suivant
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="font-display text-base font-semibold text-white transition-colors group-hover:text-indigo-200">
                  {next.title}
                </span>
              </button>
            )}
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold text-white">À lire ensuite</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onOpen(item)}
                  className="card-premium group flex flex-col overflow-hidden p-0 text-left"
                >
                  <span className="relative block h-32 w-full overflow-hidden">
                    <img
                      src={item.cover}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-base-950/70 via-base-950/10 to-transparent" />
                  </span>
                  <span className="flex flex-1 flex-col gap-1 p-4">
                    <span className={`self-start rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${badgeStyles[item.category]}`}>
                      {item.category}
                    </span>
                    <span className="font-display text-sm font-semibold leading-snug text-white transition-colors group-hover:text-indigo-200">
                      {item.title}
                    </span>
                    <span className="text-xs text-slate-500">{item.readTime} de lecture</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 border-t border-white/10 pt-8">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-[#fff] shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Retour à la liste des articles
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;