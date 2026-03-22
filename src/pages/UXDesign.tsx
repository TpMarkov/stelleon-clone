import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ChevronDown, 
  ArrowRight, 
  Check, 
  Play, 
  Plus, 
  Minus, 
  Paperclip, 
  Send, 
  Calendar,
  Youtube,
  ArrowUpRight,
  Monitor,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Users,
  Brain,
  Layers,
  Database,
  Search,
  Settings,
  Clock,
  CreditCard,
  Globe,
  Code,
  BarChart3,
  Lock,
  MousePointer2,
  LayoutGrid,
  Palette,
  CheckCircle,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UXDesign = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  
  // Sticky menu items
  const menuItems = [
    { id: 'service-stages-section', title: 'Service Stages' },
    { id: 'benefits-section', title: 'Benefits' },
    { id: 'case-studies-section', title: 'Case Studies' }
  ];

  // Parallax effect for "Case Studies" background text
  const { scrollY } = useScroll();
  const caseStudiesX = useTransform(scrollY, [500, 2000], [0, -500]);
  const benefitsX = useTransform(scrollY, [2000, 4000], [500, -500]);

  return (
    <div className="pt-24 bg-white">
      {/* Sticky Sub-navigation */}
      <div className="sticky top-16 lg:top-24 z-40 w-full bg-white/90 backdrop-blur-sm border-y border-neutral-100">
        <div className="container">
          <div className="flex gap-8 py-4 lg:py-6 overflow-x-auto no-scrollbar">
            {menuItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className="whitespace-nowrap text-[15px] font-bold text-text-dark hover:text-primary transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -top-10 left-0 text-primary opacity-20">
                <svg width="80" height="80" viewBox="0 0 23 26" fill="none">
                  <path stroke="currentColor" strokeWidth="4" d="M20.05 14.72 4.73 23.75C3.6 24.42 2 23.64 2 22.03V3.97c0-1.6 1.6-2.39 2.73-1.72l15.32 9.03a2.03 2.03 0 0 1 0 3.44Z" />
                </svg>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-text-dark leading-[0.9] tracking-tighter">
                UX/UI<br />
                <span className="text-primary">That Makes<br />a Difference</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-neutral-600 max-w-lg leading-tight border-b border-neutral-200 pb-8">
              Let us help you create a product that is both visually appealing and easy to use.
            </p>
            
            <div className="space-y-6">
              <p className="text-sm text-neutral-400 font-bold uppercase tracking-widest">Global brands benefit from digital products we've developed:</p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-40 grayscale">
                {[
                  'https://a.storyblok.com/f/86602/176x52/0214667cc7/alyne-dark.png',
                  'https://a.storyblok.com/f/86602/112x53/217337caf5/squad-locker-dark.png',
                  'https://a.storyblok.com/f/86602/145x38/3c518f3655/9teams-dark.png',
                  'https://a.storyblok.com/f/86602/128x56/d7db557b4c/humly-dark.png',
                  'https://a.storyblok.com/f/86602/176x38/94c79b7111/brand-actif-dark.png'
                ].map((src, i) => (
                  <img key={i} src={src} alt="Brand" className="h-6 object-contain" referrerPolicy="no-referrer" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] lg:aspect-square">
            <div className="absolute inset-0 bg-neutral-100 rounded-3xl overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src="https://cdn.selleo.com/videos/selleo_homepage_preview.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-24 rounded-full border-2 border-white/30 flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all">
                  <Play className="size-10 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies-section" className="relative py-32 overflow-hidden">
        {/* Parallax Watermark */}
        <motion.div 
          style={{ x: caseStudiesX }}
          className="absolute top-20 left-0 whitespace-nowrap text-[15vw] font-black text-neutral-100/50 pointer-events-none select-none uppercase"
        >
          Case Studies Case Studies Case Studies
        </motion.div>

        <div className="container relative z-10">
          <div className="flex flex-col gap-4 mb-20">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">UX/UI DESIGN</span>
            <div className="flex items-start gap-6">
              <div className="pt-4">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="text-primary">
                  <path d="M44.9304 7.06976L4 48.0002" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.33362 4L47.7105 4.28467L48.001 44.6673" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-7xl lg:text-9xl font-black text-text-dark uppercase tracking-tighter">
                Case<br />Studies
              </h2>
            </div>
          </div>

          <div className="space-y-40">
            {/* Datagame */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-dark">Datagame</h3>
                <p className="text-neutral-400">UX, Design</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#e4c7eb] via-white to-[#e8c2ad] p-12">
                  <img 
                    src="https://a.storyblok.com/f/86602/841x899/2f5814a206/ux_datagame_1.png" 
                    alt="Datagame" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#e4c7eb] via-white to-[#e8c2ad] p-12">
                  <img 
                    src="https://a.storyblok.com/f/86602/3840x2616/782866ea0e/ux_datagame_2.png" 
                    alt="Datagame UI" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:col-span-2 aspect-video rounded-3xl overflow-hidden">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="https://a.storyblok.com/f/86602/x/de1f9476e6/ux_datagame_3.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            {/* Fingerprints */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-dark">Fingerprints</h3>
                <p className="text-neutral-400">UX, Design</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#46bcaf] to-[#2e006a] p-12">
                  <img 
                    src="https://a.storyblok.com/f/86602/1255x1003/eab975f10f/ux_fingerprints_1.png" 
                    alt="Fingerprints" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img 
                    src="https://a.storyblok.com/f/86602/1600x1200/2758d2531a/ux_fingerprints_2.png" 
                    alt="Fingerprints UI" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Stages Section */}
      <section id="service-stages-section" className="py-32 bg-neutral-50 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">UX/UI DESIGN</span>
                <h2 className="text-5xl lg:text-7xl font-black text-text-dark leading-none uppercase tracking-tighter">
                  Designing<br />new products
                </h2>
              </div>
              
              <div className="space-y-16">
                <div className="space-y-8">
                  <p className="text-xl text-neutral-600 leading-relaxed">
                    Comprehensive user and market analysis sets the foundation for every project. Your audience's unique needs and the competitive landscape form the bedrock of our design strategy.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Comprehensive understanding of your unique audience',
                      'In-depth examination of the competitive landscape',
                      'The foundation of an effective design strategy'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-text-dark font-bold">
                        <div className="size-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-8">
                  <p className="text-xl text-neutral-600 leading-relaxed">
                    The designers at webDevBg work closely with developers, facilitating an early start to the coding process. This unique, time-efficient approach ensures a smoother transition from design to code.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Preparation of a reusable design system for time efficiency',
                      'User-centric design ready for the development team',
                      'The implementation of the presentation layer (CSS/HTML)'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-text-dark font-bold">
                        <div className="size-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-40 space-y-12">
                <div className="p-12 bg-white rounded-[3rem] shadow-xl space-y-8 border border-neutral-100">
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <LayoutGrid className="size-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-text-dark leading-tight">
                    Business Idea Validation & Design Prototype
                  </h3>
                  <ul className="space-y-4">
                    {['Understanding unique audience', 'Competition examination', 'Design strategy'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-neutral-500">
                        <CheckCircle className="size-5 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-12 bg-white rounded-[3rem] shadow-xl space-y-8 border border-neutral-100">
                  <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Palette className="size-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-text-dark leading-tight">
                    Complete UX/UI application design
                  </h3>
                  <ul className="space-y-4">
                    {['Reusable design', 'Design ready for development', 'Implement into HTML'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-neutral-500">
                        <CheckCircle className="size-5 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits-section" className="relative py-32 overflow-hidden">
        <motion.div 
          style={{ x: benefitsX }}
          className="absolute top-20 left-0 whitespace-nowrap text-[15vw] font-black text-neutral-100/50 pointer-events-none select-none uppercase"
        >
          Benefits Benefits Benefits Benefits
        </motion.div>

        <div className="container relative z-10">
          <div className="flex flex-col gap-4 mb-20">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">UX/UI DESIGN</span>
            <div className="flex items-start gap-6">
              <div className="pt-4">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="text-primary">
                  <path d="M44.9304 7.06976L4 48.0002" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.33362 4L47.7105 4.28467L48.001 44.6673" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-7xl lg:text-9xl font-black text-text-dark uppercase tracking-tighter">
                Benefits
              </h2>
            </div>
            <p className="text-xl text-neutral-600 max-w-2xl mt-8">
              We transform your visions into compliant software solutions tailored for growth & efficiency. We know tools and environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: '100:1 ROI', sub: '$1 invested equals $100 return', img: 'https://a.storyblok.com/f/86602/270x270/090a53194b/ux-benefits-1.png' },
              { label: '50% Faster delivery', sub: 'with usability requirements', img: 'https://a.storyblok.com/f/86602/270x271/e75e1150d9/ux-benefits-2.png' },
              { label: '75% brand credibility', sub: 'is based on aesthetics', img: 'https://a.storyblok.com/f/86602/270x271/d41d0ebd35/ux-benefits-3.png' },
              { label: '86% users pay more', sub: 'for products with better UX', img: 'https://a.storyblok.com/f/86602/270x271/5b8cdff93a/ux-benefits-4.png' }
            ].map((benefit, i) => (
              <div key={i} className="space-y-6 group">
                <div className="relative size-48 lg:size-64 mx-auto">
                  <div className="absolute inset-0 bg-primary rounded-full translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  <img 
                    src={benefit.img} 
                    alt={benefit.label}
                    className="relative size-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-text-dark group-hover:text-primary transition-colors">
                    {benefit.label}
                  </h3>
                  <p className="text-neutral-500 font-bold">{benefit.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Benefits List */}
          <div className="mt-40 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-black text-text-dark leading-tight">
                Increase <span className="text-primary">sales</span>, improve customer satisfaction, and strengthen <span className="text-primary">brand reputation</span> with our UX/UI design service.
              </h3>
              <div className="space-y-12">
                {[
                  { title: 'Validate your ideas', desc: 'This step minimizes risks and sets the foundation for a successful project.' },
                  { title: 'Increase satisfaction', desc: "A well-designed user interface doesn't just look good - it feels good to use!" },
                  { title: 'Improve efficiency', desc: 'Efficient and well-thought UX design simplifies processes and keeps a user more engaged.' },
                  { title: 'Enhance usability', desc: 'A design that is easy to navigate and understand is a key in turning potential customers into loyal users.' },
                  { title: 'Boost engagement', desc: "Interactive designs grab user's attention and direct them where they're most likely to convert." },
                  { title: 'Rise conversion rates', desc: 'With our UX/UI design services, watch your key performance indicators rise to unprecedented levels.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="size-12 rounded-full border-2 border-primary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <div className="size-2 rounded-full bg-primary group-hover:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-text-dark">{item.title}</h4>
                      <p className="text-neutral-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-[500px] rounded-full border border-dashed border-neutral-300 animate-spin-slow" />
              </div>
              <div className="relative z-10 size-[600px] mx-auto rounded-full bg-neutral-50 flex items-center justify-center">
                <Palette className="size-40 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-32 bg-black text-white overflow-hidden relative">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary block">CONTACT US</span>
              <h2 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                Share your vision.<br />
                <span className="text-primary">We'll build the solution!</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-xl leading-relaxed">
                We help education and SaaS platforms unlock AI potential — from personalized learning engines that adapt to 50k+ students, to AI-powered chatbots and conversational assistants that scale support.
              </p>
              <div className="flex -space-x-4">
                {[
                  'https://a.storyblok.com/f/86602/104x104/d301aa2881/avatar-dawid-poslinski.png',
                  'https://a.storyblok.com/f/86602/104x104/d128e53b11/avatar-marysia.png',
                  'https://a.storyblok.com/f/86602/104x104/545f68bda2/avatar-maciej.png'
                ].map((src, i) => (
                  <img key={i} src={src} alt="Team" className="size-16 rounded-full border-4 border-black object-cover" referrerPolicy="no-referrer" />
                ))}
              </div>
            </div>

            <div className="bg-neutral-900 p-12 lg:p-16 rounded-[3rem] space-y-10">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-neutral-500">Name *</label>
                    <input type="text" placeholder="Name Surname" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-primary outline-none transition-colors text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-neutral-500">E-mail *</label>
                    <input type="email" placeholder="name.surname@company.com" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-primary outline-none transition-colors text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-500">Project description *</label>
                  <textarea placeholder="Our goal is to launch / improve / scale a product that..." className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-primary outline-none transition-colors text-white resize-none" rows={1} />
                </div>
                <div className="flex items-center gap-4 p-6 border-2 border-dashed border-neutral-700 rounded-2xl hover:border-primary transition-colors cursor-pointer group">
                  <Paperclip className="size-6 text-neutral-500 group-hover:text-primary" />
                  <span className="text-neutral-500 group-hover:text-primary font-bold">Attach File</span>
                </div>
                <button className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
                  Send message
                  <Send className="size-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="546" height="1055" viewBox="0 0 546 1055" fill="none" className="text-white">
            <path d="M545.577 1054.62L543.231 1054.62L543.231 272.974C543.239 123.96 421.995 2.7241 272.981 2.72412C123.967 2.72415 2.72367 123.96 2.7237 272.974L2.72384 1054.62L0.378114 1054.62L0.377977 272.974C0.377951 122.666 122.666 0.378427 272.981 0.378401C423.297 0.378375 545.584 122.666 545.584 272.974L545.585 1054.62L545.577 1054.62Z" fill="currentColor" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default UXDesign;
