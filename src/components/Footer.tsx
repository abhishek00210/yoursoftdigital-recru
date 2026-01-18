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
  Send,
  Settings,
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

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Do Not Sell My Data', href: '/do-not-sell' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('openCookieSettings'));
  };

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* CTA Banner */}
        <div className="relative -mt-16 mb-16">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-10 shadow-xl shadow-emerald-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Find Your Next Opportunity?
                </h3>
                <p className="text-emerald-100 text-base md:text-lg">
                  Browse hundreds of technical positions across North America
                </p>
              </div>
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap"
              >
                View All Jobs
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 py-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
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

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              TalentConnectors is a specialist recruitment brand operated by
              Yoursoft Digital Inc. We connect skilled technicians and industrial
              professionals with leading companies across Canada and the USA.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm mb-3">
                Get Job Alerts
              </h4>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 active:scale-95 flex-shrink-0"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-2 text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-200"
                    >
                      <ChevronRight
                        size={14}
                        className="text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-200"
                      />
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-200"
                    >
                      <ChevronRight
                        size={14}
                        className="text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-200"
                      />
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h4 className="text-white font-semibold mb-5">Job Categories</h4>
            <ul className="space-y-3">
              {jobCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.href}
                    className="group inline-flex items-center gap-2 text-gray-400 text-sm hover:text-emerald-400 transition-colors duration-200"
                  >
                    <ChevronRight
                      size={14}
                      className="text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-200"
                    />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Us</h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-emerald-400" />
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  Surrey, BC 
                  <br />
                  Canada
                  <br />
                  YourSoft Digital.
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-blue-400" />
                </div>
                <a
                  href="tel:+12362341294"
                  className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  + 1 (236) 234-1294
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-amber-400" />
                </div>
                <a
                  href="mailto:info@talentconnectors.com"
                  className="text-gray-400 text-sm hover:text-amber-400 transition-colors duration-200"
                >
                  info@talentconnectors.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6">
          {/* Legal Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-gray-500 text-sm hover:text-emerald-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={openCookieSettings}
              className="inline-flex items-center gap-1.5 text-gray-500 text-sm hover:text-emerald-400 transition-colors duration-200"
            >
              <Settings size={14} />
              Cookie Settings
            </button>
          </div>

          {/* Copyright Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} TalentConnectors by Yoursoft Digital Inc. All rights
              reserved.
            </p>
            <p className="text-gray-600 text-xs text-center md:text-right">
              Recruitment services for Canada and the United States
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;