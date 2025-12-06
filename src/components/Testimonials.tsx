import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  clientName: string;
  clientTitle: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Une excellente collaboration ! M.THIAM a fait preuve d'une grande rigueur technique et d'une capacité à résoudre les problèmes rapidement.",
    clientName: "M. Ndiaye",
    clientTitle: "Directeur, SUNU_DOM"
  },
  {
    quote: "J'ai été impressionné par la qualité du code et l'attention aux détails, notamment sur la partie UI/UX. Le projet a été livré dans les délais.",
    clientName: "M. Ndiaye",
    clientTitle: "Fondateur, IND Location"
  }
];

function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Ce qu'ils disent de mon travail
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute top-6 left-6 text-blue-600 opacity-20">
                <Quote size={48} />
              </div>

              <div className="relative z-10">
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonial.clientName}
                  </p>
                  <p className="text-blue-600 text-sm mt-1">
                    {testimonial.clientTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
