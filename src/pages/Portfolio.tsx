import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Play, ArrowRight, Filter } from 'lucide-react';

const Breadcrumbs = () => (
  <div className="py-8">
    <div className="container">
      <ol className="flex items-center gap-4 text-sm text-neutral-400">
        <li>
          <Link to="/" className="flex items-center gap-2 hover:text-neutral-600 transition-colors">
            <Home className="size-4" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-4 before:content-[''] before:w-px before:h-4 before:bg-neutral-300">
          <span className="text-neutral-600 font-medium">Portfolio</span>
        </li>
      </ol>
    </div>
  </div>
);

const VideoHero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    {
      url: "https://cdn.selleo.com/Kristoffer_Persson_testimonial_interview_preview.mp4",
      title: "Kristoffer Persson",
      role: "CTO at Exegov"
    },
    {
      url: "https://cdn.selleo.com/Manuel_Reil_testimonial_interview_preview.mp4",
      title: "Manuel Reil",
      role: "Founder at Datagame"
    },
    {
      url: "https://cdn.selleo.com/Jan_Fredrik_Korsmo_testimonial_interview_preview.mp4",
      title: "Jan Fredrik Korsmo",
      role: "CEO at Humly"
    }
  ];

  return (
    <section className="pb-20 lg:pb-48 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="flex-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <h1 className="text-text-dark !text-5xl lg:!text-[92px] font-black leading-[0.85] tracking-tighter">
                Take a look at our <br />
                <span className="text-primary">inspiring projects</span> <br />
                delivered since 2005
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <img src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F32x32%2F720640503f%2Fsmiley-face-message.png&w=32&h=32" alt="smiley" className="size-8" />
                <div className="h-px flex-1 bg-neutral-200" />
              </div>
              <p className="text-xl text-neutral-500 leading-relaxed max-w-xl font-medium">
                We are serving CTOs and entrepreneurs by bringing to life digital products that changed the world. We helped our clients to launch web & mobile apps that thrive.
              </p>
              <div className="pt-4">
                <button className="btn-primary group !px-10 !py-4">
                  <span>Tell us about your project</span>
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-2xl relative group"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-custom shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] relative bg-neutral-900">
              <AnimatePresence mode="wait">
                <motion.video
                  key={currentVideo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="size-full object-cover opacity-80"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={videos[currentVideo].url} type="video/mp4" />
                </motion.video>
              </AnimatePresence>
              
              <div className="absolute inset-0 flex flex-col justify-between p-12">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white text-xs font-black uppercase tracking-widest">Testimonial</span>
                  </div>
                  <div className="size-16 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Play className="size-6 text-primary fill-primary ml-1" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <motion.h3 
                    key={`title-${currentVideo}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-black text-white"
                  >
                    {videos[currentVideo].title}
                  </motion.h3>
                  <motion.p 
                    key={`role-${currentVideo}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/60 font-bold uppercase tracking-widest text-xs"
                  >
                    {videos[currentVideo].role}
                  </motion.p>
                </div>
              </div>
              
              {/* Slider Controls */}
              <div className="absolute bottom-8 right-8 flex items-center gap-4">
                <div className="flex gap-2">
                  {videos.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setCurrentVideo(i)}
                      className={`h-1 transition-all duration-500 rounded-full ${currentVideo === i ? 'bg-primary w-8' : 'bg-white/30 w-4'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: any;
  index: number;
}

const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const imageVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  return (
    <section ref={containerRef} className={`py-24 lg:py-48 overflow-hidden relative ${isEven ? 'bg-neutral-100' : 'bg-white'}`}>
      <div className="container relative z-10">
        <div className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          <div className="flex-1 relative w-full">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
              className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)] group cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="size-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white text-primary px-12 py-5 rounded-full font-extrabold uppercase tracking-[0.2em] text-[11px] transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                  View Case Study
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="flex-1 space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-primary"></span>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">Featured Project</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-text-dark !text-4xl lg:!text-[72px] font-black leading-[1] tracking-tighter">
              {project.headline}
            </h2>
            <p className="text-xl text-neutral-500 leading-relaxed font-medium max-w-lg">
              {project.description}
            </p>
            <div className="pt-6">
              <Link 
                to={`/portfolio/${project.slug}`} 
                className="inline-flex items-center gap-4 text-text-dark font-black uppercase tracking-widest text-sm group"
              >
                <span className="relative">
                  Case study
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </span>
                <div className="size-10 rounded-full border-2 border-neutral-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ArrowRight className="size-4 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Parallax background text */}
      <motion.div 
        style={{ y: yText }}
        className={`absolute top-1/2 ${isEven ? '-left-24' : '-right-24'} -translate-y-1/2 text-[240px] font-black text-black/[0.03] select-none pointer-events-none hidden xl:block whitespace-nowrap uppercase tracking-tighter`}
      >
        {project.title}
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: 'Exegov',
      slug: 'exegov-ai',
      headline: 'Platform with AI designed for businesses',
      description: 'Platform with AI designed for businesses. Its main purpose is to automatically help companies in preparing a comprehensive business plan. Initially, the user is guided through a series of questions about their company, and with the use of OpenAI, the application provides answers.',
      image: 'https://a.storyblok.com/f/86602/1870x1052/a3abfa952b/exegov_1.webp',
      tags: ['collaboration', 'SaaS', 'hrm', 'ai', 'react', 'node', 'uxui', 'postgresql']
    },
    {
      title: 'Defined Learning',
      slug: 'online-learning-platform',
      headline: 'Defined Careers K–12 is a online learning platform',
      description: 'Groundbreaking eLearning platform helps students to find the right path for their careers. 600+ projects, 400+ careers, reporting and assessments.',
      image: 'https://a.storyblok.com/f/86602/1920x1080/d30d933011/portfolio-defined-desktop-new.png',
      tags: ['lms', 'ai', 'ror', 'react']
    },
    {
      title: 'Multi-Agent L&D',
      slug: 'multi-agent-ai-platform',
      headline: 'Collaborative AI-Powered Training Platform',
      description: 'A revolutionary platform that enables organizations to create tailored, ready-to-deploy training programs. Powered by collaborative AI agents, it delivers complete learning experiences—from onboarding and skill-building to leadership development.',
      image: 'https://a.storyblok.com/f/86602/5760x4096/eaf3a019a0/multi-agent-l-d-platform-preview-2.webp',
      tags: ['ai', 'lms', 'ror', 'react']
    },
    {
      title: 'Qstream',
      slug: 'microlearning-software',
      headline: 'Engaging Microlearning Application',
      description: 'Qstream is a microlearning solution proven by science and in practice to boost learner performance through knowledge reinforcement, engagement, and analytics.',
      image: 'https://a.storyblok.com/f/86602/1920x1080/bb0cfbb9bc/qstream-hero-bigger.png',
      tags: ['lms', 'ai', 'react']
    },
    {
      title: 'Datagame',
      slug: 'datagame',
      headline: 'Gamified, survey-like experiences',
      description: 'Datagame is a platform that allows integrating elements of gamification into surveys. Our team created a customizable web and mobile platform with a user-friendly interface that enables multiple interactions across the platform.',
      image: 'https://a.storyblok.com/f/86602/1111x687/2dc1b17afe/datagame_hero_desktop.png',
      tags: ['lms', 'SaaS', 'ror', 'react']
    },
    {
      title: 'Skumani',
      slug: 'skumani',
      headline: 'AI-Powered EdTech Ecosystem',
      description: 'For the educational startup Skumani, in partnership with Poland’s market-leading education provider, the Żak Center for Science and Business, we built from scratch a revolutionary EdTech platform that transforms primary school learning and preparation for the eighth-grade exam into an engaging experience.',
      image: 'https://a.storyblok.com/f/86602/2571x1438/deed4364f2/skumani-outcome-3.webp',
      tags: ['ai', 'lms', 'react', 'node']
    },
    {
      title: 'Humly',
      slug: 'recruitment-software',
      headline: 'Digital marketplace for teachers',
      description: 'Innovative recruitment platform crafted to redesigning teachers\' employment process. Check how the digital marketplace can change the hiring process.',
      image: 'https://a.storyblok.com/f/86602/968x543/a0b1082174/humly_desktop_view.png',
      tags: ['hrm', 'ai', 'ror', 'react', 'mobile']
    },
    {
      title: 'Stratify.ai',
      slug: 'ai-business-strategy-tool',
      headline: 'AI-driven business strategy tool',
      description: 'Stratify is an AI-driven platform that helps entrepreneurs and teams create, organize, and grow their businesses with clarity and focus. It transforms complex ideas into actionable strategies, guiding users from concept to execution.',
      image: 'https://a.storyblok.com/f/86602/2880x1620/622dee7da9/stratify-thumbnail.webp',
      tags: ['ai', 'ror', 'react']
    },
    {
      title: 'Finpay',
      slug: 'compliance-management-software',
      headline: 'RegTech SaaS platform',
      description: 'Confidently navigate the GRC space with custom compliance management software. Mature cyber security, compliance capabilities and risk management.',
      image: 'https://a.storyblok.com/f/86602/967x544/9ae790fe22/finpay_desktop.png',
      tags: ['SaaS', 'FinTech', 'ai', 'node', 'ember']
    },
    {
      title: 'Catalyst',
      slug: 'hipaa-compliant-communication-platform',
      headline: 'HIPAA-compliant video conferencing',
      description: 'Improve clinical collaboration with HIPAA compliant communication platform while protecting patient data and ensure more efficient and effective medical care.',
      image: 'https://a.storyblok.com/f/86602/1920x1080/afbc6418ac/catalyst_components.png',
      tags: ['healthcare', 'ror', 'react', 'mobile']
    },
    {
      title: 'Brandactif',
      slug: 'visual-commerce-graphql-api',
      headline: 'AI-powered visual commerce app',
      description: 'BrandActif is a visual commerce progressive web application powered with GraphQL API.',
      image: 'https://a.storyblok.com/f/86602/1920x1080/576f35cb72/brandactif_hero_desktop.png',
      tags: ['SaaS', 'ai', 'ror', 'react']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  const filters = ['All', 'FinTech', 'E-Learning/LMS', 'HealthCare', 'HRM', 'SaaS', 'E-commerce', 'Real Estate', 'Collaboration', 'AI'];

  return (
    <div className="pt-16 md:pt-20 lg:pt-24 min-h-screen bg-background">
      <Breadcrumbs />
      <VideoHero />
      
      <div className="space-y-0">
        {projects.slice(0, 6).map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-black py-24 lg:py-36 text-white overflow-hidden relative">
        <div className="container relative z-10 text-center mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="text-sm font-black uppercase tracking-widest text-neutral-400">our work</span>
            <h2 className="text-white !text-4xl lg:!text-6xl leading-tight">
              Over 200+ successful solutions delivered to clients from various industries like EdTech, HRM, FinTech, and Healthcare.
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Find out how we helped businesses reach their goals and scale faster.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact with us
            </Link>
          </div>
        </div>
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-1/4" />
      </section>

      {/* All Projects Grid */}
      <section id="portfolio-more-projects" className="py-32 bg-neutral-100 overflow-hidden">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-text-dark">
                All projects by <span className="text-primary">WebDevBG</span>
              </h3>
              <p className="text-neutral-500 font-medium">Explore our full range of digital solutions across industries.</p>
            </div>
            <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-neutral-500 font-bold text-sm">Filter</span>
              <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white">
                <Filter className="size-4" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-24"
          >
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-10 py-4 rounded-full text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeFilter === filter 
                    ? 'bg-primary text-white shadow-[0_20px_40px_-12px_rgba(255,109,42,0.4)] scale-105' 
                    : 'bg-white text-neutral-500 hover:bg-neutral-200 hover:text-text-dark'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  key={project.slug}
                  className="group flex flex-col bg-white rounded-custom overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-10 flex-grow flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[9px] font-black text-neutral-400 uppercase tracking-widest border border-neutral-200 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-2xl font-black text-text-dark group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-neutral-500 text-base line-clamp-3 font-medium leading-relaxed">
                      {project.description}
                    </p>
                    <Link to={`/portfolio/${project.slug}`} className="mt-auto pt-6 flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group/link">
                      <span>View Case Study</span>
                      <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-text-dark text-white relative overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" 
        />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="space-y-10"
            >
              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                Have a project in mind? <br />
                <span className="text-primary">Let's build something great.</span>
              </h2>
              <p className="text-xl text-neutral-400 font-medium max-w-2xl leading-relaxed">
                We help companies build high-quality software solutions that drive growth and innovation. 
                Our team of experts is ready to turn your vision into reality.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="group bg-primary text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-primary/20">
                  Start a project
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/services" className="group border-2 border-white/20 text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-text-dark transition-all duration-300">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="portfolio-contact" className="py-32 bg-white relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-5xl font-black text-text-dark leading-tight">
                  Ready to <span className="text-primary">elevate</span> your digital presence?
                </h2>
                <p className="text-neutral-500 text-lg font-medium leading-relaxed">
                  Join 150+ companies that trusted WebDevBG with their software development. 
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">Email us</h4>
                  <p className="text-xl font-bold text-text-dark hover:text-primary transition-colors cursor-pointer">webddevstudiohq@gmail.com</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">Call us</h4>
                  <p className="text-xl font-bold text-text-dark hover:text-primary transition-colors cursor-pointer">0899820540</p>
                </div>
              </div>

              <div className="pt-10 border-t border-neutral-100">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="size-12 rounded-full border-4 border-white overflow-hidden bg-neutral-200">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="size-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-neutral-500">
                    Trusted by <span className="text-text-dark">150+</span> global partners
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-neutral-50 p-12 rounded-custom shadow-2xl relative"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white border-2 border-neutral-100 rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all font-medium" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white border-2 border-neutral-100 rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all font-medium" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Company"
                    className="w-full bg-white border-2 border-neutral-100 rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">Project Details</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border-2 border-neutral-100 rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-text-dark transition-all duration-300 shadow-xl shadow-primary/20">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
