import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import { X, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendCollabEmail } from '../../lib/emailService';
import { useLanguage } from '../../contexts/LanguageContext';
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
  const { t } = useLanguage();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

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
    if (!form.fullName.trim()) newErrors.fullName = t.collab.errName;
    if (!form.email.trim()) {
      newErrors.email = t.collab.errEmail;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t.collab.errEmailInvalid;
    }
    if (!form.collaborationType) newErrors.collaborationType = t.collab.errCollabType;
    if (!form.confirmed) newErrors.confirmed = t.collab.errConfirmed;
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
      aria-label={t.collab.title}
    >
      <div ref={panelRef} className="collab-panel">
        <button className="collab-panel__close" onClick={handleClose} aria-label={t.collab.close}>
          <X size={22} strokeWidth={2} />
        </button>

        <div className="collab-panel__header">
          <span className="collab-panel__label">{t.collab.label}</span>
          <h2 className="collab-panel__title">{t.collab.title}</h2>
        </div>

        <div className="collab-panel__body">

        {status === 'success' && (
          <div className="collab-feedback collab-feedback--success">
            <CheckCircle2 size={48} />
            <h3>{t.collab.successTitle}</h3>
            <p>{t.collab.successMsg}</p>
            <button className="btn-primary collab-btn-close" onClick={handleClose}>
              {t.collab.close}
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className="collab-feedback collab-feedback--error">
            <AlertCircle size={48} />
            <h3>{t.collab.errorTitle}</h3>
            <p>{t.collab.errorMsg}</p>
            <button className="btn-primary collab-btn-close" onClick={() => setStatus('idle')}>
              {t.collab.retry}
            </button>
          </div>
        )}

        {(status === 'idle' || status === 'loading') && (
          <form className="collab-form" onSubmit={handleSubmit} noValidate>
            <fieldset className="collab-fieldset">
              <legend className="collab-legend">{t.collab.personalInfo}</legend>
              <div className="collab-row">
                <div className="collab-field">
                  <label htmlFor="fullName">
                    {t.collab.nameLabel} <span className="collab-required">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder={t.collab.namePlaceholder}
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
                    {t.collab.emailLabel} <span className="collab-required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.collab.emailPlaceholder}
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
                <label htmlFor="phone">{t.collab.phoneLabel} <span className="collab-optional">({t.collab.optional})</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.collab.phonePlaceholder}
                  value={form.phone}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  autoComplete="tel"
                />
              </div>
            </fieldset>

            <fieldset className="collab-fieldset">
              <legend className="collab-legend">{t.collab.professionalInfo}</legend>
              <div className="collab-row">
                <div className="collab-field">
                  <label htmlFor="company">{t.collab.companyLabel} <span className="collab-optional">({t.collab.optional})</span></label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={t.collab.companyPlaceholder}
                    value={form.company}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    autoComplete="organization"
                  />
                </div>
                <div className="collab-field">
                  <label htmlFor="website">{t.collab.websiteLabel} <span className="collab-optional">({t.collab.optional})</span></label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder={t.collab.websitePlaceholder}
                    value={form.website}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    autoComplete="url"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="collab-fieldset">
              <legend className="collab-legend">{t.collab.budget}</legend>
              <div className="collab-field">
                <label htmlFor="budget">{t.collab.budgetRange}</label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                >
                  {t.collab.budgetOptions.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              {form.budget === 'custom' && (
                <div className="collab-field collab-field--animate">
                  <label htmlFor="budgetCustom">{t.collab.budgetCustomLabel}</label>
                  <input
                    id="budgetCustom"
                    name="budgetCustom"
                    type="text"
                    placeholder={t.collab.budgetCustomPlaceholder}
                    value={form.budgetCustom}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                </div>
              )}
            </fieldset>

            <fieldset className="collab-fieldset">
              <legend className="collab-legend">
                {t.collab.collabLevel} <span className="collab-required">*</span>
              </legend>
              <div className="collab-radios">
                {t.collab.collabTypes.map(ct => (
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
                {t.collab.confirmText}
                <span className="collab-required"> *</span>
              </span>
            </label>
            {errors.confirmed && <span className="collab-error collab-error--checkbox">{errors.confirmed}</span>}

            <div className="collab-submit-area">
              <button
                type="submit"
                className="btn-primary collab-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="collab-spinner" />
                    {t.collab.submitting}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t.collab.submit}
                  </>
                )}
              </button>
              <p className="collab-response-time">{t.collab.responseTime}</p>
            </div>
          </form>
        )}

        </div>
      </div>
    </div>,
    document.body
  );
};

export default CollaborateModal;
