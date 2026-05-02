import { Linkedin, Mail, Phone, MapPin, ArrowDown } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Disponible pour des projets</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Mamadou</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                THIAM
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-4 font-light">
              Développeur Full Stack & Cloud Engineer
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl text-lg">
              Je transforme vos idées en solutions digitales robustes. Spécialiste MERN Stack,
              Cloud AWS et DevOps. De l'architecture à la production, je construis le futur.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href="mailto:thiammamadou0020@gmail.com"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                <Mail size={20} />
                <span className="font-medium">Me contacter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mamadou-thiam-309682255"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-gray-400">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} />
                <span>77 468 66 23</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin size={16} />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src="/assets/momo.jpeg"
                alt="Mamadou THIAM"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-6 -right-6 bg-[#0a0a0f] border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-white">MERN Stack</p>
                  {/* <p className="text-xs text-gray-400">Expert</p> */}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[#0a0a0f] border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M3 15a4 4 0 004 4h14a4 4 0 004-4M5 15l-2-2m2 2l-2 2m8-2l2-2m-2 2l2 2" />
                  <path d="M12 3v18M8 6a4 4 0 014-4h0a4 4 0 010 8h-4" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-white">Cloud & DevOps</p>
                  {/* <p className="text-xs text-gray-400">AWS Certified</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
