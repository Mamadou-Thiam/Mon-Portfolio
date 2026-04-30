interface Education {
  title: string;
  institution: string;
  period: string;
  location: string;
  type: string;
}

const education: Education[] = [
  {
    title: "Master 2 en Systèmes, Réseaux et Cloud",
    institution: "Institut Africain de Management (IAM)",
    period: "11/2025 – 07/2025",
    location: "Dakar, Sénégal",
    type: "Master"
  },
  {
    title: "Bootcamp en Analyse de données",
    institution: "Gomycode",
    period: "05/2025 – 09/2025",
    location: "Dakar, Sénégal",
    type: "Bootcamp"
  },
  {
    title: "Master 1 en Virtualisation & Cloud Computing",
    institution: "Institut Supérieur d'informatique (ISI)",
    period: "11/2025 – 08/2025",
    location: "Dakar, Sénégal",
    type: "Master"
  },
  {
    title: "Séminaire en Gestion Relation Client",
    institution: "Business Communication Center (BCC)",
    period: "07/2024 – 07/2024",
    location: "Dakar, Sénégal",
    type: "Séminaire"
  },
  {
    title: "Bootcamp FullStack JavaScript",
    institution: "Gomycode",
    period: "08/2023 – 01/2024",
    location: "Dakar, Sénégal",
    type: "Bootcamp"
  },
  {
    title: "Licence en Management Informatisé des Organisations",
    institution: "Université Iba Der Thiam",
    period: "01/2020 – 07/2023",
    location: "Thiès, Sénégal",
    type: "Licence"
  }
];

function Education() {
  return (
    <section className="py-32 px-4 bg-[#0a0a0f]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Parcours
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Formation
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Mon parcours académique et mes certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                  edu.type === 'Master' ? 'bg-purple-500/20 text-purple-400' :
                  edu.type === 'Bootcamp' ? 'bg-blue-500/20 text-blue-400' :
                  edu.type === 'Licence' ? 'bg-green-500/20 text-green-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {edu.type}
                </div>
                <span className="text-gray-400 text-sm">{edu.period}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">
                {edu.title}
              </h3>

              <p className="text-blue-400 font-medium text-sm mb-2">
                {edu.institution}
              </p>

              <p className="text-gray-400 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
