import React from 'react';
import { motion } from 'motion/react';

export const AboutUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-black uppercase tracking-widest text-primary mb-6 block">Why webDevBg</span>
          <h2 className="mb-8">
            Do you need a partner <strong>to ship a project fast on a tight budget?</strong>
          </h2>
          <div className="space-y-6 text-lg text-neutral-500 leading-relaxed">
            <p className="font-bold text-neutral-600">
              webDevBg is built for founders and project managers who can’t afford delays or costly rewrites.
            </p>
            <p>
              We start with product discovery to validate your idea, cut the MVP to the essentials, and deliver with senior engineers who own the outcome.
            </p>
            <p>
              You get clear estimates, weekly demos, and early risk flags - so there are fewer handoffs, faster decisions, and an earlier launch. Full code ownership, no vendor lock-in, no ticket factory.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://a.storyblok.com/f/86602/1200x630/d3297abb4f/website-thumbnail_founder-pm.png" 
              alt="webDevBg Team" 
              className="w-full h-auto"
            />
          </div>
          {/* Decorative dots */}
          <div className="absolute -bottom-10 -right-10 -z-0 text-primary opacity-20">
            <svg width="140" height="77" viewBox="0 0 140 77" fill="currentColor">
              <circle cx="10" cy="10" r="4" />
              <circle cx="30" cy="10" r="4" />
              <circle cx="50" cy="10" r="4" />
              {/* Add more dots as needed */}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
