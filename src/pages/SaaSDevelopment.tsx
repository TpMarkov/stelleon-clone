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
  LayoutGrid
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FaqItemProps {
  question: string;
  answer: string;
  key?: number;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-primary' : 'text-text-dark group-hover:text-primary'}`}>
          {question}
        </span>
        <ChevronDown className={`size-6 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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

const SaaSDevelopment = () => {
  return (
    <div className="pt-24">
      {/* Breadcrumbs */}
      <div className="container py-6">
        <nav className="flex text-sm text-neutral-400 gap-2 items-center">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <span>/</span>
          <span className="text-text-dark font-bold">SaaS Development</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative pb-20 lg:pb-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold text-text-dark leading-tight">
                <span className="text-primary">SaaS</span> Development Services
              </h1>
              <p className="text-lg text-neutral-500 leading-relaxed max-w-xl">
                We handle every aspect of the SaaS development process from design and development to maintenance for customers in various industries. Whether you're in healthcare, finance, or any other industry, we have the knowledge and experience to create successful SaaS solutions for your business. Our goal is to provide our clients with reliable and effective SaaS products that they can depend on to grow their business.
              </p>
              <ul className="space-y-4">
                {['Close collaboration', 'Innovative design', 'Increased ROI'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-dark font-bold">
                    <div className="size-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-primary/20">
                Book a call
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://a.storyblok.com/f/86602/1920x980/29ceaf1a2e/saas-development-company.jpg" 
                alt="SaaS Development"
                className="w-full h-auto rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Brands */}
          <div className="mt-20 pt-10 border-t border-neutral-100">
            <p className="text-sm text-neutral-400 mb-8">Global brands and enterprise institutions benefit from digital products we've developed:</p>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {[
                'https://a.storyblok.com/f/86602/256x41/6ee0fa3639/defined-learning-dark.png',
                'https://a.storyblok.com/f/86602/250x56/ef52200a5b/catalyst.webp',
                'https://a.storyblok.com/f/86602/185x56/60c378da53/bode.webp',
                'https://a.storyblok.com/f/86602/254x56/155d90d0cf/breezeway_logo-svg-1.webp',
                'https://a.storyblok.com/f/86602/192x44/ae293dc61f/northpass-dark.png',
                'https://a.storyblok.com/f/86602/220x56/df4e7d8285/menasa.webp',
                'https://a.storyblok.com/f/86602/176x52/0214667cc7/alyne-dark.png'
              ].map((src, i) => (
                <img key={i} src={src} alt="Brand" className="h-6 lg:h-8 object-contain mx-auto" referrerPolicy="no-referrer" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Drivers Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://a.storyblok.com/f/86602/395x624/c4e75aa517/serivces-saas.png" 
                alt="Our Team"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-10 order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight">
                  How we drive your <span className="text-primary">SaaS solutions</span> to success
                </h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  With our expertise, we can lead you to success with a custom solution answering your and your clients’ needs.
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  SaaS applications have totally disrupted on-premise solutions and become an essential part of digital transformation. Our comprehensive approach means you get a SaaS product that's built to convert, scale, and thrive.
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  Create unique designs that captivate your customers and give you an edge over your competitors. Design SaaS application architecture from the ground up with scalability and security in mind. Build your SaaS product faster with our over 15+ years of SaaS application development expertise and know-how.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Make your SaaS stand out in the cloud',
                    'Build a secure, scalable, multi-tenant application',
                    'Leverage our expertise & save time and money'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-text-dark font-bold">
                      <Check className="size-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-neutral-200">
                {[
                  { label: 'Delivered Projects', value: '150+', icon: Layers },
                  { label: 'Years of experience', value: '18+', icon: Clock },
                  { label: 'Certificates & awards', value: '20+', icon: Shield }
                ].map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <stat.icon className="size-8 text-primary mb-4" />
                    <div className="text-3xl font-black text-text-dark">{stat.value}</div>
                    <div className="text-sm text-neutral-400 font-bold uppercase tracking-wider leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Offer Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-neutral-100 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row items-center">
            <div className="p-12 lg:p-20 flex-1 space-y-8">
              <h2 className="text-5xl lg:text-7xl font-light text-text-dark leading-none">
                <span className="font-black">Try our developers.</span><br />
                Free for 2 weeks.
              </h2>
              <p className="text-xl text-neutral-600 max-w-xl">
                <span className="font-bold">No risk. Just results.</span> Get a feel for our process, speed, and quality — work with our developers for a trial sprint and see why global companies choose webDevBg.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all flex items-center gap-3">
                  Test our team
                  <ArrowRight className="size-5" />
                </button>
                <button className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                  Share this offer
                </button>
              </div>
            </div>
            <div className="hidden lg:block w-1/3 p-12">
              <img 
                src="https://a.storyblok.com/f/86602/699x628/a8346ac709/try-developers-image.png" 
                alt="Trial Offer"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight">
              We know how to integrate many features into your <span className="text-primary">SaaS application</span>
            </h2>
            <p className="text-lg text-neutral-500">
              Our dedicated SaaS software development team with hands-on experience and a proven custom development process can quickly bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AI-powered chatbots',
                items: ['24/7 customer support', 'Customer feedback collection', 'Fraud detection', 'Lead generation', 'Enhanced engagement'],
                icon: Brain,
                span: 'row-span-2'
              },
              {
                title: 'Voice-enabled user interfaces',
                items: ['Voice search optimization', 'Accessibility', 'User behavior insights', 'Hands-free operation', 'Personalization'],
                icon: MousePointer2,
                span: 'row-span-2'
              },
              {
                title: 'Low-Code/No-Code platforms',
                items: ['Drag-and-drop interface', 'Rapid deployment', 'Accessibility', 'Cost-effective development', 'Customization'],
                icon: Code,
                span: 'row-span-2'
              },
              {
                title: 'Advanced SaaS solutions',
                items: ['Industry-specific features', 'Regulatory compliance', 'Optimized workflows', 'Expertise integration', 'Market expansion'],
                icon: Globe,
                span: 'row-span-2'
              },
              {
                title: 'Advanced security',
                items: ['Multi-factor authentication', 'Data encryption', 'User education'],
                icon: Lock
              },
              {
                title: 'Analysis tools',
                items: ['Customer feedback analysis', 'Behavioral insights', 'Targeted marketing'],
                icon: BarChart3
              },
              {
                title: 'Pricing models',
                items: ['Flexible billing', 'Scalable plans', 'Transparent pricing', 'Customer retention', 'Revenue forecasting'],
                icon: CreditCard
              },
              {
                title: 'Mobile',
                items: ['Responsive design', 'Offline functionality', 'Gamification elements', 'Push notifications'],
                icon: Smartphone
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className={`group p-8 rounded-2xl bg-neutral-50 hover:bg-primary transition-all duration-500 hover:-translate-y-2 ${feature.span || ''}`}
              >
                <div className="space-y-6">
                  <feature.icon className="size-10 text-primary group-hover:text-white transition-colors" />
                  <h3 className="text-2xl font-extrabold text-text-dark group-hover:text-white transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-neutral-500 group-hover:text-white/80 transition-colors text-sm">
                        <div className="size-1.5 rounded-full bg-primary group-hover:bg-white mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-200">
        <div className="container relative z-10">
          <div className="max-w-2xl space-y-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 block">AI IMPLEMENTATION</span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-text-dark leading-tight">
              <span className="text-primary">Customized AI features</span> that we can implement into your SaaS platform
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Implementing AI in a SaaS business can significantly improve customer experience by offering personalized recommendations and automating support, boosting user satisfaction and retention. It optimizes operations by automating repetitive tasks, lowering operational costs, and increasing efficiency. AI-powered analytics provide valuable insights for better decision-making and predictive capabilities, helping businesses stay ahead of trends.
            </p>
            <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-primary/20">
              Implement AI Now
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://a.storyblok.com/f/86602/1680x1600/39678e7884/ai_section_head_desktop.png" 
            alt="AI"
            className="w-full h-full object-cover object-left"
            referrerPolicy="no-referrer"
          />
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
              Consult your app project with a SaaS software development company.
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

      {/* Case Studies Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 block">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark">
              Our <span className="text-primary">SaaS development</span> case studies
            </h2>
          </div>

          <div className="space-y-32">
            {[
              {
                title: 'A visualization data tool developed to serve as a team skill database and a personal strengths growth tracker',
                desc: 'webDevBg augmented the MuchSkills team helping with full-stack development. The team was responsible for including skill planning, a timeline for skill development forecasting, and additional features like a skill sidebar and project management tracker.',
                image: 'https://a.storyblok.com/f/86602/1920x1080/48cba6f989/muchskills-dashboard.png',
                tag: 'HRM'
              },
              {
                title: 'An adtech company with offices in the UK and Singapore revolutionizing the mobile advertising market',
                desc: 'A visual SaaS eCommerce app equipped with real-time GraphQL API. The app allows BrandActif clients to make any mobile device or branded visual imagery digitally interactive and shoppable.',
                image: 'https://a.storyblok.com/f/86602/1929x1080/71459b60ee/brandactiffhero.png',
                tag: 'SaaS'
              }
            ].map((study, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-8">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 block">{study.tag}</span>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-text-dark leading-tight">
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

      {/* Process Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight">
              Our custom <span className="text-primary">SaaS development process</span>
            </h2>
            <p className="text-lg text-neutral-500">
              Our dedicated SaaS development experts empower your ideas to life with hands-on experience and proven efficient tools.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                num: '01',
                title: 'Understanding your needs',
                desc: 'Whether it involves custom software development or team augmentation, we recognize that each business is unique.',
                items: ['Share project overview.', 'Sign an NDA if needed.', 'Validate idea with Business Analyst and Technology Leader.'],
                image: 'https://a.storyblok.com/f/86602/801x795/0c7f7ff5e2/fn7a9892.png',
                bg: 'bg-orange-100'
              },
              {
                num: '02',
                title: 'Defining project roadmap',
                desc: 'Whether it involves shaping your project vision or estimating costs, we ensure your roadmap is both comprehensive and clear.',
                items: ['Participate in a discovery workshop.', 'Convert your business case into a project roadmap.', 'Obtain details on the project timeline and budget.'],
                image: 'https://a.storyblok.com/f/86602/801x859/826e484b9c/fn7a0919.png',
                bg: 'bg-white',
                reverse: true
              }
            ].map((step, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 rounded-[3rem] overflow-hidden ${step.bg} ${step.reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 p-12 lg:p-20 space-y-8">
                  <div className="text-6xl font-black text-primary/20">{step.num}</div>
                  <h3 className="text-3xl font-extrabold text-text-dark">{step.title}</h3>
                  <p className="text-lg text-neutral-500">{step.desc}</p>
                  <ul className="space-y-4">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-text-dark font-bold">
                        <Check className="size-5 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-20 relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-[10rem] font-black text-neutral-100 -z-10 uppercase">FAQ</div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark">
              SaaS Development <span className="text-primary">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How to build a SaaS solution?',
                a: 'The process of building a SaaS application can be divided into 6 key stages:\n\n1. **Market analysis** - evaluate your idea and its potential compared to existing saas solutions on the market.\n2. **Discussing requirements** - a clear plan is key. In a SaaS model, it is crucial to ensure maximum security.\n3. **Defining the MVP** - building a Minimum Viable Product with core features.\n4. **Choosing the pricing model** - different models like subscription or freemium.\n5. **Deciding on technical aspects** - determine how to build your software and which tools to use.\n6. **Finding or creating a development team** - choose between in-house or outsourcing.'
              },
              {
                q: 'What are the main challenges of SaaS application development?',
                a: 'The creation of a SaaS app is a difficult task. You may encounter some difficulties like:\n\n**Inadequate Execution** - poor execution of a good idea.\n**Lack of Trust** - proper security is key to gaining users’ trust.\n**Small Audience** - the idea must be continually optimized to remain relevant.'
              },
              {
                q: 'What are the key SaaS apps metrics you should be tracking?',
                a: 'Many SaaS businesses focus on KPIs like:\n\n* **Monthly or annual revenue**\n* **CAC** (cost of acquiring a customer)\n* **LTV** (customer lifetime value)\n* **NPS** (net promoter score)\n* **Customer churn**'
              },
              {
                q: 'How is SaaS software distributed?',
                a: 'SaaS is distributed through a centralized model where the provider hosts and manages the application on remote servers. Users access it via the Internet, eliminating the need for local installations.'
              },
              {
                q: 'What does SaaS software development lifecycle look like?',
                a: 'The SaaS software development lifecycle involves five key stages: Planning and analysis, Design and SaaS Architecture, Development and Testing, Deployment and Release, and Maintenance and Upgrades.'
              }
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 bg-neutral-100">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark">
              Our articles about <span className="text-primary">SaaS development</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'How to Start a SaaS Company in 2025',
                category: 'SAAS',
                image: 'https://cms.selleo.com/wp-content/uploads/2024/03/miniaturka-how-to-start-a-saas-company-in-2024.jpg',
                date: 'Mar 15, 2024',
                readTime: '7 min read'
              },
              {
                title: 'How to Validate SaaS Business Ideas – Practical Steps',
                category: 'VIDEO',
                image: 'https://img.youtube.com/vi/9O5B3svW2M8/maxresdefault.jpg',
                date: 'Nov 25, 2024',
                readTime: '7 min read'
              },
              {
                title: 'Feasibility Study Workshop: Ensuring Success for Your SaaS Platform',
                category: 'HRM',
                image: 'https://cms.selleo.com/wp-content/uploads/2024/11/miniatura_feasibility_study_workshop__ensuring_success_for_your_saas_platform.png',
                date: 'Nov 5, 2024',
                readTime: '11 min read'
              }
            ].map((article, i) => (
              <div key={i} className="group cursor-pointer space-y-6">
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <img src={article.image} alt={article.title} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-black text-neutral-400 uppercase tracking-widest">{article.category}</span>
                  <h3 className="text-xl font-extrabold text-text-dark group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <div className="text-sm text-neutral-400">
                    {article.date} • {article.readTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-end">
            <Link to="/blog" className="flex items-center gap-4 text-sm font-black text-neutral-400 uppercase tracking-widest hover:text-primary transition-colors">
              Read more blog posts
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-neutral-100">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark">
              Interested in <span className="text-primary">SaaS app development</span>?
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-12 lg:p-16 rounded-[2rem] space-y-12">
              <h3 className="text-3xl font-extrabold text-text-dark leading-tight">
                Get a <span className="text-primary">free quote</span> for your project. Reach out today!
              </h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <img src="https://a.storyblok.com/f/86602/1335x2000/ff4e2f29ab/dawid-poslinski.png" alt="CEO" className="size-20 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <div className="text-xl font-extrabold text-text-dark">Dawid Pośliński</div>
                    <div className="text-neutral-400">CEO</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <img src="https://a.storyblok.com/f/86602/250x375/633cd4a11a/dariusz-wylon.png" alt="CBO" className="size-20 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <div className="text-xl font-extrabold text-text-dark">Dariusz Wylon</div>
                    <div className="text-neutral-400">CBO</div>
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Benefit from our expertise and planning',
                  'Hire developers at competitive rates',
                  'Leverage our elearning-centric approach'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-dark font-bold">
                    <Check className="size-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-12 lg:p-16 rounded-[2rem]">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-neutral-400">Name *</label>
                    <input type="text" placeholder="Name Surname" className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-neutral-400">E-mail *</label>
                    <input type="email" placeholder="name.surname@company.com" className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-400">Project description *</label>
                  <textarea placeholder="Our goal is to launch / improve / scale a product that..." className="w-full border-b-2 border-neutral-200 py-3 focus:border-primary outline-none transition-colors resize-none" rows={1} />
                </div>
                <button className="w-full py-5 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-xl shadow-primary/20">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSDevelopment;
