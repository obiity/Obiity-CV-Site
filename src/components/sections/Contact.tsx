import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const SocialIcons = {
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Fab: () => (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
};

const socialLinks = [
  { name: 'LinkedIn',  href: 'https://www.linkedin.com/in/ousmane-biteye-8a7a55198/', Icon: SocialIcons.LinkedIn,  label: null },
  { name: 'Instagram', href: 'https://www.instagram.com/obiity/',                      Icon: SocialIcons.Instagram, label: null },
  { name: 'FAB',       href: 'https://www.fab.com/sellers/Obiity_3D?lang=fr',          Icon: SocialIcons.Fab,       label: 'FAB' },
];

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef    = useRef<HTMLElement>(null);
  const leftRef       = useRef<HTMLDivElement>(null);
  const rightRef      = useRef<HTMLDivElement>(null);

  const contactItems = [
    { icon: MapPin, label: t.contact.locationLabel, value: 'Dakar, Sénégal',    href: null },
    { icon: Phone,  label: t.contact.phoneLabel,    value: '+221 77 374 33 56', href: 'tel:+221773743356' },
    { icon: Mail,   label: t.contact.emailLabel,    value: 'obiity1@gmail.com', href: 'mailto:obiity1@gmail.com' },
  ];

  useEffect(() => {
    const left  = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    const setupTimeout = setTimeout(() => {
      gsap.fromTo(
        left.querySelectorAll('.c-anim'),
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: left,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          }
        }
      );

      gsap.fromTo(
        right,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: right,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          }
        }
      );
    }, 100);

    return () => clearTimeout(setupTimeout);
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);
    setErrorMessage('');
    try {
      await sendContactEmail(formState);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 7000);
    } catch (err: any) {
      setHasError(true);
      setErrorMessage(err.message || '');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="contact-section" id="contact">
      <div className="contact-glow contact-glow--left"  aria-hidden="true" />
      <div className="contact-glow contact-glow--right" aria-hidden="true" />

      <div className="contact-inner container">
        {/* ── LEFT ── */}
        <div ref={leftRef} className="contact-left">
          <span className="contact-eyebrow c-anim">{t.contact.eyebrow}</span>

          <h2 className="section-title c-anim">
            {t.contact.titleBefore}<span className="text-gradient">{t.contact.titleGradient}</span>
          </h2>

          <p className="contact-tagline c-anim">
            {t.contact.tagline1}<br/>
            {t.contact.tagline2}
          </p>

          <ul className="contact-info-list c-anim">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="contact-info-item">
                <div className="contact-info-icon">
                  <Icon size={17} />
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">{label}</span>
                  {href ? (
                    <a href={href} className="contact-info-value contact-info-link">{value}</a>
                  ) : (
                    <span className="contact-info-value">{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="contact-socials c-anim">
            <span className="contact-socials-label">{t.contact.findMe}</span>
            <div className="contact-socials-row">
              {socialLinks.map(({ name, href, Icon, label }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-social-btn${label ? ' contact-social-btn--wide' : ''}`}
                  aria-label={name}
                >
                  <Icon />
                  {label && <span>{label}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — DIRECT ACTIONS ── */}
        <div ref={rightRef} className="contact-right">
          <div className="contact-actions-panel">
            <div className="form-accent-line" aria-hidden="true" />

            <div className="actions-header">
              <div className="actions-header-title">
                <h3 className="actions-title">Démarrer un Projet</h3>
                <span className="actions-subtitle">Sélectionnez votre canal de communication préféré</span>
              </div>
              <div className="actions-status-badge">
                <span className="status-ping" />
                <span className="status-text">DISPONIBLE</span>
              </div>
            </div>

            <div className="contact-cards-grid">
              {/* ── CARD 1: EMAIL DIRECT ── */}
              <a
                href="mailto:obiity1@gmail.com?subject=Demande%20de%20projet%20%E2%80%94%20Obiity&body=Bonjour%20Ousmane%2C%0A%0AJe%20vous%20contacte%20suite%20%C3%A0%20la%20d%C3%A9couverte%20de%20votre%20portfolio.%0A%0AJ%27aimerais%20%C3%A9changer%20avec%20vous%20concernant%20un%20projet%20%3A%0A%0A%E2%80%A2%20Type%20de%20projet%20%283D%2C%20VFX%2C%20Motion%2C%20IA%2C%20XR%2C%20Web%29%20%3A%0A%E2%80%A2%20Description%20%2F%20Objectifs%20%3A%0A%E2%80%A2%20%C3%89ch%C3%A9ance%20souhait%C3%A9e%20%3A%0A%0ABien%20cordialement%2C"
                className="contact-action-card contact-action-card--email"
              >
                <div className="action-card-glow" />
                <div className="action-card-header">
                  <div className="action-icon-wrapper action-icon-wrapper--email">
                    <Mail size={22} />
                  </div>
                  <span className="action-badge action-badge--email">Mail Direct</span>
                </div>

                <div className="action-card-body">
                  <h4 className="action-card-title">Message par Email</h4>
                  <span className="action-card-detail">obiity1@gmail.com</span>
                  <p className="action-card-desc">
                    Idéal pour transmettre un cahier des charges, demander un devis ou partager un brief détaillé.
                  </p>
                </div>

                <div className="action-card-footer">
                  <span className="action-cta-text">Envoyer un Email</span>
                  <div className="action-arrow-btn action-arrow-btn--email">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </a>

              {/* ── CARD 2: WHATSAPP DIRECT ── */}
              <a
                href="https://wa.me/221773743356?text=Bonjour%20Ousmane%2C%20je%20souhaite%20discuter%20d%27un%20projet."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-card contact-action-card--whatsapp"
              >
                <div className="action-card-glow" />
                <div className="action-card-header">
                  <div className="action-icon-wrapper action-icon-wrapper--whatsapp">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <span className="action-badge action-badge--whatsapp">Instantus</span>
                </div>

                <div className="action-card-body">
                  <h4 className="action-card-title">Discussion WhatsApp</h4>
                  <span className="action-card-detail">+221 77 374 33 56</span>
                  <p className="action-card-desc">
                    Pour un échange instantané, réactif et direct concernant vos besoins visuels et 3D/VFX.
                  </p>
                </div>

                <div className="action-card-footer">
                  <span className="action-cta-text">Ouvrir WhatsApp</span>
                  <div className="action-arrow-btn action-arrow-btn--whatsapp">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="contact-footer-inner container">
          <p>{t.contact.footerPrefix} {new Date().getFullYear()} {t.contact.footerSuffix}</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
