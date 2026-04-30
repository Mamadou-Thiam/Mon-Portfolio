import { Code2, Cloud, Database, Gauge, Shield, Boxes } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Developpement",
    icon: <Code2 className="w-8 h-8" />,
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "SQL", "Python"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-8 h-8" />,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Administration",
    icon: <Shield className="w-8 h-8" />,
    skills: ["Linux", "Windows", "Proxmox", "ESXi", "TrueNAS"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Supervision",
    icon: <Gauge className="w-8 h-8" />,
    skills: ["Zabbix", "Nagios", "Monitoring"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Donnees",
    icon: <Database className="w-8 h-8" />,
    skills: ["Power BI", "Data Analysis", "Visualization"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Outils",
    icon: <Boxes className="w-8 h-8" />,
    skills: ["GitHub/GitLab", "CRM", "Outils bureautiques"],
    color: "from-gray-600 to-gray-800"
  }
];

function Skills() {
  return (
    <section className="py-32 px-4 bg-[#0a0a0f]" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Expertise technique
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Competences
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Un ecosystème complet de technologies maîtrisées
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07]"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-6`}>
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-blue-400/50 transition-colors"
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
