import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TechStack.css';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  'Blender', 'Unreal Engine', 'Unity', 'After Effects',
  'Premiere Pro', 'DaVinci Resolve', 'Photoshop', 'Illustrator',
  'Substance Painter', 'Marvelous Designer', 'Character Creator',
  'iClone', 'Outils IA'
];

const TechStack: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const setupTimeout = setTimeout(() => {
      const items = trackRef.current!.querySelectorAll('.tech-item');

      // Floating animation — smaller range on mobile to avoid overflow
      const isMobile = window.innerWidth < 768;
      items.forEach((item, i) => {
        gsap.to(item, {
          y: isMobile ? 'random(-6, 6)' : 'random(-15, 15)',
          x: isMobile ? 'random(-4, 4)' : 'random(-10, 10)',
          rotation: isMobile ? 'random(-2, 2)' : 'random(-5, 5)',
          duration: 'random(3, 5)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.15,
        });
      });

      // Scroll reveal
      gsap.fromTo(items,
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            invalidateOnRefresh: true,
          }
        }
      );
    }, 100);

    return () => clearTimeout(setupTimeout);
  }, []);

  return (
    <section ref={sectionRef} className="tech-section container" id="tech">
      <h2 className="section-title text-center">
        Logiciels & <span className="text-gradient">Technologies</span>
      </h2>
      
      <div className="tech-container">
        <div ref={trackRef} className="tech-track">
          {technologies.map((tech, idx) => (
            <div key={idx} className="tech-item glass-panel">
              <span className="tech-name">{tech}</span>
              <div className="hologram-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
