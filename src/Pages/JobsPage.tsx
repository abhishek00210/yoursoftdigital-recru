import  { useState, useEffect, useMemo } from 'react';
import {  useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MapPin,
  Filter,
  ChevronDown,
  ChevronUp,
  X,

  Bell,
  SlidersHorizontal,

  AlertCircle,

} from 'lucide-react';
import { jobsData, filterOptions } from '../data/jobsData';
import '../styles/JobsPage.css';

const JobsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Search states
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [locationQuery, setLocationQuery] = useState(searchParams.get('location') || '');
  
  // Filter states
  const [selectedFilters, setSelectedFilters] = useState({
    jobTypes: [],
    industries: [],
    categories: [],
    locations: [],
    cities: [],
    experience: [],
  });
  
  // UI states
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState({
    jobTypes: true,
    industries: true,
    categories: true,
    locations: true,
    cities: false,
    experience: false,
  });
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterSearches, setFilterSearches] = useState({
    industries: '',
    cities: '',
  });
  
  const jobsPerPage = 10;

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    let result = [...jobsData];
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Location search filter
    if (locationQuery) {
      const query = locationQuery.toLowerCase();
      result = result.filter(job =>
        job.location.toLowerCase().includes(query) ||
        job.city.toLowerCase().includes(query) ||
        job.state.toLowerCase().includes(query) ||
        job.country.toLowerCase().includes(query)
      );
    }
    
    // Job type filter
    if (selectedFilters.jobTypes.length > 0) {
      result = result.filter(job => selectedFilters.jobTypes.includes(job.type));
    }
    
    // Industry filter
    if (selectedFilters.industries.length > 0) {
      result = result.filter(job => selectedFilters.industries.includes(job.industry));
    }
    
    // Category filter
    if (selectedFilters.categories.length > 0) {
      result = result.filter(job => selectedFilters.categories.includes(job.category));
    }
    
    // Location/Province filter
    if (selectedFilters.locations.length > 0) {
      result = result.filter(job => selectedFilters.locations.includes(job.state));
    }
    
    // City filter
    if (selectedFilters.cities.length > 0) {
      result = result.filter(job => selectedFilters.cities.includes(job.city));
    }
    
    // Experience filter
    if (selectedFilters.experience.length > 0) {
      result = result.filter(job => selectedFilters.experience.includes(job.experience));
    }
    
    // Sort
    switch (sortBy) {
  case 'newest':
    result.sort(
      (a, b) =>
        new Date(b.postedDate).getTime() -
        new Date(a.postedDate).getTime()
    );
    break;

  case 'oldest':
    result.sort(
      (a, b) =>
        new Date(a.postedDate).getTime() -
        new Date(b.postedDate).getTime()
    );
    break;

  case 'salary-high':
    result.sort((a, b) => b.salary.max - a.salary.max);
    break;

  case 'salary-low':
    result.sort((a, b) => a.salary.min - b.salary.min);
    break;

  case 'title':
    result.sort((a, b) => a.title.localeCompare(b.title));
    break;

  default:
    break;
}

    
    return result;
  }, [searchQuery, locationQuery, selectedFilters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (locationQuery) params.set('location', locationQuery);
    setSearchParams(params);
  };

  // Handle filter change
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const currentFilters = prev[filterType];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(f => f !== value)
        : [...currentFilters, value];
      return { ...prev, [filterType]: newFilters };
    });
    setCurrentPage(1);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      jobTypes: [],
      industries: [],
      categories: [],
      locations: [],
      cities: [],
      experience: [],
    });
    setSearchQuery('');
    setLocationQuery('');
    setSearchParams({});
    setCurrentPage(1);
  };

  // Remove single filter
  const removeFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].filter(f => f !== value),
    }));
  };

  // Toggle filter section
  const toggleFilterSection = (section) => {
    setExpandedFilters(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Get active filters for display
  const activeFilters = useMemo(() => {
    const filters = [];
    Object.entries(selectedFilters).forEach(([type, values]) => {
      values.forEach(value => {
        filters.push({ type, value });
      });
    });
    return filters;
  }, [selectedFilters]);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: '2-digit', 
      day: '2-digit', 
      year: 'numeric' 
    });
  };

  // Format salary
  const formatSalary = (salary) => {
    return `$${(salary.min / 1000).toFixed(0)}K - $${(salary.max / 1000).toFixed(0)}K`;
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="jobs-page">
      {/* Hero Section */}
      <section className="jobs-page-hero">
        <div className="jobs-hero-bg">
          <div className="jobs-hero-image">
            {/* You can add an image here */}
          </div>
          <div className="jobs-hero-overlay"></div>
        </div>
        
        <motion.div 
          className="jobs-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Connecting Purpose With Opportunity!</h1>
          <p>
            Manage your career journey with clarity, confidence, and connection. 
            TalentConnectors' candidate portal gives you the tools to stay organized, 
            track your applications, and explore new opportunities that align with your goals.
          </p>
          <div className="jobs-hero-cta">
            <a href="#jobs-list" className="btn">
              View Openings
            </a>
          </div>
        </motion.div>
      </section>

      {/* Search Section */}
      <section className="jobs-search-section">
        <div className="jobs-search-container">
          <form className="jobs-search-form" onSubmit={handleSearch}>
            <div className="search-field">
              <label>What</label>
              <div className="search-input-wrapper">
                <input
                  type="text"
                  placeholder="Job title or skill"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={20} />
              </div>
            </div>
            
            <div className="search-field">
              <label>Where</label>
              <div className="search-input-wrapper">
                <input
                  type="text"
                  placeholder="City, State/Province or Country"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
                <MapPin size={20} />
              </div>
            </div>
            
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <main className="jobs-main" id="jobs-list">
        <div className="jobs-content-wrapper">
          {/* Mobile Filter Toggle */}
          <button 
            className="mobile-filter-toggle"
            onClick={() => setIsFilterOpen(true)}
          >
            <SlidersHorizontal size={20} />
            Filters
            {activeFilters.length > 0 && (
              <span className="filter-count">({activeFilters.length})</span>
            )}
          </button>

          {/* Filters Overlay (Mobile) */}
          <div 
            className={`filters-overlay ${isFilterOpen ? 'open' : ''}`}
            onClick={() => setIsFilterOpen(false)}
          ></div>

          {/* Filters Sidebar */}
          <aside className={`jobs-filters-sidebar ${isFilterOpen ? 'open' : ''}`}>
            <div className="filters-header">
              <h3>
                <Filter size={18} />
                Filters
              </h3>
              <button className="clear-filters-btn" onClick={clearAllFilters}>
                Clear All
              </button>
              <button 
                className="mobile-close-btn"
                onClick={() => setIsFilterOpen(false)}
                style={{ display: 'none' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Job Type Filter */}
            <div className="filter-group">
              <div 
                className={`filter-group-header ${expandedFilters.jobTypes ? 'expanded' : ''}`}
                onClick={() => toggleFilterSection('jobTypes')}
              >
                <h4>Job Type</h4>
                {expandedFilters.jobTypes ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              {expandedFilters.jobTypes && (
                <div className="filter-options">
                  {filterOptions.jobTypes.map(option => (
                    <label key={option.value} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedFilters.jobTypes.includes(option.value)}
                        onChange={() => handleFilterChange('jobTypes', option.value)}
                      />
                      <span>{option.label}</span>
                      <span className="count">({option.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Industry Filter */}
            <div className="filter-group">
              <div 
                className={`filter-group-header ${expandedFilters.industries ? 'expanded' : ''}`}
                onClick={() => toggleFilterSection('industries')}
              >
                <h4>Industry</h4>
                {expandedFilters.industries ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              {expandedFilters.industries && (
                <>
                  <div className="filter-search">
                    <Search size={16} />
                    <input
                      type="text"
                      placeholder="Search industries..."
                      value={filterSearches.industries}
                      onChange={(e) => setFilterSearches(prev => ({ ...prev, industries: e.target.value }))}
                    />
                  </div>
                  <div className="filter-options">
                    {filterOptions.industries
                      .filter(option => 
                        option.label.toLowerCase().includes(filterSearches.industries.toLowerCase())
                      )
                      .map(option => (
                        <label key={option.value} className="filter-option">
                          <input
                            type="checkbox"
                            checked={selectedFilters.industries.includes(option.value)}
                            onChange={() => handleFilterChange('industries', option.value)}
                          />
                          <span>{option.label}</span>
                          <span className="count">({option.count})</span>
                        </label>
                      ))}
                  </div>
                </>
              )}
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <div 
                className={`filter-group-header ${expandedFilters.categories ? 'expanded' : ''}`}
                onClick={() => toggleFilterSection('categories')}
              >
                <h4>Category</h4>
                {expandedFilters.categories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              {expandedFilters.categories && (
                <div className="filter-options">
                  {filterOptions.categories.map(option => (
                    <label key={option.value} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedFilters.categories.includes(option.value)}
                        onChange={() => handleFilterChange('categories', option.value)}
                      />
                      <span>{option.label}</span>
                      <span className="count">({option.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Province/State Filter */}
            <div className="filter-group">
              <div 
                className={`filter-group-header ${expandedFilters.locations ? 'expanded' : ''}`}
                onClick={() => toggleFilterSection('locations')}
              >
                <h4>Province/State</h4>
                {expandedFilters.locations ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              {expandedFilters.locations && (
                <div className="filter-options">
                  {filterOptions.locations.map(option => (
                    <label key={option.value} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedFilters.locations.includes(option.value)}
                        onChange={() => handleFilterChange('locations', option.value)}
                      />
                      <span>{option.label}</span>
                      <span className="count">({option.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* City Filter */}
            <div className="filter-group">
              <div 
                className={`filter-group-header ${expandedFilters.cities ? 'expanded' : ''}`}
                onClick={() => toggleFilterSection('cities')}
              >
                <h4>City</h4>
                {expandedFilters.cities ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              {expandedFilters.cities && (
                <>
                  <div className="filter-search">
                    <Search size={16} />
                    <input
                      type="text"
                      placeholder="Search cities..."
                      value={filterSearches.cities}
                      onChange={(e) => setFilterSearches(prev => ({ ...prev, cities: e.target.value }))}
                    />
                  </div>
                  <div className="filter-options">
                    {filterOptions.cities
                      .filter(option => 
                        option.label.toLowerCase().includes(filterSearches.cities.toLowerCase())
                      )
                      .map(option => (
                        <label key={option.value} className="filter-option">
                          <input
                            type="checkbox"
                            checked={selectedFilters.cities.includes(option.value)}
                            onChange={() => handleFilterChange('cities', option.value)}
                          />
                          <span>{option.label}</span>
                          <span className="count">({option.count})</span>
                        </label>
                      ))}
                  </div>
                </>
              )}
            </div>

            {/* Experience Filter */}
            <div className="filter-group">
              <div 
                className={`filter-group-header ${expandedFilters.experience ? 'expanded' : ''}`}
                onClick={() => toggleFilterSection('experience')}
              >
                <h4>Experience Level</h4>
                {expandedFilters.experience ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              {expandedFilters.experience && (
                <div className="filter-options">
                  {filterOptions.experience.map(option => (
                    <label key={option.value} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedFilters.experience.includes(option.value)}
                        onChange={() => handleFilterChange('experience', option.value)}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Jobs Results */}
          <div className="jobs-results">
            {/* Job Alert Banner */}
            <div className="job-alert-banner">
              <div className="job-alert-content">
                <div className="job-alert-icon">
                  <Bell size={24} />
                </div>
                <div className="job-alert-text">
                  <h4>Get Job Alerts</h4>
                  <p>Be the first to know when new jobs matching your criteria are posted.</p>
                </div>
              </div>
              <button className="job-alert-btn">
                Create Alert
              </button>
            </div>

            {/* Results Header */}
            <div className="jobs-results-header">
              <p className="results-count">
                Showing <strong>{paginatedJobs.length}</strong> of <strong>{filteredJobs.length}</strong> jobs
              </p>
              
              <div className="results-sort">
                <label>Sort by:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="salary-high">Salary (High to Low)</option>
                  <option value="salary-low">Salary (Low to High)</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="active-filters">
                {activeFilters.map((filter, index) => (
                  <span key={index} className="active-filter-tag">
                    {filter.value}
                    <button onClick={() => removeFilter(filter.type, filter.value)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Job Listings */}
            <AnimatePresence mode="wait">
              {paginatedJobs.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="jobs-list"
                >
                  {paginatedJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="job-list-item"
                      onClick={() => navigate(`/jobs/${job.id}`)}
                    >
                      <div className="job-list-header">
                        <div>
                          <h3 className="job-list-title">{job.title}</h3>
                          <p className="job-list-location">
                            <MapPin size={14} />
                            {job.location}, {job.country}
                          </p>
                        </div>
                        <div className="job-list-meta">
                          <span className="job-list-type">{job.type}</span>
                          <span className="job-list-date">{formatDate(job.closingDate)}</span>
                        </div>
                      </div>
                      
                      <p className="job-list-description">{job.description}</p>
                      
                      <div className="job-list-tags">
                        {job.urgent && (
                          <span className="job-list-tag urgent">Urgent</span>
                        )}
                        {job.featured && (
                          <span className="job-list-tag featured">Featured</span>
                        )}
                        {job.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="job-list-tag">{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="no-results"
                >
                  <div className="no-results-icon">
                    <AlertCircle size={40} />
                  </div>
                  <h3>No Jobs Found</h3>
                  <p>Try adjusting your search criteria or filters to find more opportunities.</p>
                  <button className="btn btn-primary" onClick={clearAllFilters}>
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="jobs-pagination">
                <button
                  className="pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  ‹
                </button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  // Show first, last, current, and adjacent pages
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return <span key={page}>...</span>;
                  }
                  return null;
                })}
                
                <button
                  className="pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobsPage;