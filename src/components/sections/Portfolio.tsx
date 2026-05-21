import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1,  title: 'Publicité pour les climatiseurs Airton', client: 'AIRTON',            location: 'Dakar - 2026', image: '/Publicité pour les climatiseurs Airton.png', slug: 'airton-climatiseurs'       },
  { id: 2,  title: 'Lancer Javelot - Jeu VR',               client: 'OBIITY',             location: 'Dakar - 2026', image: '/Lancer Javelot.png',                         slug: 'lancer-javelot-vr'         },
  { id: 4,  title: 'ARCHI 3D',                              client: 'OBIITY',             location: 'Dakar - 2026', image: '/PLAN ARCHI 3D.png',                          slug: 'archi-3d'                  },
  { id: 5,  title: 'DEVENIR AGRI-ENTREPRENEUR',             client: 'KTM ACADEMY',        location: 'Dakar - 2026', image: '/DEVENIR AGRI-ENTREPRENEUR.png',              slug: 'devenir-agri-entrepreneur' },
  { id: 6,  title: 'BOOSTGI-JOBS',                          client: 'ENCAF · KTM ADVANCE',location: 'Dakar - 2025', image: '/BOOSTGI-JOBS.jpeg',                          slug: 'boostgi-jobs'              },
  { id: 7,  title: 'PROJET DE DIGITALISATION',              client: 'DER · KTM ADVANCE',  location: 'Dakar - 2025', image: '/PROJET DE DIGITALISATION.png',               slug: 'digitalisation'            },
  { id: 8,  title: 'ERROR 404',                             client: 'OBIITY',             location: 'Dakar - 2025', image: '/ERROR 404.png',                              slug: 'error-404'                 },
  { id: 9,  title: 'KING OF ARENA',                         client: 'DAMEL STUDIO',       location: 'Dakar - 2025', image: '/KING OF ARENA V2.png',                       slug: 'king-of-arena'             },
  { id: 10, title: 'FULANI',                                client: 'DAMEL STUDIO',       location: 'Dakar - 2023', image: '/FULANI.png',                                 slug: 'fulani'                    },
  { id: 11, title: 'LAST LOADOUT - SURF SCOP',              client: 'SAIPEM',             location: 'Dakar - 2024', image: '/LAST LOADOUT - SURF SCOP.png',               slug: 'last-loadout'              },
  { id: 12, title: 'CLEAN UP DAY',                          client: 'SAIPEM',             location: 'Dakar - 2024', image: '/CLEAN UP DAY.png',                           slug: 'clean-up-day'              },
  { id: 13, title: 'SAIPEM TRAINING CAMP',                  client: 'SAIPEM',             location: 'Dakar - 2024', image: '/SAIPEM TRAINING CAMP.jpg',                   slug: 'saipem-training-camp'      },
  { id: 15, title: 'FEMMES SOUS UN BAOBAB',                 client: 'UNICEF',             location: 'Dakar - 2023', image: '/FEMMES SOUS UN BAOBAB.png',                  slug: 'femmes-sous-un-baobab'     },
  { id: 14, title: 'SHORT ANIMATION (TEST)',                 client: 'OBIITY',             location: 'Dakar - 2023', image: '/SHORT ANIMATION (TEST).png',                 slug: 'short-animation'           },
  { id: 17, title: 'DOLCE FRUITI (PUB)',                    client: 'OBIITY',             location: 'Dakar - 2026', image: '/DOLCE FRUITI (PUB).png',                     slug: 'dolce-fruiti'              },
  { id: 16, title: 'WNPWY - DIP DOUNDOU GUISS',             client: 'OBIITY',             location: 'Dakar - 2024', image: '/WNPWY - DIP DOUNDOU GUISS.JPG',              slug: 'wnpwy'                     },
  { id: 18, title: 'XÉÉR',                                  client: 'OBIITY',             location: 'Dakar - 2023', image: '/XÉÉR.png',                                   slug: 'xeer'                      },
  { id: 19, title: 'CORNICHE',                              client: 'OBIITY',             location: 'Dakar - 2023', image: '/CORNICHE.png',                               slug: 'corniche'                  },
];

