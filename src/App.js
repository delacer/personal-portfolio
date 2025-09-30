import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      {/* Navigation & Scroll Bar */}
      <Navbar />
      <ScrollProgress />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="scroll-mt-20">
          <Hero />
        </section>
        <section className="scroll-mt-20">
          <About />
        </section>
        <section className="scroll-mt-20">
          <Skills />
        </section>
        <section className="scroll-mt-20">
          <Portfolio />
        </section>
        <section className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
