import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  Plus, 
  Play, 
  Youtube, 
  Clock, 
  Award, 
  Layers, 
  Cloud,
  Shield,
  BarChart3,
  MessageSquare,
  Search,
  ChevronDown,
  ChevronUp,
  UserCheck,
  Target,
  Zap,
  FileText,
  Monitor,
  Sparkles,
  TrendingUp,
  Activity,
  Globe,
  Lock,
  Users,
  Settings,
  Terminal,
  Cpu,
  Database,
  RefreshCw,
  Eye,
  Layout,
  Palette,
  ClipboardCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DevOpsCloudServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { label: 'Delivered Projects', value: '150', suffix: '+', icon: <Layers className="size-8 text-primary" /> },
    { label: 'Years of experience', value: '18', suffix: '+', icon: <Clock className="size-8 text-primary" /> },
    { label: 'Certificates & awards', value: '20', suffix: '+', icon: <Award className="size-8 text-primary" /> },
  ];

  const valueCards = [
    {
      title: 'Data Safety and Scalability',
      desc: 'DevOps prioritizes secure handling of sensitive data with integrated security measures like DevSecOps. It ensures scalable infrastructure that adapts to growing demands, using tools like Kubernetes and cloud platforms to maintain performance and data integrity.',
      icon: <Shield className="size-10" />
    },
    {
      title: 'Accelerated Time-to-Market',
      desc: 'DevOps ensures faster delivery of features and updates through automation, CI/CD pipelines, and streamlined workflows. Your team can deploy changes multiple times a day, reducing the time from concept to production and keeping you competitive.',
      icon: <Zap className="size-10" />
    },
    {
      title: 'Control and Reporting',
      desc: 'Maintain complete control over your project’s progress with real-time reporting and dashboards. Use monitoring and analytics to track deployments, performance, and costs, giving stakeholders confidence and clarity.',
      icon: <BarChart3 className="size-10" />
    },
    {
      title: 'Quick Start',
      desc: 'DevOps accelerates project initiation by quickly setting up environments, CI/CD pipelines, and workflows. It aligns technical implementation with business goals and ensures requirements are met early through iterative feedback loops.',
      icon: <RefreshCw className="size-10" />
    },
    {
      title: 'Cost Efficiency',
      desc: 'Automation and optimized resource management reduce operational costs. Tools like cloud cost monitoring and auto-scaling ensure you only pay for what you need, making your projects more financially sustainable.',
      icon: <TrendingUp className="size-10" />
    },
    {
      title: 'Enhanced Collaboration',
      desc: 'DevOps fosters a culture of shared responsibility and better communication between development, operations, and other stakeholders. This collaboration minimizes silos and ensures that everyone is aligned toward the project\'s goals.',
      icon: <Users className="size-10" />
    }
  ];

  const services = [
    {
      title: 'Cloud Infrastructure Management',
      items: [
        'Managing computing, storage, and networking on cloud platforms.',
        'Monitoring and optimizing cloud spending.',
        'Tools: AWS, Azure, Google Cloud.'
      ],
      icon: <Cloud className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Continuous Monitoring and Feedback Loops',
      items: [
        'Your applications never stop running. With continuous monitoring, you’ll get real-time:',
        'feedback on performance,',
        'user experience, and system health.'
      ],
      icon: <Activity className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Continuous Integration (CI) and Continuous Delivery (CD)',
      items: [
        'Automated build and testing pipelines.',
        'Seamless deployment to staging or production environments.',
        'Tools: Jenkins, GitLab CI/CD, CircleCI, Azure DevOps.'
      ],
      icon: <RefreshCw className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-3'
    },
    {
      title: 'Configuration Management',
      items: [
        'Automating configuration changes across environments.',
        'Ensuring consistency between development, testing, and production'
      ],
      icon: <Settings className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Containerization & Orchestration',
      items: [
        'Container management and scaling.',
        'Orchestrating workloads across clusters.',
        'Tools: Docker, Kubernetes, OpenShift'
      ],
      icon: <Cpu className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Monitoring and Logging',
      items: [
        'Centralized logging and analytics.',
        'Real-time alerts and anomaly detection consistency across platforms'
      ],
      icon: <Eye className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Infrastructure as Code (IaC)',
      items: [
        'Version-controlled infrastructure definitions.',
        'Automation of provisioning and configuration.',
        'Tools: Terraform, AWS CloudFormation, Ansible, Chef, Puppet.'
      ],
      icon: <Terminal className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Security Integration (DevSecOps)',
      items: [
        'Automated security testing.',
        'Vulnerability scanning and compliance checks.'
      ],
      icon: <Lock className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Collaboration and Workflow Automation',
      items: [
        'Unified platforms for communication and task management'
      ],
      icon: <Users className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Test Automation',
      items: [
        'Functional, performance, and security testing.'
      ],
      icon: <ClipboardCheck className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'All in one',
      items: [
        'Full development',
        'UX/UI'
      ],
      icon: <CheckCircle2 className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: '+ DevOps Consulting Services',
      items: [
        'Training and Knowledge transfer',
        'Assessment and Strategy Development',
        'And more...'
      ],
      icon: <Plus className="size-10" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    }
  ];

  const pdsTabs = [
    {
      title: '1. Initial Preparation',
      desc: 'What it covers:',
      items: [
        'Define functional scope and NFRs (performance, reliability, security) and agree acceptance criteria.',
        'Map current risks and bottlenecks into a practical implementation roadmap.',
        'Establish code ownership rules, documentation standards, and handover checkpoints.',
        'Align early delivery artifacts with product validation needs.'
      ],
      icon: 'https://a.storyblok.com/f/86602/65x64/45c478ec5c/learning-management-software-1.svg'
    },
    {
      title: '2. Development & Advanced Features',
      desc: 'What it covers:',
      items: [
        'Apply a pragmatic devops methodology aligned with your team’s operating model.',
        'Implement quality gates and repeatable environments to reduce production-only surprises.',
        'Add observability baselines and on-call readiness so incident response becomes routine.',
        'Scale execution capacity without losing control when timelines tighten.'
      ],
      icon: 'https://a.storyblok.com/f/86602/24x24/7d684362d7/saas.svg'
    },
    {
      title: '3. Production Design',
      desc: 'What it covers:',
      items: [
        'Drive process implementation for production readiness: audit trail, rollback paths, access boundaries, and operational controls.',
        'Harden runtime characteristics (availability, failover, load patterns) and validate against real release/incident scenarios.',
        'Support production-grade releases across product types.'
      ],
      icon: 'https://a.storyblok.com/f/86602/24x24/2f0888c029/painting-palette.svg'
    }
  ];

  const faqs = [
    {
      question: 'What do DevOps consulting services include - and how do I choose a DevOps consulting firm?',
      answer: "DevOps consulting services usually cover an assessment, a roadmap, and hands-on delivery across devops services and tooling. A good devops consulting firm explains what will change in your development processes, how it improves software delivery, and how ownership moves to your devops team. When comparing devops consulting companies, prioritize clear scope and measurable outcomes over “tool-only” consulting services."
    },
    {
      question: 'What does a DevOps consulting process look like in practice?',
      answer: "A typical devops consulting process starts with discovery and strategy development, then moves into incremental process implementation and measurable devops implementation. It aligns a pragmatic devops methodology (or devops approach) to your devops lifecycle and existing devops processes, so adopting devops feels like a controlled devops journey - not a rewrite. You should also get ongoing devops insights and a clear implementation roadmap."
    },
    {
      question: 'How do you implement CI/CD without slowing down releases?',
      answer: "By treating continuous integration and continuous delivery as guardrails, not bureaucracy. A solid ci cd setup uses a reliable ci cd pipeline (your devops pipeline) with automated checks and fast feedback, so teams ship new features to meet market demands with fewer manual steps. The results are fewer repetitive tasks, more predictable software delivery, and stronger quality via continuous testing and automated testing."
    },
    {
      question: 'How does DevOps improve collaboration between development and operations teams?',
      answer: "DevOps works when development and operations teams share ownership across development and operations, from build to runtime. That improves clarity in it operations, strengthens team collaboration, and enables seamless integration between delivery, monitoring, and incident response. In practice, it teams can enhance collaboration by reducing handoffs and tightening feedback loops."
    },
    {
      question: 'What changes in infrastructure management when you adopt DevOps?',
      answer: "Infrastructure management becomes repeatable and reviewable. Teams standardize environments on cloud platforms using infrastructure as code (infrastructure as code iac) and configuration management, which improves resource utilization and reduces operational costs. With modern cloud technologies, you can scale production environments while keeping traceability."
    }
  ];

  const articles = [
    {
      title: 'Technology Stack and Cloud infrastructure Consulting',
      category: 'Software Development',
      date: 'Dec 5, 2024',
      readTime: '13 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2024/12/miniatura_technology_stack_and_cloud_infrastructure_consulting.png',
      link: '/blog/technology-stack-and-cloud-infrastructure-consulting'
    },
    {
      title: 'Data Migration in Practice: An Expert’s Guide to Achieving Accuracy and Efficiency',
      category: 'Software Development',
      date: 'Nov 14, 2024',
      readTime: '10 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2024/11/miniatura_data_migration_done_right__a_practical_guide_to_accuracy_and_efficiency.png',
      link: '/blog/data-migration-in-practice'
    },
    {
      title: 'How to Protect Your Software from AI-Driven Threats?',
      category: 'Business',
      date: 'Jun 27, 2025',
      readTime: '7 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2025/06/miniatura_beyond-human-hackers_-how-to-protect-your-software-from-ai-driven-threats_.webp',
      link: '/blog/beyond-human-hackers-how-to-protect-your-software-from-ai-driven-threats'
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
          <span className="text-text-dark font-medium">DevOps Consulting Services & Solutions</span>
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
                <span className="text-primary">DevOps</span> Consulting & Services
              </h1>
              <p className="text-lg text-neutral-500 leading-relaxed mb-8">
                Our devops consulting services help CTOs ship faster without burning out the team by reducing deployment risk and improving reliability and observability. Explore how we can support your roadmap with practical consulting services: scale your development. We start with an assessment, turn findings into a prioritized roadmap, implement what matters first, and leave your team with handover-ready docs, shared repos, and clear ownership.
              </p>
              <div className="space-y-4 mb-10">
                <p className="font-bold text-primary">Why work with us?</p>
                <ul className="space-y-4">
                  {[
                    "Secure, reliable foundations that scale with your product and reduce change-related incidents.",
                    "Early risk and bottleneck identification, so delivery stays predictable as complexity grows.",
                    "DevOps enablement your team can own: transparent scope, documented setup, and knowledge transfer built in."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-dark font-medium">
                      <div className="size-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-primary text-white px-10 py-4 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Book a call
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://a.storyblok.com/f/86602/1920x980/45cc8094ce/fintech-software-development-hd.jpg" 
                alt="DevOps Consulting"
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
            Global brands and enterprise institutions benefit from digital products we've developed:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { name: 'Defined Learning', url: 'https://a.storyblok.com/f/86602/256x41/6ee0fa3639/defined-learning-dark.png' },
              { name: 'Grammarly', url: 'https://a.storyblok.com/f/86602/193x50/79294fcf7f/grammarly-logo-final.png' },
              { name: 'Northpass', url: 'https://a.storyblok.com/f/86602/192x44/ae293dc61f/northpass-dark.png' },
              { name: 'Neutopia', url: 'https://a.storyblok.com/f/86602/240x27/5743492c17/neutopia-dark.png' },
              { name: 'Humly', url: 'https://a.storyblok.com/f/86602/128x56/d7db557b4c/humly-dark.png' },
              { name: 'SquadLocker', url: 'https://a.storyblok.com/f/86602/112x53/217337caf5/squad-locker-dark.png' },
              { name: 'BrandActif', url: 'https://a.storyblok.com/f/86602/176x38/94c79b7111/brand-actif-dark.png' }
            ].map((brand) => (
              <img 
                key={brand.name} 
                src={brand.url} 
                alt={brand.name} 
                className="h-8 lg:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Cards Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-6">
            The <span className="text-primary">value of DevOps Services</span> for projects
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
            The benefits of devops show up fastest when you need predictable delivery under pressure - fewer risky releases, more operational visibility, and tighter cost control.
          </p>
        </div>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:bg-primary"
              >
                <div className="text-primary group-hover:text-white transition-colors mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-text-dark group-hover:text-white transition-colors mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-neutral-500 group-hover:text-white/90 transition-colors leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="container text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-6">
            Our Services included in DevOps
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
            We help you build a DevOps foundation you can actually run and evolve - repeatable environments, audit-ready change history, and a rollback strategy built in.
          </p>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`${service.color} p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 ${service.span || ''}`}
              >
                <div className="mb-6 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item, j) => (
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

      {/* Soft CTA Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://a.storyblok.com/f/86602/1920x980/b87c26be14/soft-cta-image-irek.jpg" 
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
                Achieve business <span className="text-primary">goals</span> faster!
              </h2>
              <p className="text-xl text-neutral-500 mb-12">
                Would you like some support and consulting with DevOps or Cloud Automation? Please take advantage of our consultations to connect with experts in cutting-edge technologies who can help streamline your project and minimize costs.
              </p>
              <div className="flex flex-wrap gap-8 items-center mb-12 opacity-60 grayscale">
                {[
                  { name: 'Google Play', url: 'https://a.storyblok.com/f/86602/144x32/970badfe90/google-play-dark.png' },
                  { name: 'xAPI', url: 'https://a.storyblok.com/f/86602/95x32/f77bb9d6e0/xapi-dark.png' },
                  { name: 'React', url: 'https://a.storyblok.com/f/86602/128x32/10d288c54c/react-dark.png' },
                  { name: 'App Store', url: 'https://a.storyblok.com/f/86602/93x32/50bc272795/appstore-dark.png' },
                  { name: 'Next.js', url: 'https://a.storyblok.com/f/86602/94x56/be74c3beea/nextjs-dark.png' },
                  { name: 'SCORM', url: 'https://a.storyblok.com/f/86602/104x24/7cd52a77dd/scorm-dark.png' }
                ].map(tech => (
                  <img 
                    key={tech.name} 
                    src={tech.url} 
                    alt={tech.name} 
                    className="h-6 lg:h-8 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
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
            Our custom <span className="text-primary">DevOps & software development</span> case studies
          </h2>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400">Ecommerce</span>
              <h3 className="text-3xl lg:text-4xl font-black text-text-dark leading-tight">
                BrandActif is a visual commerce app with <span className="text-primary">scalable, real-time GraphQL API</span>
              </h3>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Progressive web application powered with GraphQL API enabling compatibility with all browsers and operating systems together with smooth communication even on slow mobile network connections.
              </p>
              <div className="space-y-4">
                <p className="font-bold text-text-dark">Challenge:</p>
                <ul className="space-y-2 text-neutral-500">
                  <li className="flex items-start gap-3">
                    <div className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    To completely rewrite the application with advanced features like image recognition and scan technology and turn the mobile solution into a progressive web application.
                  </li>
                </ul>
              </div>
              <button className="bg-primary text-white px-10 py-4 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all">
                View project
              </button>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://a.storyblok.com/f/86602/1186x800/2209dfed76/brandactif_mobile_screens.png" 
                alt="Case Study"
                className="size-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PDS Tabs Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-6">
            DevOps as Part of Product Development Services (PDS)
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
            Our devops consulting process brings DevOps into Product Development Services as a de-risked rollout - start with clarity on NFRs and ownership, implement in small increments, then harden for production without slowing delivery.
          </p>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
            <div className="space-y-4">
              {pdsTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left p-8 rounded-xl transition-all flex items-center gap-6 ${
                    activeTab === i 
                      ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                      : 'bg-white text-text-dark hover:bg-neutral-100'
                  }`}
                >
                  <img 
                    src={tab.icon} 
                    alt={tab.title} 
                    className={`size-14 object-contain ${activeTab === i ? 'brightness-[1000%] contrast-[1000%]' : ''}`}
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-lg font-black leading-tight">{tab.title}</span>
                </button>
              ))}
            </div>
            <div className="bg-white p-12 lg:p-20 rounded-2xl shadow-xl relative overflow-hidden min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src={pdsTabs[activeTab].icon} 
                    alt={pdsTabs[activeTab].title} 
                    className="absolute bottom-12 right-12 size-80 opacity-5 object-contain hidden xl:block"
                    referrerPolicy="no-referrer"
                  />
                  <h3 className="text-3xl font-black text-text-dark mb-8">{pdsTabs[activeTab].title}</h3>
                  <p className="text-xl font-bold text-text-dark mb-6">{pdsTabs[activeTab].desc}</p>
                  <ul className="space-y-4">
                    {pdsTabs[activeTab].items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg text-neutral-500">
                        <div className="size-2 rounded-full bg-primary mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
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
                "How To Reduce Manual Work By 40% With HR Automation Tools?",
                "How to validate your SaaS platform idea?",
                "SaaS or Mobile app MVP for $10k | Is it possible?"
              ].map((title, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                    <img 
                      src={`https://picsum.photos/seed/yt-devops-${i}/600/400`} 
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
        <div className="container text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-4">
            Interested in <span className="text-primary">DevOps services & solutions</span>?
          </h2>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-12 lg:p-16 rounded-3xl shadow-xl flex flex-col justify-between">
              <h3 className="text-3xl font-black text-text-dark mb-12 leading-tight">
                Get a <span className="text-primary">free quote</span> for your project. Reach out today!
              </h3>
              <div className="space-y-10 mb-16">
                {[
                  { name: 'Dawid Pośliński', role: 'CEO', img: 'https://a.storyblok.com/f/86602/1335x2000/ff4e2f29ab/dawid-poslinski.png' },
                  { name: 'Dariusz Wylon', role: 'CBO', img: 'https://a.storyblok.com/f/86602/600x900/ec000a90a3/dariusz-wylon.png' }
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
              <ul className="space-y-4">
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
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Name *</label>
                    <input type="text" placeholder="Name Surname" className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest">E-mail *</label>
                    <input type="email" placeholder="name.surname@company.com" className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Project description *</label>
                  <textarea rows={4} placeholder="Our goal is to launch / improve / scale a product that..." className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors resize-none"></textarea>
                </div>
                <div className="flex items-center gap-4 p-6 border-2 border-dashed border-neutral-200 rounded-xl hover:border-primary transition-colors cursor-pointer group">
                  <Plus className="size-6 text-neutral-400 group-hover:text-primary transition-colors" />
                  <span className="text-neutral-400 font-bold group-hover:text-primary transition-colors">Attach File</span>
                </div>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" className="mt-1.5" />
                    <span className="text-sm text-neutral-500 group-hover:text-text-dark transition-colors">Please send me an NDA</span>
                  </label>
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" className="mt-1.5" />
                    <span className="text-sm text-neutral-500 group-hover:text-text-dark transition-colors">I declare that I have read the Regulations of the newsletter and accept its contents.</span>
                  </label>
                  <p className="text-xs text-neutral-400">
                    By submitting this form, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link>.
                  </p>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16 relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] lg:text-[200px] font-black text-neutral-100 -z-10 uppercase">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-black text-text-dark relative z-10">FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-neutral-50 transition-colors group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-primary' : 'text-text-dark group-hover:text-primary'}`}>
                    {faq.question}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="size-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="size-5 text-neutral-400 group-hover:text-primary shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-neutral-500 leading-relaxed whitespace-pre-line">
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
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-text-dark">
              Our articles about <span className="text-primary">DevOps & Consulting</span>
            </h2>
            <Link to="/blog" className="hidden md:flex items-center gap-4 text-sm font-extrabold uppercase tracking-widest text-neutral-400 hover:text-primary transition-colors group">
              Read more
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <Link key={i} to={article.link} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest text-primary">
                    {article.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-black text-text-dark mb-6 group-hover:text-primary transition-colors line-clamp-3">
                    {article.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-4 text-sm text-neutral-400 font-medium">
                    <span>{article.date}</span>
                    <div className="size-1 rounded-full bg-neutral-200" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 md:hidden">
            <Link to="/blog" className="flex items-center justify-center gap-4 text-sm font-extrabold uppercase tracking-widest text-neutral-400 hover:text-primary transition-colors group">
              Read more
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsCloudServices;
