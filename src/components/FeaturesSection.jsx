import React from 'react';
import { motion } from 'framer-motion';
import {
  FileEdit,
  ScanSearch,
  Compass,
  Building2,
  BarChart3,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      id: '01',
      title: 'AI Resume Builder',
      description:
        'Construct recruiter-approved resumes with structured section editors, live preview rendering, and standardized formatting.',
      icon: FileEdit,
      tag: 'ARCHITECTURE',
    },
    {
      id: '02',
      title: 'ATS Resume Analyzer',
      description:
        'Audit your resume PDF against modern enterprise applicant tracking algorithms to identify structural and keyword bottlenecks.',
      icon: ScanSearch,
      tag: 'DIAGNOSTICS',
    },
    {
      id: '03',
      title: 'Job Discovery',
      description:
        'Browse curated campus placement drives, technical internships, and entry-level engineering roles matching your profile.',
      icon: Compass,
      tag: 'OPPORTUNITIES',
    },
    {
      id: '04',
      title: 'Company Insights',
      description:
        'Explore hiring criteria, tech stack expectations, and campus recruitment benchmarks from verified corporate employers.',
      icon: Building2,
      tag: 'INTELLIGENCE',
    },
    {
      id: '05',
      title: 'Skill Gap Analysis',
      description:
        'Compare your current academic competencies against target job postings to identify framework and tooling deficiencies.',
      icon: BarChart3,
      tag: 'BENCHMARKING',
    },
    {
      id: '06',
      title: 'Career Preparation',
      description:
        'Access guided roadmaps, milestone checklists, and technical interview guidelines curated for campus placement success.',
      icon: GraduationCap,
      tag: 'PLACEMENT',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151515] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            PLATFORM CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-['Inter',sans-serif]">
            Everything You Need to{' '}
            <span className="font-serif-heading italic font-normal gold-text-gradient">
              Build Your Future.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1A1]">
            Purpose-built career acceleration tools designed specifically for college students preparing for competitive placement drives.
          </p>
        </div>

        {/* Feature Cards Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative bg-[#151515] hover:bg-[#1A1A1A] rounded-2xl p-7 sm:p-8 border border-[#292929] hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div>
                  {/* Card Header: Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#090909] border border-[#292929] group-hover:border-[#D4AF37]/60 text-[#D4AF37] flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#A1A1A1] group-hover:text-[#D4AF37] transition-colors uppercase">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F5E6B8] transition-colors mb-2.5 font-['Inter',sans-serif]">
                    {feature.title}
                  </h3>

                  <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#292929] flex items-center justify-between text-xs font-semibold text-[#A1A1A1] group-hover:text-[#D4AF37] transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
