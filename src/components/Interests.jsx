import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Brain, Terminal, ShieldAlert, Sparkles, Compass } from 'lucide-react';
import { areasOfInterest } from '../data/portfolioData';

export default function Interests() {
  const interestIcons = {
    Globe: <Globe size={28} color="var(--accent-primary)" />,
    Brain: <Brain size={28} color="#8B5CF6" />,
    Terminal: <Terminal size={28} color="var(--accent-secondary)" />,
    ShieldAlert: <ShieldAlert size={28} color="#EF4444" />
  };

  return (
    <section id="interests" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>Areas of Interest</span>
          </div>
          <h2 className="section-title">
            Areas of <span className="gradient-text">Interest</span>
          </h2>
          <p className="section-subtitle">
            Core technology and computer science domains I am passionate about exploring.
          </p>
        </div>

        {/* 4 Interest Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {areasOfInterest.map((item, idx) => (
            <motion.div
              key={item.id}
              className="glass-card"
              style={{ 
                padding: '2rem 1.75rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem',
                borderRadius: 'var(--radius-lg)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ 
                y: -6,
                borderColor: 'var(--accent-primary)',
                boxShadow: 'var(--shadow-md), 0 0 20px var(--accent-glow)'
              }}
              transition={{ duration: 0.25 }}
            >
              {/* Icon Frame */}
              <div 
                className="icon-box" 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px',
                  background: 'var(--accent-glow)' 
                }}
              >
                {interestIcons[item.icon] || <Sparkles size={28} />}
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>

              {/* Number indicator watermark in bottom corner */}
              <span 
                style={{ 
                  position: 'absolute', 
                  bottom: '1rem', 
                  right: '1.25rem', 
                  fontSize: '2.5rem', 
                  fontWeight: 900, 
                  color: 'var(--border-subtle)', 
                  userSelect: 'none',
                  lineHeight: 1
                }}
              >
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
