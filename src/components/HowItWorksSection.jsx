import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Sparkles, Rocket, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      subtitle: 'Input your academic background, projects, and target technical roles.',
      icon: UserCheck,
      details: 'Upload an existing resume or build one section-by-section with AI guidance.',
    },
    {
      number: '02',
      title: 'Analyze Your Potential',
      subtitle: 'Get an instant ATS benchmark score and a deep skill gap diagnosis.',
      icon: Sparkles,
      details: 'Pinpoint weak bullet points, formatting flaws, and missing keywords in seconds.',
    },
    {
      number: '03',
      title: 'Build Your Future',
      subtitle: 'Apply with confidence to matched campus drives and company openings.',
      icon: Rocket,
      details: 'Close technical skill gaps through tailored roadmaps and landing placement offers.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F8FAFC] border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/60">
            Guided Pathway
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Three simple, structured steps to elevate your career readiness from classroom to company offer.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Subtle Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[14%] right-[14%] -translate-y-8 h-0.5 border-t-2 border-dashed border-emerald-300 -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-black tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
                        STEP {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/70 text-emerald-600 flex items-center justify-center shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      {step.title}
                    </h3>

                    {/* Step Subtitle */}
                    <p className="text-sm font-medium text-slate-700 mb-3">
                      {step.subtitle}
                    </p>

                    {/* Details */}
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                    <span>Phase 0{idx + 1} Readiness</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

