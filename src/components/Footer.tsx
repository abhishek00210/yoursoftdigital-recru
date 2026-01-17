
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ChevronRight,
  Send
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About Us', href: '/#about', isRoute: false },
    { name: 'Our Services', href: '/#services', isRoute: false },
    { name: 'Browse Jobs', href: '/jobs', isRoute: true },
    { name: 'Contact Us', href: '/#contact', isRoute: false },
  ];

  const jobCategories = [
    { name: 'CNC Operators', href: '/jobs?q=CNC' },
    { name: 'Electricians', href: '/jobs?q=Electrician' },
    { name: 'Maintenance Techs', href: '/jobs?q=Maintenance' },
    { name: 'HVAC Technicians', href: '/jobs?q=HVAC' },
    { name: 'PLC Technicians', href: '/jobs?q=PLC' },
    { name: 'Millwrights', href: '/jobs?q=Millwright' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* CTA Banner */}
        <div className="footer-cta-banner">
          <div className="footer-cta-content">
            <h3>Ready to Find Your Next Opportunity?</h3>
            <p>Browse hundreds of technical positions across North America</p>
          </div>
          <Link to="/jobs" className="btn btn-white">
            View All Jobs
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="logo-text" style={{ color: 'white' }}>
                Talent<span style={{ color: '#60a5fa' }}>Connectors</span>
              </span>
            </Link>
            
            <p>
              TalentConnectors is a specialist recruitment brand operated by 
              Yoursoft Digital Inc. We connect skilled technicians and industrial 
              professionals with leading companies across Canada and the USA.
            </p>

            <div className="footer-newsletter">
              <h4>Get Job Alerts</h4>
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                />
                <button type="submit" className="btn btn-primary">
                  <Send size={18} />
                </button>
              </form>
            </div>

            
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link to={link.href}>
                      <ChevronRight size={16} />
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href}>
                      <ChevronRight size={16} />
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Job Categories */}
          <div className="footer-column">
            <h4>Job Categories</h4>
            <ul className="footer-links">
              {jobCategories.map((category, index) => (
                <li key={index}>
                  <Link to={category.href}>
                    <ChevronRight size={16} />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>
                  123 Business District<br />
                  Toronto, ON M5V 3A8<br />
                  Canada
                </span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} />
                <a href="tel:+18005550199">+1 (800) 555-0199</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <a href="mailto:info@talentconnectors.com">info@talentconnectors.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} TalentConnectors by Yoursoft Digital Inc. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;