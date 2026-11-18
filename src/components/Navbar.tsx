import { useEffect, useMemo, useRef, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { cvFiles, navLinks } from '../data/portfolio';
import { useActiveSection, useScrolled } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import { navigateTo } from '../utils/navigation';
import MobileBottomNav from './MobileBottomNav';

function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  const ids = useMemo(() => navLinks.filter((link) => link.id !== 'blog').map((link) => link.id), []);
  const active = useActiveSection(ids);
  const { theme, toggleTheme } = useTheme();
  const firstLinkRef = useRef<HTMLButtonElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const goTo = (id: string) => {
    setOpen(false);
    navigateTo(id);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-[rgb(var(--rule))] bg-base-950/95 backdrop-blur-sm'
          : 'border-b border-transparent bg-base-950/80'
      }`}
    >
      <nav className="container flex h-[72px] items-center justify-between gap-4" aria-label="Navigation principale">
        <button
          onClick={() => goTo('home')}
          className="group flex items-center gap-3 font-display text-xl tracking-[-0.02em] text-white"
          aria-label="Mamadou THIAM — retour à l'accueil"
        >
          <span className="h-2 w-2 rounded-full bg-accent-indigo transition-transform duration-300 group-hover:scale-125" />
          <span>
            Mamadou <span className="italic">Thiam</span>
          </span>
        </button>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => goTo(link.id)}
                aria-current={active === link.id ? 'page' : undefined}
                className={`text-sm transition-colors duration-200 ${
                  active === link.id ? 'text-accent-indigo' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={cvFiles[0].file}
            download={cvFiles[0].download}
            className="hidden items-center gap-2 border border-[rgb(var(--rule))] px-4 py-2 text-xs font-medium text-white transition-colors hover:border-accent-indigo hover:text-accent-indigo sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            CV
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center text-slate-400 transition-colors hover:text-accent-indigo"
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
          >
            {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="hidden h-9 w-9 items-center justify-center text-white md:flex lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile : panneau plein écran, sobre et hiérarchisé */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[72px] bottom-0 hidden overflow-y-auto border-t border-[rgb(var(--rule))] bg-base-950 transition-opacity duration-200 md:block lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="container flex min-h-full flex-col py-8" aria-label="Navigation mobile">
          <ul className="flex-1">
            {navLinks.map((link, index) => (
              <li key={link.id} className="border-b border-[rgb(var(--rule))]">
                <button
                  ref={index === 0 ? firstLinkRef : undefined}
                  type="button"
                  tabIndex={open ? 0 : -1}
                  onClick={() => goTo(link.id)}
                  className="flex w-full items-baseline justify-between py-4 text-left"
                >
                  <span
                    className={`font-display text-3xl tracking-[-0.02em] ${
                      active === link.id ? 'text-accent-indigo' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                  <span className="text-[11px] tabular-nums text-slate-500">0{index + 1}</span>
                </button>
              </li>
            ))}
          </ul>
          <a
            href={cvFiles[0].file}
            download={cvFiles[0].download}
            tabIndex={open ? 0 : -1}
            className="btn-primary mt-8 self-start"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Télécharger mon CV
          </a>
        </nav>
      </div>
      </header>

      <MobileBottomNav active={active} onNavigate={goTo} />
    </>
  );
}

export default Navbar;
