import  { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Building2,
  Clock,
  DollarSign,
  Calendar,
  Briefcase,
  CheckCircle,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  ChevronRight,
  Upload,
  X,
  FileText,
  Send,
  Star,
  AlertCircle,
  Bookmark,
  ExternalLink,
  ArrowLeft,
  Award,
  Users,
  Zap,
} from 'lucide-react';
import { jobsData } from '../data/jobsData';

const JobDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: '',
    consent: false,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const foundJob = jobsData.find(j => j.id === parseInt(id));
      setJob(foundJob);
      setIsLoading(false);
    }, 300);
  }, [id]);

  const similarJobs = job
    ? jobsData
        .filter(j => j.id !== job.id && (j.category === job.category || j.industry === job.industry))
        .slice(0, 3)
    : [];

  const formatSalary = (salary) => 
    `$${salary.min.toLocaleString()} - $${salary.max.toLocaleString()} ${salary.currency}`;

  const formatDate = (dateString) => 
    new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      setUploadedFile(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uploadedFile) {
      alert('Please upload your resume');
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        coverLetter: '',
        consent: false,
      });
      setUploadedFile(null);
    }, 3000);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = `${job.title} at ${job.company}`;
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this job: ${url}`)}`,
    };
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  if (isLoading) {
    return (
      <div className="job-detail-loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="job-not-found">
        <div className="not-found-content">
          <AlertCircle size={80} strokeWidth={1} />
          <h2>Job Not Found</h2>
          <p>The job you're looking for doesn't exist or has been removed.</p>
          <Link to="/jobs" className="btn btn-primary">
            <ArrowLeft size={20} />
            Browse All Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="job-detail-page">
      {/* Sticky Header */}
      <div className="job-detail-sticky-header">
        <div className="sticky-header-content">
          <div className="sticky-header-info">
            <h3>{job.title}</h3>
            <span>{job.company} • {job.location}</span>
          </div>
          <div className="sticky-header-actions">
            <span className="sticky-salary">{formatSalary(job.salary)}</span>
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="job-detail-hero">
        <div className="job-detail-hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="job-detail-hero-content">
          {/* Breadcrumb */}
          <nav className="job-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={16} />
            <Link to="/jobs">Jobs</Link>
            <ChevronRight size={16} />
            <span>{job.title}</span>
          </nav>
          
          {/* Job Header */}
          <div className="job-header-card">
            <div className="job-header-main">
              <div className="job-logo-large">
                {job.company.charAt(0)}
              </div>
              
              <div className="job-header-info">
                <div className="job-badges-row">
                  {job.featured && (
                    <span className="badge badge-featured">
                      <Star size={14} />
                      Featured
                    </span>
                  )}
                  {job.urgent && (
                    <span className="badge badge-urgent">
                      <Zap size={14} />
                      Urgent Hiring
                    </span>
                  )}
                  <span className="badge badge-type">{job.type}</span>
                </div>
                
                <h1 className="job-title-large">{job.title}</h1>
                
                <div className="job-company-row">
                  <span className="company-name">
                    <Building2 size={18} />
                    {job.company}
                  </span>
                  <span className="job-location">
                    <MapPin size={18} />
                    {job.location}, {job.country}
                  </span>
                </div>
                
                <div className="job-quick-info">
                  <div className="quick-info-item">
                    <DollarSign size={18} />
                    <div>
                      <span className="info-label">Salary</span>
                      <span className="info-value">{formatSalary(job.salary)}</span>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <Clock size={18} />
                    <div>
                      <span className="info-label">Experience</span>
                      <span className="info-value">{job.experience}</span>
                    </div>
                  </div>
                  <div className="quick-info-item">
                    <Calendar size={18} />
                    <div>
                      <span className="info-label">Posted</span>
                      <span className="info-value">{formatDate(job.postedDate)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="job-header-actions">
              <button 
                className="btn btn-primary btn-large"
                onClick={() => setIsModalOpen(true)}
              >
                Apply for this Position
                <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
              </button>
              <div className="secondary-actions">
                <button 
                  className={`btn-icon ${isSaved ? 'saved' : ''}`}
                  onClick={() => setIsSaved(!isSaved)}
                >
                  <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
                </button>
                <button className="btn-icon" onClick={() => handleShare('linkedin')}>
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="job-detail-content">
        <div className="job-detail-container">
          {/* Main Column */}
          <div className="job-detail-main">
            {/* Tabs */}
            <div className="job-tabs">
              <button 
                className={`job-tab ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`job-tab ${activeTab === 'requirements' ? 'active' : ''}`}
                onClick={() => setActiveTab('requirements')}
              >
                Requirements
              </button>
              <button 
                className={`job-tab ${activeTab === 'benefits' ? 'active' : ''}`}
                onClick={() => setActiveTab('benefits')}
              >
                Benefits
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="job-tab-content">
              <AnimatePresence mode="wait">
                {activeTab === 'description' && (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="tab-panel"
                  >
                    <div 
                      className="job-description-content"
                      dangerouslySetInnerHTML={{ __html: job.fullDescription }}
                    />
                  </motion.div>
                )}
                
                {activeTab === 'requirements' && (
                  <motion.div
                    key="requirements"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="tab-panel"
                  >
                    <h3>Key Requirements</h3>
                    <ul className="requirements-list">
                      {job.requirements.map((req, index) => (
                        <li key={index}>
                          <CheckCircle size={20} />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3>Skills & Expertise</h3>
                    <div className="skills-tags">
                      {job.tags.map((tag, index) => (
                        <span key={index} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'benefits' && (
                  <motion.div
                    key="benefits"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="tab-panel"
                  >
                    <h3>What We Offer</h3>
                    <div className="benefits-grid">
                      {job.benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                          <div className="benefit-icon">
                            <Award size={24} />
                          </div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="job-detail-sidebar">
            {/* Job Overview Card */}
            <div className="sidebar-card">
              <h3>Job Overview</h3>
              <div className="overview-list">
                <div className="overview-item">
                  <div className="overview-icon">
                    <Calendar size={20} />
                  </div>
                  <div className="overview-content">
                    <span className="overview-label">Date Posted</span>
                    <span className="overview-value">{formatDate(job.postedDate)}</span>
                  </div>
                </div>
                
                <div className="overview-item">
                  <div className="overview-icon">
                    <Clock size={20} />
                  </div>
                  <div className="overview-content">
                    <span className="overview-label">Closing Date</span>
                    <span className="overview-value">{formatDate(job.closingDate)}</span>
                  </div>
                </div>
                
                <div className="overview-item">
                  <div className="overview-icon">
                    <Briefcase size={20} />
                  </div>
                  <div className="overview-content">
                    <span className="overview-label">Job Type</span>
                    <span className="overview-value">{job.type}</span>
                  </div>
                </div>
                
                <div className="overview-item">
                  <div className="overview-icon">
                    <Users size={20} />
                  </div>
                  <div className="overview-content">
                    <span className="overview-label">Experience</span>
                    <span className="overview-value">{job.experience}</span>
                  </div>
                </div>
                
                <div className="overview-item">
                  <div className="overview-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="overview-content">
                    <span className="overview-label">Location</span>
                    <span className="overview-value">{job.city}, {job.state}</span>
                  </div>
                </div>
                
                <div className="overview-item">
                  <div className="overview-icon">
                    <DollarSign size={20} />
                  </div>
                  <div className="overview-content">
                    <span className="overview-label">Salary Range</span>
                    <span className="overview-value salary">{formatSalary(job.salary)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Share Card */}
            <div className="sidebar-card">
              <h3>Share This Job</h3>
              <div className="share-buttons">
                <button className="share-btn linkedin" onClick={() => handleShare('linkedin')}>
                  <Linkedin size={20} />
                </button>
                <button className="share-btn twitter" onClick={() => handleShare('twitter')}>
                  <Twitter size={20} />
                </button>
                <button className="share-btn facebook" onClick={() => handleShare('facebook')}>
                  <Facebook size={20} />
                </button>
                <button className="share-btn email" onClick={() => handleShare('email')}>
                  <Mail size={20} />
                </button>
              </div>
            </div>
            
            {/* Apply Card */}
            <div className="sidebar-card apply-card">
              <h3>Interested in this job?</h3>
              <p>Don't let this opportunity pass you by. Apply today!</p>
              <button 
                className="btn btn-primary btn-full"
                onClick={() => setIsModalOpen(true)}
              >
                Apply Now
                <Send size={18} />
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Similar Jobs Section */}
      {similarJobs.length > 0 && (
        <section className="similar-jobs-section">
          <div className="similar-jobs-container">
            <h2>Similar Opportunities</h2>
            <div className="similar-jobs-grid">
              {similarJobs.map(similarJob => (
                <Link 
                  key={similarJob.id} 
                  to={`/jobs/${similarJob.id}`}
                  className="similar-job-card"
                >
                  <div className="similar-job-header">
                    <div className="similar-job-logo">
                      {similarJob.company.charAt(0)}
                    </div>
                    <div className="similar-job-info">
                      <h4>{similarJob.title}</h4>
                      <p>{similarJob.company}</p>
                    </div>
                  </div>
                  <div className="similar-job-meta">
                    <span>
                      <MapPin size={14} />
                      {similarJob.location}
                    </span>
                    <span>
                      <DollarSign size={14} />
                      ${(similarJob.salary.min / 1000).toFixed(0)}K - ${(similarJob.salary.max / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="similar-job-arrow">
                    <ExternalLink size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="application-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-header-content">
                  <h2>Apply for {job.title}</h2>
                  <p>{job.company} • {job.location}</p>
                </div>
                <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="modal-body">
                {isSubmitted ? (
                  <motion.div
                    className="success-state"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="success-icon">
                      <CheckCircle size={60} />
                    </div>
                    <h3>Application Submitted!</h3>
                    <p>Thank you for applying. We'll review your application and get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form className="application-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>LinkedIn Profile (Optional)</label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Resume/CV *</label>
                      <div 
                        className="file-dropzone"
                        onClick={() => document.getElementById('resume').click()}
                      >
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          hidden
                        />
                        {uploadedFile ? (
                          <div className="file-preview">
                            <FileText size={24} />
                            <span>{uploadedFile.name}</span>
                            <button 
                              type="button" 
                              onClick={(e) => {
                                e.stopPropagation();
                                setUploadedFile(null);
                              }}
                            >
                              <X size={18} />
                            </button>
                          </div>
                        ) : (
                          <div className="dropzone-content">
                            <Upload size={32} />
                            <p>Click to upload or drag and drop</p>
                            <span>PDF, DOC, DOCX (max 5MB)</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Cover Letter (Optional)</label>
                      <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us why you're interested in this position..."
                      />
                    </div>
                    
                    <div className="form-checkbox">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="consent">
                        I agree to the processing of my personal data for recruitment purposes.
                      </label>
                    </div>
                    
                    <div className="form-actions">
                      <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="btn-spinner"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobDetailPage;