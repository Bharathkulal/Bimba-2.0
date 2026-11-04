import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="get-started" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#1C1917] text-white p-8 sm:p-14 lg:p-18 text-center shadow-2xl shadow-[#1C1917]/30">
          {/* Warm ambient glow — subtle only */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-72 bg-[#D97745]/12 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D97745]/8 blur-3xl pointer-events-none rounded-full" />
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-[#F5C29A] text-xs font-semibold tracking-wider uppercase mb-6 font-['Inter',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#D97745]" />
              <span>Placement Season Ready</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
              Your Dream Career Starts Here.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/65 max-w-xl mb-9 font-['Inter',sans-serif]">
              Take the first step towards becoming job-ready. Build your ATS-optimized resume and unlock placement recommendations today.
            </p>

            {/* Action Button */}
            <motion.a
              href="#login"
              className="inline-flex items-center gap-2.5 bg-[#D97745] hover:bg-[#C4683A] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-[#D97745]/30 transition-all duration-200 group active:scale-[0.98]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Micro reassurance */}
            <div className="flex items-center gap-2 mt-6 text-xs text-white/45 font-['Inter',sans-serif]">
              <ShieldCheck className="w-4 h-4 text-[#D97745]/70" />
              <span>Compliant with Dr. B. B. Hegde College Placement Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
