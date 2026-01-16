

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  UserCheck, 
  Calendar, 
  Briefcase, 
  Target, 
  Shield,
  CheckCircle 
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Search size={32} />,
      title: 'Talent Sourcing',
      description: 'We proactively identify and engage top technical talent through our extensive network and advanced sourcing techniques.',
      features: ['Direct headhunting', 'Passive candidate outreach', 'Industry networking'],
      color: 'blue',
    },
    {
      icon: <UserCheck size={32} />,
      title: 'Candidate Screening',
      description: 'Rigorous vetting process ensures only qualified candidates with verified skills and experience reach your desk.',
      features: ['Skills assessment', 'Background verification', 'Reference checks'],
      color: 'cyan',
    },
    {
      icon: <Calendar size={32} />,
      title: 'Interview Coordination',
      description: 'We handle all scheduling logistics, ensuring a smooth interview process for both clients and candidates.',
      features: ['Schedule management', 'Candidate preparation', 'Feedback collection'],
      color: 'green',
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Permanent Placements',
      description: 'We specialize in permanent role placements, finding candidates who will grow with your organization.',
      features: ['Full-time positions', 'Executive search', 'Team building'],
      color: 'orange',
    },
    {
      icon: <Target size={32} />,
      title: 'Industry Specialization',
      description: 'Deep expertise in technical and industrial sectors ensures we understand your specific hiring needs.',
      features: ['Manufacturing', 'Industrial equipment', 'Technical services'],
      color: 'purple',
    },
    {
      icon: <Shield size={32} />,
      title: 'Confidential Search',
      description: 'Discreet recruitment for sensitive positions where confidentiality is paramount.',
      features: ['Executive positions', 'Competitive hiring', 'Private searches'],
      color: 'blue',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-badge">
            <Briefcase size={16} />
            Our Services
          </span>
          <h2 className="section-title">Comprehensive Recruitment Solutions</h2>
          <p className="section-subtitle">
            From talent sourcing to final placement, we provide end-to-end recruitment 
            services tailored for technical and industrial professionals.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
            >
              <div className={`service-icon ${service.color}`}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircle size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;