import { ExternalLink, Briefcase, Building2, ShoppingCart, Server, Globe, Search, Users, Package, HardDrive, Database, Sparkles, GraduationCap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  url?: string;
  accent: string;
  light: string;
  color: string;
  colorBg: string;
}

const projects: Project[] = [
  {
    title: 'BackOffice pour la Sonatel',
    description: "Développement du back-office de la plateforme Wesalo avec la stack MERN. Interfaces dynamiques avec React.js et Redux, API REST sécurisées avec Express.js et MongoDB.",
    icon: <Briefcase className="w-8 h-8" />,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'AWS S3'],
    accent: 'from-blue-500 to-indigo-600',
    light: '#eff6ff',
    color: '#3b82f6',
    colorBg: 'rgba(59,130,246,0.1)'
  },
  {
    title: 'SenPrix',
    description: "Plateforme de comparaison de prix au Sénégal. Trouvez les meilleures offres et économisez sur vos achats en ligne.",
    icon: <ShoppingCart className="w-8 h-8" />,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Docker'],
    url: 'https://sen-prix-web.onrender.com/login',
    accent: 'from-emerald-500 to-teal-600',
    light: '#ecfdf5',
    color: '#10b981',
    colorBg: 'rgba(16,185,129,0.1)'
  },
  {
    title: 'ABN Immobilier & Investissement',
    description: "Plateforme immobilière premium au Sénégal. Présentation des biens, services d'investissement et accompagnement personnalisé pour l'achat et la location de propriétés.",
    icon: <Building2 className="w-8 h-8" />,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Immobilier'],
    url: 'https://abn-immobilier-frontend.onrender.com/',
    accent: 'from-blue-600 to-sky-500',
    light: '#f0f9ff',
    color: '#0284c7',
    colorBg: 'rgba(2,132,199,0.1)'
  },
  {
    title: 'API REST avec MongoDB',
    description: "Création d'API RESTful robustes et sécurisées utilisant Express.js et MongoDB pour une gestion efficace des données.",
    icon: <Server className="w-8 h-8" />,
    tags: ['Express.js', 'MongoDB', 'JWT', 'REST API'],
    accent: 'from-purple-500 to-pink-600',
    light: '#faf5ff',
    color: '#8b5cf6',
    colorBg: 'rgba(139,92,246,0.1)'
  },
  {
    title: 'Portfolio Mame Penda',
    description: "Portfolio personnel moderne et élégant présentant les compétences et réalisations d'une designer créative.",
    icon: <Globe className="w-8 h-8" />,
    tags: ['React.js', 'Tailwind CSS', 'Vite', 'Design'],
    url: 'https://mame-penda-portfolio.onrender.com',
    accent: 'from-rose-500 to-pink-600',
    light: '#fff1f2',
    color: '#f43f5e',
    colorBg: 'rgba(244,63,94,0.1)'
  },
  {
    title: 'Jobsen',
    description: "Plateforme de recherche d'emploi connectant candidats et recruteurs avec des outils de matching intelligents.",
    icon: <Search className="w-8 h-8" />,
    tags: ['React.js', 'Node.js', 'MongoDB'],
    url: 'https://jobsen-client.onrender.com',
    accent: 'from-indigo-500 to-violet-600',
    light: '#eef2ff',
    color: '#6366f1',
    colorBg: 'rgba(99,102,241,0.1)'
  },
  {
    title: 'SEN TECH',
    description: "Plateforme éducative innovante pour l'apprentissage en ligne. Accédez à des cours interactifs et suivez votre progression.",
    icon: <GraduationCap className="w-8 h-8" />,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Education'],
    url: 'https://sen-tech-frontend.onrender.com/',
    accent: 'from-amber-500 to-yellow-600',
    light: '#fffbeb',
    color: '#f59e0b',
    colorBg: 'rgba(245,158,11,0.1)'
  },
  {
    title: 'Projet SUNU DOM',
    description: "Application de gestion de données d'une pouponnière incluant suivi des enfants, gestion administrative et rapports.",
    icon: <Users className="w-8 h-8" />,
    tags: ['Node.js', 'React.js', 'MongoDB'],
    url: 'https://sysaccueilmineur-frontend.onrender.com/',
    accent: 'from-cyan-500 to-blue-600',
    light: '#ecfeff',
    color: '#06b6d4',
    colorBg: 'rgba(6,182,212,0.1)'
  },
  {
    title: 'Njek',
    description: "Logiciel de gestion de stock complet pour optimiser les inventaires, suivre les entrées/sorties et gérer les commandes fournisseurs.",
    icon: <Package className="w-8 h-8" />,
    tags: ['Python', 'SQLite', 'Gestion de stock', 'Tkinter'],
    accent: 'from-orange-500 to-red-600',
    light: '#fff7ed',
    color: '#f97316',
    colorBg: 'rgba(249,115,22,0.1)'
  },
  {
    title: 'Serveur Proxmox en Cluster Ceph',
    description: "Mise en place d'infrastructure haute disponibilité avec Proxmox, Cluster Ceph pour stockage distribué, backup automatisé et orchestration avec Terraform.",
    icon: <HardDrive className="w-8 h-8" />,
    tags: ['Proxmox', 'Ceph', 'Terraform', 'HA'],
    accent: 'from-slate-600 to-slate-900',
    light: '#f8fafc',
    color: '#475569',
    colorBg: 'rgba(71,85,105,0.1)'
  },
  {
    title: 'Serveur FreeNAS',
    description: "Déploiement et configuration d'une solution de stockage réseau (NAS) pour centralisation et sécurisation des données d'entreprise.",
    icon: <Database className="w-8 h-8" />,
    tags: ['FreeNAS', 'Storage', 'Network'],
    accent: 'from-teal-500 to-cyan-600',
    light: '#f0fdfa',
    color: '#14b8a6',
    colorBg: 'rgba(20,184,166,0.1)'
  }
];

function Portfolio() {
  return (
    <section className="py-32 px-4 bg-[#0f0f14] relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Réalisations
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Mes <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Des solutions innovantes mêlant développement web, infrastructure cloud et applications métier
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                boxShadow: `0 0 0 0 ${project.colorBg}`,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 32px ${project.colorBg}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 transparent';
              }}
            >
              <div
                className="h-1.5 w-full bg-gradient-to-r opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundImage: `linear-gradient(to right, ${project.color}, ${project.color}dd)` }}
              />

              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="p-3 rounded-xl text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                      boxShadow: `0 4px 15px ${project.colorBg}`,
                    }}
                  >
                    {project.icon}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                      style={{
                        backgroundColor: project.colorBg,
                        color: project.color,
                      }}
                    >
                      Voir le projet
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300"
                      style={{
                        backgroundColor: project.colorBg,
                        color: project.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at 50% 50%, ${project.colorBg}, transparent 40%)`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            {projects.length} projets réalisés
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
