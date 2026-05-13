import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Portfolio />
      <Certifications />
      <Skills />
      <ProfessionalExperience />
      <Education />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
