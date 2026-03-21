import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-1.5">
    <span className="text-2xl lg:text-3xl font-black tracking-tighter text-text-dark">Selleo</span>
    <div className="size-2 lg:size-2.5 rounded-full bg-primary mt-1.5 lg:mt-2" />
  </div>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        {
          title: 'What we do',
          items: [
            { name: 'Custom Software Development', href: '/services/custom-software', desc: 'Tailored solutions for your business' },
            { name: 'SaaS Development', href: '/services/saas', desc: 'Scalable cloud-based applications' },
            { name: 'Mobile App Development', href: '/services/mobile', desc: 'iOS and Android native & cross-platform' },
            { name: 'AI & Machine Learning', href: '/services/ai', desc: 'Smart solutions for complex problems' },
            { name: 'UX/UI Design', href: '/services/design', desc: 'User-centric digital experiences' },
            { name: 'Product Discovery', href: '/services/discovery', desc: 'Validate your ideas before building' },
          ]
        },
        {
          title: 'How we do it',
          items: [
            { name: 'DevOps & Cloud', href: '/services/devops', desc: 'Infrastructure and automation' },
            { name: 'Quality Assurance', href: '/services/qa', desc: 'Ensuring bug-free software' },
            { name: 'Staff Augmentation', href: '/services/staffing', desc: 'Extend your team with our experts' },
            { name: 'MVP Development', href: '/services/mvp', desc: 'Fast-track your product to market' },
            { name: 'Software Outsourcing', href: '/services/outsourcing', desc: 'End-to-end development services' },
            { name: 'CTO as a Service', href: '/services/cto', desc: 'Strategic technical leadership' },
          ]
        },
        {
          title: 'Technologies',
          items: [
            { name: 'React', href: '/tech/react' },
            { name: 'Node.js', href: '/tech/node' },
            { name: 'React Native', href: '/tech/react-native' },
            { name: 'Ruby on Rails', href: '/tech/ror' },
            { name: 'Python', href: '/tech/python' },
            { name: 'AWS / Azure / GCP', href: '/tech/cloud' },
          ]
        }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      dropdown: [
        {
          title: 'Our Expertise',
          items: [
            { name: 'EdTech', href: '/industries/edtech' },
            { name: 'HRM & Recruitment', href: '/industries/hrm' },
            { name: 'FinTech', href: '/industries/fintech' },
            { name: 'Healthcare', href: '/industries/healthcare' },
            { name: 'Real Estate', href: '/industries/real-estate' },
            { name: 'E-commerce', href: '/industries/ecommerce' },
            { name: 'Logistics', href: '/industries/logistics' },
            { name: 'AdTech', href: '/industries/adtech' },
          ]
        }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { 
      name: 'About us', 
      href: '/about',
      dropdown: [
        {
          title: 'Company',
          items: [
            { name: 'Who we are', href: '/who-we-are', desc: 'Our DNA, values and history' },
            { name: 'Our Team', href: '/about/team' },
            { name: 'Careers', href: '/about/careers' },
            { name: 'How we work', href: '/about/process' },
            { name: 'Testimonials', href: '/about/testimonials' },
            { name: 'Contact', href: '/contact' },
          ]
        }
      ]
    },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="block relative z-50">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.name} className="group relative py-6">
                <Link 
                  to={link.href}
                  className={`flex items-center text-[13px] font-extrabold uppercase tracking-[0.15em] transition-colors ${
                    isScrolled ? 'text-text-dark' : 'text-text-dark'
                  } group-hover:text-primary`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className="ml-1.5 size-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Mega Menu */}
                {link.dropdown && (
                  <div className="invisible absolute left-1/2 top-full w-screen max-w-[1200px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                    <div className="grid grid-cols-3 gap-12 rounded-[2rem] bg-white p-12 shadow-[0_40px_80px_-16px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
                      {link.dropdown.map((section) => (
                        <div key={section.title} className="space-y-8">
                          <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary/80 border-b border-neutral-100 pb-4">
                            {section.title}
                          </h4>
                          <ul className="space-y-6">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link 
                                  to={item.href}
                                  className="group/item block"
                                >
                                  <span className="block text-[15px] font-extrabold text-text-dark group-hover/item:text-primary transition-colors">
                                    {item.name}
                                  </span>
                                  {item.desc && (
                                    <span className="block text-[12px] font-medium text-neutral-400 mt-1 leading-relaxed">
                                      {item.desc}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4.5 text-center text-[12px] font-extrabold uppercase tracking-[0.2em] text-white transition-all hover:bg-text-dark hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(255,109,42,0.4)] shadow-[0_10px_20px_-5px_rgba(255,109,42,0.3)]"
              >
                Estimate project
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav Trigger */}
        <button 
          className="lg:hidden relative z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative size-6">
            <span className={`absolute left-0 top-1/2 h-0.5 w-6 bg-text-dark transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
            <span className={`absolute left-0 top-1/2 h-0.5 w-6 bg-text-dark transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-1/2 h-0.5 w-6 bg-text-dark transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-hidden flex flex-col"
          >
            <div className="container pt-32 pb-12 flex-grow flex flex-col">
              <nav className="flex-grow overflow-y-auto pr-4 scrollbar-hide">
                <motion.ul 
                  className="space-y-10"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.li 
                      key={link.name}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -20 }
                      }}
                    >
                      <Link 
                        to={link.href}
                        className="text-5xl font-extrabold text-text-dark hover:text-primary transition-colors block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <div className="mt-6 grid grid-cols-1 gap-4 pl-2">
                          {link.dropdown[0].items.slice(0, 3).map(item => (
                            <Link 
                              key={item.name}
                              to={item.href}
                              className="text-sm font-bold text-neutral-400 hover:text-primary transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
              
              <div className="mt-auto pt-10 border-t border-neutral-100">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-10"
                >
                  <Link 
                    to="/contact" 
                    className="block w-full rounded-full bg-primary py-6 text-center text-[13px] font-extrabold uppercase tracking-[0.2em] text-white shadow-[0_20px_40px_-12px_rgba(255,109,42,0.3)] transition-transform active:scale-95"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Estimate project
                  </Link>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                    <div className="space-y-2">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-400">Email us</p>
                      <a href="mailto:hello@selleo.com" className="text-lg font-extrabold text-text-dark hover:text-primary transition-colors">
                        hello@selleo.com
                      </a>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-400">Follow us</p>
                      <div className="flex gap-6">
                        {['LinkedIn', 'Twitter', 'Facebook'].map(s => (
                          <a key={s} href="#" className="text-sm font-extrabold text-text-dark hover:text-primary transition-colors">
                            {s}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
