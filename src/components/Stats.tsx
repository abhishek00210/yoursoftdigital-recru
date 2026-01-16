import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Briefcase, Building2, Award } from 'lucide-react';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <Users size={28} />,
      number: 2500,
      suffix: '+',
      label: 'Technicians Placed',
    },
    {
      icon: <Building2 size={28} />,
      number: 500,
      suffix: '+',
      label: 'Partner Companies',
    },
    {
      icon: <Briefcase size={28} />,
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction',
    },
    {
      icon: <Award size={28} />,
      number: 15,
      suffix: '+',
      label: 'Years Experience',
    },
  ];

  const Counter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = target;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [inView, target]);

    return (
      <span>
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section className="stats" ref={ref}>
      <div className="stats-bg-pattern"></div>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                <Counter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;