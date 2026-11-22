import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StudentMotivationSection from './components/StudentMotivationSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import MotivationalCtaSection from './components/MotivationalCtaSection';
import Footer from './components/Footer';

export default function LandingPage({ onReplayIntro, onNavigateToLogin }) {
  return (
    <div className="min-h-screen bg-[#090909] text-white flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* 1. Redesigned Black & Gold Navigation Bar */}
      <Navbar onReplayIntro={onReplayIntro} onNavigateToLogin={onNavigateToLogin} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section with 5-Stage Career Journey Visualization */}
        <HeroSection onNavigateToLogin={onNavigateToLogin} />

        {/* 3. Student Motivation Section ("Your Degree Is Just the Beginning.") */}
        <StudentMotivationSection />

        {/* 4. Features Section ("Everything You Need to Build Your Future.") */}
        <FeaturesSection />

        {/* 5. How It Works ("From Classroom to Career." - 5-Step Connected Timeline) */}
        <HowItWorksSection />

        {/* 6. Motivational Section ("One Day, Your Hard Work Will Introduce You...") */}
        <MotivationalCtaSection onNavigateToLogin={onNavigateToLogin} />
      </main>

      {/* 7. Redesigned Black & Gold Footer */}
      <Footer onReplayIntro={onReplayIntro} />
    </div>
  );
}
