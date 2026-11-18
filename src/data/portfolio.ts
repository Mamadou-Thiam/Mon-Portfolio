import type { LucideIcon } from 'lucide-react';
import { BarChart3, Cable, Laptop, Network, Presentation } from 'lucide-react';
import abnCover from '../assets/abn.png';
import cmasCover from '../assets/cmas.png';
import jumellesCover from '../assets/jumelles.png';
import ndiouroulCover from '../assets/ndiouroul.png';

export interface NavLink {
  id: string;
  label: string;
}

/** Navigation principale : les sections demandées, sans lien fictif. */
export const navLinks: NavLink[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'portfolio', label: 'Projets' },
  { id: 'experience', label: 'Expériences' },
  { id: 'blog', label: 'Journal' },
  { id: 'contact', label: 'Contact' },
];

export const profile = {
  name: 'Mamadou THIAM',
  firstName: 'Mamadou',
  lastName: 'THIAM',
  role: 'Ingénieur Systèmes, Réseaux & Cloud · Développeur Full Stack',
  email: 'thiammamadou0020@gmail.com',
  phone: '77 468 66 23',
  phoneHref: 'tel:+221774686623',
  whatsapp: '221761333209',
  whatsappHref: 'https://wa.me/221761333209',
  location: 'Dakar, Sénégal',
  cv: '/Mamadou_THIAM_CV_DEV.pdf',
  linkedin: 'https://www.linkedin.com/in/mamadou-thiam-309682255',
  github: 'https://github.com/Mamadou-Thiam',
  avatar: '/assets/momo.jpeg',
  available: true,
};

export interface CvFile {
  label: string;
  hint: string;
  file: string;
  download: string;
}

/** Les deux CV existants dans /public, tous deux réellement téléchargeables. */
export const cvFiles: CvFile[] = [
  {
    label: 'CV Développeur',
    hint: 'MERN Stack',
    file: '/Mamadou_THIAM_CV_DEV.pdf',
    download: 'Mamadou_THIAM_CV_DEV.pdf',
  },
  {
    label: 'CV Cloud & DevOps',
    hint: 'Systèmes, réseaux, infrastructure',
    file: '/Mamadou_THIAM_CV_DEVOPS.pdf',
    download: 'Mamadou_THIAM_CV_DEVOPS.pdf',
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
  note?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Infrastructure',
    skills: ['AWS', 'Azure', 'Amazon S3', 'IAM', 'Haute disponibilité', 'Stockage distribué (Ceph)'],
  },
  {
    title: 'Systèmes & Réseaux',
    skills: ['Linux', 'Windows Server', 'TCP/IP', 'Routage & commutation', 'DNS', 'Zabbix', 'Nagios', 'Prometheus'],
  },
  {
    title: 'DevOps & Virtualisation',
    skills: ['Docker', 'Proxmox VE', 'VMware ESXi', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'CI/CD'],
  },
  {
    title: 'Développement Frontend',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Bootstrap'],
  },
  {
    title: 'Développement Backend',
    skills: ['Node.js', 'Express.js', 'API REST', 'JWT', 'Python'],
  },
  {
    title: 'Bases de données & Outils',
    skills: ['MongoDB', 'SQL', 'SQLite', 'Git', 'GitHub', 'GitLab', 'Power BI'],
  },
];

/** Ordre d'affichage de la sélection mise en avant. */
export const highlightedProjectTitles = [
  'ABN Immobilier & Investissement',
  'CMAS — Cabinet Médical Ahmadina Saliou',
  'Ndiouroul Voyage',
  'Jumelles Amar',
];

export type ProjectCategory = 'Applications web' | 'Gestion métier' | 'Cloud & infrastructure';

