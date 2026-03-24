import React, { useState } from 'react';
import { motion } from 'motion/react';
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

const ProductDiscovery = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { label: 'Delivered projects', value: '150', suffix: '+', icon: 'https://a.storyblok.com/f/86602/56x56/5bcac08581/desktop-phone.png' },
    { label: 'Years of experience', value: '18', suffix: '+', icon: 'https://a.storyblok.com/f/86602/56x56/a43d29a1d5/calendar.png' },
    { label: 'Certificates & awards', value: '20', suffix: '+', icon: 'https://a.storyblok.com/f/86602/56x56/939a1f649c/certificate.png' },
  ];

  const features = [
    {
      title: 'Prioritize key features and improve user experience',
      desc: 'Focus on user needs and feedback during product discovery and develop a product that provides a better user experience. This can lead to increased user satisfaction, higher retention rates, and ultimately, increased revenue for your business.'
    },
    {
      title: 'Identify potential challenges and reduce the risk of failure',
      desc: 'Test your assumptions and gather feedback before investing significant resources in development, ensuring that you are building a product that has a higher chance of success in the market.'
    },
    {
      title: 'Validate your product idea before investing',
      desc: 'Product validation can involve a range of activities, including conducting market research, analyzing competitor products, gathering feedback from potential customers, and testing assumptions. By validating your product idea, you can confirm that there is a market for your product that is aligned with the expectations of the end-users.'
    }
  ];

  const timeline = [
    {
      step: '01',
      title: 'Signing the NDA',
      desc: 'Firstly we sign the non-disclosure agreement to protect your confidential business information.'
    },
    {
      step: '02',
      title: 'Call with a Technical Team Lead and a BA',
      desc: 'the next step is to schedule a meeting, that will help us with getting a better understanding of your business idea and gathering all the details allowing us to prepare the cost estimation.'
    },
    {
      step: '03',
      title: 'Interviews with the whole Team',
      desc: 'this is the opportunity for you to get familiar with members of the team that will deliver your product, so there are no unnecessary surprises.'
    },
    {
      step: '04',
      title: 'Streamlined kick-off',
      desc: 'when everything is settled, the team is ready to smoothly start working on the agreed date.'
    }
  ];

  const caseStudies = [
    {
      category: 'Education',
      title: 'Fullstack MVP development with amazing features',
      desc: 'The platform is designed to teach children various skills like Maths, English as well as Capoeira, and how to deal with anger.',
      points: [
        'a refactored code',
        'new features for the teachers’ and parents’ panels',
        'integration with Contentful',
        'updated designs'
      ],
      image: 'https://a.storyblok.com/f/86602/1920x1080/e1ef1a7c94/clickaaula-panel-uzytkownika-1.png',
      link: '/portfolio/interactive-elearning-software'
    },
    {
      category: 'Healthcare',
      title: 'A clickable MVP prototype that helped the client validate their idea before investing further',
      desc: 'Together with the client, we brainstormed the most affordable functionalities that would bring the most value and allow the client successful product discovery.',
      image: 'https://a.storyblok.com/f/86602/1920x1080/0a1f2abf11/hearing-pages-desktop-1.png',
      link: '/portfolio/healthcare-multi-sided-platform'
    }
  ];

  const faqs = [
    {
      question: 'What is product discovery, and why is it important?',
      answer: "Product discovery is the process of identifying and defining a product or feature that will address a specific problem or meet a user's needs. It involves understanding customer requirements, exploring potential solutions, and validating ideas before investing significant time and resources in development.\n\nThe importance of product discovery lies in its ability to minimize the risk of building products or features that don't align with user needs or business goals."
    },
    {
      question: 'How is product discovery different from product development?',
      answer: "Product discovery is a crucial phase that entails identifying the essential features and functionality of a new product. On the other hand, product development goes beyond mere identification by physically constructing the product. However, it's worth noting that product development companies can provide comprehensive assistance, encompassing both product discovery and the subsequent development and launch of the product."
    },
    {
      question: 'How long does the product discovery process take?',
      answer: "Overall, the product discovery process duration is highly variable and depends on the specific circumstances and product ideas, complexity, strategy, product team dynamics, stakeholder involvement, product design and external factors. It can take anywhere from a few weeks to several months."
    }
  ];

  const articles = [
    {
      title: 'What Does MVP Stand for in Business and Why Is It Important in Software Projects?',
      category: 'Business',
      date: 'Dec 11, 2023',
      readTime: '16 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2023/12/miniaturka-what-does-mvp-stand-for-in-business-and-why-is-it-important-in-software-projects.jpg',
      link: '/blog/what-does-mvp-stand-for-in-business-and-why-is-it-important-in-software-projects'
    },
    {
      title: '5 Mistakes That Sink 90% of Digital Products Failure',
      category: 'Video',
      date: 'Oct 8, 2024',
      readTime: '4 min read',
      image: 'https://img.youtube.com/vi/drZ3ooCwKOY/maxresdefault.jpg',
      link: '/blog/5-mistakes-that-sink-90-of-digital-products-failure'
    },
    {
      title: 'SaaS Pricing Models: Which One Is Right for Your Business?',
      category: 'SaaS',
      date: 'Nov 24, 2023',
      readTime: '13 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2023/11/miniatura-saas-pricing-models-which-one-is-right-for-your-business2.jpg',
      link: '/blog/saas-pricing-models-which-one-is-right-for-your-business'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[640px] md:h-[840px] xxxl:h-screen overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://a.storyblok.com/f/86602/1920x980/e9cb40f62e/product-discovery-services.png" 
            alt="Hero"
            className="size-full object-cover object-[50%_top] opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container relative z-10 text-center xl:max-w-[1110px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl xl:text-8xl font-black text-white leading-tight mb-0">
              New <strong className="text-primary font-black">Product Discovery & Product Development</strong> Services
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed mt-6 max-w-[800px] mx-auto px-6">
              Discover the Right Product for Your Business with Our Expert Guidance
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-12 left-12 hidden xxxl:block">
          <div className="flex flex-col items-center gap-4 text-white/50">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] rotate-90 origin-left translate-x-2">Scroll</span>
            <div className="w-px h-12 bg-white/20" />
          </div>
        </div>
      </section>

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
          <span className="text-text-dark font-medium">Product Discovery</span>
        </nav>
      </div>

      {/* Main Section */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-32 items-center">
            <div className="xxl:ml-32">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400 mb-6 block">Product development company</span>
              <h2 className="text-4xl lg:text-6xl font-black text-text-dark leading-tight mb-12">
                Discover, define, and <span className="text-primary">deliver your next big idea</span> with our expert team
              </h2>
              <p className="text-xl text-neutral-500 leading-relaxed">
                Let us help you identify and define your business idea. Thanks to our years of experience in various industries we can provide you with guidance through processes including market research, user analysis, prototyping as well as end-to-end software development throughout the product development lifecycle. We do not just want your product launch. We want your product to succeed.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://a.storyblok.com/f/86602/395x624/eec570c640/services-product-discovery.jpg" 
                  alt="Product Discovery"
                  className="w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-neutral-100">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 mb-20 xxl:ml-32">
            <h2 className="text-3xl lg:text-5xl font-black text-text-dark leading-tight">
              Most startups focus on <span className="text-primary">a solution</span>, rather than <span className="text-primary">the problem</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-neutral-500 leading-relaxed">
                Product discovery helps to address that.
              </p>
              <p className="text-xl text-neutral-500 leading-relaxed">
                Want to know more about your target audience, identify potential challenges, or refine your product vision? Thanks to our expertise we help our clients save time and avoid costly mistakes. Let’s build a product that meets the needs and expectations of your customers.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 xxl:ml-32">
            {features.map((feature, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-2xl font-black text-text-dark leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-end xxl:mr-32">
            <button className="bg-primary text-white px-10 py-4 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all flex items-center gap-4 shadow-xl shadow-primary/20">
              Contact us
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-24 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <img src={stat.icon} alt={stat.label} className="h-12 lg:h-16 w-auto mb-8" referrerPolicy="no-referrer" />
                <div className="text-5xl lg:text-7xl font-black text-text-dark mb-2">
                  {stat.value}<span className="text-primary">{stat.suffix}</span>
                </div>
                <span className="text-sm font-black uppercase tracking-widest text-neutral-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider Placeholder */}
      <section className="py-24 lg:py-32 bg-neutral-100">
        <div className="container max-w-4xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400 mb-6 block">Client Value & Trust</span>
          <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-12">
            Learn how entrepreneurs are collaborating with our <span className="text-primary">high-performing teams</span>.
          </h2>
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <p className="text-2xl font-medium text-neutral-500 italic mb-12">
              "Selleo has proven to be one of the best outsource development partners we've ever used. They are reliable, communicative, always helpful, consistently deliver to a high standard and are an absolute pleasure to work with too."
            </p>
            <div className="flex items-center justify-center gap-6">
              <img src="https://a.storyblok.com/f/86602/150x150/6115d66311/matthew_oneill.jpeg" alt="Matthew O’Neill" className="size-16 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div className="text-left">
                <div className="text-xl font-black text-text-dark">Matthew O’Neill</div>
                <div className="text-neutral-400 font-bold text-sm">CEO & Co-Founder, Samewave UK</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Teams Section */}
      <section className="py-24 lg:py-32 bg-neutral-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center lg:!px-36">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400 mb-6 block">our team</span>
              <h2 className="text-4xl lg:text-6xl font-black text-text-dark leading-tight mb-8">
                Hire <span className="text-primary">experienced</span> software development team today!
              </h2>
              <p className="text-xl text-neutral-500 leading-relaxed mb-10">
                Product Owners and CTOs in start-ups and SMEs craft their SaaS products or build their own cloud-based solutions with our teams.
              </p>
              <button className="bg-primary text-white px-10 py-4 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                Contact us
              </button>
            </div>
            <div className="relative">
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[80px] lg:text-[150px] font-black text-white -z-0 whitespace-nowrap opacity-50">Meet the team</span>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://a.storyblok.com/f/86602/1300x864/c0938dbef1/e-commerce-team.png" 
                  alt="Our Team"
                  className="w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 lg:py-32">
        <div className="container text-center mb-20">
          <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400 mb-4 block">Our Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-black text-text-dark">
            How we helped clients <span className="text-primary">grow their businesses</span>
          </h2>
        </div>
        <div className="container">
          <div className="space-y-24">
            {caseStudies.map((study, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400">{study.category}</span>
                  <h3 className="text-3xl lg:text-4xl font-black text-text-dark leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-lg text-neutral-500 leading-relaxed">
                    {study.desc}
                  </p>
                  {study.points && (
                    <ul className="space-y-2 text-neutral-500">
                      {study.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button className="bg-primary text-white px-10 py-4 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all">
                    View project
                  </button>
                </div>
                <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="size-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32 bg-black text-white">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl font-black mb-20">
            How we <span className="text-primary">start collaboration</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {timeline.map((item, i) => (
              <div key={i} className="relative pt-12 border-t border-neutral-800">
                <span className="absolute top-0 left-0 text-5xl font-black text-neutral-800 -translate-y-1/2">{item.step}</span>
                <div className="size-3 rounded-full bg-primary absolute top-0 left-0 -translate-y-1/2" />
                <h3 className="text-2xl font-black mb-6 leading-tight min-h-[4rem]">
                  {item.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boast Section */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto_1.2fr] gap-12 lg:gap-24 items-center lg:mx-36">
            <div className="flex flex-col items-center lg:items-start gap-8">
              <div className="flex items-center gap-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.861 25" className="h-12">
                  <path fill="#17313b" d="M22.861 0h4v25h-4zm18 17.025c0 3.826-3.217 4.131-4.174 4.131-2.391 0-2.826-2.238-2.826-3.588V8h-4v9.548c0 2.37.744 4.326 2.048 5.63 1.152 1.153 2.878 1.783 4.748 1.783 1.326 0 3.204-.413 4.204-1.326V25h4V8h-4v9.025zM52.861 2h-4v6h-3v4h3v13h4V12h3V8h-3zm15.597 17.917c-.871.783-2.021 1.217-3.283 1.217-2.782 0-4.825-2.043-4.825-4.848s1.978-4.762 4.825-4.762c1.24 0 2.412.413 3.305 1.196l.607.522 2.697-2.696-.675-.609C69.522 8.504 67.415 7.7 65.174 7.7c-5 0-8.631 3.608-8.631 8.565 0 4.936 3.718 8.673 8.631 8.673 2.283 0 4.412-.804 5.979-2.26l.652-.609-2.739-2.694-.608.542zM86.061 9.482C84.909 8.33 83.559 7.7 81.689 7.7c-1.326 0-2.828.413-3.828 1.325V0h-4v25h4v-9.365c0-3.826 2.718-4.13 3.675-4.13 2.391 0 2.325 2.239 2.325 3.587V25h4v-9.887c0-2.37-.495-4.326-1.8-5.631"></path>
                  <path fill="#FF3D2E" d="M65.043 13.438a2.891 2.891 0 1 1 0 5.784 2.891 2.891 0 0 1 0-5.784"></path>
                  <path fill="#17313b" d="M17.261 18.721c-1.521 1.565-3.587 2.413-5.761 2.413-4.456 0-7.696-3.5-7.696-8.304 0-4.826 3.24-8.326 7.696-8.326 2.153 0 4.196.847 5.74 2.391l.608.609 2.674-2.674-.587-.609C17.718 1.938 14.718.7 11.5.7 4.935.7 0 5.917 0 12.851 0 19.764 4.957 24.96 11.5 24.96c3.24 0 6.24-1.26 8.457-3.543l.587-.609-2.652-2.717-.631.63z"></path>
                </svg>
                <div className="text-3xl font-black text-text-dark">4.7<span className="text-lg text-neutral-400">/5.0</span></div>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="size-8 text-[#EB4F3C] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-bold text-neutral-400 uppercase tracking-widest">30 REVIEWS</span>
            </div>
            <div className="hidden lg:block w-px h-32 bg-neutral-200" />
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-text-dark mb-6 leading-tight">
                Our experience, <span className="text-primary">your success</span>
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed">
                We take pride in our commitment to quality and excellence and our <span className="font-black text-text-dark">high Clutch rating</span> is a reflection of that. We always strive to exceed expectations and deliver exceptional results to every client we serve.
              </p>
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
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-neutral-500 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
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
              Our articles about <span className="text-primary">MVP and software development</span>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-black text-white overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-y-0 left-0 w-1/2 hidden lg:block">
          <img 
            src="https://selleo.com/uploads/contact-developers.jpg" 
            alt="Contact"
            className="size-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="hidden lg:block" />
            <div className="bg-neutral-900/50 backdrop-blur-xl p-12 lg:p-20 rounded-3xl border border-white/10">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-500 mb-4 block">CONTACT US</span>
              <h2 className="text-4xl lg:text-6xl font-black mb-12">Tell us about your project</h2>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Name *</label>
                    <input type="text" placeholder="Name Surname" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-primary outline-none transition-colors text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">E-mail *</label>
                    <input type="email" placeholder="name.surname@company.com" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-primary outline-none transition-colors text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Project description *</label>
                  <textarea rows={4} placeholder="Our goal is to launch / improve / scale a product that..." className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-primary outline-none transition-colors text-white resize-none"></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
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

export default ProductDiscovery;
