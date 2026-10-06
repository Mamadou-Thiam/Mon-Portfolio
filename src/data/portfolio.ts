import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Boxes,
  Building2,
  Cloud,
  Code2,
  Database,
  Gauge,
  Globe,
  GraduationCap,
  HardDrive,
  Package,
  Plane,
  Search,
  Server,
  Shield,
  ShoppingCart,
  Stethoscope,
  Users,
  Zap,
} from 'lucide-react';

export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expérience' },
  { id: 'contact', label: 'Contact' },
];

export const profile = {
  name: 'Mamadou THIAM',
  firstName: 'Mamadou',
  lastName: 'THIAM',
  role: 'MERN Stack Developer & Cloud / DevOps Engineer',
  roleShort: 'MERN Stack Developer & Cloud DevOps',
  tagline:
    "De l'architecture à la production, je conçois des applications web performantes et des infrastructures cloud scalables.",
  email: 'thiammamadou0020@gmail.com',
  phone: '77 468 66 23',
  phoneHref: 'tel:+221774686623',
  whatsapp: '221761333209',
  whatsappHref: 'https://wa.me/221761333209',
  location: 'Dakar, Sénégal',
  cv: '/cv-mamadou-thiam.pdf',
  linkedin: 'https://www.linkedin.com/in/mamadou-thiam-309682255',
  github: 'https://github.com/Mamadou-Thiam',
  avatar: '/assets/momo.jpeg',
  available: true,
};

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Projets livrés' },
  { value: 2, suffix: '+', label: "Années d'expérience" },
  { value: 5, suffix: '', label: 'Certifications' },
  { value: 6, suffix: '', label: 'Technologies maîtrisées' },
];

