import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sun, Moon } from 'lucide-react';
import './Header.css';
import CollaborateModal from './CollaborateModal';

const navLinks = [
  { label: 'À Propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Marketplace', href: '#store' },
  { label: 'Logiciels', href: '#tech' },
  { label: 'Expériences', href: '#cv' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLight, setIsLight] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'light'
  );

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    // Animate header in on load
    gsap.fromTo(el,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 2.8 }
    );

    // Apply background directly via inline style — bypasses every CSS specificity issue
    const applyScrollState = () => {
      const isScrolled = window.scrollY > 1;
      setScrolled(isScrolled);
      const light = document.documentElement.getAttribute('data-theme') === 'light';
      el.style.backgroundColor = isScrolled ? (light ? '#FFFFFF' : '#000000') : 'transparent';
    };

    // Run once immediately (handles page-refresh-at-scroll-position edge case)
    applyScrollState();

    window.addEventListener('scroll', applyScrollState, { passive: true });
    return () => window.removeEventListener('scroll', applyScrollState);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = isLight ? 'dark' : 'light';
    html.classList.add('theme-transitioning');
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('obiity-theme', newTheme);
    setIsLight(!isLight);
    // Update header bg immediately without waiting for next scroll
    const el = headerRef.current;
    if (el && window.scrollY > 1) {
      el.style.backgroundColor = newTheme === 'light' ? '#FFFFFF' : '#000000';
    }
    setTimeout(() => html.classList.remove('theme-transitioning'), 400);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header ref={headerRef} className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="header__nav container">
        {/* Logo */}
        <a href="#" className="header__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/OBIITY NEW-02.png" alt="Obiity" className="header__logo-img" />
        </a>

        {/* Desktop Nav */}
        <ul className="header__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="header__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="header__cta btn-primary"
          onClick={() => setModalOpen(true)}
        >
          Collaborer
        </button>

        {/* Theme Toggle */}
        <button
          className={`header__theme-btn${isLight ? ' is-light' : ''}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <Sun size={17} className="theme-icon theme-icon--sun" />
          <Moon size={17} className="theme-icon theme-icon--moon" />
        </button>

        {/* Hamburger */}
        <button
          className={`header__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <CollaborateModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
