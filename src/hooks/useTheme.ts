import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';
const THEME_COLORS: Record<Theme, string> = {
  dark: '#101112',
  light: '#f7f6f2',
};

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'dark' || stored === 'light' ? stored : null;
  } catch {
    return null;
  }
}

/** Sans choix explicite, on suit le réglage du système (notamment sur mobile). */
function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
}

let animTimeout: number | undefined;

function animateThemeChange() {
  const root = document.documentElement;
  root.classList.add('theme-animating');
  window.clearTimeout(animTimeout);
  animTimeout = window.setTimeout(() => root.classList.remove('theme-animating'), 260);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => readStoredTheme() ?? getSystemTheme());
  const [explicitChoice, setExplicitChoice] = useState(() => readStoredTheme() !== null);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  /* On ne mémorise que le choix de l'utilisateur ; sinon le thème reste lié au système. */
  useEffect(() => {
    if (!explicitChoice) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* stockage indisponible */
    }
  }, [theme, explicitChoice]);

  useEffect(() => {
    if (explicitChoice) return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      animateThemeChange();
      setTheme(event.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [explicitChoice]);

  const toggleTheme = useCallback(() => {
    animateThemeChange();
    setExplicitChoice(true);
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
