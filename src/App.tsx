import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<div className="pt-32 container"><h1>Industries</h1></div>} />
          <Route path="portfolio" element={<div className="pt-32 container"><h1>Portfolio</h1></div>} />
          <Route path="about" element={<div className="pt-32 container"><h1>About us</h1></div>} />
          <Route path="blog" element={<div className="pt-32 container"><h1>Blog</h1></div>} />
          <Route path="contact" element={<div className="pt-32 container"><h1>Contact</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}
