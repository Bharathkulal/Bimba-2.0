import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Code2,
  TrendingUp,
  Plus,
  Zap,
  ArrowUpRight,
  Calendar,
  Bell,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage({ user, onNavigate }) {
  const studentName = user?.name || 'Admin Student';
  const studentRole = user?.program || 'BCA AI-ML (2026 Batch)';

  const stats = [
    {
      title: 'ATS Readiness Score',
      value: '94/100',
      status: 'Top 5% Cohort',
      icon: Award,
      change: '+6 pts this week',
      isGold: true,
    },
    {
      title: 'Matched Opportunities',
      value: '18 Roles',
      status: 'Campus & Direct',
      icon: Briefcase,
      change: '4 new drives added',
    },
    {
      title: 'Verified Skills',
      value: '12 / 15',
      status: '3 Gaps Identified',
      icon: Code2,
      change: 'Python, ML, React',
    },
    {
      title: 'Active Applications',
      value: '4 In Progress',
      status: '1 Interview Ready',
      icon: TrendingUp,
      change: 'Infosys, Wipro, TechCorp',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'Shortlisted for Infosys Associate AI Engineer',
      timestamp: 'Today, 11:30 AM',
      type: 'shortlist',
      icon: Award,
      badge: 'Interview Scheduled',
    },
    {
      id: 2,
      title: 'Updated "Full-Stack AI Engineer Resume v2.4"',
      timestamp: 'Yesterday, 4:15 PM',
      type: 'resume',
      icon: Clock,
      badge: 'ATS Score: 94%',
    },
    {
      id: 3,
      title: 'Wipro Coding Assessment window opened',
      timestamp: 'Nov 25, 2:00 PM',
      type: 'assessment',
      icon: Calendar,
      badge: 'Due Dec 12',
    },
  ];

  const recruitmentUpdates = [
    {
      company: 'Infosys Campus Shortlist',
      date: 'Nov 30',
      detail: 'Direct Resume Ingestion completed. Technical round commences.',
      active: true,
    },
    {
      company: 'Mock Technical Interview Panel',
      date: 'Dec 05',
      detail: 'College Placement Cell panel evaluation for registered final-year students.',
      active: false,
    },
    {
      company: 'Wipro Assessment Window',
      date: 'Dec 12',
      detail: 'Online coding round on algorithms, SQL, and system problem-solving.',
      active: false,
    },
  ];

  return (
    <div className="space-y-8">
      {/* ── Welcome Banner & Quick Actions ── */}
      <div className="relative rounded-2xl bg-gradient-to-r from-[#121212] via-[#161616] to-[#121212] border border-[#292929] p-6 sm:p-8 overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-full bg-[#E5C34B]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#E5C34B]/30 text-[#E5C34B] text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C34B] animate-pulse" />
              <span>CAMPUS PLACEMENT SEASON 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Inter',sans-serif]">
              Welcome back,{' '}
              <span className="font-serif-heading italic font-normal gold-text-gradient">
                {studentName}.
              </span>
            </h1>
            <p className="text-sm text-[#A1A1A1] mt-1.5 max-w-2xl leading-relaxed">
              Your ATS diagnostic profile is currently ranked in the <strong className="text-white">top 5%</strong> of your cohort. 4 new recruitment drives match your technical competencies today.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate && onNavigate('/resume')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D9B43F] via-[#E5C158] to-[#C49E2D] hover:from-[#F0D77A] hover:to-[#D9B43F] text-black font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md shadow-[#D9B43F]/20 hover:shadow-[#D9B43F]/30 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <Plus className="w-4 h-4 text-black stroke-[3]" />
              <span>New Resume</span>
            </button>
            <button
              onClick={() => onNavigate && onNavigate('/jobs')}
              className="inline-flex items-center gap-2 bg-[#181818] hover:bg-[#202020] text-white hover:text-[#E5C34B] border border-[#292929] hover:border-[#E5C34B]/40 text-xs font-semibold px-4 py-3 rounded-xl transition duration-200 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-[#E5C34B]" />
              <span>View Matched Jobs</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── ATS Readiness & 4 Metric Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              className="p-5 rounded-2xl bg-[#121212] border border-[#292929] hover:border-[#E5C34B]/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-medium text-[#A1A1A1] uppercase tracking-wider">
                    {stat.title}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#E5C34B] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-[#E5C34B] mt-1">
                  {stat.status}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#292929] text-[11px] text-[#A1A1A1] flex items-center justify-between">
                <span>{stat.change}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E5C34B]" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Two Column Split: Recent Activity & Recruitment Updates ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Recent Activity & Milestones (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#E5C34B] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Recent Activity & Notifications</h2>
                  <p className="text-xs text-[#A1A1A1]">Your live placement and portfolio progress timeline</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#E5C34B]">Live Feed</span>
            </div>

            <div className="space-y-3.5">
              {recentActivities.map((act) => {
                const Icon = act.icon;
                return (
                  <div
                    key={act.id}
                    className="p-4 rounded-xl bg-[#0B0B0B] border border-[#292929] hover:border-[#E5C34B]/30 transition-all flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#E5C34B] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                          {act.title}
                        </h4>
                        <span className="text-[11px] text-[#A1A1A1] mt-1 block">
                          {act.timestamp}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-[#181818] border border-[#E5C34B]/30 text-[#E5C34B] shrink-0">
                      {act.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-[#292929] flex items-center justify-between text-xs">
              <span className="text-[#A1A1A1]">Automated ATS diagnostics active</span>
              <button
                onClick={() => onNavigate && onNavigate('/resume')}
                className="text-[#E5C34B] hover:text-[#F0D77A] font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Manage Resumes</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Shortcuts to other sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              onClick={() => onNavigate && onNavigate('/resume')}
              className="p-4 rounded-2xl bg-[#121212] border border-[#292929] hover:border-[#E5C34B]/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white group-hover:text-[#E5C34B] transition-colors">
                  Resume Builder →
                </span>
                <span className="text-[10px] font-mono text-[#E5C34B] px-1.5 py-0.5 rounded bg-[#181818] border border-[#292929]">
                  v2.4 Ready
                </span>
              </div>
              <p className="text-xs text-[#A1A1A1]">
                Customize tailored ATS-optimized resumes for upcoming recruitment drives.
              </p>
            </div>

            <div
              onClick={() => onNavigate && onNavigate('/companies')}
              className="p-4 rounded-2xl bg-[#121212] border border-[#292929] hover:border-[#E5C34B]/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white group-hover:text-[#E5C34B] transition-colors">
                  Campus Companies →
                </span>
                <span className="text-[10px] font-mono text-[#E5C34B] px-1.5 py-0.5 rounded bg-[#181818] border border-[#292929]">
                  6 Visiting
                </span>
              </div>
              <p className="text-xs text-[#A1A1A1]">
                Explore recruiters, hiring criteria, and tech stacks visiting Kundapura campus.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Recruitment Updates & Placement Cell Calendar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#292929] mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#E5C34B]" />
                <h3 className="text-sm font-bold text-white">Placement Calendar & Drives</h3>
              </div>
              <span className="text-[10px] font-mono text-[#E5C34B]">SEASON 2026</span>
            </div>

            <div className="space-y-3.5">
              {recruitmentUpdates.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0B0B0B] border border-[#292929] flex items-start gap-3"
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${
                      item.active ? 'bg-[#E5C34B] animate-pulse' : 'bg-neutral-500'
                    }`}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-white">{item.company}</h4>
                      <span className="text-[10px] font-mono text-[#E5C34B] bg-[#181818] px-1.5 py-0.5 rounded border border-[#292929]">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A1A1A1] mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#292929]">
              <button
                onClick={() => onNavigate && onNavigate('/jobs')}
                className="w-full py-2.5 rounded-xl bg-[#181818] hover:bg-[#202020] text-xs font-semibold text-white hover:text-[#E5C34B] border border-[#292929] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View All Placement Openings</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E5C34B]" />
              </button>
            </div>
          </div>

          {/* Institutional Compliance Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#121212] to-[#181818] border border-[#E5C34B]/30 text-xs text-[#A1A1A1]">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#E5C34B]" />
              <span className="font-bold text-white">Dr. B. B. Hegde Placement Cell</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Dr. B. B. Hegde First Grade College, Kundapura. Verified candidates on Bimba AI 2.0 receive priority interview scheduling during on-campus recruitment drives.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
