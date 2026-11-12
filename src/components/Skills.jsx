import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Code2, 
  FileCode, 
  Binary, 
  Presentation, 
  FileText, 
  MessageSquare, 
  Users, 
  Clock, 
  Lightbulb, 
  Zap, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { technicalSkills, softSkills } from '../data/portfolioData';

export default function Skills() {
  const techIcons = {
    Code2: <Code2 size={24} color="var(--accent-primary)" />,
    FileCode: <FileCode size={24} color="#F97316" />,
    Binary: <Binary size={24} color="#38BDF8" />,
    Presentation: <Presentation size={24} color="#FBBF24" />,
    FileText: <FileText size={24} color="#60A5FA" />
  };

  const softIcons = {
    MessageSquare: <MessageSquare size={22} color="var(--accent-primary)" />,
    Users: <Users size={22} color="var(--accent-secondary)" />,
    Clock: <Clock size={22} color="#10B981" />,
    Lightbulb: <Lightbulb size={22} color="#F59E0B" />,
    Zap: <Zap size={22} color="#EC4899" />
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Technical & Soft Skills</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Core technical programming skills, tools, and interpersonal qualities developed during first-year studies.
          </p>
        </div>

        {/* Subsection 1: Technical Skills */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="icon-box" style={{ width: '42px', height: '42px' }}>
              <Code2 size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Technical Skills
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Programming languages, web basics, and productivity tools.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {technicalSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="glass-card"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="icon-box" style={{ width: '46px', height: '46px', borderRadius: '12px' }}>
                    {techIcons[skill.icon] || <Code2 size={22} />}
                  </div>
                  <span className="tag" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                    {skill.levelBadge}
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {skill.name}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: 1.55 }}>
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subsection 2: Soft Skills */}
        <div>
          <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="icon-box" style={{ width: '42px', height: '42px', background: 'rgba(6, 182, 212, 0.15)', color: 'var(--accent-secondary)' }}>
              <HeartHandshake size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Soft Skills
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Interpersonal strengths supporting active teamwork and personal growth.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {softSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="glass-card"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="icon-box" style={{ width: '42px', height: '42px', borderRadius: '12px' }}>
                  {softIcons[skill.icon] || <Sparkles size={20} />}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {skill.name}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
