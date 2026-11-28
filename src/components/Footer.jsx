import React from 'react';
import { Sparkles, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import collegeLogo from '../assets/college-logo.jpg';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function Footer({ onReplayIntro }) {
  return (
    <footer className="bg-[#090909] text-[#A1A1A1] border-t border-[#292929] pt-16 pb-12 relative">
      {/* Subtle top gold divider hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#292929]">
          {/* Brand & Mission Column (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#151515] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight font-['Inter',sans-serif]">
                BIMBA <span className="text-[#D4AF37]">AI</span>
              </span>
            </div>

            <p className="text-[#D4AF37] font-semibold text-sm mb-3 font-serif-heading italic tracking-wide">
              Reflect Your Best Self.
            </p>

            <p className="text-[#A1A1A1] text-sm max-w-sm leading-relaxed mb-6 font-light">
              AI-Powered Career Architecture, Resume Engineering & Placement Automation Platform created for students and academic institutions.
            </p>

            {/* College Identity Badge */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#111111] border border-[#292929] max-w-sm">
              <img
                src={collegeLogo}
                alt="Dr. B. B. Hegde College"
                className="w-10 h-10 object-contain rounded-full shrink-0 bg-white p-0.5"
              />
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">
                  Dr. B. B. Hegde First Grade College
                </p>
                <p className="text-[10px] text-[#A1A1A1] uppercase tracking-wider font-mono">
                  Kundapura, Udupi District
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              {onReplayIntro && (
                <li>
                  <button
                    onClick={onReplayIntro}
                    className="hover:text-[#D4AF37] transition-colors text-left"
                  >
                    Watch Intro Animation
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Policies & Institutional Terms Column */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
              LEGAL & ETHICS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-xs text-[#A1A1A1]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Student Data Protection</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Developer Column */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
              CONTACT
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-xs text-[#A1A1A1]">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Kundapura, Karnataka - 576201</span>
              </li>
              <li className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="https://github.com/Bharathkulal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#A1A1A1] hover:text-white transition flex items-center gap-1 font-mono"
                >
                  <span>github.com/Bharathkulal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2">
                <div className="p-3 rounded-lg bg-[#111111] border border-[#292929] text-[11px] text-[#A1A1A1] leading-relaxed">
                  Developed by <strong className="text-white">Bharath Kulal</strong> for students & aspiring professionals.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Gold Separator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1A1]">
          <p>
            © BIMBA AI. Dr. B. B. Hegde First Grade College, Kundapura.
          </p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            A Unit of Coondapur Education Society (R)
          </p>
        </div>
      </div>
    </footer>
  );
}
