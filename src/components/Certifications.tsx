import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'CCNA : Introduction aux réseaux',
    issuer: 'Cisco Networking Academy',
    icon: '🌐',
    color: 'from-blue-500 to-cyan-600',
    badge: 'bg-blue-500/20 text-blue-400',
  },
  {
    title: 'CCNA : Commutation, routage et bases du sans-fil',
    issuer: 'Cisco Networking Academy',
    icon: '🔌',
    color: 'from-cyan-500 to-blue-600',
    badge: 'bg-blue-500/20 text-blue-400',
  },
  {
    title: 'Certificat de formation - Programme de formation / intégration des instructeurs',
    issuer: 'Gomycode',
    icon: '👨‍🏫',
    color: 'from-yellow-500 to-orange-500',
    badge: 'bg-yellow-500/20 text-yellow-400',
  },
  {
    title: 'Certificat de réussite - Bootcamp Full-Stack JavaScript',
    issuer: 'Gomycode',
    icon: '💻',
    color: 'from-purple-500 to-pink-500',
    badge: 'bg-purple-500/20 text-purple-400',
  },
  {
    title: 'Certificat de réussite - Analyse de données (Microsoft Power BI)',
    issuer: 'Microsoft / Gomycode',
    icon: '📊',
    color: 'from-green-500 to-emerald-500',
    badge: 'bg-green-500/20 text-green-400',
  },
];

function Certifications() {
  return (
    <section className="py-32 px-4 bg-[#0a0a0f]" id="certifications">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Certifications
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Certifications professionnelles obtenues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0 mt-1">
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <h3 className="text-base font-bold text-white leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${cert.badge}`}>
                    {cert.issuer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-2">Formation Continue</h3>
          <p className="text-blue-100/80">
            Toujours en quête d'apprentissage et d'amélioration de mes compétences
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
