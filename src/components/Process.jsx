import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquare, 
  Search, 
  UserCheck, 
  Calendar, 
  Handshake,
  ArrowRight 
} from 'lucide-react';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We learn about your company culture, technical requirements, and ideal candidate profile to ensure perfect alignment.',
      icon: <MessageSquare size={40} />,
    },
    {
      number: 2,
      title: 'Talent Search',
      description: 'Our team proactively headhunts qualified technicians and operators through our extensive network and databases.',
      icon: <Search size={40} />,
    },
    {
      number: 3,
      title: 'Screening & Vetting',
      description: 'Rigorous assessment of technical skills, experience verification, and cultural fit evaluation for each candidate.',
      icon: <UserCheck size={40} />,
    },
    {
      number: 4,
      title: 'Interview Coordination',
      description: 'We manage all scheduling, prepare candidates, and facilitate smooth communication throughout the process.',
      icon: <Calendar size={40} />,
    },
    {
      number: 5,
      title: 'Successful Placement',
      description: 'Final negotiations, offer management, and onboarding support to ensure a seamless transition for your new hire.',
      icon: <Handshake size={40} />,
    },
  ];

  return (
    <section className="process section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-badge">
            <ArrowRight size={16} />
            Our Process
          </span>
          <h2 className="section-title">How We Connect You With Top Talent</h2>
          <p className="section-subtitle">
            Our streamlined recruitment process ensures efficient, effective, and 
            confidential hiring for your technical positions.
          </p>
        </motion.div>

        <div className="process-timeline">
          <div className="process-line">
            <motion.div
              className="process-line-fill"
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>

          <div className="process-steps">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="process-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                
                <motion.div
                  className="process-step-number"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                >
                  {step.number}
                </motion.div>
                
                <div className="process-step-visual">
                  <div className="process-icon-box">
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;