export interface Project {
  title: string;
  description: string;
  problem: string;
  tags: string[];
  category: ProjectCategory;
  context?: string;
  /** Lien réel existant. Absent lorsque le projet n'a pas de démonstration publique. */
  url?: string;
  /** Couverture réelle, réservée aux projets de la sélection mise en avant (imports ci-dessus). */
  image?: string;
  /** Projets mis en avant dans la sélection éditoriale en tête de section. */
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    title: 'SenPrix',
    description:
      'Plateforme de surveillance et de comparaison des prix des produits de première nécessité au Sénégal.',
    problem: 'Comparer les prix et repérer les meilleures offres sur une même place.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Docker', 'API REST'],
    category: 'Applications web',
    context: 'Projet freelance',
    url: 'https://senprix-web.onrender.com',
  },
  {
    title: 'SUNU DOM',
    description:
      "Application de gestion de données d'une pouponnière : suivi des enfants, gestion administrative et rapports.",
    problem: "Centraliser le suivi des enfants et la gestion administrative d'une pouponnière.",
    tags: ['React.js', 'Node.js', 'MongoDB'],
    category: 'Gestion métier',
    context: 'Projet freelance',
    url: 'https://sysaccueilmineur-frontend.onrender.com/',
  },
  {
    title: 'Wesalo BackOffice',
    description:
      'Back-office de la plateforme Wesalo développé au sein de la DSI/INS/IMOC de Sonatel avec la stack MERN.',
    problem: "Offrir aux équipes un outil d'administration des contenus, des comptes et des rôles.",
    tags: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'AWS S3'],
    category: 'Gestion métier',
    context: 'Sonatel · Stage 2023 – 2024',
  },
  {
    title: 'JobSen',
    description:
      "Plateforme de recherche d'emploi connectant candidats et recruteurs au Sénégal.",
    problem: 'Rapprocher les candidats des offres et simplifier la mise en relation avec les recruteurs.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    category: 'Applications web',
    context: 'Projet freelance',
    url: 'https://jobsen-client.onrender.com',
  },
  {
    title: 'Jumelles Amar',
    description:
      "Site vitrine d'une maison de haute couture à Dakar : créations sur mesure, collections et prise de contact.",
    problem: "Présenter le savoir-faire de la maison et faciliter la prise de contact en ligne.",
    tags: ['React.js', 'Web Design', 'SEO'],
    category: 'Applications web',
    context: 'Projet freelance',
    url: 'https://www.jumellesamar.com',
    image: jumellesCover,
    highlight: true,
  },
  {
    title: 'Cluster Proxmox VE, Ceph & Docker',
    description:
      'Infrastructure virtualisée en haute disponibilité : Proxmox VE, stockage distribué Ceph, sauvegardes automatisées et charges conteneurisées avec Docker.',
    problem: "Éviter le point de défaillance unique et rendre les déploiements reproductibles.",
    tags: ['Proxmox VE', 'Ceph', 'Docker', 'Terraform', 'Haute disponibilité'],
    category: 'Cloud & infrastructure',
    context: 'Projet d’infrastructure',
  },
  {
    title: 'CMAS — Cabinet Médical Ahmadina Saliou',
    description:
      'Site vitrine du cabinet : praticiens, consultations, services de santé et prise de rendez-vous.',
    problem: 'Rendre les informations du cabinet et la prise de contact facilement accessibles.',
    tags: ['React.js', 'Web Design', 'SEO'],
    category: 'Applications web',
    url: 'https://cabinetahmadinasaliou.com',
    image: cmasCover,
    highlight: true,
  },
  {
    title: 'Mounir Digital',
    description:
      "Site officiel d'une agence digitale sénégalaise : services, réalisations et prise de contact.",
    problem: "Donner à l'agence une présence en ligne claire et crédible.",
    tags: ['React.js', 'Web Design', 'Branding'],
    category: 'Applications web',
    url: 'https://www.mounir-digital.com/',
  },
  {
    title: 'ABN Immobilier & Investissement',
    description:
      "Plateforme immobilière au Sénégal : présentation des biens, investissement et accompagnement à l'achat et à la location.",
    problem: 'Présenter l’offre immobilière et accompagner les projets d’investissement.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    category: 'Applications web',
    url: 'https://abn-immo.com/',
    image: abnCover,
    highlight: true,
  },
  {
    title: 'Ndiouroul Voyage',
    description:
      "Site d'une agence de voyages et de tourisme : offres, séjours, circuits et réservation en ligne.",
    problem: 'Présenter les offres et permettre une réservation en ligne.',
    tags: ['React.js', 'Tourisme', 'Web'],
    category: 'Applications web',
    url: 'https://www.ndiouroulvoyage.com/',
    image: ndiouroulCover,
    highlight: true,
  },
  {
    title: 'SEN TECH',
    description: 'Plateforme éducative pour l’apprentissage en ligne : cours et suivi de progression.',
    problem: 'Rendre l’apprentissage en ligne accessible et suivre la progression des apprenants.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    category: 'Applications web',
    url: 'https://sen-tech-frontend.onrender.com/',
  },
  {
    title: 'Portfolio Mame Penda',
    description: 'Portfolio personnel présentant les compétences et réalisations d’une designer créative.',
    problem: 'Mettre en valeur un travail créatif dans une interface sobre et lisible.',
    tags: ['React.js', 'Tailwind CSS', 'Vite'],
    category: 'Applications web',
  },
  {
    title: 'Njek',
    description: 'Logiciel de gestion de stock : inventaires, entrées/sorties et commandes fournisseurs.',
    problem: 'Suivre les stocks et les mouvements de marchandises sans tableur dispersé.',
    tags: ['Python', 'SQLite', 'Tkinter'],
    category: 'Gestion métier',
  },
  {
    title: 'Serveur FreeNAS',
    description:
      "Déploiement d'une solution de stockage réseau (NAS) pour la centralisation et la sécurisation des données.",
    problem: 'Centraliser les données et mettre en place une sauvegarde réseau fiable.',
    tags: ['FreeNAS', 'Storage', 'Réseau'],
    category: 'Cloud & infrastructure',
  },
];

