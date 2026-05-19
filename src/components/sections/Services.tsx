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
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: 1, title: '3D',                  desc: 'Modélisation, texturing, rendu photoréaliste',       icon: Box },
  { id: 2, title: 'VFX',                 desc: 'Compositing, simulations, effets spéciaux',           icon: Wand2 },
  { id: 3, title: 'Motion Design',       desc: 'Animation graphique, motion branding',                icon: Video },
  { id: 4, title: 'Montage Vidéo',       desc: 'Post-production, colour grading',                     icon: MonitorPlay },
  { id: 5, title: 'VR / AR / MR',        desc: 'Expériences immersives temps réel',                   icon: Glasses },
  { id: 6, title: 'IA Générative',       desc: 'Creative AI, génération visuelle augmentée',          icon: Brain },
  { id: 7, title: 'Développement Web',   desc: 'Sites interactifs, Three.js, WebGL',                 icon: Code },
  { id: 8, title: 'Serious & E-Learning',desc: 'Jeux pédagogiques, simulations et modules de formation', icon: Gamepad2 },
  { id: 9, title: 'Design Graphique',    desc: 'Identité visuelle, UI/UX, print & digital',          icon: Palette },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

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
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="services-section container" id="services">
      <h2 className="section-title text-center">
        Expertise &amp; <span className="text-gradient">Services</span>
      </h2>
      
      <div className="services-grid">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div 
              key={srv.id}
              ref={el => { cardsRef.current[idx] = el; }}
              className="service-card glass-panel"
            >
              <div className="service-icon-wrapper">
                <Icon size={32} className="service-icon" />
              </div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
