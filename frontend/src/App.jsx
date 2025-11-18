import React from 'react';
import {
  Footer,
  HeroSection,
  ServicesSection,
  AboutSection,
  WhatWeDoSection,
  ApproachSection,
  CounterSection,
  TestimonialsSection,
  CTASection
} from './components';

import { useScrollProgress, useAOSAnimation } from './hooks';
import './styles.css';

const App = () => {
  // Initialize custom hooks
  useScrollProgress();
  useAOSAnimation();

  return (
    <>
      
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhatWeDoSection />
        <ApproachSection />
        <CounterSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default App;
