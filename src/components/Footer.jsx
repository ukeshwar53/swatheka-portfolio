import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer({ onOpenModal }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 70;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSocialClick = (e, platform, url) => {
    if (url.includes('placeholder')) {
      e.preventDefault();
      onOpenModal({
        title: `${platform} Link Placeholder`,
        message: `This is currently set to an editable placeholder: "${url}". You can update it with your real ${platform} URL in "src/data/portfolioData.js".`
      });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Introduction */}
          <div>
            <div className="navbar-brand" style={{ marginBottom: '0.85rem' }}>
              <div className="brand-badge">S</div>
              <span>
                {personalInfo.name}
                <span style={{ color: 'var(--accent-secondary)' }}>.</span>
              </span>
            </div>
            <p className="footer-tagline">
              First-year Computer Science and Engineering student passionate about technology, programming, and continuous learning.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-column-heading">Quick Links</h4>
            <div className="footer-links-list">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="footer-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social Links */}
          <div>
            <h4 className="footer-column-heading">Connect & Explore</h4>
            <div className="footer-links-list" style={{ marginBottom: '1.25rem' }}>
              {navLinks.slice(4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="footer-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                onClick={(e) => handleSocialClick(e, 'GitHub', personalInfo.github)}
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                onClick={(e) => handleSocialClick(e, 'LinkedIn', personalInfo.linkedin)}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                onClick={(e) => handleSocialClick(e, 'Email', personalInfo.email)}
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Required Text */}
        <div className="footer-bottom-bar">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Designed with passion and curiosity by</span>
            <strong style={{ color: 'var(--text-accent)' }}>{personalInfo.name}</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
