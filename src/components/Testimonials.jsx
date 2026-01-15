import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      text: "TalentConnectors found us three highly skilled CNC operators within two weeks. Their understanding of technical requirements and pre-screening process saved us countless hours. Highly recommended for manufacturing recruitment.",
      author: "Michael Thompson",
      role: "Operations Director",
      company: "Precision Manufacturing Co.",
      avatar: "MT",
      rating: 5,
    },
    {
      id: 2,
      text: "We've partnered with TalentConnectors for over 3 years now. They consistently deliver qualified maintenance technicians who fit our company culture. Their confidential approach is perfect for our competitive market.",
      author: "Sarah Chen",
      role: "HR Manager",
      company: "Industrial Solutions Ltd.",
      avatar: "SC",
      rating: 5,
    },
    {
      id: 3,
      text: "The team understood exactly what we needed for our automation projects. They found us PLC technicians with the specific Allen Bradley experience we required. Professional service from start to finish.",
      author: "David Rodriguez",
      role: "Plant Manager",
      company: "AutoTech Industries",
      avatar: "DR",
      rating: 5,
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
    <section className="testimonials section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-badge">
            <Quote size={16} />
            Testimonials
          </span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what hiring managers and HR 
            professionals say about working with TalentConnectors.
          </p>
        </motion.div>

        <motion.div
          className="testimonial-cards"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;