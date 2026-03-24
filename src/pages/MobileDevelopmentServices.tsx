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
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileDevelopmentServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { label: 'Delivered Projects', value: '150', suffix: '+', icon: <Layers className="size-8 text-primary" /> },
    { label: 'Years of experience', value: '18', suffix: '+', icon: <Clock className="size-8 text-primary" /> },
    { label: 'Certificates & awards', value: '20', suffix: '+', icon: <Award className="size-8 text-primary" /> },
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
      title: 'Mobile Fintech App',
      desc: 'Improve your financial services with cutting-edge fintech software development solutions designed to meet your business objectives and industry standards.',
      benefits: [
        'Increased operational efficiency',
        'Enhanced customer experience',
        'Strengthened data security',
        'Seamless integration with financial systems',
        'Accelerated innovation in financial products'
      ],
      icon: <CreditCard className="size-14" />
    },
    {
      title: 'Mobile Healthcare Software',
      desc: 'Improve your business efficiency and reduce operational costs by leveraging outsourcing services tailored to your specific needs.',
      benefits: [
        'Access to specialized expertise',
        'Reduced labor costs',
        'Enhanced focus on core business activities',
        'Scalability and flexibility',
        'Improved operational efficiency'
      ],
      icon: <Shield className="size-14" />
    }
  ];

  const faqs = [
    {
      question: 'What is the benefit of custom mobile application development?',
      answer: "Custom mobile application development offers tailored solutions designed specifically to meet a business's unique needs and objectives. Unlike off-the-shelf applications, custom apps can integrate seamlessly with existing systems, improving workflow and operational efficiency. They provide enhanced scalability, allowing businesses to adapt and grow their application as their needs evolve. Custom apps also offer superior user experiences, as they are designed with the target audience in mind, leading to higher engagement and customer satisfaction. Additionally, they can include advanced security features tailored to protect sensitive business data. Ultimately, custom mobile applications enable businesses to stand out in the competitive market by offering personalized and innovative solutions."
    },
    {
      question: 'What is the typical process custom mobile app development process?',
      answer: `The development of a custom mobile app follows a structured process:

Discovery and Planning: Understanding the client’s requirements, target audience, and business goals.
Design: Creating wireframes, user interface (UI) designs, and user experience (UX) flows.
Development: Writing the code for the app's front-end and back-end while integrating features and technologies.
Testing: Ensuring the app is free of bugs and performs well on different devices and operating systems.
Deployment: Launching the app on relevant platforms (e.g., App Store, Google Play).
Maintenance: Providing ongoing support, updates, and performance improvements.

Key Points:
Custom app development involves stages such as planning, design, and testing.
Deployment is followed by continuous maintenance and updates.
A client-focused approach ensures the app meets business goals.`
    },
    {
      question: 'How to choose a custom mobile app development company?',
      answer: "Choosing a custom mobile apps development company requires careful consideration of several factors. First, evaluate the company’s portfolio to ensure they have experience with projects similar to yours, demonstrating their technical expertise and creativity. Second, review client testimonials or references to gauge their reputation and ability to deliver on time and within budget. Third, assess their communication skills and willingness to understand your specific needs, as clear collaboration is essential for success. Finally, compare pricing and post-launch support services to ensure you receive value and ongoing assistance after the app is deployed."
    },
    {
      question: 'How much does it cost to develop a custom mobile app?',
      answer: "The cost of developing a custom mobile app can vary based on various factors such as the complexity of the app, the features required and the development approach. For cross-platform development, where the app is built to run on multiple platforms including iOS and Android the cost is typically higher compared to developing separate native iOS and Android apps. Hybrid apps development which combines web technologies with native code, can be a cost-effective option, but it may not offer the same level of performance and user experience as native apps."
    },
    {
      question: 'Why mobile app development is important for your business?',
      answer: "Mobile app development is crucial for your business as it enables you to reach and engage with a vast audience that relies heavily on mobile devices. Whit the ever-increasing popularity of smartphones, businesses need to adapt and tap into this growing market. Mobile application development allows you to create personalized and convenient experiences for your customers enhancing their satisfaction and loyalty. Building mobile apps also provides a competitive advantage, as it showcases your commitment to innovation and customer-centricity. Furthermore, mobile apps created for your business can streamline operations, improve efficiency and facilitate streamless communication with your target audience."
    },
    {
      question: 'What is cross-platform app development?',
      answer: "Cross-platform app development refers to the process of creating mobile applications that can run on multiple operating systems such as iOS and Android, using a single codebase. By leveraging cross-platform development frameworks like React Native, developers can write code once and deploy it across multiple platforms. This approach allows businesses to reach a wider audience as their app can be accessed by users of different devices and operating systems. Cross-platform development also helps reduce development costs since there is no need to build separate applications for each platform."
    }
  ];

  const articles = [
    {
      title: '5 Reasons Why Your Organisation Needs a Best Payroll Software like OnPay or BambooHR',
      category: 'HRM',
      date: 'Aug 5, 2024',
      readTime: '8 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2024/08/miniaturka-5-reasons-why-your-organisation-needs-a-best-payroll-software-like-onpay-or-bamboohr.jpg',
      link: '/blog/5-reasons-why-your-organisation-needs-a-best-payroll-software'
    },
    {
      title: 'How Can AI Be Used to Improve User Experience in SaaS Applications',
      category: 'SaaS',
      date: 'Feb 22, 2024',
      readTime: '13 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2024/02/miniatura-how-can-ai-be-used-to-improve-user-experience-in-saas-applications.jpg',
      link: '/blog/how-can-ai-be-used-to-improve-user-experience-in-saas-applications'
    },
    {
      title: 'Maestro – Automation Testing for Mobile Apps and Mobile Web Apps Made Easy',
      category: 'QA',
      date: 'Jan 4, 2024',
      readTime: '14 min read',
      image: 'https://cms.selleo.com/wp-content/uploads/2024/01/miniaturka-maestro-automation-testing-for-mobile-apps-and-mobile-web-apps-made-easy.png',
      link: '/blog/maestro-automation-testing-for-mobile-apps-and-mobile-web-apps-made-easy'
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
          <span className="text-text-dark font-medium">Custom Mobile App Development</span>
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
                Custom Mobile App Development
              </h1>
              <p className="text-lg text-neutral-500 leading-relaxed mb-8">
                We dive deep to understand what makes your business unique and what your users really need. We create data-driven applications to provide users with precise real-time information. Data enables personalization, boosting user engagement and loyalty. Data-driven apps are scalable and adapt to changing market needs. That means you get a custom app that’s built to last and adapt as your business grows and technology changes.
              </p>
              <div className="space-y-4 mb-10">
                <p className="font-bold text-primary">Why work with us?</p>
                <ul className="space-y-4">
                  {[
                    "Think of us as your go-to experts, ready to make sure your app keeps delivering for your users, now and in the future.",
                    "Think of us as experts using the latest tools and best practices to deliver high-quality, secure, and scalable applications that support your business goals."
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
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://a.storyblok.com/f/86602/1600x1067/2cfee03d30/custom-lms-development.jpg" 
                alt="Custom Mobile App Development"
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
            {['Defined Learning', 'Northpass', 'Neutopia', 'Humly', 'SquadLocker', 'BrandActif', 'Alyne'].map((brand) => (
              <span key={brand} className="text-2xl font-black text-text-dark tracking-tighter">{brand}</span>
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
                src="https://a.storyblok.com/f/86602/520x720/997ddde019/custom-lms-hero-2.jpg" 
                alt="Mobile App Development"
                className="rounded-2xl shadow-xl w-full max-h-[730px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-black text-text-dark leading-tight mb-8">
                How we can help build an <span className="text-primary">intuitive, easy-to-use custom mobile app</span> that attracts and retains users
              </h2>
              <div className="space-y-6 text-lg text-neutral-500 leading-relaxed mb-12">
                <p>
                  We design custom mobile apps focused on user-centric experiences, ensuring every interaction is intuitive and enjoyable
                </p>
                <div className="space-y-4">
                  <p className="font-bold text-primary">Our team starts by:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-text-dark font-medium">
                      <div className="size-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      deeply understanding your target audience’s needs, habits, and challenges, creating a foundation for a user-friendly app. With streamlined navigation and responsive layouts, we make sure users can easily accomplish their goals without unnecessary steps.
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-primary">Our UI/UX experts:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-text-dark font-medium">
                      <div className="size-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      prioritize clear, visually appealing interfaces that resonate with your brand, increasing user engagement and loyalty. We also implement features that encourage users to return, like personalized content, notifications, and social integrations.
                    </li>
                  </ul>
                </div>
                <p>
                  Continuous testing and feedback loops help us refine the app over time, keeping it aligned with user expectations and market trends.
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
            We are <span className="text-primary">experienced with integrating</span> many custom mobile app features
          </h2>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Row 1 */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 lg:row-span-2"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <UserCheck className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                User Authentication and Authorization
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Secure login and user access control,
                </li>
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  protecting user data and ensuring personalized user experiences.
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 lg:row-span-2"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <Layers className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                Cross-Platform Compatibility
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Building apps that work seamlessly on both iOS and Android devices,
                </li>
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  reaching a broader audience and ensuring consistency across platforms.
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 lg:row-span-2"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <MessageSquare className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                In-App Messaging and Chat
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Enabling communication within the app,
                </li>
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  fostering community, customer support, or user-to-user interactions.
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 lg:row-span-2"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <BarChart3 className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                Data Analytics and Insights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Tracking user behaviors, engagement, and usage patterns,
                </li>
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  providing insights for improving the app and enhancing the user experience.
                </li>
              </ul>
            </motion.div>

            {/* Row 2 */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <CreditCard className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                Payment Integration
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Facilitating secure in-app purchases and subscriptions,
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <Target className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                Location-Based Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Utilizing GPS for personalized content and tracking locations,
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <Shield className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                Data Security and Privacy
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Implementing robust encryption and compliance with data protection standards,
                </li>
              </ul>
            </motion.div>

            <div className="hidden lg:block">
              <img 
                src="https://a.storyblok.com/f/86602/396x396/cf3839b220/fn7a9300.png" 
                alt="Feature"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Row 3 */}
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <Sparkles className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                Push Notifications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Sending timely updates, reminders, and personalized messages,
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <Smartphone className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                Responsive Design
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Adapting seamlessly across different screen sizes and resolutions,
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <Zap className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                Offline Mode
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Allowing access to certain app features without an internet connection,
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <Monitor className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                User-Friendly Interface
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Designing an intuitive and visually appealing interface,
                </li>
              </ul>
            </motion.div>

            {/* Row 4 */}
            <div className="hidden lg:block lg:col-span-2">
              <img 
                src="https://a.storyblok.com/f/86602/824x424/74f4775582/fn7a9804.png" 
                alt="Feature Large"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <CheckCircle2 className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                All in one
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Full development
                </li>
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  UX/UI
                </li>
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  QA
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-neutral-100 p-10 rounded-xl group transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="mb-6 group-hover:text-white transition-colors">
                <Plus className="size-10 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-6 group-hover:text-white transition-colors leading-tight">
                + Custom feature
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500 group-hover:text-white/90 transition-colors text-sm font-medium">
                  <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover:bg-white transition-colors" />
                  Your custom feature tailored to specific business needs
                </li>
              </ul>
            </motion.div>
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
                Achieve <span className="text-primary">business goals</span> faster!
              </h2>
              <p className="text-xl text-neutral-500 mb-12">
                Do you need support with mobile app development? Take advantage of our consultations to connect with experts in cutting-edge technologies who can help streamline your project and minimize costs.
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
            Our <span className="text-primary">case studies</span>
          </h2>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400">LMS</span>
              <h3 className="text-3xl lg:text-4xl font-black text-text-dark leading-tight">
                <span className="text-primary">A micro-learning app</span> for corporations offering scenario-based spaced learning
              </h3>
              <p className="text-lg text-neutral-500 leading-relaxed">
                We have developed a unique admin section while rebuilding existing elements and designs. We have implemented various question types like video, presentation, or fill-in-the-gap, each of them with its own complexities which had to be managed carefully so the app can be easily extended in the future.
              </p>
              <div className="grid grid-cols-3 gap-8 py-8 border-y border-neutral-100">
                <div>
                  <div className="text-3xl font-black text-text-dark">90<span className="text-primary">%+</span></div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">Engagement</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-text-dark">35<span className="text-primary">%+</span></div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">TypeScript</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-text-dark">3<span className="text-primary">+</span></div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">Years collab</div>
                </div>
              </div>
              <button className="bg-primary text-white px-10 py-4 rounded font-extrabold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all">
                View project
              </button>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://a.storyblok.com/f/86602/1920x1080/bb0cfbb9bc/qstream-hero-bigger.png" 
                alt="Case Study"
                className="size-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tabs Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-text-dark mb-6">
            Together we can create <span className="text-primary">mobile applications</span> in any context
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
            From setting business goals to developing a mobile application. We provide technology and expertise to increase the potential of your team.
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
                    {tab.icon}
                  </div>
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
                "What is MVP, MMF, and MMP? (key differences and what to choose)",
                "SaaS or Mobile App MVP For $10K | Is It Possible?",
                "5 Mistakes That SINK 90% Digital Products."
              ].map((title, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                    <img 
                      src={`https://picsum.photos/seed/yt-mobile-${i}/600/400`} 
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
              Interested in <span className="text-primary">mobile app development services</span>?
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
                  { name: 'Dariusz Wylon', role: 'CBO', img: 'https://a.storyblok.com/f/86602/250x375/633cd4a11a/dariusz-wylon.png' }
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
              Our articles about <span className="text-primary">mobile app development</span>
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

export default MobileDevelopmentServices;
