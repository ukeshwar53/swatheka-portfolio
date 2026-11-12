import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject line is required';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });

      onOpenModal({
        title: "Thank You for Reaching Out!",
        subtitle: `Message received from ${formData.name}`,
        message: `Thank you for your message! Swatheka will review your message and get in touch at ${formData.email} soon.\n\nYou can also reach out directly via official email: ${personalInfo.email}`
      });
    }, 500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
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
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            I am always excited to connect with people, learn new things, and explore opportunities.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Column: Contact Methods & Location */}
          <div className="contact-info-panel">
            {/* Email Card with Copy button */}
            <div className="glass-card contact-method-card">
              <div className="icon-box">
                <Mail size={20} />
              </div>
              <div className="contact-method-details" style={{ flexGrow: 1 }}>
                <span className="contact-method-label">Email Address</span>
                <span className="contact-method-value">{personalInfo.email}</span>
              </div>
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-method-card"
              onClick={(e) => handleSocialClick(e, 'LinkedIn', personalInfo.linkedin)}
            >
              <div className="icon-box">
                <Linkedin size={20} />
              </div>
              <div className="contact-method-details">
                <span className="contact-method-label">LinkedIn Profile</span>
                <span className="contact-method-value">Connect on LinkedIn</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-method-card"
              onClick={(e) => handleSocialClick(e, 'GitHub', personalInfo.github)}
            >
              <div className="icon-box">
                <Github size={20} />
              </div>
              <div className="contact-method-details">
                <span className="contact-method-label">GitHub Repository</span>
                <span className="contact-method-value">Explore Code & Projects</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card contact-method-card">
              <div className="icon-box">
                <MapPin size={20} />
              </div>
              <div className="contact-method-details">
                <span className="contact-method-label">Location</span>
                <span className="contact-method-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Frontend Validation */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.4rem' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Have questions or want to collaborate? Fill in the details below.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <span className="field-error-msg">{errors.name}</span>}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                />
                {errors.email && <span className="field-error-msg">{errors.email}</span>}
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Inquiry / Mentorship"
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                />
                {errors.subject && <span className="field-error-msg">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here (min. 10 characters)..."
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                />
                {errors.message && <span className="field-error-msg">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {isSubmitting ? (
                  <span>Validating Input...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
