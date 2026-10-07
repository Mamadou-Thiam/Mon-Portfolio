import { skillCategories } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function Skills() {
  return (
    <section id="skills" className="section-shell bg-base-900/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Stack technique"
          title={
            <>
              Mes <span className="text-gradient">compétences</span>
            </>
          }
          subtitle="Un écosystème complet, du frontend à l'infrastructure cloud, en passant par la data."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 3) * 90}>
              <article className="card-premium hover-glow group h-full p-6 sm:p-7">
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} text-[#fff] shadow-lg transition-transform duration-500 group-hover:scale-110`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/15 bg-white/[0.08] px-3 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-indigo/60 hover:bg-white/[0.12]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
