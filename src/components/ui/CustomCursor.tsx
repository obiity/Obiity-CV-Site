import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      
      gsap.to(followerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power4.out'
      });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursorRef.current, { scale: 1.5, duration: 0.2 });
      gsap.to(followerRef.current, { scale: 1.5, opacity: 0.5, duration: 0.2 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
      gsap.to(followerRef.current, { scale: 1, opacity: 0.3, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Attach hover effects to links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={followerRef} className="custom-cursor-follower"></div>
    </>
  );
};

export default CustomCursor;
