import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-100 py-20 lg:py-32">
      <div className="container relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            Creating<br /> 
            <span className="italic text-primary">software</span> for<br /> 
            <span className="font-black bg-neutral-200 px-2 shadow-[-4px_4px_0_4px_#EAEAEB]">product vision</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 max-w-xl text-xl text-neutral-600 leading-relaxed"
          >
            Whether you're shaping a new MVP or scaling an existing product, we blend product strategy, thoughtful design, and strong engineering to help you build with confidence, speed, and clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/portfolio" className="btn-primary group">
              See our work
              <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-8 opacity-60 grayscale">
          <span className="text-sm font-bold uppercase tracking-widest text-neutral-400">Trusted by:</span>
          <img src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F176x52%2Fc203eef352%2Falyne-dark.webp&w=88&h=26" alt="Alyne" className="h-6" />
          <img src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F128x56%2F85633b799f%2Fhumly-dark.webp&w=64&h=28" alt="Humly" className="h-6" />
          <img src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F256x41%2F6ee0fa3639%2Fdefined-learning-dark.png&w=128&h=20" alt="Defined Learning" className="h-6" />
          <img src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F176x38%2F623bf40901%2Fbrand-actif-dark.webp&w=88&h=19" alt="Brand Actif" className="h-6" />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute right-0 top-0 -z-0 h-full w-1/2 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 700 800" fill="none">
          <path d="M100 100 Q 400 150 600 600" stroke="#FF6D2A" strokeWidth="2" fill="none" />
          <circle cx="500" cy="300" r="150" stroke="#FF6D2A" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </section>
  );
};
