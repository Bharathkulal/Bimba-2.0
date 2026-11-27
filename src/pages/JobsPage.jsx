import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Search,
  Filter,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Building2,
  MapPin,
  Calendar,
  X,
  FileCheck,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';

export default function JobsPage({ user }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all' | 'recommended' | 'internship' | 'applied'
  const [selectedJob, setSelectedJob] = useState(null);

  const jobsList = [
    {
      id: 1,
      company: 'Infosys',
      role: 'Associate AI Engineer',
      location: 'Campus Drive • Bangalore',
      type: 'Full-Time',
      stipend: '₹5.5 - 7.2 LPA',
      matchScore: 96,
      skills: ['Python', 'FastAPI', 'React', 'PyTorch'],
      deadline: 'Nov 30, 2026',
      status: 'Recommended',
      applied: true,
      applicationStatus: 'Shortlisted for Technical Panel',
      description:
        'Infosys is hiring Associate AI Engineers from the Dr. B. B. Hegde 2026 graduating batch. You will work on production LLM agents, automated enterprise pipelines, and intelligent API integrations.',
      responsibilities: [
        'Design and deploy scalable machine learning services using Python & FastAPI.',
        'Integrate modern vector databases and neural retrieval models.',
        'Collaborate with cloud architects to containerize AI microservices with Docker.',
      ],
      qualifications: 'BCA / B.Sc (Computer Science / AI) with minimum 65% aggregate.',
    },
    {
      id: 2,
      company: 'Wipro Technologies',
      role: 'Cloud & AI Solutions Intern',
      location: 'Hybrid • Mangalore / Bangalore',
      type: '6-Month Internship',
      stipend: '₹25,000 / month',
      matchScore: 92,
      skills: ['Python', 'Docker', 'REST APIs', 'SQL'],
      deadline: 'Dec 04, 2026',
      status: 'New Drive',
      applied: true,
      applicationStatus: 'Assessment Window Opens Dec 12',
      description:
        '6-month pre-placement internship with direct conversion based on performance. Gain hands-on exposure to cloud infrastructure, container orchestration, and client service automation.',
      responsibilities: [
        'Implement automated tests for microservice backends.',
        'Optimize relational and NoSQL database query latency.',
        'Assist senior DevOps engineers in cloud delivery pipelines.',
      ],
      qualifications: 'Final-year student with active demonstrated projects on GitHub.',
    },
    {
      id: 3,
      company: 'Cognitive Labs',
      role: 'Junior Machine Learning Developer',
      location: 'Remote Placement',
      type: 'Full-Time',
      stipend: '₹6.0 - 8.5 LPA',
      matchScore: 90,
      skills: ['Machine Learning', 'NLP', 'Vector DB', 'FastAPI'],
      deadline: 'Dec 10, 2026',
      status: 'Verified Partner',
      applied: false,
      applicationStatus: null,
      description:
        'Cognitive Labs is an AI-first venture building deep cognitive automation for healthcare and enterprise logistics. Join an agile technical squad solving NLP and tabular predictive tasks.',
      responsibilities: [
        'Build feature engineering pipelines and evaluate model metrics against ground truth.',
        'Fine-tune state-of-the-art foundation models for domain-specific workflows.',
        'Write clean, modular, and unit-tested Python packages.',
      ],
      qualifications: 'Strong algorithmic reasoning and project portfolio in PyTorch or TensorFlow.',
    },
    {
      id: 4,
      company: 'TechCorp Global',
      role: 'Data Analyst & Automation Associate',
      location: 'Campus Visit • Kundapura',
      type: 'Full-Time',
      stipend: '₹4.8 - 6.0 LPA',
      matchScore: 88,
      skills: ['SQL', 'Python', 'PowerBI', 'Data Cleaning'],
      deadline: 'Dec 15, 2026',
      status: 'Campus Drive',
      applied: false,
      applicationStatus: null,
      description:
        'TechCorp Global visits Dr. B. B. Hegde First Grade College for on-campus written test and technical interviews. Candidates will assist international analytics clients.',
      responsibilities: [
        'Extract, transform, and load datasets from multiple transactional SQL stores.',
        'Build interactive business intelligence dashboards.',
        'Identify data anomalies and automate monthly reporting cadences.',
      ],
      qualifications: 'Graduating batch 2026 with strong analytical and communication skills.',
    },
  ];

  const filteredJobs = jobsList.filter((job) => {
    const matchesSearch =
      job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (filterType === 'recommended') return job.matchScore >= 90;
    if (filterType === 'internship') return job.type.includes('Internship');
    if (filterType === 'applied') return job.applied;
    return true;
  });

  const appliedJobs = jobsList.filter((j) => j.applied);

  return (
    <div className="space-y-8">
      {/* ── Page Header ── */}
      <div className="relative rounded-2xl bg-gradient-to-r from-[#121212] via-[#161616] to-[#121212] border border-[#292929] p-6 sm:p-8 overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-full bg-[#E5C34B]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#E5C34B]/30 text-[#E5C34B] text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#E5C34B]" />
              <span>CAMPUS & DIRECT RECRUITMENT</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Inter',sans-serif]">
              Job Search & Placement Matching
            </h1>
            <p className="text-sm text-[#A1A1A1] mt-1.5 max-w-2xl leading-relaxed">
              Explore corporate recruitment openings algorithmically matched to your technical skills, resume ATS score, and Dr. B. B. Hegde Placement credentials.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[#181818] border border-[#E5C34B]/30 text-[#E5C34B]">
              {appliedJobs.length} Active Applications
            </span>
          </div>
        </div>
      </div>

      {/* ── Search Bar & Filter Tabs ── */}
      <div className="bg-[#121212] rounded-2xl border border-[#292929] p-4 sm:p-5 shadow-sm space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#888888]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by role, company (Infosys, Wipro...), or skill (Python, React)..."
            className="w-full bg-[#0B0B0B] border border-[#292929] focus:border-[#E5C34B] text-white text-sm rounded-xl pl-10 pr-4 py-3 outline-none transition-all placeholder-[#555555]"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          {[
            { id: 'all', label: 'All Openings' },
            { id: 'recommended', label: 'Top Recommended (90%+ Match)' },
            { id: 'internship', label: 'Internships' },
            { id: 'applied', label: `My Applications (${appliedJobs.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                filterType === tab.id
                  ? 'bg-[#292315] text-[#E5C34B] border border-[#E5C34B]/40'
                  : 'bg-[#181818] text-[#888888] hover:text-white border border-[#292929]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Job Listings Grid ── */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            layout
            className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-[#292929] hover:border-[#E5C34B]/40 transition-all shadow-sm"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-base sm:text-lg font-bold text-white hover:text-[#E5C34B] transition-colors">
                    {job.role}
                  </h3>
                  <span className="text-xs font-semibold text-[#E5C34B] px-2.5 py-0.5 rounded-md bg-[#181818] border border-[#292929]">
                    @{job.company}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#292929] text-[#A1A1A1]">
                    {job.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#A1A1A1]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E5C34B]" />
                    {job.location}
                  </span>
                  <span>•</span>
                  <span className="text-slate-300 font-semibold">{job.stipend}</span>
                  <span>•</span>
                  <span>Deadline: <strong className="text-slate-300">{job.deadline}</strong></span>
                </div>

                <p className="text-xs text-[#A1A1A1] max-w-2xl leading-relaxed">
                  {job.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#0B0B0B] text-slate-300 border border-[#292929]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Application Status if already applied */}
                {job.applied && (
                  <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-lg bg-[#181818] border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Application Status: {job.applicationStatus}</span>
                  </div>
                )}
              </div>

              {/* Match Score & Action CTA */}
              <div className="flex lg:flex-col items-center lg:items-end justify-between gap-3 shrink-0">
                <div className="text-left lg:text-right">
                  <span className="text-xs font-mono text-[#A1A1A1] block">Profile Compatibility</span>
                  <span className="text-sm font-extrabold text-[#E5C34B] bg-[#292315] border border-[#E5C34B]/30 px-3 py-1 rounded-md inline-block mt-0.5">
                    {job.matchScore}% Match
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-3.5 py-2 rounded-xl bg-[#181818] hover:bg-[#202020] text-xs font-semibold text-white hover:text-[#E5C34B] border border-[#292929] transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => {
                      alert(`Submitting placement application for ${job.role} at ${job.company} with default resume!`);
                    }}
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D9B43F] to-[#C49E2D] hover:from-[#F0D77A] hover:to-[#D9B43F] text-black text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs active:scale-98"
                  >
                    <span>{job.applied ? 'Re-Apply' : 'Apply Now'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {filteredJobs.length === 0 && (
          <div className="p-12 text-center bg-[#121212] border border-[#292929] rounded-2xl space-y-2">
            <p className="text-sm font-semibold text-white">No jobs match your search criteria</p>
            <p className="text-xs text-[#888888]">Try modifying your search query or reset the filter tabs above.</p>
          </div>
        )}
      </div>

      {/* ── Modal: Job Descriptions & Requirements ── */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl bg-[#121212] border border-[#292929] rounded-2xl p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto space-y-5"
            >
              <div className="flex items-start justify-between pb-4 border-b border-[#292929]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{selectedJob.role}</h3>
                    <span className="text-xs font-mono text-[#E5C34B]">@{selectedJob.company}</span>
                  </div>
                  <p className="text-xs text-[#A1A1A1] mt-1">{selectedJob.location} • {selectedJob.stipend}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-1.5 rounded-lg text-[#888888] hover:text-white bg-[#181818] border border-[#292929] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-2">Role Overview</h4>
                <p className="text-xs text-[#A1A1A1] leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-2">Key Responsibilities</h4>
                <ul className="space-y-1.5 text-xs text-[#A1A1A1]">
                  {selectedJob.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#E5C34B] mt-0.5">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-1.5">Eligibility & Qualifications</h4>
                <p className="text-xs text-slate-300 bg-[#0B0B0B] p-3 rounded-xl border border-[#292929]">
                  {selectedJob.qualifications}
                </p>
              </div>

              <div className="pt-4 border-t border-[#292929] flex justify-between items-center">
                <span className="text-xs font-mono text-[#E5C34B]">Placement Season 2026</span>
                <button
                  onClick={() => {
                    alert(`Application submitted for ${selectedJob.role}! Placement cell notified.`);
                    setSelectedJob(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D9B43F] to-[#C49E2D] text-black font-bold text-xs uppercase"
                >
                  Apply with Bimba Resume
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
