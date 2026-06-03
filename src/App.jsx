import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CanvasBackground from './components/CanvasBackground';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectProject = (projectId) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Dynamic Cursor followers */}
      <CustomCursor />

      {/* Floating Header Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* Hero Banner Section with Canvas backdrop */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <CanvasBackground theme={theme} />
          <Hero />
        </div>

        {/* Bio information and counter stats */}
        <About />

        {/* Filters and showcase project cards */}
        <Projects onSelectProject={handleSelectProject} />

        {/* Message dispatch systems */}
        <Contact />
      </main>

      {/* Page bottom landmarks */}
      <Footer />

      {/* Hover popups container */}
      <ProjectModal 
        projectId={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
}
