import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import './Hero.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['/hero_bg_1.png', '/hero_bg_2.png', '/hero_bg_3.png'];

  // Immediately make elements visible to avoid "stuck invisible" on mobile
  // if GSAP animation is delayed too long or doesn't fire correctly
  useLayoutEffect(() => {
    const els = [
      eyebrowRef.current,
      subtitleRef.current,
      scrollRef.current,
      ...(ctaRef.current ? Array.from(ctaRef.current.children) : []),
    ].filter(Boolean);
    // Force a visible fallback — GSAP will override immediately when it runs
    els.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '0';
      }
    });
    if (titleRef.current) {
      const lines = titleRef.current.querySelectorAll('.title-line');
      lines.forEach((line) => {
        if (line instanceof HTMLElement) line.style.opacity = '0';
      });
    }
  }, []);

  useEffect(() => {
    // Performant passive GPU parallax effect
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrolled = window.scrollY;
        sliderRef.current.style.transform = `translate3d(0, ${scrolled * 0.35}px, 0)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  useEffect(() => {
    const delay = 2.9;
    const tl = gsap.timeline({ delay });

    tl.fromTo(eyebrowRef.current,
      { opacity: 0, y: 20, letterSpacing: '0.5em' },
      { opacity: 1, y: 0, letterSpacing: '0.3em', duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(titleRef.current?.querySelectorAll('.title-line') ?? [],
      { y: 120, opacity: 0, skewY: 5 },
      { y: 0, opacity: 1, skewY: 0, duration: 1, stagger: 0.15, ease: 'power4.out' },
      '-=0.3'
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(Array.from(ctaRef.current?.children ?? []),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.2'
    );

    // Floating scroll indicator
    gsap.to(scrollRef.current, {
      y: 12,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: delay + 1,
    });
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="home">
      {/* Cinematic Background Slider */}
      <div ref={sliderRef} className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      {/* Premium Dark Overlays */}
      <div className="hero-overlay hero-overlay--radial" />
      <div className="hero-overlay hero-overlay--linear" />

      {/* Holographic grid */}
      <div className="hero-grid-bg" />
      {/* Glow orb */}
      <div className="hero-orb hero-orb--cyan" />
      <div className="hero-orb hero-orb--violet" />

      <div ref={containerRef} className="hero-content container">

        <span ref={eyebrowRef} className="hero-eyebrow">
          {t.hero.eyebrow}
        </span>

        <h1 ref={titleRef} className="hero-title">
          <div className="title-line-wrapper">
            <div className="title-line">{t.hero.line1}</div>
          </div>
          <div className="title-line-wrapper">
            <div className="title-line">
              &amp;&nbsp;<span className="text-gradient">{t.hero.line2Gradient}</span>
            </div>
          </div>
        </h1>

        <p ref={subtitleRef} className="hero-subtitle">
          {t.hero.subtitle}
        </p>

        <div ref={ctaRef} className="hero-cta-group">
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.hero.cta1}
          </button>
          <button
            className="btn-secondary"
            onClick={() => window.open('https://drive.google.com/file/d/1kQ2dEHjcSkTJaB_3GnSULD9v0w_3XUBE/view?usp=sharing', '_blank', 'noopener,noreferrer')}
          >
            {t.hero.cta2}
          </button>
          <button
            className="btn-tertiary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.hero.cta3}
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="hero-scroll-indicator" onClick={scrollToAbout}>
        <ArrowDown size={20} />
        <span>{t.hero.scroll}</span>
      </div>
    </section>
  );
};

export default Hero;
