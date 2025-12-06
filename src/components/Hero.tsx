import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl flex-shrink-0">
            <img
              src="/assets/momo.jpeg"
              alt="Mamadou THIAM"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mamadou THIAM
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-6">
              Développeur MERN Stack | Ingénieur Cloud & DevOps | Administrateur Systèmes
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Développeur web et ingénieur Cloud passionné, spécialisé dans la stack MERN
              et la gestion de bases de données. Expérience dans le déploiement d'applications
              cloud sur AWS, ainsi que dans les pratiques DevOps.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="mailto:thiammamadou0020@gmail.com"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail size={20} />
                <span>Contact</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mamadou-thiam-309682255"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>774686623</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
