import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Twitter, Instagram, Facebook } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-1.5">
    <span className="text-2xl lg:text-3xl font-black tracking-tighter text-text-dark">Selleo</span>
    <div className="size-2 lg:size-2.5 rounded-full bg-primary mt-1.5 lg:mt-2" />
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-white py-20 border-t border-neutral-100">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="space-y-6">
            <Logo />
            <p className="text-[14px] font-medium text-neutral-500 leading-relaxed max-w-xs">
              Selleo is a software development company that helps startups and enterprises build high-quality software products.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Linkedin className="size-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Youtube className="size-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Twitter className="size-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Instagram className="size-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-primary transition-colors"><Facebook className="size-5" /></a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-6">
              <h4 className="text-[12px] font-extrabold uppercase tracking-widest text-neutral-400">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-[14px] font-bold text-text-dark hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/portfolio" className="text-[14px] font-bold text-text-dark hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link to="/blog" className="text-[14px] font-bold text-text-dark hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[12px] font-extrabold uppercase tracking-widest text-neutral-400">Services</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-[14px] font-bold text-text-dark hover:text-primary transition-colors">Development</Link></li>
                <li><Link to="/services" className="text-[14px] font-bold text-text-dark hover:text-primary transition-colors">Design</Link></li>
                <li><Link to="/services" className="text-[14px] font-bold text-text-dark hover:text-primary transition-colors">Consulting</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[12px] font-extrabold uppercase tracking-widest text-neutral-400">Contact</h4>
              <ul className="space-y-4">
                <li><Link to="/contact" className="text-[14px] font-bold text-text-dark hover:text-primary transition-colors">Get in Touch</Link></li>
                <li><a href="mailto:hello@selleo.com" className="text-[14px] font-bold text-text-dark hover:text-primary transition-colors">hello@selleo.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-bold text-neutral-400 uppercase tracking-widest">
          <p>© 2026 Selleo. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
