import { BookOpen, Briefcase, Code2, Home, LayoutGrid, Mail, UserRound, type LucideIcon } from 'lucide-react';
import { navLinks } from '../data/portfolio';

/** Icônes associées aux rubriques existantes, Réutilisées aussi sur le Journal. */
const navIcons: Record<string, LucideIcon> = {
  home: Home,
  about: UserRound,
  skills: Code2,
  portfolio: LayoutGrid,
  experience: Briefcase,
  blog: BookOpen,
  contact: Mail,
};

interface MobileBottomNavProps {
  active: string;
  onNavigate: (id: string) => void;
}

/** Barre d'onglets mobile, inspirée d'Instagram, sans ajouter ni retirer de rubrique. */
function MobileBottomNav({ active, onNavigate }: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Navigation par onglets"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgb(var(--rule))] bg-base-950/95 pb-[env(safe-area-inset-bottom)] pt-0.5 md:hidden"
    >
      <ul className="grid grid-cols-7">
        {navLinks.map((link) => {
          const Icon = navIcons[link.id] ?? Home;
          const isActive = active === link.id;

          return (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => onNavigate(link.id)}
                aria-label={link.label}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex h-14 w-full flex-col items-center justify-center gap-1.5 transition-colors duration-200 ${
                  isActive ? 'text-accent-indigo' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-0 h-0.5 w-6 origin-center bg-accent-indigo transition-transform duration-200 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
                <Icon
                  className="h-5 w-5"
                  strokeWidth={isActive ? 2.2 : 1.8}
                  aria-hidden="true"
                />
                <span className="sr-only">{link.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MobileBottomNav;
