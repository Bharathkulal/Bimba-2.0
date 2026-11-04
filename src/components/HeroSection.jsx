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
    <section id="home" className="relative overflow-hidden pt-10 pb-18 sm:pt-16 sm:pb-26 lg:pt-20 lg:pb-32 bg-[#FAF8F5]">
      {/* Warm ambient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#D97745]/8 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#F5C29A]/15 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FAEBD8]/40 rounded-full blur-3xl" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDF0E8] border border-[#F0C9A8] text-[#A85A2A] text-xs font-semibold tracking-wide uppercase shadow-xs mb-7">
              <span className="w-2 h-2 rounded-full bg-[#D97745] animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-[#D97745]" />
              <span>AI-Powered Career Platform</span>
            </div>

            {/* Main Heading — Serif Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1C1917] tracking-tight leading-[1.1] mb-6">
              Your Career. <br />
              <span className="text-[#D97745]">
                Your Potential.
              </span>{' '}
              <br />
              Your Future.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#78716C] max-w-xl leading-relaxed mb-9 font-['Inter',sans-serif]">
              Build professional resumes, discover career opportunities, analyze your skills, and prepare for your dream job with the power of AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 bg-[#D97745] hover:bg-[#C4683A] text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-md shadow-[#D97745]/20 hover:shadow-lg hover:shadow-[#D97745]/30 transition-all duration-200 active:scale-[0.98] group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5EFE8] text-[#44403C] hover:text-[#1C1917] border border-[#E5DDD5] font-semibold text-base px-7 py-3.5 rounded-xl shadow-xs transition duration-200"
              >
                <span>Explore Features</span>
                <ChevronRight className="w-4 h-4 text-[#9C8B7E]" />
              </a>
            </div>

            {/* Trust Pill / Quick Value Proof */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#78716C] pt-4 border-t border-[#EDE8E0] w-full font-['Inter',sans-serif]">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D97745]" />
                ATS-Optimized Resumes
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D97745]" />
                Real-Time Skill Gap Audit
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#D97745]" />
                Campus Placement Ready
              </span>
            </div>
          </motion.div>

          {/* Right Column: Dashboard Preview */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            {/* Warm ambient glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D97745]/8 to-[#F5C29A]/12 rounded-3xl blur-xl" />

            <motion.div
              className="relative w-full max-w-lg bg-white rounded-2xl border border-[#EDE8E0] shadow-lg shadow-[#C4A882]/15 p-5 sm:p-6"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE3] mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FDF0E8] text-[#D97745] flex items-center justify-center font-bold text-xs border border-[#F0C9A8]">
                    AI
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1917] text-sm font-['Inter',sans-serif]">Student Career Intelligence</h3>
                    <p className="text-[11px] text-[#9C8B7E]">Dr. B. B. Hegde Placement Cohort</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#A85A2A] bg-[#FDF0E8] px-2.5 py-1 rounded-full border border-[#F0C9A8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97745] animate-ping" />
                  Active Scan
                </span>
              </div>

              {/* Grid with ATS Score & Career Readiness */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {/* Card 1: ATS Score */}
                <div className="bg-[#FAF8F5] rounded-xl p-3.5 border border-[#EDE8E0] relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#78716C] flex items-center gap-1">
                      <FileCheck2 className="w-3.5 h-3.5 text-[#D97745]" />
                      ATS Score
                    </span>
                    <span className="text-[10px] text-[#A85A2A] font-bold bg-[#FDF0E8] px-1.5 py-0.5 rounded">
                      High
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#1C1917] font-['Inter',sans-serif]">
                      94
                    </span>
                    <span className="text-xs text-[#9C8B7E] font-medium">/100</span>
                  </div>
                  <p className="text-[11px] text-[#A85A2A] font-medium mt-1">
                    ✓ 100% Parsed Successfully
                  </p>
                </div>

                {/* Card 2: Career Progress */}
                <div className="bg-[#FAF8F5] rounded-xl p-3.5 border border-[#EDE8E0]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#78716C] flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#D97745]" />
                      Readiness
                    </span>
                    <span className="text-[10px] text-[#9C8B7E] font-medium">Stage 3</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#1C1917] font-['Inter',sans-serif]">
                      88%
                    </span>
                  </div>
                  <div className="w-full bg-[#EDE8E0] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#D97745] h-full w-[88%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Skill Analysis Matrix */}
              <div className="bg-white rounded-xl p-3.5 border border-[#EDE8E0] mb-4 shadow-xs">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold text-[#44403C] flex items-center gap-1.5 font-['Inter',sans-serif]">
                    <TrendingUp className="w-3.5 h-3.5 text-[#D97745]" />
                    Verified Skill Match
                  </span>
                  <span className="text-[11px] text-[#9C8B7E]">Target: Software & AI</span>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-[#57534E] mb-0.5">
                      <span>Python & FastAPI</span>
                      <span className="text-[#A85A2A] font-semibold">96% Match</span>
                    </div>
                    <div className="w-full bg-[#EDE8E0] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#D97745] h-full w-[96%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-[#57534E] mb-0.5">
                      <span>Machine Learning & NLP</span>
                      <span className="text-[#A85A2A] font-semibold">90% Match</span>
                    </div>
                    <div className="w-full bg-[#EDE8E0] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#D97745] h-full w-[90%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] font-medium text-[#57534E] mb-0.5">
                      <span>React & System Design</span>
                      <span className="text-[#9C8B7E] font-medium">82% Match</span>
                    </div>
                    <div className="w-full bg-[#EDE8E0] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#C4A882] h-full w-[82%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Job Card */}
              <div className="bg-[#FAF8F5] rounded-xl p-3 border border-[#EDE8E0] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#D97745] text-white flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1917] leading-tight font-['Inter',sans-serif]">
                      Associate AI Engineer
                    </h4>
                    <p className="text-[10px] text-[#9C8B7E]">Campus Placement Drive • Kundapura</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-[#A85A2A] bg-[#FDF0E8] px-2 py-0.5 rounded-md border border-[#F0C9A8]">
                    95% Fit
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge: Bottom Left */}
            <motion.div
              className="hidden sm:flex absolute -bottom-5 -left-6 bg-white py-2 px-3.5 rounded-xl shadow-md border border-[#EDE8E0] items-center gap-2 z-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-6 h-6 rounded-full bg-[#FDF0E8] text-[#D97745] flex items-center justify-center font-bold text-xs">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-[#1C1917] leading-none">Instant ATS Feedback</p>
                <p className="text-[10px] text-[#9C8B7E]">Zero wait time</p>
              </div>
            </motion.div>

            {/* Floating Badge: Top Right */}
            <motion.div
              className="hidden sm:flex absolute -top-4 -right-4 bg-white py-2 px-3.5 rounded-xl shadow-md border border-[#EDE8E0] items-center gap-2 z-10"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="w-6 h-6 rounded-full bg-[#FDF0E8] text-[#D97745] flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-[#1C1917] leading-none">Verified Formatting</p>
                <p className="text-[10px] text-[#D97745] font-semibold">100% ATS Safe</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
