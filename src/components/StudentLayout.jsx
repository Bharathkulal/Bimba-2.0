import React from 'react';
import StudentNavbar from './StudentNavbar';
import MobileBottomNav from './MobileBottomNav';

export default function StudentLayout({
  children,
  user,
  activeRoute = '/home',
  onNavigate,
  onLogout,
}) {
  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#E5C34B] selection:text-black relative">
      {/* ── Top Navigation Bar (Desktop Nav + Mobile Context) ── */}
      <StudentNavbar
        user={user}
        activeRoute={activeRoute}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      {/* ── Page Content Container with Safe Bottom Clearance for Mobile Nav ── */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 w-full pb-28 md:pb-12">
        {children}
      </main>

      {/* ── Subtle Desktop Footer ── */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-[#666666] font-mono border-t border-[#1C1C1C] hidden md:block">
        © {new Date().getFullYear()} BIMBA AI 2.0. Dr. B. B. Hegde First Grade College, Kundapura.
      </footer>

      {/* ── Persistent Mobile Bottom Navigation Bar (Fixed below 768px) ── */}
      <MobileBottomNav
        activeRoute={activeRoute}
        onNavigate={onNavigate}
        currentUser={user}
      />
    </div>
  );
}
