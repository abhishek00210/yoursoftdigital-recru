import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Shield, Zap, Users, ArrowRight } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Target size={24} />,
      title: 'Consultative Approach',
      description: 'We understand your unique needs',
    },
    {
      icon: <Shield size={24} />,
      title: 'Confidential Process',
      description: 'Discreet headhunting guaranteed',
    },
    {
      icon: <Zap size={24} />,
      title: 'Data-Driven',
      description: 'Matching powered by analytics',
    },
    {
      icon: <Users size={24} />,
      title: 'Proactive Sourcing',
      description: 'We find talent, not wait for it',
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-container" ref={ref}>
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="about-illustration">
              <svg viewBox="0 0 500 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background gradient circle */}
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1"/>
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                  <linearGradient id="personGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e40af"/>
                    <stop offset="100%" stopColor="#3b82f6"/>
                  </linearGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15"/>
                  </filter>
                </defs>
                
                {/* Main background circle */}
                <circle cx="250" cy="225" r="180" fill="url(#bgGradient)"/>
                
                {/* Connection lines */}
                <g opacity="0.6">
                  <path d="M250 225 L120 140" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
                  </path>
                  <path d="M250 225 L380 140" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
                  </path>
                  <path d="M250 225 L120 310" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
                  </path>
                  <path d="M250 225 L380 310" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
                  </path>
                  <path d="M250 225 L250 80" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
                  </path>
                </g>
                
                {/* Center hub - Main recruiter */}
                <g filter="url(#shadow)">
                  <circle cx="250" cy="225" r="55" fill="white"/>
                  <circle cx="250" cy="225" r="50" fill="url(#personGradient)"/>
                  {/* Person icon */}
                  <circle cx="250" cy="210" r="15" fill="white"/>
                  <path d="M225 250 Q225 230 250 230 Q275 230 275 250" fill="white"/>
                  {/* Briefcase detail */}
                  <rect x="238" y="252" width="24" height="16" rx="3" fill="#1e40af"/>
                  <rect x="244" y="248" width="12" height="6" rx="2" fill="#1e40af"/>
                </g>
                
                {/* Top candidate */}
                <g className="animate-float" filter="url(#shadow)">
                  <circle cx="250" cy="65" r="35" fill="white"/>
                  <circle cx="250" cy="55" r="12" fill="#10b981"/>
                  <path d="M232 78 Q232 65 250 65 Q268 65 268 78" fill="#10b981"/>
                  {/* Checkmark badge */}
                  <circle cx="275" cy="50" r="12" fill="#10b981"/>
                  <path d="M270 50 L273 53 L281 45" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </g>
                
                {/* Top-left candidate */}
                <g className="animate-float" style={{animationDelay: '0.3s'}} filter="url(#shadow)">
                  <circle cx="120" cy="130" r="32" fill="white"/>
                  <circle cx="120" cy="120" r="11" fill="#f97316"/>
                  <path d="M104 145 Q104 133 120 133 Q136 133 136 145" fill="#f97316"/>
                  {/* Star badge */}
                  <circle cx="142" cy="115" r="10" fill="#f97316"/>
                  <path d="M142 108 L143.5 113 L149 113 L144.5 116 L146 121 L142 118 L138 121 L139.5 116 L135 113 L140.5 113 Z" fill="white"/>
                </g>
                
                {/* Top-right candidate */}
                <g className="animate-float" style={{animationDelay: '0.6s'}} filter="url(#shadow)">
                  <circle cx="380" cy="130" r="32" fill="white"/>
                  <circle cx="380" cy="120" r="11" fill="#8b5cf6"/>
                  <path d="M364 145 Q364 133 380 133 Q396 133 396 145" fill="#8b5cf6"/>
                  {/* Document badge */}
                  <rect x="395" y="105" width="16" height="20" rx="2" fill="#8b5cf6"/>
                  <rect x="398" y="110" width="10" height="2" fill="white"/>
                  <rect x="398" y="114" width="8" height="2" fill="white"/>
                  <rect x="398" y="118" width="10" height="2" fill="white"/>
                </g>
                
                {/* Bottom-left candidate */}
                <g className="animate-float" style={{animationDelay: '0.9s'}} filter="url(#shadow)">
                  <circle cx="120" cy="320" r="32" fill="white"/>
                  <circle cx="120" cy="310" r="11" fill="#06b6d4"/>
                  <path d="M104 335 Q104 323 120 323 Q136 323 136 335" fill="#06b6d4"/>
                  {/* Gear badge */}
                  <circle cx="145" cy="305" r="12" fill="#06b6d4"/>
                  <circle cx="145" cy="305" r="5" fill="white"/>
                  <g fill="#06b6d4">
                    <rect x="143" y="295" width="4" height="4"/>
                    <rect x="143" y="311" width="4" height="4"/>
                    <rect x="135" y="303" width="4" height="4"/>
                    <rect x="151" y="303" width="4" height="4"/>
                  </g>
                </g>
                
                {/* Bottom-right candidate */}
                <g className="animate-float" style={{animationDelay: '1.2s'}} filter="url(#shadow)">
                  <circle cx="380" cy="320" r="32" fill="white"/>
                  <circle cx="380" cy="310" r="11" fill="#ec4899"/>
                  <path d="M364 335 Q364 323 380 323 Q396 323 396 335" fill="#ec4899"/>
                  {/* Award badge */}
                  <circle cx="405" cy="305" r="12" fill="#ec4899"/>
                  <circle cx="405" cy="302" r="6" fill="white"/>
                  <path d="M401 308 L405 315 L409 308" fill="white"/>
                </g>
                
                {/* Floating elements */}
                <g className="animate-float" style={{animationDelay: '0.5s'}}>
                  <circle cx="60" cy="200" r="8" fill="#3b82f6" opacity="0.6"/>
                </g>
                <g className="animate-float" style={{animationDelay: '0.8s'}}>
                  <circle cx="440" cy="220" r="6" fill="#06b6d4" opacity="0.6"/>
                </g>
                <g className="animate-float" style={{animationDelay: '1.1s'}}>
                  <rect x="420" cy="380" width="12" height="12" rx="3" fill="#f97316" opacity="0.5"/>
                </g>
                <g className="animate-float" style={{animationDelay: '0.2s'}}>
                  <rect x="50" cy="350" width="10" height="10" rx="2" fill="#10b981" opacity="0.5"/>
                </g>
                
                {/* Decorative dots pattern */}
                <g opacity="0.3">
                  {[...Array(5)].map((_, i) => (
                    <circle key={`dot-1-${i}`} cx={420 + i * 12} cy="60" r="3" fill="#94a3b8"/>
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <circle key={`dot-2-${i}`} cx={420 + i * 12} cy="75" r="3" fill="#94a3b8"/>
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <circle key={`dot-3-${i}`} cx={20 + i * 12} cy="400" r="3" fill="#94a3b8"/>
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <circle key={`dot-4-${i}`} cx={20 + i * 12} cy="415" r="3" fill="#94a3b8"/>
                  ))}
                </g>
                
                {/* Data flow particles */}
                <circle r="4" fill="#3b82f6">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M250,225 Q200,180 120,140"/>
                </circle>
                <circle r="4" fill="#06b6d4">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M250,225 Q300,180 380,140" begin="0.5s"/>
                </circle>
                <circle r="4" fill="#10b981">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M250,225 L250,80" begin="1s"/>
                </circle>
              </svg>
            </div>
<motion.div
  className="about-experience-badge"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={inView ? { opacity: 1, scale: 1 } : {}}
  transition={{ delay: 0.5, duration: 0.5 }}
>
  <h3>100%</h3>
  <p>Dedicated to Your Success</p>
</motion.div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-badge">
              About TalentConnectors
            </span>
            
            <h2>Your Trusted Partner for Technical Talent Acquisition</h2>
            
            <p>
              TalentConnectors is a specialist recruitment brand operated by Yoursoft Digital Inc. 
              We partner with ambitious companies across Canada and the USA to build high-impact 
              teams in technical, industrial, and leadership roles.
            </p>
            
            <p>
              Our approach is consultative, data-driven, and confidential. We don't post jobs 
              and wait — we proactively headhunt the best technicians, machine operators, and 
              skilled professionals in the market.
            </p>

            <div className="about-features">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="about-feature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="about-feature-icon">
                    {feature.icon}
                  </div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about-cta">
              <a href="#services" className="btn btn-primary">
                Our Services
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;