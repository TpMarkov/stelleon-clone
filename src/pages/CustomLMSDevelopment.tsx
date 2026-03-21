import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  Plus, 
  Minus, 
  Play, 
  Youtube, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook,
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
  FileText,
  Users,
  Award,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  Layers,
  MessageSquare,
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomLMSDevelopment = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { label: 'Delivered Projects', value: '150', suffix: '+', icon: <Layers className="size-8 text-primary" /> },
    { label: 'Years of experience', value: '18', suffix: '+', icon: <Clock className="size-8 text-primary" /> },
    { label: 'Certificates & awards', value: '20', suffix: '+', icon: <Award className="size-8 text-primary" /> },
  ];

  const features = [
    {
      title: 'Content creation and management',
      items: [
        'Comprehensive content creation tools for your learning management system',
        'Import functionality for seamless content integration',
        'Engaging interactive videos'
      ],
      icon: 'FileText',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Course creation and management',
      items: [
        'LMS development services including course builders',
        'Course categories',
        'Efficient course and unit cloning',
        'Easy drag-and-drop online course management',
        'Setting course prerequisites',
        'Certification management'
      ],
      icon: 'BookOpen',
      color: 'bg-neutral-100',
      span: 'row-span-3'
    },
    {
      title: 'Account management',
      desc: 'Features that are crucial from user perspective:',
      items: [
        'Multi-factor authentication',
        'Granular user permissions',
        'Prevention of simultaneous logins'
      ],
      icon: 'UserCheck',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Online learning management',
      items: [
        'Efficient assignment and enrollment of learners',
        'Scheduling of training sessions',
        'Detailed tracking of training activities',
        'Automated alerts and notifications'
      ],
      icon: 'Monitor',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'AI tools',
      items: [
        'Advanced content curation',
        'Personalized learning paths',
        'Chatbots for enhanced learning'
      ],
      icon: 'Sparkles',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Assessments',
      items: [
        'Diverse assignments',
        'Test builders',
        'Comprehensive question repository',
        'Polls and quizzes'
      ],
      icon: 'Target',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Gamification',
      items: [
        'Avatars',
        'Badges',
        'Levels',
        'Points',
        'In-app currency',
        'Leaderboards',
        'Competitions',
        'Mini-games'
      ],
      icon: 'Zap',
      color: 'bg-neutral-100',
      span: 'row-span-3'
    },
    {
      title: 'External integrations',
      items: [
        'Unlimited file storage capabilities',
        'Extensive library of pre-made content',
        'Virtual classroom integration',
        'Implementing time limits'
      ],
      icon: 'Layers',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Mobile learning',
      items: [
        'Microlearning',
        'Branded elearning mobile apps',
        'Synchronization with LMS backend'
      ],
      icon: 'Smartphone',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Security',
      items: [
        'Secure SSL certificates and HTTPS',
        'Robust password strength checker',
        'GDPR compliance for data protection'
      ],
      icon: 'Shield',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Reporting and tracking system',
      items: [
        'Real-time reporting capabilities',
        'Customizable reports',
        'Data visualization tools',
        'Data analytics tools'
      ],
      icon: 'BarChart3',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'All in one',
      items: [
        'Full development',
        'UX/UI',
        'QA'
      ],
      icon: 'CheckCircle2',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: '+ Custom feature',
      items: [
        'Your custom feature tailored to specific business needs',
        'Integration with existing systems',
        'Scalability options.'
      ],
      icon: 'Plus',
      color: 'bg-neutral-100',
      span: 'row-span-2'
    }
  ];

  const industryTabs = [
    {
      title: 'Business / Corporate Training Software',
      desc: 'Enhance employee knowledge and performance by delivering training in a way that is tailored specifically towards your business goals.',
      benefits: [
        'Faster employee onboarding',
        'Increased training coverage',
        'Enhanced training efficiency',
        'Lower training costs'
      ],
      icon: <Monitor className="size-14" />
    },
    {
      title: 'Educational and Academic Software',
      desc: 'Enable students to plan and manage learning processes themselves, so nowadays, the teachers’ role is to facilitate and moderate self-education.',
      benefits: [
        'High student involvement',
        'Reduced dropout rates',
        'Maximum learning accessibility',
        'Consistent and relevant content'
      ],
      icon: <GraduationCap className="size-14" />
    },
    {
      title: 'Self-education Software',
      desc: 'Bolster the learning journey, enabling individuals to lock in their focus, boost efficiency, and simplify the learning process at their own pace.',
      benefits: [
        'Amplified learning engagement',
        'Minimized discontinuation rates',
        'Optimal learning accessibility',
        'Uniform and pertinent content'
      ],
      icon: <Users className="size-14" />
    }
  ];

  const faqs = [
    {
      question: 'What services does a custom LMS development company offer?',
      answer: `An LMS development company offers a range of services to support the development and implementation of a Learning Management System. Some common services provided by such companies include:

Custom LMS Software Development: A custom LMS development company specializing in creating customized Learning Management Systems (cloud-based LMS solutions) tailored to the specific needs and requirements of organizations. They can build an LMS from scratch or modify existing systems to meet the client's objectives and business needs.

LMS system Integration: These companies help integrate the LMS platforms with other software systems and platforms used by the organization, such as HR systems, content management systems, or e-commerce platforms. Integration ensures seamless data flow and a unified user experience.

LMS solution Support and Maintenance: an experienced LMS development company provides ongoing support and maintenance services to ensure the smooth operation of the learning platform. This includes troubleshooting, bug fixes, system upgrades, and user support.`
    },
    {
      question: 'What is and what features do custom LMS development services offer?',
      answer: `Custom LMS Development refers to the process of creating a tailor-made learning management system (LMS) that is designed to meet the specific needs, goals, culture, and industry requirements of an organization. It focuses on enhancing training and development learning processes by offering personalization, scalability, advanced analytics, integration capabilities, mobile accessibility, and robust security. 

Custom elearning solutions empower organizations by providing a comprehensive platform for efficient knowledge sharing, employee skill enhancement, and seamless learning experiences. It enables leaders to drive effective training and development initiatives, foster a culture of continuous learning, and ultimately achieve organizational success.`
    },
    {
      question: 'What factors contribute to custom LMS development services?',
      answer: `The cost of custom LMS development services can vary based on several factors. Here are some key considerations that influence the overall cost:

The complexity of features: The more advanced and sophisticated features you require in your LMS, the higher the development cost. Features such as course authoring tools, assessment modules, gamification elements, and integration with other systems can add to the complexity.

Customization requirements: If you need a highly customized LMS tailored to your specific needs, it will likely increase the development cost. Customization may involve designing a unique user interface, incorporating branding elements, or integrating with existing software.

Scalability and performance need: If you anticipate a large user base or expect significant growth over time, you may require a scalable and high-performance LMS. Building such a system can incur additional costs to ensure it can handle increased user load and deliver a seamless experience.`
    }
  ];

  return (
    <div className="bg-white pt-24">
      {/* Breadcrumbs */}
      <div className="container py-6">
        <nav className="flex items-center gap-2 text-sm text-neutral-400">
          <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Home className="size-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="size-4" />
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="size-4" />
          <span className="text-text-dark font-medium">Custom LMS Development</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black text-text-dark leading-[1.1] mb-8">
                <span className="text-primary">Custom LMS</span> Development Company
              </h1>
              <p className="text-lg text-neutral-500 leading-relaxed mb-8">
                Whether you need a completely new LMS or integration with an existing platform, we provide a comprehensive approach to development services. Our teams will drive your organization's success with custom learning management system development. We focus on a personalized approach to deliver real value to your company. Our experts thoroughly analyze your needs and business specifics, both internally and externally.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Make your LMS a key player in the competitive market.",
                  "Align customers' needs with business demands.",
                  "Extend your brand to partners and vendors."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-dark font-medium">
                    <div className="size-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-white px-10 py-4 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Book a call
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/lms-hero/1200/900" 
                alt="Custom LMS Development"
                className="size-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 border-y border-neutral-100">
        <div className="container">
          <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-10 text-center">
            Global brands and educational institutions benefit from digital products we've developed:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Defined Learning', 'Northpass', 'Neutopia', 'Humly', 'SquadLocker', 'BrandActif', 'Alyne'].map((brand) => (
              <span key={brand} className="text-2xl font-black text-text-dark tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://picsum.photos/seed/lms-expertise/800/1000" 
                alt="LMS Expertise"
                className="rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-black text-text-dark leading-tight mb-8">
                Your LMS idea. Our tech <span className="text-primary">expertise and experience</span>
              </h2>
              <div className="space-y-6 text-lg text-neutral-500 leading-relaxed mb-12">
                <p>
                  We offer a comprehensive suite of services to make your custom LMS. We help organizations fully leverage the potential of learning management systems by offering personalization, advanced analytics, integration capabilities, mobile accessibility, security, and scalability. Ongoing support and maintenance are crucial to the success of your LMS. That’s why, if necessary, we will train and onboard your team, helping them effectively utilize the LMS.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Custom LMS development',
                    'Learning Management System MVP',
                    'Mobile LMS development',
                    'LMS data migration',
                    'Custom LMS integrations',
                    'LMS development consulting'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-dark font-semibold">
                      <CheckCircle2 className="size-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  We have real teams at your service. We work from the office that’s why we communicate more effectively and efficiently. Quick face-to-face conversations can resolve issues that might take hours or days through digital channels. When everyone is in the same location, decision-making is easier and faster. This positively impacts the quality of our work.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8 border-t border-neutral-100 pt-12">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-black text-text-dark">
                      {stat.value}<span className="text-primary">{stat.suffix}</span>
                    </div>
                    <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try Developers Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="bg-white rounded-3xl p-12 lg:p-20 shadow-xl overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-5xl lg:text-7xl font-light text-text-dark leading-none mb-8">
                  <span className="font-black">Try our developers.</span><br />
                  Free for 2 weeks.
                </h2>
                <p className="text-xl text-neutral-600 mb-12 max-w-xl">
                  <span className="font-bold">No risk. Just results.</span> Get a feel for our process, speed, and quality — work with our developers for a trial sprint and see why global companies choose webDevBg.
                </p>
                <div className="flex flex-wrap gap-6">
                  <button className="bg-primary text-white px-10 py-5 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all flex items-center gap-4 group">
                    Test our team
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-primary text-primary px-10 py-5 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/5 transition-all">
                    Share this offer
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://picsum.photos/seed/try-devs/600/500" 
                  alt="Try our developers"
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 size-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 size-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-32">
        <div className="container text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-6">
            We have the expertise in implementing various <span className="text-primary">custom LMS features</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
            Our dedicated teams specialize in custom LMS development, leveraging extensive experience to integrate necessary features and quickly bring your ideas to life.
          </p>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`${feature.color} p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 ${feature.span}`}
              >
                <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                  {feature.title}
                </h3>
                {feature.desc && (
                  <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 group-hover:text-white/70 transition-colors">
                    {feature.desc}
                  </p>
                )}
                <ul className="space-y-4">
                  {feature.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                      <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentingo Section */}
      <section className="py-24 lg:py-32 bg-[#4796FD] text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
            <div className="space-y-10">
              <div>
                <span className="text-sm font-black uppercase tracking-[0.2em] mb-4 block">Our custom LMS</span>
                <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-8">
                  From Idea to Impact: How We Built Mentingo – an AI-Powered LMS
                </h2>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <span className="text-lg font-medium">Delivered as:</span>
                  <div className="flex bg-white/20 p-1 rounded-full backdrop-blur-sm">
                    {['Open Source', 'SaaS', 'Custom-built'].map((type) => (
                      <span key={type} className="px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-[#4796FD] transition-all cursor-pointer">
                        {type}
                      </span>
                    ))}
                  </div>
                  <span className="text-lg font-medium">- your choice</span>
                </div>
                <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-2xl">
                  Mentingo is an AI-first LMS that personalizes learning paths, automates content generation, and engages learners through intelligent assistants – all built by webDevBg's EdTech team.
                </p>
                <button className="bg-text-dark text-white px-10 py-5 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-white hover:text-text-dark transition-all shadow-xl">
                  See Mentingo in Action
                </button>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/mentingo/1200/800" 
                  alt="Mentingo LMS"
                  className="size-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: 'Personalized learning journeys',
                  desc: 'Mentingo adapts content and pace to each user’s profile, boosting engagement and knowledge retention.'
                },
                {
                  title: 'AI-powered content & assistance',
                  desc: 'Integrated GPT-based assistants support learners and admins alike – from answering questions to generating quiz questions.'
                },
                {
                  title: 'Fast time-to-market',
                  desc: 'We designed and launched the first working version in just 3 months, enabling rapid validation with real users.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-xl text-text-dark group hover:bg-white/95 transition-all">
                  <div className="size-16 rounded-full bg-[#4796FD]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <ArrowRight className="size-8 text-[#4796FD]" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 leading-tight">{item.title}</h3>
                  <p className="text-lg text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Section */}
      <section className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400 mb-4 block">AI IMPLEMENTATION</span>
            <h2 className="text-4xl lg:text-6xl font-black text-text-dark leading-tight mb-8">
              <span className="text-primary">Customized AI features</span> that we can implement to your platform
            </h2>
            <p className="text-xl text-neutral-500 leading-relaxed mb-12">
              The best way to stay competitive with your application is to follow trends and tools that shape your industry! Adopting AI capabilities can significantly improve your business performance. Some of these are the following:
            </p>
            <button className="bg-primary text-white px-10 py-5 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
              Implement AI Now
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://picsum.photos/seed/ai-lms/1000/1000" 
            alt="AI implementation"
            className="size-full object-cover object-left"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-neutral-50/50 to-transparent" />
        </div>
      </section>

      {/* Soft CTA Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/soft-cta/1920/1080" 
            alt="Background"
            className="size-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded inline-flex items-center gap-4">
              <span className="text-xl font-black text-text-dark">Ireneusz</span>
              <span className="text-neutral-500">• Head of production</span>
            </div>
            <div className="bg-neutral-100 p-12 lg:p-20 rounded-2xl shadow-2xl">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400 mb-6 block">TRUST OUR EXPERIENCE</span>
              <h2 className="text-3xl lg:text-5xl font-black text-text-dark leading-tight mb-8">
                Leverage our domain expertise and technical knowledge to build a <span className="text-primary">one-of-a-kind custom solution</span>!
              </h2>
              <p className="text-xl text-neutral-500 mb-12">
                Consult your custom LMS project with a trusted development company.
              </p>
              <div className="flex flex-wrap gap-8 items-center mb-12 opacity-60">
                {['Google Play', 'xAPI', 'React', 'App Store', 'Next.js', 'SCORM'].map(tech => (
                  <span key={tech} className="text-lg font-bold text-text-dark">{tech}</span>
                ))}
              </div>
              <button className="bg-primary text-white px-10 py-5 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 lg:py-32">
        <div className="container text-center mb-20">
          <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400 mb-4 block">Our Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-black text-text-dark">
            Our <span className="text-primary">LMS development</span> case studies
          </h2>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400">LMS</span>
              <h3 className="text-3xl lg:text-4xl font-black text-text-dark leading-tight">
                From an MVP to a <span className="text-primary">successful e-learning platform</span>
              </h3>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Defined Learning contacted us to develop the MVP version of the Defined Careers app in Ruby on Rails. The whole code-base was built from scratch which later was integrated with Defined other existing systems. Our UX/UI team was also responsible for the designs later.
              </p>
              <div className="grid grid-cols-3 gap-8 py-8 border-y border-neutral-100">
                <div>
                  <div className="text-3xl font-black text-text-dark">2<span className="text-primary">mln</span></div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">Live users</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-text-dark">200<span className="text-primary">/s</span></div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">DB Requests</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-text-dark">4<span className="text-primary">+</span></div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">Years collab</div>
                </div>
              </div>
              <button className="bg-primary text-white px-10 py-4 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all">
                View project
              </button>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/lms-case/1200/800" 
                alt="Case Study"
                className="size-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaborative Platform Tabs */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-6">
            <span className="text-primary">Collaborative platform development</span> in any context
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
            Transform basic Learning Management Systems into an interactive platform. We assist leading e-learning providers in creating a more efficient and scalable business.
          </p>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
            <div className="space-y-4">
              {industryTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left p-8 rounded-xl transition-all flex items-center gap-6 ${
                    activeTab === i 
                      ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                      : 'bg-white text-text-dark hover:bg-neutral-100'
                  }`}
                >
                  <div className={`${activeTab === i ? 'text-white' : 'text-primary'}`}>
                    {React.cloneElement(tab.icon as React.ReactElement, { className: 'size-10' })}
                  </div>
                  <span className="text-lg font-black leading-tight">{tab.title}</span>
                </button>
              ))}
            </div>
            <div className="bg-white p-12 lg:p-20 rounded-2xl shadow-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-3xl font-black text-text-dark mb-8">{industryTabs[activeTab].title}</h3>
                  <p className="text-xl text-neutral-500 leading-relaxed mb-12">{industryTabs[activeTab].desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-6">
                    {industryTabs[activeTab].benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-4 text-lg font-bold text-text-dark">
                        <div className="size-2 rounded-full bg-primary shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none translate-y-1/4 translate-x-1/4">
                {React.cloneElement(industryTabs[activeTab].icon as React.ReactElement, { className: 'size-96' })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400 mb-4 block">OUR YOUTUBE</span>
              <h2 className="text-4xl lg:text-6xl font-black text-text-dark leading-tight mb-8">
                Get <span className="text-primary">expert advice</span> on software development
              </h2>
              <p className="text-xl text-neutral-500 leading-relaxed mb-10">
                Go through various industries and learn the hidden gems revealed by our experts. Those insights may help you make the right business decision, especially nowadays when specific choices can change your position on the market!
              </p>
              <button className="bg-primary text-white px-10 py-5 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all flex items-center gap-4 shadow-xl shadow-primary/20">
                <Youtube className="size-6" />
                Our YouTube
              </button>
            </div>
            <div className="space-y-8">
              {[
                "5 Key Features That Make LMS Platforms Grow (quickly)!",
                "SaaS or Mobile App MVP For $10K | Is It Possible?",
                "How to validate your SaaS platform idea?"
              ].map((title, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                    <img 
                      src={`https://picsum.photos/seed/yt-${i}/600/400`} 
                      alt={title}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="size-16 rounded-full bg-primary/90 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Play className="size-8 fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-black text-text-dark group-hover:text-primary transition-colors line-clamp-2">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-neutral-100">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-4">
              Interested in <span className="text-primary">custom LMS development</span>?
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-12 lg:p-16 rounded-3xl shadow-xl flex flex-col justify-between">
              <h3 className="text-3xl font-black text-text-dark mb-12 leading-tight">
                Get a <span className="text-primary">free quote</span> for your project. Reach out today!
              </h3>
              <div className="space-y-10 mb-16">
                {[
                  { name: 'Dawid Pośliński', role: 'CEO', img: 'https://picsum.photos/seed/ceo/200' },
                  { name: 'Dariusz Wylon', role: 'CBO', img: 'https://picsum.photos/seed/cbo/200' }
                ].map((person, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <img src={person.img} alt={person.name} className="size-20 rounded-full object-cover shadow-md" referrerPolicy="no-referrer" />
                    <div>
                      <div className="text-xl font-black text-text-dark">{person.name}</div>
                      <div className="text-neutral-400 font-bold uppercase tracking-widest text-sm">{person.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="space-y-6">
                {[
                  'Benefit from our expertise and planning',
                  'Hire developers at competitive rates',
                  'Leverage our elearning-centric approach'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-bold text-text-dark">
                    <CheckCircle2 className="size-6 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-12 lg:p-16 rounded-3xl shadow-xl">
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Name *</label>
                    <input type="text" placeholder="Name Surname" className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors text-lg font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest">E-mail *</label>
                    <input type="email" placeholder="name.surname@company.com" className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors text-lg font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Project description *</label>
                  <textarea rows={4} placeholder="Our goal is to launch / improve / scale a product that..." className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors text-lg font-medium resize-none" />
                </div>
                <div className="p-8 border-2 border-dashed border-neutral-200 rounded-xl text-center cursor-pointer hover:border-primary transition-colors group">
                  <p className="text-neutral-400 group-hover:text-primary transition-colors font-bold">Attach File</p>
                  <p className="text-sm text-neutral-400 mt-2">Upload briefs, specs, mockups or any documents</p>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="size-5 rounded border-neutral-300 text-primary focus:ring-primary" />
                    <span className="text-neutral-600 group-hover:text-text-dark transition-colors">Please send me an NDA</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="size-5 rounded border-neutral-300 text-primary focus:ring-primary mt-1" />
                    <span className="text-neutral-600 group-hover:text-text-dark transition-colors text-sm">I declare that I have read the Regulations of the newsletter and accept its contents.</span>
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                  <button className="w-full sm:w-auto bg-primary text-white px-12 py-5 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                    Send message
                  </button>
                  <span className="text-neutral-400 font-bold">or</span>
                  <button className="text-primary font-extrabold uppercase tracking-widest text-sm hover:text-primary/80 transition-all">
                    Schedule a meeting
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-6">
              Client <span className="text-primary">Value & Trust</span>
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Learn how entrepreneurs, business and technology leaders who are after software driven innovation are collaborating with our high-performing teams.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-neutral-50 p-12 lg:p-20 rounded-3xl relative">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3 text-center md:text-left space-y-4 border-b md:border-b-0 md:border-r border-neutral-200 pb-8 md:pb-0 md:pr-12">
                <img 
                  src="https://picsum.photos/seed/testimonial/200" 
                  alt="Steve Cornwell" 
                  className="size-24 rounded-full mx-auto md:mx-0 object-cover shadow-lg mb-6"
                  referrerPolicy="no-referrer"
                />
                <div className="text-xl font-black text-text-dark">Steve Cornwell</div>
                <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest">CEO, Northpass, USA</div>
              </div>
              <div className="md:w-2/3 relative">
                <MessageSquare className="absolute -top-8 -left-8 size-16 text-primary/10" />
                <p className="text-2xl font-medium text-neutral-600 leading-relaxed italic relative z-10">
                  "webDevBg has proved to be a professional and competent web and mobile software development team, they were apt at understanding our wishes and extremely service minded. I highly endorse whole webDevBg team."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container max-w-4xl">
          <div className="relative mb-20">
            <span className="absolute -top-12 left-0 text-9xl font-black text-neutral-200/50 uppercase select-none pointer-events-none">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-black text-text-dark relative z-10">
              Custom LMS Development <span className="text-primary">FAQ</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className={`text-xl font-black transition-colors ${openFaq === i ? 'text-primary' : 'text-text-dark'}`}>
                    {faq.question}
                  </span>
                  {openFaq === i ? <Minus className="size-6 text-primary" /> : <Plus className="size-6 text-neutral-300" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-lg text-neutral-500 leading-relaxed whitespace-pre-line border-t border-neutral-50 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-black text-text-dark">
              Our articles about <span className="text-primary">custom LMS development</span>
            </h2>
            <Link to="/blog" className="hidden md:flex items-center gap-4 text-sm font-black uppercase tracking-widest text-neutral-400 hover:text-primary transition-colors group">
              Read more
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Moodle vs Custom Software – What Brings More Benefits to Your Organization?',
                desc: 'If you are a large organization and struggle to scale your Moodle platform, this article is just for you.',
                date: 'Apr 8, 2024',
                readTime: '6 min read'
              },
              {
                title: 'What Are the Challenges of Implementing Gamification in Education Platforms?',
                desc: 'Gamification has the power to drastically increase student results and change educational experiences.',
                date: 'Jun 24, 2024',
                readTime: '10 min read'
              },
              {
                title: 'Top 10 Best LMS Platforms in 2025 (Compared + When to Go Custom)',
                desc: '68% of employees say that training and development are the most important aspects of company policy.',
                date: 'Jul 15, 2025',
                readTime: '14 min read'
              }
            ].map((article, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={`https://picsum.photos/seed/article-${i}/600/400`} 
                    alt={article.title}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-neutral-300 mb-3 block">LMS</span>
                <h3 className="text-xl font-black text-text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-neutral-500 line-clamp-3 mb-6">{article.desc}</p>
                <div className="text-sm font-bold text-neutral-400">
                  {article.date} • {article.readTime}
                </div>
              </div>
            ))}
          </div>
          <Link to="/blog" className="md:hidden flex items-center justify-center gap-4 text-sm font-black uppercase tracking-widest text-neutral-400 hover:text-primary transition-colors mt-12">
            Read more
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* Footer (Simplified as per design) */}
      <footer className="bg-white border-t border-neutral-100 py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tighter text-text-dark">webDevBg</span>
                <div className="size-2 rounded-full bg-primary mt-1.5" />
              </div>
              <address className="text-neutral-500 not-italic leading-relaxed">
                webDevBg Labs spółka z o.o.<br />
                ul. Powstańców Śląskich 3/1<br />
                43-300 Bielsko-Biała
              </address>
              <a href="mailto:webdevstudiohq@gmail.com" className="text-primary font-bold hover:underline">webdevstudiohq@gmail.com</a>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-8">Follow us</h4>
              <div className="flex gap-4">
                {[Linkedin, Youtube, Twitter, Instagram, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="size-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-all">
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-8">Company</h4>
              <ul className="space-y-4">
                {['Who we are', 'Portfolio', 'Career', 'Blog', 'SaaS Founders Academy'].map(item => (
                  <li key={item}><a href="#" className="text-neutral-500 hover:text-primary transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-8">Services</h4>
              <ul className="space-y-4">
                {['Custom Software', 'SaaS Development', 'UX/UI Design', 'AI Solutions', 'Staff Augmentation'].map(item => (
                  <li key={item}><a href="#" className="text-neutral-500 hover:text-primary transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-400 font-medium">
            <div>© 2026 webDevBg. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">GDPR</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomLMSDevelopment;
