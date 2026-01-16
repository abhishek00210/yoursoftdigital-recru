import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Play, Zap, Target, Shield, Cpu, GitBranch, Server } from 'lucide-react';
// import "../styles/Hero.css"
const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
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
        {/* Dark overlay for better text visibility */}
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* HIGHLIGHTED PROUDLY CANADIAN BADGE */}
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="hero-badge-maple">🍁</span>
            <span className="hero-badge-text">Proudly Canadian</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Expert Recruitment for 
            <span className="hero-title-highlight"> Technical & Industrial </span> 
            Talent
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            TalentConnectors is your strategic partner for hiring exceptional engineers, 
            scientists, developers, and technical professionals. We leverage data-driven 
            headhunting to find the perfect match — fast.
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

          {/* REDESIGNED STATS - BIGGER NUMBERS */}
          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Zap size={24} />
              </div>
              <div className="hero-stat-content">
                <div className="hero-stat-number">48<span className="hero-stat-unit">hrs</span></div>
                <div className="hero-stat-label">Avg. First Match</div>
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Target size={24} />
              </div>
              <div className="hero-stat-content">
                <div className="hero-stat-number">6<span className="hero-stat-unit">+</span></div>
                <div className="hero-stat-label">STEM Disciplines</div>
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Shield size={24} />
              </div>
              <div className="hero-stat-content">
                <div className="hero-stat-number">100<span className="hero-stat-unit">%</span></div>
                <div className="hero-stat-label">Vetted Candidates</div>
              </div>
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
            {/* Your SVG Illustration */}
            <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6"/>
                  <stop offset="100%" stopColor="#06b6d4"/>
                </linearGradient>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6"/>
                  <stop offset="100%" stopColor="#3b82f6"/>
                </linearGradient>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316"/>
                  <stop offset="100%" stopColor="#eab308"/>
                </linearGradient>
                <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>

              {/* Background Grid */}
              <rect width="600" height="500" fill="url(#gridPattern)"/>
              
              {/* Main Blueprint Area */}
              <g transform="translate(50, 60)">
                {/* Blueprint Border */}
                <rect x="0" y="0" width="500" height="380" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" rx="8" opacity="0.9"/>
                
                {/* Title Block */}
                <rect x="350" y="320" width="140" height="50" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" rx="4"/>
                <text x="420" y="345" textAnchor="middle" fill="#3b82f6" fontSize="11" fontFamily="monospace" fontWeight="600">
                  TALENTCONNECTORS
                </text>
                <text x="420" y="360" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                  ENGINEERING SPEC v1.0
                </text>

                {/* Central Talent Engine */}
                <g>
                  <rect x="200" y="140" width="100" height="80" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" rx="6"/>
                  <circle cx="250" cy="180" r="25" fill="#0f172a" stroke="#3b82f6" strokeWidth="2"/>
                  <rect x="238" y="168" width="24" height="24" fill="#3b82f6" opacity="0.8" rx="4">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                  </rect>
                  <text x="250" y="240" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">
                    TALENT ENGINE
                  </text>
                </g>

                {/* Database Node */}
                <g transform="translate(80, 100)">
                  <ellipse cx="0" cy="0" rx="45" ry="22" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2"/>
                  <ellipse cx="0" cy="-12" rx="35" ry="17" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2"/>
                  <ellipse cx="0" cy="-24" rx="25" ry="12" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2"/>
                  <path d="M-12 8 L-12 -20" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" repeatCount="indefinite"/>
                  </path>
                  <path d="M12 8 L12 -20" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite"/>
                  </path>
                  <text x="0" y="50" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">
                    TALENT DB
                  </text>
                </g>

                {/* AI Matching Node */}
                <g transform="translate(420, 100)">
                  <polygon points="-40,0 0,-40 40,0 0,40" fill="#1e293b" stroke="#10b981" strokeWidth="2"/>
                  <circle cx="-15" cy="0" r="8" fill="#10b981" opacity="0.8">
                    <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="15" cy="0" r="8" fill="#10b981" opacity="0.8">
                    <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                  </circle>
                  <circle cx="0" cy="15" r="8" fill="#10b981" opacity="0.8">
                    <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin="1s"/>
                  </circle>
                  <text x="0" y="65" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">
                    AI MATCHING
                  </text>
                </g>

                {/* Connection Lines */}
                <g>
                  <path d="M200 180 Q140 180 125 140" stroke="url(#blueGradient)" strokeWidth="2" fill="none" opacity="0.8">
                    <animate attributeName="stroke-dasharray" values="0,200;100,200" dur="2s" fill="freeze"/>
                  </path>
                  <path d="M300 180 Q360 180 375 140" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.8">
                    <animate attributeName="stroke-dasharray" values="0,200;100,200" dur="2s" begin="0.3s" fill="freeze"/>
                  </path>
                  <path d="M125 180 Q80 240 60 290" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.8">
                    <animate attributeName="stroke-dasharray" values="0,200;100,200" dur="2s" begin="0.6s" fill="freeze"/>
                  </path>
                  <path d="M375 180 Q420 240 440 290" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.8">
                    <animate attributeName="stroke-dasharray" values="0,200;100,200" dur="2s" begin="0.9s" fill="freeze"/>
                  </path>
                  
                  {/* Data particles */}
                  <circle r="4" fill="#3b82f6">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M200 180 Q140 180 125 140"/>
                  </circle>
                  <circle r="4" fill="#10b981">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M300 180 Q360 180 375 140"/>
                  </circle>
                </g>

                {/* Output Panels */}
                <g>
                  {/* Engineer */}
                  <g transform="translate(60, 290)">
                    <rect x="-30" y="-18" width="60" height="36" fill="#1e293b" stroke="#f97316" strokeWidth="2" rx="6"/>
                    <circle cx="-12" cy="0" r="8" fill="#f97316"/>
                    <circle cx="12" cy="0" r="8" fill="#f97316"/>
                    <text x="0" y="-28" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="600">
                      ENGINEER
                    </text>
                  </g>

                  {/* Developer */}
                  <g transform="translate(440, 290)">
                    <rect x="-30" y="-18" width="60" height="36" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" rx="6"/>
                    <circle cx="-12" cy="0" r="8" fill="#06b6d4"/>
                    <circle cx="12" cy="0" r="8" fill="#06b6d4"/>
                    <text x="0" y="-28" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">
                      DEVELOPER
                    </text>
                  </g>
                </g>

                {/* Decorative Elements */}
                <text x="20" y="30" fill="#64748b" fontSize="10" fontFamily="monospace">
                  1101 0010 1010 0111
                </text>
                
                {/* Gear */}
                <g transform="translate(100, 320)" opacity="0.5">
                  <circle cx="0" cy="0" r="12" fill="none" stroke="#64748b" strokeWidth="2"/>
                  <circle cx="0" cy="0" r="4" fill="#64748b"/>
                </g>
              </g>
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
              <Cpu size={24} />
            </div>
            <div className="floating-card-content">
              <h4>Smart Matching</h4>
              <p>AI-powered precision</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-floating-card hero-floating-card-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="floating-card-icon green">
              <GitBranch size={24} />
            </div>
            <div className="floating-card-content">
              <h4>Integrated Pipeline</h4>
              <p>End-to-end tracking</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-floating-card hero-floating-card-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="floating-card-icon orange">
              <Server size={24} />
            </div>
            <div className="floating-card-content">
              <h4>Enterprise Grade</h4>
              <p>Scalable solutions</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;