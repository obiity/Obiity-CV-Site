import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Layers, Cpu, TrendingUp } from 'lucide-react';
import './FabStore.css';

gsap.registerPlugin(ScrollTrigger);

interface StoreProduct {
  id: number;
  title: string;
  category: string;
  price: string;
  badge: string;
  image: string;
}

const storeProducts: StoreProduct[] = [
  {
    id: 1,
    title: 'Maama Africa Hair Comb',
    category: '3D Prop',
    price: 'À partir de $9.99',
    badge: 'Prop',
    image: '/Maama Africa Hair Comb.png',
  },
  {
    id: 2,
    title: 'African Tribal Mask',
    category: '3D Prop · Art & Culture',
    price: 'À partir de $12.99',
    badge: 'Art & Culture',
    image: '/African Tribal Mask.png',
  },
  {
    id: 3,
    title: 'Senegalese Car Rapide',
    category: 'Vehicle · Game-Ready',
    price: 'À partir de $19.99',
    badge: 'Vehicle',
    image: '/Senegalese Car Rapide.png',
  },
  {
    id: 4,
    title: 'Traditional African Djembe Drum',
    category: '3D Prop · Instrument',
    price: 'À partir de $9.99',
    badge: 'Instrument',
    image: '/Traditional African Djembe Drum.png',
  },
  {
    id: 5,
    title: 'Senegalese False-Lion',
    category: 'Character · Rigged',
    price: 'À partir de $19.99',
    badge: 'Character',
    image: '/Senegalese False-Lion.png',
  },
  {
    id: 6,
    title: 'Traditional African Tribal Wooden Stool',
    category: '3D Prop · Furniture',
    price: 'À partir de $14.99',
    badge: 'Furniture',
    image: '/Traditional African Tribal Wooden Stool.png',
  },
];

const FAB_STORE_URL = 'https://www.fab.com/sellers/Obiity_3D?lang=fr';

const FabStore: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    const feature = featureRef.current;
    if (!section || !header || !grid || !feature) return;

    gsap.fromTo(
      header.querySelectorAll('.animate-text'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, stagger: 0.12, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    );

    const isMobile = window.innerWidth < 768;
    gsap.fromTo(
      grid.querySelectorAll('.store-card'),
      { opacity: 0, y: isMobile ? 30 : 50, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        stagger: isMobile ? 0.05 : 0.1,
        duration: isMobile ? 0.5 : 1.1,
        ease: isMobile ? 'power3.out' : 'elastic.out(1, 0.8)',
        scrollTrigger: { trigger: grid, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );

    gsap.fromTo(
      feature,
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: feature, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );
  }, []);

  return (
    <section id="store" className="store-section" ref={sectionRef}>
      <div className="store-glow-top"></div>
      <div className="store-glow-bottom"></div>

      <div className="store-container">

        {/* Header */}
        <div className="store-header" ref={headerRef}>
          <div className="store-logo-wrapper animate-text">
            <img src="/OBIITY NEW-02.png" alt="Obiity Logo" className="store-official-logo" />
          </div>
          <span className="store-subtitle-label animate-text">Marketplace Officielle · FAB</span>
          <h2 className="store-title animate-text">Mes Assets 3D</h2>
          <p className="store-subtitle animate-text">
            Modèles 3D africains authentiques — props, personnages et véhicules inspirés de la culture sénégalaise,
            optimisés pour Unreal Engine 5 et Unity.
          </p>
          <a href={FAB_STORE_URL} target="_blank" rel="noopener noreferrer" className="store-top-cta animate-text">
            <ExternalLink size={13} />
            Accéder à la boutique complète
          </a>
        </div>

        {/* Grille produits */}
        <div className="store-grid" ref={gridRef}>
          {storeProducts.map((product) => (
            <div key={product.id} className="store-card">
              <div className="store-card-image-container">
                <img src={product.image} alt={product.title} className="store-card-image" loading="lazy" decoding="async" />
                <div className="store-card-overlay">
                  <span className="store-card-badge">{product.badge}</span>
                  <div className="store-card-price">{product.price}</div>
                </div>
              </div>
              <div className="store-card-info">
                <span className="store-card-category">{product.category}</span>
                <h3 className="store-card-title">{product.title}</h3>
              </div>
              <div className="store-card-border"></div>
            </div>
          ))}
        </div>

        {/* Bannière CTA bas de section */}
        <div className="store-feature-banner" ref={featureRef}>
          <div className="store-feature-content">
            <div className="store-feature-header">
              <Layers className="store-feature-icon" />
              <h3>Assets 3D africains, game-ready</h3>
            </div>
            <p className="store-feature-text">
              Conçus à Dakar, ces assets célèbrent la richesse culturelle africaine tout en répondant aux standards
              techniques les plus élevés — PBR, LODs, rigging professionnel, prêts pour le temps réel et le cinéma.
            </p>
            <div className="store-features-tags">
              <span className="store-tag"><Cpu className="tag-icon" /> UE5 Ready</span>
              <span className="store-tag"><Layers className="tag-icon" /> PBR Textures</span>
              <span className="store-tag"><TrendingUp className="tag-icon" /> LODs inclus</span>
            </div>
          </div>

          <div className="store-action-area">
            <a href={FAB_STORE_URL} target="_blank" rel="noopener noreferrer" className="store-cta-button">
              <span>VISITER LA BOUTIQUE FAB</span>
              <ExternalLink className="cta-icon" />
            </a>
          </div>

          <div className="store-feature-glow"></div>
        </div>

      </div>
    </section>
  );
};

export default FabStore;
