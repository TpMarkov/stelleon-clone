import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  Brain, 
  BarChart3, 
  Globe, 
  MessageSquare,
  ChevronDown,
  Plus,
  Minus,
  Home as HomeIcon,
  Play,
  Award,
  TrendingUp,
  Target,
  UserCheck,
  CreditCard,
  Monitor,
  Library,
  Bell,
  Sparkles,
  BookOpen,
  GraduationCap,
  FileText,
  ThumbsUp,
  Briefcase,
  Layout as LayoutIcon,
  Smartphone,
  Share2,
  Paperclip
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LMSForEnterprise = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast can we go live with Mentingo?",
      answer: "You can go live in as little as 7 days because Mentingo is a ready learning management system built on a proven LMS platform. We focus on configuration, HR systems integration, and the minimum set of learning features you need to deliver training safely at scale."
    },
    {
      question: "Is Mentingo a custom build or a product?",
      answer: "It is our product learning platform that we configure to your organization, then extend where needed. This approach gives you the speed of enterprise LMS platforms with the flexibility of a custom LMS, without starting from zero."
    },
    {
      question: "What integrations do you support with HR systems?",
      answer: "We typically connect HRIS and SSO so user management is automated and training stays consistent across roles and regions. If you have existing systems and applications, we map data flows early so enterprise learning management software works reliably from day one."
    },
    {
      question: "Can you migrate us from systems like Adobe Learning Manager, Absorb LMS, or Cypher Learning?",
      answer: "Yes. If you are moving from systems like Adobe Learning Manager, Absorb LMS, or Cypher Learning, we plan migration around course management, certification management, and reporting so your learning programs continue without disruption."
    },
    {
      question: "How do you handle compliance training and audits?",
      answer: "We design compliance training workflows that produce audit ready evidence through completion tracking, recertification schedules, and on demand reports. This helps enterprise organizations prove training goals quickly and keep enterprise training predictable."
    },
    {
      question: "Will managers and employees actually use it?",
      answer: "Adoption improves when the overall learning experience for employees is simple and relevant. We support personalized learning paths, role based learning programs, and a branded personalized learning experience to improve employee engagement without adding admin effort."
    },
    {
      question: "Can it support training for different groups like partners and customers?",
      answer: "Yes. Mentingo supports employee training and customer and partner training, including separate audiences, access rules, and learning and training structures. This makes learning across the organization and outside it easier to manage in one learning system."
    },
    {
      question: "Do you support mobile learning for frontline and remote teams?",
      answer: "Yes. Mobile learning is designed for training for different roles and locations, including offline friendly training sessions where needed. This keeps online learning accessible and consistent across devices and time zones."
    },
    {
      question: "How do we measure impact and identify skills gaps?",
      answer: "You get dashboards and exports that turn learning initiatives into skills gap insights and progress visibility. This supports your learning and development strategy with data for leadership, workforce planning, and training and development decisions."
    },
    {
      question: "How do we decide whether this is the best enterprise LMS for us?",
      answer: "Start with your organization’s learning and development needs, training needs, and compliance requirements, then compare enterprise LMS solutions that fit your workflows. We help you with choosing an enterprise LMS by translating requirements into a rollout plan and a clear scope."
    }
  ];

  const features = [
    {
      title: "Central learning command center",
      desc: "Keep all learning programs and owners in one place so enterprise organizations stop losing time across tools.",
      items: [
        "Consolidate training content and course management for corporate learning management",
        "Simplify user management so you can deliver training consistently across teams"
      ],
      icon: LayoutIcon,
      color: "bg-neutral-100"
    },
    {
      title: "Automated assignments & reminders",
      desc: "Automate enrollment and follow ups so managing training programs does not depend on manual chasing.",
      items: [
        "Auto assign training for different roles and locations to meet training goals",
        "Send email and in app nudges to improve completion tracking across training sessions"
      ],
      icon: Clock,
      color: "bg-neutral-100"
    },
    {
      title: "Compliance-ready learning programs",
      desc: "Run compliance training that meets internal and external requirements and stays ready for audits.",
      items: [
        "Track expiries and recertifications with certification management built in",
        "Generate audit-ready reporting on demand for enterprise training"
      ],
      icon: Shield,
      color: "bg-neutral-100"
    },
    {
      title: "Skills & learning analytics for HR",
      desc: "Turn activity data into skills gap insights that support workforce decisions and learning goals.",
      items: [
        "Build dashboards for HR and leadership across the learning system",
        "Export reports to connect learning initiatives with your L&D strategy"
      ],
      icon: BarChart3,
      color: "bg-neutral-100"
    },
    {
      title: "AI content studio for L&D",
      desc: "Create structured training content faster so teams can deliver training content at the pace the business needs.",
      items: [
        "Convert existing materials into online courses and micro learning",
        "Reduce time spent on updates while keeping learning solutions consistent"
      ],
      icon: Brain,
      color: "bg-neutral-100"
    },
    {
      title: "Assessments, surveys & certifications",
      desc: "Standardize how you measure knowledge and progress across regions and business units.",
      items: [
        "Run tests polls and pulse checks to track training outcomes",
        "Issue certifications and keep records aligned with corporate training needs"
      ],
      icon: CheckCircle2,
      color: "bg-neutral-100"
    },
    {
      title: "Branded employee learning experience",
      desc: "Match the learning platform to your culture and tone to improve employee engagement.",
      items: [
        "Apply custom branding and layouts for a personalized learning experience",
        "Support specific learning paths without adding admin overhead"
      ],
      icon: Monitor,
      color: "bg-neutral-100"
    },
    {
      title: "Progress & completion visibility",
      desc: "Give managers and HR clear status so risks and blockers are visible early.",
      items: [
        "Track who is on track, overdue or at risk across enterprise learning platforms",
        "Trigger alerts for missing compliance and follow up fast"
      ],
      icon: Users,
      color: "bg-neutral-100"
    },
    {
      title: "Social learning & recognition",
      desc: "Encourage collaborative learning that keeps knowledge moving across the organization.",
      items: [
        "Enable social learning features like kudos, badges and peer recognition",
        "Strengthen sharing of best practices to support engaging learning"
      ],
      icon: Share2,
      color: "bg-neutral-100"
    },
    {
      title: "Mobile learning for every role",
      desc: "Reach office, frontline and remote staff with mobile learning that fits real work conditions.",
      items: [
        "Provide a consistent experience across devices for online learning platforms",
        "Support offline-friendly training sessions for learning across locations"
      ],
      icon: Smartphone,
      color: "bg-neutral-100"
    },
    {
      title: "Talent & potential insights",
      desc: "Identify experts, mentors and high potential employees based on real learning behavior.",
      items: [
        "Surface top learners and contributors to improve employee development plans",
        "Inform promotion and succession discussions with objective signals"
      ],
      icon: UserCheck,
      color: "bg-neutral-100"
    },
    {
      title: "Flexible rewards & incentives",
      desc: "Support motivation with configurable rewards that align with your training goals.",
      items: [
        "Offer non-monetary and monetary options to support employee engagement",
        "Connect incentives to learning programs directly and adoption milestones"
      ],
      icon: Paperclip,
      color: "bg-neutral-100"
    },
    {
      title: "Custom modules & integrations",
      desc: "Extend the training platform with workflows tailored to your HR processes and existing systems.",
      items: [
        "Integrate with HR systems, SSO and payroll to support enterprise LMS",
        "Plan migrations and connections for systems like Adobe Learning Manager or Cypher Learning"
      ],
      icon: Briefcase,
      color: "bg-neutral-100"
    }
  ];

  return (
    <div className="bg-white font-sans text-text-dark overflow-x-hidden">
      {/* Breadcrumbs */}
      <div className="absolute left-0 top-24 z-40 w-full lg:top-32">
        <div className="container">
          <ol className="flex items-center gap-4 text-sm text-neutral-400">
            <li className="flex items-center gap-2">
              <Link to="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                <HomeIcon className="size-4" />
                <span>Home</span>
              </Link>
            </li>
            <li className="flex items-center gap-2 before:content-['/'] before:mr-2">
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            </li>
            <li className="flex items-center gap-2 before:content-['/'] before:mr-2 text-neutral-600 font-medium">
              LMS for Enterprise
            </li>
          </ol>
        </div>
      </div>

      {/* Hero Section */}
      <section id="lms-hero" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter mb-8 text-neutral-600">
                <span className="text-primary">Custom LMS</span> for Enterprise
              </h1>
              <p className="text-xl text-neutral-500 mb-10 leading-relaxed max-w-2xl">
                Build a custom LMS that replaces scattered tools with one secure, auditable learning workflow built for enterprise scale and clear reporting across regions and roles. Delivered by an experienced <Link to="/software-outsourcing-company" className="text-primary hover:underline">software outsourcing company</Link> with a structured approach from discovery to pilot to rollout.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button className="px-10 py-5 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group">
                  Book a Discovery Call
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Logo Cloud Integrated in Hero */}
              <div className="pt-12 border-t border-neutral-100">
                <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-8">
                  Global brands and educational institutions benefit from digital products we've developed:
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 opacity-40 grayscale items-center">
                  {['Defined Learning', '9Teams', 'Qstream', 'B4B', 'SquadLocker', 'BrandActif'].map((brand) => (
                    <span key={brand} className="text-sm font-black tracking-tighter text-neutral-600 text-center">{brand}</span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://a.storyblok.com/f/86602/1024x617/09648a4a66/lms-for-enterprise.jpg" 
                  alt="LMS for Enterprise Interface" 
                  className="size-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition / About Us */}
      <section id="about-us" className="py-24 lg:py-36 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <img 
                  src="https://a.storyblok.com/f/86602/520x720/1be82349c1/gamification-software-hero-2.jpg" 
                  alt="Learning Experience" 
                  className="size-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden lg:block border border-neutral-100">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <TrendingUp className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase">Growth</p>
                    <p className="text-xl font-black text-neutral-600">+90% Engagement</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-neutral-600">
                Stop Managing Disconnected Tools. <span className="text-primary">Unify Your HR Ecosystem.</span>
              </h2>
              <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
                When training lives across files, decks, and multiple tools, accountability blurs and reporting turns into manual chasing instead of a reliable learning management system. With <Link to="/devops-cloud-services" className="text-primary hover:underline">DevOps</Link> practices built in, you get enterprise grade reliability and a security posture that supports HRIS and SSO integration.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  "Seamless Integration: Connect HRIS and SSO so every team works from a single source of truth.",
                  "Enterprise Compliance: Prove it fast with audit ready evidence and clear completion records.",
                  "Zero Vendor Lock in: Avoid per user licensing pressure and keep ownership options open."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="size-6 text-primary shrink-0 mt-1" />
                    <span className="text-neutral-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-neutral-100">
                <div>
                  <div className="text-4xl font-black text-neutral-600 mb-1">150<span className="text-primary">+</span></div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Delivered Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-neutral-600 mb-1">18<span className="text-primary">+</span></div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Years of experience</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-neutral-600 mb-1">20<span className="text-primary">+</span></div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Certificates & awards</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentingo / Vibrant Section */}
      <section id="vibrant" className="py-24 bg-white">
        <div className="container">
          <div className="bg-[#4796FD] rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest uppercase bg-white/20 rounded-full">
                  Our custom LMS for large companies & enterprise
                </span>
                <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                  From Dispersed Trainings to One LMS | AI-Powered Learning Hub
                </h2>
                <div className="flex flex-wrap gap-3 mb-10">
                  <div className="group relative">
                    <span className="px-4 py-2 bg-white text-[#4796FD] font-bold rounded-full text-sm cursor-help">Open Source</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Free to use and modify - you host it, we provide the foundation.
                    </div>
                  </div>
                  <div className="group relative">
                    <span className="px-4 py-2 bg-black text-white font-bold rounded-full text-sm cursor-help">SaaS</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Subscription-based - we host, manage, and keep everything running.
                    </div>
                  </div>
                  <div className="group relative">
                    <span className="px-4 py-2 bg-[#B5D5FF] text-black font-bold rounded-full text-sm cursor-help">Custom-built</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Designed and built for you - unique features, your branding, your rules.
                    </div>
                  </div>
                </div>
                <p className="text-xl text-blue-50 mb-10 leading-relaxed">
                  Mentingo is an AI-powered LMS that helps HR and L&D teams centralize learning, personalize development paths for thousands of employees, and prove training impact with clear data and compliance-ready reporting.
                </p>
                <a href="https://mentingo.com/" target="_blank" rel="noopener noreferrer" className="inline-flex px-10 py-5 bg-black text-white font-bold rounded hover:bg-black/80 transition-all items-center justify-center gap-2 group">
                  See Mentingo in Action
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="relative">
                <img 
                  src="https://a.storyblok.com/f/86602/1053x871/f3c76ecc92/mentingo-preview.png" 
                  alt="Mentingo Dashboard Preview" 
                  className="w-full h-auto drop-shadow-2xl translate-x-8 lg:translate-x-16"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="size-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
          </div>

          {/* Mentingo Value Points */}
          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Personalized learning journeys", desc: "Mentingo adapts content and pace to each employee’s role, location and skill level, while HR keeps full control." },
              { title: "AI that lightens the workload", desc: "Integrated GPT-based assistants help you turn materials into courses, quizzes and micro-learning in minutes." },
              { title: "Fast, no-risk implementation", desc: "We launch a working version in 3 months and can roll out an LMS in 7 days. SCORM/xAPI and GDPR-ready." }
            ].map((point) => (
              <div key={point.title} className="p-10 bg-neutral-50 rounded-2xl border border-neutral-100">
                <div className="size-12 bg-[#B5D5FF] rounded-full flex items-center justify-center mb-6">
                  <ArrowRight className="size-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-600">{point.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features-block-section" className="py-24 lg:py-36 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 text-neutral-600">
              Key features <span className="text-primary">HR & L&D leaders get with Mentingo</span>
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              We design an enterprise learning management system that streamlines training operations, supports compliance training, and lets you run any training program at scale with less manual follow up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-neutral-100 rounded-2xl hover:bg-primary hover:text-white transition-all group cursor-default relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 leading-tight group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-neutral-500 group-hover:text-white/90 transition-colors leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="size-1.5 rounded-full bg-primary group-hover:bg-white mt-1.5 shrink-0 transition-colors" />
                        <span className="text-neutral-600 group-hover:text-white/80 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Background Icon Decoration */}
                <feature.icon className="absolute -bottom-4 -right-4 size-32 text-primary/5 group-hover:text-white/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Hero Section */}
      <section className="ai-hero py-24 lg:py-48 bg-gradient-to-r from-[#F5F5F5] to-[#E5E7F4] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-6 block">AI FOR HR & L&D</span>
              <h2 className="text-4xl lg:text-7xl font-black mb-8 text-neutral-600 leading-tight">
                <span className="text-primary">AI features</span> that reduce HR workload and boost learning impact
              </h2>
              <p className="text-xl text-neutral-500 mb-10 leading-relaxed max-w-xl">
                Stay ahead in HR and learning by embedding practical AI into your LMS or talent platforms. From auto-generating courses and quizzes to recommending next steps and flagging compliance risks.
              </p>
              <button className="px-10 py-5 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-all shadow-lg shadow-primary/30">
                Implement AI Now
              </button>
            </div>
            <div className="relative hidden lg:block">
              <img 
                src="https://selleo.com/.netlify/images?url=%2Fuploads%2Fai_section_head_desktop.png" 
                alt="AI for HR" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              {/* Decorative Stars from HTML */}
              <div className="absolute top-0 right-0 text-primary animate-pulse">
                <Sparkles className="size-16" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Soft CTA Section */}
      <section id="soft-cta-section" className="py-24 lg:py-36 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://a.storyblok.com/f/86602/1920x980/b87c26be14/soft-cta-image-irek.jpg" 
                  alt="Ireneusz - Head of Production" 
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                <p className="font-bold text-neutral-600">Ireneusz</p>
                <p className="text-xs text-neutral-500 font-medium">Head of production</p>
              </div>
            </div>
            <div>
              <span className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-6 block">TRUSTED BY HR & L&D TEAMS</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-neutral-600 leading-tight">
                Achieve <span className="text-primary">learning & compliance</span> goals with a proven <span className="text-primary">EdTech</span> partner
              </h2>
              <p className="text-lg text-neutral-500 mb-10 leading-relaxed">
                Consult your LMS or learning platform with a team that specialises in HR/EdTech, brings ready-to-use LMS modules, understands enterprise compliance (SCORM, xAPI, SSO, GDPR) and designs solutions that stay flexible.
              </p>
              
              {/* Tech Logos */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mb-10 items-center opacity-50 grayscale">
                {['Google Play', 'xAPI', 'React', 'App Store', 'Next.js', 'SCORM'].map(tech => (
                  <span key={tech} className="text-[10px] font-black uppercase text-center">{tech}</span>
                ))}
              </div>

              <button className="px-10 py-5 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-all shadow-lg shadow-primary/30">
                Book a call with our EdTech team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise / Case Studies */}
      <section id="our-expertise" className="py-24 lg:py-36 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-20">
            <span className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-4 block">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-black text-neutral-600">
              Our custom <span className="text-primary">EdTech development</span> case studies
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "A micro-learning app for corporations offering scenario-based spaced learning",
                kicker: "LMS",
                stat: "90% Engagement",
                desc: "We developed a unique admin section while rebuilding existing elements and designs. Implemented various question types like video and presentation.",
                image: "https://a.storyblok.com/f/86602/1920x1080/bb0cfbb9bc/qstream-hero-bigger.png",
                link: "/portfolio/microlearning-software"
              },
              {
                title: "From an MVP to a successful e-learning platform for careers",
                kicker: "LMS",
                stat: "2M Live Users",
                desc: "Developed the MVP version in Ruby on Rails. The whole code-base was built from scratch and integrated with existing systems.",
                image: "https://a.storyblok.com/f/86602/1920x1080/d30d933011/portfolio-defined-desktop-new.png",
                link: "/portfolio/online-learning-platform"
              },
              {
                title: "A flexible platform that allows integrating gamification into surveys",
                kicker: "Custom Software",
                stat: "44% More Engaged",
                desc: "Groundwork in application architecture and user path to ensure the creation of a modern and user-friendly interface.",
                image: "https://a.storyblok.com/f/86602/1111x687/2dc1b17afe/datagame_hero_desktop.png",
                link: "/portfolio/datagame"
              }
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-3xl overflow-hidden shadow-xl group flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <span className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-4 block">{project.kicker}</span>
                  <h3 className="text-2xl font-bold mb-6 text-neutral-600 leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-neutral-500 mb-8 flex-grow">{project.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Award className="size-5" />
                      <span>{project.stat}</span>
                    </div>
                    <Link to={project.link} className="text-primary font-bold flex items-center gap-2 group/link">
                      View project <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Talks Section */}
      <section id="smart-talks" className="py-24 lg:py-36 bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Decorative background element from HTML */}
              <div className="absolute -left-24 -top-24 opacity-5 pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 956 1079" fill="none">
                  <path fill="currentColor" d="m354.776 324.7-4.008-.04h-44.09v226.461h48.098v.121c76.716 2.044 138.842 62.286 143.933 138.161h.361v388.787h228.465V673.37h-1.042C712.224 479.696 551.576 326.744 354.776 324.7M-26 981.999c0-126.177 102.288-228.465 228.465-228.465V1078.2H-26zM-26 376.766V-.001h228.465v753.534H-26zM919.927 327.506c-109.022 17.315-192.392 111.707-192.392 225.619H956V324.66c-12.265 0-24.329 1.002-36.073 2.846" />
                </svg>
              </div>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { id: "UwAMq5Szu6E", title: "Key Features for LMS" },
                  { id: "tAP8JS7OzWo", title: "Validate SaaS Idea" },
                  { id: "fkwjrY9zAUk", title: "LMS Growth Hack" },
                  { id: "ASmfMyJMnMQ", title: "Training Effectiveness" }
                ].map((video) => (
                  <div key={video.id} className="aspect-[9/16] bg-neutral-100 rounded-2xl overflow-hidden shadow-xl group cursor-pointer relative">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                      alt={video.title} 
                      className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="size-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl">
                        <Play className="size-8 fill-current" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-black uppercase tracking-widest text-primary mb-6 block">Talks & Ideas</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-neutral-600 leading-tight">
                HR of Tomorrow: Expert Talks for Enterprise HR Leaders
              </h2>
              <p className="text-lg text-neutral-500 mb-10 leading-relaxed">
                Join HR Directors and L&D Managers who are building scalable learning ecosystems - from one central LMS, with clear reporting and compliance under control.
              </p>
              <a href="https://www.youtube.com/user/SelleoWebMobileTV" target="_blank" rel="noopener noreferrer" className="inline-flex px-10 py-5 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-all items-center justify-center gap-4 group shadow-lg shadow-primary/30">
                Visit HR of Tomorrow Channel
                <ArrowRight className="size-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="c-contact-form" className="py-24 lg:py-36 bg-neutral-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-4 block">Let’s talk about what you need.</span>
            <h2 className="text-4xl lg:text-5xl font-black text-neutral-600">
              Planning a <span className="text-primary">new LMS or HR learning platform</span>?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-12 lg:p-16 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black text-neutral-600 mb-12 leading-tight">
                  Get an <span className="text-primary">HR-focused</span> estimate for your project. Reach out today!
                </h3>
                <div className="space-y-10">
                  <div className="flex items-center gap-6 group">
                    <div className="size-20 rounded-full overflow-hidden border-2 border-neutral-100 group-hover:border-primary transition-colors">
                      <img src="https://a.storyblok.com/f/86602/1335x2000/ff4e2f29ab/dawid-poslinski.png" alt="Dawid Pośliński" className="size-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-neutral-600">Dawid Pośliński</p>
                      <p className="text-neutral-400 font-medium uppercase tracking-widest text-xs">CEO</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="size-20 rounded-full overflow-hidden border-2 border-neutral-100 group-hover:border-primary transition-colors">
                      <img src="https://a.storyblok.com/f/86602/250x375/633cd4a11a/dariusz-wylon.png" alt="Dariusz Wylon" className="size-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-neutral-600">Dariusz Wylon</p>
                      <p className="text-neutral-400 font-medium uppercase tracking-widest text-xs">CBO</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-neutral-100 space-y-4">
                <div className="flex items-center gap-3 text-neutral-500">
                  <CheckCircle2 className="size-5 text-primary" />
                  <span>Clarify your HR & L&D goals</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-500">
                  <CheckCircle2 className="size-5 text-primary" />
                  <span>Get an estimated budget and timeline</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-500">
                  <CheckCircle2 className="size-5 text-primary" />
                  <span>Discuss integrations and compliance</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 lg:p-16 rounded-3xl shadow-xl">
              <form className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input type="text" id="name" className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors peer bg-transparent text-neutral-600 font-medium" placeholder=" " />
                    <label htmlFor="name" className="absolute left-0 top-3 text-neutral-400 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">Name *</label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors peer bg-transparent text-neutral-600 font-medium" placeholder=" " />
                    <label htmlFor="email" className="absolute left-0 top-3 text-neutral-400 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">E-mail *</label>
                  </div>
                </div>
                <div className="relative group">
                  <textarea id="message" className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors peer bg-transparent resize-none text-neutral-600 font-medium" rows={1} placeholder=" " />
                  <label htmlFor="message" className="absolute left-0 top-3 text-neutral-400 pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">Project description *</label>
                </div>
                
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="size-5 rounded border-2 border-neutral-200 group-hover:border-primary transition-colors flex items-center justify-center">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="size-2.5 bg-primary rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm text-neutral-500">Please send me an NDA</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="size-5 rounded border-2 border-neutral-200 group-hover:border-primary transition-colors flex items-center justify-center">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="size-2.5 bg-primary rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm text-neutral-500">I declare that I have read the Regulations of the newsletter.</span>
                  </label>
                </div>

                <button className="w-full py-6 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-lg">
                  Send message
                </button>
                
                <p className="text-[10px] text-neutral-400 text-center leading-relaxed">
                  This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 lg:py-36 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-20 relative">
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[100px] lg:text-[160px] font-black text-neutral-50 uppercase select-none pointer-events-none z-0">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-black text-neutral-600 relative z-10">
              LMS for Large Companies / Enterprises <span className="text-primary">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm transition-all hover:shadow-md">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className={`text-xl font-bold transition-colors ${activeFaq === idx ? 'text-primary' : 'text-neutral-600'}`}>{faq.question}</span>
                  <div className={`size-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === idx ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-400'}`}>
                    {activeFaq === idx ? (
                      <Minus className="size-5" />
                    ) : (
                      <Plus className="size-5" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-8 pt-0 text-neutral-500 leading-relaxed text-lg border-t border-neutral-50">
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

      {/* Related Articles Section */}
      <section className="py-24 lg:py-36 bg-neutral-50">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl lg:text-5xl font-black text-neutral-600">
              Our articles about <span className="text-primary">e-Learning</span>
            </h2>
            <Link to="/blog" className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-neutral-400 hover:text-primary transition-colors group">
              Read more <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Top 10 Best LMS Platforms in 2025 (Compared + When to Go Custom)",
                tag: "LMS",
                date: "Jul 15, 2025",
                readTime: "14 min read",
                image: "https://cms.selleo.com/wp-content/uploads/2025/07/miniatura_top_lms.webp"
              },
              {
                title: "AI-Powered E-Learning in Banking: Goodbye Boring Training, Hello Smart Learning",
                tag: "BUSINESS",
                date: "Apr 24, 2025",
                readTime: "5 min read",
                image: "https://cms.selleo.com/wp-content/uploads/2025/04/miniatura_bp-digital-mindfulness-in-banking_-how-well-being-apps-support-financial-professionals.webp"
              },
              {
                title: "Custom LMS Development Vs Ready-Made LMS: How to Choose The Best?",
                tag: "SOFTWARE DEVELOPMENT",
                date: "Sep 17, 2020",
                readTime: "9 min read",
                image: "https://cms.selleo.com/wp-content/uploads/2020/09/miniaturka-custom-lms-vs-ready-made-lms-01.jpg"
              }
            ].map((article) => (
              <div key={article.title} className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${article.tag}/800/450`;
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-neutral-600 rounded-full">
                      {article.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-neutral-600 group-hover:text-primary transition-colors leading-tight mb-6 flex-grow">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-bold text-neutral-400 uppercase tracking-widest pt-6 border-t border-neutral-50">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LMSForEnterprise;
