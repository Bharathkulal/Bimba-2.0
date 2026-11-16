import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  Code2,
  FileText,
  Briefcase,
  Trophy,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function HeroSection() {
  const journeyStages = [
    {
      step: '01',
      title: 'DISCOVER YOURSELF',
      subtitle: 'Identify strengths, aptitudes & career trajectories',
      icon: Compass,
      active: true,
    },
    {
      step: '02',
      title: 'BUILD YOUR SKILLS',
      subtitle: 'Targeted tech competencies & project mastery',
      icon: Code2,
      active: true,
    },
    {
      step: '03',
      title: 'CREATE YOUR RESUME',
      subtitle: 'ATS-standard architecture & impact phrasing',
      icon: FileText,
      active: true,
    },
    {
      step: '04',
      title: 'EXPLORE OPPORTUNITIES',
      subtitle: 'Campus placement matching & company insights',
      icon: Briefcase,
      active: true,
    },
    {
      step: '05',
      title: 'ACHIEVE YOUR GOALS',
      subtitle: 'Interview conversion & corporate placement',
      icon: Trophy,
      active: true,
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[#090909] pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
      {/* Subtle background ambient glow (luxurious gold, no purple gradients) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[140px] rounded-full" />
        <div className="absolute -bottom-20 right-10 w-[400px] h-[300px] bg-[#D4AF37]/4 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#292929_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Hero Copy */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>YOUR CAREER. YOUR FUTURE. YOUR JOURNEY.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6 font-['Inter',sans-serif]">
              Your Dreams Deserve{' '}
              <span className="font-serif-heading italic font-normal gold-text-gradient block mt-1">
                More Than Just a Degree.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#A1A1A1] max-w-xl leading-relaxed mb-9">
              Your journey doesn't end in the classroom. Discover your potential, build professional skills, create powerful resumes, and move closer to the career you've always dreamed of.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B88E18] hover:from-[#E5C158] hover:to-[#C99E22] text-black font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/30 transition-all duration-200 active:scale-[0.98] group"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-[#151515] hover:bg-[#1A1A1A] text-white hover:text-[#D4AF37] border border-[#292929] hover:border-[#D4AF37]/40 font-semibold text-base px-6 py-3.5 rounded-xl transition duration-200"
              >
                <span>Explore Bimba AI</span>
              </a>
            </div>

            {/* Placement Trust Proof */}
            <div className="flex items-center gap-6 pt-6 border-t border-[#292929] w-full text-xs text-[#A1A1A1]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Dr. B. B. Hegde Placement Cohort</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Career Architecture Suite</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Career Journey Visualization */}
          <motion.div
            className="lg:col-span-6 relative w-full"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Card Outer Shell with Subtle Gold Border */}
            <div className="relative bg-[#111111] rounded-2xl border border-[#292929] shadow-2xl p-6 sm:p-8 overflow-hidden">
              {/* Subtle top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

              {/* Interface Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#292929] mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-widest text-white uppercase font-['Inter',sans-serif]">
                      Career Progression Pipeline
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A1A1A1] mt-0.5">
                    End-to-End Professional Readiness Lifecycle
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151515] border border-[#D4AF37]/30 text-[11px] font-semibold text-[#D4AF37]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span>5-STAGE SYSTEM</span>
                </div>
              </div>

              {/* Connected Stages Pipeline */}
              <div className="relative pl-2 sm:pl-4 space-y-4">
                {/* Continuous Gold Connecting Line */}
                <div className="absolute left-[23px] sm:left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-[#D4AF37]/20 -z-0" />

                {journeyStages.map((stage, idx) => {
                  const Icon = stage.icon;
                  return (
                    <motion.div
                      key={stage.step}
                      className="group relative flex items-start gap-4 p-3 sm:p-3.5 rounded-xl bg-[#151515]/90 border border-[#292929] hover:border-[#D4AF37]/50 transition-all duration-300 z-10"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      {/* Step Indicator Node */}
                      <div className="w-8 h-8 rounded-lg bg-[#090909] border border-[#D4AF37]/60 text-[#D4AF37] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Stage Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-bold tracking-wider text-white group-hover:text-[#F5E6B8] transition-colors">
                            <span className="text-[#D4AF37] mr-1.5 font-mono">{stage.step} —</span>
                            {stage.title}
                          </h4>
                          <span className="text-[10px] text-[#A1A1A1] font-mono uppercase tracking-widest hidden sm:inline">
                            PHASE {stage.step}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#A1A1A1] mt-0.5 leading-snug">
                          {stage.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Metrics Pill */}
              <div className="mt-6 pt-4 border-t border-[#292929] flex items-center justify-between text-xs text-[#A1A1A1]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  Integrated Academic & Placement Alignment
                </span>
                <span className="font-semibold text-white">BIMBA 2.0 Core</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
