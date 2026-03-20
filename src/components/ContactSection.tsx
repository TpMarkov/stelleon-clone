import React from 'react';
import { motion } from 'motion/react';

export const ContactSection = () => {
  return (
    <section className="bg-black text-white py-20 lg:py-32 overflow-hidden relative">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-sm font-black uppercase tracking-widest text-primary block">Contact us</span>
          <h2 className="text-white"><strong>Share your goals. We’ll build the solution together.</strong></h2>
          <p className="text-xl text-neutral-300 leading-relaxed max-w-lg">
            We collaborate with founders who need speed and PMs who need control, blending product thinking, thoughtful design, and dependable engineering.
          </p>
          <div className="flex -space-x-4 pt-4">
            <img src="https://a.storyblok.com/f/86602/104x104/d301aa2881/avatar-dawid-poslinski.png" alt="Avatar" className="size-14 rounded-full border-4 border-black" />
            <img src="https://a.storyblok.com/f/86602/104x104/d128e53b11/avatar-marysia.png" alt="Avatar" className="size-14 rounded-full border-4 border-black" />
            <img src="https://a.storyblok.com/f/86602/104x104/545f68bda2/avatar-maciej.png" alt="Avatar" className="size-14 rounded-full border-4 border-black" />
          </div>
        </div>

        <div className="bg-neutral-900 p-8 lg:p-12 rounded-2xl shadow-2xl">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">Name *</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-neutral-700 py-2 focus:border-primary outline-none transition-colors" placeholder="Name Surname" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">E-mail *</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-neutral-700 py-2 focus:border-primary outline-none transition-colors" placeholder="name@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-neutral-500">Project description *</label>
              <textarea className="w-full bg-transparent border-b-2 border-neutral-700 py-2 focus:border-primary outline-none transition-colors min-h-[100px]" placeholder="Our goal is to launch / improve / scale a product that..." />
            </div>
            <button className="btn-primary w-full">
              Send message
            </button>
          </form>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 size-[600px] bg-primary/10 rounded-full blur-[120px]" />
    </section>
  );
};
