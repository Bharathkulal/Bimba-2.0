import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function MotivationalCtaSection({ onNavigateToLogin }) {
  return (
    <section id="get-started" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden">
      {/* Cinematic subtle gold glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/6 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#292929_1px,transparent_1px)] [background-size:28px_28px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#151515] via-[#111111] to-[#0D0D0D] border border-[#292929] p-10 sm:p-16 lg:p-20 text-center shadow-2xl">
          {/* Subtle top gold accent hairline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-90" />

          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#090909] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-semibold tracking-widest uppercase mb-8 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>THE BIMBA STANDARD</span>
            </div>

            {/* Motivational Statement */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight font-serif-heading italic leading-[1.18] text-white mb-6">
              "One Day, Your Hard Work Will Introduce You{' '}
              <span className="gold-text-gradient font-semibold not-italic block mt-1">
                Before Your Name Does."
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-[#A1A1A1] max-w-xl mx-auto mb-10 leading-relaxed font-light">
              Start today. Improve every day. Build a future you're proud of.
            </p>

            {/* Gold CTA Button */}
            <motion.a
              href="#login"
              onClick={onNavigateToLogin ? (e) => { e.preventDefault(); onNavigateToLogin(); } : undefined}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B88E18] hover:from-[#E5C158] hover:to-[#C99E22] text-black font-bold text-base tracking-wider uppercase px-9 py-4 rounded-xl shadow-xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/30 transition-all duration-200 group active:scale-[0.98] cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>BUILD YOUR FUTURE</span>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1.5 transition-transform" />
            </motion.a>

            {/* Subtext info */}
            <div className="mt-8 pt-6 border-t border-[#292929] text-xs text-[#A1A1A1] font-mono tracking-wide">
              Dr. B. B. Hegde First Grade College, Kundapura • Career & Placement Ecosystem
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

