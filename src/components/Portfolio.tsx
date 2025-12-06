import { ExternalLink, Code, Server, FileText, Home, Network, HardDrive } from 'lucide-react';

interface Project {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Réalisation d'un BackOffice pour la Sonatel",
    url: "https://github.com/Mamadou-Thiam/Gestion-des-dons-sonatel-.git",
    icon: <Code className="w-16 h-16" />
  },
  {
    title: "API REST avec MongoDB",
    url: "https://github.com/Mamadou-Thiam/Backend-MongoDB.git",
    icon: <Server className="w-16 h-16" />
  },
  {
    title: "Plateforme de E-Candidature",
    url: "https://github.com/Mamadou-Thiam/labPhaseProject-GMC-.git",
    icon: <FileText className="w-16 h-16" />
  },
  {
    title: "Projet SUNU DOM pour la gestion d'une pouponnière",
    url: "https://sysaccueilmineur-frontend.onrender.com",
    icon: <Home className="w-16 h-16" />
  },
  {
    title: "Mise en place d'un Serveur Proxmox en Cluster Ceph pour la HA, Backup et Automatisation avec Terraform",
    url: "#",
    icon: <Network className="w-16 h-16" />
  },
  {
    title: "Mise en place d'un serveur FreeNAS",
    url: "#",
    icon: <HardDrive className="w-16 h-16" />
  }
];

function Portfolio() {
  return (
    <section className="py-20 px-4 bg-white" id="portfolio">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Ce que j'ai réalisé ?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target={project.url !== "#" ? "_blank" : undefined}
              rel={project.url !== "#" ? "noopener noreferrer" : undefined}
              className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-blue-600 group-hover:text-white transition-colors duration-300 mb-6">
                  {project.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 mb-4 min-h-[4rem]">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-200 transition-colors duration-300">
                  <span className="text-sm font-medium">Voir le projet</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
