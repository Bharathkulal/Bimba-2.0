import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ onReplayIntro }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-[#EDE8E0]'
          : 'bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#EDE8E0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#D97745] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-white/90" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#1C1917] font-['Inter',sans-serif]">
                  BIMBA
                </span>
                <span className="text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-[#FDF0E8] text-[#D97745] border border-[#F0C9A8]">
                  AI
                </span>
              </div>
              <span className="text-[10px] text-[#9C8B7E] font-medium tracking-tight -mt-0.5 hidden sm:inline">
                Reflect Your Best Self.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium text-[#57534E]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#D97745] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D97745] after:transition-all after:duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pl-4 border-l border-[#E5DDD5]">
              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="text-xs text-[#9C8B7E] hover:text-[#57534E] transition px-2 py-1 rounded hover:bg-[#F5EFE8]"
                  title="Replay Loading Animation"
                >
                  Replay Intro
                </button>
              )}
              <a
                href="#login"
                className="text-sm font-semibold text-[#57534E] hover:text-[#D97745] px-3 py-2 rounded-lg transition"
              >
                Login
              </a>
              <a
                href="#get-started"
                className="inline-flex items-center gap-1.5 bg-[#D97745] hover:bg-[#C4683A] text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-sm shadow-[#D97745]/20 hover:shadow-[#D97745]/30 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href="#get-started"
              className="bg-[#D97745] text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
            >
              Get Started
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#57534E] hover:text-[#1C1917] rounded-lg hover:bg-[#F5EFE8] transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EDE8E0] bg-white px-4 pt-2 pb-5 space-y-3">
          <ul className="flex flex-col space-y-2 text-base font-medium text-[#57534E]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-[#FDF0E8] hover:text-[#D97745] transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-[#57534E] hover:bg-[#F5EFE8] transition"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
