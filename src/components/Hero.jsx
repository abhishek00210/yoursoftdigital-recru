import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Users, Briefcase, Award } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="hero">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="hero-badge-dot"></span>
            Trusted by 500+ Companies in North America
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Expert Recruitment for
            <span> Technical & Industrial</span> Talent
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            TalentConnectors is your trusted partner for hiring skilled technicians, 
            machine operators, and technical professionals. We proactively headhunt 
            top talent across Canada and the USA.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#jobs" className="btn btn-primary btn-large">
              Browse Open Positions
              <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn btn-outline btn-large">
              <Play size={20} />
              Learn How We Work
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="hero-stat">
              <div className="hero-stat-number">2,500+</div>
              <div className="hero-stat-label">Placements Made</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">98%</div>
              <div className="hero-stat-label">Client Satisfaction</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">15+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-illustration">
            {/* Main SVG Illustration - Technical Recruitment */}
            <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Circle */}
              <circle cx="300" cy="250" r="200" fill="url(#heroGradient1)" opacity="0.1"/>
              
              {/* Main Building/Factory */}
              <g className="animate-float-slow">
                <rect x="150" y="180" width="300" height="200" rx="10" fill="#1e293b"/>
                <rect x="170" y="200" width="60" height="50" rx="5" fill="#3b82f6" opacity="0.8"/>
                <rect x="250" y="200" width="60" height="50" rx="5" fill="#06b6d4" opacity="0.8"/>
                <rect x="330" y="200" width="60" height="50" rx="5" fill="#3b82f6" opacity="0.8"/>
                <rect x="170" y="270" width="60" height="50" rx="5" fill="#06b6d4" opacity="0.8"/>
                <rect x="250" y="270" width="60" height="50" rx="5" fill="#3b82f6" opacity="0.8"/>
                <rect x="330" y="270" width="60" height="50" rx="5" fill="#06b6d4" opacity="0.8"/>
                
                {/* Door */}
                <rect x="270" y="330" width="60" height="50" rx="5" fill="#f97316"/>
                
                {/* Chimney */}
                <rect x="380" y="140" width="30" height="50" fill="#1e293b"/>
                <ellipse cx="395" cy="130" rx="20" ry="10" fill="#94a3b8" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite"/>
                </ellipse>
              </g>
              
              {/* Gear 1 - Animated */}
              <g className="animate-spin" style={{transformOrigin: '100px 150px'}}>
                <circle cx="100" cy="150" r="40" fill="none" stroke="#3b82f6" strokeWidth="8"/>
                <circle cx="100" cy="150" r="15" fill="#3b82f6"/>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <rect
                    key={i}
                    x="95"
                    y="105"
                    width="10"
                    height="20"
                    fill="#3b82f6"
                    transform={`rotate(${angle} 100 150)`}
                  />
                ))}
              </g>
              
              {/* Gear 2 - Animated */}
              <g className="animate-spin" style={{transformOrigin: '520px 320px', animationDirection: 'reverse'}}>
                <circle cx="520" cy="320" r="35" fill="none" stroke="#06b6d4" strokeWidth="6"/>
                <circle cx="520" cy="320" r="12" fill="#06b6d4"/>
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <rect
                    key={i}
                    x="516"
                    y="280"
                    width="8"
                    height="18"
                    fill="#06b6d4"
                    transform={`rotate(${angle} 520 320)`}
                  />
                ))}
              </g>
              
              {/* Worker Silhouette 1 */}
              <g className="animate-float" style={{animationDelay: '0s'}}>
                <circle cx="80" cy="350" r="25" fill="#f97316"/>
                <ellipse cx="80" cy="400" rx="20" ry="30" fill="#f97316"/>
                {/* Hard Hat */}
                <path d="M55 340 Q80 320 105 340" stroke="#fbbf24" strokeWidth="8" fill="none"/>
              </g>
              
              {/* Worker Silhouette 2 */}
              <g className="animate-float" style={{animationDelay: '1s'}}>
                <circle cx="520" cy="180" r="25" fill="#10b981"/>
                <ellipse cx="520" cy="230" rx="20" ry="30" fill="#10b981"/>
                {/* Hard Hat */}
                <path d="M495 170 Q520 150 545 170" stroke="#fbbf24" strokeWidth="8" fill="none"/>
              </g>
              
              {/* Tools */}
              <g>
                {/* Wrench */}
                <path d="M480 420 L520 380" stroke="#64748b" strokeWidth="8" strokeLinecap="round"/>
                <circle cx="520" cy="380" r="15" fill="none" stroke="#64748b" strokeWidth="6"/>
                
                {/* Screwdriver */}
                <path d="M50 420 L90 460" stroke="#64748b" strokeWidth="6" strokeLinecap="round"/>
                <rect x="85" y="455" width="20" height="8" rx="2" fill="#f97316" transform="rotate(45 95 459)"/>
              </g>
              
              {/* Connection Lines - Animated */}
              <path d="M100 200 Q200 100 300 180" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.5">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite"/>
              </path>
              <path d="M500 250 Q400 150 350 200" stroke="#06b6d4" strokeWidth="2" strokeDasharray="5,5" opacity="0.5">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite"/>
              </path>
              
              {/* Data Points */}
              <circle cx="200" cy="120" r="8" fill="#3b82f6">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="400" cy="100" r="8" fill="#06b6d4">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin="0.5s"/>
              </circle>
              <circle cx="500" cy="150" r="8" fill="#10b981">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin="1s"/>
              </circle>
              
              {/* Gradients */}
              <defs>
                <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6"/>
                  <stop offset="100%" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Cards */}
          <motion.div
            className="hero-floating-card hero-floating-card-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="floating-card-icon blue">
              <Users size={24} />
            </div>
            <div className="floating-card-content">
              <h4>500+ Technicians</h4>
              <p>Placed this year</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-floating-card hero-floating-card-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="floating-card-icon green">
              <CheckCircle size={24} />
            </div>
            <div className="floating-card-content">
              <h4>Verified Skills</h4>
              <p>Pre-screened candidates</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-floating-card hero-floating-card-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="floating-card-icon orange">
              <Award size={24} />
            </div>
            <div className="floating-card-content">
              <h4>Top Rated</h4>
              <p>Industry recognition</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;