export const techMarquee: string[] = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'AWS',
  'Docker',
  'Kubernetes',
  'Terraform',
  'Ansible',
  'Jenkins',
  'Linux',
  'Proxmox',
  'Power BI',
];

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export const services: Service[] = [
  {
    title: 'Développement Web',
    description:
      'Interfaces modernes et réactives avec React.js et TypeScript. Focus UX, accessibilité et performances.',
    icon: Code2,
    gradient: 'from-accent-indigo to-accent-sky',
  },
  {
    title: 'Applications Full-Stack',
    description:
      'Applications MERN complètes : APIs RESTful robustes avec Node.js, Express.js et bases MongoDB/SQL.',
    icon: Server,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'CI/CD, Docker, Kubernetes, Terraform, AWS. Infrastructure as Code et automatisation de bout en bout.',
    icon: Cloud,
    gradient: 'from-accent-violet to-fuchsia-500',
  },
  {
    title: 'Infrastructure & Systèmes',
    description:
      'Virtualisation Proxmox/VMware, haute disponibilité, stockage distribué Ceph et administration Linux.',
    icon: HardDrive,
    gradient: 'from-slate-500 to-slate-700',
  },
  {
    title: 'Solutions digitales',
    description:
      'Conception de plateformes métier sur mesure : e-commerce, immobilier, éducation, gestion et data.',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Formation & Intégration IA',
    description:
      "Mentorat et transmission des bonnes pratiques, ainsi que l'intégration d'outils d'IA dans vos produits.",
    icon: GraduationCap,
    gradient: 'from-sky-500 to-cyan-500',
  },
];

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  url?: string;
  github?: string;
  color: string;
  colorBg: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'SenPrix',
    description:
      "Plateforme de comparaison de prix au Sénégal. Recherche intelligente, suivi des meilleures offres et économies sur les achats en ligne pour des milliers d'utilisateurs.",
    icon: ShoppingCart,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Docker', 'API REST'],
    url: 'https://senprix-web.onrender.com',
    github: 'https://github.com/Mamadou-Thiam',
    color: '#10b981',
    colorBg: 'rgba(16,185,129,0.1)',
    featured: true,
  },
  {
    title: 'CMAS — Cabinet Médical Ahmadina Saliou',
    description:
      "Site vitrine du Cabinet Médical Ahmadina Saliou : présentation du cabinet et de ses praticiens, liste des consultations et services de santé, prise de rendez-vous et prise de contact en ligne.",
    icon: Stethoscope,
    tags: ['React.js', 'Web Design', 'Santé', 'SEO'],
    url: 'https://cabinetahmadinasaliou.com',
    color: '#0d9488',
    colorBg: 'rgba(13,148,136,0.1)',
  },
  {
    title: 'Mounir Digital',
    description:
      "Site officiel d'une agence digitale sénégalaise : présentation des services (sites web, applications mobiles, marketing, SEO, branding), réalisations et prise de contact.",
    icon: Globe,
    tags: ['React.js', 'Web Design', 'Branding', 'SEO'],
    url: 'https://www.mounir-digital.com/',
    color: '#8b5cf6',
    colorBg: 'rgba(139,92,246,0.1)',
  },
  {
    title: 'ABN Immobilier & Investissement',
    description:
      "Plateforme immobilière premium au Sénégal : présentation des biens, services d'investissement et accompagnement personnalisé pour l'achat et la location.",
    icon: Building2,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Immobilier'],
    url: 'https://abn-immobilier-frontend.onrender.com/',
    color: '#0284c7',
    colorBg: 'rgba(2,132,199,0.1)',
  },
  {
    title: 'Jobsen',
    description:
      "Plateforme de recherche d'emploi connectant candidats et recruteurs avec des outils de matching intelligents.",
    icon: Search,
    tags: ['React.js', 'Node.js', 'MongoDB'],
    url: 'https://jobsen-client.onrender.com',
    color: '#6366f1',
    colorBg: 'rgba(99,102,241,0.1)',
  },
  {
    title: 'Ndiouroul Voyage',
    description:
      "Site web d'une agence de voyages et de tourisme présentant offres, séjours et circuits, avec réservation en ligne.",
    icon: Plane,
    tags: ['React.js', 'Tourisme', 'Voyages', 'Web'],
    url: 'https://www.ndiouroulvoyage.com/',
    color: '#0ea5e9',
    colorBg: 'rgba(14,165,233,0.1)',
  },
  {
    title: 'SEN TECH',
    description:
      "Plateforme éducative innovante pour l'apprentissage en ligne : cours interactifs et suivi de progression.",
    icon: GraduationCap,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Education'],
    url: 'https://sen-tech-frontend.onrender.com/',
    color: '#f59e0b',
    colorBg: 'rgba(245,158,11,0.1)',
  },
  {
    title: 'SUNU DOM',
    description:
      "Application de gestion de données d'une pouponnière : suivi des enfants, gestion administrative et rapports.",
    icon: Users,
    tags: ['Node.js', 'React.js', 'MongoDB'],
    url: 'https://sysaccueilmineur-frontend.onrender.com/',
    color: '#06b6d4',
    colorBg: 'rgba(6,182,212,0.1)',
  },
  {
    title: 'Portfolio Mame Penda',
    description:
      "Portfolio personnel moderne et élégant présentant les compétences et réalisations d'une designer créative.",
    icon: Globe,
    tags: ['React.js', 'Tailwind CSS', 'Vite', 'Design'],
    url: 'https://mame-penda-portfolio.onrender.com',
    color: '#f43f5e',
    colorBg: 'rgba(244,63,94,0.1)',
  },
  {
    title: 'Njek',
    description:
      'Logiciel de gestion de stock complet : inventaires, entrées/sorties et commandes fournisseurs.',
    icon: Package,
    tags: ['Python', 'SQLite', 'Gestion de stock', 'Tkinter'],
    color: '#f97316',
    colorBg: 'rgba(249,115,22,0.1)',
  },
  {
    title: 'Cluster Proxmox & Ceph',
    description:
      "Infrastructure haute disponibilité avec Proxmox, stockage distribué Ceph, backup automatisé et orchestration Terraform.",
    icon: HardDrive,
    tags: ['Proxmox', 'Ceph', 'Terraform', 'HA'],
    color: '#64748b',
    colorBg: 'rgba(100,116,139,0.12)',
  },
  {
    title: 'Serveur FreeNAS',
    description:
      "Déploiement d'une solution de stockage réseau (NAS) pour la centralisation et la sécurisation des données.",
    icon: Database,
    tags: ['FreeNAS', 'Storage', 'Network'],
    color: '#14b8a6',
    colorBg: 'rgba(20,184,166,0.1)',
  },
];

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  gradient: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    gradient: 'from-accent-indigo to-accent-sky',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'API REST', 'JWT', 'Python'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins'],
    gradient: 'from-accent-violet to-fuchsia-500',
  },
  {
    title: 'Infrastructure',
    icon: Shield,
    skills: ['Linux', 'Windows Server', 'Proxmox', 'VMware ESXi', 'TrueNAS', 'Ceph'],
    gradient: 'from-slate-500 to-slate-700',
  },
  {
    title: 'Supervision & Data',
    icon: Gauge,
    skills: ['Zabbix', 'Nagios', 'Prometheus', 'Power BI', 'Data Analysis'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Outils',
    icon: Boxes,
    skills: ['Git', 'GitHub / GitLab', 'CI/CD', 'CRM', 'Automatisation'],
    gradient: 'from-sky-500 to-cyan-500',
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
    title: 'Content Manager & Social Media Manager',
    company: 'Mamibi Traiteur',
    type: 'Freelance',
    period: '2024 – Présent',
    location: 'Dakar, Sénégal',
    current: true,
    tasks: [
      'Gestion et animation des pages Facebook et TikTok',
      'Création de contenus visuels et vidéos promotionnelles',
      'Mise en place de stratégies marketing pour attirer de nouveaux clients',
      'Rédaction de publications engageantes et optimisation de la visibilité',
      'Interaction avec la communauté et gestion des messages clients',
      "Contribution à l'augmentation de la notoriété et des ventes",
    ],
  },
  {
    title: 'Instructeur Développeur Web',
    company: 'Gomycode',
    type: 'Temps partiel',
    period: '12/2024 – Présent',
    location: 'Dakar, Sénégal',
    current: true,
    tasks: [
      'Enseignement des technologies web via des cours pratiques et théoriques',
      'Encadrement des apprenants et suivi de projets',
      'Promotion des bonnes pratiques et des outils modernes',
    ],
  },
  {
    title: 'Développeur Web Freelance',
    company: 'Freelance',
    type: 'Indépendant',
    period: '01/2024 – Présent',
    location: 'Dakar, Sénégal',
    current: true,
    tasks: [
      'ABN Immobilier & Investissement — plateforme immobilière premium',
      'SenPrix — plateforme de comparaison de prix au Sénégal',
      'API REST avec MongoDB — conception d’APIs robustes et sécurisées',
      'Portfolio Mame Penda — portfolio moderne pour une designer',
      'Jobsen — plateforme de mise en relation candidats / recruteurs',
      'SEN TECH — plateforme éducative d’apprentissage en ligne',
      'SUNU DOM — application de gestion de données d’une pouponnière',
      'Njek — logiciel de gestion de stock complet',
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
      'Conception d’interfaces dynamiques et responsives avec React.js et Redux',
      'Création d’APIs REST sécurisées avec Express.js et intégration de MongoDB',
      'Mise en place de l’authentification JWT et gestion des rôles utilisateurs',
      'Intégration AWS S3 et déploiement via onRender',
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
    title: 'Bootcamp en Analyse de données',
    institution: 'Gomycode',
    period: '2025',
    location: 'Dakar, Sénégal',
    type: 'Bootcamp',
  },
  {
    title: 'Master 1 en Virtualisation & Cloud Computing',
    institution: "Institut Supérieur d'Informatique (ISI)",
    period: '2025',
    location: 'Dakar, Sénégal',
    type: 'Master',
  },
  {
    title: 'Séminaire en Gestion Relation Client',
    institution: 'Business Communication Center (BCC)',
    period: '2024',
    location: 'Dakar, Sénégal',
    type: 'Séminaire',
  },
  {
    title: 'Bootcamp FullStack JavaScript',
    institution: 'Gomycode',
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
];

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
  badge: string;
}

export const certifications: Certification[] = [
  {
    title: 'CCNA : Introduction aux réseaux',
    issuer: 'Cisco Networking Academy',
    icon: '🌐',
    badge: 'bg-sky-500/20 text-sky-300',
  },
  {
    title: 'CCNA : Commutation, routage et bases du sans-fil',
    issuer: 'Cisco Networking Academy',
    icon: '🔌',
    badge: 'bg-blue-500/20 text-blue-300',
  },
  {
    title: 'Certificat de formation — Intégration des instructeurs',
    issuer: 'Gomycode',
    icon: '👨‍🏫',
    badge: 'bg-amber-500/20 text-amber-300',
  },
  {
    title: 'Certificat de réussite — Bootcamp Full-Stack JavaScript',
    issuer: 'Gomycode',
    icon: '💻',
    badge: 'bg-fuchsia-500/20 text-fuchsia-300',
  },
  {
    title: 'Certificat de réussite — Analyse de données (Power BI)',
    issuer: 'Microsoft / Gomycode',
    icon: '📊',
    badge: 'bg-emerald-500/20 text-emerald-300',
  },
];

export interface Testimonial {
  quote: string;
  clientName: string;
  clientTitle: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Une excellente collaboration ! M. THIAM a fait preuve d'une grande rigueur technique et d'une capacité à résoudre les problèmes rapidement.",
    clientName: 'M. Ndiaye',
    clientTitle: 'Directeur, SUNU DOM',
    rating: 5,
  },
  {
    quote:
      "J'ai été impressionné par la qualité du code et l'attention aux détails, notamment sur la partie UI/UX. Le projet a été livré dans les délais.",
    clientName: 'M. Ndiaye',
    clientTitle: 'Fondateur, IND Location',
    rating: 5,
  },
];

export const awardsIcon = Award;
