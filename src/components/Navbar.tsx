import { useEffect, useMemo, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks } from '../data/portfolio';
import { useActiveSection, useScrolled } from '../hooks/useActiveSection';

function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(40);
  const ids = useMemo(() => navLinks.map((link) => link.id), []);
  const active = useActiveSection(ids);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-base-950/70 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container flex h-16 items-center justify-between lg:h-20">
        <button
          onClick={() => goTo('home')}
          className="group flex items-center gap-2.5 font-display text-lg font-bold text-white"
          aria-label="Retour en haut"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-indigo transition-colors group-hover:border-accent-indigo/50">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="hidden sm:inline">
            Mamadou<span className="text-gradient">.dev</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => goTo(link.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px origin-center bg-brand-gradient transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => goTo('contact')}
            className="hidden rounded-full border border-accent-indigo/40 bg-accent-indigo/10 px-5 py-2.5 text-sm font-semibold text-indigo-200 transition-all hover:bg-accent-indigo/20 hover:shadow-glow lg:inline-flex"
          >
            Discutons
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-base-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[34rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container flex flex-col py-4">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              style={{ transitionDelay: `${open ? index * 40 : 0}ms` }}
              className={`transform transition-all duration-300 ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
            >
              <button
                onClick={() => goTo(link.id)}
                className={`flex w-full items-center justify-between border-b border-white/5 py-3.5 text-left text-base font-medium ${
                  active === link.id ? 'text-accent-sky' : 'text-slate-300'
                }`}
              >
                {link.label}
                <span className="text-xs text-slate-600">0{index + 1}</span>
              </button>
            </li>
          ))}
          <li className="pt-4">
            <button onClick={() => goTo('contact')} className="btn-primary w-full">
              Me contacter
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
