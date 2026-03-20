import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Rocket, Layers } from 'lucide-react';

export const HowWeWork = () => {
  const steps = [
    {
      icon: <Users className="size-12" />,
      title: 'Dedicated Experts to Strengthen Your Team',
      description: 'Scale your capacity with experienced developers, designers, and product specialists who integrate smoothly with your workflow.',
      link: '/services'
    },
    {
      icon: <Layers className="size-12" />,
      title: 'Full-Cycle Product Development',
      description: 'From discovery and scoping to design, development, testing, and launch, we handle the entire product cycle.',
      link: '/services'
    },
    {
      icon: <Rocket className="size-12" />,
      title: 'Rapid Prototyping for Validation',
      description: 'Turn your idea into a clear, testable prototype, perfect for validating assumptions or securing early support.',
      link: '/services'
    }
  ];

  return (
    <section className="py-20 lg:py-40 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-black uppercase tracking-widest text-primary mb-6 block">How We Work</span>
          <h2 className="text-black">Built to match your goals, ready to scale with your product.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-neutral-50 p-10 rounded-2xl transition-all hover:bg-neutral-100 flex flex-col h-full"
            >
              <div className="text-neutral-300 group-hover:text-black transition-colors mb-8">
                {step.icon}
              </div>
              <h3 className="text-2xl font-medium mb-6 text-black leading-tight">{step.title}</h3>
              <p className="text-neutral-500 mb-8 flex-grow leading-relaxed">{step.description}</p>
              <a href={step.link} className="inline-flex items-center text-black font-bold group-hover:text-primary transition-colors">
                Find out more
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper to avoid import error if Users is not imported
const Users = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
