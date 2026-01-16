import  { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone,  FileText, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '/#about', isRoute: false },
    { name: 'Services', href: '/#services', isRoute: false },
    { name: 'Jobs', href: '/jobs', isRoute: true },
    { name: 'Contact', href: '/#contact', isRoute: false },
  ];

  const handleNavClick = (link, e) => {
    if (!link.isRoute) {
      e.preventDefault();
      
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.href.replace('/', ''));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(link.href.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (link) => {
    if (link.isRoute) {
      if (link.href === '/') {
        return location.pathname === '/';
      }
      return location.pathname.startsWith(link.href);
    }
    return false;
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="logo-text">Talent<span>Connectors</span></span>
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className={`nav-link ${isActiveLink(link) ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => handleNavClick(link, e)}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <Link to="/apply" className="btn btn-outline">
              <FileText size={18} />
              Submit Resume
            </Link>
            <Link to="/jobs" className="btn btn-primary">
              <Briefcase size={18} />
              View Jobs
            </Link>
          </div>

          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu active"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={isActiveLink(link) ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(link, e)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Link to="/apply" className="highlight-link">
                <FileText size={18} />
                General Application
              </Link>
            </div>
            <div className="mobile-nav-cta">
              <a href="tel:+18005550199" className="btn btn-outline">
                <Phone size={18} />
                Call Us
              </a>
              <Link to="/jobs" className="btn btn-primary">
                <Briefcase size={18} />
                View Jobs
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;