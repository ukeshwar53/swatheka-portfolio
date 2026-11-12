import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  ChevronDown,
  Building2,
  Send,
  Code2,
  Terminal,
  Cpu,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Radiant ambient glow orbs with smooth motion */}
      <motion.div 
        className="bg-glow-orb orb-purple" 
        style={{ top: '8%', left: '10%', width: '460px', height: '460px', opacity: 0.35 }} 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true" 
      />
      <motion.div 
        className="bg-glow-orb orb-cyan" 
        style={{ top: '20%', right: '8%', width: '420px', height: '420px', opacity: 0.3 }} 
        animate={{ 
          scale: [1.08, 1, 1.08],
          opacity: [0.25, 0.35, 0.25]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true" 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Authentic Student Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Academic Status Pill */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.55rem', 
                padding: '0.4rem 1rem', 
                borderRadius: 'var(--radius-full)', 
                background: 'var(--accent-glow)', 
                border: '1px solid var(--border-focus)',
                fontSize: '0.825rem',
                fontWeight: 600,
                color: 'var(--text-accent)',
                marginBottom: '1.25rem'
              }}
            >
              <span className="pulse-dot" />
              <span>First-Year Computer Science Undergraduate</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="hero-title">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Subtitle & Department */}
            <div className="hero-subtitle">
              {personalInfo.title}
            </div>

            {/* College & Location Badge */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                fontSize: '0.95rem', 
                fontWeight: 600, 
                color: 'var(--accent-secondary)', 
                marginBottom: '1.5rem',
                background: 'rgba(6, 182, 212, 0.08)',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(6, 182, 212, 0.2)'
              }}
            >
              <Building2 size={16} />
              <span>{personalInfo.institution} • Tamil Nadu</span>
            </div>

            {/* Career Objective Intro */}
            <p className="hero-intro">
              "{personalInfo.careerObjective}"
            </p>

            {/* Hero CTAs */}
            <div className="hero-cta-group">
              <a
                href="#presentations"
                className="btn btn-primary"
                onClick={(e) => handleScrollTo(e, 'presentations')}
              >
                <span>Academic Presentations</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Swatheka_R_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="btn btn-outline"
                onClick={(e) => handleScrollTo(e, 'contact')}
              >
                <Send size={16} />
                <span>Contact</span>
              </a>
            </div>

            {/* Verified Student Email Chip */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.65rem', 
                padding: '0.45rem 1.15rem', 
                borderRadius: 'var(--radius-full)', 
                background: 'var(--bg-tertiary)', 
                border: '1px solid var(--border-subtle)', 
                fontSize: '0.85rem' 
              }}
            >
              <Mail size={15} color="var(--accent-secondary)" />
              <span style={{ color: 'var(--text-muted)' }}>Official Email:</span>
              <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                {personalInfo.email}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Terminal / Code Card with Motion Design */}
          <motion.div
            className="hero-visual-wrapper"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Floating Live Badges */}
            <motion.div
              className="floating-badge float-badge-1"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 size={15} color="var(--accent-primary)" />
              <span>C • Python • HTML5</span>
            </motion.div>

            <motion.div
              className="floating-badge float-badge-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <ShieldCheck size={15} color="var(--accent-secondary)" />
              <span>AI & Cybersecurity</span>
            </motion.div>

            {/* Main Terminal Window */}
            <div className="hero-terminal-card">
              {/* Terminal Title Bar */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot dot-red" />
                  <span className="terminal-dot dot-yellow" />
                  <span className="terminal-dot dot-green" />
                </div>
                <div className="terminal-title">
                  <Terminal size={14} color="var(--accent-secondary)" />
                  <span>swatheka_profile.c</span>
                </div>
                <span className="terminal-badge">gcc 14.2 • C99</span>
              </div>

              {/* Syntax Highlighted C Code */}
              <div className="terminal-body">
                <div className="code-line">
                  <span className="line-num">1</span>
                  <span><span className="code-keyword">#include</span> <span className="code-str">&lt;stdio.h&gt;</span></span>
                </div>
                <div className="code-line">
                  <span className="line-num">2</span>
                  <span><span className="code-comment">// R.M.D. Engineering College (1st Year)</span></span>
                </div>
                <div className="code-line">
                  <span className="line-num">3</span>
                  <span><span className="code-type">int</span> <span className="code-fn">main</span>() &#123;</span>
                </div>
                <div className="code-line">
                  <span className="line-num">4</span>
                  <span>&nbsp;&nbsp;<span className="code-keyword">const char*</span> student = <span className="code-str">"Swatheka R."</span>;</span>
                </div>
                <div className="code-line">
                  <span className="line-num">5</span>
                  <span>&nbsp;&nbsp;<span className="code-keyword">const char*</span> college = <span className="code-str">"R.M.D. Engg College"</span>;</span>
                </div>
                <div className="code-line">
                  <span className="line-num">6</span>
                  <span>&nbsp;&nbsp;<span className="code-keyword">const char*</span> dept = <span className="code-str">"Computer Science & Engg"</span>;</span>
                </div>
                <div className="code-line">
                  <span className="line-num">7</span>
                  <span>&nbsp;&nbsp;<span className="code-fn">printf</span>(<span className="code-str">"Ready to learn, code &amp; innovate!\n"</span>);</span>
                </div>
                <div className="code-line">
                  <span className="line-num">8</span>
                  <span>&nbsp;&nbsp;<span className="code-keyword">return</span> <span className="code-var">0</span>;</span>
                </div>
                <div className="code-line">
                  <span className="line-num">9</span>
                  <span>&#125;</span>
                </div>
              </div>

              {/* Execution Console Output */}
              <div className="terminal-console">
                <div>
                  <span className="console-prompt">$ gcc swatheka_profile.c -o swatheka && ./swatheka</span>
                </div>
                <div style={{ color: '#E2E8F0', marginTop: '2px' }}>
                  Ready to learn, code &amp; innovate!
                </div>
                <div style={{ color: '#38BDF8', fontSize: '0.72rem', marginTop: '2px' }}>
                  ✓ R.M.D. Engineering College | 26cs235@rmd.ac.in
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <a 
        href="#about" 
        className="scroll-indicator"
        onClick={(e) => handleScrollTo(e, 'about')}
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>
        <div className="scroll-mouse-icon">
          <div className="scroll-wheel" />
        </div>
        <ChevronDown size={14} />
      </a>
    </section>
  );
}
