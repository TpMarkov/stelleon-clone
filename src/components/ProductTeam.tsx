import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const ProductTeam = () => {
  const team = [
    'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F800x904%2F15f50d23f1%2Fa_surma.png&w=400&h=452',
    'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F800x904%2Fa4a2d45152%2Fgrzegorz-jaworski.png&w=400&h=452',
    'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F800x904%2Fb9be3e2112%2Firek-skrobis-2025.png&w=400&h=452',
    'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F800x904%2F5ddf97a7d2%2Fkajetan-boruta.png&w=400&h=452',
    'https://selleo.com/.netlify/images?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F86602%2F800x904%2Febd06a580e%2Fbernadetta-fryczkowska.png&w=400&h=452'
  ];

  return (
    <section className="py-20 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="container mb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <div className="space-y-6">
            <span className="text-sm font-black uppercase tracking-widest text-primary block">Experts in EdTech, HRTech & SaaS</span>
            <h2 className="text-black"><strong>The Product Team</strong><br /> That Feels Like Your Own</h2>
            <p className="text-lg text-neutral-500 max-w-lg">From MVPs to full-scale platforms – our product teams design, build and grow software that makes an impact.</p>
          </div>
          <div className="lg:justify-self-end">
            <a href="/contact" className="btn-primary group">
              Contact Us
              <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 px-4 overflow-x-auto no-scrollbar pb-10">
        {team.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex-none w-64 md:w-80 aspect-[0.88/1] relative group overflow-hidden rounded-2xl"
          >
            <img 
              src={img} 
              alt="Team Member" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
