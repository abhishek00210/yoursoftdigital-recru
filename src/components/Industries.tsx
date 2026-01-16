

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cpu, 
  Wrench, 
  Zap, 
  Truck, 
  Building2, 
  Cog, 
  HardHat, 
  Factory 
} from 'lucide-react';

const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const industries = [
    {
      icon: <Factory size={40} />,
      title: 'Manufacturing',
      description: 'CNC operators, machinists, quality control',
    },
    {
      icon: <Zap size={40} />,
      title: 'Electrical',
      description: 'Electricians, control technicians, PLCs',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Mechanical',
      description: 'Maintenance techs, millwrights, mechanics',
    },
    {
      icon: <Cog size={40} />,
      title: 'Industrial Equipment',
      description: 'Equipment operators, field service techs',
    },
    {
      icon: <HardHat size={40} />,
      title: 'Construction',
      description: 'Heavy equipment, skilled trades, supervisors',
    },
    {
      icon: <Truck size={40} />,
      title: 'Logistics',
      description: 'Warehouse techs, fleet mechanics, drivers',
    },
    {
      icon: <Cpu size={40} />,
      title: 'Automation',
      description: 'Robotics techs, automation engineers',
    },
    {
      icon: <Building2 size={40} />,
      title: 'Facilities',
      description: 'HVAC technicians, building maintenance',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="industries section">
      <div className="industries-bg"></div>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-badge">
            <Cog size={16} />
            Industries We Serve
          </span>
          <h2 className="section-title">Specialized in Technical & Industrial Sectors</h2>
          <p className="section-subtitle">
            We have deep expertise in recruiting for technical roles across diverse 
            industrial sectors in Canada and the United States.
          </p>
        </motion.div>

        <motion.div
          className="industries-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="industry-icon">
                {industry.icon}
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;