
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle, 
  XCircle, 
  Shield, 
 
  Search,
  UserCheck,
  Calendar
} from 'lucide-react';

const Compliance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const positiveItems = [
    'We do NOT charge candidates',
    'Recruit for permanent roles only',
    'Candidates paid directly by clients',
    'Recruit for Canada and USA',
  ];

  const negativeItems = [
    'We do NOT manage payroll',
    'We do NOT sponsor visas',
    'No immigration services',
    'No temporary foreign workers',
  ];

  const services = [
    { icon: <Search size={18} />, label: 'Talent Sourcing' },
    { icon: <UserCheck size={18} />, label: 'Screening' },
    { icon: <Calendar size={18} />, label: 'Interview Coordination' },
  ];

  return (
    <section className="compliance section">
      <div className="container">
        <div className="compliance-container" ref={ref}>
          <motion.div
            className="compliance-content"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-badge">
              <Shield size={16} />
              Compliance Statement
            </span>
            
            <h2>Yoursoft Digital Inc. - Recruitment Compliance</h2>
            
            <p>
              Yoursoft Digital Inc. operates as a recruitment consulting and headhunting 
              firm supporting hiring in Canada and the United States. We are committed 
              to transparent and ethical recruitment practices.
            </p>

            <div className="compliance-grid">
              {positiveItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="compliance-item positive"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="compliance-icon">
                    <CheckCircle size={20} />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
              
              {negativeItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="compliance-item negative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="compliance-icon">
                    <XCircle size={20} />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="compliance-services"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h4>Our Services Are Limited To:</h4>
              <ul className="compliance-services-list">
                                {services.map((service, index) => (
                  <li key={index}>
                    <CheckCircle size={16} />
                    {service.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="compliance-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="compliance-illustration">
              <svg viewBox="0 0 500 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect x="50" y="30" width="400" height="390" rx="20" fill="#f1f5f9"/>
                
                {/* Shield - Main Element */}
                <g className="animate-float-slow">
                  <path 
                    d="M250 80 L350 120 L350 220 C350 280 310 340 250 370 C190 340 150 280 150 220 L150 120 L250 80Z" 
                    fill="url(#shieldGradient)" 
                    stroke="#1e293b" 
                    strokeWidth="4"
                  />
                  <path 
                    d="M250 100 L330 135 L330 215 C330 265 295 315 250 340 C205 315 170 265 170 215 L170 135 L250 100Z" 
                    fill="white" 
                    opacity="0.3"
                  />
                  
                  {/* Checkmark inside shield */}
                  <path 
                    d="M210 210 L240 240 L300 180" 
                    stroke="#10b981" 
                    strokeWidth="12" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                  >
                    <animate 
                      attributeName="stroke-dasharray" 
                      from="0,200" 
                      to="200,0" 
                      dur="1.5s" 
                      fill="freeze"
                    />
                  </path>
                </g>
                
                {/* Document 1 - Left */}
                <g className="animate-float" style={{animationDelay: '0s'}}>
                  <rect x="30" y="180" width="90" height="120" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
                  <rect x="45" y="200" width="60" height="6" rx="3" fill="#e2e8f0"/>
                  <rect x="45" y="215" width="45" height="6" rx="3" fill="#e2e8f0"/>
                  <rect x="45" y="230" width="55" height="6" rx="3" fill="#e2e8f0"/>
                  <rect x="45" y="255" width="30" height="30" rx="4" fill="#3b82f6" opacity="0.2"/>
                  <path d="M55 270 L62 277 L75 262" stroke="#3b82f6" strokeWidth="3" fill="none"/>
                </g>
                
                {/* Document 2 - Right */}
                <g className="animate-float" style={{animationDelay: '0.5s'}}>
                  <rect x="380" y="150" width="90" height="120" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
                  <rect x="395" y="170" width="60" height="6" rx="3" fill="#e2e8f0"/>
                  <rect x="395" y="185" width="45" height="6" rx="3" fill="#e2e8f0"/>
                  <rect x="395" y="200" width="55" height="6" rx="3" fill="#e2e8f0"/>
                  <rect x="395" y="225" width="30" height="30" rx="4" fill="#10b981" opacity="0.2"/>
                  <path d="M405 240 L412 247 L425 232" stroke="#10b981" strokeWidth="3" fill="none"/>
                </g>
                
                {/* Canada Flag Icon */}
                <g className="animate-float" style={{animationDelay: '1s'}}>
                  <rect x="80" y="340" width="60" height="40" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
                  <rect x="80" y="340" width="15" height="40" fill="#ef4444"/>
                  <rect x="125" y="340" width="15" height="40" fill="#ef4444"/>
                  <path d="M110 350 L115 360 L120 350 L115 365 L110 350" fill="#ef4444"/>
                </g>
                
                {/* USA Flag Icon */}
                <g className="animate-float" style={{animationDelay: '1.5s'}}>
                  <rect x="360" y="310" width="60" height="40" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
                  <rect x="360" y="310" width="25" height="22" fill="#1e3a5f"/>
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <rect key={i} x="360" y={310 + i * 5.7} width="60" height="3" fill={i % 2 === 0 ? '#ef4444' : 'white'}/>
                  ))}
                  <rect x="360" y="310" width="25" height="22" fill="#1e3a5f"/>
                </g>
                
                {/* Connecting Lines */}
                <path d="M120 240 Q180 200 200 220" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
                </path>
                <path d="M380 210 Q320 180 300 200" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
                </path>
                
                {/* Floating Checkmarks */}
                <g>
                  <circle cx="420" cy="90" r="20" fill="#10b981" opacity="0.2"/>
                  <path d="M410 90 L417 97 L430 83" stroke="#10b981" strokeWidth="3" fill="none"/>
                </g>
                <g>
                  <circle cx="80" cy="120" r="18" fill="#3b82f6" opacity="0.2"/>
                  <path d="M71 120 L77 126 L89 113" stroke="#3b82f6" strokeWidth="3" fill="none"/>
                </g>
                
                {/* Lock Icon */}
                <g>
                  <rect x="230" y="390" width="40" height="35" rx="5" fill="#f97316"/>
                  <rect x="240" y="375" width="20" height="20" rx="10" fill="none" stroke="#f97316" strokeWidth="4"/>
                  <circle cx="250" cy="405" r="5" fill="white"/>
                </g>
                
                <defs>
                  <linearGradient id="shieldGradient" x1="150" y1="80" x2="350" y2="370">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;