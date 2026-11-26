import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ onReplayIntro, onNavigateToLogin, user, onNavigateToDashboard }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthNavigation = (e) => {
    if (e) e.preventDefault();
    if (user && onNavigateToDashboard) {
      onNavigateToDashboard();
    } else if (onNavigateToLogin) {
      onNavigateToLogin();
    } else {
      window.location.hash = user ? '#dashboard' : '#login';
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#292929] shadow-lg shadow-black/50'
          : 'bg-[#080808]/90 backdrop-blur-sm border-b border-[#292929]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1C1C1C] to-[#121212] border border-[#D9B43F]/40 flex items-center justify-center text-[#D9B43F] shadow-sm group-hover:border-[#D9B43F] transition-all duration-300">
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
              <span className="text-[10px] text-[#A1A1A1] font-medium tracking-tight -mt-0.5 hidden sm:inline">
                Reflect Your Best Self.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7 text-sm font-medium text-[#A1A1A1]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#D9B43F] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#D9B43F] after:transition-all after:duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pl-4 border-l border-[#292929]">
              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="text-xs text-[#A1A1A1] hover:text-[#D9B43F] transition px-2.5 py-1 rounded-md hover:bg-[#121212] border border-transparent hover:border-[#292929]"
                  title="Replay Loading Animation"
                >
                  Replay Intro
                </button>
              )}
              {user ? (
                <a
                  href="#dashboard"
                  onClick={handleAuthNavigation}
                  className="inline-flex items-center gap-2 bg-[#121212] hover:bg-[#181818] border border-[#D9B43F]/40 text-[#D9B43F] text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D9B43F] animate-pulse" />
                  <span>Dashboard ({user.name?.split(' ')[0] || 'Portal'})</span>
                </a>
              ) : (
                <>
                  <a
                    href="#login"
                    onClick={handleAuthNavigation}
                    className="text-sm font-medium text-[#FFFFFF] hover:text-[#D9B43F] px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Login
                  </a>
                  <a
                    href="#login"
                    onClick={handleAuthNavigation}
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D9B43F] via-[#E5C158] to-[#C49E2D] hover:from-[#F0D77A] hover:to-[#D9B43F] text-black text-sm font-bold px-5 py-2.2 rounded-xl shadow-md shadow-[#D9B43F]/15 hover:shadow-lg hover:shadow-[#D9B43F]/25 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href={user ? "#dashboard" : "#login"}
              onClick={handleAuthNavigation}
              className="bg-gradient-to-r from-[#D9B43F] via-[#E5C158] to-[#C49E2D] text-black text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer"
            >
              {user ? 'Dashboard →' : 'Get Started →'}
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A1A1A1] hover:text-white rounded-lg hover:bg-[#121212] border border-transparent hover:border-[#292929] transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#292929] bg-[#080808] px-4 pt-3 pb-6 space-y-4">
          <ul className="flex flex-col space-y-2 text-base font-medium text-[#A1A1A1]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-[#121212] hover:text-[#D9B43F] transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={user ? "#dashboard" : "#login"}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleAuthNavigation(e);
                }}
                className="block px-3 py-2 text-[#D9B43F] font-bold"
              >
                {user ? 'Go to Dashboard →' : 'Login / Register →'}
              </a>
            </li>
          </ul>

          {onReplayIntro && (
            <div className="pt-2 border-t border-[#292929]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="w-full text-left px-3 py-2 text-xs text-[#A1A1A1] hover:text-[#D9B43F] transition"
              >
                Replay Intro Animation
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
