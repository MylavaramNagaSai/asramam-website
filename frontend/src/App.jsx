import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components (These show on EVERY page)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingOms from './components/FloatingOms';

// Pages
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFBF7] relative font-sans flex flex-col">
        
        {/* Global Background Elements & Header */}
        <FloatingOms /> 
        <Navbar />
        
        {/* Main Content Area (This swaps out based on the URL) */}
        <div className="flex-grow">
          <Routes>
            {/* The Main Homepage */}
            <Route path="/" element={<Home />} />
            
            {/* The Wildcard Route for all Navbar Dropdown links */}
            <Route path="/:pageName" element={<GenericPage />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;