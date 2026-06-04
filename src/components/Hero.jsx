import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  
  useEffect(() => {
    const roles = ["Quality Analyst", "Business Analyst", "QA Automation Engineer", "Requirement Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 100;
    let timer;

    const tick = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        charIndex--;
        speed = 50;
      } else {
        setTypedText(currentRole.substring(0, charIndex + 1));
        charIndex++;
        speed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at completion
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        // Pause before typing next word
        speed = 500;
      }

      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="greeting-badge">
            <span className="pulse-dot"></span>
            I Am Available For Full-Time Roles
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Dhakshan</span>
          </h1>
          <h2 className="hero-subtitle">
            I am a <span className="typing-text">{typedText}</span>
            <span className="typed-cursor">|</span>
          </h2>
          <p className="hero-description">
            I bridge the gap between requirements gathering, business strategy, and software quality assurance. Focused on translating business problems into technical user stories, designing custom automated QA frameworks, and optimizing project delivery.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-bg"></div>
          <div className="image-wrapper">
            <img src="/assets/hero_avatar.png" alt="Creative Illustration of Dhakshan" className="floating-img" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll to About Section">
          <div className="mouse-scroll">
            <span className="wheel"></span>
          </div>
        </a>
      </div>
    </section>
  );
}
