import React from 'react';
import { motion } from 'framer-motion';
import { Compass, TrendingUp, Award, ArrowUpRight } from 'lucide-react';

export default function StudentMotivationSection() {
  const pillars = [
    {
      num: '01',
      title: 'DISCOVER',
      tagline: 'Understand your strengths, interests and career direction.',
      description:
        'Map your technical curiosities and coursework into concrete industry profiles, eliminating ambiguity around career choices.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'DEVELOP',
      tagline: 'Build the skills and confidence required in the professional world.',
      description:
        'Target key competencies, engineering practices, and real-world project portfolios that demonstrate immediate workplace value.',
      icon: TrendingUp,
    },
    {
      num: '03',
      title: 'ACHIEVE',
      tagline: 'Turn your preparation into real career opportunities.',
      description:
        'Translate academic persistence into high-converting ATS resumes, verified placement interviews, and prestigious corporate offers.',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#111111] border-y border-[#292929] relative overflow-hidden">
      {/* Subtle ambient luxury light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/3 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-mono">
            FOUNDATIONAL PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-3 mb-4 font-['Inter',sans-serif]">
            Your Degree Is{' '}
            <span className="font-serif-heading italic font-normal gold-text-gradient">
              Just the Beginning.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1A1] max-w-xl mx-auto">
            Every successful career starts with a decision to become better.
          </p>
        </div>

        {/* Three Elegant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="group relative bg-[#151515] rounded-2xl p-8 border border-[#292929] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37]">
                      {pillar.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#090909] border border-[#292929] group-hover:border-[#D4AF37]/60 text-[#D4AF37] flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold tracking-wider text-white mb-3 font-['Inter',sans-serif] group-hover:text-[#F5E6B8] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#D4AF37]/90 mb-3 leading-snug">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs text-[#A1A1A1] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle card bottom accent */}
                <div className="pt-6 mt-8 border-t border-[#292929] flex items-center justify-between text-xs text-[#A1A1A1] group-hover:text-white transition-colors">
                  <span>Explore Stage</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