const TOTAL        = projects.length;
const CLONE_COUNT  = 2;
const DRAG_THRESHOLD = 48;

// Infinite loop array: [last-2, last-1, ...all originals..., first-0, first-1]
const loopedSlides = [
  ...projects.slice(TOTAL - CLONE_COUNT),
  ...projects,
  ...projects.slice(0, CLONE_COUNT),
];

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  // logical index 0…TOTAL-1  (drives counter + is-active + progress)
  const [current, setCurrent] = useState(0);

  // Mutable refs — no re-render on change
  const dragging       = useRef(false);
  const hasDragged     = useRef(false);   // blocks Link click after a real drag
  const animating      = useRef(false);
  const pointerStartX  = useRef(0);
  const pointerDeltaX  = useRef(0);
  const trackTranslate = useRef(0);
  const trackIdxRef    = useRef(CLONE_COUNT); // rendered index of centered slide

  /* ── Pixel offset for a rendered index ─────── */
  const calcOffset = useCallback((ri: number): number => {
    const track = trackRef.current;
    if (!track) return 0;
    const slide = track.querySelector('.carousel-slide') as HTMLElement | null;
    if (!slide) return 0;
    const slideW = slide.offsetWidth;
    const gap    = parseFloat(getComputedStyle(track).gap) || 0;
    return -(ri * (slideW + gap));
  }, []);

  /* ── Core navigator (rendered index) ────────── */
  const goToRendered = useCallback((ri: number, instant = false) => {
    if (animating.current && !instant) return;

    const offset  = calcOffset(ri);
    const logical = ((ri - CLONE_COUNT) % TOTAL + TOTAL) % TOTAL;

    trackIdxRef.current = ri;
    setCurrent(logical);

    if (instant) {
      trackTranslate.current = offset;
      gsap.set(trackRef.current, { x: offset });
      return;
    }

    animating.current = true;

    gsap.to(trackRef.current, {
      x: offset,
      duration: 0.75,
      ease: 'power3.out',
      onComplete: () => {
        // Seamless teleport: clone zone → real zone
        let finalRi = ri;
        if (ri < CLONE_COUNT) {
          finalRi = ri + TOTAL;
        } else if (ri >= CLONE_COUNT + TOTAL) {
          finalRi = ri - TOTAL;
        }

        if (finalRi !== ri) {
          const finalOffset = calcOffset(finalRi);
          trackIdxRef.current    = finalRi;
          trackTranslate.current = finalOffset;
          gsap.set(trackRef.current, { x: finalOffset });
        } else {
          trackTranslate.current = offset;
        }
        animating.current = false;
      },
    });
  }, [calcOffset]);

  /* ── Pointer: down ──────────────────────────── */
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    // Always reset so a click right after a drag still navigates
    hasDragged.current = false;
    // Let the CTA button receive its own click — don't capture the pointer
    if ((e.target as HTMLElement).closest('.carousel-card__btn')) return;
    dragging.current     = true;
    pointerStartX.current  = e.clientX;
    pointerDeltaX.current  = 0;
    gsap.killTweensOf(trackRef.current);
    animating.current = false;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  /* ── Pointer: move ──────────────────────────── */
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const delta = e.clientX - pointerStartX.current;
    pointerDeltaX.current = delta;
    if (Math.abs(delta) > 6) hasDragged.current = true;
    gsap.set(trackRef.current, { x: trackTranslate.current + delta });
  };

  /* ── Pointer: up / leave ────────────────────── */
  const handlePointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    const delta = pointerDeltaX.current;

    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      goToRendered(delta < 0 ? trackIdxRef.current + 1 : trackIdxRef.current - 1);
    } else {
      goToRendered(trackIdxRef.current); // snap back
    }
    pointerDeltaX.current = 0;
  };

  /* ── Initial position (after first paint) ───── */
  useEffect(() => {
    requestAnimationFrame(() => {
      const offset = calcOffset(CLONE_COUNT);
      trackTranslate.current = offset;
      gsap.set(trackRef.current, { x: offset });
    });
  }, [calcOffset]);

  /* ── Resize: recalculate without animation ──── */
  useEffect(() => {
    const onResize = () => {
      const offset = calcOffset(trackIdxRef.current);
      trackTranslate.current = offset;
      gsap.set(trackRef.current, { x: offset });
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, [calcOffset]);

  /* ── Keyboard navigation ─────────────────────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  goToRendered(trackIdxRef.current - 1);
      if (e.key === 'ArrowRight') goToRendered(trackIdxRef.current + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goToRendered]);

  /* ── Entrance animations ─────────────────────── */
  useEffect(() => {
    if (!sectionRef.current) return;
    const t = setTimeout(() => {
      gsap.fromTo('.portfolio-header',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 88%', invalidateOnRefresh: true },
        }
      );
      gsap.fromTo('.carousel-outer',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', invalidateOnRefresh: true },
        }
      );
    }, 100);
    return () => clearTimeout(t);
  }, []);

  const progressPct = ((current + 1) / TOTAL) * 100;

  return (
    <section ref={sectionRef} className="portfolio-section" id="portfolio">

      <div className="portfolio-header container">
        <h2 className="section-title">
          Créations <span className="text-gradient">& Projets</span>
        </h2>
      </div>

      <div className="carousel-nav-wrapper">
        <button
          className="carousel-arrow carousel-arrow--prev"
          onClick={() => goToRendered(trackIdxRef.current - 1)}
          aria-label="Projet précédent"
        >
          <ChevronLeft size={32} strokeWidth={1.4} />
        </button>

      <div className="carousel-outer">
        <div
          ref={trackRef}
          className="carousel-track"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ cursor: dragging.current ? 'grabbing' : 'grab' }}
        >
          {loopedSlides.map((project, ri) => {
            const logicalRi = ((ri - CLONE_COUNT) % TOTAL + TOTAL) % TOTAL;
            const isActive  = logicalRi === current;
            const year      = project.location.split(' - ')[1] ?? project.location;

            return (
              <div
                key={`${ri}-${project.id}`}
                className={`carousel-slide${isActive ? ' is-active' : ''}`}
              >
                <div className="carousel-card">
                  <div className="carousel-card__img-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="carousel-card__img"
                      loading={ri < 5 ? 'eager' : 'lazy'}
                      draggable={false}
                    />
                    <div className="carousel-card__overlay" />
                  </div>

                  <div className="carousel-card__content">
                    <div className="carousel-card__meta">
                      <span className="carousel-card__client">{project.client}</span>
                      <span className="carousel-card__sep">·</span>
                      <span className="carousel-card__year">{year}</span>
                    </div>
                    <h3 className="carousel-card__title">{project.title}</h3>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="carousel-card__btn"
                      draggable={false}
                      onClick={(e) => { if (hasDragged.current) e.preventDefault(); }}
                    >
                      Explorer le projet <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

        <button
          className="carousel-arrow carousel-arrow--next"
          onClick={() => goToRendered(trackIdxRef.current + 1)}
          aria-label="Projet suivant"
        >
          <ChevronRight size={32} strokeWidth={1.4} />
        </button>
      </div>{/* end carousel-nav-wrapper */}

      <div className="carousel-controls container">
        <div className="carousel-counter">
          <span className="carousel-counter__cur">{String(current + 1).padStart(2, '0')}</span>
          <span className="carousel-counter__sep"> / </span>
          <span className="carousel-counter__tot">{String(TOTAL).padStart(2, '0')}</span>
        </div>
        <div className="carousel-progress">
          <div className="carousel-progress__bar" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <div className="other-projects-section container">
        <h3 className="other-projects-title">
          <span className="other-projects-count">+150</span>{' '}
          Projets réalisés
        </h3>
        <div className="other-projects-image-wrapper">
          <img src="/AUTRES PROJETS.png" alt="Autres projets" className="other-projects-image" />
        </div>
      </div>

    </section>
  );
};

export default Portfolio;
