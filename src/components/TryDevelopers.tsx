import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const TryDevelopers = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="bg-neutral-50 rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="p-10 lg:p-20 flex-1">
            <h2 className="mb-8 text-neutral-900">
              <b>Try our developers.</b> <br />Free for 2 weeks.
            </h2>
            <p className="text-lg text-neutral-700 mb-10 leading-relaxed max-w-xl">
              No risk. Just results. Test how our team works with your process, roadmap, and product vision. Founders can validate momentum and product value early, while PMs get transparency, structure, and confidence that deadlines stay on track.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="btn-primary group">
                Test our team
                <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-3 border border-primary text-primary font-bold hover:bg-orange-50 transition-colors">
                Share this offer
              </button>
            </div>
          </div>
          <div className="hidden lg:block flex-1 h-full min-h-[500px] relative">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
              src="https://a.storyblok.com/f/86602/x/9da553ae6a/dev-list-circle.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
