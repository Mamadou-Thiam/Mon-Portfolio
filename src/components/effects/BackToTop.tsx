import { ArrowUp } from 'lucide-react';
import { useScrolled } from '../../hooks/useActiveSection';

function BackToTop() {
  const visible = useScrolled(600);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Revenir en haut de la page"
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-base-900/80 text-white shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-indigo/50 hover:text-accent-indigo ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-accent-indigo/20 blur-md" aria-hidden="true" />
      <ArrowUp className="relative h-5 w-5" />
    </button>
  );
}

export default BackToTop;
