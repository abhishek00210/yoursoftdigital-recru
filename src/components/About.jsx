import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Shield, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';

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
                {/* Background Elements */}
                <rect x="50" y="50" width="400" height="350" rx="20" fill="#f1f5f9"/>
                
                {/* Office/Workspace */}
                <g>
                  {/* Desk */}
                  <rect x="100" y="280" width="300" height="20" rx="5" fill="#1e293b"/>
                  <rect x="120" y="300" width="20" height="80" fill="#1e293b"/>
                  <rect x="360" y="300" width="20" height="80" fill="#1e293b"/>
                  
                  {/* Computer Monitor */}
                  <rect x="180" y="180" width="140" height="100" rx="8" fill="#1e293b"/>
                  <rect x="190" y="190" width="120" height="75" rx="4" fill="#3b82f6"/>
                  
                  {/* Screen Content - Chart */}
                  <path d="M200 250 L220 230 L250 245 L280 210 L300 225" stroke="white" strokeWidth="3" fill="none"/>
                  <circle cx="220" cy="230" r="4" fill="#10b981"/>
                  <circle cx="250" cy="245" r="4" fill="#10b981"/>
                  <circle cx="280" cy="210" r="4" fill="#10b981"/>
                  
                  {/* Monitor Stand */}
                  <rect x="235" y="280" width="30" height="10" fill="#64748b"/>
                  <rect x="225" y="275" width="50" height="8" rx="2" fill="#64748b"/>
                  
                  {/* Keyboard */}
                  <rect x="200" y="300" width="100" height="25" rx="5" fill="#e2e8f0"/>
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <rect key={i} x={210 + i * 10} y="308" width="6" height="10" rx="1" fill="#94a3b8"/>
                  ))}
                  
                  {/* Mouse */}
                  <ellipse cx="330" cy="315" rx="15" ry="12" fill="#e2e8f0"/>
                </g>
                
                {/* Person at Desk */}
                <g className="animate-float-slow">
                  <circle cx="250" cy="130" r="35" fill="#f97316"/>
                  <ellipse cx="250" cy="200" rx="40" ry="50" fill="#f97316"/>
                  {/* Face */}
                  <circle cx="238" cy="125" r="4" fill="white"/>
                  <circle cx="262" cy="125" r="4" fill="white"/>
                  <path d="M240 140 Q250 150 260 140" stroke="white" strokeWidth="3" fill="none"/>
                  {/* Arms */}
                  <path d="M210 180 Q180 220 200 280" stroke="#f97316" strokeWidth="20" fill="none" strokeLinecap="round"/>
                  <path d="M290 180 Q320 220 300 280" stroke="#f97316" strokeWidth="20" fill="none" strokeLinecap="round"/>
                </g>
                
                {/* Floating Resume/Document */}
                <g className="animate-float" style={{animationDelay: '0.5s'}}>
                  <rect x="380" y="100" width="80" height="100" rx="5" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
                  <circle cx="420" cy="125" r="15" fill="#06b6d4"/>
                  <rect x="395" y="150" width="50" height="5" rx="2" fill="#e2e8f0"/>
                  <rect x="395" y="162" width="40" height="5" rx="2" fill="#e2e8f0"/>
                  <rect x="395" y="174" width="45" height="5" rx="2" fill="#e2e8f0"/>
                  <circle cx="450" cy="100" r="12" fill="#10b981"/>
                  <path d="M445 100 L448 103 L456 95" stroke="white" strokeWidth="2" fill="none"/>
                </g>
                
                {/* Floating Resume 2 */}
                <g className="animate-float" style={{animationDelay: '1s'}}>
                  <rect x="40" y="150" width="70" height="90" rx="5" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
                  <circle cx="75" cy="172" r="12" fill="#3b82f6"/>
                  <rect x="52" y="192" width="45" height="4" rx="2" fill="#e2e8f0"/>
                  <rect x="52" y="202" width="35" height="4" rx="2" fill="#e2e8f0"/>
                  <rect x="52" y="212" width="40" height="4" rx="2" fill="#e2e8f0"/>
                </g>
                
                {/* Connection Lines */}
                <path d="M110 195 Q150 150 180 180" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
                </path>
                <path d="M380 150 Q350 130 320 160" stroke="#06b6d4" strokeWidth="2" strokeDasharray="5,5" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
                </path>
                
                {/* Decorative Elements */}
                <circle cx="70" cy="80" r="20" fill="#3b82f6" opacity="0.2"/>
                <circle cx="430" cy="350" r="30" fill="#06b6d4" opacity="0.2"/>
                <rect x="350" y="60" width="40" height="40" rx="8" fill="#f97316" opacity="0.2"/>
              </svg>
            </div>

            <motion.div
              className="about-experience-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3>15+</h3>
              <p>Years of Excellence</p>
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