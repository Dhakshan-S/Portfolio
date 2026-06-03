import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Header background scrolling effect
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Scroll percentage bar calculation
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // 3. Highlight navigation link by scrolling position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200; // offset for detection

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" onClick={() => setMobileMenuOpen(false)}>
            <span className="logo-accent">&lt;</span>Dhakshan<span className="logo-accent"> /&gt;</span>
          </a>
          
          <nav className={`navbar ${mobileMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            {/* Theme Switcher */}
            <button 
              className="theme-toggle" 
              onClick={toggleTheme} 
              aria-label="Toggle visual theme"
            >
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
            </button>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className={`mobile-nav-toggle ${mobileMenuOpen ? 'open' : ''}`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
