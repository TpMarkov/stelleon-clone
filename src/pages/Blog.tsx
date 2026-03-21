import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const businessCategories = [
  'Software Development', 'HealthCare', 'FinTech', 'HRM', 'E-Learning / LMS', 'SaaS', 'Video'
];

const technologyCategories = [
  'Node', 'React', 'Ruby On Rails', 'React Native', 'Ember.js', 'UX / UI', 'AI', 'Python'
];

const blogPosts = [
  {
    id: 1,
    title: 'LMS vs Manual Training Management in 2026: Compliance Tracking, TMS vs LMS, and Implementation Steps',
    excerpt: 'An LMS solves manual training chaos only when it becomes the single system of record for assignments...',
    category: 'HRM',
    date: 'Mar 19, 2026',
    readTime: '19 min read',
    image: 'https://picsum.photos/seed/lms/800/600',
    featured: true,
    hasPlay: true
  },
  {
    id: 2,
    title: 'In House Vs Outsourcing Software Development: How To Choose The Right Model For Your Business',
    excerpt: 'The in house vs outsourcing software development choice is not about an hourly rate. It is a decision about start speed, control...',
    category: 'CTO',
    date: 'Mar 17, 2026',
    readTime: '15 min read',
    image: 'https://picsum.photos/seed/outsourcing/800/600',
    hasPlay: true
  },
  {
    id: 3,
    title: 'Choosing Cloud for Your MVP Without Getting Trapped: Cost, Risk, and Vendor Lock-In',
    excerpt: 'For most MVPs, PaaS or serverless is the fastest low-risk start, if you design exit-ready boundaries (data + IaC + minimal...',
    category: 'TECHNOLOGY',
    date: 'Mar 12, 2026',
    readTime: '21 min read',
    image: 'https://picsum.photos/seed/cloud/800/600',
    hasPlay: true
  },
  {
    id: 4,
    title: 'Spec-Driven Development: Workflow, Tools, Risks, and Best Use Cases',
    excerpt: 'Spec driven development changes how teams build and manage modern software. Instead of relying on prompts or...',
    category: 'CTO',
    date: 'Mar 10, 2026',
    readTime: '16 min read',
    image: 'https://picsum.photos/seed/spec/800/600',
    hasPlay: true
  },
  {
    id: 5,
    title: 'How much does an LMS cost in 2026? Custom LMS cost for HR teams',
    excerpt: 'In 2026, LMS cost is not a number: 2 to 15 dollars per user per month is a SaaS subscription baseline, not custom...',
    category: 'HRM',
    date: 'Mar 5, 2026',
    readTime: '19 min read',
    image: 'https://picsum.photos/seed/cost/800/600',
    hasPlay: true
  },
  {
    id: 6,
    title: 'Stop Building "Everything": How to Define an MVP Feature Set That Validates Demand',
    excerpt: 'An MVP feature set is the smallest release that lets real users complete one core action and generates measurable learning...',
    category: 'CTO',
    date: 'Mar 3, 2026',
    readTime: '13 min read',
    image: 'https://picsum.photos/seed/mvp/800/600',
    hasPlay: true
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-24 pb-20">
      {/* Breadcrumbs */}
      <div className="container py-6">
        <div className="flex items-center gap-2 text-[12px] font-medium text-neutral-400">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <span className="size-1 rounded-full bg-neutral-300" /> Home
          </Link>
          <span className="text-neutral-300">|</span>
          <span className="text-text-dark">Blog</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mb-16 text-center relative">
        <div className="inline-block relative">
          <h1 className="text-5xl lg:text-6xl font-black text-text-dark tracking-tighter">
            Knowledge <span className="text-primary">hub</span>
          </h1>
          <div className="absolute -right-4 top-0 size-2 rounded-full bg-primary" />
        </div>
        <p className="mt-4 text-[13px] font-medium text-neutral-500 uppercase tracking-widest">
          Read our blog fueled by years of development experience
        </p>
        
        {/* Illustration Placeholder */}
        <div className="absolute right-0 top-0 hidden lg:block">
          <img 
            src="https://picsum.photos/seed/hub/150/150" 
            alt="Knowledge hub" 
            className="rounded-full border-4 border-white shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Categories & Search */}
      <section className="container mb-12 border-y border-neutral-200 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex-grow">
            <h3 className="text-[15px] font-black text-text-dark mb-8 uppercase tracking-wider">
              Browse posts by <span className="text-primary">category</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="text-[11px] font-extrabold text-neutral-400 uppercase tracking-[0.2em] mb-4">Business</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {businessCategories.map(cat => (
                    <button key={cat} className="text-[13px] font-bold text-text-dark hover:text-primary transition-colors">{cat}</button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[11px] font-extrabold text-neutral-400 uppercase tracking-[0.2em] mb-4">Technology</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {technologyCategories.map(cat => (
                    <button key={cat} className="text-[13px] font-bold text-text-dark hover:text-primary transition-colors">{cat}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-80 shrink-0">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-neutral-200 px-4 py-3 text-[14px] focus:outline-none focus:border-primary transition-colors"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${post.featured ? 'lg:col-span-2' : ''} bg-white group`}
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
                          {post.category}
                        </span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5,6,7,8,9].slice(0, 3).map(i => (
                            <div key={i} className="size-1 rounded-full bg-primary/50" />
                          ))}
                        </div>
                      </div>
                      <h3 className={`${post.featured ? 'text-2xl lg:text-3xl' : 'text-xl'} font-black text-white leading-tight group-hover:text-primary transition-colors`}>
                        {post.title}
                      </h3>
                      {post.featured && (
                        <p className="text-white/80 text-sm line-clamp-2 max-w-xl">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-4 text-[11px] font-bold text-white/60 uppercase tracking-wider">
                          <span>{post.date}</span>
                          <span className="size-1 rounded-full bg-white/20" />
                          <span>{post.readTime}</span>
                        </div>
                        {post.hasPlay && (
                          <div className="size-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all">
                            <Play className="size-4 fill-current ml-0.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <button className="size-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[13px] font-black text-primary shadow-sm">1</button>
          <button className="size-10 rounded-full flex items-center justify-center text-[13px] font-black text-neutral-400 hover:text-primary transition-colors">2</button>
          <span className="text-neutral-300">...</span>
          <button className="size-10 rounded-full flex items-center justify-center text-[13px] font-black text-neutral-400 hover:text-primary transition-colors">28</button>
          <button className="size-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-primary transition-colors shadow-sm">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </section>

      {/* Academy Section */}
      <section className="container mb-32">
        <div className="bg-[#FF6D2A] p-12 lg:p-20 flex flex-col lg:flex-row gap-16 relative overflow-hidden">
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <h2 className="text-5xl lg:text-7xl font-black text-text-dark leading-[0.9] tracking-tighter">
              SaaS <span className="text-white">Founder</span><br />
              Starter Academy
            </h2>
            <p className="text-xl text-text-dark/80 max-w-md leading-relaxed">
              Everything you need to know to successfully launch your SaaS app.
            </p>
            
            <form className="space-y-6 max-w-md">
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full bg-white/20 border-b border-text-dark/20 py-4 text-text-dark placeholder:text-text-dark/40 focus:outline-none focus:border-text-dark transition-colors"
                />
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 size-4 rounded border-text-dark/20 text-primary focus:ring-primary" />
                  <span className="text-[12px] text-text-dark/60 leading-relaxed">
                    I declare that I have read the <span className="underline">Regulations</span> of the newsletter and accept its contents.
                  </span>
                </label>
              </div>
              <button className="bg-text-dark text-white px-10 py-4 text-[13px] font-extrabold uppercase tracking-[0.2em] hover:bg-white hover:text-text-dark transition-all active:scale-95">
                Get Access &gt;&gt;
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Team Grid Placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="space-y-2 text-center">
                  <div className="aspect-square rounded-full overflow-hidden border-4 border-white/20">
                    <img src={`https://picsum.photos/seed/team${i}/200/200`} alt="Team member" className="size-full object-cover" />
                  </div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-text-dark/60">Role {i}</p>
                </div>
              ))}
            </div>
            {/* Background Pattern */}
            <div className="absolute -right-20 -bottom-20 size-80 bg-white/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
