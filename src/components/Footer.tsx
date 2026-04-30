import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white py-16 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mamadou THIAM
            </h3>
            <p className="text-gray-400">Full Stack Developer & Cloud Engineer</p>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:thiammamadou0020@gmail.com"
              className="p-3 bg-white/5 hover:bg-blue-600/20 border border-white/10 rounded-full transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-400 group-hover:text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/mamadou-thiam-309682255"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-blue-600/20 border border-white/10 rounded-full transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-400 group-hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/Mamadou-Thiam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-blue-600/20 border border-white/10 rounded-full transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-400 group-hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mamadou THIAM. Tous droits réservés.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Retour en haut</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
