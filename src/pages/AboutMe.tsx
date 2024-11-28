import React from 'react';
import Hero from '../components/about/Hero';
import InterestGrid from '../components/about/InterestGrid';
import SkillsSection from '../components/about/SkillsSection';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Hero />
      <InterestGrid />
      <SkillsSection />
    </div>
  );
};

export default AboutMe;