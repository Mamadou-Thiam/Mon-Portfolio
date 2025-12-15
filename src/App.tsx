import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ZapierChatbot from "./components/ZapierChatbot";


function App() {
  return (
    <div className="min-h-screen bg-white">
      <ZapierChatbot />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
