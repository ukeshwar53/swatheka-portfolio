import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Building2, 
  Calendar,
  Mail,
  Target,
  FileCheck2,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Profile</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            First-Year Computer Science and Engineering undergraduate student.
          </p>
        </div>

        {/* Two-Column Grid: Career Objective & Profile Card */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Left Card: Career Objective */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div className="icon-box">
                <Target size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Career Objective
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Professional Vision</span>
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>
              "{personalInfo.careerObjective}"
            </p>

            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--accent-secondary)' }}>
              <CheckCircle2 size={16} />
              <span>Dedicated to continuous learning & engineering excellence</span>
            </div>
          </div>

          {/* Right Card: Educational Qualification Summary */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div className="icon-box" style={{ background: 'rgba(6, 182, 212, 0.15)', color: 'var(--accent-secondary)' }}>
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Educational Qualification
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Academic Standing</span>
              </div>
            </div>

            <div className="info-card-list">
              <div className="info-row">
                <span className="info-label">Degree</span>
                <span className="info-value">B.E. / B.Tech</span>
              </div>

              <div className="info-row">
                <span className="info-label">Department</span>
                <span className="info-value">{personalInfo.department}</span>
              </div>

              <div className="info-row">
                <span className="info-label">Year</span>
                <span className="info-value">{personalInfo.year}</span>
              </div>

              <div className="info-row">
                <span className="info-label">Institution</span>
                <span className="info-value" style={{ fontStyle: personalInfo.institution.includes('[') ? 'italic' : 'normal' }}>
                  {personalInfo.institution}
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">Official Email</span>
                <span className="info-value" style={{ color: 'var(--accent-secondary)' }}>
                  {personalInfo.email}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Declaration Card */}
        <motion.div
          className="glass-card"
          style={{ 
            padding: '1.75rem 2rem', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(6, 182, 212, 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '640px' }}>
            <div className="icon-box" style={{ width: '44px', height: '44px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}>
              <FileCheck2 size={22} />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 800, color: '#10B981', letterSpacing: '0.06em' }}>
                Official Declaration
              </span>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.6 }}>
                "{personalInfo.declaration.text}"
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Candidate Signature</span>
            <strong style={{ fontSize: '1.2rem', color: 'var(--text-accent)', fontFamily: 'var(--font-heading)' }}>
              {personalInfo.declaration.signature}
            </strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
