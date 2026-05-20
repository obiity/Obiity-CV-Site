import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Publicité pour les climatiseurs Airton',
    client: 'OBIITY',
    location: 'Dakar - 2026',
    image: '/Publicité pour les climatiseurs Airton.png',
    link: 'https://obiity.com/publicite-climatiseurs-airton',
    size: 'large'
  },
  {
    id: 2,
    title: 'Lancer Javelot - Jeu VR',
    client: 'OBIITY',
    location: 'Dakar - 2026',
    image: '/Lancer Javelot.png',
    link: 'https://obiity.com/lancer-javelot-jeu-vr',
    size: 'medium'
  },
  {
    id: 4,
    title: 'ARCHI 3D',
    client: 'OBIITY',
    location: 'Dakar - 2026',
    image: '/PLAN ARCHI 3D.png',
    link: 'https://obiity.com/plan-archi-3d',
    size: 'medium'
  },
  {
    id: 5,
    title: 'DEVENIR AGRI-ENTREPRENEUR',
    client: 'KTM ACADEMY',
    location: 'Dakar - 2026',
    image: '/DEVENIR AGRI-ENTREPRENEUR.png',
    link: 'https://obiity.com/devenir-agri-entrepreneur',
    size: 'large'
  },
  {
    id: 6,
    title: 'BOOSTGI-JOBS',
    client: 'ENCAF - KTM ADVANCE SN',
    location: 'Dakar - 2025',
    image: '/BOOSTGI-JOBS.jpeg',
    link: 'https://obiity.com/boostgi-jobs',
    size: 'medium'
  },
  {
    id: 7,
    title: 'PROJET DE DIGITALISATION',
    client: 'DER - KTM ADVANCE SN',
    location: 'Dakar - 2025',
    image: '/PROJET DE DIGITALISATION.png',
    link: 'https://obiity.com/digitalisation',
    size: 'medium'
  },
  {
    id: 8,
    title: 'ERROR 404',
    client: 'OBIITY',
    location: 'Dakar - 2025',
    image: '/ERROR 404.png',
    link: 'https://obiity.com/error-404',
    size: 'large'
  },
  {
    id: 9,
    title: 'KING OF ARENA',
    client: 'DAMEL STUDIO',
    location: 'Dakar - 2025',
    image: '/KING OF ARENA.png',
    link: 'https://obiity.com/king-of-arena',
    size: 'medium'
  },
  {
    id: 10,
    title: 'FULANI',
    client: 'DAMEL STUDIO',
    location: 'Dakar - 2023',
    image: '/FULANI.png',
    link: 'https://obiity.com/fulani',
    size: 'medium'
  },
  {
    id: 11,
    title: 'LAST LOADOUT - SURF SCOP',
    client: 'SAIPEM',
    location: 'Dakar - 2024',
    image: '/LAST LOADOUT - SURF SCOP.png',
    link: 'https://obiity.com/last-loadout',
    size: 'large'
  },
  {
    id: 12,
    title: 'CLEAN UP DAY',
    client: 'SAIPEM',
    location: 'Dakar - 2024',
    image: '/CLEAN UP DAY.png',
    link: 'https://obiity.com/clean-up-day',
    size: 'medium'
  },
  {
    id: 13,
    title: 'SAIPEM TRAINING CAMP',
    client: 'SAIPEM',
    location: 'Dakar - 2024',
    image: '/SAIPEM TRAINING CAMP.jpg',
    link: 'https://obiity.com/training-camp',
    size: 'medium'
  },
  {
    id: 15,
    title: 'FEMMES SOUS UN BAOBAB',
    client: 'UNICEF',
    location: 'Dakar - 2023',
    image: '/FEMMES SOUS UN BAOBAB.png',
    link: 'https://obiity.com/femmes-sous-un-baobab',
    size: 'large'
  },
  {
    id: 14,
    title: 'SHORT ANIMATION (TEST)',
    client: 'OBIITY',
    location: 'Dakar - 2023',
    image: '/SHORT ANIMATION (TEST).png',
    link: 'https://obiity.com/short-animation',
    size: 'medium'
  },
  {
    id: 17,
    title: 'DOLCE FRUITI (PUB)',
    client: 'OBIITY',
    location: 'Dakar - 2026',
    image: '/DOLCE FRUITI (PUB).png',
    link: 'https://obiity.com/dolce-fruiti',
    size: 'medium'
  },
  {
    id: 16,
    title: 'WNPWY - DIP DOUNDOU GUISS',
    client: 'OBIITY',
    location: 'Dakar - 2024',
    image: '/WNPWY - DIP DOUNDOU GUISS.JPG',
    link: 'https://obiity.com/wnpwy',
    size: 'large'
  },
  {
    id: 18,
    title: 'XÉÉR',
    client: 'OBIITY',
    location: 'Dakar - 2023',
    image: '/XÉÉR.png',
    link: 'https://obiity.com/xeer',
    size: 'medium'
  },
  {
    id: 19,
    title: 'CORNICHE',
    client: 'OBIITY',
    location: 'Dakar - 2023',
    image: '/CORNICHE.png',
    link: 'https://obiity.com/corniche',
    size: 'medium'
  }
];

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Detect touch device to skip mouse parallax handlers
  const isTouch = typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const setupTimeout = setTimeout(() => {
      gsap.fromTo(sectionRef.current!.querySelector('.portfolio-header'),
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            invalidateOnRefresh: true,
          }
        }
      );

      const items = sectionRef.current!.querySelectorAll('.portfolio-item');
      if (items.length > 0) {
        gsap.fromTo(items,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: galleryRef.current,
              start: 'top 88%',
              invalidateOnRefresh: true,
            }
          }
        );
      }
    }, 100);

    return () => clearTimeout(setupTimeout);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return; // skip on touch devices
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = x - xc;
    const dy = y - yc;
    const img = card.querySelector('.portfolio-image') as HTMLImageElement;
    if (img) {
      img.style.transform = `scale(1.1) translate(${dx * 0.05}px, ${dy * 0.05}px)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return; // skip on touch devices
    const card = e.currentTarget;
    const img = card.querySelector('.portfolio-image') as HTMLImageElement;
    if (img) {
      img.style.transform = `scale(1) translate(0px, 0px)`;
    }
  };

  return (
    <section ref={sectionRef} className="portfolio-section container" id="portfolio">
      <div className="portfolio-header">
        <h2 className="section-title">
          Créations <span className="text-gradient">& Projets</span>
        </h2>
      </div>

      <div ref={galleryRef} className="portfolio-gallery">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`portfolio-item ${project.size}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="portfolio-image-wrapper">
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <div className="portfolio-overlay-content">
                  <div className="project-meta">
                    <span className="project-client">{project.client}</span>
                    <span className="project-dot">•</span>
                    <span className="project-location">{project.location}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-project-btn"
                  >
                    Explorer le projet <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="other-projects-section">
        <h3 className="other-projects-title">Autres projets</h3>
        <div className="other-projects-image-wrapper">
          <img src="/AUTRES PROJETS.png" alt="Autres projets" className="other-projects-image" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
