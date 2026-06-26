import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import gsap from 'gsap';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';
import type { ProjectImage } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import './ProjectPage.css';

const ProjectPage = () => {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  const heroRef    = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Lightbox — track by index so we can navigate prev / next
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const lightboxIdxRef = useRef<number | null>(null);
  lightboxIdxRef.current = lightboxIdx;

  // Editorial masonry column count — driven by JS so resize stays accurate
  const [editorialCols, setEditorialCols] = useState(3);
  useEffect(() => {
    const update = () =>
      setEditorialCols(window.innerWidth < 480 ? 1 : window.innerWidth < 768 ? 2 : 3);
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // GSAP entrance
  useEffect(() => {
    if (!project) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.pp-hero__eyebrow',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 }
      );
      gsap.fromTo('.pp-hero__title',
        { opacity: 0, y: 60, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out', delay: 0.25 }
      );
      gsap.fromTo('.pp-hero__tags',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.55 }
      );
      gsap.fromTo('.pp-section',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
      );
    });
    return () => ctx.revert();
  }, [project]);

  // Keyboard: Escape closes lightbox, arrows navigate images
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const idx = lightboxIdxRef.current;
      if (e.key === 'Escape') {
        setLightboxIdx(null);
      } else if (idx !== null && project) {
        const total = project.gallery.length;
        if (e.key === 'ArrowLeft')  setLightboxIdx((idx - 1 + total) % total);
        if (e.key === 'ArrowRight') setLightboxIdx((idx + 1) % total);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project]);

  if (!project) {
    return (
      <div className="pp-notfound">
        <h1>{t.project.notFound}</h1>
        <Link to="/#portfolio" className="pp-back-btn">
          <ArrowLeft size={18} /> {t.project.backToPortfolio}
        </Link>
      </div>
    );
  }

  const hasGallery = project.gallery.length > 0;
  const hasVideo   = project.videos && project.videos.length > 0;
  const multiImg   = project.gallery.length > 1;

  const closeLightbox  = () => setLightboxIdx(null);
  const prevLightbox   = () => setLightboxIdx(i => i !== null ? (i - 1 + project.gallery.length) % project.gallery.length : null);
  const nextLightbox   = () => setLightboxIdx(i => i !== null ? (i + 1) % project.gallery.length : null);

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
          aria-label={t.project.back}
        >
          <ArrowLeft size={16} />
          <span>{t.project.back}</span>
        </button>
      </nav>

      {/* ── Hero fullscreen ── */}
      <div ref={heroRef} className="pp-hero">
        <img
          src={project.heroImage}
          alt={project.title}
          className={`pp-hero__img${project.mobileHeroObjectPosition ? ' pp-hero__img--mobile-pos' : ''}`}
          onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
          style={{
            ...(project.heroObjectPosition          && { objectPosition: project.heroObjectPosition }),
            ...(project.mobileHeroObjectPosition    && { '--mobile-hero-pos': project.mobileHeroObjectPosition } as React.CSSProperties),
          }}
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
            <h2 className="pp-section-title">{t.project.presentation}</h2>
            <p className="pp-body-text">{project.description}</p>
            {project.context && (
              <>
                <h3 className="pp-subsection-title">{t.project.context}</h3>
                <p className="pp-body-text">{project.context}</p>
              </>
            )}
          </div>
          <aside className="pp-info-grid__meta glass-panel">
            <dl className="pp-meta-list">
              <div className="pp-meta-item">
                <dt>{project.client === 'OBIITY' ? t.project.madeBy : t.project.client}</dt>
                <dd>{project.client}</dd>
              </div>
              <div className="pp-meta-item">
                <dt>{t.project.year}</dt>
                <dd>{project.year}</dd>
              </div>
              <div className="pp-meta-item">
                <dt>{t.project.category}</dt>
                <dd>{project.category}</dd>
              </div>
              <div className="pp-meta-item">
                <dt>{t.project.technologies}</dt>
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
            <h2 className="pp-section-title">{t.project.objectives}</h2>
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

        {/* Gallery — Grid, Showcase, or Editorial Masonry */}
        {hasGallery && (
          <section className="pp-section">
            {project.galleryTitle ? (() => {
              const [count, ...rest] = project.galleryTitle!.split(' ');
              return (
                <h2 className="pp-gallery-title">
                  <span className="pp-gallery-title__count">{count}</span>{' '}
                  {rest.join(' ')}
                </h2>
              );
            })() : (
              <h2 className="pp-section-title">{t.project.gallery}</h2>
            )}

            {project.galleryVariant === 'editorial' ? (
              /* True masonry: JS-distributed flexbox columns, no holes */
              <div className="pp-gallery pp-gallery--editorial" data-count={project.gallery.length}>
                {Array.from({ length: editorialCols }, (_, ci) => {
                  const galleryImages = (editorialCols === 1 && project.mobileGalleryOrder)
                    ? project.mobileGalleryOrder.map(idx => project.gallery[idx])
                    : project.gallery;
                  return (
                  <div key={ci} className="pp-gallery__col">
                    {galleryImages
                      .map((img, i) => ({ img, i }))
                      .filter(({ i }) => i % editorialCols === ci)
                      .map(({ img, i }) => (
                        <button
                          key={i}
                          className="pp-gallery__item"
                          onClick={() => setLightboxIdx(i)}
                          aria-label={`Voir ${img.alt}`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="pp-gallery__img"
                            loading={i < editorialCols ? 'eager' : 'lazy'}
                            draggable={false}
                            style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                          />
                          <div className="pp-gallery__item-overlay">
                            <ArrowUpRight size={22} />
                          </div>
                        </button>
                      ))}
                  </div>
                  );
                })}
              </div>
            ) : (
              /* Grid or showcase */
              (() => {
                const gridImages = (editorialCols === 1 && project.mobileGalleryOrder)
                  ? project.mobileGalleryOrder.map(idx => project.gallery[idx])
                  : project.gallery;
                return (
              <div
                className={`pp-gallery${project.galleryVariant === 'showcase' ? ' pp-gallery--showcase' : ''}`}
                data-count={project.gallery.length}
              >
                {gridImages.map((img: ProjectImage, i) => (
                  <button
                    key={i}
                    className="pp-gallery__item"
                    onClick={() => setLightboxIdx(i)}
                    aria-label={`Voir ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="pp-gallery__img"
                      loading={i < 3 ? 'eager' : 'lazy'}
                      draggable={false}
                      style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                    />
                    {project.galleryVariant !== 'showcase' && (
                      <div className="pp-gallery__item-overlay">
                        <ArrowUpRight size={22} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
                );
              })()
            )}
          </section>
        )}

        {/* Video(s) */}
        {hasVideo && (
          <section className="pp-section">
            <h2 className="pp-section-title">{t.project.video}</h2>
            <div className="pp-videos">
              {project.videos!.map((vid, i) => {
                if (vid.type === 'local' && vid.src) {
                  const cleanSrc = vid.src.split('?')[0];
                  const ext = cleanSrc.split('.').pop()?.toLowerCase();
                  const mimeType = ext === 'mov' ? 'video/quicktime' : 'video/mp4';
                  return (
                    <div key={i} className="pp-video-wrapper pp-video-wrapper--local">
                      <video
                        className="pp-video-local"
                        controls
                        playsInline
                        preload="metadata"
                        poster={project.heroImage}
                        title={`${project.title} — vidéo ${i + 1}`}
                      >
                        <source src={vid.src} type={mimeType} />
                      </video>
                    </div>
                  );
                }
                const embedSrc =
                  vid.type === 'youtube'
                    ? `https://www.youtube.com/embed/${vid.id}?rel=0&modestbranding=1`
                    : `https://player.vimeo.com/video/${vid.id}?dnt=1`;
                return (
                  <div key={i} className="pp-video-wrapper">
                    <iframe
                      src={embedSrc}
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
                  <span className="pp-nav-card__label">{t.project.prevProject}</span>
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
                  <span className="pp-nav-card__label">{t.project.nextProject}</span>
                  <span className="pp-nav-card__title">{next.title}</span>
                </div>
              </Link>
            ) : <div />}
          </div>
        </nav>

      </main>

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && (
        <div
          className="pp-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image en grand"
        >
          {/* Close */}
          <button
            className="pp-lightbox__close"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          {multiImg && (
            <button
              className="pp-lightbox__nav pp-lightbox__nav--prev"
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
              aria-label="Image précédente"
            >
              <ArrowLeft size={24} />
            </button>
          )}

          {/* Image */}
          <img
            src={project.gallery[lightboxIdx].src}
            alt={project.gallery[lightboxIdx].alt}
            className="pp-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {multiImg && (
            <button
              className="pp-lightbox__nav pp-lightbox__nav--next"
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              aria-label="Image suivante"
            >
              <ArrowRight size={24} />
            </button>
          )}

          {/* Counter */}
          {multiImg && (
            <div className="pp-lightbox__counter" onClick={(e) => e.stopPropagation()}>
              {lightboxIdx + 1} <span>/</span> {project.gallery.length}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default ProjectPage;
