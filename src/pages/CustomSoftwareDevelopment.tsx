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
  CreditCard
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
            <p className="pb-8 text-neutral-500 leading-relaxed whitespace-pre-line">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CustomSoftwareDevelopment = () => {
  return (
    <div className="pt-24">
      {/* Breadcrumbs */}
      <div className="container py-6">
        <nav className="flex text-sm text-neutral-400 gap-2 items-center">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <span>/</span>
          <span className="text-text-dark font-bold">Custom Software</span>
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
                <span className="text-primary">Custom Software</span> Development Services
              </h1>
              <p className="text-lg text-neutral-500 leading-relaxed max-w-xl">
                C-executives and business owners from small and medium enterprises collaborate with our dedicated product teams to outperform their competitors and generate business value. Our friendly and trustful relationships with clients enable us to offer our advice and build unique custom solutions.
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
                src="https://a.storyblok.com/f/86602/1920x980/cbc4a5502f/custom-software-development.png" 
                alt="Custom Software Development"
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
                'https://a.storyblok.com/f/86602/196x56/03b7b962a4/qstream.webp',
                'https://a.storyblok.com/f/86602/256x41/6ee0fa3639/defined-learning-dark.png',
                'https://a.storyblok.com/f/86602/128x56/d7db557b4c/humly-dark.png',
                'https://a.storyblok.com/f/86602/224x56/9d96d9d9b3/datagame.webp',
                'https://a.storyblok.com/f/86602/132x56/484c182751/b4b.webp',
                'https://a.storyblok.com/f/86602/182x56/524afb9617/exegov.webp',
                'https://a.storyblok.com/f/86602/192x44/ae293dc61f/northpass-dark.png'
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
                src="https://a.storyblok.com/f/86602/396x624/574b97c5b2/landing-main-section-photo-dawid-sebastian.png" 
                alt="Our Team"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-10 order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight">
                  How we drive your <span className="text-primary">custom software solutions</span> to success
                </h2>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  With custom application development expertise in UX Design, Front-end, and Back-end implementations our developers and designers can help you execute quickly and ship products faster. We specialize in designing, building, and maintaining distributed multi-tenant, secure, and robust custom software solutions.
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  We all speak English and advocate one team one room rule. Our accessibility and strategic feedback ensure broadband communications, productivity, and efficient delivery. We work in Scrum and have a sense of ownership. Designers and developers care about clients showing initiative and a proactive approach to problem-solving.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Cost-effective development',
                    'Cross-functional agile team',
                    'Technology expertise',
                    'Strategic feedback'
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
              We know how to integrate many <span className="text-primary">custom features</span> into your software
            </h2>
            <p className="text-lg text-neutral-500">
              Our dedicated custom software development team with hands-on experience and a proven custom development process can quickly bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'AI-powered personalization',
                items: ['Behavioral analysis', 'Personalized recommendations', 'Dynamic user interface', 'Chatbots'],
                icon: Brain,
                span: 'row-span-2'
              },
              {
                title: 'Augmented reality',
                items: ['Virtual try-on', 'Interactive user manuals', 'AR navigation', 'AR games', 'Enhanced experience'],
                icon: Monitor,
                span: 'row-span-2'
              },
              {
                title: 'Voice and visual search',
                items: ['Voice commands', 'Voice search', 'Text-to-speech', 'Voice biometrics', 'Multilingual support'],
                icon: Search,
                span: 'row-span-2'
              },
              {
                title: 'PWAs',
                items: ['Offline access', 'Fast loading speeds', 'Cross-platform compatibility', 'App-like experience', 'Low data usage'],
                icon: Smartphone,
                span: 'row-span-2'
              },
              {
                title: 'IoT integration',
                items: ['Real-time monitoring', 'Smart device control', 'Security alerts'],
                icon: Settings
              },
              {
                title: 'Real-time analytics',
                items: ['User behavior tracking', 'Custom dashboards', 'Conversion tracking'],
                icon: Database
              },
              {
                title: 'Enhanced security features',
                items: ['Biometric authentication', 'End-to-end encryption', 'Two-factor authentication', 'Secure cloud storage'],
                icon: Shield
              },
              {
                title: 'Subscription models',
                items: ['Freemium models', 'Ad-free experience', 'Exclusive content', 'Flexible pricing plans'],
                icon: CreditCard
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
              <span className="text-primary">Customized AI features</span> that we can implement into custom software
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              AI can improve your custom software by taking over repetitive tasks, so your team can focus on more important work. It can create personalized experiences for users by understanding their preferences and predicting what they might need next. AI also supports better decision-making through predictive analytics, giving businesses a competitive advantage.
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
              Consult your e-commerce project with a custom software development company.
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
      <section className="py-24 bg-neutral-100 overflow-hidden">
        <div className="container">
          <div className="text-center space-y-4 mb-20">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 block">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark">
              Our <span className="text-primary">custom development</span> case studies
            </h2>
          </div>

          <div className="space-y-32">
            {[
              {
                title: 'An eCommerce B2B platform that integrates an asset management system with a store',
                desc: 'webDevBg augmented the client’s in-house team with a team of front-end developers. The developers were responsible not only for the code but also for preparing detailed documentation of each cycle.',
                image: 'https://a.storyblok.com/f/86602/1920x1080/60804102c0/velory_dashboard_8-small.gif',
                tag: 'Custom Software'
              },
              {
                title: 'A flexible platform that allows integrating gamification into surveys',
                desc: 'Our work began with thoughtful groundwork in application architecture and user path only to ensure the perfect creation of a breathtaking, modern, and user-friendly interface.',
                image: 'https://a.storyblok.com/f/86602/1111x687/2dc1b17afe/datagame_hero_desktop.png',
                tag: 'Custom Software'
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
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight">
              Our <span className="text-primary">custom software</span> development process
            </h2>
            <p className="text-lg text-neutral-500">
              Our dedicated software development experts empower your ideas to life with hands-on experience and proven efficient tools.
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
              },
              {
                num: '03',
                title: 'Signing contract',
                desc: 'Whether you decide on a budget or time-and-material model, we ensure transparent and clear collaboration terms, tailored to your needs.',
                items: ['Review legal aspects concerning IP transfer and confidentiality.', 'Interview developers and approve the team composition.', 'Select payment options that align with your business model.'],
                image: 'https://a.storyblok.com/f/86602/801x891/6a7b887822/fn7a9557-1.png',
                bg: 'bg-orange-100'
              },
              {
                num: '04',
                title: 'Starting your project',
                desc: 'Whether you choose to visit our office for the project kick-off or opt for an online meeting, we align our entire team with your business case for fast and efficient development.',
                items: ['Meet the team and establish the communication flow.', 'Provide necessary insights to ensure an understanding of your business goals.', 'Familiarize yourself with the tools and processes used in software development.'],
                image: 'https://a.storyblok.com/f/86602/801x939/141c761320/fn7a9788-1.png',
                bg: 'bg-white',
                reverse: true
              },
              {
                num: '05',
                title: 'Designing your app',
                desc: 'We adhere to top UX/UI standards to ensure that your application not only meets user expectations but also stands out from the crowd.',
                items: ['Provide insights on the look and feel that reflect your brand.', 'Choose a design that perfectly addresses the unique needs of your users.', 'Decide how you want to structure user flow on both web and mobile versions of the app.'],
                image: 'https://a.storyblok.com/f/86602/801x891/41d6efe98f/fn7a7113-1.png',
                bg: 'bg-orange-100'
              },
              {
                num: '06',
                title: 'Developing your project',
                desc: 'We consistently adopt an agile approach with Scrum to ensure a fast feedback loop and continuous value delivery.',
                items: ['Participate in planning sessions to set the project direction.', 'Provide feedback on application components during demo sessions.', 'Discuss the growth of both your application and business with our consultants.'],
                image: 'https://a.storyblok.com/f/86602/801x891/6f021198a8/fn7a7364-1.png',
                bg: 'bg-white',
                reverse: true
              },
              {
                num: '07',
                title: 'Establishing post-implementation support',
                desc: 'We ensure robust service level agreements (SLA) to guarantee the reliability and maintenance of your application, enhancing user satisfaction.',
                items: ['Define the support tiers and response times that best suit your operational requirements.', 'Outline procedures for emergency response and regular support interactions.', 'Agree on maintenance schedules and system update protocols.'],
                image: 'https://a.storyblok.com/f/86602/801x891/de99d588c9/fn7a7972-1.png',
                bg: 'bg-orange-100'
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

      {/* YouTube Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 block">OUR YOUTUBE</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark leading-tight">
                Get <span className="text-primary">expert advice</span> on software development
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Go through various industries and learn the hidden gems revealed by our experts. Those insights may help you make the right business decision, especially nowadays when specific choices can change your position on the market!
              </p>
              <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-all flex items-center gap-3">
                <Youtube className="size-6" />
                Our YouTube
              </button>
            </div>
            <div className="grid gap-6">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer">
                <img src="https://i.ytimg.com/vi_webp/6PNFgUaGt1E/maxresdefault.webp" alt="Video" className="size-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="size-20 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-2xl transition-transform group-hover:scale-110">
                    <Play className="size-8 fill-current ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-20 relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-[10rem] font-black text-neutral-100 -z-10 uppercase">FAQ</div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark">
              Software Development <span className="text-primary">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What are the signs that your business requires custom software?',
                a: '1. Outdated manual processes: If manual processes are slowing down your organization, custom software can modernize and streamline them.\n2. Integration challenges: If current systems can\'t effectively communicate or share data, custom software can be developed to integrate them.\n3. Unique business requirements: If your organization has specific needs that can\'t be met by existing software, custom software can be designed to meet those needs.'
              },
              {
                q: 'What would be the estimated cost of my software development project?',
                a: 'Different custom software development firms have varying pricing models, often charging by the hour for software development services. However, cost depends on project complexity and other factors.'
              },
              {
                q: 'How does the software development company deliver the service?',
                a: 'As a software development firm, we can deliver our services in two different ways: 1. Dedicated team: a method where a company is contracted to deliver a specific product. 2. Staff augmentation: adding external developers to your existing team.'
              },
              {
                q: 'How does the agile process look like in software development?',
                a: 'webDevBg advocates following the rules and principles of Agile and Lean software development methodologies as the best approach to managing projects. We use Scrum as a lightweight agile process framework to manage our software development as it ensures an appropriate level of communication and collaboration with the client people.'
              },
              {
                q: 'How much does custom software development cost?',
                a: 'The cost of custom software development services can vary significantly depending on several factors. Firstly, the complexity of the software plays a crucial role in determining the cost. More complex software with advanced features and functionality will generally be more expensive to develop.'
              },
              {
                q: 'What are the stages of custom software development?',
                a: 'Our custom software development process involves several key stages: Requirements analysis, Designing, Programming, Testing, and Deployment and support.'
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
              Our articles about <span className="text-primary">custom software development</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'How to Create a Career Path for Software Development Teams?',
                category: 'BUSINESS',
                image: 'https://cms.selleo.com/wp-content/uploads/2024/03/miniatura-how-to-create-a-career-path-for-software-development-teams.jpg',
                date: 'Mar 29, 2024',
                readTime: '9 min read'
              },
              {
                title: 'What Are the Challenges of Integrating AI into Existing SaaS Platforms?',
                category: 'SAAS',
                image: 'https://cms.selleo.com/wp-content/uploads/2024/03/what-are-the-challenges-of-integrating-ai-into-existing-saas-platforms_.jpg',
                date: 'Mar 22, 2024',
                readTime: '11 min read'
              },
              {
                title: 'IT Outsourcing Contracts | A Simple Guide To Complex Legal Matters',
                category: 'BUSINESS',
                image: 'https://cms.selleo.com/wp-content/uploads/2021/10/miniaturka-it-outsourcing-contracts-01.jpg',
                date: 'Oct 11, 2021',
                readTime: '12 min read'
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
              Interested in <span className="text-primary">custom software development</span>?
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

export default CustomSoftwareDevelopment;
