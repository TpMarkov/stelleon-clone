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
    <footer className="bg-white px-6 py-10 lg:py-20 border-t border-gray-100">
      <div className="container grid grid-cols-1 gap-12 sm:grid-cols-12">
        <div className="sm:col-span-6 lg:col-span-4 space-y-6">
          <Logo />
          <address className="not-italic text-neutral-600 leading-relaxed">
            Selleo Labs spółka z o.o. <br />
            ul. Powstańców Śląskich 3/1 <br />
            43-300 Bielsko-Biała
          </address>
          <a href="mailto:hello@selleo.com" className="text-primary font-medium hover:underline">
            hello@selleo.com
          </a>
          <div className="text-sm text-neutral-500 space-y-1">
            <p>NIP: 5472145694</p>
            <p>REGON: 243189012</p>
            <p>KRS: 0000925982</p>
          </div>
        </div>

        <div className="sm:col-span-6 lg:col-span-2">
          <h4 className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-6">Follow us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-neutral-600 hover:text-primary transition-colors"><Linkedin className="size-5" /></a>
            <a href="#" className="text-neutral-600 hover:text-primary transition-colors"><Youtube className="size-5" /></a>
            <a href="#" className="text-neutral-600 hover:text-primary transition-colors"><Twitter className="size-5" /></a>
            <a href="#" className="text-neutral-600 hover:text-primary transition-colors"><Instagram className="size-5" /></a>
            <a href="#" className="text-neutral-600 hover:text-primary transition-colors"><Facebook className="size-5" /></a>
          </div>
        </div>

        <div className="sm:col-span-6 lg:col-span-2">
          <h4 className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-6">Company</h4>
          <ul className="space-y-3 text-neutral-500">
            <li><Link to="/about" className="hover:text-primary">Who we are</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><a href="#" className="hover:text-primary">Career</a></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
          </ul>
        </div>

        <div className="sm:col-span-6 lg:col-span-4">
          <h4 className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-6">Services</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-500">
            <li><Link to="/services" className="hover:text-primary">Custom Software</Link></li>
            <li><Link to="/services" className="hover:text-primary">SaaS Development</Link></li>
            <li><Link to="/services" className="hover:text-primary">UX/UI Design</Link></li>
            <li><Link to="/services" className="hover:text-primary">AI Solutions</Link></li>
            <li><Link to="/services" className="hover:text-primary">Quality Assurance</Link></li>
            <li><Link to="/services" className="hover:text-primary">Staff Augmentation</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-4">
        <p>© 2026 Selleo. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary underline">Privacy Policy</a>
          <a href="#" className="hover:text-primary underline">GDPR</a>
          <a href="#" className="hover:text-primary underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};
