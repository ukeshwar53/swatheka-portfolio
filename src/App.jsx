import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { X, Info } from 'lucide-react';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('swatheka-theme');
    return savedTheme ? savedTheme : 'dark';
  });

  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('swatheka-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenModal = (data) => {
    setModalData(data);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <div className="app-wrapper">
      {/* Sticky Header Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* 1. Hero / Homepage */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. About Me */}
        <About />

        {/* 3. Educational Qualification */}
        <Education />

        {/* 4. Academic Presentations */}
        <Projects onOpenModal={handleOpenModal} />

        {/* 5. Technical & Soft Skills */}
        <Skills />

        {/* 6. Areas of Interest */}
        <Interests />

        {/* 7. Resume */}
        <Resume onOpenModal={handleOpenModal} />

        {/* 8. Contact & Connect */}
        <Contact onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Reusable Modal Dialog */}
      {modalData && (
        <div 
          className="modal-overlay" 
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="modal-content-card" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={handleCloseModal}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
              <div className="icon-box" style={{ width: '38px', height: '38px' }}>
                <Info size={19} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {modalData.title}
                </h3>
                {modalData.subtitle && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-accent)' }}>
                    {modalData.subtitle}
                  </p>
                )}
              </div>
            </div>

            <div style={{ whiteSpace: 'pre-line', fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: '1rem' }}>
              {modalData.message}
            </div>

            <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleCloseModal}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
