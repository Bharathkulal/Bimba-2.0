import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  FileText,
  BarChart2,
  Briefcase,
  Trophy,
  ArrowRight,
} from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Discover Your Career Direction',
      description: 'Assess technical interests and define target roles across software and engineering domains.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Build Your Professional Resume',
      description: 'Structure achievements, projects, and skills using verified, ATS-compliant formats.',
      icon: FileText,
    },
    {
      num: '03',
      title: 'Analyze Your Skills',
      description: 'Benchmark competencies against job postings to identify and close critical knowledge gaps.',
      icon: BarChart2,
    },
    {
      num: '04',
      title: 'Explore Opportunities',
      description: 'Match with active campus placement drives, internships, and corporate recruitment feeds.',
      icon: Briefcase,
    },
    {
      num: '05',
      title: 'Prepare for Your Dream Career',
      description: 'Execute tailored interview roadmaps and convert preparation into corporate offers.',
      icon: Trophy,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#111111] border-y border-[#292929] relative overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/3 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
            METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-3 mb-4 font-['Inter',sans-serif]">
            From Classroom to{' '}
            <span className="font-serif-heading italic font-normal gold-text-gradient">
              Career.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1A1] max-w-xl mx-auto">
            A structured, progressive timeline transforming academic potential into verified corporate readiness.
          </p>
        </div>

        {/* 5-Step Connected Timeline */}
        <div className="relative">
          {/* Desktop Connecting Gold Line */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37] to-[#D4AF37]/30 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  className="group relative bg-[#151515] rounded-2xl p-6 border border-[#292929] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    {/* Node / Number / Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#090909] border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center font-bold text-xs shadow-sm group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] bg-[#090909] px-2.5 py-1 rounded-md border border-[#292929]">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#F5E6B8] transition-colors font-['Inter',sans-serif]">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-[#A1A1A1] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro indicator */}
                  <div className="mt-5 pt-4 border-t border-[#292929] flex items-center gap-1.5 text-[11px] font-mono text-[#A1A1A1] group-hover:text-[#D4AF37] transition-colors">
                    <span>STEP {step.num}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
