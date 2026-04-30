import { Code2, Server, Zap, Cloud, HardDrive, BarChart3, ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const services: Service[] = [
  {
    title: "Frontend Development",
    description: "Interfaces modernes et réactives avec React.js, Next.js. Focus sur l'UX et les performances.",
    icon: <Code2 className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development",
    description: "APIs RESTful robustes avec Node.js, Express.js. Architecture scalable et sécurisée.",
    icon: <Server className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "API REST",
    description: "Conception, développement et documentation d'APIs complètes selon les standards de l'industrie.",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Cloud & DevOps",
    description: "CI/CD, Docker, Kubernetes, Terraform, AWS. Infrastructure as Code et automatisation.",
    icon: <Cloud className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "System Administration",
    description: "Virtualisation Proxmox, monitoring Zabbix/Prometheus. Linux/Windows, haute disponibilité.",
    icon: <HardDrive className="w-8 h-8" />,
    gradient: "from-gray-700 to-gray-900"
  },
  {
    title: "Data Analysis",
    description: "Power BI, SQL Server. Dashboards interactifs et indicateurs de performance.",
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: "from-indigo-500 to-blue-500"
  }
];

function Services() {
  return (
    <section className="py-32 px-4 bg-[#0a0a0f]" id="services">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Expertise
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Des solutions complètes pour transformer vos idées en réalité digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
