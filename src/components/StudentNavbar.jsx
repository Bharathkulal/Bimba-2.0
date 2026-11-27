import React from 'react';
import { Sparkles, LogOut, GraduationCap } from 'lucide-react';
import collegeLogo from '../assets/college-logo.jpg';

export default function StudentNavbar({
  user,
  activeRoute = '/home',
  onNavigate,
  onLogout,
}) {
  const studentName = user?.name || 'Admin Student';
  const studentRole = user?.program || 'BCA AI-ML (2026 Batch)';

  const navLinks = [
    { label: 'Home', route: '/home' },
    { label: 'Resume', route: '/resume' },
    { label: 'Jobs', route: '/jobs' },
    { label: 'Companies', route: '/companies' },
    { label: 'Profile', route: '/profile' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#080808]/95 backdrop-blur-md border-b border-[#292929] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20">
        {/* Brand & Context */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate && onNavigate('/home');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1C1C1C] to-[#121212] border border-[#E5C34B]/40 flex items-center justify-center text-[#E5C34B] shadow-sm">
              <Sparkles className="w-5 h-5 text-[#E5C34B]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-['Inter',sans-serif]">
                  BIMBA
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-[#121212] text-[#E5C34B] border border-[#E5C34B]/30">
                  AI
                </span>
              </div>
              <span className="text-[10px] text-[#A1A1A1] font-mono tracking-wide hidden sm:inline">
                STUDENT PORTAL
              </span>
            </div>
          </a>

          <div className="hidden md:block h-6 w-[1px] bg-[#292929]" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-[#A1A1A1]">
            {navLinks.map((tab) => {
              const isActive = activeRoute === tab.route;
              return (
                <button
                  key={tab.route}
                  onClick={() => onNavigate && onNavigate(tab.route)}
                  className={`capitalize px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#181818] text-[#E5C34B] border border-[#292929]'
                      : 'hover:text-white hover:bg-[#121212]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
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
          <button
            onClick={() => onNavigate && onNavigate('/profile')}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#121212] border border-[#292929] hover:border-[#E5C34B]/40 transition-colors cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#D9B43F] to-[#F0D77A] text-black font-extrabold text-xs flex items-center justify-center">
              {studentName.charAt(0)}
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-white leading-tight">
                {studentName}
              </span>
              <span className="text-[10px] text-[#E5C34B] font-mono">
                {studentRole}
              </span>
            </div>
          </button>

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
  );
}
