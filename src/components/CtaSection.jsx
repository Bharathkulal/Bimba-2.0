import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="get-started" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#022c22] text-white p-8 sm:p-14 lg:p-18 text-center shadow-2xl shadow-emerald-950/20">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-emerald-500/20 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-800/60 border border-emerald-500/30 text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Placement Season Ready</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight mb-4">
              Your Dream Career Starts Here.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-emerald-100/80 max-w-xl mb-9">
              Take the first step towards becoming job-ready. Build your ATS-optimized resume and unlock placement recommendations today.
            </p>

            {/* Action Button */}
            <motion.a
              href="#login"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-black/20 hover:scale-102 transition-all duration-200 group active:scale-98"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 text-emerald-700 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Micro reassurance */}
            <div className="flex items-center gap-2 mt-6 text-xs text-emerald-200/70">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Compliant with Dr. B. B. Hegde College Placement Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

