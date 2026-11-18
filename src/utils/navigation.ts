/**
 * Navigation partagée entre l'accueil et le Journal.
 * Les identifiants sont ceux de `navLinks` : aucune nouvelle route n'est créée.
 */
export function navigateTo(id: string) {
  if (id === 'blog') {
    window.location.hash = '#/blog';
    return;
  }

  if (window.location.hash) {
    window.location.hash = '';
    // L'accueil doit être monté avant de pouvoir cibler la section.
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return;
  }

  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
