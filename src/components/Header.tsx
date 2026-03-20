import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Logo = () => (
  <svg width="96" height="32" className="block h-8 w-24 overflow-hidden lg:h-12 lg:w-36" viewBox="0 0 120 40">
    <defs>
      <radialGradient id="a" cx="45.43%" cy="11.9%" r="139.43%" fx="45.43%" fy="11.9%" gradientTransform="matrix(1 0 0 .73586 0 .03)">
        <stop offset="0%" stopColor="#00D0FE" />
        <stop offset="69.1%" stopColor="#0093E9" />
        <stop offset="100%" stopColor="#0077B2" />
      </radialGradient>
      <radialGradient id="b" cx="26.51%" cy="5.02%" r="145.79%" fx="26.51%" fy="5.02%" gradientTransform="matrix(1 0 0 .73572 0 .01)">
        <stop offset="0%" stopColor="#F79606" />
        <stop offset="100%" stopColor="#F96603" />
      </radialGradient>
    </defs>
    <path fill="url(#a)" d="M11.22.13C9.02.7 7.8 2.8 7.97 5.01c.31 4.13-.79 6.55-5.44 8.69l-.34.17a4.4 4.4 0 0 0-1.37 1.25l-.01.02c-.14.2-.27.4-.37.62v.01c-.06.1-.1.21-.15.32l-.01.04a3.8 3.8 0 0 0-.25 1.06v.01l-.03.35v.05l.01.34V18a3.6 3.6 0 0 0 .12.74l.1.35.02.05.13.31.03.06a4.6 4.6 0 0 0 .36.64 3.6 3.6 0 0 0 .46.56l.03.03a3.7 3.7 0 0 0 .56.48 4.6 4.6 0 0 0 .96.52l.02.01c.46.18.95.28 1.45.3h.01l.38-.01c3.69-.16 6.23.74 7.77 2.77.38.55.73 1.18 1.02 1.89l.02.04c.75 1.91 2.41 3.25 4.34 3.22a4.38 4.38 0 0 0 4.13-3.29c0-.04 0-.09.02-.14l.06-.28.04-.4v-.02c.02-.4-.02-.8-.1-1.2l-.03-.1a4.43 4.43 0 0 0-4.88-3.27h-.05c-1.09.09-2.04.02-2.92-.1a6.24 6.24 0 0 1-5.34-4.53c-.9-3.27.82-6.4 4.68-8.02 2.22-.92 3.73-2.97 3.14-5.3A4.38 4.38 0 0 0 11.22.12" />
    <path fill="url(#b)" d="M18.33 9.83a4.38 4.38 0 0 0-4.13 3.29l-.02.14c-.02.09-.05.18-.06.28-.02.13-.04.27-.04.4v.02c-.03.4.01.8.1 1.2l.03.11a4.43 4.43 0 0 0 4.88 3.26h.05c1.08-.09 2.04-.02 2.92.1a6.24 6.24 0 0 1 5.34 4.53c.89 3.28-.82 6.41-4.68 8.02-2.22.92-3.73 2.97-3.14 5.3a4.38 4.38 0 0 0 5.32 3.17c2.2-.55 3.42-2.66 3.25-4.88-.31-4.12.79-6.54 5.44-8.68l.34-.18c.44-.25.82-.58 1.14-.95l.01-.02.22-.28v-.01a4.2 4.2 0 0 0 .52-.95l.01-.04.11-.32.01-.04.08-.33v-.03c.03-.11.05-.23.06-.34v-.02l.02-.34v-.45l-.05-.34v-.05a4 4 0 0 0-.18-.7l-.02-.05-.13-.32-.02-.06-.15-.3-.03-.04-.18-.3h-.01l-.21-.28-.02-.02a5 5 0 0 0-.23-.26l-.03-.03a4 4 0 0 0-.24-.23l-.03-.03a4.52 4.52 0 0 0-2.72-1.05c-.13 0-.26 0-.39.02-3.69.15-6.22-.74-7.76-2.78a10 10 0 0 1-1.03-1.88l-.02-.05c-.74-1.88-2.37-3.22-4.26-3.22z" />
    <path fill="#2F3033" d="M51.49 26.59c1.25 0 1.7-.4 1.7-1.14 0-.91-.85-1.28-2.27-1.71-2.6-.77-5.41-1.82-5.41-5.13 0-2.42 1.57-3.98 5.13-3.98 2.56 0 4.55.57 4.55.57.14.05.26.17.29.28 0 0 .28 2.16.28 2.28 0 .17-.11.28-.28.28-.15 0-2.42-.57-4.84-.57-1.14 0-1.71.4-1.71 1.14 0 .91.85 1.28 2.28 1.71 2.59.77 5.4 1.8 5.4 5.13 0 2.27-1.84 3.98-5.12 3.98-3.13 0-5.4-.85-5.4-.85a.5.5 0 0 1-.3-.29s-.28-2.16-.28-2.27c0-.18.12-.29.29-.29.14 0 3.13.86 5.69.86m11.02-5.99h6.38c-.11-1.59-.83-3.13-2.82-3.13-2.7 0-3.36 1.34-3.56 3.14zm0 2.85c.23 1.83 1 3.14 3.84 3.14 2.28 0 4.7-.57 4.85-.57.17 0 .28.11.28.28 0 .09-.28 2.28-.28 2.28-.03.14-.12.26-.29.28 0 0-2 .57-4.56.57-6.12 0-7.4-3.33-7.4-7.4s1.31-7.38 7.12-7.38c4.04 0 6.3 2.25 6.3 7.38v1.14c0 .14-.15.28-.32.28zM75.58 8.34c0-.18.11-.29.29-.29l2.84-.28c.17 0 .29.1.29.28v18.82c0 1.14.28 1.88.28 2 0 .17-.11.28-.28.28h-2.85c-.11 0-.23-.11-.28-.28 0 0-.29-.86-.29-2zm7.61 0c0-.18.11-.29.29-.29l2.84-.28c.17 0 .29.1.29.28v18.82c0 1.14.28 1.88.28 2 0 .17-.11.28-.28.28h-2.85c-.11 0-.23-.11-.28-.28 0 0-.29-.86-.29-2zM93.55 20.6h6.38c-.11-1.59-.83-3.13-2.82-3.13-2.7 0-3.36 1.34-3.56 3.14zm0 2.85c.23 1.83 1 3.14 3.84 3.14 2.28 0 4.7-.57 4.85-.57.17 0 .28.11.28.28 0 .09-.28 2.28-.28 2.28-.03.14-.12.26-.29.28 0 0-2 .57-4.56.57-6.12 0-7.4-3.33-7.4-7.4s1.31-7.38 7.12-7.38c4.04 0 6.3 2.25 6.3 7.38v1.14c0 .14-.15.28-.32.28zm19.33 3.14c2.85 0 3.7-1.71 3.7-4.56s-.85-4.56-3.7-4.56-3.7 1.71-3.7 4.56.85 4.56 3.7 4.56m0-11.96c4.27 0 7.12 2.27 7.12 7.4 0 5.12-2.85 7.4-7.12 7.4s-7.12-2.28-7.12-7.4c0-5.13 2.85-7.4 7.12-7.4" />
  </svg>
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
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About us', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20 lg:h-24">
        <Link to="/" className="block">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name} className="group relative">
                <Link 
                  to={link.href}
                  className="flex items-center text-base font-semibold text-text-primary transition-colors hover:text-primary"
                >
                  {link.name}
                  {(link.name === 'Services' || link.name === 'Industries' || link.name === 'About us' || link.name === 'Blog') && (
                    <ChevronDown className="ml-1 size-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to="/contact" 
                className="rounded bg-primary px-6 py-2 text-center font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav Trigger */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-full bg-white p-6 shadow-xl lg:hidden"
          >
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="block text-lg font-semibold text-text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/contact" 
                  className="block w-full rounded bg-primary py-3 text-center font-semibold text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
