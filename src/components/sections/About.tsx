import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Clock, Globe, MapPin, Activity } from 'lucide-react';
import CyberMap from '../ui/CyberMap';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const animChildren = contentRef.current.querySelectorAll('.anim-child');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(animChildren,
      { y: 40, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  return (
    <section ref={sectionRef} className="about-section container" id="about">
      <div ref={contentRef} className="about-content-grid">

        {/* Left column: title → bio → stats → map */}
        <div className="about-left-col">

          <div className="about-header-area anim-child">
            <h2 className="section-title">
              À <span className="text-gradient">Propos</span>
            </h2>
            <p className="about-bio">
              « Spécialisé dans la conception d'expériences immersives, je développe des projets qui combinent 3D, XR, vidéo et intelligence artificielle. Mon travail s'appuie sur la direction artistique, les technologies émergentes et la narration visuelle pour créer des univers interactifs, innovants et engageants, conçus pour offrir une expérience digitale forte et mémorable. »
            </p>
          </div>

          {/* Stats horizontaux — juste sous le paragraphe */}
          <div className="about-stats-area anim-child">
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-value text-gradient">6+</span>
                <span className="stat-label">Années d'expérience</span>
              </div>
              <div className="stat-item">
                <span className="stat-value text-gradient">150+</span>
                <span className="stat-label">Projets réalisés</span>
              </div>
              <div className="stat-item">
                <span className="stat-value text-gradient">15+</span>
                <span className="stat-label">Références</span>
              </div>
            </div>
          </div>

          {/* Carte — juste sous les stats */}
          <div className="about-map-area anim-child">
            <div className="about-map-card">
              <CyberMap />
              <div className="map-location-footer">
                <div className="map-footer-row">
                  <MapPin size={13} className="map-footer-icon" />
                  <span>Basé à Dakar</span>
                </div>
                <div className="map-footer-row map-footer-availability">
                  <Activity size={13} className="map-footer-icon" />
                  <span>Disponible H24</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right column: portrait */}
        <div className="about-portrait-area anim-child">
          <div className="identity-portrait-card glass-panel">
            <div className="portrait-wrapper">
              <div className="portrait-glow"></div>
              <img src="/PP.png" alt="Ousmane Biteye" className="portrait-img" />
              <div className="portrait-scanline"></div>
              <div className="portrait-borders">
                <span className="corner tl"></span>
                <span className="corner tr"></span>
                <span className="corner bl"></span>
                <span className="corner br"></span>
              </div>
            </div>
            <div className="identity-meta">
              <div className="meta-text">
                <h3>Ousmane Biteye</h3>
                <p className="role text-gradient">Artiste 3D / Dev Créatif</p>
              </div>
              <div className="meta-details">
                <div className="meta-detail-item">
                  <Briefcase size={15} className="meta-icon" />
                  <span>Disponible pour freelance & consulting</span>
                </div>
                <div className="meta-detail-item">
                  <Clock size={15} className="meta-icon" />
                  <span>Ouvert aux missions courtes ou longues durées</span>
                </div>
                <div className="meta-detail-item">
                  <Globe size={15} className="meta-icon" />
                  <span>Travail à distance ou hybride</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
