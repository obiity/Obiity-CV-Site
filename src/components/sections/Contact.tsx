import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { sendContactEmail } from '../../lib/emailService';
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
  const formRef       = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted,    setSubmitted]    = useState(false);
  const [hasError,     setHasError]     = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

        {/* ── RIGHT — FORM ── */}
        <div ref={rightRef} className="contact-right">
          <form
            ref={formRef}
            className="contact-form-premium"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-accent-line" aria-hidden="true" />

            {submitted ? (
              <div className="form-success">
                <div className="success-ring">
                  <div className="success-check">✓</div>
                </div>
                <h3>{t.contact.successTitle}</h3>
                <p>{t.contact.successMsg}</p>
              </div>
            ) : (
              <>
                <div className="form-title-row">
                  <h3 className="form-title">{t.contact.formTitle}</h3>
                  <span className="form-badge">{t.contact.badge}</span>
                </div>

                {hasError && (
                  <div className="form-error-msg" role="alert">
                    {errorMessage ? `${errorMessage}. ` : `${t.contact.errorMsg} `}
                    <a href={`mailto:${t.contact.errorEmail}`}>{t.contact.errorEmail}</a>.
                  </div>
                )}

                <div className="form-row-duo">
                  <div className="form-field">
                    <label htmlFor="c-name">{t.contact.nameLabel}</label>
                    <input
                      id="c-name"
                      type="text"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-email">{t.contact.emailFieldLabel}</label>
                    <input
                      id="c-email"
                      type="email"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="c-subject">{t.contact.subjectLabel}</label>
                  <input
                    id="c-subject"
                    type="text"
                    value={formState.subject}
                    onChange={e => setFormState({ ...formState, subject: e.target.value })}
                    placeholder={t.contact.subjectPlaceholder}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="c-message">{t.contact.messageLabel}</label>
                  <textarea
                    id="c-message"
                    rows={5}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="form-cta-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="form-cta-loading">
                      <span className="form-cta-spinner" />
                      {t.contact.sending}
                    </span>
                  ) : (
                    <>
                      <Send size={17} />
                      <span>{t.contact.send}</span>
                      <ArrowUpRight size={15} className="form-cta-arrow" />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
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
