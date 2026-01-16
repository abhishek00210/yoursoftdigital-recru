import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../styles/Specializations.css"
import { 
  Wrench, 
  TrendingUp, 
  Users, 
  Building2, 
  CheckCircle, 
  ArrowRight,
  Briefcase,
  Target,
  Shield
} from 'lucide-react';

const Specializations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specializations = [
    {
      id: 1,
      icon: <Wrench size={32} />,
      title: 'Field Service Technician Recruitment',
      subtitle: 'Machinery & OEMs',
      description: 'We recruit field service technicians who support defined service territories, regional customers, and national OEM service programs. Candidates are assessed for technical depth, travel readiness, and customer-facing professionalism.',
      roles: [
        'Field Service Technicians',
        'CNC & Automation Technicians',
        'Installation & Commissioning Technicians',
        'Service Supervisors',
        'Service Managers',
      ],
      highlight: 'Industry-Aligned Screening',
      highlightText: 'Our screening process evaluates machinery expertise, diagnostic capability, safety compliance, and the ability to operate independently in the field.',
      color: 'blue',
    },
    {
      id: 2,
      icon: <TrendingUp size={32} />,
      title: 'Machinery Sales Recruitment',
      subtitle: 'OEM & Distributor Recruiters',
      description: 'We recruit experienced machinery sales professionals for OEMs and distributors operating across defined sales territories in Canada and the United States. Our focus is on candidates with proven success selling capital equipment.',
      roles: [
        'Machinery Sales Representatives',
        'Technical Sales Engineers',
        'Regional Sales Managers',
        'Territory Managers',
        'Business Development Managers',
        'Sales Directors',
      ],
      highlight: 'Retained-Search Approach',
      highlightText: 'Our retained-search methodology ensures confidential, targeted recruitment aligned with your product portfolio, territory structure, and go-to-market strategy.',
      color: 'cyan',
    },
    {
      id: 3,
      icon: <Users size={32} />,
      title: 'OEM & Distributor Leadership',
      subtitle: 'Executive Search',
      description: 'We support OEMs and distributors with confidential leadership recruitment aligned with service operations, territory management, and long-term growth strategies.',
      roles: [
        'Service Managers',
        'Sales Managers',
        'Regional Directors',
        'Parts & Service Leaders',
        'Application Engineers',
        'General Managers',
      ],
      highlight: 'Executive Search Methodology',
      highlightText: 'Our executive search process emphasizes strategic alignment, operational understanding, and cultural fit within machinery-driven organizations.',
      color: 'orange',
    },
    {
      id: 4,
      icon: <Building2 size={32} />,
      title: 'Full-Cycle Machinery Recruitment',
      subtitle: 'North America Coverage',
      description: 'We are a retained-search and specialist recruitment firm serving industrial machinery manufacturers, OEMs, and distributor organizations across North America with deep familiarity with capital equipment sales models.',
      roles: [
        'Territory-Based Sales',
        'Multi-Region Service Coverage',
        'Dealer & Distributor Networks',
        'After-Sales Service Operations',
      ],
      highlight: 'OEM & Distributor-Aligned',
      highlightText: 'Our recruitment approach reflects how machinery businesses operate — we recruit professionals who can operate independently while representing your brand in the field.',
      color: 'green',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="specializations section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-badge">
            <Target size={16} />
            Our Specializations
          </span>
          <h2 className="section-title">Recruitment Expertise for Machinery Industries</h2>
          <p className="section-subtitle">
            We bring deep familiarity with capital equipment sales models, regional service 
            territories, and after-sales service operations across North America.
          </p>
        </motion.div>

        <motion.div
          className="specialization-cards"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {specializations.map((spec) => (
            <motion.div
              key={spec.id}
              className={`specialization-card specialization-card--${spec.color}`}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="specialization-header">
                <div className={`specialization-icon specialization-icon--${spec.color}`}>
                  {spec.icon}
                </div>
                <div className="specialization-title-group">
                  <h3 className="specialization-title">{spec.title}</h3>
                  <span className={`specialization-subtitle specialization-subtitle--${spec.color}`}>
                    {spec.subtitle}
                  </span>
                </div>
              </div>

              <p className="specialization-description">{spec.description}</p>

              <div className="specialization-roles">
                <h4 className="specialization-roles-title">
                  <Briefcase size={16} />
                  Roles We Recruit
                </h4>
                <div className="specialization-roles-list">
                  {spec.roles.map((role, index) => (
                    <span key={index} className="specialization-role">
                      <CheckCircle size={14} className="specialization-role-icon" />
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`specialization-highlight specialization-highlight--${spec.color}`}>
                <h4 className="specialization-highlight-title">
                  <Shield size={16} />
                  {spec.highlight}
                </h4>
                <p className="specialization-highlight-text">{spec.highlightText}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="specialization-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="#contact" className="btn btn-primary btn-lg">
            Discuss Your Hiring Needs
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Specializations;