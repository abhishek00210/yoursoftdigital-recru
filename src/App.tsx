import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage';
import JobDetailPage from './Pages/JobDetailPage';
import GeneralApplicationPage from './Pages/GeneralApplicationPage';
import './App.css';
import './styles/JobsPage.css';
import './styles/JobDetailPage.css';
import './styles/GeneralApplicationPage.css';

// Component to handle sticky header visibility on job detail page
const StickyHeaderHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const stickyHeader = document.querySelector('.job-detail-sticky-header');
      if (stickyHeader) {
        if (window.scrollY > 400) {
          stickyHeader.classList.add('visible');
        } else {
          stickyHeader.classList.remove('visible');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);
  
  return null;
};

function App() {
  return (
    <Router>
      <div className="app">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <StickyHeaderHandler />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/jobs/:id" element={<JobDetailPage />} />
            <Route path="/apply" element={<GeneralApplicationPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;