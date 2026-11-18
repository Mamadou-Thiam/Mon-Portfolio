import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Moon, Play, Sun, X } from 'lucide-react';
import { articleCategories, blogArticles, type ArticleCategory, type BlogArticle } from '../data/blogArticles';
import { useTheme } from '../hooks/useTheme';
import { navigateTo } from '../utils/navigation';
import MobileBottomNav from '../components/MobileBottomNav';
import WhatsAppFloat from '../components/WhatsAppFloat';

type Filter = 'Tous' | ArticleCategory;

function BlogPage() {
  const [filter, setFilter] = useState<Filter>('Tous');
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const goHome = () => {
    window.location.hash = '';
  };

  const handleNavigate = (id: string) => {
    if (id === 'blog') {
      setArticle(null);
      window.scrollTo(0, 0);
      return;
    }
    navigateTo(id);
  };

  const visible = filter === 'Tous' ? blogArticles : blogArticles.filter((item) => item.category === filter);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
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
    <div className="min-h-screen overflow-x-clip bg-base-950 pb-20 md:pb-0">
      <a href="#journal-content" className="skip-link">
        Aller au contenu
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgb(var(--rule))] bg-base-950/95">
        <nav className="container flex h-[72px] items-center justify-between gap-4" aria-label="Navigation du journal">
          <button
            onClick={goHome}
            className="flex items-center font-display text-xl tracking-[-0.02em] text-white"
            aria-label="Mamadou THIAM — retour à l'accueil"
          >
            <span>
              Mamadou <span className="italic">Thiam</span>
            </span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center text-slate-400 transition-colors hover:text-accent-indigo"
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              aria-pressed={theme === 'dark'}
              title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              <span key={theme} className="inline-flex animate-icon-in">
                {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
              </span>
            </button>

            <button onClick={goHome} className="btn-quiet hidden px-4 py-2 text-xs sm:inline-flex">
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Accueil
            </button>
          </div>
        </nav>
      </header>

      <main id="journal-content">
        {article ? (
          <ArticleView
            post={article}
            articles={blogArticles}
            onBack={() => setArticle(null)}
            onOpen={(post) => setArticle(post)}
            onLightbox={setLightbox}
          />
        ) : (
          <div className="container pb-24 pt-[120px]">
            <span className="eyebrow">Journal</span>
            <h1 className="kicker mt-5 max-w-3xl">
              IA, <span className="italic text-accent-indigo">développement</span> &amp; DevOps
            </h1>
            <p className="lead mt-5">
              Articles, retours d'expérience et conseils concrets sur mon métier de développeur full-stack
              et d'encadrant de projets numériques.
            </p>

            <div className="mt-14 flex flex-wrap items-baseline justify-between gap-4 border-b border-[rgb(var(--rule))] pb-4">
              <div className="flex flex-wrap gap-2">
                {(['Tous', ...articleCategories] as Filter[]).map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item)}
                    aria-pressed={filter === item}
                    className={`border px-3 py-1.5 text-xs font-medium transition-colors ${
                      filter === item
                        ? 'border-accent-indigo text-accent-indigo'
                        : 'border-[rgb(var(--rule))] text-slate-400 hover:border-accent-indigo hover:text-accent-indigo'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <span className="shrink-0 text-xs tabular-nums text-slate-500">
                {visible.length} article{visible.length > 1 ? 's' : ''}
              </span>
            </div>

            <div className="mt-2">
              {visible.map((post) => (
                <article
                  key={post.id}
                  className="group grid gap-6 border-b border-[rgb(var(--rule))] py-8 lg:grid-cols-[240px_1fr] lg:gap-10"
                >
                  <button
                    onClick={() => setArticle(post)}
                    aria-label={`Lire l'article : ${post.title}`}
                    className="block text-left"
                  >
                    <img
                      src={post.cover}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="aspect-[3/2] w-full border border-[rgb(var(--rule))] object-cover"
                    />
                  </button>

                  <div>
                    <span className="eyebrow">{post.category}</span>
                    <h2 className="mt-3 font-display text-2xl tracking-[-0.01em] text-white sm:text-3xl">
                      <button onClick={() => setArticle(post)} className="text-left transition-colors hover:text-accent-indigo">
                        {post.title}
                      </button>
                    </h2>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.readTime} de lecture
                      </span>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-[1.75] text-slate-400">{post.excerpt}</p>
                    <button onClick={() => setArticle(post)} className="link-text mt-5">
                      Lire l'article
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-[rgb(var(--rule))]">
        <div className="container flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Mamadou THIAM — Développeur full-stack
          </p>
          <button onClick={goHome} className="link-text">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Retour à l'accueil
          </button>
        </div>
      </footer>

      <MobileBottomNav active="blog" onNavigate={handleNavigate} />
      <WhatsAppFloat />

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-base-950 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo agrandie"
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-accent-indigo"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightbox}
            alt="Photo agrandie"
            className="max-h-[90vh] max-w-full border border-[rgb(var(--rule))] object-contain"
            onClick={(event) => event.stopPropagation()}
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
  const index = articles.findIndex((item) => item.id === post.id);
  const previous = index > 0 ? articles[index - 1] : null;
  const next = index >= 0 && index < articles.length - 1 ? articles[index + 1] : null;
  const related = articles.filter((item) => item.id !== post.id && item.category === post.category).slice(0, 3);

  return (
    <article className="container pb-24 pt-[120px]">
      <button onClick={onBack} className="link-text">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Tous les articles
      </button>

      <div className="mx-auto mt-10 max-w-3xl">
        <span className="eyebrow">{post.category}</span>
        <h2 className="kicker mt-4">{post.title}</h2>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            {post.readTime} de lecture
          </span>
        </div>

        <img
          src={post.cover}
          alt={post.title}
          className="mt-10 aspect-[3/2] w-full border border-[rgb(var(--rule))] object-cover"
        />

        <div className="mt-12 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="font-display text-2xl tracking-[-0.01em] text-white">{section.heading}</h3>
              <p className="mt-4 text-base leading-[1.75] text-slate-400">{section.text}</p>
              {section.list && (
                <ul className="mt-4 space-y-2.5">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent-indigo" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {post.video && (
          <div className="mt-12">
            <div className="mb-4 flex items-center gap-2 text-white">
              <Play className="h-4 w-4 text-accent-indigo" aria-hidden="true" />
              <h3 className="font-display text-xl">Vidéo du moment</h3>
            </div>
            <video
              src={post.video}
              controls
              preload="metadata"
              className="w-full border border-[rgb(var(--rule))] bg-base-900"
            />
          </div>
        )}

        {post.gallery && (
          <div className="mt-12">
            <h3 className="font-display text-xl text-white">Galerie photos</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {post.gallery.map((src) => (
                <button
                  key={src}
                  onClick={() => onLightbox(src)}
                  className="aspect-square border border-[rgb(var(--rule))]"
                  aria-label="Agrandir la photo"
                >
                  <img
                    src={src}
                    alt="Photo de l'événement"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {(previous || next) && (
          <div className="mt-14 grid gap-4 border-t border-[rgb(var(--rule))] pt-8 sm:grid-cols-2">
            {previous ? (
              <button
                onClick={() => onOpen(previous)}
                className="border border-[rgb(var(--rule))] p-5 text-left transition-colors hover:border-accent-indigo"
              >
                <span className="eyebrow">Article précédent</span>
                <span className="mt-2 block font-display text-base text-white">{previous.title}</span>
              </button>
            ) : (
              <span aria-hidden="true" />
            )}

            {next && (
              <button
                onClick={() => onOpen(next)}
                className="border border-[rgb(var(--rule))] p-5 text-right transition-colors hover:border-accent-indigo"
              >
                <span className="eyebrow">Article suivant</span>
                <span className="mt-2 block font-display text-base text-white">{next.title}</span>
              </button>
            )}
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-xl text-white">À lire ensuite</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onOpen(item)}
                  className="border border-[rgb(var(--rule))] text-left transition-colors hover:border-accent-indigo"
                >
                  <img
                    src={item.cover}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="aspect-[3/2] w-full border-b border-[rgb(var(--rule))] object-cover"
                  />
                  <span className="block p-4">
                    <span className="eyebrow">{item.category}</span>
                    <span className="mt-2 block font-display text-sm leading-snug text-white">{item.title}</span>
                    <span className="mt-1 block text-xs text-slate-500">{item.readTime} de lecture</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 border-t border-[rgb(var(--rule))] pt-8">
          <button onClick={onBack} className="btn-quiet">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Tous les articles
          </button>
        </div>
      </div>
    </article>
  );
}

export default BlogPage;
