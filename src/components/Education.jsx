import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, MapPin, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Educational Qualification</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            First-year undergraduate academic qualifications in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {educationData.map((item) => (
            <motion.div
              key={item.id}
              className="glass-card"
              style={{ padding: '2.25rem', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="icon-box" style={{ width: '52px', height: '52px', borderRadius: '16px' }}>
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {item.degree}
                    </h3>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-accent)' }}>
                      Department of {item.department}
                    </div>
                  </div>
                </div>

                <div className="timeline-period" style={{ fontSize: '0.85rem' }}>
                  <Calendar size={14} style={{ display: 'inline', marginRight: '5px' }} />
                  {item.year}
                </div>
              </div>

              <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {item.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <Building2 size={18} color="var(--accent-primary)" />
                  <span>
                    Institution: <strong style={{ color: 'var(--text-primary)', fontStyle: item.institution.includes('[') ? 'italic' : 'normal' }}>{item.institution}</strong>
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={18} color="var(--accent-secondary)" />
                  <span>
                    Location: <strong style={{ color: 'var(--text-primary)' }}>{item.location}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
