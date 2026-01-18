import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, FileText, Briefcase } from 'lucide-react';

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Services', href: '/#services', isRoute: false },
    { name: 'Jobs', href: '/jobs', isRoute: true },
    { name: 'Contact', href: '/#contact', isRoute: false },
  ];

  const handleNavClick = (link: { name: string; href: string; isRoute: boolean }, e: React.MouseEvent) => {
    if (!link.isRoute) {
      e.preventDefault();
      
      if (location.pathname !== '/') {
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

  const isActiveLink = (link: { name: string; href: string; isRoute: boolean }) => {
    if (link.isRoute) {
      if (link.href === '/') {
        return location.pathname === '/';
      }
      return location.pathname.startsWith(link.href);
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-hidden">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-emerald-500/25 transition-all duration-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">
            Talent<span className="text-emerald-400">Connectors</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActiveLink(link)
                      ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                  onClick={(e) => handleNavClick(link, e)}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/apply"
            className="flex items-center gap-2 px-4 py-2 border-2 border-emerald-500 text-emerald-400 rounded-xl font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-200"
          >
            <FileText size={18} />
            Submit Resume
          </Link>
          <Link
            to="/jobs"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-md shadow-emerald-500/25"
          >
            <Briefcase size={18} />
            View Jobs
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 border-l border-white/10 z-50 lg:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <button
                  className="self-end w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors mb-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Mobile Nav Links */}
                <div className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link) =>
                    link.isRoute ? (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                          isActiveLink(link)
                            ? 'bg-emerald-500 text-white'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        key={link.name}
                        href={link.href}
                        className="px-4 py-3 rounded-xl font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                        onClick={(e) => handleNavClick(link, e)}
                      >
                        {link.name}
                      </a>
                    )
                  )}
                  
                  {/* General Application Link */}
                  <Link
                    to="/apply"
                    className="flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-200"
                  >
                    <FileText size={18} />
                    General Application
                  </Link>
                </div>

                {/* Mobile CTA */}
                <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                  <a
                    href="tel:+18005550199"
                    className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-200"
                  >
                    <Phone size={18} />
                    Call Us
                  </a>
                  <Link
                    to="/jobs"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-md"
                  >
                    <Briefcase size={18} />
                    View Jobs
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* REMOVED THE SPACER DIV THAT WAS HERE */}
    </nav>
  );
};

export default Navbar;