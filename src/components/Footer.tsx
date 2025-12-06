import { Mail, Linkedin, Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Mamadou THIAM</h3>
            <p className="text-gray-400">Développeur MERN Stack | Ingénieur Cloud & DevOps</p>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:thiammamadou0020@gmail.com"
              className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mamadou-thiam-309682255"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Mamadou-Thiam"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Mamadou THIAM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
