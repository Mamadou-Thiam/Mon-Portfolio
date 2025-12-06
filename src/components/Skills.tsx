import { Code2, Cloud, Database, Gauge, Shield, Boxes } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Développement",
    icon: <Code2 className="w-8 h-8" />,
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "SQL", "Python"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-8 h-8" />,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform"]
  },
  {
    title: "Administration",
    icon: <Shield className="w-8 h-8" />,
    skills: ["Linux", "Windows", "Proxmox", "ESXi", "TrueNAS"]
  },
  {
    title: "Supervision",
    icon: <Gauge className="w-8 h-8" />,
    skills: ["Zabbix", "Nagios", "Monitoring"]
  },
  {
    title: "Données",
    icon: <Database className="w-8 h-8" />,
    skills: ["Power BI", "Data Analysis", "Visualization"]
  },
  {
    title: "Outils",
    icon: <Boxes className="w-8 h-8" />,
    skills: ["GitHub/GitLab", "CRM", "Outils bureautiques"]
  }
];

function Skills() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
            Expertise technique
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Compétences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white px-3 py-1.5 rounded-lg text-sm text-gray-700 border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
