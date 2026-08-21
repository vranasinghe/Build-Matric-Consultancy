import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import WhyBuiltMetric from '../components/WhyBuiltMetric';
import ProjectsPreview from '../components/ProjectsPreview';
import Insights from '../components/Insights';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyBuiltMetric />
      <ProjectsPreview />
      <Insights limit={3} />
      <CTA />
    </>
  );
}
