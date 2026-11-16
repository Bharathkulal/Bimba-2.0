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
      className={`sticky top-0 z-30 transition-all duration-300 ${isScrolled
          ? 'bg-[#090909]/95 backdrop-blur-md border-b border-[#292929] shadow-lg shadow-black/40'
          : 'bg-[#090909]/90 backdrop-blur-sm border-b border-[#292929]'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-sm group-hover:border-[#D4AF37] transition-all duration-300">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-['Inter',sans-serif]">
                  BIMBA
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-[#151515] text-[#D4AF37] border border-[#D4AF37]/30">
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
                    className="hover:text-[#D4AF37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#D4AF37] after:transition-all after:duration-200"
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
                  className="text-xs text-[#A1A1A1] hover:text-[#D4AF37] transition px-2.5 py-1 rounded-md hover:bg-[#151515] border border-transparent hover:border-[#292929]"
                  title="Replay Loading Animation"
                >
                  Replay Intro
                </button>
              )}
              <a
                href="#login"
                className="text-sm font-medium text-[#FFFFFF] hover:text-[#D4AF37] px-3 py-2 rounded-lg transition-colors"
              >
                Login
              </a>
              <a
                href="#get-started"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B88E18] hover:from-[#E5C158] hover:to-[#C99E22] text-black text-sm font-bold px-5 py-2.2 rounded-xl shadow-md shadow-[#D4AF37]/15 hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-200 active:scale-[0.98]"
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
              className="bg-gradient-to-r from-[#D4AF37] to-[#B88E18] text-black text-xs font-bold px-3 py-1.5 rounded-lg"
            >
              Get Started →
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A1A1A1] hover:text-white rounded-lg hover:bg-[#151515] border border-transparent hover:border-[#292929] transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#292929] bg-[#090909] px-4 pt-3 pb-6 space-y-4">
          <ul className="flex flex-col space-y-2 text-base font-medium text-[#A1A1A1]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-[#151515] hover:text-[#D4AF37] transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-white hover:bg-[#151515] hover:text-[#D4AF37] transition"
              >
                Login
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
                className="w-full text-left px-3 py-2 text-xs text-[#A1A1A1] hover:text-[#D4AF37] transition"
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
