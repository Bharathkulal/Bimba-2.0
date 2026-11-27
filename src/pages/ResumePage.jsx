import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Plus,
  Download,
  Edit3,
  Copy,
  Trash2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Layers,
  ArrowRight,
  X,
  Check,
  FileCheck,
} from 'lucide-react';

export default function ResumePage({ user }) {
  const [resumes, setResumes] = useState([
    {
      id: 1,
      title: 'Full-Stack AI Engineer Resume',
      version: 'v2.4',
      isDefault: true,
      atsScore: 94,
      updatedAt: 'Updated today',
      status: 'ATS Optimized',
      targetRole: 'Associate AI Engineer (Infosys, TechCorp)',
      sections: ['Work Experience', 'Core AI Projects', 'Technical Skills', 'Academic Credentials'],
    },
    {
      id: 2,
      title: 'Data & Machine Learning Specialist',
      version: 'v1.8',
      isDefault: false,
      atsScore: 89,
      updatedAt: 'Updated 3 days ago',
      status: 'Ready',
      targetRole: 'Junior ML Developer (Cognitive Labs)',
      sections: ['ML Pipeline Projects', 'Python/PyTorch', 'Data Structures', 'College Honors'],
    },
    {
      id: 3,
      title: 'Cloud & Systems Intern Resume',
      version: 'v1.2',
      isDefault: false,
      atsScore: 86,
      updatedAt: 'Updated 1 week ago',
      status: 'Ready',
      targetRole: 'Cloud Solutions Intern (Wipro)',
      sections: ['Docker & Cloud Deployment', 'FastAPI Services', 'Database Systems', 'Coursework'],
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('technical-ai');
  const [activePreviewResume, setActivePreviewResume] = useState(null);

  const templates = [
    {
      id: 'technical-ai',
      name: 'AI & Systems Specialist',
      type: 'Single-Column ATS Standard',
      bestFor: 'Machine Learning, Backend & AI Roles',
      atsMatch: '98% Parser Compatibility',
    },
    {
      id: 'cloud-fullstack',
      name: 'Full-Stack Modern Web',
      type: 'Modular Professional Layout',
      bestFor: 'React, Node, Cloud & API Development',
      atsMatch: '95% Parser Compatibility',
    },
    {
      id: 'data-analytics',
      name: 'Data Science & Analytics',
      type: 'Metric & Impact Structured',
      bestFor: 'Data Analytics, SQL, Python Benchmarking',
      atsMatch: '96% Parser Compatibility',
    },
  ];

  const handleCreateResume = (e) => {
    e.preventDefault();
    if (!newResumeTitle.trim()) return;

    const newEntry = {
      id: Date.now(),
      title: newResumeTitle.trim(),
      version: 'v1.0',
      isDefault: false,
      atsScore: 92,
      updatedAt: 'Just now',
      status: 'Draft',
      targetRole: 'General Placement Drive',
      sections: ['Personal Info', 'Projects', 'Skills', 'Education'],
    };

    setResumes([newEntry, ...resumes]);
    setNewResumeTitle('');
    setShowCreateModal(false);
  };

  const handleSetDefault = (id) => {
    setResumes(
      resumes.map((r) => ({
        ...r,
        isDefault: r.id === id,
      }))
    );
  };

  const handleDuplicate = (resume) => {
    const copy = {
      ...resume,
      id: Date.now(),
      title: `${resume.title} (Copy)`,
      version: 'v1.0',
      isDefault: false,
      updatedAt: 'Just now',
    };
    setResumes([copy, ...resumes]);
  };

  const handleDelete = (id) => {
    if (resumes.length <= 1) {
      alert('You must maintain at least one resume profile for placement ingestion.');
      return;
    }
    setResumes(resumes.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* ── Page Header & Quick Builder Trigger ── */}
      <div className="relative rounded-2xl bg-gradient-to-r from-[#121212] via-[#161616] to-[#121212] border border-[#292929] p-6 sm:p-8 overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-full bg-[#E5C34B]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#E5C34B]/30 text-[#E5C34B] text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C34B]" />
              <span>AI RESUME SUITE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Inter',sans-serif]">
              Resume Builder & Management
            </h1>
            <p className="text-sm text-[#A1A1A1] mt-1.5 max-w-2xl leading-relaxed">
              Create, customize, and optimize recruiter-approved resumes designed specifically to pass modern corporate ATS algorithms and Dr. B. B. Hegde Placement Cell guidelines.
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D9B43F] via-[#E5C158] to-[#C49E2D] hover:from-[#F0D77A] hover:to-[#D9B43F] text-black font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md shadow-[#D9B43F]/20 hover:shadow-[#D9B43F]/30 transition-all duration-200 cursor-pointer active:scale-[0.98] shrink-0"
          >
            <Plus className="w-4 h-4 text-black stroke-[3]" />
            <span>Create New Resume</span>
          </button>
        </div>
      </div>

      {/* ── Section 1: Saved Resumes Portfolio ── */}
      <div className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#292929] mb-5 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#E5C34B] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Saved Resumes Portfolio</h2>
              <p className="text-xs text-[#A1A1A1]">Manage multiple tailored variants for different campus recruitment drives</p>
            </div>
          </div>
          <span className="text-xs font-mono text-[#E5C34B]">
            {resumes.length} Active Profiles
          </span>
        </div>

        <div className="space-y-4">
          {resumes.map((resume) => (
            <motion.div
              key={resume.id}
              layout
              className={`p-4 sm:p-5 rounded-xl bg-[#0B0B0B] border transition-all ${
                resume.isDefault
                  ? 'border-[#E5C34B]/50 shadow-md shadow-[#E5C34B]/5'
                  : 'border-[#292929] hover:border-[#E5C34B]/30'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {resume.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#292929] text-[#A1A1A1]">
                      {resume.version}
                    </span>
                    {resume.isDefault && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#292315] border border-[#E5C34B]/40 text-[#E5C34B]">
                        DEFAULT PLACEMENT
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#A1A1A1]">
                    Target: <strong className="text-slate-300">{resume.targetRole}</strong>
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#A1A1A1]">
                    <span className="flex items-center gap-1 text-[#E5C34B] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C34B]" />
                      ATS Diagnostic Score: {resume.atsScore}%
                    </span>
                    <span>•</span>
                    <span>{resume.updatedAt}</span>
                  </div>
                </div>

                {/* Resume Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActivePreviewResume(resume)}
                    className="px-3.5 py-2 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#292929] text-xs font-semibold text-white hover:text-[#E5C34B] transition-colors cursor-pointer"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => alert(`Opening AI Editor for "${resume.title}"...`)}
                    className="px-3.5 py-2 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#292929] text-xs font-semibold text-white hover:text-[#E5C34B] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-[#E5C34B]" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => alert(`Downloading ATS-Formatted PDF for "${resume.title}"...`)}
                    className="px-3 py-2 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#292929] text-xs font-medium text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
                    title="Download ATS PDF"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDuplicate(resume)}
                    className="p-2 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#292929] text-xs font-medium text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
                    title="Duplicate Resume"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  {!resume.isDefault && (
                    <button
                      onClick={() => handleSetDefault(resume.id)}
                      className="px-2.5 py-2 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#292929] text-[11px] font-mono text-[#A1A1A1] hover:text-[#E5C34B] transition-colors cursor-pointer"
                    >
                      Set Default
                    </button>
                  )}
                  {resumes.length > 1 && (
                    <button
                      onClick={() => handleDelete(resume.id)}
                      className="p-2 rounded-xl bg-[#181818] hover:bg-[#251515] border border-transparent hover:border-red-500/30 text-xs font-medium text-[#888888] hover:text-red-400 transition-colors cursor-pointer"
                      title="Delete Resume"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Section 2: ATS-Optimized Resume Templates ── */}
      <div className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#E5C34B] flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Recruiter-Approved ATS Templates</h2>
              <p className="text-xs text-[#A1A1A1]">Engineered for zero formatting rejections across Workday, Taleo, and Greenhouse</p>
            </div>
          </div>
          <span className="text-xs font-mono text-[#E5C34B]">3 Formats</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              onClick={() => {
                setSelectedTemplate(tpl.id);
                setShowCreateModal(true);
              }}
              className="p-5 rounded-xl bg-[#0B0B0B] border border-[#292929] hover:border-[#E5C34B]/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] text-[#E5C34B] border border-[#E5C34B]/30">
                    {tpl.type}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    {tpl.atsMatch}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#E5C34B] transition-colors">
                  {tpl.name}
                </h3>
                <p className="text-xs text-[#A1A1A1] mt-1.5 leading-relaxed">
                  Best for: {tpl.bestFor}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#222222] flex items-center justify-between text-xs text-[#E5C34B] font-semibold">
                <span>Use This Template</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Modal: Create New Resume ── */}
      <AnimatePresence>
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-lg bg-[#121212] border border-[#292929] rounded-2xl p-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#E5C34B]" />
                  <h3 className="text-base font-bold text-white">Create New Resume Profile</h3>
                </div>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-1 rounded-lg text-[#888888] hover:text-white bg-[#181818] border border-[#292929]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateResume} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-1.5">
                    Resume Profile Title
                  </label>
                  <input
                    type="text"
                    value={newResumeTitle}
                    onChange={(e) => setNewResumeTitle(e.target.value)}
                    placeholder="e.g. Associate AI Engineer Resume v3.0"
                    required
                    className="w-full bg-[#0B0B0B] border border-[#292929] focus:border-[#E5C34B] text-white text-sm rounded-xl px-4 py-3 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-1.5">
                    Select ATS Blueprint Architecture
                  </label>
                  <div className="space-y-2">
                    {templates.map((tpl) => (
                      <div
                        key={tpl.id}
                        onClick={() => setSelectedTemplate(tpl.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          selectedTemplate === tpl.id
                            ? 'bg-[#292315] border-[#E5C34B]'
                            : 'bg-[#0B0B0B] border-[#292929] hover:border-neutral-700'
                        }`}
                      >
                        <div>
                          <h4 className="text-xs font-bold text-white">{tpl.name}</h4>
                          <p className="text-[11px] text-[#A1A1A1]">{tpl.type}</p>
                        </div>
                        {selectedTemplate === tpl.id && (
                          <Check className="w-4 h-4 text-[#E5C34B]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#292929] flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-[#181818] text-xs font-semibold text-[#A1A1A1] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D9B43F] to-[#C49E2D] hover:from-[#F0D77A] hover:to-[#D9B43F] text-black font-bold text-xs uppercase tracking-wider"
                  >
                    Generate Blueprint
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Modal: Resume Preview ── */}
      <AnimatePresence>
        {activePreviewResume && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-[#121212] border border-[#292929] rounded-2xl p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
                <div>
                  <h3 className="text-base font-bold text-white">{activePreviewResume.title}</h3>
                  <p className="text-xs text-[#E5C34B] font-mono">ATS Compatibility: {activePreviewResume.atsScore}%</p>
                </div>
                <button
                  onClick={() => setActivePreviewResume(null)}
                  className="p-1 rounded-lg text-[#888888] hover:text-white bg-[#181818] border border-[#292929]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Rendered Mock Resume Document Preview */}
              <div className="p-6 rounded-xl bg-white text-black font-sans space-y-4 shadow-inner text-xs leading-relaxed">
                <div className="border-b border-black pb-2 text-center">
                  <h2 className="text-base font-extrabold tracking-wide uppercase">{user?.name || 'Admin Student'}</h2>
                  <p className="text-[11px] text-neutral-700">Kundapura, Karnataka • student@college.edu • +91 98765 43210</p>
                  <p className="text-[10px] text-neutral-600 font-mono">github.com/adminstudent • linkedin.com/in/adminstudent</p>
                </div>

                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[11px] border-b border-neutral-300 pb-0.5 mb-1 text-neutral-900">
                    Target Objective
                  </h3>
                  <p className="text-neutral-800">
                    Ambitious student specializing in Artificial Intelligence and Cloud engineering from Dr. B. B. Hegde First Grade College, Kundapura. Demonstrated mastery in Python, Machine Learning workflows, and scalable REST API design.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[11px] border-b border-neutral-300 pb-0.5 mb-1 text-neutral-900">
                    Core Technical Competencies
                  </h3>
                  <p className="text-neutral-800">
                    <strong>Languages & Frameworks:</strong> Python, FastAPI, React 19, PyTorch, SQL, Docker<br />
                    <strong>System & Deployment:</strong> RESTful Architectures, Vector Databases, Git, CI/CD Pipelines
                  </p>
                </div>

                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[11px] border-b border-neutral-300 pb-0.5 mb-1 text-neutral-900">
                    Academic Credentials
                  </h3>
                  <p className="text-neutral-800">
                    <strong>Bachelor of Computer Applications (BCA AI-ML)</strong> — Dr. B. B. Hegde College, Kundapura (CGPA: 8.8 / 10.0, Graduating 2026)
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#292929] flex justify-between items-center">
                <span className="text-xs text-[#A1A1A1]">Verified Dr. B. B. Hegde Placement Format</span>
                <button
                  onClick={() => {
                    alert('PDF exported successfully.');
                    setActivePreviewResume(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D9B43F] to-[#C49E2D] text-black font-bold text-xs uppercase"
                >
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
