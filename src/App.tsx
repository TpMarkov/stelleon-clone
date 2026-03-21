import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import WhoWeAre from './pages/WhoWeAre';
import Blog from './pages/Blog';
import LMSForEnterprise from './pages/LMSForEnterprise';
import CustomLMSDevelopment from './pages/CustomLMSDevelopment';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<div className="pt-32 container"><h1>Industries</h1></div>} />
          <Route path="industries/edtech/lms-enterprise" element={<LMSForEnterprise />} />
          <Route path="industries/edtech/custom-lms-development" element={<CustomLMSDevelopment />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="about" element={<div className="pt-32 container"><h1>About us</h1></div>} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
