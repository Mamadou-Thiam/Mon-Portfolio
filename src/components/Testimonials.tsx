import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  clientName: string;
  clientTitle: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Une excellente collaboration ! M.THIAM a fait preuve d'une grande rigueur technique et d'une capacité à résoudre les problèmes rapidement.",
    clientName: "M. Ndiaye",
    clientTitle: "Directeur, SUNU_DOM",
    rating: 5
  },
  {
    quote: "J'ai été impressionné par la qualité du code et l'attention aux détails, notamment sur la partie UI/UX. Le projet a été livré dans les délais.",
    clientName: "M. Ndiaye",
    clientTitle: "Fondateur, IND Location",
    rating: 5
  }
];

function Testimonials() {
  return (
    <section className="py-32 px-4 bg-[#0f0f14]" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Témoignages
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Ils parlent de moi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.clientName.charAt(2)}
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.clientName}
                  </p>
                  <p className="text-blue-400 text-sm">
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
