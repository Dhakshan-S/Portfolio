import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Check if the device is a touch screen
    const touchCheck = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    touchCheck();

    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Easing follower loop
    let frameId;
    const animateFollower = () => {
      const ease = 0.15;
      followerX += (mouseX - followerX) * ease;
      followerY += (mouseY - followerY) * ease;

      if (followerRef.current) {
        followerRef.current.style.left = `${followerX}px`;
        followerRef.current.style.top = `${followerY}px`;
      }
      frameId = requestAnimationFrame(animateFollower);
    };
    frameId = requestAnimationFrame(animateFollower);

    // Hover detection logic
    const applyHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, .project-card, .tab-btn, .social-link-icon, .form-input');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', () => setIsHovered(true));
        target.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    // Apply listeners initially and set up mutation observer for dynamic changes
    applyHoverListeners();
    const observer = new MutationObserver(applyHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      />
      <div 
        ref={followerRef} 
        className={`custom-cursor-follower ${isHovered ? 'hovered' : ''}`}
      />
    </>
  );
}
