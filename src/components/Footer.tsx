import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Linkedin, Youtube, Twitter, Instagram, Facebook, ArrowUpRight, ChevronUp } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-1.5">
    <span className="text-2xl lg:text-3xl font-black tracking-tighter text-text-dark">webDevBg</span>
    <div className="size-2 lg:size-2.5 rounded-full bg-primary mt-1.5 lg:mt-2" />
  </div>
);

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ y: -4, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="size-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:text-primary hover:bg-white hover:shadow-xl transition-all duration-300 border border-neutral-100"
  >
    <Icon className="size-5" />
  </motion.a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="group flex items-center gap-1 text-[15px] font-bold text-text-dark hover:text-primary transition-all duration-300 w-fit"
  >
    <span className="relative">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
    </span>
    <motion.span
      initial={{ opacity: 0, x: -4, y: 4 }}
      whileHover={{ opacity: 1, x: 0, y: 0 }}
      className="text-primary"
    >
      <ArrowUpRight className="size-3" />
    </motion.span>
  </Link>
);

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.8, 1], ['20%', '-20%']);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white pt-40 pb-12 overflow-hidden border-t border-neutral-100">
      {/* Background Animated Text - Parallax effect on scroll */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <motion.div style={{ x }} className="flex whitespace-nowrap">
          <h2 className="text-[30vw] font-black leading-none tracking-tighter pr-20">
            webDevBg webDevBg webDevBg webDevBg
          </h2>
        </motion.div>
      </div>

      {/* Floating Brand Icon - Subtle float animation */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-[10%] pointer-events-none hidden lg:block"
      >
        <div className="size-24 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center backdrop-blur-sm">
          <div className="size-12 rounded-full bg-primary shadow-lg shadow-primary/20" />
        </div>
      </motion.div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-10">
            <Logo />
            <p className="text-[17px] font-medium text-neutral-500 leading-relaxed max-w-sm">
              We are a software development company that helps startups and enterprises build high-quality software products that scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="#" icon={Youtube} label="YouTube" />
              <SocialLink href="#" icon={Twitter} label="Twitter" />
              <SocialLink href="#" icon={Instagram} label="Instagram" />
              <SocialLink href="#" icon={Facebook} label="Facebook" />
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-12">
            <div className="space-y-8">
              <h4 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-neutral-400 border-b border-neutral-100 pb-4 w-fit">Company</h4>
              <ul className="space-y-5">
                <li><FooterLink to="/about">About Us</FooterLink></li>
                <li><FooterLink to="/portfolio">Portfolio</FooterLink></li>
                <li><FooterLink to="/blog">Blog</FooterLink></li>
                <li><FooterLink to="/who-we-are">Who We Are</FooterLink></li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-neutral-400 border-b border-neutral-100 pb-4 w-fit">Services</h4>
              <ul className="space-y-5">
                <li><FooterLink to="/services">Development</FooterLink></li>
                <li><FooterLink to="/services">Design</FooterLink></li>
                <li><FooterLink to="/services">Consulting</FooterLink></li>
                <li><FooterLink to="/industries/edtech/lms-enterprise">LMS for Enterprise</FooterLink></li>
              </ul>
            </div>

            <div className="space-y-8 col-span-2 md:col-span-1">
              <h4 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-neutral-400 border-b border-neutral-100 pb-4 w-fit">Contact</h4>
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest">Email us</p>
                  <a href="mailto:webdevstudiohq@gmail.com" className="group flex items-center gap-2 text-[20px] font-bold text-text-dark hover:text-primary transition-colors">
                    webdevstudiohq@gmail.com
                    <motion.span whileHover={{ x: 5 }} className="text-primary">
                      <ArrowUpRight className="size-5" />
                    </motion.span>
                  </a>
                </div>
                <Link 
                  to="/contact" 
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-text-dark text-white text-[15px] font-bold overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <ArrowUpRight className="relative z-10 size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-[12px] font-bold text-neutral-400 uppercase tracking-widest">
            <p>© 2026 webDevBg. All rights reserved.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-primary transition-all duration-300 relative group">
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#" className="hover:text-primary transition-all duration-300 relative group">
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-[12px] font-bold text-neutral-400 uppercase tracking-widest">
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary"
            >
              ❤️
            </motion.div>
            <span>by webDevBg Team</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1, backgroundColor: '#FF6D2A', color: '#fff' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 size-14 rounded-full bg-text-dark text-white shadow-2xl flex items-center justify-center transition-colors duration-300"
          >
            <ChevronUp className="size-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
