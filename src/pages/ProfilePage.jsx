import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserRound,
  Mail,
  GraduationCap,
  Award,
  Code2,
  Settings,
  Bell,
  Shield,
  LogOut,
  CheckCircle2,
  Briefcase,
  Sliders,
  Save,
  Plus,
} from 'lucide-react';

export default function ProfilePage({ user, onLogout }) {
  const studentName = user?.name || 'Admin Student';
  const studentEmail = user?.email || 'admin@bimba.ai';
  const studentProgram = user?.program || 'BCA AI-ML (2026 Batch)';
  const collegeName = user?.college || 'Dr. B. B. Hegde First Grade College, Kundapura';

  const [skills, setSkills] = useState([
    { name: 'Python & FastAPI Architecture', progress: 96, status: 'Verified' },
    { name: 'Machine Learning & NLP Pipelines', progress: 90, status: 'Verified' },
    { name: 'React 19 & Modern UI State', progress: 88, status: 'Verified' },
    { name: 'Docker & Container Deployment', progress: 75, status: 'In Progress' },
    { name: 'SQL & Database Optimization', progress: 92, status: 'Verified' },
  ]);

  const [notifications, setNotifications] = useState({
    campusDrives: true,
    atsAlerts: true,
    interviewInvites: true,
  });

  const [preferences, setPreferences] = useState({
    targetRole: 'Associate AI Engineer / Cloud Developer',
    workMode: 'Hybrid (Bangalore / Mangalore)',
    placementOptIn: true,
  });

  const [savedFeedback, setSavedFeedback] = useState(false);

  const handleSaveSettings = () => {
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* ── Page Header: User Identity Card ── */}
      <div className="relative rounded-2xl bg-gradient-to-r from-[#121212] via-[#161616] to-[#121212] border border-[#292929] p-6 sm:p-8 overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-full bg-[#E5C34B]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#D9B43F] to-[#F0D77A] text-black font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-[#D9B43F]/20">
              {studentName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  {studentName}
                </h1>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#292315] border border-[#E5C34B]/40 text-[#E5C34B]">
                  VERIFIED CANDIDATE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#E5C34B] font-mono mt-0.5">{studentProgram}</p>
              <p className="text-xs text-[#A1A1A1] mt-1 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#E5C34B]" />
                <span>{collegeName}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onLogout}
              className="px-4 py-2.5 rounded-xl bg-[#1C1212] hover:bg-[#2A1515] text-red-400 border border-red-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Two-Column Grid: Skills Matrix & Account Settings/Preferences ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Verified Skills Matrix (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#E5C34B] flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Technical Skills Benchmark</h2>
                  <p className="text-xs text-[#A1A1A1]">Verified against campus recruitment diagnostic standards</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#E5C34B]">
                {skills.length} Tracked
              </span>
            </div>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-[11px] font-mono font-bold text-[#E5C34B]">
                      {skill.progress}% • {skill.status}
                    </span>
                  </div>
                  <div className="w-full bg-[#0B0B0B] h-2 rounded-full overflow-hidden border border-[#292929]">
                    <div
                      className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-[#D9B43F] to-[#E5C34B]"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#292929] flex items-center justify-between text-xs text-[#A1A1A1]">
              <span>Need to audit additional frameworks?</span>
              <button
                onClick={() => alert('Skill Audit: Select new technology from syllabus')}
                className="text-[#E5C34B] hover:underline font-semibold"
              >
                + Add Skill Competency
              </button>
            </div>
          </div>

          {/* Institutional Compliance */}
          <div className="p-4 rounded-2xl bg-[#0B0B0B] border border-[#292929] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs text-[#A1A1A1] leading-relaxed">
              <strong className="text-white block mb-0.5">Campus Placement Verification: Eligible</strong>
              Your profile has been verified by the Dr. B. B. Hegde Placement Department. All submitted resumes automatically sync with visiting recruiter panels.
            </div>
          </div>
        </div>

        {/* Right Column: Account Settings & Placement Preferences (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Account Settings */}
          <div className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#E5C34B] flex items-center justify-center">
                  <Settings className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Account & Credentials</h2>
                  <p className="text-xs text-[#A1A1A1]">Manage credentials and institutional authentication</p>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-[#0B0B0B] border border-[#292929] flex justify-between items-center">
                <div>
                  <span className="text-[#888888] block text-[10px] font-mono uppercase">Student Username</span>
                  <span className="text-white font-semibold">admin</span>
                </div>
                <span className="text-[10px] font-mono text-[#E5C34B] bg-[#181818] px-2 py-0.5 rounded border border-[#292929]">
                  Demo Verified
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B0B0B] border border-[#292929] flex justify-between items-center">
                <div>
                  <span className="text-[#888888] block text-[10px] font-mono uppercase">Primary Campus Email</span>
                  <span className="text-white font-semibold">{studentEmail}</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">Linked</span>
              </div>

              {/* Notification Toggles */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-bold text-white block">Notification Preferences</span>
                
                <label className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0B0B] border border-[#292929] cursor-pointer">
                  <span className="text-[#A1A1A1]">Campus drive announcements</span>
                  <input
                    type="checkbox"
                    checked={notifications.campusDrives}
                    onChange={(e) =>
                      setNotifications({ ...notifications, campusDrives: e.target.checked })
                    }
                    className="accent-[#E5C34B] w-4 h-4"
                  />
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0B0B] border border-[#292929] cursor-pointer">
                  <span className="text-[#A1A1A1]">ATS diagnostic score changes</span>
                  <input
                    type="checkbox"
                    checked={notifications.atsAlerts}
                    onChange={(e) =>
                      setNotifications({ ...notifications, atsAlerts: e.target.checked })
                    }
                    className="accent-[#E5C34B] w-4 h-4"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Placement Preferences */}
          <div className="bg-[#121212] rounded-2xl border border-[#292929] p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#292929] text-[#E5C34B] flex items-center justify-center">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Career Preferences</h2>
                  <p className="text-xs text-[#A1A1A1]">Specify candidate filters for recruiter matching</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[#888888] font-mono text-[10px] uppercase mb-1">
                  Target Role Track
                </label>
                <input
                  type="text"
                  value={preferences.targetRole}
                  onChange={(e) => setPreferences({ ...preferences, targetRole: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#292929] focus:border-[#E5C34B] text-white rounded-xl px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="block text-[#888888] font-mono text-[10px] uppercase mb-1">
                  Preferred Location & Mode
                </label>
                <input
                  type="text"
                  value={preferences.workMode}
                  onChange={(e) => setPreferences({ ...preferences, workMode: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#292929] focus:border-[#E5C34B] text-white rounded-xl px-3 py-2 outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleSaveSettings}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D9B43F] to-[#C49E2D] text-black font-bold text-xs uppercase cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Preferences</span>
                </button>

                {savedFeedback && (
                  <span className="text-xs text-emerald-400 font-mono">
                    ✓ Saved successfully
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
