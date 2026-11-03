import React from 'react';
import CollegeHeader from './components/CollegeHeader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyBimbaSection from './components/WhyBimbaSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function LandingPage({ onReplayIntro }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* 1. College Branding Header */}
      <CollegeHeader />

      {/* 2. Navigation Bar */}
      <Navbar onReplayIntro={onReplayIntro} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection />

        {/* 4. Features Section */}
        <FeaturesSection />

        {/* 5. How It Works Section */}
        <HowItWorksSection />

        {/* 6. Why BIMBA AI Section */}
        <WhyBimbaSection />

        {/* 7. Final Call to Action */}
        <CtaSection />
      </main>

      {/* 8. Footer */}
      <Footer onReplayIntro={onReplayIntro} />
    </div>
  );
}

