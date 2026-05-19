import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, ArrowUpRight } from 'lucide-react';
import './CV.css';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  { year: '2024 - Présent', role: 'Directeur Artistique 3D / XR', company: 'KTM Advance SN' },
  { year: '2022 – 2024',    role: 'Lead 3D & VFX Artist',        company: 'DAMEL Studio' },
  { year: '2021 – 2022',    role: 'Monteur vidéo',               company: 'Imagin\'Prod' },
  { year: '2020 – 2021',    role: 'Designer graphique',          company: 'Bicom Agency' },
];

const skills = [
  { name: 'Modélisation et animation 3D', level: 95 },
  { name: 'VFX & Compositing',             level: 90 },
  { name: 'Motion Design',                 level: 85 },
  { name: 'Développement web',             level: 80 },
  { name: 'IA Générative',               level: 90 },
];

const CV: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Timeline Animation
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      gsap.fromTo(items,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    // Skills Animation
    if (skillsRef.current) {
      const bars = skillsRef.current.querySelectorAll('.skill-progress-fill');
      gsap.fromTo(bars,
        { width: '0%' },
        {
          width: (_i, el) => `${el.getAttribute('data-level')}%`,
          duration: 1.5,
          ease: 'power4.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="cv-section container" id="cv">
      <h2 className="section-title text-center">
        Parcours <span className="text-gradient">& Compétences</span>
      </h2>
      
      <div className="cv-grid">
        <div className="cv-timeline glass-panel">
          <h3 className="cv-subtitle">Expériences Professionnelles</h3>
          <div ref={timelineRef} className="timeline-container">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <span className="timeline-company">{exp.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cv-skills glass-panel">
          <h3 className="cv-subtitle">Compétences Techniques</h3>
          <div ref={skillsRef} className="skills-container">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill" data-level={skill.level}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cv-download">
            <a
              href="https://drive.google.com/file/d/1kQ2dEHjcSkTJaB_3GnSULD9v0w_3XUBE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-download-btn"
            >
              <span className="cv-download-btn__glow" aria-hidden="true" />
              <Download size={17} className="cv-download-btn__dl-icon" />
              <span className="cv-download-btn__label">Télécharger le CV complet</span>
              <ArrowUpRight size={15} className="cv-download-btn__arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
