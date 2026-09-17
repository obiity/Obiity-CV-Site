import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.css';

const Loader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(logoRef.current,
      { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(barRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power2.inOut' },
      '-=0.4'
    )
    .to([logoRef.current, subtitleRef.current, barRef.current],
      { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' },
      '+=0.2'
    )
    .to(loaderRef.current,
      { yPercent: -100, duration: 0.8, ease: 'power4.inOut' },
      '-=0.1'
    );
  }, []);

  return (
    <div ref={loaderRef} className="loader-container">
      <div className="loader-scan-line" />
      <div className="loader-content">
        <div ref={logoRef} className="loader-logo">
          <img
            src="/OBIITY NEW-02.png"
            alt="Obiity"
            className="loader-logo-img"
          />
        </div>
        <p ref={subtitleRef} className="loader-subtitle">BIENVENUE</p>
        <div className="loader-bar-track">
          <div ref={barRef} className="loader-bar-fill" />
        </div>
      </div>
      <div className="loader-corner loader-corner--tl" />
      <div className="loader-corner loader-corner--tr" />
      <div className="loader-corner loader-corner--bl" />
      <div className="loader-corner loader-corner--br" />
    </div>
  );
};

export default Loader;
