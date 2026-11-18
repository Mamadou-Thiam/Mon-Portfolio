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

/** Interface lumineuse par défaut ; le mode sombre reste un choix explicite. */
function getInitialTheme(): Theme {
  return readStoredTheme() === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
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
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* stockage indisponible */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    animateThemeChange();
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
