
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  ArrowRight,
  
} from 'lucide-react';
import { jobsData } from '../data/jobsData';
import "../styles/JobsPage.css"

const Jobs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Positions' },
    { id: 'technician', label: 'Technicians' },
    { id: 'operator', label: 'Operators' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'electrical', label: 'Electrical' },
  ];

  // Get featured jobs for homepage
  const featuredJobs = jobsData
    .filter(job => activeFilter === 'all' || job.category === activeFilter)
    .slice(0, 6);

 type SalaryRange = {
  min: number;
  max: number;
};

const formatSalary = (salary: SalaryRange) => {
  return `$${(salary.min / 1000).toFixed(0)}K - $${(salary.max / 1000).toFixed(0)}K`;
};


  return (
    <section id="jobs" className="jobs section">
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
            Open Positions
          </span>
          <h2 className="section-title">Featured Opportunities</h2>
          <p className="section-subtitle">
            Explore our latest technical and industrial job openings across 
            Canada and the United States. New positions added daily.
          </p>
        </motion.div>

        <motion.div
          className="jobs-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div className="jobs-grid" layout>
          <AnimatePresence>
            {featuredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="job-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="job-header">
                  <div className="job-company">
                    <div className="job-company-logo">
                      {job.company.charAt(0)}
                    </div>
                    <div className="job-company-info">
                      <h4>{job.company}</h4>
                      <p>{job.type}</p>
                    </div>
                  </div>
                  <span className={`job-badge ${job.urgent ? 'urgent' : ''}`}>
                    {job.urgent ? 'Urgent' : job.featured ? 'Featured' : 'New'}
                  </span>
                </div>

                <h3 className="job-title">{job.title}</h3>

                <div className="job-tags">
                  <span className="job-tag">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                  <span className="job-tag">
                    <Clock size={14} />
                    {job.shift}
                  </span>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-footer">
                  <div className="job-salary">
                    {formatSalary(job.salary)} <span>/year</span>
                  </div>
                  <Link to={`/jobs/${job.id}`} className="btn btn-primary">
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="jobs-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p>Looking for more opportunities? Browse all our open positions.</p>
          <Link to="/jobs" className="btn btn-secondary btn-large">
            View All Jobs
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Jobs;