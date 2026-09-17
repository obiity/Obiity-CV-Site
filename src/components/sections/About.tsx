import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Clock, Globe, MapPin, Activity } from 'lucide-react';
import CyberMap from '../ui/CyberMap';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const animChildren = contentRef.current.querySelectorAll('.anim-child');

    // Small delay lets mobile Safari finish layout/paint before
    // ScrollTrigger measures element positions
    const setupTimeout = setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          // start earlier on mobile to avoid elements staying invisible
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // Refresh on resize/orientation change
          invalidateOnRefresh: true,
        }
      });

      tl.fromTo(animChildren,
        { y: 40, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }, 100);

    return () => clearTimeout(setupTimeout);
  }, []);

  return (
    <section ref={sectionRef} className="about-section container" id="about">
      <div ref={contentRef} className="about-content-grid">

        {/* Left column: title → bio → stats → map */}
        <div className="about-left-col">

          <div className="about-header-area anim-child">
            <h2 className="section-title">
              {t.about.titleBefore}<span className="text-gradient">{t.about.titleGradient}</span>
            </h2>
            <p className="about-bio">
              {t.about.bio}
            </p>
          </div>

          {/* Stats horizontaux — juste sous le paragraphe */}
          <div className="about-stats-area anim-child">
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-value text-gradient">6+</span>
                <span className="stat-label">{t.about.stat1Label}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value text-gradient">150+</span>
                <span className="stat-label">{t.about.stat2Label}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value text-gradient">15+</span>
                <span className="stat-label">{t.about.stat3Label}</span>
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
                  <span>{t.about.location}</span>
                </div>
                <div className="map-footer-row map-footer-availability">
                  <Activity size={13} className="map-footer-icon" />
                  <span>{t.about.availability}</span>
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
              <img src="/PP OBT.jpeg?v=3" alt="Ousmane Biteye" className="portrait-img" />
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
                <p className="role text-gradient">{t.about.role}</p>
              </div>
              <div className="meta-details">
                <div className="meta-detail-item">
                  <Briefcase size={15} className="meta-icon" />
                  <span>{t.about.freelance}</span>
                </div>
                <div className="meta-detail-item">
                  <Clock size={15} className="meta-icon" />
                  <span>{t.about.missions}</span>
                </div>
                <div className="meta-detail-item">
                  <Globe size={15} className="meta-icon" />
                  <span>{t.about.remote}</span>
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
