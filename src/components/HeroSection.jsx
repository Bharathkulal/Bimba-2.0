import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  FileCheck2,
  Award,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-18 lg:pb-28">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & CTA */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide uppercase shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>AI-Powered Career Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
              Your Career. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                Your Potential.
              </span> <br />
              Your Future.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              Build professional resumes, discover career opportunities, analyze your skills, and prepare for your dream job with the power of AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-200 active:scale-98 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-semibold text-base px-6 py-3.5 rounded-xl shadow-xs transition duration-200"
              >
                <span>Explore Features</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust Pill / Quick Value Proof */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-2 border-t border-slate-100 w-full">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ATS-Optimized Resumes
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Real-Time Skill Gap Audit
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Campus Placement Ready
              </span>
            </div>
          </motion.div>

          {/* Right Column: Floating Dashboard Preview */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            {/* Ambient Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl" />

            <motion.div
              className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-5 sm:p-6"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs border border-emerald-100">
                    AI
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Student Career Intelligence</h3>
                    <p className="text-[11px] text-slate-400">Dr. B. B. Hegde Placement Cohort</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Active Scan
                </span>
              </div>

              {/* Grid with ATS Score Dial & Career Readiness */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {/* Card 1: ATS Score */}
                <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                      ATS Score
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100/70 px-1.5 py-0.5 rounded">
                      High
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
                      94
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/100</span>
                  </div>
                  <p className="text-[11px] text-emerald-700 font-medium mt-1">
                    ✓ 100% Parsed Successfully
                  </p>
                </div>

                {/* Card 2: Career Progress */}
                <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-teal-600" />
                      Readiness
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Stage 3</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
                      88%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full w-[88%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Skill Analysis Matrix */}
              <div className="bg-white rounded-xl p-3.5 border border-slate-100 mb-4 shadow-2xs">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Skill Match
                  </span>
                  <span className="text-[11px] text-slate-400">Target: Software & AI</span>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-0.5">
                      <span>Python & FastAPI</span>
                      <span className="text-emerald-700 font-semibold">96% Match</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[96%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-0.5">
                      <span>Machine Learning & NLP</span>
                      <span className="text-emerald-700 font-semibold">90% Match</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[90%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-0.5">
                      <span>React & System Design</span>
                      <span className="text-slate-500 font-medium">82% Match</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-full w-[82%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Job Card */}
              <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      Associate AI Engineer
                    </h4>
                    <p className="text-[10px] text-slate-400">Campus Placement Drive • Kundapura</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                    95% Fit
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Subtle Floating Badges */}
            <motion.div
              className="hidden sm:flex absolute -bottom-5 -left-6 bg-white py-2 px-3.5 rounded-xl shadow-lg border border-slate-200/80 items-center gap-2 z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-900 leading-none">Instant ATS Feedback</p>
                <p className="text-[10px] text-slate-400">Zero wait time</p>
              </div>
            </motion.div>

            <motion.div
              className="hidden sm:flex absolute -top-4 -right-4 bg-white py-2 px-3.5 rounded-xl shadow-lg border border-slate-200/80 items-center gap-2 z-10"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-900 leading-none">Verified Formatting</p>
                <p className="text-[10px] text-emerald-600 font-semibold">100% ATS Safe</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

