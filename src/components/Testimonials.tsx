import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function Testimonials() {
  return (
    <section id="testimonials" className="section-shell bg-base-900/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Témoignages"
          title={
            <>
              Ils parlent <span className="text-gradient">de moi</span>
            </>
          }
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={`${testimonial.clientTitle}-${index}`} delay={index * 120}>
              <figure className="card-premium hover-glow relative h-full p-8">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-white/5" />

                <div className="mb-5 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-base italic leading-relaxed text-slate-300">
                  “{testimonial.quote}”
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient font-display font-bold text-white">
                    {testimonial.clientName.replace(/[^A-Za-zÀ-ÿ]/g, '').charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.clientName}</p>
                    <p className="text-xs text-accent-sky">{testimonial.clientTitle}</p>
                  </div>
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
