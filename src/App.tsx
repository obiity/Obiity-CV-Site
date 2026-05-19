import { useState, useEffect, Suspense } from 'react';
import Loader from './components/ui/Loader';
import Header from './components/ui/Header';
import HeroScene from './components/canvas/HeroScene';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import FabStore from './components/sections/FabStore';
import TechStack from './components/sections/TechStack';
import CV from './components/sections/CV';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app-container">
          <Header />

          <main>
            {/* Scène 3D de fond (fixe, z-index: -1) */}
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>

            {/* Contenu scrollable */}
            <div className="content-overlay">
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <FabStore />
              <TechStack />
              <CV />
              <Contact />
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
