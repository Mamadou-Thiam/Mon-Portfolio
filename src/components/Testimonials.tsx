import { testimonials } from '../data/portfolio';
import Reveal from './ui/Reveal';

function Testimonials() {
  return (
    <section className="section rule-top bg-base-900/40" aria-label="Retours clients">
      <div className="container grid gap-10 lg:grid-cols-[0.45fr_1.55fr] lg:gap-16">
        <div>
          <span className="eyebrow">
            <span className="inline-block h-px w-6 bg-accent-indigo" aria-hidden="true" />
            Retours clients
          </span>
          <p className="mt-5 font-display text-3xl leading-tight tracking-[-0.02em] text-white">
            Ce que disent les projets.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.clientName} delay={index * 80}>
              <figure className="border-t border-[rgb(var(--rule))] pt-6">
                <blockquote className="font-display text-xl leading-[1.5] text-white">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-slate-400">
                  <span className="font-medium text-white">{testimonial.clientName}</span>
                  <span className="mx-2 text-slate-600">—</span>
                  {testimonial.clientTitle}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
