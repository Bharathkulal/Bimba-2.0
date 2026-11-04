import React from 'react';
import { motion } from 'framer-motion';
import {
  FileEdit,
  ScanSearch,
  Sparkles,
  Target,
  BarChart3,
  Route,
  ArrowUpRight,
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      id: '01',
      title: 'AI Resume Builder',
      description:
        'Construct clean, professional resumes with intelligent auto-formatting, section-based guidelines, and live previews.',
      icon: FileEdit,
      tag: 'Creation',
    },
    {
      id: '02',
      title: 'ATS Resume Analyzer',
      description:
        'Simulate top enterprise Applicant Tracking Systems to evaluate formatting, keyword relevance, and parsing accuracy.',
      icon: ScanSearch,
      tag: 'Audit',
    },
    {
      id: '03',
      title: 'AI Resume Improver',
      description:
        'Transform passive duty descriptions into powerful accomplishment metrics using the proven Google XYZ formula.',
      icon: Sparkles,
      tag: 'Optimization',
    },
    {
      id: '04',
      title: 'Smart Job Matching',
      description:
        'Discover campus placement drives and external openings tailored directly to your technical competencies.',
      icon: Target,
      tag: 'Opportunities',
    },
    {
      id: '05',
      title: 'Skill Gap Analysis',
      description:
        'Pinpoint missing frameworks, libraries, and certifications demanded by real-world recruiter job descriptions.',
      icon: BarChart3,
      tag: 'Analytics',
    },
    {
      id: '06',
      title: 'Career Roadmap',
      description:
        'Follow step-by-step personalized learning paths and project recommendations to reach full interview readiness.',
      icon: Route,
      tag: 'Growth',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EFE8] text-[#78716C] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E5DDD5] font-['Inter',sans-serif]">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1917] tracking-tight">
            Everything You Need to Become{' '}
            <span className="text-[#D97745]">
              Job-Ready.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#78716C] font-['Inter',sans-serif]">
            A comprehensive career acceleration suite designed specifically to elevate college students from academic learning to competitive industry placement.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative bg-[#FAF8F5] hover:bg-white rounded-2xl p-7 border border-[#EDE8E0] hover:border-[#F0C9A8] transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-[#C4A882]/10 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#EDE8E0] group-hover:border-[#F0C9A8] group-hover:bg-[#FDF0E8] text-[#D97745] flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#9C8B7E] group-hover:text-[#D97745] transition-colors uppercase tracking-wider font-['Inter',sans-serif]">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#1C1917] group-hover:text-[#A85A2A] transition-colors mb-2.5">
                    {feature.title}
                  </h3>

                  <p className="text-[#78716C] text-sm leading-relaxed mb-6 font-['Inter',sans-serif]">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EDE8E0] flex items-center justify-between text-xs font-semibold text-[#9C8B7E] group-hover:text-[#D97745] transition-colors font-['Inter',sans-serif]">
                  <span>Explore Feature</span>
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
