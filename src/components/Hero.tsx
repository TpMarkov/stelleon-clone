import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-32 lg:pt-48 pb-20">
      {/* Abstract Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-neutral-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[70%] bg-neutral-50 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h1 className="text-[80px] lg:text-[140px] font-medium text-text-dark leading-[0.9] tracking-[-0.04em]">
              Creating<br />
              <span className="text-primary">software</span> for
            </h1>
            <div className="inline-block bg-neutral-100 px-6 py-4 lg:px-10 lg:py-8 mt-4">
              <h2 className="text-[80px] lg:text-[140px] font-black text-text-dark leading-none tracking-[-0.04em] uppercase">
                complex systems
              </h2>
            </div>
          </motion.div>
          
          <div className="mt-12 flex flex-col lg:flex-row lg:items-end gap-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-[18px] lg:text-[20px] text-neutral-600 leading-relaxed font-medium"
            >
              From startups to global scaleups, we design, engineer, and scale reliable digital products built on clean architecture, robust infrastructure, and long-term maintainability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="/portfolio" 
                className="inline-flex items-center gap-4 bg-primary px-10 py-5 text-[14px] font-extrabold uppercase tracking-[0.2em] text-white hover:bg-text-dark transition-all active:scale-95 shadow-lg shadow-primary/20"
              >
                See our work
                <ArrowRight className="size-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Trusted By Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 pt-12 border-t border-neutral-100 flex flex-wrap items-center gap-x-12 gap-y-8"
        >
          <span className="text-[12px] font-black uppercase tracking-[0.2em] text-neutral-400">Trusted by:</span>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-8 grayscale opacity-40 hover:opacity-100 transition-opacity">
            <img src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F176x52%2Fc203eef352%2Falyne-dark.webp&w=88&h=26" alt="Alyne" className="h-6 lg:h-7" />
            <img src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F128x56%2F85633b799f%2Fhumly-dark.webp&w=64&h=28" alt="Humly" className="h-6 lg:h-7" />
            <img src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F256x41%2F6ee0fa3639%2Fdefined-learning-dark.png&w=128&h=20" alt="Defined Learning" className="h-6 lg:h-7" />
            <img src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F176x38%2F623bf40901%2Fbrand-actif-dark.webp&w=88&h=19" alt="Brand Actif" className="h-6 lg:h-7" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

