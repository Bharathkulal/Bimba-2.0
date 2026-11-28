import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  FileText,
  Briefcase,
  TrendingUp,
  Award,
  CheckCircle2,
  Clock,
  Plus,
  Download,
  ExternalLink,
  ChevronRight,
  LogOut,
  Bell,
  Search,
  Filter,
  ArrowUpRight,
  Zap,
  Target,
  GraduationCap,
  Calendar,
  Layers,
  Code2,
  Building2,
  User,
  X,
} from 'lucide-react';
import collegeLogo from '../assets/college-logo.jpg';

export default function HomeDashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileModal, setShowProfileModal] = useState(false);

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

  const recentResumes = [
    {
      id: 1,
      title: 'Full-Stack AI Engineer Resume',
      version: 'v2.4 (Default Placement)',
      atsScore: 94,
      updatedAt: 'Updated today',
      status: 'ATS Optimized',
    },
    {
      id: 2,
      title: 'Data & Machine Learning Specialist',
      version: 'v1.8',
      atsScore: 89,
      updatedAt: 'Updated 3 days ago',
      status: 'Ready',
    },
  ];

  const matchedJobs = [
    {
      id: 1,
      company: 'Infosys',
      role: 'Associate AI Engineer',
      location: 'Campus Drive • Bangalore',
      type: 'Full-Time Placement',
      matchScore: 96,
      skills: ['Python', 'FastAPI', 'React', 'PyTorch'],
      deadline: 'Apply before Nov 30',
      status: 'Recommended',
    },
    {
      id: 2,
      company: 'Wipro Technologies',
      role: 'Cloud & AI Solutions Intern',
      location: 'Hybrid • Mangalore / Bangalore',
      type: '6-Month Internship',
      matchScore: 92,
      skills: ['Python', 'Docker', 'REST APIs', 'SQL'],
      deadline: 'Apply before Dec 04',
      status: 'New Drive',
    },
    {
      id: 3,
      company: 'Cognitive Labs',
      role: 'Junior Machine Learning Developer',
      location: 'Remote Placement',
      type: 'Full-Time',
      matchScore: 90,
      skills: ['Machine Learning', 'NLP', 'Vector DB', 'FastAPI'],
      deadline: 'Apply before Dec 10',
      status: 'Verified Partner',
    },
  ];

  const skillGaps = [
    { name: 'Python & FastAPI Architecture', progress: 96, status: 'Verified' },
    { name: 'Machine Learning & NLP Pipelines', progress: 90, status: 'Verified' },
    { name: 'React 19 & Modern UI State', progress: 85, status: 'Verified' },
    { name: 'Docker & Container Deployment', progress: 68, status: 'In Progress' },
    { name: 'System Design & Microservices', progress: 55, status: 'Recommended' },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#D9B43F] selection:text-black">
      {/* ── Top Navigation Bar ── */}
      <header className="sticky top-0 z-30 bg-[#080808]/95 backdrop-blur-md border-b border-[#292929] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20">
          {/* Brand & Context */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1C1C1C] to-[#121212] border border-[#D9B43F]/40 flex items-center justify-center text-[#D9B43F] shadow-sm">
                <Sparkles className="w-5 h-5 text-[#D9B43F]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-white font-['Inter',sans-serif]">
                    BIMBA
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-[#121212] text-[#D9B43F] border border-[#D9B43F]/30">
                    AI
                  </span>
                </div>
                <span className="text-[10px] text-[#A1A1A1] font-mono tracking-wide hidden sm:inline">
                  STUDENT PORTAL
                </span>
              </div>
            </a>

            <div className="hidden md:block h-6 w-[1px] bg-[#292929]" />

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-[#A1A1A1]">
              {['overview', 'resumes', 'jobs', 'skill audit'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#181818] text-[#D9B43F] border border-[#292929]'
                      : 'hover:text-white hover:bg-[#121212]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* College Identity Badge (Compact) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121212] border border-[#292929]">
              <img
                src={collegeLogo}
                alt="Dr. B. B. Hegde College"
                className="w-5 h-5 object-contain rounded-full bg-white p-0.5"
              />
              <span className="text-[11px] font-mono text-[#A1A1A1] truncate max-w-[170px]">
                Dr. B. B. Hegde Placement
              </span>
            </div>

            {/* User Profile Chip */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#121212] border border-[#292929]">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#D9B43F] to-[#F0D77A] text-black font-extrabold text-xs flex items-center justify-center">
                {studentName.charAt(0)}
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-white leading-tight">
                  {studentName}
                </span>
                <span className="text-[10px] text-[#D9B43F] font-mono">
                  {studentRole}
                </span>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="p-2 sm:px-3 sm:py-2 text-xs font-semibold text-[#A1A1A1] hover:text-red-400 hover:bg-[#1C1212] rounded-xl border border-transparent hover:border-red-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Sign out of Bimba AI"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Dashboard Body ── */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 w-full space-y-8 pb-28 md:pb-10">
        {/* Welcome Banner */}
        <div id="overview-section" className="relative rounded-2xl bg-gradient-to-r from-[#121212] via-[#151515] to-[#121212] border border-[#292929] p-6 sm:p-8 overflow-hidden scroll-mt-24">
          <div className="absolute top-0 right-0 w-80 h-full bg-[#D9B43F]/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#D9B43F]/30 text-[#D9B43F] text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9B43F] animate-pulse" />
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

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => alert('Opening AI Resume Builder...')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D9B43F] to-[#C49E2D] hover:from-[#F0D77A] hover:to-[#D9B43F] text-black font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md shadow-[#D9B43F]/20 hover:shadow-[#D9B43F]/30 transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <Plus className="w-4 h-4 text-black stroke-[3]" />
                <span>New Resume</span>
              </button>
              <button
                onClick={() => alert('Launching ATS Scanner...')}
                className="inline-flex items-center gap-2 bg-[#181818] hover:bg-[#202020] text-white hover:text-[#D9B43F] border border-[#292929] hover:border-[#D9B43F]/40 text-xs font-semibold px-4 py-3 rounded-xl transition duration-200 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-[#D9B43F]" />
                <span>Scan ATS Score</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── 4 Core Metric Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                className="p-5 rounded-2xl bg-[#121212] border border-[#292929] hover:border-[#D9B43F]/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-medium text-[#A1A1A1] uppercase tracking-wider">
                      {stat.title}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#D9B43F] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#D9B43F] mt-1">
                    {stat.status}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#292929] text-[11px] text-[#A1A1A1] flex items-center justify-between">
                  <span>{stat.change}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D9B43F]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Split Grid: Resumes & Jobs (Left) vs Skills & Roadmaps (Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Resumes & Matched Placements (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Section 1: Active Resumes */}
            <div id="resume-section" className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm scroll-mt-24">
              <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#D9B43F] flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Your Resume Portfolio</h2>
                    <p className="text-xs text-[#A1A1A1]">Engineered for applicant tracking algorithms</p>
                  </div>
                </div>
                <button
                  onClick={() => alert('Opening Resume Builder...')}
                  className="text-xs font-mono font-semibold text-[#D9B43F] hover:text-[#F0D77A] flex items-center gap-1 cursor-pointer"
                >
                  <span>+ Create Variant</span>
                </button>
              </div>

              <div className="space-y-4">
                {recentResumes.map((resume) => (
                  <div
                    key={resume.id}
                    className="p-4 rounded-xl bg-[#0B0B0B] border border-[#292929] hover:border-[#D9B43F]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white hover:text-[#F0D77A] transition-colors">
                          {resume.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#292929] text-[#A1A1A1]">
                          {resume.version}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-[#A1A1A1]">
                        <span className="flex items-center gap-1 text-[#D9B43F] font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D9B43F]" />
                          ATS Score: {resume.atsScore}%
                        </span>
                        <span>•</span>
                        <span>{resume.updatedAt}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert(`Editing ${resume.title}...`)}
                        className="px-3 py-1.5 rounded-lg bg-[#181818] hover:bg-[#202020] border border-[#292929] text-xs font-medium text-white hover:text-[#D9B43F] transition-colors cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => alert(`Downloading PDF for ${resume.title}...`)}
                        className="p-2 rounded-lg bg-[#181818] hover:bg-[#202020] border border-[#292929] text-xs font-medium text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
                        title="Download ATS-Friendly PDF"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Recommended Placements */}
            <div id="jobs-section" className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm scroll-mt-24">
              <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#D9B43F] flex items-center justify-center">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Matched Placement Drives</h2>
                    <p className="text-xs text-[#A1A1A1]">Direct campus opportunities aligned to your profile</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#D9B43F]">
                  18 Matches Active
                </span>
              </div>

              <div className="space-y-4">
                {matchedJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-4 sm:p-5 rounded-xl bg-[#0B0B0B] border border-[#292929] hover:border-[#D9B43F]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-bold text-white">
                          {job.role}
                        </h3>
                        <span className="text-xs font-semibold text-[#D9B43F]">
                          @{job.company}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#181818] border border-[#292929] text-[#A1A1A1]">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-xs text-[#A1A1A1]">
                        {job.location} • <span className="text-slate-400">{job.deadline}</span>
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#181818] text-slate-300 border border-[#292929]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2.5 shrink-0">
                      <div className="text-right">
                        <span className="text-xs font-extrabold text-[#D9B43F] bg-[#181818] border border-[#D9B43F]/30 px-2.5 py-1 rounded-md">
                          {job.matchScore}% Match
                        </span>
                      </div>
                      <button
                        onClick={() => alert(`Application initiated for ${job.role} at ${job.company}!`)}
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D9B43F] to-[#C49E2D] hover:from-[#F0D77A] hover:to-[#D9B43F] text-black text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all cursor-pointer shadow-xs active:scale-98"
                      >
                        <span>Apply</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Campus Hiring Partners / Companies */}
            <div id="companies-section" className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm scroll-mt-24">
              <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#D9B43F] flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Campus Hiring Partners</h2>
                    <p className="text-xs text-[#A1A1A1]">Corporate employers visiting Dr. B. B. Hegde Placement Cell</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#D9B43F]">
                  Season 2026
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { name: 'Infosys', roles: 'Associate AI Engineer • Systems Engineer', status: 'Drives Open', badge: 'Tier-1 Partner', date: 'Shortlist Nov 30' },
                  { name: 'Wipro Technologies', roles: 'Cloud & AI Intern • Project Engineer', status: 'Assessment Ready', badge: 'Tier-1 Partner', date: 'Coding Dec 12' },
                  { name: 'Cognitive Labs', roles: 'Junior Machine Learning Developer', status: 'Shortlisting', badge: 'AI Specialist', date: 'Rolling Drive' },
                  { name: 'TechCorp Global', roles: 'Data Analyst • Full-Stack Developer', status: 'Campus Visit Nov 28', badge: 'Corporate', date: 'Direct Interview' },
                ].map((co) => (
                  <div
                    key={co.name}
                    className="p-3.5 rounded-xl bg-[#0B0B0B] border border-[#292929] hover:border-[#D9B43F]/40 transition-all flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{co.name}</h4>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181818] border border-[#292929] text-[#D9B43F]">
                          {co.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#A1A1A1] mt-1">{co.roles}</p>
                      <div className="flex items-center gap-2 mt-1.5 text-[10px] font-mono">
                        <span className="text-emerald-400">● {co.status}</span>
                        <span className="text-neutral-500">•</span>
                        <span className="text-neutral-400">{co.date}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => alert(`Opening ${co.name} campus drive details...`)}
                      className="px-2.5 py-1 text-xs rounded-lg bg-[#181818] hover:bg-[#222222] text-[#D9B43F] border border-[#292929] shrink-0 cursor-pointer"
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Skill Audit & Placement Calendar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Skill Audit Card */}
            <div className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#292929] mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#D9B43F]" />
                  <h3 className="text-sm font-bold text-white">Skill Gap Analysis</h3>
                </div>
                <span className="text-[10px] font-mono text-[#D9B43F]">
                  TARGET: AI ENGINEER
                </span>
              </div>

              <div className="space-y-3.5">
                {skillGaps.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span className="text-slate-300 text-[11px] truncate max-w-[190px]">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold ${
                          skill.progress >= 80 ? 'text-[#D9B43F]' : 'text-[#A1A1A1]'
                        }`}
                      >
                        {skill.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-[#0B0B0B] h-1.5 rounded-full overflow-hidden border border-[#292929]">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${skill.progress}%`,
                          backgroundColor: skill.progress >= 80 ? '#D9B43F' : '#666666',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] text-xs text-[#A1A1A1] leading-relaxed">
                <span className="text-[#D9B43F] font-bold">Recommended Action:</span> Complete a containerized Docker deployment project to reach 100% role match.
              </div>
            </div>

            {/* Upcoming Deadlines / Calendar */}
            <div className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#292929] mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D9B43F]" />
                  <h3 className="text-sm font-bold text-white">Placement Calendar</h3>
                </div>
                <span className="text-[10px] font-mono text-[#A1A1A1]">NOV-DEC</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#D9B43F] mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Infosys Campus Shortlist</h4>
                    <p className="text-[11px] text-[#A1A1A1]">Nov 30 • Direct Resume Ingestion</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Mock Technical Panel</h4>
                    <p className="text-[11px] text-[#A1A1A1]">Dec 05 • College Placement Cell</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Wipro Assessment Window</h4>
                    <p className="text-[11px] text-[#A1A1A1]">Dec 12 • Online Coding Round</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Notice Card */}
            <div id="profile-section" className="p-4 rounded-2xl bg-gradient-to-br from-[#121212] to-[#181818] border border-[#D9B43F]/30 text-xs text-[#A1A1A1] scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-[#D9B43F]" />
                <span className="font-bold text-white">Placement Cell Verified</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Dr. B. B. Hegde First Grade College, Kundapura. All shortlisted resumes are directly accessible by visiting corporate recruiters.
              </p>
              <div className="mt-3 pt-3 border-t border-[#292929] flex items-center justify-between text-[11px]">
                <span className="text-white font-mono">{studentName}</span>
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="text-[#D9B43F] hover:underline font-mono"
                >
                  View Details →
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Mobile Profile Modal / Sheet */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-xs">
          <div className="w-full sm:max-w-md bg-[#121212] border border-[#292929] rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl relative animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D9B43F] to-[#F0D77A] text-black font-extrabold text-base flex items-center justify-center">
                  {studentName.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{studentName}</h3>
                  <p className="text-xs text-[#D9B43F] font-mono">{studentRole}</p>
                </div>
              </div>
              <button
                onClick={() => setShowProfileModal(false)}
                className="p-1.5 rounded-lg text-[#A1A1A1] hover:text-white bg-[#181818] border border-[#292929] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 mb-6 text-xs text-[#A1A1A1]">
              <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] flex justify-between items-center">
                <span>ATS Readiness Rank</span>
                <span className="text-[#D9B43F] font-bold font-mono">94 / 100 (Top 5%)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] flex justify-between items-center">
                <span>Campus Institution</span>
                <span className="text-white truncate max-w-[200px]">Dr. B. B. Hegde College</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0B0B0B] border border-[#292929] flex justify-between items-center">
                <span>Account Email</span>
                <span className="text-white">{user?.email || 'admin@bimba.ai'}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setShowProfileModal(false);
                if (onLogout) onLogout();
              }}
              className="w-full py-3 rounded-xl bg-[#1C1212] hover:bg-[#2A1515] text-red-400 border border-red-500/30 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out of Bimba AI</span>
            </button>
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-[#666666] font-mono border-t border-[#1C1C1C]">
        © BIMBA AI 2.0. Dr. B. B. Hegde First Grade College, Kundapura.
      </footer>
    </div>
  );
}
