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

    // Floating animation
    const items = trackRef.current.querySelectorAll('.tech-item');
    items.forEach((item, i) => {
      gsap.to(item, {
        y: 'random(-15, 15)',
        x: 'random(-10, 10)',
        rotation: 'random(-5, 5)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.2
      });
    });

    // Scroll reveal
    gsap.fromTo(items,
      { scale: 0, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
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
