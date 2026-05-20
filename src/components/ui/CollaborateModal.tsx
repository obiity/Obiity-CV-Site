import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import { X, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendCollabEmail } from '../../lib/emailService';
import './CollaborateModal.css';

interface CollaborateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  budget: string;
  budgetCustom: string;
  collaborationType: string;
  confirmed: boolean;
}

const BUDGET_OPTIONS = [
  { value: '', label: 'Sélectionner un budget' },
  { value: '< $1,000', label: '< $1,000' },
  { value: '$1,000 – $5,000', label: '$1,000 – $5,000' },
  { value: '$5,000 – $15,000', label: '$5,000 – $15,000' },
  { value: '$15,000 – $50,000', label: '$15,000 – $50,000' },
  { value: '> $50,000', label: '> $50,000' },
  { value: 'custom', label: 'Autre / À discuter' },
];

const COLLAB_TYPES = [
  { value: 'freelance', label: 'Freelance ponctuel' },
  { value: 'partnership', label: 'Partenariat long terme' },
  { value: 'subcontracting', label: 'Sous-traitance' },
  { value: 'cocreation', label: 'Co-création / Startup' },
  { value: 'other', label: 'Autre' },
];

const INITIAL_FORM: FormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  budget: '',
  budgetCustom: '',
  collaborationType: '',
  confirmed: false,
};

