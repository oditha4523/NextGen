import React from 'react';
import {
  Header,
  Footer,
  HeroSection,
  ServicesSection,
  AboutSection,
  WhatWeDoSection,
  ApproachSection,
  CounterSection,
  TestimonialsSection,
  BlogSection,
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
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhatWeDoSection />
        <ApproachSection />
        <CounterSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default App;
