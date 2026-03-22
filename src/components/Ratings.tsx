import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Ratings = () => {
  const testimonials = [
    {
      name: 'Stephen Cornwell',
      role: 'Founder, SaaS Learning Platform',
      content: 'They delivered to the highest level of quality.',
      rating: 5.0
    },
    {
      name: 'Daniel Orsher',
      role: 'Technical Product Manager, AdTech Firm',
      content: 'They outperformed any other contractor we’ve worked with.',
      rating: 5.0
    },
    {
      name: 'Nathaniel Oaks',
      role: 'CTO & Co-Founder, Breezeway',
      content: 'We appreciate how invested Selleo is in our product.',
      rating: 5.0
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <div className="flex-1 space-y-6">
            <span className="text-sm font-black uppercase tracking-widest text-primary block">Social Proof</span>
            <h2 className="text-black">Trusted by teams<br /> <strong>that ship under pressure</strong></h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              From discovery and validation to building and scaling—our teams deliver with clarity, transparency, and ownership.
            </p>
          </div>
          
          <div className="flex-1 bg-neutral-50 p-10 rounded-2xl flex flex-col md:flex-row items-center gap-10">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2 text-primary">
                <Star className="fill-current size-6" />
                <Star className="fill-current size-6" />
                <Star className="fill-current size-6" />
                <Star className="fill-current size-6" />
                <Star className="fill-current size-6 opacity-50" />
              </div>
              <div className="text-4xl font-bold text-black">4.7</div>
              <div className="text-sm font-bold uppercase tracking-widest text-neutral-400">Overall Rating</div>
            </div>
            <p className="text-neutral-500 text-center md:text-left leading-relaxed">
              Clients highlight strong delivery quality, proactive communication, and a true partnership mindset.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-gray-100 p-10 rounded-2xl space-y-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`size-4 ${i < Math.floor(t.rating) ? 'fill-current' : ''}`} />
                ))}
              </div>
              <p className="text-xl font-light italic text-neutral-600">"{t.content}"</p>
              <div>
                <div className="font-bold text-black">{t.name}</div>
                <div className="text-sm text-neutral-400">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
