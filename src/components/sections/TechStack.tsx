import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../contexts/LanguageContext';
import './TechStack.css';

gsap.registerPlugin(ScrollTrigger);



const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const setupTimeout = setTimeout(() => {
      const items = trackRef.current!.querySelectorAll('.tech-item');

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

  const row1 = ['Unreal Engine', 'Blender', 'DaVinci Resolve', 'Photoshop', 'Unity', 'OpenAI'];
  const row2 = ['After Effects', 'Substance Painter', 'Illustrator', 'ZBrush', 'iClone', 'Gemini'];
  const row3 = ['Marvelous Designer', 'Premiere Pro', 'Character Creator', 'Antigravity', 'Codex'];
  const row4 = ['Seedance', 'Kling', 'Veo', 'Flow'];

  return (
    <section ref={sectionRef} className="tech-section container" id="tech">
      <h2 className="section-title text-center">
        {t.tech.titleBefore}<span className="text-gradient">{t.tech.titleGradient}</span>
      </h2>

      <div className="tech-container">
        <div ref={trackRef} className="tech-track">
          <div className="tech-row">
            {row1.map((tech, idx) => (
              <div key={`r1-${idx}`} className="tech-item glass-panel">
                <span className="tech-name">{tech}</span>
                <div className="hologram-glow"></div>
              </div>
            ))}
          </div>
          <div className="tech-row">
            {row2.map((tech, idx) => (
              <div key={`r2-${idx}`} className="tech-item glass-panel">
                <span className="tech-name">{tech}</span>
                <div className="hologram-glow"></div>
              </div>
            ))}
          </div>
          <div className="tech-row">
            {row3.map((tech, idx) => (
              <div key={`r3-${idx}`} className="tech-item glass-panel">
                <span className="tech-name">{tech}</span>
                <div className="hologram-glow"></div>
              </div>
            ))}
          </div>
          <div className="tech-row">
            {row4.map((tech, idx) => (
              <div key={`r4-${idx}`} className="tech-item glass-panel">
                <span className="tech-name">{tech}</span>
                <div className="hologram-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
