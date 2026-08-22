import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../contexts/LanguageContext';
import './CV.css';

gsap.registerPlugin(ScrollTrigger);

const SKILL_LEVELS = [95, 90, 85, 80, 90];

const EXPERIENCE_COMPANIES = [
  'KTM Advance SN',
  'DAMEL Studio',
  "Imagin'Prod",
  'Bicom Agency',
];

const EXPERIENCE_YEAR_STARTS = ['2024', '2022 – 2024', '2021 – 2022', '2020 – 2021'];

const CV: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const experiences = EXPERIENCE_YEAR_STARTS.map((yearStr, i) => ({
    year: i === 0 ? `${yearStr} - ${t.cv.present}` : yearStr,
    role: t.cv.roles[i],
    company: EXPERIENCE_COMPANIES[i],
  }));

  const skills = t.cv.skillNames.map((name, i) => ({ name, level: SKILL_LEVELS[i] }));

  useEffect(() => {
    if (!sectionRef.current) return;

    const setupTimeout = setTimeout(() => {
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll('.timeline-item');
        gsap.fromTo(items,
          { x: -50, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 85%',
              invalidateOnRefresh: true,
            }
          }
        );
      }

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
              start: 'top 85%',
              invalidateOnRefresh: true,
            }
          }
        );
      }
    }, 100);

    return () => clearTimeout(setupTimeout);
  }, []);

  return (
    <section ref={sectionRef} className="cv-section container" id="cv">
      <h2 className="section-title text-center">
        {t.cv.titleBefore}<span className="text-gradient">{t.cv.titleGradient}</span>
      </h2>

      <div className="cv-grid">
        <div className="cv-timeline glass-panel">
          <h3 className="cv-subtitle">{t.cv.expTitle}</h3>
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
          <h3 className="cv-subtitle">{t.cv.skillsTitle}</h3>
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
        </div>
      </div>
    </section>
  );
};

export default CV;
