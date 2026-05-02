import { ExternalLink, Github, Code, Server, FileText, Home, Network, HardDrive } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url: string;
  github?: string;
  icon: React.ReactNode;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "BackOffice Sonatel",
    description: "Système de gestion des dons pour la Sonatel avec tableau de bord administratif",
    url: "https://github.com/Mamadou-Thiam/Gestion-des-dons-sonatel-.git",
    github: "https://github.com/Mamadou-Thiam/Gestion-des-dons-sonatel-.git",
    icon: <Code className="w-8 h-8" />,
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "API REST MongoDB",
    description: "Architecture complète d'API RESTful avec documentation et tests",
    url: "https://github.com/Mamadou-Thiam/Backend-MongoDB.git",
    github: "https://github.com/Mamadou-Thiam/Backend-MongoDB.git",
    icon: <Server className="w-8 h-8" />,
    tags: ["Node.js", "Express", "MongoDB"]
  },
  {
    title: "JobSen",
    description: "Solution complète pour la gestion des candidatures en ligne",
    url: "https://jobsen-client.onrender.com/",
    github: "https://github.com/Mamadou-Thiam/labPhaseProject-GMC-.git",
    icon: <FileText className="w-8 h-8" />,
    tags: ["React", "PostgreSQL", "Supabase"]
  },
  {
    title: "SUNU DOM - Gestion Pouponnière",
    description: "Application de gestion pour structures d'accueil de mineurs",
    url: "https://sysaccueilmineur-frontend.onrender.com",
    github: "https://github.com/Mamadou-Thiam/SUNU-DOM",
    icon: <Home className="w-8 h-8" />,
    tags: ["React", "Node.js", "MySQL"]
  },
  {
    title: "Cluster Proxmox Ceph",
    description: "Haute disponibilité avec automatisation Terraform",
    url: "#",
    icon: <Network className="w-8 h-8" />,
    tags: ["Proxmox", "Ceph", "Terraform"]
  },
  {
    title: "Serveur FreeNAS",
    description: "Solution de stockage réseau avec redondance",
    url: "#",
    icon: <HardDrive className="w-8 h-8" />,
    tags: ["FreeNAS", "ZFS", "RAID"]
  }
];

function Portfolio() {
  return (
    <section className="py-32 px-4 bg-[#0f0f14]" id="portfolio">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Réalisations
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Découvrez mes projets récents et solutions innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-500"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                      >
                        <Github className="w-5 h-5 text-gray-400" />
                      </a>
                    )}
                    {project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
