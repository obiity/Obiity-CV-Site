import { useState, useEffect, Suspense, lazy } from 'react';
import Loader from './components/ui/Loader';
import Header from './components/ui/Header';
import HeroScene from './components/canvas/HeroScene';
import Hero from './components/sections/Hero';
import About from './components/sections/About';

// Sections below the fold — loaded lazily to reduce initial bundle
const Services  = lazy(() => import('./components/sections/Services'));
const Portfolio = lazy(() => import('./components/sections/Portfolio'));
const FabStore  = lazy(() => import('./components/sections/FabStore'));
const TechStack = lazy(() => import('./components/sections/TechStack'));
const CV        = lazy(() => import('./components/sections/CV'));
const Contact   = lazy(() => import('./components/sections/Contact'));

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
              <Suspense fallback={null}><Services /></Suspense>
              <Suspense fallback={null}><Portfolio /></Suspense>
              <Suspense fallback={null}><FabStore /></Suspense>
              <Suspense fallback={null}><TechStack /></Suspense>
              <Suspense fallback={null}><CV /></Suspense>
              <Suspense fallback={null}><Contact /></Suspense>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
