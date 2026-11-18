import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import BlogPage from './pages/BlogPage';

function App() {
  const [isBlog, setIsBlog] = useState(() => window.location.hash === '#/blog');

  useEffect(() => {
    const onHash = () => {
      setIsBlog(window.location.hash === '#/blog');
      if (window.location.hash === '#/blog') window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (isBlog) {
    return <BlogPage />;
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-base-950 pb-20 md:pb-0">
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <ProfessionalExperience />
        <Education />
        <Testimonials />
        <Contact />
      </main>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}

export default App;
