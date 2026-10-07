import hackaton1 from '../assets/hackaton1.jpeg';
import hackaton2 from '../assets/hackaton2.jpeg';
import hackaton3 from '../assets/hackaton3.mp4';
import demoDay1 from '../assets/demo-day1.jpeg';
import demoDay2 from '../assets/demo-day2.jpeg';
import demoDay3 from '../assets/demo-day3.jpeg';
import demoDay4 from '../assets/demo-day4.jpeg';
import classmate1 from '../assets/classmate1.jpeg';
import classmate2 from '../assets/classmate2.jpeg';

export type ArticleCategory =
  | 'Intelligence Artificielle'
  | 'Développement'
  | 'DevOps'
  | 'Événements';

export interface BlogSection {
  heading: string;
  text: string;
  list?: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  excerpt: string;
  cover: string;
  gallery?: string[];
  video?: string;
  sections: BlogSection[];
}

export const articleCategories: ArticleCategory[] = [
  'Intelligence Artificielle',
  'Développement',
  'DevOps',
  'Événements',
];

export const blogArticles: BlogArticle[] = [
  {
    id: 'ia-generative-developpeur',
    title: "L'IA générative au service du développeur",
    category: 'Intelligence Artificielle',
    date: 'Mars 2026',
    readTime: '5 min',
    excerpt:
      "Comment j'intègre les assistants IA dans mon quotidien de développeur sans perdre le contrôle de mon code.",
    cover: hackaton1,
    sections: [
      {
        heading: "De l'auto-complétion à l'IA d'agent",
        text: "Les assistants de code ont changé ma façon de travailler. Ce qui commence par une simple autocomplétion s'est transformé en véritables agents capables de générer un module entier, d'écrire les tests qui valident une fonction ou encore de rédiger la documentation d'une API. Dans mes projets React et Node.js, je m'appuie dessus pour traiter le code répétitif et me concentrer sur l'architecture et la logique métier.",
      },
      {
        heading: "L'IA ne remplace pas la connaissance",
        text: "Un bon développeur reste indispensable pour guider l'outil : formuler un prompt précis, relire chaque ligne générée et surtout savoir refuser une suggestion trompeuse. Mon rôle n'a pas disparu, il a évolué — je valide, corrige et j'explique.",
        list: [
          'Découper la demande en étapes claires pour obtenir des réponses utiles',
          'Ajouter le contexte du projet (frameworks, contraintes, conventions)',
          'Vérifier le code généré avec les tests et la revue manuelle',
        ],
      },
      {
        heading: 'En pratique sur mes projets',
        text: "Concrètement : génération de configs Docker et de pipelines CI/CD, rédaction de scripts de migration, couverture de tests unitaires pour des fonctions métier. Dans tous les cas, l'humain garde la main — surtout pour la sécurité et la qualité.",
      },
    ],
  },
  {
    id: 'devenir-developpeur-web',
    title: 'Devenir développeur web : mon parcours',
    category: 'Développement',
    date: 'Janvier 2026',
    readTime: '6 min',
    excerpt:
      "Des fondamentaux du HTML à la mise en production, le chemin que je recommande à toute personne qui démarre dans le web.",
    cover: classmate1,
    sections: [
      {
        heading: 'Les fondamentaux d’abord',
        text: "HTML, CSS et JavaScript restent la base de tout. Avant de choisir un framework, il faut comprendre le DOM, les requêtes HTTP et le fonctionnement du navigateur. Ces notions servent tous les jours, même avec les outils les plus modernes.",
        list: [
          'HTML sémantique & accessibilité',
          'CSS moderne : flexbox, grid, responsivité',
          'JavaScript : événements, async, promesses & API',
        ],
      },
      {
        heading: 'Apprendre par les projets',
        text: "Rien ne remplace la pratique. Un portfolio, un petit e-commerce fictif ou un clone d'application : chaque projet oblige à se confronter à des vrais problèmes — découpage, erreurs, déploiement. C'est cette boucle « casser / réparer / améliorer » qui forme vraiment.",
      },
      {
        heading: 'Ne jamais cesser la veille',
        text: "L'écosystème web évolue vite. Je consacre du temps chaque semaine à la lecture des documentations, au suivi de projets open source et au partage en communauté. La curiosité est la compétence la plus importante d'un développeur.",
      },
    ],
  },
  {
    id: 'devops-pont-dev-ops',
    title: "DevOps : le pont entre les équipes dev et ops",
    category: 'DevOps',
    date: 'Novembre 2025',
    readTime: '8 min',
    excerpt:
      "CI/CD, conteneurs, infrastructure as code : pourquoi automatiser sa chaîne de livraison change tout.",
    cover: hackaton2,
    sections: [
      {
        heading: "Pourquoi le DevOps ?",
        text: "Le DevOps est une culture autant qu'un ensemble d'outils. L'objectif : livrer plus vite et plus fiable en rapprochant les équipes qui écrivent le code de celles qui le font tourner. Dans mes missions, adopter une chaîne d'intégration continue a divisé le temps de mise en production et réduit les erreurs manuelles.",
      },
      {
        heading: "Les piliers d'une pipeline moderne",
        text: "Une livraison continue repose sur quelques briques complémentaires : l'intégration continue qui compile, teste et analyse le code à chaque push, puis le déploiement automatisé vers les environnements de test et de production.",
        list: [
          'CI/CD : GitLab CI, GitHub Actions',
          'Conteneurisation : Docker & orchestrateurs',
          'Infrastructure as code : Terraform, Ansible',
          'Observabilité : logs centralisés, métriques, alertes',
        ],
      },
      {
        heading: 'Un exemple concret',
        text: "Un pipeline type pour une application Node.js en conteneur : à chaque push, les tests sont lancés, une image Docker est construite et publiée, puis l'application est déployée sur le serveur de staging. Tout est vérifiable, reproductible et documenté.",
      },
      {
        heading: "Ce que ça change au quotidien",
        text: "Moins de « ça marche chez moi », des rollbacks simples, des environnements identiques et une équipe qui ose déployer souvent. La confiance vient de l'automatisation et de la visibilité.",
      },
    ],
  },
  {
    id: 'react-node-full-stack',
    title: 'React & Node.js : structurer une application full-stack',
    category: 'Développement',
    date: 'Mars 2026',
    readTime: '7 min',
    excerpt:
      "Du découpage des composants à l'API REST : l'organisation que j'adopte pour garder un projet React/Node lisible dans le temps.",
    cover: classmate2,
    sections: [
      {
        heading: 'Séparer présentation et logique métier',
        text: "Côté front, je limite les composants à l'affichage et je pousse la logique dans des hooks et des services dédiés. Côté back, les routes restent minces : elles valident la requête puis délèguent au service qui contient les règles. Cette séparation rend le code testable et évite le « composant de 600 lignes ».",
        list: [
          'Front : composants UI + hooks métier + services API',
          'Back : routes, services, accès données',
          'Types partagés pour éviter la dérive entre front et back',
        ],
      },
      {
        heading: 'Une API prévisible',
        text: "Toutes mes routes suivent le même contrat : codes HTTP cohérents, erreurs structurées, pagination et validation des entrées dès la frontière. Un frontend qui reçoit toujours le même format gagne en robustesse, et la documentation devient presque automatique.",
      },
      {
        heading: 'La qualité, dès le premier commit',
        text: "Lint, formatage, tests des fonctions critiques et vérification des types dans la CI : ces garde-fous coûtent peu au début et évitent des semaines de dette technique. J'installe ces rituels avant d'écrire la première fonctionnalité.",
      },
      {
        heading: 'Ce que je surveille en production',
        text: "Temps de réponse des endpoints, taux d'erreur, traces des requêtes lentes : sans données, on améliore à l'aveugle. Une poignée de métriques bien choisies suffit à savoir où concentrer l'effort.",
      },
    ],
  },
  {
    id: 'docker-production',
    title: 'Docker en production : ma checklist',
    category: 'DevOps',
    date: 'Janvier 2026',
    readTime: '6 min',
    excerpt:
      "Images légères, utilisateurs non root, healthchecks et variables d'environnement : les règles que j'applique avant tout déploiement.",
    cover: demoDay3,
    sections: [
      {
        heading: 'Une image petite et reproductible',
        text: "Build multi-stage, cache de dépendances exploité au maximum et image finale sans les outils de compilation. Résultat : démarrage plus rapide, surface d'attaque réduite et déploiements qui ne dépendent plus de l'environnement de la machine de build.",
        list: [
          'Build à étages pour ne garder que le nécessaire',
          'Étiquettes immuables (tag = version du commit)',
          '.dockerignore strict pour un contexte de build propre',
        ],
      },
      {
        heading: 'Sécurité par défaut',
        text: "Le conteneur tourne avec un utilisateur non privilégié, le système de fichiers est en lecture seule quand c'est possible, et les secrets ne sont jamais copiés dans l'image : ils arrivent à l'exécution, via le gestionnaire de secrets ou les variables d'environnement.",
      },
      {
        heading: 'Rester vivant en production',
        text: "Un healthcheck explicite, des limites de ressources et des logs structurés sortis vers un collecteur. Quand le conteneur est malade, l'orchestrateur le redémarre sans intervention humaine, et les journaux racontent pourquoi.",
      },
      {
        heading: 'Déployer sans stress',
        text: "Chaque release est une image testée : on promeut la même artefact du test vers la production. Le rollback revient à repointer vers l'image précédente, en quelques secondes.",
      },
    ],
  },
  {
    id: 'ia-observabilite-predictive',
    title: "L'IA au service de l'observabilité et du DevOps",
    category: 'Intelligence Artificielle',
    date: 'Décembre 2025',
    readTime: '6 min',
    excerpt:
      "Corrélation de logs, détection d'anomalies et suggestions de remédiation : comment l'IA change la façon d'exploiter une application.",
    cover: demoDay2,
    sections: [
      {
        heading: "D'alerte brute à signal utile",
        text: "Sur une application en production, le volume de logs et de métriques dépasse ce qu'un humain peut lire. Les modèles de détection d'anomalies repèrent les ruptures de tendance — latence, taux d'erreur, saturation — et regroupent les alertes liées en un seul incident exploitable.",
      },
      {
        heading: 'Un copilote pour le on-call',
        text: "L'intérêt n'est pas de remplacer l'astreinte, mais de gagner du temps : résumé de l'incident, historique des déploiements récents, corrélations possibles. J'obtiens une première hypothèse en quelques secondes, que je valide ensuite avec les métriques.",
        list: [
          "Résumé automatique des logs d'un incident",
          'Corrélation avec les derniers déploiements',
          'Suggestion de commande de diagnostic, jamais exécutée sans validation',
        ],
      },
      {
        heading: 'Les limites à garder en tête',
        text: "Un modèle peut inventer une cause plausible mais fausse. Je garde donc la main sur toute action qui modifie la production : l'IA propose, l'humain décide et exécute. La traçabilité des suggestions reste essentielle pour comprendre ce qui s'est passé.",
      },
      {
        heading: "Où j'en suis sur mes projets",
        text: "Collecte centralisée des métriques, alertes corrélées et revue assistée après chaque incident. L'objectif est simple : réduire le temps moyen de détection pour laisser plus de temps à l'analyse et à la correction.",
      },
    ],
  },
  {
    id: 'hackathons-et-demo-days',
    title: "Hackathons et demo days : apprendre en faisant",
    category: 'Événements',
    date: 'Octobre 2025',
    readTime: '4 min',
    excerpt:
      "48h pour coder, pitcher et convaincre : retour sur les hackathons et journées de démonstration que j'anime et organise.",
    cover: demoDay1,
    gallery: [demoDay1, demoDay2, demoDay3, demoDay4, hackaton1, hackaton2, classmate1, classmate2],
    video: hackaton3,
    sections: [
      {
        heading: "L'expérience du hackathon",
        text: "Un hackathon, c'est un marathon créatif : 48 heures pour passer d'une idée à un prototype fonctionnel. En tant qu'instructeur, je vois les équipes progresser à vitesse réelle — chacun pioche dans ses compétences, la pression aide à trancher vite et le partage entre participants est la vraie richesse.",
      },
      {
        heading: "Le demo day, moment de vérité",
        text: "Après l'effort, la présentation : chaque équipe montre son produit devant un jury et des partenaires. Pitch, démonstration live, questions-réponses. C'est un exercice exigeant qui apprend à expliquer une solution technique en quelques minutes, à l'oral comme en démonstration.",
      },
      {
        heading: "Organiser, c'est aussi apprendre",
        text: "Comme organisateur de journées demo day, je m'occupe de la logistique, du coaching des équipes et de la sélection des jurys. Voir arriver des projets en quelques semaines et les voir convaincre un jury reste l'un des moments les plus gratifiants de mon métier.",
      },
    ],
  },
];