const CollaborateModal: React.FC<CollaborateModalProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  // Animate in / out
  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' });
      gsap.fromTo(
        panel,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(1.4)', delay: 0.05 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = () => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) { onClose(); return; }

    gsap.to(panel, { opacity: 0, y: 30, scale: 0.97, duration: 0.3, ease: 'power2.in' });
    gsap.to(overlay, {
      opacity: 0, duration: 0.35, ease: 'power2.in', delay: 0.05,
      onComplete: () => { setForm(INITIAL_FORM); setErrors({}); setStatus('idle'); onClose(); }
    });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Le nom est requis.';
    if (!form.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Email invalide.';
    }
    if (!form.collaborationType) newErrors.collaborationType = 'Sélectionnez un type.';
    if (!form.confirmed) newErrors.confirmed = 'Vous devez confirmer avant de soumettre.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      await sendCollabEmail({
        fullName:          form.fullName,
        email:             form.email,
        phone:             form.phone,
        company:           form.company,
        website:           form.website,
        budget:            form.budget === 'custom'
                             ? (form.budgetCustom || 'À discuter')
                             : form.budget,
        collaborationType: form.collaborationType,
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      className="collab-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Formulaire de collaboration"
    >
      <div ref={panelRef} className="collab-panel">
        {/* Close button — absolute at top-right, outside flex flow */}
        <button className="collab-panel__close" onClick={handleClose} aria-label="Fermer le formulaire">
          <X size={22} strokeWidth={2} />
        </button>

        {/* Header */}
        <div className="collab-panel__header">
          <span className="collab-panel__label">Collaboration</span>
          <h2 className="collab-panel__title">Démarrons un projet</h2>
        </div>

        {/* Scrollable body — flex: 1 + min-height: 0 handles all overflow */}
        <div className="collab-panel__body">

        {/* Success state */}
        {status === 'success' && (
          <div className="collab-feedback collab-feedback--success">
            <CheckCircle2 size={48} />
            <h3>Demande envoyée !</h3>
            <p>Je vous répondrai sous 24–48h. Merci pour votre confiance.</p>
            <button className="btn-primary collab-btn-close" onClick={handleClose}>
              Fermer
            </button>
          </div>
        )}

        {/* Error state */}
        {status === 'error' && (
          <div className="collab-feedback collab-feedback--error">
            <AlertCircle size={48} />
            <h3>Une erreur est survenue</h3>
            <p>Veuillez réessayer ou me contacter directement par email.</p>
            <button className="btn-primary collab-btn-close" onClick={() => setStatus('idle')}>
              Réessayer
            </button>
          </div>
        )}

        {/* Form */}
        {(status === 'idle' || status === 'loading') && (
          <form className="collab-form" onSubmit={handleSubmit} noValidate>
            {/* Section: Informations personnelles */}
            <fieldset className="collab-fieldset">
              <legend className="collab-legend">Informations personnelles</legend>
              <div className="collab-row">
                <div className="collab-field">
                  <label htmlFor="fullName">
                    Nom & Prénom <span className="collab-required">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Votre nom complet"
                    value={form.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'collab-input--error' : ''}
                    disabled={status === 'loading'}
                    autoComplete="name"
                  />
                  {errors.fullName && <span className="collab-error">{errors.fullName}</span>}
                </div>
                <div className="collab-field">
                  <label htmlFor="email">
                    Email professionnel <span className="collab-required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'collab-input--error' : ''}
                    disabled={status === 'loading'}
                    autoComplete="email"
                  />
                  {errors.email && <span className="collab-error">{errors.email}</span>}
                </div>
              </div>
              <div className="collab-field">
                <label htmlFor="phone">Téléphone <span className="collab-optional">(optionnel)</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  autoComplete="tel"
                />
              </div>
            </fieldset>

            {/* Section: Informations professionnelles */}
            <fieldset className="collab-fieldset">
              <legend className="collab-legend">Informations professionnelles</legend>
              <div className="collab-row">
                <div className="collab-field">
                  <label htmlFor="company">Entreprise / Organisation <span className="collab-optional">(optionnel)</span></label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Votre entreprise"
                    value={form.company}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    autoComplete="organization"
                  />
                </div>
                <div className="collab-field">
                  <label htmlFor="website">Site web / LinkedIn <span className="collab-optional">(optionnel)</span></label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://votre-site.com"
                    value={form.website}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    autoComplete="url"
                  />
                </div>
              </div>
            </fieldset>

            {/* Section: Budget */}
            <fieldset className="collab-fieldset">
              <legend className="collab-legend">Budget estimé</legend>
              <div className="collab-field">
                <label htmlFor="budget">Fourchette budgétaire</label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                >
                  {BUDGET_OPTIONS.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              {form.budget === 'custom' && (
                <div className="collab-field collab-field--animate">
                  <label htmlFor="budgetCustom">Précisez votre budget</label>
                  <input
                    id="budgetCustom"
                    name="budgetCustom"
                    type="text"
                    placeholder="ex : $3,500, à discuter…"
                    value={form.budgetCustom}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                </div>
              )}
            </fieldset>

            {/* Section: Type de collaboration */}
            <fieldset className="collab-fieldset">
              <legend className="collab-legend">
                Niveau de collaboration <span className="collab-required">*</span>
              </legend>
              <div className="collab-radios">
                {COLLAB_TYPES.map(ct => (
                  <label key={ct.value} className="collab-radio-label">
                    <input
                      type="radio"
                      name="collaborationType"
                      value={ct.value}
                      checked={form.collaborationType === ct.value}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                    />
                    <span className="collab-radio-custom" />
                    {ct.label}
                  </label>
                ))}
              </div>
              {errors.collaborationType && (
                <span className="collab-error">{errors.collaborationType}</span>
              )}
            </fieldset>

            {/* Confirmation checkbox */}
            <label className={`collab-checkbox-label ${errors.confirmed ? 'collab-checkbox-label--error' : ''}`}>
              <input
                type="checkbox"
                name="confirmed"
                checked={form.confirmed}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              <span className="collab-checkbox-custom" />
              <span>
                Je confirme que ces informations sont correctes et que mon projet est sérieux.
                <span className="collab-required"> *</span>
              </span>
            </label>
            {errors.confirmed && <span className="collab-error collab-error--checkbox">{errors.confirmed}</span>}

            {/* Submit */}
            <div className="collab-submit-area">
              <button
                type="submit"
                className="btn-primary collab-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="collab-spinner" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Soumettre mon projet
                  </>
                )}
              </button>
              <p className="collab-response-time">
                Réponse sous 24–48h pour les demandes complètes
              </p>
            </div>
          </form>
        )}

        </div>{/* end collab-panel__body */}
      </div>
    </div>,
    document.body
  );
};

export default CollaborateModal;
