import { Code, Server, Zap, Cloud, HardDrive, BarChart3 } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Conception et développement Frontend",
    description: "Création de superbes interfaces utilisateur interactives et réactives en utilisant des technologies modernes telles que React.js. Du design initial à l'implémentation finale, je m'assure que l'expérience utilisateur est au centre de chaque projet.",
    icon: <Code className="w-12 h-12" />
  },
  {
    title: "Développement Backend robuste",
    description: "Création de serveurs backend robustes et évolutifs en utilisant Node.js et Express.js. Je développe des API RESTful efficaces pour alimenter vos applications, en assurant une gestion optimale des données et des performances.",
    icon: <Server className="w-12 h-12" />
  },
  {
    title: "Création d'API REST complètes",
    description: "Développement complet d'API RESTful, de la conception à la documentation, en passant par l'implémentation et les tests. Je veille à ce que vos API fournissent des fonctionnalités complètes et sécurisées, répondant aux normes de l'industrie.",
    icon: <Zap className="w-12 h-12" />
  },
  {
    title: "Cloud & DevOps",
    description: "DevOps Engineer spécialisé dans l'automatisation et l'optimisation des infrastructures cloud. Expérience dans les pipelines CI/CD, Docker, Kubernetes, Terraform et services AWS pour des architectures scalables et sécurisées.",
    icon: <Cloud className="w-12 h-12" />
  },
  {
    title: "Administration Système & Virtualisation",
    description: "Administrateur Système spécialisé en virtualisation et gestion d'infrastructures. Expérience avec Proxmox VE, sauvegardes et supervision avec Zabbix/Prometheus. Maîtrise des systèmes Linux/Windows pour garantir stabilité et haute disponibilité.",
    icon: <HardDrive className="w-12 h-12" />
  },
  {
    title: "Analyste junior en données",
    description: "Maîtrisant Power BI et SQL Server pour l'analyse, la préparation et la visualisation des données. Capable de concevoir des dashboards pertinents et de transformer des données brutes en indicateurs exploitables.",
    icon: <BarChart3 className="w-12 h-12" />
  }
];

function Services() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white" id="services">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Ce que je fais ?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-100 hover:border-blue-400 group"
            >
              <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300 mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
