import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const ArticlesSection = () => {
  const articles = [
    {
      title: 'LMS vs Manual Training Management in 2026',
      category: 'HRM',
      image: 'https://selleo.com/.netlify/images?url=https%3A%2F%2Fcms.selleo.com%2Fwp-content%2Fuploads%2F2026%2F03%2FMINIAT1.png&fm=webp&w=1169&h=658',
      date: 'Mar 19, 2026',
      readTime: '19 min read'
    },
    {
      title: 'In House Vs Outsourcing Software Development',
      category: 'CTO',
      image: 'https://selleo.com/.netlify/images?url=https%3A%2F%2Fcms.selleo.com%2Fwp-content%2Fuploads%2F2026%2F03%2Fminiatura_In-House-Vs-Outsourcing-Software-Development_-How-To-Choose-The-Right-Model-For-Your-Business.png&fm=webp&w=1169&h=658',
      date: 'Mar 17, 2026',
      readTime: '15 min read'
    },
    {
      title: 'Choosing Cloud for Your MVP Without Getting Trapped',
      category: 'Technology',
      image: 'https://selleo.com/.netlify/images?url=https%3A%2F%2Fcms.selleo.com%2Fwp-content%2Fuploads%2F2026%2F03%2Fminiatura_Choosing_Cloud_for_Your_MVP_Without_Getting_Trapped__Cost_Risk_and_Vendor_Lock-In.png&fm=webp&w=1169&h=658',
      date: 'Mar 12, 2026',
      readTime: '21 min read'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-sm font-black uppercase tracking-widest text-primary block">INSIGHTS & TRENDS</span>
            <h2 className="text-black"><strong>Smart Reads</strong><br /> for Smarter Products</h2>
          </div>
          <a href="/blog" className="btn-primary group">
            View all articles
            <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-neutral-300">{article.category}</span>
                <h3 className="text-xl font-bold text-neutral-600 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <div className="text-sm text-neutral-400">
                  {article.date} • {article.readTime}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
