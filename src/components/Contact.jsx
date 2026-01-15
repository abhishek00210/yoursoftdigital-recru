import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Twitter, 
  Facebook,
  MessageSquare,
  Clock,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: '',
        consent: false,
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      value: 'info@talentconnectors.com',
      link: 'mailto:info@talentconnectors.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      value: '+1 (800) 555-0199',
      link: 'tel:+18005550199',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Headquarters',
      value: 'Toronto, ON, Canada',
      link: null,
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      value: 'Mon-Fri: 8AM - 6PM EST',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-container" ref={ref}>
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-badge">
              <MessageSquare size={16} />
              Contact Us
            </span>
            
            <h2>Let's Find Your Next Great Hire</h2>
            
            <p>
              Whether you're looking to hire skilled technicians or you're a 
              professional seeking new opportunities, we'd love to hear from you. 
              Get in touch today.
            </p>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="contact-method"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="contact-method-icon">
                    {method.icon}
                  </div>
                  <div className="contact-method-info">
                    <h4>{method.title}</h4>
                    {method.link ? (
                      <a href={method.link}>{method.value}</a>
                    ) : (
                      <p>{method.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="contact-social"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '3rem',
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle size={40} color="white" />
                </div>
                <h3 style={{ marginBottom: '0.5rem', color: '#1e293b' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: '#64748b' }}>
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inquiryType">Inquiry Type *</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="employer">I'm an Employer - Need to Hire</option>
                      <option value="candidate">I'm a Candidate - Looking for Jobs</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your hiring needs or the type of position you're looking for..."
                    required
                  ></textarea>
                </div>

                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="consent">
                    I agree to the <a href="#privacy">Privacy Policy</a> and consent 
                    to being contacted about recruitment opportunities. We will never 
                    share your information with third parties.
                  </label>
                </div>

                <div className="form-submit">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loader-spinner" style={{
                          width: '20px',
                          height: '20px',
                          borderWidth: '2px',
                        }}></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;