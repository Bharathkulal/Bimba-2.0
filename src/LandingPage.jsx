import React from 'react';
import CollegeHeader from './components/CollegeHeader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StudentMotivationSection from './components/StudentMotivationSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import MotivationalCtaSection from './components/MotivationalCtaSection';
import Footer from './components/Footer';

export default function LandingPage({ onReplayIntro }) {
  return (
    <div className="min-h-screen bg-[#090909] text-white flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* 1. College Branding Header (PRESERVED INTACT ON PURE WHITE BACKGROUND) */}
      <CollegeHeader />

      {/* 2. Redesigned Black & Gold Navigation Bar */}
      <Navbar onReplayIntro={onReplayIntro} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section with 5-Stage Career Journey Visualization */}
        <HeroSection />

        {/* 4. Student Motivation Section ("Your Degree Is Just the Beginning.") */}
        <StudentMotivationSection />

        {/* 5. Features Section ("Everything You Need to Build Your Future.") */}
        <FeaturesSection />

        {/* 6. How It Works ("From Classroom to Career." - 5-Step Connected Timeline) */}
        <HowItWorksSection />

        {/* 7. Motivational Section ("One Day, Your Hard Work Will Introduce You...") */}
        <MotivationalCtaSection />
      </main>

      {/* 8. Redesigned Black & Gold Footer */}
      <Footer onReplayIntro={onReplayIntro} />
    </div>
  );
}
