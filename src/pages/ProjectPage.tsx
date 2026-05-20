import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import gsap from 'gsap';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';
import type { ProjectImage } from '../data/projects';
import './ProjectPage.css';

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pp-hero__eyebrow',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 }
      );
      gsap.fromTo(
        '.pp-hero__title',
        { opacity: 0, y: 60, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out', delay: 0.25 }
      );
      gsap.fromTo(
        '.pp-hero__tags',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.55 }
      );
      gsap.fromTo(
        '.pp-section',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.4,
          scrollTrigger: undefined }
      );
    });

    return () => ctx.revert();
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!project) {
    return (
      <div className="pp-notfound">
        <h1>Projet introuvable</h1>
        <Link to="/#portfolio" className="pp-back-btn">
          <ArrowLeft size={18} /> Retour au portfolio
        </Link>
      </div>
    );
  }

  const hasGallery = project.gallery.length > 0;
  const hasVideo = project.videos && project.videos.length > 0;

  return (
    <div className="pp-root">
      {/* ── Fixed nav bar ── */}
      <nav className="pp-navbar">
        <Link to="/" className="pp-navbar__logo">
          <img src="/OBIITY NEW-02.png" alt="Obiity" className="pp-navbar__logo-img" />
        </Link>
        <button
          className="pp-navbar__back"
          onClick={() => navigate('/#portfolio')}
          aria-label="Retour"
        >
          <ArrowLeft size={16} />
          <span>Portfolio</span>
        </button>
      </nav>

      {/* ── Hero fullscreen ── */}
      <div ref={heroRef} className="pp-hero">
        <img
          src={project.heroImage}
          alt={project.title}
          className="pp-hero__img"
        />
        <div className="pp-hero__overlay pp-hero__overlay--radial" />
        <div className="pp-hero__overlay pp-hero__overlay--linear" />

        <div className="pp-hero__content container">
          <span className="pp-hero__eyebrow">
            {project.client} &nbsp;·&nbsp; {project.year}
          </span>
          <h1 className="pp-hero__title">{project.title}</h1>
          <div className="pp-hero__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="pp-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <main ref={contentRef} className="pp-content container">

        {/* Description + Meta */}
        <section className="pp-section pp-info-grid">
          <div className="pp-info-grid__desc">
            <h2 className="pp-section-title">Présentation</h2>
            <p className="pp-body-text">{project.description}</p>

            {project.context && (
              <>
                <h3 className="pp-subsection-title">Contexte</h3>
                <p className="pp-body-text">{project.context}</p>
              </>
            )}
          </div>

          <aside className="pp-info-grid__meta glass-panel">
            <dl className="pp-meta-list">
              <div className="pp-meta-item">
                <dt>Client</dt>
                <dd>{project.client}</dd>
              </div>
              <div className="pp-meta-item">
                <dt>Année</dt>
                <dd>{project.year}</dd>
              </div>
              <div className="pp-meta-item">
                <dt>Catégorie</dt>
                <dd>{project.category}</dd>
              </div>
              <div className="pp-meta-item">
                <dt>Technologies</dt>
                <dd className="pp-meta-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pp-meta-tag">{tag}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Objectives */}
        {project.objectives.length > 0 && (
          <section className="pp-section">
            <h2 className="pp-section-title">Objectifs</h2>
            <ul className="pp-objectives">
              {project.objectives.map((obj, i) => (
                <li key={i} className="pp-objective-item">
                  <span className="pp-objective-num">0{i + 1}</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Gallery */}
        {hasGallery && (
          <section className="pp-section">
            <h2 className="pp-section-title">Galerie</h2>
            <div className={`pp-gallery pp-gallery--${Math.min(project.gallery.length, 3)}`}>
              {project.gallery.map((img: ProjectImage, i) => (
                <button
                  key={i}
                  className="pp-gallery__item"
                  onClick={() => setLightboxSrc(img.src)}
                  aria-label={`Voir ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="pp-gallery__img"
                    loading="lazy"
                  />
                  <div className="pp-gallery__item-overlay">
                    <ArrowUpRight size={22} />
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Video(s) */}
        {hasVideo && (
          <section className="pp-section">
            <h2 className="pp-section-title">Vidéo</h2>
            <div className="pp-videos">
              {project.videos!.map((vid, i) => {
                const src =
                  vid.type === 'youtube'
                    ? `https://www.youtube.com/embed/${vid.id}?rel=0&modestbranding=1`
                    : `https://player.vimeo.com/video/${vid.id}?dnt=1`;
                return (
                  <div key={i} className="pp-video-wrapper">
                    <iframe
                      src={src}
                      title={`${project.title} — vidéo ${i + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="pp-video-iframe"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Prev / Next navigation */}
        <nav className="pp-section pp-project-nav">
          <div className="pp-project-nav__inner">
            {prev ? (
              <Link to={`/projects/${prev.slug}`} className="pp-nav-card pp-nav-card--prev">
                <div className="pp-nav-card__img-wrapper">
                  <img src={prev.heroImage} alt={prev.title} className="pp-nav-card__img" />
                  <div className="pp-nav-card__overlay" />
                </div>
                <div className="pp-nav-card__info">
                  <ArrowLeft size={16} />
                  <span className="pp-nav-card__label">Projet précédent</span>
                  <span className="pp-nav-card__title">{prev.title}</span>
                </div>
              </Link>
            ) : <div />}

            {next ? (
              <Link to={`/projects/${next.slug}`} className="pp-nav-card pp-nav-card--next">
                <div className="pp-nav-card__img-wrapper">
                  <img src={next.heroImage} alt={next.title} className="pp-nav-card__img" />
                  <div className="pp-nav-card__overlay" />
                </div>
                <div className="pp-nav-card__info">
                  <ArrowRight size={16} />
                  <span className="pp-nav-card__label">Projet suivant</span>
                  <span className="pp-nav-card__title">{next.title}</span>
                </div>
              </Link>
            ) : <div />}
          </div>
        </nav>
      </main>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="pp-lightbox"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image en grand"
        >
          <button
            className="pp-lightbox__close"
            onClick={() => setLightboxSrc(null)}
            aria-label="Fermer"
          >
            <X size={22} />
          </button>
          <img
            src={lightboxSrc}
            alt="Aperçu"
            className="pp-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
