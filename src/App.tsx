import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToHash } from './components/ScrollToHash';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import WhoWeAre from './pages/WhoWeAre';
import Blog from './pages/Blog';
import LMSForEnterprise from './pages/LMSForEnterprise';
import CustomLMSDevelopment from './pages/CustomLMSDevelopment';
import CustomSoftwareDevelopment from './pages/CustomSoftwareDevelopment';
import SaaSDevelopment from './pages/SaaSDevelopment';
import UXDesign from './pages/UXDesign';
import AIDevelopment from './pages/AIDevelopment';
import MobileDevelopmentServices from './pages/MobileDevelopmentServices';
import SoftwareQualityAssurance from './pages/SoftwareQualityAssurance';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/custom-software" element={<CustomSoftwareDevelopment />} />
          <Route path="services/saas" element={<SaaSDevelopment />} />
          <Route path="services/mobile" element={<MobileDevelopmentServices />} />
          <Route path="services/quality-assurance" element={<SoftwareQualityAssurance />} />
          <Route path="services/ux-design" element={<UXDesign />} />
          <Route path="services/artificial-intelligence" element={<AIDevelopment />} />
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
