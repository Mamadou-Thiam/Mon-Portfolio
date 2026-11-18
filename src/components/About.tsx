import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const domains = [
  {
    number: '01',
    title: 'Ingénierie systèmes, réseaux & cloud',
    text: 'Infrastructure cloud, virtualisation Proxmox VE, Linux et Windows Server, réseaux, sécurité et haute disponibilité.',
  },
  {
    number: '02',
    title: 'Développement Full Stack MERN',
    text: 'Applications React, Node.js, Express et MongoDB, de la conception de l’interface à la mise en production.',
  },
  {
    number: '03',
    title: 'Formation en développement web',
    text: 'Instructeur chez GoMyCode : enseignement, encadrement d’apprenants et transmission des bonnes pratiques.',
  },
];

function About() {
  return (
    <section id="about" className="section rule-top">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeading
          eyebrow="À propos"
          title={
            <>
              Trois domaines, <span className="italic text-accent-indigo">une même exigence</span>.
            </>
          }
        />

        <div>
          <Reveal>
            <div className="space-y-5 text-base leading-[1.85] text-slate-300">
              <p>
                Je travaille à l’intersection de l’ingénierie systèmes, du développement full stack et
                de la formation. Trois domaines complémentaires qui me permettent de suivre un projet
                de l’architecture jusqu’à l’interface utilisateur.
              </p>
              <p>
                Mon parcours va d’une Licence en Management Informatisé des Organisations à un Master
                2 Systèmes, Réseaux et Cloud à l’IAM, en passant par le bootcamp FullStack JavaScript
                de GoMyCode. J’ai rejoint cet écosystème comme instructeur en développement web en
                décembre 2024.
              </p>
              <p>
                Chez Sonatel, j’ai développé le back-office de Wesalo avec React, Redux, Express et
                MongoDB. En freelance, j’ai livré SenPrix, SUNU DOM, JobSen et plusieurs plateformes
                métier. J’accorde autant d’attention au code qu’à l’infrastructure qui l’exécute&nbsp;:
                Docker, Proxmox VE, CI/CD et automatisation des déploiements.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 border-t border-[rgb(var(--rule))]">
            {domains.map((domain, index) => (
              <Reveal key={domain.number} delay={index * 70}>
                <div className="grid gap-2 border-b border-[rgb(var(--rule))] py-5 sm:grid-cols-[3rem_1fr] sm:gap-4">
                  <span className="text-xs tabular-nums text-accent-indigo">{domain.number}</span>
                  <div>
                    <h3 className="font-display text-xl tracking-[-0.01em] text-white">{domain.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">{domain.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
