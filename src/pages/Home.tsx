import React from 'react';
import { Hero } from '../components/Hero';
import { Widgets } from '../components/Widgets';
import { AboutUs } from '../components/AboutUs';
import { HowWeWork } from '../components/HowWeWork';
import { TryDevelopers } from '../components/TryDevelopers';
import { AISection } from '../components/AISection';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { UXResearch } from '../components/UXResearch';
import { ProductTeam } from '../components/ProductTeam';
import { Awards } from '../components/Awards';
import { Ratings } from '../components/Ratings';
import { ArticlesSection } from '../components/ArticlesSection';
import { ContactSection } from '../components/ContactSection';

const Home = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <Widgets />
      <AboutUs />
      <HowWeWork />
      <TryDevelopers />
      <AISection />
      <ProjectsGrid />
      <UXResearch />
      <ProductTeam />
      <Awards />
      <Ratings />
      <ArticlesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
