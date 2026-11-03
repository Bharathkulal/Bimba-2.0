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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Everything You Need to Become{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Job-Ready.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A comprehensive career acceleration suite designed specifically to elevate college students from academic learning to competitive industry placement.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 shadow-2xs hover:shadow-xl hover:shadow-emerald-950/5 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 group-hover:border-emerald-200 group-hover:bg-emerald-50 text-emerald-600 flex items-center justify-center transition-colors shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors uppercase tracking-wider">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2.5 font-['Plus_Jakarta_Sans',sans-serif]">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-emerald-700 transition-colors">
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

