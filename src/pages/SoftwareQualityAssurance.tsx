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
  Smartphone,
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
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  ClipboardCheck,
  Bug,
  Activity,
  Globe,
  Lock,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareQualityAssurance = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { label: 'Delivered Projects', value: '150', suffix: '+', icon: <Layers className="size-8 text-primary" /> },
    { label: 'Years of experience', value: '18', suffix: '+', icon: <Clock className="size-8 text-primary" /> },
    { label: 'Certificates & awards', value: '20', suffix: '+', icon: <Award className="size-8 text-primary" /> },
  ];

  const features = [
    {
      title: 'Global Standards Compliance',
      items: [
        'Adherence to international quality and security standards like ISO, GDPR, and OWASP.'
      ],
      icon: <Globe className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Automated Testing',
      items: [
        'We leverage advanced automation frameworks to streamline repetitive test cases, ensuring faster, consistent, and more efficient results.',
        'Automated testing helps us save time while maintaining the precision needed for large-scale projects or frequent updates'
      ],
      icon: <Zap className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-3'
    },
    {
      title: 'Regression Testing',
      items: [
        'When you update or modify your software, new bugs can emerge. Our regression testing ensures that new changes do not negatively impact existing functionality, keeping your product stable and reliable'
      ],
      icon: <Activity className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Compatibility Testing',
      items: [
        'Your software must perform flawlessly across various platforms, devices, browsers, and operating systems. We test compatibility to ensure a consistent experience for all users, regardless of their setup.'
      ],
      icon: <Smartphone className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Manual Testing',
      items: [
        'From validating functionality to identifying edge-case scenarios, we ensure your product works seamlessly under real-world conditions.'
      ],
      icon: <UserCheck className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Performance Testing',
      items: [
        'Through rigorous stress and load testing, we measure your software’s ability to handle high traffic, complex operations, and large datasets'
      ],
      icon: <TrendingUp className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Advanced Tools and Frameworks',
      items: [
        'Utilization of the latest QA tools like Selenium, Appium, JIRA, and TestNG for robust and efficient testing.'
      ],
      icon: <Layers className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'CI/CD Support',
      items: [
        'Integrating seamlessly into your CI/CD pipelines and ensuring quality.'
      ],
      icon: <Activity className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-3'
    },
    {
      title: 'Detailed Reporting',
      items: [
        'Transparent and actionable insights with comprehensive test reports, metrics, and recommendations.'
      ],
      icon: <FileText className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'UX/UI Testing',
      items: [
        'Evaluating how users perceive and interact with your application.'
      ],
      icon: <Monitor className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'Security Testing',
      items: [
        'Protecting against vulnerabilities and threats that could compromise your data.'
      ],
      icon: <Shield className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: 'All in one',
      items: [
        'Full development',
        'UX/UI'
      ],
      icon: <CheckCircle2 className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-2'
    },
    {
      title: '+ Custom features',
      items: [
        'Your custom feature tailored to specific business needs.',
        'Integration with existing systems.',
        'Scalability options.'
      ],
      icon: <Plus className="size-10 text-primary" />,
      color: 'bg-neutral-100',
      span: 'row-span-3'
    }
  ];

  const industryTabs = [
    {
      title: 'Business / Enterprise Training Software',
      desc: 'In enterprise environments, reliability and audit readiness matter as much as features. We align integration needs and quality requirements early, so teams ship with fewer surprises across complex software development constraints.',
      benefits: [
        'Faster onboarding flows that reduce operational overhead',
        'Clear permission and role logic that supports compliance',
        'Stable integrations with identity and reporting tools',
        'Predictable scaling patterns for peak usage'
      ],
      icon: 'https://a.storyblok.com/f/86602/320x320/57db98e9fb/stats-hq.svg'
    },
    {
      title: 'Talent Management Software',
      desc: 'Talent platforms live or die on data accuracy, permissions, and trust in reporting. We design around domain constraints and workflow realities so your product stays consistent as teams, roles, and regions grow.',
      benefits: [
        'Cleaner candidate and employee data flows',
        'Secure access patterns for managers and recruiters',
        'Reporting that supports planning decisions',
        'Release friendly evolution for growing roadmaps'
      ],
      icon: 'https://a.storyblok.com/f/86602/150x150/f77abaa0ed/online-learning-platform-hq.svg'
    },
    {
      title: 'Self-service HR software',
      desc: 'Self service HR requires simple UX over complex rules, plus dependable integrations into payroll and identity systems. We focus on predictability, privacy, and operational stability to keep support tickets down.',
      benefits: [
        'Streamlined employee workflows',
        'Secure document handling and approvals',
        'Reliable integrations into payroll and identity',
        'Consistent performance across devices'
      ],
      icon: 'https://a.storyblok.com/f/86602/150x150/a41539ab41/it-staff-hq.svg'
    }
  ];

  const faqs = [
    {
      question: 'What is software quality assurance and how is it different from quality control?',
      answer: "Software quality assurance is the planned set of quality assurance activities that prevent defects across the entire lifecycle, from requirements to release. Quality control is the verification layer that checks results through software testing and QA testing, such as reviews and executions of test cases. In practice, software quality assurance connects quality management with day to day QA processes, so teams can ensure compliance with quality standards, industry standards, and defined standards. It also supports quality management systems by keeping evidence, audits, and related documents consistent and easy to trace."
    },
    {
      question: 'How do you define quality objectives and quality requirements for software development?',
      answer: "Start by mapping business goals to measurable quality objectives, then translate them into quality requirements your software developers can build against. This is quality planning that aligns project management and the development process with clear acceptance criteria, risk management priorities, and release timing. Define what the final product must achieve in reliability, security, and usability, then decide how you will detect defects early using testing processes, quality metrics, and feedback loops. This keeps software quality visible and actionable instead of subjective."
    },
    {
      question: 'What are the key elements of reliable QA processes in software engineering?',
      answer: "Reliable QA processes rely on defined processes, clear ownership, and tight feedback loops between the QA team and engineers. The key elements usually include shared quality processes, consistent test case design, regression testing scope rules, and effective communication so issues do not get lost between roles. Add change management so updates to source code, environments, and configuration management do not break repeatability. Strong software engineering quality assurance practices also include lightweight documentation and predictable reporting so project managers can make decisions quickly."
    },
    {
      question: 'How does test automation fit into a modern release workflow without creating lock in?',
      answer: "Test automation works best when it protects critical paths on every change and stays portable in your stack. Use automation scripts that are readable, versioned with the source code, and paired with documented test cases so ownership stays with your team. Connect checks to build automation and configuration management to reduce environment drift and keep releases consistent. Treat automation as a QA toolkit, not a separate system, so software testing supports delivery speed while improving software quality and overall quality standards."
    },
    {
      question: 'What is regression testing and how do you decide what to cover first?',
      answer: "Regression testing verifies that new changes did not break existing behavior, especially around critical user flows and integrations. Prioritize using risk management and defect data, focusing on areas with frequent changes, high impact incidents, or recurring quality issues. Start with a small set of high value test cases, then expand coverage based on collected data, production signals, and quality metrics that monitor trends over time. This keeps testing processes efficient and prevents a bloated suite that slows releases."
    }
  ];

  const articles = [
    {
      title: 'Why Is a Quality Assurance Tester Needed On a Software Development Team?',
      category: 'Software Development',
      date: 'Oct 20, 2023',
      readTime: '15 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2023/10/miniaturka-why-is-a-quality-assurance-tester-needed-on-a-software-development-team_.jpg',
      link: '/blog/why-is-a-quality-assurance-tester-needed-on-a-software-development-team'
    },
    {
      title: 'Maestro – Automation Testing for Mobile Apps and Mobile Web Apps Made Easy',
      category: 'QA',
      date: 'Jan 4, 2024',
      readTime: '14 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2024/01/miniaturka-maestro-automation-testing-for-mobile-apps-and-mobile-web-apps-made-easy.png',
      link: '/blog/maestro-automation-testing-for-mobile-apps-and-mobile-web-apps-made-easy'
    },
    {
      title: 'Technology Stack and Cloud infrastructure Consulting',
      category: 'Software Development',
      date: 'Dec 5, 2024',
      readTime: '13 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2024/12/miniatura_technology_stack_and_cloud_infrastructure_consulting.png',
      link: '/blog/technology-stack-and-cloud-infrastructure-consulting'
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
          <span className="text-text-dark font-medium">Software Quality Assurance Services</span>
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
                Software <span className="text-primary">Quality Assurance</span>
              </h1>
              <p className="text-lg text-neutral-500 leading-relaxed mb-8">
                Software quality assurance (SQA) helps you reduce incident risk, protect user trust, and keep engineering load predictable. We start with a quick audit, align on a risk based strategy, execute with your team and tooling, then report back with clear priorities and ownership so decisions stay in your hands. Trusted delivery matters, below you will see teams and products we have supported, so you can judge fit fast.
              </p>
              <div className="space-y-4 mb-10">
                <p className="font-bold text-primary">Why partner with us?</p>
                <ul className="space-y-4">
                  {[
                    { label: "Expert Knowledge", text: "Our team consists of experienced QA specialists who are proficient in the latest tools and testing methodologies." },
                    { label: "Flexible Approach", text: "We tailor our services to your needs and schedule." },
                    { label: "Transparent Reports", text: "You receive detailed test results and actionable recommendations." },
                    { label: "Cost and Time Efficiency", text: "Early detection of errors prevents costly fixes later in the development process." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-dark font-medium">
                      <div className="size-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <div>
                        <span className="text-primary font-bold">{item.label}</span>: {item.text}
                      </div>
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
                src="https://a.storyblok.com/f/86602/824x424/74f4775582/fn7a9804.png" 
                alt="Software Quality Assurance"
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
              { name: 'Humly', url: 'https://a.storyblok.com/f/86602/128x56/d7db557b4c/humly-dark.png' },
              { name: 'Northpass', url: 'https://a.storyblok.com/f/86602/192x44/ae293dc61f/northpass-dark.png' },
              { name: 'Alyne', url: 'https://a.storyblok.com/f/86602/176x52/0214667cc7/alyne-dark.png' },
              { name: 'SquadLocker', url: 'https://a.storyblok.com/f/86602/112x53/217337caf5/squad-locker-dark.png' },
              { name: 'Neutopia', url: 'https://a.storyblok.com/f/86602/240x27/5743492c17/neutopia-dark.png' },
              { name: '9Teams', url: 'https://a.storyblok.com/f/86602/145x38/3c518f3655/9teams-dark.png' },
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

      {/* About Us Section */}
      <section id="about-us" class="py-24 lg:py-36">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://a.storyblok.com/f/86602/698x930/4fce597d18/applicant-tracking-system-hero_2.JPG" 
                alt="Software Quality"
                className="rounded-2xl shadow-xl w-full max-h-[730px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-black text-text-dark leading-tight mb-8">
                How we can help build the <span className="text-primary">highest software quality</span>
              </h2>
              <div className="space-y-6 text-lg text-neutral-500 leading-relaxed mb-12">
                <p>
                  When a release goes wrong, the cost shows up fast in incidents, firefighting, and missed roadmap windows. Our quality assurance approach focuses on release readiness and early signal, so your team spends less time reacting and more time delivering. We translate quality objectives into a practical testing plan, set measurable quality metrics, and keep delivery predictable with a steady reporting cadence and clear ownership.
                </p>
                <ul className="space-y-4">
                  {[
                    'Earlier defect triage and fewer last minute surprises before release',
                    'Risk management that prioritizes what to test and what to ship now',
                    'Clear, repeatable quality gates aligned with your release cadence',
                    'Actionable reporting that makes responsibility and next steps obvious',
                    'More stable user experience that supports customer satisfaction over time'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-dark font-medium">
                      <div className="size-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                  <span className="font-bold text-text-dark">No risk. Just results.</span> Get a feel for our process, speed, and quality — work with our developers for a trial sprint and see why global companies choose Selleo.
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
                  src="https://a.storyblok.com/f/86602/699x628/a8346ac709/try-developers-image.png" 
                  alt="Try our developers"
                  className="w-full h-auto object-contain"
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
            We are experienced with <span className="text-primary">software testing services</span> and integrating many custom features
          </h2>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`${feature.color} p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 ${feature.span || ''}`}
              >
                <div className="mb-6 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                  {feature.title}
                </h3>
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
            <div className="hidden lg:block lg:col-span-2 lg:row-span-2">
              <img 
                src="https://a.storyblok.com/f/86602/824x424/74f4775582/fn7a9804.png" 
                alt="QA Large"
                className="w-full h-full object-cover rounded-xl shadow-lg"
                referrerPolicy="no-referrer"
              />
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
              <span className="text-primary">Customized AI features</span> that we can use while software quality development
            </h2>
            <p className="text-xl text-neutral-500 leading-relaxed mb-12">
              AI can assist your QA team by reducing repetitive work and improving triage accuracy, without replacing engineering judgment. We keep governance explicit with defined data boundaries, measurable KPIs, and a rollback plan.
            </p>
            <button className="bg-primary text-white px-10 py-5 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
              Implement AI Now
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://selleo.com/uploads/ai_section_head_desktop.png" 
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
                Achieve <span className="text-primary">business goals</span> faster!
              </h2>
              <p className="text-xl text-neutral-500 mb-12">
                Do you need support with software quality? Take advantage of our consultations to connect with experts in cutting-edge technologies who can help streamline your project and minimize costs.
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
            Our custom <span className="text-primary">software and mobile app development</span> case studies
          </h2>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400">e-commerce app</span>
              <h3 className="text-3xl lg:text-4xl font-black text-text-dark leading-tight">
                BrandActif is a visual commerce app with <span className="text-primary">scalable, real-time GraphQL API</span>
              </h3>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Our Selleo developers focused on building a new solution, accessible on any device, from scratch having in mind three pillars of the initial idea: publishing, broadcasting, and using branded assets. We applied an advanced image recognition solution and scanning technology to enable users to interact with brands in a unique way.
              </p>
              <button className="bg-primary text-white px-10 py-4 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all">
                View project
              </button>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://a.storyblok.com/f/86602/1920x1080/576f35cb72/brandactif_hero_desktop.png" 
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
            Together, we can create the <span className="text-primary">highest-quality applications</span> for any context
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
            From quality assurance services to custom software and more. We provide the technology and expertise.
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
                    src={industryTabs[activeTab].icon} 
                    alt={industryTabs[activeTab].title} 
                    className="absolute bottom-12 right-12 size-80 opacity-5 object-contain hidden xl:block"
                    referrerPolicy="no-referrer"
                  />
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
                "AWS for Automotive Solutions",
                "7 Practical Steps to *PROPERLY* Validate SaaS Ideas.",
                "5 Mistakes That SINK 90% Digital Products."
              ].map((title, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                    <img 
                      src={`https://picsum.photos/seed/yt-qa-${i}/600/400`} 
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
              Interested in software <span className="text-primary">quality assurance services</span>?
            </h2>
          </div>
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
              Our articles about <span className="text-primary">QA & development</span>
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

export default SoftwareQualityAssurance;
