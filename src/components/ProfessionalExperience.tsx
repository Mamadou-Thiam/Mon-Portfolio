interface Experience {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  tasks: string[];
}

const experiences: Experience[] = [
  {
    title: "Content Manager & Social Media Manager",
    company: "Mamibi Traiteur",
    type: "Freelance",
    period: "2024 – Present",
    location: "Dakar, Sénégal",
    tasks: [
      "Gestion et animation des pages Facebook et TikTok",
      "Création de contenus visuels et vidéos promotionnelles",
      "Mise en place de stratégies marketing pour attirer de nouveaux clients",
      "Rédaction de publications engageantes et optimisation de la visibilité",
      "Interaction avec la communauté et gestion des messages clients",
      "Contribution à l'augmentation de la notoriété et des ventes"
    ]
  },
  {
    title: "Instructeur Développeur Web",
    company: "Gomycode",
    type: "Temps partiel",
    period: "12/2024 – Present",
    location: "Dakar, Sénégal",
    tasks: [
      "Enseignement des technologies web via des cours pratiques/théoriques",
      "Encadrement des apprenants et suivi de projets",
      "Promotion des bonnes pratiques et outils modernes"
    ]
  },
  {
    title: "Développeur Web Freelance",
    company: "Freelance",
    type: "Indépendant",
    period: "01/2024 – Present",
    location: "Dakar, Sénégal",
    tasks: [
      "Application de gestion de données d'une pouponnière (SUNU DOM)",
      "Application de gestion des candidatures"
    ]
  },
  {
    title: "Stagiaire Développeur MERN Stack",
    company: "Sonatel (DSI/INS/IMOC)",
    type: "Stage",
    period: "12/2023 – 06/2024",
    location: "Dakar, Sénégal",
    tasks: [
      "Développement du back-office de la plateforme Wesalo avec la stack MERN",
      "Conception d'interfaces dynamiques et responsives avec React.js et Redux",
      "Création d'API REST sécurisées avec Express.js et intégration de MongoDB",
      "Mise en place de l'authentification JWT et gestion des rôles utilisateurs",
      "Intégration AWS S3 et déploiement via onRender"
    ]
  }
];

function ProfessionalExperience() {
  return (
    <section className="py-32 px-4 bg-[#0f0f14]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Parcours
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Expériences Professionnelles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Mon parcours professionnel et mes missions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-medium text-white mb-2">
                    {exp.type}
                  </span>
                  <p className="text-gray-400 text-sm">
                    {exp.period}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {exp.location}
              </p>

              <ul className="space-y-3">
                {exp.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalExperience;
