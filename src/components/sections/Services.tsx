import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Box,
  Wand2,
  Video,
  MonitorPlay,
  Glasses,
  Brain,
  Code,
  Gamepad2,
  Palette
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICE_ICONS = [Box, Wand2, Video, MonitorPlay, Glasses, Brain, Code, Gamepad2, Palette];

const Services = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const setupTimeout = setTimeout(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          }
        }
      );
    }, 100);

    return () => clearTimeout(setupTimeout);
  }, []);

  return (
    <section ref={sectionRef} className="services-section container" id="services">
      <h2 className="section-title text-center">
        {t.services.titleBefore}<span className="text-gradient">{t.services.titleGradient}</span>
      </h2>

      <div className="services-grid">
        {t.services.items.map((srv, idx) => {
          const Icon = SERVICE_ICONS[idx];
          return (
            <div
              key={idx}
              ref={el => { cardsRef.current[idx] = el; }}
              className="service-card glass-panel"
            >
              <div className="service-header-row">
                <div className="service-icon-wrapper">
                  <Icon size={26} className="service-icon" />
                </div>
                <h3 className="service-title">{srv.title}</h3>
              </div>
              <p className="service-desc">{srv.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
