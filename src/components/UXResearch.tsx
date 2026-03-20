import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus, Minus } from 'lucide-react';

export const UXResearch = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: 'UX Research',
      description: 'We start by exploring user needs, pain points, and market context through interviews, surveys, and analytics. This ensures every design decision is grounded in real insights.'
    },
    {
      title: 'Wireframing',
      description: 'Creating clear, low-fidelity screen layouts that map out the structure, navigation, and functionality before investing in visuals.'
    },
    {
      title: 'Prototyping',
      description: 'Interactive prototypes allow us to simulate real user flows, test ideas early, and refine based on feedback before development begins.'
    },
    {
      title: 'High-Fidelity UI Design',
      description: 'Delivering polished, visually engaging interfaces that match your brand and delight your users, while keeping usability at the core.'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#2F3033] text-white overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <span className="text-sm font-black uppercase tracking-widest text-white/60 mb-6 block">DESIGN THAT DRIVES BUSINESS</span>
            <h2 className="text-white">UI/UX That Turns Ideas Into <strong>Engaging Products</strong></h2>
          </div>

          <div className="space-y-4">
            {phases.map((phase, idx) => (
              <div key={idx} className="border-b border-white/10 last:border-0">
                <button 
                  onClick={() => setActivePhase(idx)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-xl font-light transition-colors ${activePhase === idx ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                    {phase.title}
                  </span>
                  {activePhase === idx ? <Minus className="size-5 text-primary" /> : <Plus className="size-5 text-white/40" />}
                </button>
                <AnimatePresence>
                  {activePhase === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-white/60 leading-relaxed">
                        {phase.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <a href="#" className="btn-primary group">
              Discover Our UX Expertise
              <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end h-full min-h-[500px]">
          <motion.img 
            key={activePhase}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F1360x1308%2F041e4e346f%2Fux-phones.png&w=1360&h=1308" 
            alt="UX Design" 
            className="max-w-full h-auto object-contain"
          />
          {/* Decorative elements */}
          <div className="absolute top-1/4 -left-10 size-32 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-10 size-48 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};
