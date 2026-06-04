import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error when typing
    if (errors[name] && value.trim() !== '') {
      if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value.trim())) {
          setErrors((prev) => ({ ...prev, email: false }));
        }
      } else {
        setErrors((prev) => ({ ...prev, [name]: false }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()),
      subject: formData.subject.trim() === '',
      message: formData.message.trim() === ''
    };

    setErrors(newErrors);

    // If no values are invalid, display success
    const hasErrors = Object.values(newErrors).some(error => error);
    if (!hasErrors) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({ name: false, email: false, subject: false, message: false });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-underline"></div>
        </div>

        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="contact-info-card">
            <h3>Let's collaborate on your next big concept.</h3>
            <p className="contact-invite-text">
              I am currently open to Quality Analyst, Business Analyst, and project-based opportunities. Whether you need assistance with requirement analysis, process improvement, test planning, or quality assurance, feel free to reach out. Let's work together to deliver reliable, efficient, and high-quality solutions.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-method-detail">
                  <span>Send an Email</span>
                  <a href="mailto:dhakshan@example.com">dhakshansudhakar007@example.com</a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-method-detail">
                  <span>Based In</span>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social Connections */}
            <div className="social-links-container">
              <h4>Connect Online</h4>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link-icon" aria-label="Github profile"><i className="fa-brands fa-github"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link-icon" aria-label="LinkedIn profile"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link-icon" aria-label="Twitter profile"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-link-icon" aria-label="Behance portfolio"><i className="fa-brands fa-behance"></i></a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className={`form-group ${errors.name ? 'invalid' : ''}`}>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={`form-input ${formData.name ? 'has-value' : ''}`}
                  placeholder=" " 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <label htmlFor="name" className="form-label">Full Name</label>
                <span className="error-msg">Please enter your name</span>
              </div>

              <div className={`form-group ${errors.email ? 'invalid' : ''}`}>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={`form-input ${formData.email ? 'has-value' : ''}`}
                  placeholder=" " 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <label htmlFor="email" className="form-label">Email Address</label>
                <span className="error-msg">Please enter a valid email address</span>
              </div>

              <div className={`form-group ${errors.subject ? 'invalid' : ''}`}>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className={`form-input ${formData.subject ? 'has-value' : ''}`}
                  placeholder=" " 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
                <label htmlFor="subject" className="form-label">Subject</label>
                <span className="error-msg">Please enter a subject</span>
              </div>

              <div className={`form-group ${errors.message ? 'invalid' : ''}`}>
                <textarea 
                  id="message" 
                  name="message" 
                  className={`form-input ${formData.message ? 'has-value' : ''}`}
                  rows="5" 
                  placeholder=" " 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <label htmlFor="message" className="form-label">Your Message</label>
                <span className="error-msg">Please write a message</span>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>

            {/* Form Status overlay */}
            <div className={`form-status-container ${isSubmitted ? 'show' : ''}`}>
              <div className="status-content status-success">
                <div className="status-icon"><i className="fa-solid fa-circle-check"></i></div>
                <h3>Thank you!</h3>
                <p>Your message has been sent successfully. I'll get back to you shortly.</p>
                <button 
                  className="btn btn-secondary btn-reset-form" 
                  onClick={handleReset}
                >
                  Send another message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
