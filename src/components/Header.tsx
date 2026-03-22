import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap, 
  BookOpen, 
  Monitor, 
  Library, 
  Sparkles, 
  Bell, 
  UserCheck, 
  Clock, 
  Target, 
  CreditCard, 
  TrendingUp, 
  ArrowUpRight
} from 'lucide-react';

const IconMap: { [key: string]: React.ElementType } = {
  GraduationCap,
  BookOpen,
  Monitor,
  Library,
  Sparkles,
  Bell,
  UserCheck,
  Clock,
  Target,
  CreditCard,
  TrendingUp
};

const Logo = () => (
  <div className="flex items-center gap-1.5">
    <span className="text-2xl lg:text-3xl font-black tracking-tighter text-text-dark">webDevBg</span>
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
            { name: 'AI & Machine Learning', href: '/services/artificial-intelligence', desc: 'Smart solutions for complex problems' },
            { name: 'UX/UI Design', href: '/services/ux-design', desc: 'User-centric digital experiences' },
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
      isIndustries: true,
      dropdown: [
        {
          title: 'EdTech Software Development',
          items: [
            { name: 'LMS for enterprise', href: '/industries/edtech/lms-enterprise', icon: 'GraduationCap' },
            { name: 'Education Software', href: '/industries/edtech/education', icon: 'Library' },
            { name: 'Learning Management Software', href: '/industries/edtech/custom-lms-development', icon: 'BookOpen' },
            { name: 'Learning Experience Platform', href: '/industries/edtech/lxp', icon: 'Sparkles' },
            { name: 'Business Training Software', href: '/industries/edtech/business-training', icon: 'Monitor' },
            { name: 'Virtual Classroom Software', href: '/industries/edtech/virtual-classroom', icon: 'Bell' },
          ]
        },
        {
          title: 'HRM Software Development',
          items: [
            { name: 'Talent Management Software', href: '/industries/hrm/talent', icon: 'UserCheck' },
            { name: 'Payroll Software', href: '/industries/hrm/payroll', icon: 'CreditCard' },
            { name: 'Time Attendance Software', href: '/industries/hrm/attendance', icon: 'Clock' },
            { name: 'Performance Management Software', href: '/industries/hrm/performance', icon: 'TrendingUp' },
            { name: 'Applicant Tracking System', href: '/industries/hrm/ats', icon: 'Target' },
          ]
        },
        {
          title: 'Fintech Software Development',
          href: '/industries/fintech'
        },
        {
          title: 'Real Estate Software Development',
          href: '/industries/real-estate'
        },
        {
          title: 'Healthcare Software Development',
          href: '/industries/healthcare'
        },
        {
          title: 'E-commerce Software Development',
          href: '/industries/ecommerce'
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
    { 
      name: 'Blog', 
      href: '/blog',
      dropdown: [
        {
          title: 'Latest posts',
          items: [
            { 
              name: 'LMS vs Manual Training Management in 2026: Compliance Tracking, TMS vs LMS, and Implementation Steps', 
              href: '/blog/lms-vs-manual', 
              image: 'https://picsum.photos/seed/lms/400/225',
              isFeatured: true 
            },
            { 
              name: 'In House Vs Outsourcing Software Development: How To Choose The Right Model For Your Business', 
              href: '/blog/outsourcing',
              image: 'https://picsum.photos/seed/outsourcing/120/80'
            },
            { 
              name: 'Choosing Cloud for Your MVP Without Getting Trapped: Cost, Risk, and Vendor Lock-In', 
              href: '/blog/cloud',
              image: 'https://picsum.photos/seed/cloud/120/80'
            },
            { 
              name: 'Spec-Driven Development: Workflow, Tools, Risks, and Best Use Cases', 
              href: '/blog/spec-driven',
              image: 'https://picsum.photos/seed/spec/120/80'
            },
          ]
        }
      ],
      isBlog: true
    },
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
                  className={`relative flex items-center text-[13px] font-extrabold uppercase tracking-[0.15em] transition-colors ${
                    isScrolled ? 'text-text-dark' : 'text-text-dark'
                  } group-hover:text-primary`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className="ml-1.5 size-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                  {link.name === 'Blog' && (
                    <span className="absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </Link>

                {/* Mega Menu */}
                {link.dropdown && (
                  <div className="invisible absolute left-1/2 top-full w-screen -translate-x-1/2 pt-0 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white shadow-[0_40px_80px_-16px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
                      <div className="container py-12">
                        <div className={`grid ${link.isBlog ? 'grid-cols-[1.2fr_1.2fr_1fr]' : link.isIndustries ? 'grid-cols-1' : 'grid-cols-3'} gap-12`}>
                          {link.isBlog ? (
                        <>
                          {/* Blog Left Side - Featured Post */}
                          <div className="space-y-6">
                            <Link to={(link.dropdown[0].items[0] as any).href} className="group/featured block space-y-4">
                              <div className="relative aspect-video overflow-hidden bg-neutral-100">
                                <img 
                                  src={(link.dropdown[0].items[0] as any).image} 
                                  alt={(link.dropdown[0].items[0] as any).name}
                                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover/featured:scale-105"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="size-12 bg-primary/90 flex items-center justify-center text-white backdrop-blur-sm transition-transform group-hover/featured:scale-110">
                                    <div className="ml-1 border-y-[8px] border-y-transparent border-l-[12px] border-l-white" />
                                  </div>
                                </div>
                              </div>
                              <h3 className="text-[15px] font-extrabold text-text-dark leading-tight group-hover/featured:text-primary transition-colors">
                                {(link.dropdown[0].items[0] as any).name}
                              </h3>
                            </Link>
                          </div>

                          {/* Blog Middle Side - Smaller Posts */}
                          <div className="space-y-8">
                            <ul className="space-y-8">
                              {link.dropdown[0].items.slice(1).map((item: any) => (
                                <li key={item.name}>
                                  <Link to={item.href} className="group/item flex gap-4">
                                    <div className="size-20 shrink-0 overflow-hidden bg-neutral-100">
                                      <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="size-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                                        referrerPolicy="no-referrer"
                                      />
                                    </div>
                                    <span className="text-[13px] font-extrabold text-text-dark group-hover/item:text-primary transition-colors leading-tight">
                                      {item.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Blog Right Side */}
                          <div className="flex flex-col justify-between">
                            <div className="space-y-6">
                              <h3 className="text-2xl font-extrabold text-text-dark leading-tight">
                                Read Our <span className="text-primary">Blog</span>.<br />
                                Make better products with us.
                              </h3>
                              <Link 
                                to="/blog"
                                className="inline-flex items-center justify-center border-2 border-primary px-8 py-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-white transition-all"
                              >
                                All posts
                              </Link>
                            </div>
                            
                            {/* Play Banner */}
                            <div className="mt-8 group/banner relative overflow-hidden bg-primary p-6 aspect-[16/9] flex flex-col justify-end">
                              <div className="absolute right-0 top-0 size-full opacity-20">
                                <img 
                                  src="https://picsum.photos/seed/edtech/400/225" 
                                  alt="webDevBg YouTube"
                                  className="size-full object-cover transition-transform duration-500 group-hover/banner:scale-110"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div className="relative z-10 space-y-4">
                                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 backdrop-blur-sm">
                                  <div className="ml-0.5 border-y-[4px] border-y-transparent border-l-[6px] border-l-white" />
                                  <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-white">PLAY</span>
                                </div>
                                <h4 className="text-[15px] font-extrabold text-white leading-tight">
                                  Explore cutting-edge EdTech insights on DTA YouTube channel!
                                </h4>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : link.isIndustries ? (
                        <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                          {/* Top Row: EdTech and HRM */}
                          {link.dropdown.slice(0, 2).map((section: any) => (
                            <div key={section.title} className="space-y-6">
                              <h4 className="text-[18px] font-bold text-text-dark">
                                {section.title}
                              </h4>
                              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {section.items.map((item: any) => {
                                  const Icon = IconMap[item.icon];
                                  return (
                                    <Link 
                                      key={item.name}
                                      to={item.href}
                                      className="group/item flex items-center gap-3 py-1"
                                    >
                                      <div className="text-primary shrink-0">
                                        {Icon && <Icon className="size-5" />}
                                      </div>
                                      <span className="text-[14px] font-bold text-text-dark group-hover:text-primary transition-colors leading-tight">
                                        {item.name}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                          {/* Bottom Rows: Fintech, Real Estate, Healthcare, E-commerce */}
                          <div className="grid grid-cols-2 col-span-2 gap-x-16 gap-y-12">
                            {link.dropdown.slice(2).map((section: any) => (
                              <div key={section.title}>
                                <Link 
                                  to={section.href}
                                  className="text-[18px] font-bold text-text-dark hover:text-primary transition-colors"
                                >
                                  {section.title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        link.dropdown.map((section) => (
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
                        ))
                      )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link 
                  to="/contact" 
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-text-dark text-white text-[15px] font-bold overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10">Contact</span>
                  <ArrowUpRight className="relative z-10 size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
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
                          {link.isIndustries ? (
                            link.dropdown.map((section: any) => (
                              <Link 
                                key={section.title}
                                to={section.href || section.items?.[0]?.href}
                                className="text-sm font-bold text-neutral-400 hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {section.title}
                              </Link>
                            ))
                          ) : (
                            link.dropdown[0].items.slice(0, 3).map(item => (
                              <Link 
                                key={item.name}
                                to={item.href}
                                className="text-sm font-bold text-neutral-400 hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))
                          )}
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
                    className="block w-full bg-primary py-6 text-center text-[13px] font-extrabold uppercase tracking-[0.2em] text-white shadow-[0_20px_40px_-12px_rgba(255,109,42,0.3)] transition-transform active:scale-95"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                    <div className="space-y-2">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-400">Email us</p>
                      <a href="mailto:webdevstudiohq@gmail.com" className="text-lg font-extrabold text-text-dark hover:text-primary transition-colors">
                        webdevstudiohq@gmail.com
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
