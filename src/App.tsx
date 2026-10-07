import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import ScrollProgress from './components/effects/ScrollProgress';
import CustomCursor from './components/effects/CustomCursor';
import MouseSpotlight from './components/effects/MouseSpotlight';
import BackToTop from './components/effects/BackToTop';

function App() {
  const [isBlog, setIsBlog] = useState(() => window.location.hash === '#/blog');

  useEffect(() => {
    const onHash = () => {
      setIsBlog(window.location.hash === '#/blog');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (isBlog) {
    return <BlogPage />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base-950">
      <ScrollProgress />
      <CustomCursor />
      <MouseSpotlight />
      <BackToTop />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <ProfessionalExperience />
        <Education />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
