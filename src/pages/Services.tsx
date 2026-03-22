import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Home, ChevronRight, Smartphone, Cpu, Code, Globe, Search, Palette, CheckCircle, Settings, Users, Rocket, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesHero = () => (
  <section className="relative mb-20 pt-36 lg:mb-48 lg:pt-48 bg-white">
    <div className="container flex flex-col gap-12 lg:flex-row items-center">
      <div className="flex-1 text-[#2F3033]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-[72px] font-bold leading-tight mb-12"
        >
          <span className="text-[#FF6D2A]">Scale your development,</span> design and build great apps!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a href="#contact" className="inline-flex items-center justify-center rounded-custom bg-[#FF6D2A] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-600">
            Consult experts
          </a>
        </motion.div>
      </div>
      <motion.figure 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="flex-1 rounded-2xl overflow-hidden shadow-2xl"
      >
        <img 
          src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F4096x2731%2Fdedad98f0f%2Fpexels-artempodrez.jpg&w=1200&h=800" 
          alt="Services Hero" 
          className="w-full h-full object-cover"
        />
      </motion.figure>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description, href }: any) => (
  <div className="group relative flex flex-col rounded-custom bg-neutral-100 p-8 transition-all hover:bg-[#FF6D2A] hover:text-white">
    <Icon className="mb-4 size-12 text-[#FF6D2A] group-hover:text-white transition-colors" />
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-neutral-600 group-hover:text-white">
        <Link to={href} className="before:absolute before:inset-0 before:content-['']">
          {title}
        </Link>
      </h3>
      <p className="text-neutral-500 group-hover:text-white/90 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const ServicesGrid = () => {
  const services = [
    { icon: Smartphone, title: 'Mobile', description: 'We create custom, secure, and scalable apps tailored to your business needs, growing with you.', href: '/services' },
    { icon: Cpu, title: 'AI', description: 'Automate processes and enhance customer experience, giving your SaaS a competitive edge.', href: '/services' },
    { icon: Code, title: 'Custom Software', description: 'We help SMEs build custom software to gain a competitive edge and deliver unique solutions.', href: '/services/custom-software' },
    { icon: Globe, title: 'SaaS', description: 'We handle all SaaS development, delivering reliable solutions for business growth and innovation.', href: '/services/saas' },
    { icon: Search, title: 'Product', description: 'Turn your idea into reality with our expert team, guiding you through research and development.', href: '/services' },
    { icon: Palette, title: 'UX/UI', description: 'Create engaging UX/UI that captivates users and drives business success from start to finish.', href: '/services/ux-design' },
    { icon: CheckCircle, title: 'QA', description: 'Detect and fix issues early with our flexible QA services, tailored to complex projects.', href: '/services' },
    { icon: Settings, title: 'DevOps', description: 'We set up DevOps environments for optimal performance, using cloud or on-prem infrastructure.', href: '/services' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <span className="text-sm font-black uppercase tracking-widest text-[#FF6D2A] mb-4 block">Services</span>
          <h2 className="text-[#2F3033] mb-8">Seamless Collaboration, Strategic Results</h2>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
            We all speak English and work from a single location. Our accessibility and strategic feedback ensure broadband communications, productivity and efficient delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const steps = [
    { id: '01', title: 'Tell us about your project', desc: "Let's gather your requirements, analyse and identify your business idea to explore how we can help you." },
    { id: '02', title: 'Call with Technical Lead', desc: 'Receive an estimation of the workload and cost of your project. It’s all about exchanging ideas.' },
    { id: '03', title: 'Team Interview', desc: "If everything goes well, we make sure you get a team best-suited for your project requirements." },
    { id: '04', title: 'Kick off', desc: 'Define goals, assign roles and responsibilities, and set project timelines for success.' }
  ];

  return (
    <section className="py-20 lg:py-36 bg-neutral-50">
      <div className="container">
        <h2 className="mb-16 text-[#2F3033]">Understand how we <strong>start collaboration</strong></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative pt-12 border-t border-neutral-300">
              <span className="absolute top-0 left-0 text-5xl font-black text-neutral-200 -translate-y-1/2">{step.id}</span>
              <div className="absolute top-0 left-0 size-3 bg-[#FF6D2A] rounded-full -translate-y-1/2" />
              <h3 className="text-xl font-bold text-neutral-600 mb-4">{step.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactWithImage = () => (
  <section id="contact" className="bg-black text-white flex flex-col lg:flex-row min-h-[800px]">
    <div className="hidden lg:block lg:w-1/2">
      <img 
        src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F778x576%2Fa51b48ff59%2Fcontact-developers.jpg&w=1200" 
        alt="Contact" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 p-10 lg:p-24 flex flex-col justify-center">
      <div className="max-w-xl">
        <span className="text-sm font-black uppercase tracking-widest text-[#FF6D2A] mb-4 block">Contact us</span>
        <h2 className="text-white mb-12">Tell us about your project</h2>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">Name *</label>
              <input type="text" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-[#FF6D2A] outline-none transition-colors" placeholder="Name Surname" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">E-mail *</label>
              <input type="email" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-[#FF6D2A] outline-none transition-colors" placeholder="name@company.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">Project description *</label>
            <textarea className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-[#FF6D2A] outline-none transition-colors min-h-[120px]" placeholder="Our goal is to launch / improve / scale a product that..." />
          </div>
          <button className="inline-flex items-center justify-center rounded-custom bg-[#FF6D2A] px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-600 w-full md:w-auto">
            Send message
          </button>
        </form>
      </div>
    </div>
  </section>
);

const IndustriesGrid = () => {
  const industries = [
    { title: 'Business Training', icon: 'https://a.storyblok.com/f/329594/40x40/584aaf0e61/business-training.svg' },
    { title: 'Virtual Classroom', icon: 'https://a.storyblok.com/f/329594/40x40/c4ac3f03bc/virtual-classroom-icon.svg' },
    { title: 'Learning Experience', icon: 'https://a.storyblok.com/f/329594/32x32/c2e308e83c/learning-experience-icon.svg' },
    { title: 'LMS', icon: 'https://a.storyblok.com/f/329594/40x40/5b6271ee4b/lms-alt-icon.svg' },
    { title: 'Education', icon: 'https://a.storyblok.com/f/329594/40x40/294e02b13b/education-icon.svg' },
    { title: 'Gamification', icon: 'https://a.storyblok.com/f/329594/24x24/3f3ada3e6e/gamification-software.svg' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-neutral-100">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <span className="text-sm font-black uppercase tracking-widest text-[#4F46E5] block">Industries</span>
            <h2 className="text-[#2F3033]">Agile Solutions, Empowered Clients</h2>
            <div className="space-y-6 text-lg text-neutral-500 leading-relaxed">
              <p className="font-bold text-neutral-600">Inspire learners with an LMS designed to solve their problems.</p>
              <p>Create, deliver, and track tailored training programs that align with your business goals. We help teams extend their capabilities through strategic technology.</p>
            </div>
            <Link to="/contact" className="btn-primary bg-[#FF6D2A]">
              Engage Team
            </Link>
          </div>
          
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="aspect-square bg-white border border-neutral-200 p-6 flex flex-col items-center justify-center text-center group hover:border-[#4F46E5] transition-colors cursor-pointer">
                <img src={ind.icon} alt={ind.title} className="size-10 mb-4 grayscale group-hover:grayscale-0 transition-all" />
                <h3 className="text-sm font-bold text-neutral-400 group-hover:text-black transition-colors">{ind.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechList = () => {
  const techs = [
    { name: 'React', icon: 'https://a.storyblok.com/f/329594/24x24/5b0af0117f/react.svg' },
    { name: 'Node (+NestJS)', icon: 'https://a.storyblok.com/f/329594/24x24/2d195b8ed8/node-js.svg' },
    { name: 'React Native', icon: 'https://a.storyblok.com/f/329594/24x24/5b0af0117f/react.svg' },
    { name: 'Ruby on Rails', icon: 'https://a.storyblok.com/f/329594/24x24/cbdf68764b/ruby.svg' },
    { name: 'Ember', icon: 'https://a.storyblok.com/f/329594/24x24/bc7c44db22/ember.svg' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="flex-1 space-y-8">
            <span className="text-sm font-black uppercase tracking-widest text-[#4F46E5] block">Technology</span>
            <h2 className="text-[#2F3033]">Fast-Track Your Vision</h2>
            <p className="text-xl text-neutral-500 leading-relaxed">
              Leverage our up-to-date technical skills, quality coding, and expertise in custom software development. We’re here to help bring your vision to life.
            </p>
            <Link to="/contact" className="btn-primary bg-[#FF6D2A]">
              Consult Experts
            </Link>
          </div>
          
          <div className="flex-1 w-full space-y-2">
            {techs.map((tech, i) => (
              <div key={i} className="group relative flex items-center gap-6 p-6 bg-neutral-100 rounded-custom hover:bg-[#FF6D2A] hover:text-white transition-all cursor-pointer">
                <img src={tech.icon} alt={tech.name} className="size-8 group-hover:brightness-0 group-hover:invert transition-all" />
                <span className="text-xl font-bold">{tech.name}</span>
                <ArrowRight className="ml-auto size-5 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="bg-[#F4F5F5]">
      {/* Breadcrumbs */}
      <div className="container pt-24 lg:pt-32">
        <nav className="flex items-center space-x-4 text-sm text-neutral-400">
          <Link to="/" className="flex items-center hover:text-neutral-600">
            <Home className="size-4 mr-2" />
            Home
          </Link>
          <ChevronRight className="size-4" />
          <span className="text-neutral-600">Services</span>
        </nav>
      </div>

      <ServicesHero />
      <ServicesGrid />
      <IndustriesGrid />
      <TechList />
      <Timeline />
      <ContactWithImage />
    </div>
  );
};

export default Services;

