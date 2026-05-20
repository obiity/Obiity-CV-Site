import { useState, useEffect, useLayoutEffect, Suspense } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
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
import CustomCursor from './components/ui/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

// Detect touch / mobile device (no mouse)
const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

// Fix iOS Safari 100vh bug by setting --vh CSS custom property
function useViewportFix() {
  useLayoutEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Run immediately on mount
    setVh();

    // Also run after a short delay to catch Safari toolbar resize
    const t = setTimeout(setVh, 300);

    window.addEventListener('resize', setVh, { passive: true });
    window.addEventListener('orientationchange', () => {
      // Orientation change needs extra delay for correct innerHeight
      setTimeout(setVh, 500);
    }, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', setVh);
    };
  }, []);
}

function App() {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const isTouch = isTouchDevice();

  useViewportFix();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsMounted(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // After content mounts, refresh ScrollTrigger so it recalculates
  // positions correctly for the actual mobile viewport
  useEffect(() => {
    if (!isMounted) return;

    // Double RAF ensures DOM has fully painted before refresh
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    });
  }, [isMounted]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app-container">
          {/* Custom cursor only on non-touch devices */}
          {!isTouch && <CustomCursor />}

          <Header />

          <main>
            {/* Scène 3D de fond (fixe, z-index: -1) — désactivée sur mobile
                pour économiser GPU et éviter les bugs de resize canvas */}
            {!isTouch && (
              <Suspense fallback={null}>
                <HeroScene />
              </Suspense>
            )}

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
