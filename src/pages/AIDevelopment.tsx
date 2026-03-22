import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Cpu,
  TrendingUp,
  UserCheck,
  Bell,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-text-dark group-hover:text-primary'}`}>
          {question}
        </span>
        <ChevronDown className={`size-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-neutral-500 leading-relaxed whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AIDevelopment = () => {
  const [activeTab, setActiveTab] = useState(0);

  const aiServices = [
    {
      title: 'Generative AI: AI agents for natural language processing',
      icon: 'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F320x321%2F3f1c3282de%2Fstats.png&w=320&h=321',
      desc: 'Best for: support automation, internal copilots, content workflows. Typical inputs: product docs, tickets, conversations, knowledge bases. Integration & outcome: connects via APIs to your tools, speeds up response and decision cycles with clear guardrails across the ai lifecycle.',
      bullets: [
        'Grounded outputs from your approved sources',
        'Human review and audit-friendly logging',
        'Maintainable implementation paths for handover'
      ]
    },
    {
      title: 'Artificial intelligence & machine learning',
      icon: 'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F320x320%2Fa0d340afa6%2Fstats-1.png&w=320&h=320',
      desc: 'Best for: forecasting, scoring, anomaly detection, recommendations. Typical inputs: transactions, events, logs, user behavior, operational data. Integration & outcome: embeds into your platform as services lines you can monitor, version, and evolve without disrupting core delivery.',
      bullets: [
        'Clear interfaces for product teams and analytics',
        'Observability and rollback-ready releases',
        'Designed for long-term maintainability'
      ]
    },
    {
      title: 'Intelligent Image Analysis',
      icon: 'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F320x320%2Ff310bd8bff%2Fstats-2.png&w=320&h=320',
      desc: 'Best for: visual QA, document processing, moderation, inspection. Typical inputs: images, scans, video frames, labeled datasets. Integration & outcome: ships as production APIs and pipelines that plug into your workflows and reporting.',
      bullets: [
        'Quality thresholds and review workflows',
        'Deployment-ready integration patterns',
        'Measurable outputs you can track over time'
      ]
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Breadcrumbs */}
      <div className="container py-6">
        <nav className="flex text-sm text-neutral-400 gap-2 items-center">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <span>/</span>
          <span className="text-text-dark font-bold">AI Development</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-gradient-to-r from-[#F5F5F5] to-[#E5E7F4]">
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -top-10 left-0 text-primary opacity-20">
                <svg width="80" height="80" viewBox="0 0 55 55" fill="none">
                  <path d="M27.3702 54.7203L26.433 47.8614C26.2672 46.6479 26.1843 46.0411 26.0816 45.5004C24.4581 36.9555 17.7748 30.2723 9.22997 28.6488C8.68926 28.5461 8.0825 28.4631 6.86896 28.2973L0.010025 27.3602L6.86897 26.423C8.0825 26.2572 8.68926 26.1743 9.22997 26.0716C17.7748 24.4481 24.4581 17.7648 26.0816 9.21998C26.1843 8.67927 26.2672 8.0725 26.433 6.85897L27.3702 3.05176e-05L28.3073 6.85897C28.4731 8.07251 28.556 8.67927 28.6588 9.21998C30.2823 17.7648 36.9655 24.4481 45.5104 26.0716C46.0511 26.1743 46.6579 26.2572 47.8714 26.423L54.7303 27.3602L47.8714 28.2973C46.6579 28.4632 46.0511 28.5461 45.5104 28.6488C36.9655 30.2723 30.2823 36.9555 28.6588 45.5004C28.556 46.0411 28.4731 46.6479 28.3073 47.8614L27.3702 54.7203Z" fill="currentColor" />
                </svg>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-text-dark leading-[0.9] tracking-tighter">
                <span className="text-primary">Artificial Intelligence</span><br />
                Solutions
              </h1>
            </div>
            <p className="text-xl text-neutral-600 max-w-lg leading-relaxed">
              We build applied artificial intelligence solutions aligned with your business goals and delivery constraints. In 2–4 weeks, we assess data readiness, risks, and dependencies, then deliver a scoped plan, a P0 prototype, and a clear integration path.
            </p>
            
            <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-primary/20">
              Book a Call
            </button>

            <div className="space-y-6 pt-12">
              <p className="text-sm text-neutral-500 font-normal">Global brands and educational institutions benefit from <strong>ai solutions</strong> we've developed:</p>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center opacity-40 grayscale">
                {[
                  'https://a.storyblok.com/f/86602/145x38/3c518f3655/9teams-dark.png',
                  'https://a.storyblok.com/f/86602/112x53/217337caf5/squad-locker-dark.png',
                  'https://a.storyblok.com/f/86602/176x52/0214667cc7/alyne-dark.png',
                  'https://a.storyblok.com/f/86602/200x61/0b8ccbd2e6/battleriff-dark.png',
                  'https://a.storyblok.com/f/86602/256x41/6ee0fa3639/defined-learning-dark.png',
                  'https://a.storyblok.com/f/86602/128x56/d7db557b4c/humly-dark.png',
                  'https://a.storyblok.com/f/86602/240x27/5743492c17/neutopia-dark.png'
                ].map((src, i) => (
                  <img key={i} src={src} alt="Brand" className="h-6 object-contain" referrerPolicy="no-referrer" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img 
              src="https://selleo.com/.netlify/images?url=%2Fuploads%2Fai_section_head_desktop.png&w=1680&h=1600" 
              alt="AI Solutions" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Sample use cases of <span className="text-primary">AI implementation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Healthcare',
                icon: 'https://a.storyblok.com/f/86602/58x58/cf9156c168/gamification-software-1.svg',
                desc: 'Triage cases and summarize records for faster decisions. Uses notes, forms, and medical images; fits into EHR workflows and audit requirements.'
              },
              {
                title: 'SaaS',
                icon: 'https://a.storyblok.com/f/86602/65x64/45c478ec5c/learning-management-software-1.svg',
                desc: 'Reduce ticket time and churn with applied automation delivered through our SaaS development services, using product events, logs, and your knowledge base.'
              },
              {
                title: 'E-Commerce',
                icon: 'https://a.storyblok.com/f/86602/64x65/21b618b730/gamification-software.svg',
                desc: 'Boost conversion with smarter search, recommendations, and catalog QA. Runs on clickstream, orders, and product data-built to integrate with your stack.'
              },
              {
                title: 'LMS',
                icon: 'https://a.storyblok.com/f/86602/64x64/da270e0d5a/online-learning-platform.svg',
                desc: 'Personalize learning paths and spot drop-off early to raise completion. Uses learner activity, assessments, and content metadata (SCORM/xAPI).'
              },
              {
                title: 'Finance',
                icon: 'https://a.storyblok.com/f/86602/64x65/111ae897bd/learning-management-software.svg',
                desc: 'Detect fraud and automate checks without slowing good users. Needs transactions, behavioral signals, and KYC documents; supports review workflows.'
              },
              {
                title: 'Retail',
                icon: 'https://a.storyblok.com/f/86602/64x65/00aff2b24f/online-learning-platform-1.svg',
                desc: 'Optimize inventory and staffing, plus predictive maintenance for stores and warehouses. Uses POS, supply, and sensor/IoT data; integrates with ERP.'
              }
            ].map((card, i) => (
              <div key={i} className="group p-10 rounded-2xl bg-white/10 backdrop-blur-xl hover:bg-primary transition-all duration-500">
                <div className="space-y-6">
                  <img src={card.icon} alt={card.title} className="size-16 group-hover:brightness-0 group-hover:invert transition-all" referrerPolicy="no-referrer" />
                  <h3 className="text-2xl font-black">{card.title}</h3>
                  <p className="text-neutral-400 group-hover:text-white transition-colors leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-neutral-100 overflow-hidden">
        <div className="container">
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">OUR EXPERTISE</span>
            <h2 className="text-4xl lg:text-5xl font-black text-text-dark">
              How we helped clients <span className="text-primary">grow their businesses</span>
            </h2>
          </div>

          <div className="space-y-32">
            {[
              {
                kicker: 'Brandactif',
                title: 'AI & Computer Vision for Seamless Physical-to-Digital Shopping',
                desc: 'The client harnessed AI and Computer Vision technologies to innovate marketing strategy and customer experience. Our AI-powered solution recognized content from printed material and videos, linking customers to the relevant product page for easy purchasing.',
                image: 'https://a.storyblok.com/f/86602/1110x777/ea5eac09b2/ai_page-case_study_1.gif'
              },
              {
                kicker: 'QSTREAM',
                title: 'AI-Powered eLearning for Enhanced Employee Performance',
                desc: 'Qstream is a powerful e-learning SaaS-based tool designed to support corporate learning programs and enhance employee performance. The platform offers engaging courses that actively involve learners, fostering a productive learning environment.',
                image: 'https://a.storyblok.com/f/86602/1183x646/75688a0351/ai-landing_page-case_study_2.png',
                reverse: true
              },
              {
                kicker: 'EXEGOV',
                title: 'Streamlined Productivity & Intelligent OKR Generation with AI-Powered Solutions',
                desc: 'Our main task was to set up the application environment and implement AI functionalities through OpenAI integration. We developed a login panel with an authentication feature and a user profile section where they can manage their information.',
                image: 'https://a.storyblok.com/f/86602/900x563/5a22db3c55/ai_page-case_study_2.gif'
              }
            ].map((study, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${study.reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-8">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">{study.kicker}</span>
                  <h3 className="text-3xl lg:text-4xl font-black text-text-dark leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-lg text-neutral-500 leading-relaxed">
                    {study.desc}
                  </p>
                  <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all">
                    View project
                  </button>
                </div>
                <div className="flex-1">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Experts Section */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                We are… <span className="text-primary">AI Experts</span> Who Understand Your Business
              </h2>
              <div className="space-y-8 text-lg text-neutral-400 leading-relaxed">
                <p>Your business is unique, and so are the challenges you face. You need a team of highly skilled developers dedicated to delivering tailored AI solutions that meet the needs of your business.</p>
                <p>With deep expertise in machine learning, natural language processing, and automation, we’re equipped to solve even the most complex challenges. We work closely with you to develop solutions that are both practical and scalable.</p>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-neutral-800">
                {[
                  { value: '51%', label: 'mHealth users favor AI' },
                  { value: '63%', label: 'Companies gain revenue' },
                  { value: '45%', label: 'Annual growth in EdTech' }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-4xl font-black text-primary">{stat.value}</div>
                    <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://a.storyblok.com/f/86602/943x1450/816e60aa59/ai-model-3.png" 
                alt="AI Expert" 
                className="w-full h-auto rounded-3xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bento Grid */}
          <div className="mt-40 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="text-4xl font-black"><span className="text-primary">AI</span> in the world</h3>
              <p className="text-neutral-400">Check how AI can revolutionizing digital products. How can improved accessibility, scalability, security, cost-efficient etc.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Improved accessibility', desc: 'Generate captions, transcripts, and alt-text from existing content to make UX more inclusive.' },
                { title: 'Scalability', desc: 'Route requests, prioritize queues, and precompute insights to accelerate delivery during traffic spikes.' },
                { title: 'Security', desc: 'Detect anomalous logins and transactions and surface suspicious patterns in real time.' },
                { img: 'https://a.storyblok.com/f/86602/396x728/4637ea6d34/ai-model-4.png' },
                { title: 'Cost efficiency', desc: 'Automate repetitive back-office steps and reduce manual review time without adding headcount.' },
                { title: 'Personalization', desc: 'Tailor recommendations and in-app guidance using behavior signals you already collect.' },
                { title: 'Automated decision-making', desc: 'Score, rank, and route cases to the right workflow-fast, consistent, and auditable.' },
                { img: 'https://a.storyblok.com/f/86602/1292x1622/9f9e5709e0/ai-model-2.png' },
                { title: 'User engagement', desc: 'Summarize long screens, suggest next best actions, and answer product questions inside the UI.' },
                { title: 'Predictive analytics', desc: 'Forecast demand, churn, or capacity so teams act before issues escalate.' }
              ].map((item, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden ${item.img ? 'row-span-2' : 'p-10 bg-white/10 backdrop-blur-xl'}`}>
                  {item.img ? (
                    <img src={item.img} alt="AI" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-5xl font-black"><span className="text-primary">AI</span> Services</h2>
            <p className="text-neutral-400">We deliver ai services across three delivery tracks - built to fit your existing systems and keep ownership on your side.</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="space-y-4">
              {aiServices.map((service, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full p-8 rounded-2xl text-left transition-all flex items-center gap-6 ${activeTab === i ? 'bg-primary text-white' : 'bg-white/10 text-neutral-400 hover:bg-white/20'}`}
                >
                  <img src={service.icon} alt="" className={`size-12 ${activeTab === i ? 'brightness-0 invert' : ''}`} referrerPolicy="no-referrer" />
                  <span className="text-lg font-bold leading-tight">{service.title}</span>
                </button>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-white leading-tight">
                  {aiServices[activeTab].title}
                </h3>
                <p className="text-xl text-neutral-400 leading-relaxed">
                  {aiServices[activeTab].desc}
                </p>
                <ul className="space-y-4">
                  {aiServices[activeTab].bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-4 text-neutral-300">
                      <Check className="size-6 text-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft CTA Section */}
      <section className="relative h-[600px] lg:h-[800px] overflow-hidden">
        <img 
          src="https://a.storyblok.com/f/86602/1920x980/b87c26be14/soft-cta-image-irek.jpg" 
          alt="CTA Background"
          className="absolute inset-0 size-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative h-full flex items-center justify-end">
          <div className="bg-white p-12 lg:p-20 rounded-3xl shadow-2xl max-w-2xl space-y-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 block">TRUST OUR EXPERIENCE</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight">
              Create your <span className="text-primary">competitive edge</span>!
            </h2>
            <p className="text-lg text-neutral-500">
              Consult your custom artificial intelligence idea with a software development and artificial intelligence integration company.
            </p>
            <div className="grid grid-cols-3 gap-8 opacity-50 grayscale">
              {[
                'https://a.storyblok.com/f/86602/144x32/970badfe90/google-play-dark.png',
                'https://a.storyblok.com/f/86602/95x32/f77bb9d6e0/xapi-dark.png',
                'https://a.storyblok.com/f/86602/128x32/10d288c54c/react-dark.png',
                'https://a.storyblok.com/f/86602/93x32/50bc272795/appstore-dark.png',
                'https://a.storyblok.com/f/86602/94x56/be74c3beea/nextjs-dark.png',
                'https://a.storyblok.com/f/86602/104x24/7cd52a77dd/scorm-dark.png'
              ].map((src, i) => (
                <img key={i} src={src} alt="Tech" className="h-6 object-contain" referrerPolicy="no-referrer" />
              ))}
            </div>
            <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all">
              Book a call
            </button>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
            <div className="space-y-8">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 block">OUR YOUTUBE</span>
              <h2 className="text-4xl lg:text-5xl font-black text-text-dark leading-tight">
                Get <span className="text-primary">expert advice</span> on AI
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Go through various industries and learn the hidden gems revealed by our experts. Those insights may help you make the right business decision.
              </p>
              <a href="https://www.youtube.com/selleowebmobiletv" className="inline-flex items-center gap-4 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all">
                <Youtube className="size-6" />
                Our YouTube
              </a>
            </div>
            <div className="grid gap-8">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/VdopnE5f34g" 
                  title="AI in LMS" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/x7zDPXc098A" title="AI in SaaS" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-wzGANOaa60" title="Why AI in SaaS" frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-neutral-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-20 relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-[10rem] font-black text-neutral-100 -z-10 uppercase">FAQ</div>
            <h2 className="text-4xl lg:text-5xl font-black text-text-dark uppercase tracking-tighter">
              AI Development <span className="text-primary">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How do you map business needs to artificial intelligence solutions that ship?',
                a: 'We translate business needs into scoped AI solutions with clear inputs, outputs, and seamless integration so artificial intelligence AI becomes maintainable software development, not a demo. You get an AI strategy that targets measurable outcomes and operational efficiency from real data.'
              },
              {
                q: 'How do you align business goals with AI adoption and measurable outcomes?',
                a: 'We connect business goals to AI adoption by defining success metrics upfront and prioritizing AI initiatives that improve outcomes and customer satisfaction. This keeps financial planning realistic and focuses AI projects on competitive advantage.'
              },
              {
                q: 'What is data readiness and how do you confirm we are AI ready?',
                a: 'Data readiness means your data, access, and data governance are sufficient to run AI applications safely, including security and data privacy controls. We validate real data quality, data silos, and integration paths so you know what is needed to become AI ready.'
              },
              {
                q: 'Which AI projects deliver value fastest for a CTO?',
                a: 'We recommend AI projects that streamline processes and remove repetitive tasks quickly, such as instant support, routing, and forecasting, because they are easy to measure. These AI applications typically use existing data analytics signals and fit your current business strategies.'
              }
            ].map((faq, i) => (
              <div key={i}>
                <FaqItem question={faq.q} answer={faq.a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-32 bg-neutral-100">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-text-dark">
              Our Articles about <span className="text-primary">Artificial Intelligence Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '5 AI-Powered Innovations Transforming LMS and Changing E-learning Industry',
                category: 'LMS',
                image: 'https://cms.selleo.com/wp-content/uploads/2023/06/sm-5-ai-powered-innovations-transforming-learning-management-systems-01.png',
                date: 'Jun 20, 2023',
                readTime: '12 min read'
              },
              {
                title: 'What Are the Challenges of Integrating AI into Existing SaaS Platforms?',
                category: 'SAAS',
                image: 'https://cms.selleo.com/wp-content/uploads/2024/03/what-are-the-challenges-of-integrating-ai-into-existing-saas-platforms_.jpg',
                date: 'Mar 22, 2024',
                readTime: '11 min read'
              },
              {
                title: 'How Can AI Be Used to Improve User Experience in SaaS Applications',
                category: 'SAAS',
                image: 'https://cms.selleo.com/wp-content/uploads/2024/02/miniatura-how-can-ai-be-used-to-improve-user-experience-in-saas-applications.jpg',
                date: 'Feb 22, 2024',
                readTime: '13 min read'
              }
            ].map((article, i) => (
              <div key={i} className="group cursor-pointer space-y-6">
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <img src={article.image} alt={article.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-black text-neutral-400 uppercase tracking-widest">{article.category}</span>
                  <h3 className="text-xl font-bold text-text-dark group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <div className="text-sm text-neutral-400">
                    {article.date} • {article.readTime}
                  </div>
                </div>
              </div>
            ))}
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
      </section>
    </div>
  );
};

export default AIDevelopment;
