import { useState, useEffect, useLayoutEffect, Suspense } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Routes, Route } from 'react-router-dom';
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
import ProjectPage from './pages/ProjectPage';

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

function MainLayout() {
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

  useEffect(() => {
    if (!isMounted) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
        
        // Global Parallax for .content-overlay elements
        const parallaxEls = document.querySelectorAll('[data-speed]');
        parallaxEls.forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-speed') || '0.5');
          gsap.to(el, {
            y: () => -1 * (ScrollTrigger.maxScroll(window) * speed),
            ease: 'none',
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
              invalidateOnRefresh: true,
            }
          });
        });
      });
    });
  }, [isMounted]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app-container">
          <div className="global-glow-container">
            <div className="global-glow"></div>
          </div>
          <Header />
          <main>
            {!isTouch && (
              <Suspense fallback={null}>
                <HeroScene />
              </Suspense>
            )}
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

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
