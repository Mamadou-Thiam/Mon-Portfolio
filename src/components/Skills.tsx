import { skillCategories } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function Skills() {
  return (
    <section id="skills" className="section rule-top bg-base-900/40">
      <div className="container">
        <SectionHeading
          eyebrow="Compétences"
          title="Une stack complète, du socle à l’interface"
          subtitle="Technologies et outils utilisés dans mes projets et missions. Aucune notation arbitraire : ce qui compte, c’est ce que j’ai construit avec."
        />

        <div className="mt-14 grid gap-x-12 border-t border-[rgb(var(--rule))] md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 2) * 70}>
              <article className="border-b border-[rgb(var(--rule))] py-7">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs tabular-nums text-accent-indigo">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl tracking-[-0.01em] text-white">{category.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 pl-8 text-sm text-slate-300">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skill} className="flex items-center gap-3">
                      {skillIndex > 0 && <span className="h-1 w-1 rounded-full bg-slate-600" aria-hidden="true" />}
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
