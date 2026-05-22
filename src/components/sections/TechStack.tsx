import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './TechStack.css';

gsap.registerPlugin(ScrollTrigger);

const STATIC_TECHS = [
  'Blender', 'Unreal Engine', 'Unity', 'After Effects',
  'Premiere Pro', 'DaVinci Resolve', 'Photoshop', 'Illustrator',
  'Substance Painter', 'Marvelous Designer', 'Character Creator',
  'iClone',
];

const MOBILE_CATEGORY_ITEMS: { label: string; items: string[] }[] = [
  { label: '3D & Animation',     items: ['Blender', 'Unreal Engine', 'Unity', 'Substance Painter', 'Marvelous Designer', 'Character Creator', 'iClone'] },
  { label: 'Vidéo & Motion',     items: ['After Effects', 'Premiere Pro', 'DaVinci Resolve'] },
  { label: 'Design & Image',     items: ['Photoshop', 'Illustrator'] },
];

const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const [openCats, setOpenCats] = useState<Set<string>>(new Set());

  const toggleCat = (label: string) => {
    setOpenCats(prev => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;
    if (window.innerWidth < 768) return; // skip GSAP on mobile — desktop bubbles are hidden

    const setupTimeout = setTimeout(() => {
      const items = trackRef.current!.querySelectorAll('.tech-item');

      items.forEach((item, i) => {
        gsap.to(item, {
          y: 'random(-15, 15)',
          x: 'random(-10, 10)',
          rotation: 'random(-5, 5)',
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

  const technologies = [...STATIC_TECHS, t.tech.aiTools];

  const mobileCategories = [
    ...MOBILE_CATEGORY_ITEMS,
    { label: 'IA & Création', items: [t.tech.aiTools] },
  ];

  return (
    <section ref={sectionRef} className="tech-section container" id="tech">
      <h2 className="section-title text-center">
        {t.tech.titleBefore}<span className="text-gradient">{t.tech.titleGradient}</span>
      </h2>

      {/* ── Desktop: floating bubbles ── */}
      <div className="tech-container">
        <div ref={trackRef} className="tech-track">
          {technologies.map((tech, idx) => (
            <div key={idx} className="tech-item glass-panel">
              <span className="tech-name">{tech}</span>
              <div className="hologram-glow" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile: accordion categories ── */}
      <div className="tech-accordion">
        {mobileCategories.map(cat => {
          const isOpen = openCats.has(cat.label);
          return (
            <div key={cat.label} className={`tech-cat${isOpen ? ' tech-cat--open' : ''}`}>
              <button
                className="tech-cat__header"
                onClick={() => toggleCat(cat.label)}
                aria-expanded={isOpen}
              >
                <span className="tech-cat__title">{cat.label}</span>
                <span className="tech-cat__count">{cat.items.length} outil{cat.items.length > 1 ? 's' : ''}</span>
                <ChevronDown size={15} className="tech-cat__chevron" />
              </button>
              <div className="tech-cat__body">
                <div className="tech-cat__items">
                  {cat.items.map((item, i) => (
                    <span key={i} className="tech-cat__pill">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
