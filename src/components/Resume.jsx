import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle, 
  GraduationCap, 
  Code2, 
  Presentation,
  Compass,
  FileCheck2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Resume({ onOpenModal }) {
  const [resumeError, setResumeError] = useState(false);

  const handleViewResume = () => {
    try {
      window.open(personalInfo.resumePath, '_blank', 'noopener,noreferrer');
    } catch {
      setResumeError(true);
      onOpenModal({
        title: "Resume Preview",
        message: "Unable to open the resume PDF directly in your browser. You can download it directly using the Download Resume button."
      });
    }
  };

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Explore my educational qualifications, verified technical skills, academic presentations, and signed declaration.
          </p>
        </div>

        {/* Resume Preview Grid */}
        <div className="resume-preview-container">
          {/* Left Column: Simulated Paper Preview */}
          <motion.div
            className="glass-card resume-paper-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="resume-paper-header">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 className="resume-paper-name">{personalInfo.name}</h3>
                  <div className="resume-paper-subtitle">
                    {personalInfo.title}
                  </div>
                </div>
                <div className="tag" style={{ background: 'var(--accent-glow)' }}>
                  Verified PDF
                </div>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', marginTop: '0.4rem', fontWeight: 600 }}>
                Email: {personalInfo.email}
              </div>
            </div>

            <div className="resume-paper-preview-section">
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                  <GraduationCap size={15} color="var(--accent-primary)" />
                  <span>Educational Qualification</span>
                </strong>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  {personalInfo.degree} • {personalInfo.department} ({personalInfo.year}) • {personalInfo.institution}
                </p>
              </div>

              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                  <Code2 size={15} color="var(--accent-secondary)" />
                  <span>Technical & Soft Skills</span>
                </strong>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  C Programming, HTML5, Python, MS PowerPoint, MS Word • Communication, Teamwork, Time Management, Problem-Solving, Quick Learning
                </p>
              </div>

              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                  <Presentation size={15} color="#10B981" />
                  <span>Academic Presentations</span>
                </strong>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  1. AI in Agriculture • 2. The Dark Web
                </p>
              </div>

              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                  <Compass size={15} color="#F59E0B" />
                  <span>Areas of Interest</span>
                </strong>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Web Development, Artificial Intelligence, Software Development, Cybersecurity
                </p>
              </div>

              <div style={{ paddingTop: '0.5rem', borderTop: '1px dashed var(--border-subtle)', fontStyle: 'italic', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                "{personalInfo.declaration.text}" — <strong>{personalInfo.declaration.signature}</strong>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Actions & Highlights */}
          <div className="resume-action-box">
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Download or Preview Resume
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              My resume contains my verified first-year CSE profile, career objective, academic presentations on AI and Cybersecurity, and technical skill foundations.
            </p>

            <div className="resume-highlights-list">
              <div className="resume-highlight-item">
                <CheckCircle size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Career Objective: To build a successful career in Computer Science</span>
              </div>
              <div className="resume-highlight-item">
                <CheckCircle size={18} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Verified student email: <code>{personalInfo.email}</code></span>
              </div>
              <div className="resume-highlight-item">
                <CheckCircle size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Signed declaration of authenticity by {personalInfo.name}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <a
                href={personalInfo.resumePath}
                download="Swatheka_R_Resume.pdf"
                className="btn btn-primary"
                aria-label="Download Swatheka R. Resume PDF"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleViewResume}
                aria-label="View Resume in Browser"
              >
                <Eye size={18} />
                <span>View Resume</span>
              </button>
            </div>

            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Standard 1-page document • <code>public/resume.pdf</code>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
