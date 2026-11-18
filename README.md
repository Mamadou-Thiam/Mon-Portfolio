# Portfolio — Mamadou THIAM

Portfolio professionnel React 18 + TypeScript + Vite + Tailwind CSS 3.

## Commandes

```bash
npm install
npm run dev        # serveur de développement
npm run typecheck  # vérification TypeScript
npm run lint       # ESLint
npm run build      # build de production + PWA
npm run preview    # prévisualisation du build
```

## Architecture

```
src/
├── App.tsx                 # routage Accueil / Journal, structure des sections
├── data/
│   ├── portfolio.ts        # contenu éditorial : profil, compétences, projets, expériences…
│   └── blogArticles.ts     # articles du Journal (fonctionnalité conservée)
├── components/
│   ├── Navbar.tsx          # nav haute (lg+) + panneau hamburger (md–lg)
│   ├── MobileBottomNav.tsx # barre d'onglets mobile inspirée d'Instagram (< md)
│   ├── WhatsAppFloat.tsx   # bouton WhatsApp flottant, au-dessus de la barre mobile
│   ├── Hero.tsx            # première section
│   ├── About.tsx           # à propos (trois domaines)
│   ├── Skills.tsx          # compétences par catégorie
│   ├── Portfolio.tsx       # présentation éditoriale des projets
│   ├── ProfessionalExperience.tsx
│   ├── Education.tsx       # formation + certifications
│   ├── Testimonials.tsx
│   ├── Contact.tsx         # formulaire avec remise WhatsApp
│   ├── Footer.tsx          # signature et liens
│   └── ui/                 # SectionHeading, Reveal
├── hooks/                  # active section, thème clair/sombre
├── utils/navigation.ts     # navigateTo(id), destination partagée Accueil / Journal
└── index.css               # système visuel (variables, filets, typographie)
```

## Direction artistique

- Thème clair par défaut : papier `#f7f6f2`, encre `#18191b`, graphite, accent terre brûlée `#9b5a3b`.
- Typographie : Inter (interface) + Newsreader (titres et signature éditoriale).
- Hiérarchie par l'espace, les filets et la typographie — pas de cartes répétitives, de halos, de particules ni de dégradés décoratifs.
- Animations limitées à une apparition discrète au défilement, désactivées avec `prefers-reduced-motion`.
- Mode sombre disponible, mémorisé dans `localStorage`.

## Navigation

Les sept rubriques existantes (`home`, `about`, `skills`, `portfolio`, `experience`,
`blog`, `contact`) sont conservées telles quelles, sans ajout ni suppression :

- **Mobile (`< md`)** : une barre d'onglets fixe en bas d'écran, inspirée d'Instagram,
  affiche les sept icônes avec un indicateur d'activité en haut, un fond adapté au thème,
  le respect des safe areas iOS/Android et une transition discrète. Le lien **Journal**
  ouvre la route `#/blog`, les autres rubriques renvoient à l'accueil puis défilent vers la
  section ciblée. Un `padding-bottom` évite que la barre ne masque le contenu.
- **Tablette (`md`–`lg`)** : le panneau hamburger d'origine est conservé à l'identique.
- **Desktop (`lg+`)** : la navigation haute d'origine est conservée à l'identique.

La destination est centralisée dans `src/utils/navigation.ts` et réutilisée par l'accueil
et le Journal : aucune logique dupliquée, aucune route ni permission modifiée. Le site est
entièrement public (pas de rôles, ni de sous-menus). Le bouton WhatsApp flottant est
remonté au-dessus de la barre sur mobile et retrouve sa position bas-droite sur tablette
et desktop.

## Projets

La section Projets ne comporte que deux niveaux :

1. **Sélection mise en avant** — bloc éditorial sombre avec quatre réalisations et leurs
   couvertures : **ABN Immobilier & Investissement**, **CMAS — Cabinet Médical Ahmadina
   Saliou**, **Ndiouroul Voyage** et **Jumelles Amar**.
2. **Autres réalisations** — liste sobre de tous les autres projets, **sans image de
   couverture**, avec le titre, les technologies et un lien sortant lorsqu'il existe.

L'ordre de la sélection est défini par `highlightedProjectTitles` dans
`src/data/portfolio.ts` ; le champ `highlight` évite tout doublon. Les liens sortants
utilisent `target="_blank"` et `rel="noopener noreferrer"`.

## Couvertures de projet

Seuls les quatre projets mis en avant ont une couverture. Les visuels sont importés
directement depuis `src/assets` dans `src/data/portfolio.ts` (Vite gère le hachage) :

- `abn.png` → ABN Immobilier & Investissement
- `cmas.png` → CMAS — Cabinet Médical Ahmadina Saliou
- `ndiouroul.png` → Ndiouroul Voyage
- `jumelles.png` → Jumelles Amar

Les couvertures sont affichées dans leur ratio d'origine, sans recadrage. Aucune fausse
capture n'est générée. Pour ajouter une couverture à un projet mis en avant, déposer le
fichier dans `src/assets` puis l'importer dans `src/data/portfolio.ts`.

## Journal

La page `#/blog` conserve ses 7 articles et utilise elle aussi les visuels de `src/assets` :
`hackaton1/2.jpeg`, `classmate1/2.jpeg`, `demo-day1/2/3/4.jpeg` et `hackaton3.mp4` sont
importés dans `src/data/blogArticles.ts` pour les couvertures, la galerie et la vidéo.
L'interface suit désormais le même système visuel que le site principal : filets fins,
pas de dégradés ni de halos, grille éditoriale sobre, lightbox et filtres accessibles.
Le lien **Journal** est présent dans la navigation principale, le menu mobile et le footer.

## Contact

Le formulaire est fonctionnel sans backend ni clé d'API : après validation native et contrôle
honeypot, il ouvre WhatsApp avec le message encodé (`encodeURIComponent`). L'utilisateur
conserve la main sur l'envoi. Aucune donnée n'est stockée ni transmise à un tiers.
Un bouton WhatsApp flottant, discret et fixé en bas à droite, est disponible sur l'accueil
comme sur le Journal (`src/components/WhatsAppFloat.tsx`).
