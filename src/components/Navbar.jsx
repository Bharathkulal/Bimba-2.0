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
      className={`sticky top-0 z-30 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-emerald-100" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
                  BIMBA
                </span>
                <span className="text-xs font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  AI
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-tight -mt-0.5 hidden sm:inline">
                Reflect Your Best Self.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="text-xs text-slate-400 hover:text-slate-700 transition px-2 py-1 rounded hover:bg-slate-50"
                  title="Replay Loading Animation"
                >
                  Replay Intro
                </button>
              )}
              <a
                href="#login"
                className="text-sm font-semibold text-slate-700 hover:text-emerald-600 px-3 py-2 rounded-lg transition"
              >
                Login
              </a>
              <a
                href="#get-started"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4.5 py-2.2 rounded-xl shadow-xs shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-200 active:scale-98"
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
              className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
            >
              Get Started
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5 space-y-3">
          <ul className="flex flex-col space-y-2 text-base font-medium text-slate-700">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 transition"
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

