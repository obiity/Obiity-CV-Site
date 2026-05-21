import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CyberMap.css';

const DAKAR_COORDS: [number, number] = [14.7167, -17.4677];
const MAP_CENTER_COORDS: [number, number] = [14.7167, -12.0];

const CyberMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;
    const container = mapContainerRef.current;

    const map = L.map(container, {
      center: MAP_CENTER_COORDS,
      zoom: 3,
      minZoom: 2,
      maxZoom: 12,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,   // toggled on mouseenter / mouseleave
      doubleClickZoom: true,
      dragging: true,
      touchZoom: true,
      bounceAtZoomLimits: true,
      zoomSnap: 0.5,            // smoother step
      wheelPxPerZoomLevel: 80,  // slower / more controlled wheel zoom
    });

    mapRef.current = map;

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      maxZoom: 12,
      minZoom: 2,
    }).addTo(map);

    const senegalCoords: [number, number][] = [
      [14.72, -17.53], [14.85, -17.38], [15.45, -16.95], [16.05, -16.51],
      [16.50, -16.50], [16.55, -16.15], [16.68, -15.00], [16.18, -14.28],
      [15.02, -13.15], [14.80, -12.22], [14.45, -12.18], [13.90, -12.22],
      [12.60, -12.10], [12.38, -13.62], [12.45, -14.50], [12.30, -16.70],
      [12.45, -16.75], [13.60, -16.50], [13.60, -14.50], [13.20, -14.50],
      [13.20, -16.50], [13.70, -16.60], [14.40, -17.15], [14.72, -17.53],
    ];

    L.polygon(senegalCoords, {
      color: '#e8904f',
      fillColor: '#e8904f',
      fillOpacity: 0.25,
      weight: 2,
      className: 'senegal-highlight-glow',
    }).addTo(map);

    const dakarIcon = L.divIcon({
      className: 'dakar-locator-icon-wrapper',
      html: `
        <div class="dakar-orange-pulse p1"></div>
        <div class="dakar-orange-pulse p2"></div>
        <div class="dakar-orange-pulse p3"></div>
        <div class="dakar-orange-dot"></div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    L.marker(DAKAR_COORDS, { icon: dakarIcon }).addTo(map);

    // ── Scroll-wheel zoom: active only while cursor is on the map ──
    const enableScrollZoom = () => {
      map.scrollWheelZoom.enable();
      showHint('Scroll pour zoomer');
    };
    const disableScrollZoom = () => {
      map.scrollWheelZoom.disable();
    };
    container.addEventListener('mouseenter', enableScrollZoom);
    container.addEventListener('mouseleave', disableScrollZoom);

    // ── Pinch-zoom on mobile: switch touch-action to none for 2-finger touch ──
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length >= 2) {
        container.style.touchAction = 'none';
      }
    };
    const handleTouchEnd = () => {
      container.style.touchAction = '';
    };
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend',   handleTouchEnd,   { passive: true });
    container.addEventListener('touchcancel', handleTouchEnd,  { passive: true });

    // ── Invalidate size after first paint (mobile grey-map fix) ──
    const sizeTimer = setTimeout(() => { map.invalidateSize(); }, 300);
    const handleResize = () => map.invalidateSize();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      container.removeEventListener('mouseenter',  enableScrollZoom);
      container.removeEventListener('mouseleave',  disableScrollZoom);
      container.removeEventListener('touchstart',  handleTouchStart);
      container.removeEventListener('touchend',    handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
      clearTimeout(sizeTimer);
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
      window.removeEventListener('resize', handleResize);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const showHint = (text: string) => {
    const hint = hintRef.current;
    if (!hint) return;
    hint.textContent = text;
    hint.classList.add('is-visible');
    if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
    hintTimerRef.current = setTimeout(() => {
      hint.classList.remove('is-visible');
    }, 1800);
  };

  return (
    <div className="cyber-map-container">
      <div ref={mapContainerRef} className="leaflet-earth-map-canvas" />
      <div ref={hintRef} className="cyber-map-hint" aria-hidden="true" />
    </div>
  );
};

export default CyberMap;
