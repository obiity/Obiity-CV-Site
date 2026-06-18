import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  trigger?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  y?: number;
  ease?: string;
}

/**
 * Hook to apply cinematic scroll reveals to elements.
 * 
 * Elements needing reveal should have the `reveal-up` class.
 * Elements that only fade in should have `reveal-in`.
 * 
 * Example usage:
 * const containerRef = useScrollReveal({ stagger: 0.1, y: 30 });
 * <div ref={containerRef}> <h2 className="reveal-up">Title</h2> </div>
 */
export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Select elements to animate within the container
    const upElements = el.querySelectorAll('.reveal-up');
    const inElements = el.querySelectorAll('.reveal-in');
    
    const allElements = [...Array.from(upElements), ...Array.from(inElements)];

    if (allElements.length === 0) return;

    // Set initial state
    gsap.set(upElements, { y: options.y ?? 40, opacity: 0, scale: 0.98 });
    gsap.set(inElements, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options.trigger ? el.querySelector(options.trigger) || el : el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    if (upElements.length > 0) {
      tl.to(upElements, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: options.duration ?? 1.2,
        stagger: options.stagger ?? 0.15,
        ease: options.ease ?? 'power3.out',
        delay: options.delay ?? 0,
      }, 0);
    }

    if (inElements.length > 0) {
      tl.to(inElements, {
        opacity: 1,
        duration: options.duration ?? 1.5,
        stagger: options.stagger ?? 0.15,
        ease: 'power2.inOut',
      }, '<0.2');
    }

    return () => {
      tl.kill();
    };
  }, [options]);

  return ref;
};
