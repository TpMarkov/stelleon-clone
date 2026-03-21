import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu } from 'lucide-react';

export const AISection = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary text-white overflow-hidden relative">
      <div className="container relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <span className="text-sm font-black uppercase tracking-widest text-white/80 mb-6 block">Artificial Intelligence</span>
          <h2 className="text-white mb-8">
            <strong>AI Integration</strong> that Drives Real Product <strong>Results</strong>.
          </h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-xl">
            We help founders and project managers add AI features that improve the product, accelerate workflows, and create real user value. From early prototypes to full-scale implementations, we ensure smooth delivery, clear process, and measurable outcomes that move your roadmap forward.
          </p>
          <a href="#" className="inline-flex items-center bg-white text-black px-6 py-3 font-bold group transition-all hover:bg-neutral-100">
            AI Integration
            <ArrowRight className="ml-3 size-6 text-primary transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-auto"
              src="https://a.storyblok.com/f/86602/x/80c88e21b8/homepage-ai-founder.webm"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute left-0 bottom-0 opacity-10">
        <Cpu className="size-96 text-white" />
      </div>
    </section>
  );
};
