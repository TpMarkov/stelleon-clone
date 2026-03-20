import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const ProjectsGrid = () => {
  const projects = [
    {
      title: 'Learning that feels like Gaming',
      category: 'LMS | SaaS | ROR | React',
      video: 'https://a.storyblok.com/f/86602/x/4bd61d7bc2/home-datagame-compressed.mp4',
      bgColor: '#008F8D'
    },
    {
      title: 'Modern Tools for Modern Recruiters',
      category: 'HRM | RoR | React | Mobile',
      video: 'https://a.storyblok.com/f/86602/x/70b4dd4feb/home-ai-agents-compressed.mp4',
      bgColor: '#27272A'
    },
    {
      title: 'Digitizing Government Helpdesks with AI',
      category: 'Collaboration | SaaS | HRM | React',
      video: 'https://a.storyblok.com/f/86602/x/24f93bafa0/home-exegov-compressed.mp4',
      bgColor: '#5488FF'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-sm font-black uppercase tracking-widest text-primary mb-4 block">Case study</span>
            <h2 className="text-black">Our Work</h2>
          </div>
          <a href="/portfolio" className="btn-primary group">
            View full portfolio
            <ArrowRight className="ml-3 size-6 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg"
              style={{ backgroundColor: project.bgColor }}
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-500"
                src={project.video}
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white/70 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{project.title}</h3>
                <a href="#" className="text-white font-bold flex items-center group/link">
                  View case study
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
