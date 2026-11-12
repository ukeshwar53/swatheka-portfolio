import React from 'react';
import { motion } from 'framer-motion';
import { 
  Presentation, 
  CheckCircle2, 
  ExternalLink,
  ShieldAlert,
  Sprout,
  FileText
} from 'lucide-react';
import { academicPresentations } from '../data/portfolioData';

export default function Projects({ onOpenModal }) {
  const handleViewPresentation = (presentation) => {
    onOpenModal({
      title: `${presentation.number}. ${presentation.title}`,
      subtitle: `Department Seminar • Category: ${presentation.category}`,
      message: `${presentation.summary}\n\nKey Academic Points Covered:\n${presentation.points.map(pt => `• ${pt}`).join('\n')}\n\nNotice: This presentation was prepared for academic coursework during first-year studies.`
    });
  };

  return (
    <section id="presentations" className="section">
      {/* Anchor for backward compatibility with #projects */}
      <div id="projects" style={{ position: 'relative', top: '-80px', visibility: 'hidden' }} />
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Presentation size={14} />
            <span>Academic Work</span>
          </div>
          <h2 className="section-title">
            Academic <span className="gradient-text">Presentations</span>
          </h2>
          <p className="section-subtitle">
            Research seminars and PowerPoint presentations prepared during first-year engineering coursework.
          </p>
        </div>

        {/* Two Academic Presentation Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {academicPresentations.map((item) => (
            <motion.article
              key={item.id}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%', borderRadius: 'var(--radius-lg)' }}
              whileHover={{ y: -4, borderColor: item.badgeColor }}
              transition={{ duration: 0.2 }}
            >
              {/* Visual Card Banner Header */}
              <div 
                style={{ 
                  padding: '1.75rem 2rem 1.25rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: item.category === 'Artificial Intelligence'
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(16, 185, 129, 0.08))'
                    : 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(139, 92, 246, 0.08))',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div 
                    className="icon-box" 
                    style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '12px',
                      background: item.category === 'Artificial Intelligence' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(6, 182, 212, 0.2)',
                      color: item.badgeColor 
                    }}
                  >
                    {item.category === 'Artificial Intelligence' ? <Sprout size={24} /> : <ShieldAlert size={24} />}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
                      Presentation 0{item.number}
                    </span>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                <span 
                  className="tag" 
                  style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: item.badgeColor, 
                    borderColor: item.badgeColor,
                    background: 'transparent'
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {item.summary}
                </p>

                {/* Topics / Points Covered */}
                <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.75rem' }}>
                    Topics Covered:
                  </span>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {item.points.map((pt, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        <CheckCircle2 size={16} color={item.badgeColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Footer */}
                <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    PowerPoint Presentation (.pptx)
                  </span>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleViewPresentation(item)}
                    aria-label={`View details of ${item.title}`}
                  >
                    <Presentation size={15} />
                    <span>View Summary</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
