import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, ArrowRight, Paperclip, Plus, Minus, MapPin, Mail, Send, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => (
  <div className="py-6 border-b border-neutral-100">
    <div className="container">
      <ol className="flex items-center gap-4 text-sm font-medium">
        <li>
          <Link to="/" className="flex items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors">
            <Home className="size-4" />
            <span>Home</span>
          </Link>
        </li>
        <li className="text-neutral-300">/</li>
        <li className="text-neutral-600">Contact</li>
      </ol>
    </div>
  </div>
);

const ContactForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-[4px] p-8 lg:p-16 shadow-sm border border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 space-y-4">
          <h1 className="text-[56px] font-extrabold text-[#2F3033] leading-tight">
            Hey! <br /> Feel free to <span className="text-[#FF6D2A]">contact us</span>
          </h1>
          <p className="text-[18px] text-[#4C4D52] max-w-xl">
            Fill out the form and we'll get back to you shortly. We are looking forward to our cooperation!
          </p>
        </div>

        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative group">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Name *</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Name Surname"
                className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[18px] text-[#4C4D52] rounded-none focus:border-[#FF6D2A] outline-none transition-all placeholder:text-neutral-300"
              />
            </div>
            <div className="relative group">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">E-mail *</label>
              <input 
                type="email" 
                id="email" 
                placeholder="name.surname@company.com"
                className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[18px] text-[#4C4D52] rounded-none focus:border-[#FF6D2A] outline-none transition-all placeholder:text-neutral-300"
              />
            </div>
          </div>

          <div className="relative group">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Project description *</label>
            <textarea 
              id="message" 
              rows={1}
              placeholder="Our goal is to launch / improve / scale a product that..."
              className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[18px] text-[#4C4D52] rounded-none focus:border-[#FF6D2A] outline-none transition-all placeholder:text-neutral-300 min-h-[46px] resize-none"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm text-neutral-400">Upload briefs, specs, mockups or any documents that help us understand your project.</p>
            <label className="flex items-center justify-center w-full h-16 border-2 border-dashed border-neutral-200 rounded-[4px] cursor-pointer hover:border-[#FF6D2A] hover:bg-white transition-all group">
              <input type="file" className="hidden" />
              <div className="flex items-center gap-2 text-neutral-400 group-hover:text-[#FF6D2A] transition-colors">
                <Paperclip className="size-5" />
                <span className="font-bold">Attach File</span>
              </div>
            </label>
          </div>

          <div className="pt-4">
            <button 
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-[#FF6D2A] font-bold hover:text-orange-600 transition-colors"
            >
              {isExpanded ? <Minus className="size-5" /> : <Plus className="size-5" />}
              <span>Additional details</span>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden space-y-10 mt-10"
                >
                  <div className="space-y-6">
                    <h4 className="text-[18px] font-bold text-[#2F3033]">How would you like to collaborate?</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="relative flex items-center justify-center h-20 rounded-[4px] border border-neutral-200 cursor-pointer hover:bg-[#FF6D2A]/5 has-[:checked]:border-[#FF6D2A] has-[:checked]:bg-[#FF6D2A]/5 transition-all">
                        <input type="radio" name="collab" className="sr-only" />
                        <span className="font-bold text-neutral-600">IT Staff augmentation</span>
                      </label>
                      <label className="relative flex items-center justify-center h-20 rounded-[4px] border border-neutral-200 cursor-pointer hover:bg-[#FF6D2A]/5 has-[:checked]:border-[#FF6D2A] has-[:checked]:bg-[#FF6D2A]/5 transition-all">
                        <input type="radio" name="collab" className="sr-only" />
                        <span className="font-bold text-neutral-600">Dedicated Development Team</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[18px] font-bold text-[#2F3033]">What do you need help with?</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Custom software', 'Mobile development', 'SaaS development', 'UX/UI', 'DevOps', 'QA', 'LMS / eLearning', 'FinTech solutions', 'Healthcare solutions'].map((item) => (
                        <label key={item} className="cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <span className="px-6 py-2 rounded-full border border-neutral-200 text-sm font-bold text-neutral-500 peer-checked:bg-[#FF6D2A] peer-checked:text-white peer-checked:border-[#FF6D2A] hover:border-[#FF6D2A] transition-all block">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-6 pt-10 border-t border-neutral-100">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="nda" className="mt-1 size-5 accent-[#FF6D2A]" />
              <label htmlFor="nda" className="text-sm text-neutral-500 leading-relaxed">
                Please send me an NDA
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="privacy" className="mt-1 size-5 accent-[#FF6D2A]" required />
              <label htmlFor="privacy" className="text-sm text-neutral-500 leading-relaxed">
                I declare that I have read the Regulations of the newsletter and accept its contents. By submitting this form, you agree to our <a href="#" className="text-[#FF6D2A] underline">Privacy Policy</a>.
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#FF6D2A] text-white font-bold rounded-[4px] hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2">
              Send message
              <Send className="size-4" />
            </button>
            <span className="text-neutral-400 font-bold uppercase text-xs">or</span>
            <button className="w-full sm:w-auto px-10 py-4 border-2 border-[#FF6D2A] text-[#FF6D2A] font-bold rounded-[4px] hover:bg-[#FF6D2A] hover:text-white transition-all flex items-center justify-center gap-2">
              <Calendar className="size-4" />
              Schedule a meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const LocationSection = () => (
  <section id="who-we-are" className="py-24 lg:py-40 overflow-hidden">
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://a.storyblok.com/f/86602/700x1050/cc3eedebf7/tomasz-czana-crop-1.png" 
              alt="Tomasz Czana" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 size-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        </div>

        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 block">Locations</span>
            <h2 className="text-[40px] font-extrabold text-[#2F3033] leading-tight">
              Get in touch <br /><span className="text-[#FF6D2A]">with us</span>
            </h2>
            <p className="text-[18px] text-[#4C4D52] leading-relaxed">
              We are based in Bulgaria and work with clients and partners worldwide. Dive deep into the heart of our vibrant culture and immerse yourself in the unique experience of our office. Feel the energy and embrace the passion that fuels our team.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 group">
              <div className="size-16 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                <MapPin className="size-8 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <h4 className="text-xl font-bold text-text-dark group-hover:text-primary transition-colors">SELLEO Bulgaria</h4>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500"
                  >
                    View on map →
                  </a>
                </div>
                <div className="text-neutral-500 leading-relaxed">
                  <p>ul. "Vitosha" 1</p>
                  <p>1000 Sofia, Bulgaria</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="size-16 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                <Mail className="size-8 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-text-dark group-hover:text-primary transition-colors">Email us</h4>
                <a href="mailto:hello@selleo.com" className="text-lg font-medium text-neutral-500 hover:text-primary transition-colors">
                  hello@selleo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MapSection = () => (
  <section id="how-we-work" className="bg-neutral-50 py-24 overflow-hidden relative">
    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FF6D2A] block">We're Here</span>
            <h2 className="text-[40px] font-extrabold text-[#2F3033] leading-tight">
              Born in Bulgaria. <br /> <span className="font-light italic text-[#FF6D2A]">Building worldwide.</span>
            </h2>
          </div>
          <p className="text-[18px] text-[#4C4D52] leading-relaxed">
            We collaborate with clients and partners around the world to deliver impactful digital products. Check the map and see where we’re already making a difference.
          </p>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="size-3 rounded-full bg-primary" />
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100">
            <img 
              src="https://selleo.com/.netlify/images?url=_astro%2FMapBoxFigma.Dt-Kvm9R.svg&w=1200&q=80" 
              alt="World Map" 
              className="w-full h-full object-cover opacity-50 grayscale"
            />
            {/* Pulsing dots for locations */}
            <div className="absolute top-1/3 left-1/2 size-4 bg-primary rounded-full animate-ping" />
            <div className="absolute top-1/3 left-1/2 size-4 bg-primary rounded-full" />
            
            <div className="absolute top-1/4 left-1/4 size-3 bg-primary/40 rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-3/4 size-3 bg-primary/40 rounded-full animate-pulse" />
            <div className="absolute top-2/3 left-1/3 size-3 bg-primary/40 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Background text */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
      <h3 className="text-[20vw] font-black whitespace-nowrap leading-none">WORLDWIDE</h3>
    </div>
  </section>
);

const SocialCollage = () => (
  <section id="careers" className="py-24 lg:py-40">
    <div className="container space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-[40px] font-extrabold text-[#2F3033]">
          Connect with us and follow <span className="text-[#FF6D2A] italic">Selleo</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 relative group overflow-hidden rounded-3xl h-[400px]">
          <img 
            src="https://a.storyblok.com/f/86602/720x254/baeb1450a0/social-media-collage-image-wide.png" 
            alt="Social" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <h4 className="text-2xl font-bold text-white mb-2">Social media @Selleo</h4>
            <p className="text-neutral-300">Join our community and stay updated with the latest tech trends.</p>
          </div>
        </div>
        <Link to="/blog" className="relative group overflow-hidden rounded-3xl h-[400px]">
          <img 
            src="https://a.storyblok.com/f/86602/344x253/4b1da77677/collage-blog.png" 
            alt="Blog" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <h4 className="text-2xl font-bold text-white">Read Our Blog</h4>
          </div>
        </Link>
        <Link to="/portfolio" className="relative group overflow-hidden rounded-3xl h-[400px]">
          <img 
            src="https://a.storyblok.com/f/86602/344x253/b7f9bbec3d/collage-portfolio.png" 
            alt="Portfolio" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <h4 className="text-2xl font-bold text-white">See our Portfolio</h4>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <Breadcrumbs />
      
      <section id="contact-form" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <img 
            src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F1920x752%2Fa0040d12f0%2Fcontact-page-image.png&w=1920&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <LocationSection />
      <MapSection />
      <section id="our-team" className="py-24 lg:py-40 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 block">Our Team</span>
            <h2 className="text-[40px] font-extrabold text-[#2F3033] leading-tight">
              Meet the <span className="text-[#FF6D2A]">Experts</span>
            </h2>
            <p className="text-[18px] text-[#4C4D52] leading-relaxed">
              Our team consists of passionate developers, designers, and strategists who are dedicated to building high-quality digital products.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 lg:py-40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 block">Testimonials</span>
            <h2 className="text-[40px] font-extrabold text-[#2F3033] leading-tight">
              What Our <span className="text-[#FF6D2A]">Clients Say</span>
            </h2>
            <p className="text-[18px] text-[#4C4D52] leading-relaxed">
              We take pride in our work and the relationships we build with our clients. Here's what some of them have to say about working with us.
            </p>
          </div>
        </div>
      </section>

      <SocialCollage />
    </div>
  );
};

export default Contact;
