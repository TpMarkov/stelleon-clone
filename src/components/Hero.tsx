// components/Hero.tsx
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HeroBlob } from './HeroBlob';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] bg-white overflow-hidden">
      {/* Hero background blob (right side, behind content) */}
      <div className="absolute inset-y-0 right-0 top-0 bottom-0 h-full w-[70%] lg:w-1/2 pointer-events-none">
        <HeroBlob />
      </div>
<div className="absolute inset-y-0 right-[-3%] top-[6%] h-[70%] rotate-160 w-[40%] pointer-events-none">
  <HeroBlob size="small" />
</div>

      {/* Optional soft background blobs (like Selleo’s subtle noise/tone) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-neutral-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[70%] bg-neutral-50 rounded-full blur-[100px] opacity-40" />
      </div>

      {/* Content container */}
      <div className="container relative z-10 flex h-full items-center justify-start p-5 pt-[100px] lg:pt-[116px] pb-12">
        <div className="max-w-6xl w-full space-y-8">
          {/* Big heading stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-0.5"
          >
            <h1 className="text-[52px] md:text-[72px] lg:text-[100px] font-medium text-text-dark leading-[0.9] tracking-[-0.04em]">
              Creating<br />
              <span className="text-primary">software</span> for
            </h1>
            <div className="bg-transparent px-6 py-4 lg:px-10 lg:py-6 mt-1 w-full inline-block">
              <h2 className="text-[11vw] md:text-[100px] xl:text-[130px] font-black text-text-dark leading-none tracking-[-0.04em] uppercase whitespace-nowrap">
                complex systems
              </h2>
            </div>
          </motion.div>

          {/* Body copy + CTA */}
          <div className="mt-6 flex flex-col lg:flex-row lg:items-end gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-[16px] lg:text-[18px] text-neutral-600 leading-relaxed font-medium"
            >
              From startups to global scaleups, we design, engineer, and scale reliable digital products built on clean architecture, robust infrastructure, and long‑term maintainability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="/portfolio"
                className="inline-flex items-center gap-4 bg-primary px-8 py-4 text-[13px] font-extrabold uppercase tracking-[0.2em] text-white hover:bg-text-dark transition-all active:scale-95 shadow-lg shadow-primary/20"
              >
                See our work
                <ArrowRight className="size-5" />
              </a>
            </motion.div>
          </div>

          {/* Trusted By section (mimicking Selleo’s footer‑style bar) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 pt-8 border-t border-neutral-100 flex flex-wrap items-center gap-x-12 gap-y-6"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">Trusted by:</span>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6 grayscale opacity-40 hover:opacity-100 transition-opacity">
              <img
                src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F176x52%2Fc203eef352%2Falyne-dark.webp&w=88&h=26"
                alt="Alyne"
                className="h-5 lg:h-6"
              />
              <img
                src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F128x56%2F85633b799f%2Fhumly-dark.webp&w=64&h=28"
                alt="Humly"
                className="h-5 lg:h-6"
              />
              <img
                src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F256x41%2F6ee0fa3639%2Fdefined-learning-dark.png&w=128&h=20"
                alt="Defined Learning"
                className="h-5 lg:h-6"
              />
              <img
                src="https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F176x38%2F623bf40901%2Fbrand-actif-dark.webp&w=88&h=19"
                alt="Brand Actif"
                className="h-5 lg:h-6"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
