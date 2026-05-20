import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
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

const contactItems = [
  { icon: MapPin, label: 'Localisation', value: 'Dakar, Sénégal',    href: null },
  { icon: Phone,  label: 'Téléphone',   value: '+221 77 374 33 56', href: 'tel:+221773743356' },
  { icon: Mail,   label: 'Email',       value: 'obiity1@gmail.com', href: 'mailto:obiity1@gmail.com' },
];

const socialLinks = [
  { name: 'LinkedIn',  href: 'https://www.linkedin.com/in/ousmane-biteye-8a7a55198/', Icon: SocialIcons.LinkedIn,  label: null },
  { name: 'Instagram', href: 'https://www.instagram.com/obiity/',                      Icon: SocialIcons.Instagram, label: null },
  { name: 'FAB',       href: 'https://www.fab.com/sellers/Obiity_3D?lang=fr',          Icon: SocialIcons.Fab,       label: 'FAB' },
];

const Contact: React.FC = () => {
  const sectionRef    = useRef<HTMLElement>(null);
  const leftRef       = useRef<HTMLDivElement>(null);
  const rightRef      = useRef<HTMLDivElement>(null);
  const formRef       = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted,    setSubmitted]    = useState(false);

  useEffect(() => {
    const left  = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    // Delay lets mobile Safari finish layout before ScrollTrigger measures positions
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

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section ref={sectionRef} className="contact-section" id="contact">
      {/* Ambient glows */}
      <div className="contact-glow contact-glow--left"  aria-hidden="true" />
      <div className="contact-glow contact-glow--right" aria-hidden="true" />

      <div className="contact-inner container">
        {/* ── LEFT ── */}
        <div ref={leftRef} className="contact-left">
          <span className="contact-eyebrow c-anim">Travaillons ensemble</span>

          <h2 className="section-title c-anim">
            Me <span className="text-gradient">Contacter</span>
          </h2>

          <p className="contact-tagline c-anim">
            Prêt à donner vie à vos projets les plus ambitieux ?<br/>
            Discutons de votre prochaine expérience immersive.
          </p>

          {/* Info list */}
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

          {/* Social row */}
          <div className="contact-socials c-anim">
            <span className="contact-socials-label">Retrouvez-moi</span>
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
            {/* Top accent line */}
            <div className="form-accent-line" aria-hidden="true" />

            {submitted ? (
              <div className="form-success">
                <div className="success-ring">
                  <div className="success-check">✓</div>
                </div>
                <h3>Message envoyé !</h3>
                <p>Je vous répondrai dans les meilleurs délais.</p>
              </div>
            ) : (
              <>
                <div className="form-title-row">
                  <h3 className="form-title">Votre message</h3>
                  <span className="form-badge">Réponse sous 24h</span>
                </div>

                {/* Row: name + email */}
                <div className="form-row-duo">
                  <div className="form-field">
                    <label htmlFor="c-name">Nom</label>
                    <input
                      id="c-name"
                      type="text"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Votre nom complet"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-email">Email</label>
                    <input
                      id="c-email"
                      type="email"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder="votre@email.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="c-subject">Sujet</label>
                  <input
                    id="c-subject"
                    type="text"
                    value={formState.subject}
                    onChange={e => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Collaboration, projet, question…"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message"
                    rows={5}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Décrivez votre projet, vos besoins, vos idées…"
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
                      Envoi en cours…
                    </span>
                  ) : (
                    <>
                      <Send size={17} />
                      <span>Envoyer un message</span>
                      <ArrowUpRight size={15} className="form-cta-arrow" />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="contact-footer-inner container">
          <p>© {new Date().getFullYear()} Ousmane Biteye · Dakar, Sénégal · Tous droits réservés.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
