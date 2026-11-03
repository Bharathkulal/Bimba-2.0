import React from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  X,
  Target,
  Compass,
  GraduationCap,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

export default function WhyBimbaSection() {
  const pillars = [
    {
      title: 'Understand Your Strengths',
      description:
        'Uncover hidden competencies across your academic projects and coursework that modern recruiters value most.',
      icon: Target,
    },
    {
      title: 'Discover Your Skill Gaps',
      description:
        'Benchmark your technical stack against real market demand so you never walk into an interview underprepared.',
      icon: TrendingUp,
    },
    {
      title: 'Find Relevant Opportunities',
      description:
        'Get matched with verified campus placement drives, internships, and entry-level positions where you stand out.',
      icon: Compass,
    },
    {
      title: 'Prepare for Placements',
      description:
        'Practice structured, metrics-driven communication that satisfies both automated ATS scanners and technical panel judges.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading and 4 Pillars */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200/60">
              Why BIMBA AI
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              More Than a Resume Builder.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Your Career Companion.
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Most resume tools offer generic design templates that fail modern applicant tracking systems. BIMBA AI acts as your personal career mentor—evaluating real-world industry benchmarks and guiding you from skill acquisition to job offer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-emerald-200 transition-colors"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-3">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Comparison (Before vs With BIMBA AI) */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Transformation Snapshot
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  BIMBA Intelligence
                </span>
              </div>

              {/* Before Card */}
              <div className="mb-5 p-4 rounded-xl bg-rose-50/60 border border-rose-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                    <X className="w-4 h-4 text-rose-600" />
                    <span>Before BIMBA AI (Generic Resume)</span>
                  </div>
                  <span className="text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                    ATS Score: 41/100
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-through italic">
                  "Worked on student portal project. Assisted with frontend changes and tested features."
                </p>
                <div className="flex items-center gap-2 mt-2 text-[10px] text-rose-700">
                  <span>✕ Missing metric impact</span>
                  <span>✕ Passive phrasing</span>
                  <span>✕ Unrecognized by ATS</span>
                </div>
              </div>

              {/* With BIMBA AI Card */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 shadow-xs relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>With BIMBA AI (Optimized XYZ Format)</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded">
                    ATS Score: 95/100
                  </span>
                </div>
                <p className="text-xs text-slate-800 font-medium">
                  "Architected full-stack BCA portal using React & FastAPI, reducing API latency by 35% and supporting 1,200+ concurrent student evaluations."
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2.5 text-[10px] text-emerald-800 font-semibold">
                  <span className="bg-emerald-100 px-1.5 py-0.5 rounded">✓ Quantified Impact (35%)</span>
                  <span className="bg-emerald-100 px-1.5 py-0.5 rounded">✓ Action Verb (Architected)</span>
                  <span className="bg-emerald-100 px-1.5 py-0.5 rounded">✓ High Keyword Density</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                  Result: <strong className="text-slate-900 font-bold">3.8x higher interview callbacks</strong> across verified campus recruitment drives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