export interface Experience {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  tasks: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    title: 'Instructeur en développement web',
    company: 'GoMyCode',
    type: 'Temps partiel',
    period: '12/2024 – Présent',
    location: 'Dakar, Sénégal',
    current: true,
    tasks: [
      'Enseignement des technologies web à travers des cours pratiques et théoriques',
      'Encadrement des apprenants et suivi de projets',
      'Promotion des bonnes pratiques et des outils modernes',
    ],
  },
  {
    title: 'Développeur Full Stack',
    company: 'Freelance',
    type: 'Indépendant',
    period: '01/2024 – Présent',
    location: 'Dakar, Sénégal',
    current: true,
    tasks: [
      'SenPrix — plateforme de comparaison de prix au Sénégal',
      'SUNU DOM — application de gestion de données d’une pouponnière',
      'JobSen — plateforme de mise en relation candidats / recruteurs',
      'ABN Immobilier & Investissement — plateforme immobilière',
      'SEN TECH — plateforme éducative d’apprentissage en ligne',
      'Jumelles Amar — site vitrine d’une maison de haute couture',
      'API REST avec MongoDB — conception d’APIs robustes et sécurisées',
      'Njek — logiciel de gestion de stock',
    ],
  },
  {
    title: 'Content Manager & Social Media Manager',
    company: 'Mamibi Traiteur',
    type: 'Freelance',
    period: '2024 – Présent',
    location: 'Dakar, Sénégal',
    current: true,
    tasks: [
      'Gestion et animation des pages Facebook et TikTok',
      'Création de contenus visuels et vidéos promotionnelles',
      'Stratégies marketing et interaction avec la communauté',
    ],
  },
  {
    title: 'Stagiaire Développeur MERN Stack',
    company: 'Sonatel (DSI/INS/IMOC)',
    type: 'Stage',
    period: '12/2023 – 06/2024',
    location: 'Dakar, Sénégal',
    tasks: [
      'Développement du back-office de la plateforme Wesalo avec la stack MERN',
      'Interfaces dynamiques et responsives avec React.js et Redux',
      'APIs REST sécurisées avec Express.js et MongoDB',
      'Authentification JWT et gestion des rôles utilisateurs',
      'Intégration AWS S3 et déploiement via Render',
    ],
  },
];

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  location: string;
  type: string;
}

export const education: EducationItem[] = [
  {
    title: 'Master 2 en Systèmes, Réseaux et Cloud',
    institution: 'Institut Africain de Management (IAM)',
    period: '2025',
    location: 'Dakar, Sénégal',
    type: 'Master',
  },
  {
    title: 'Master 1 en Virtualisation & Cloud Computing',
    institution: "Institut Supérieur d'Informatique (ISI)",
    period: '2025',
    location: 'Dakar, Sénégal',
    type: 'Master',
  },
  {
    title: 'Bootcamp en Analyse de données',
    institution: 'GoMyCode',
    period: '2025',
    location: 'Dakar, Sénégal',
    type: 'Bootcamp',
  },
  {
    title: 'Bootcamp FullStack JavaScript',
    institution: 'GoMyCode',
    period: '2023 – 2024',
    location: 'Dakar, Sénégal',
    type: 'Bootcamp',
  },
  {
    title: 'Licence en Management Informatisé des Organisations',
    institution: 'Université Iba Der Thiam',
    period: '2020 – 2023',
    location: 'Thiès, Sénégal',
    type: 'Licence',
  },
  {
    title: 'Séminaire en Gestion Relation Client',
    institution: 'Business Communication Center (BCC)',
    period: '2024',
    location: 'Dakar, Sénégal',
    type: 'Séminaire',
  },
];

export interface Certification {
  title: string;
  issuer: string;
  icon: LucideIcon;
}

export const certifications: Certification[] = [
  {
    title: 'CCNA : Introduction aux réseaux',
    issuer: 'Cisco Networking Academy',
    icon: Network,
  },
  {
    title: 'CCNA : Commutation, routage et bases du sans-fil',
    issuer: 'Cisco Networking Academy',
    icon: Cable,
  },
  {
    title: 'Formation — Intégration des instructeurs',
    issuer: 'GoMyCode',
    icon: Presentation,
  },
  {
    title: 'Bootcamp Full-Stack JavaScript',
    issuer: 'GoMyCode',
    icon: Laptop,
  },
  {
    title: 'Analyse de données (Power BI)',
    issuer: 'Microsoft / GoMyCode',
    icon: BarChart3,
  },
];

export interface Testimonial {
  quote: string;
  clientName: string;
  clientTitle: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Le nouveau site reflète exactement l’élégance de Jumelles Amar. Mamadou a su mettre en valeur nos créations avec beaucoup de goût, tout en garantissant une expérience rapide et facile à utiliser.',
    clientName: 'Astou Mbene',
    clientTitle: 'PDG, Jumelles Amar',
  },
  {
    quote:
      'Une excellente collaboration. M. THIAM a fait preuve d’une grande rigueur technique et d’une capacité à résoudre les problèmes rapidement.',
    clientName: 'M. Ndiaye',
    clientTitle: 'Directeur, SUNU DOM',
  },
];
