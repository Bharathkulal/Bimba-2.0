import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Search,
  MapPin,
  ExternalLink,
  Users,
  Calendar,
  Layers,
  CheckCircle2,
  X,
  ArrowUpRight,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';

export default function CompaniesPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      id: 'infosys',
      name: 'Infosys Limited',
      tier: 'Tier-1 Core Recruiter',
      domain: 'Artificial Intelligence & Enterprise Cloud',
      location: 'Bangalore, India',
      roles: ['Associate AI Engineer', 'Systems Engineer Specialist'],
      compensation: '₹5.5 - 7.2 LPA',
      campusDate: 'Nov 30, 2026',
      eligibility: 'BCA / B.Sc CS, 65% aggregate, zero active backlogs',
      techStack: ['Python', 'FastAPI', 'PyTorch', 'React', 'Docker', 'SQL'],
      overview:
        'Infosys is a global leader in next-generation digital services and consulting. Visiting Dr. B. B. Hegde First Grade College, Kundapura for direct technical candidate ingestion for their generative AI and cloud automation division.',
      rounds: [
        'Resume ATS Diagnostic Screening (Automated via Bimba AI)',
        'Online Technical Coding Assessment (Data Structures, Python, SQL)',
        'Technical Panel Interview (System Design, Project Walkthrough)',
        'HR & Cultural Alignment Discussion',
      ],
      hiringHistory: '18 students recruited from 2024 and 2025 cohorts.',
    },
    {
      id: 'wipro',
      name: 'Wipro Technologies',
      tier: 'Tier-1 Core Recruiter',
      domain: 'Cloud Services & Digital Infrastructure',
      location: 'Mangalore / Bangalore, India',
      roles: ['Cloud & AI Solutions Intern', 'Project Engineer'],
      compensation: '₹25,000 / month (Internship) → ₹6.0 LPA',
      campusDate: 'Dec 12, 2026',
      eligibility: 'BCA / B.Sc with strong proficiency in microservices and APIs',
      techStack: ['Python', 'Docker', 'REST APIs', 'PostgreSQL', 'Git'],
      overview:
        'Wipro is an international technology services company with major operations in coastal Karnataka and Bangalore. Partnered with Dr. B. B. Hegde Placement Cell for pre-placement internship intake.',
      rounds: [
        'Online Assessment Window (Aptitude & Coding)',
        'Virtual Technical Interview',
        'Internship Offer & Project Onboarding',
      ],
      hiringHistory: '12 students recruited across the past two seasons.',
    },
    {
      id: 'cognitive-labs',
      name: 'Cognitive Labs AI',
      tier: 'Specialist AI Partner',
      domain: 'Healthcare & Enterprise NLP Agents',
      location: 'Remote Placement',
      roles: ['Junior Machine Learning Developer', 'AI Workflow Intern'],
      compensation: '₹6.0 - 8.5 LPA',
      campusDate: 'Rolling Assessment',
      eligibility: 'Demonstrated portfolio in PyTorch, NLP, or Vector databases',
      techStack: ['Python', 'NLP', 'Vector DB', 'PyTorch', 'FastAPI'],
      overview:
        'Fast-growing cognitive AI venture building automated reasoning models and clinical NLP pipelines. Exclusive placement partner offering flexible hybrid and remote placement tracks.',
      rounds: [
        'Bimba AI Resume & Project Evaluation',
        'Take-home technical problem statement',
        'Founder Technical Deep-Dive',
      ],
      hiringHistory: 'New direct campus partnership established for 2026.',
    },
    {
      id: 'techcorp',
      name: 'TechCorp Global Solutions',
      tier: 'Corporate Recruiter',
      domain: 'Enterprise Automation & Business Intelligence',
      location: 'Kundapura Campus Visit',
      roles: ['Data Analyst', 'Full-Stack Associate'],
      compensation: '₹4.8 - 6.0 LPA',
      campusDate: 'Nov 28, 2026',
      eligibility: 'Open to all BCA and Computer Science final-year candidates',
      techStack: ['SQL', 'Python', 'PowerBI', 'React', 'REST APIs'],
      overview:
        'Global technology consulting provider conducting direct on-campus interviews at Dr. B. B. Hegde College. Focuses on enterprise analytics and cloud integration.',
      rounds: [
        'Written Technical & Aptitude Exam',
        'On-Campus Technical Panel',
        'Direct Same-Day Letter of Intent (LOI)',
      ],
      hiringHistory: 'Long-standing placement partner since 2022.',
    },
    {
      id: 'tcs',
      name: 'Tata Consultancy Services (TCS)',
      tier: 'Tier-1 National Recruiter',
      domain: 'Digital Transformation & Software Engineering',
      location: 'Pan India / Mangalore Delivery Center',
      roles: ['TCS Digital Engineer', 'TCS Ninja Candidate'],
      compensation: '₹3.6 - 7.5 LPA',
      campusDate: 'Dec 20, 2026',
      eligibility: 'Graduating 2026 cohort, TCS NQT qualification',
      techStack: ['Java', 'Python', 'Cloud Services', 'SQL', 'Algorithms'],
      overview:
        'India’s largest IT and software enterprise. Visiting Kundapura region colleges through national placement linkage with certified merit-based hiring tiers.',
      rounds: [
        'TCS National Qualifier Test (NQT)',
        'Technical Interview Round',
        'Managerial and HR Review',
      ],
      hiringHistory: 'Over 30 alumni working across global delivery centers.',
    },
  ];

  const filteredCompanies = companies.filter(
    (co) =>
      co.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      co.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      co.roles.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase())) ||
      co.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* ── Page Header ── */}
      <div className="relative rounded-2xl bg-gradient-to-r from-[#121212] via-[#161616] to-[#121212] border border-[#292929] p-6 sm:p-8 overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-full bg-[#E5C34B]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#E5C34B]/30 text-[#E5C34B] text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#E5C34B]" />
              <span>CORPORATE PLACEMENT ECOSYSTEM</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Inter',sans-serif]">
              Company Directory & Profiles
            </h1>
            <p className="text-sm text-[#A1A1A1] mt-1.5 max-w-2xl leading-relaxed">
              Explore visiting corporate employers, technical hiring benchmarks, past recruitment track records, and upcoming campus interview dates for Dr. B. B. Hegde College.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-[#181818] border border-[#E5C34B]/30 text-[#E5C34B]">
              {companies.length} Visiting Partners
            </span>
          </div>
        </div>
      </div>

      {/* ── Search Bar ── */}
      <div className="bg-[#121212] rounded-2xl border border-[#292929] p-4 sm:p-5 shadow-sm">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#888888]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search company directory by name, technology (Python, Docker), or domain..."
            className="w-full bg-[#0B0B0B] border border-[#292929] focus:border-[#E5C34B] text-white text-sm rounded-xl pl-10 pr-4 py-3 outline-none transition-all placeholder-[#555555]"
          />
        </div>
      </div>

      {/* ── Company Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCompanies.map((co) => (
          <motion.div
            key={co.id}
            layout
            className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-[#292929] hover:border-[#E5C34B]/40 transition-all shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white hover:text-[#E5C34B] transition-colors">
                    {co.name}
                  </h3>
                  <span className="text-xs text-[#A1A1A1] mt-0.5 block">{co.domain}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#292315] border border-[#E5C34B]/30 text-[#E5C34B] shrink-0">
                  {co.tier}
                </span>
              </div>

              <div className="space-y-1 text-xs text-[#A1A1A1] pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E5C34B]" />
                  <span>{co.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E5C34B]" />
                  <span>Campus Visit / Drive: <strong className="text-slate-300">{co.campusDate}</strong></span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 block mb-1.5">Target Roles:</span>
                <div className="flex flex-wrap gap-1.5">
                  {co.roles.map((r) => (
                    <span
                      key={r}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#0B0B0B] border border-[#292929] text-white font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 block mb-1.5">Expected Tech Stack:</span>
                <div className="flex flex-wrap gap-1">
                  {co.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#181818] text-[#E5C34B] border border-[#292929]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#292929] flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">{co.compensation}</span>
              <button
                onClick={() => setSelectedCompany(co)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181818] hover:bg-[#222222] text-[#E5C34B] text-xs font-bold border border-[#292929] hover:border-[#E5C34B]/40 transition-colors cursor-pointer"
              >
                <span>Company Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Modal: Company Profile Deep-Dive ── */}
      <AnimatePresence>
        {selectedCompany && (
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
                    <h3 className="text-lg font-bold text-white">{selectedCompany.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#292315] text-[#E5C34B] border border-[#E5C34B]/30">
                      {selectedCompany.tier}
                    </span>
                  </div>
                  <p className="text-xs text-[#A1A1A1] mt-1">{selectedCompany.domain} • {selectedCompany.location}</p>
                </div>
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="p-1.5 rounded-lg text-[#888888] hover:text-white bg-[#181818] border border-[#292929] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-1.5">Overview</h4>
                <p className="text-xs text-[#A1A1A1] leading-relaxed">{selectedCompany.overview}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B0B0B] border border-[#292929] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#888888]">Drive Timing:</span>
                  <span className="text-white font-semibold">{selectedCompany.campusDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888888]">Compensation Range:</span>
                  <span className="text-[#E5C34B] font-bold font-mono">{selectedCompany.compensation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888888]">Academic Eligibility:</span>
                  <span className="text-slate-300 max-w-[260px] text-right">{selectedCompany.eligibility}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-2">Recruitment Selection Stages</h4>
                <ul className="space-y-1.5 text-xs text-[#A1A1A1]">
                  {selectedCompany.rounds.map((round, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#E5C34B] font-mono font-bold">{idx + 1}.</span>
                      <span>{round}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-[#181818] border border-[#292929] flex items-center gap-2 text-xs text-[#A1A1A1]">
                <ShieldCheck className="w-4 h-4 text-[#E5C34B] shrink-0" />
                <span>Dr. B. B. Hegde Placement Record: {selectedCompany.hiringHistory}</span>
              </div>

              <div className="pt-4 border-t border-[#292929] flex justify-between items-center">
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="px-4 py-2 rounded-xl bg-[#181818] text-xs font-semibold text-[#A1A1A1] hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedCompany(null);
                    if (onNavigate) onNavigate('/jobs');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D9B43F] to-[#C49E2D] text-black font-bold text-xs uppercase"
                >
                  View Openings
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
