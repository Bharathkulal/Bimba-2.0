import React from 'react';
import { Sparkles, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';
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
    <footer className="bg-[#1C1917] text-[#9C8B7E] border-t border-[#2C2521] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2C2521]">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#D97745] flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight font-['Inter',sans-serif]">
                BIMBA <span className="text-[#D97745]">AI</span>
              </span>
            </div>

            <p className="text-[#D97745] font-semibold text-sm mb-3 font-['Inter',sans-serif]">
              Reflect Your Best Self.
            </p>

            <p className="text-[#78716C] text-sm max-w-sm leading-relaxed mb-6 font-['Inter',sans-serif]">
              AI-Powered Resume Building, Career Development & Placement Automation Platform created for students and academic placement cells.
            </p>

            {/* College Affiliation Chip */}
            <a
              href="https://www.bbhegdecollege.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#241F1C] border border-[#2C2521] max-w-sm hover:border-[#D97745]/40 hover:bg-[#2C2521] transition-all duration-200 group"
              title="Visit Dr. B. B. Hegde College official website"
            >
              <img
                src={collegeLogo}
                alt="Dr. B. B. Hegde College"
                className="w-10 h-10 object-contain rounded-full shrink-0 group-hover:ring-2 group-hover:ring-[#D97745]/40 transition-all duration-200"
              />
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate font-['Inter',sans-serif] group-hover:text-[#D97745] transition-colors duration-200">
                  Dr. B. B. Hegde First Grade College
                </p>
                <p className="text-[10px] text-[#78716C] uppercase tracking-wider font-['Inter',sans-serif]">
                  Kundapura, Udupi District
                </p>
              </div>
            </a>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Inter',sans-serif]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#78716C] font-['Inter',sans-serif]">
              <li>
                <a href="#home" className="hover:text-[#D97745] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#D97745] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#D97745] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D97745] transition-colors">
                  About BIMBA AI
                </a>
              </li>
              {onReplayIntro && (
                <li>
                  <button
                    onClick={onReplayIntro}
                    className="hover:text-[#D97745] transition-colors text-left"
                  >
                    Watch Intro Animation
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Core Features Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Inter',sans-serif]">
              AI Tooling
            </h4>
            <ul className="space-y-2.5 text-sm text-[#78716C] font-['Inter',sans-serif]">
              <li>
                <span className="hover:text-[#9C8B7E] transition-colors">
                  AI Resume Builder
                </span>
              </li>
              <li>
                <span className="hover:text-[#9C8B7E] transition-colors">
                  ATS Score Checker
                </span>
              </li>
              <li>
                <span className="hover:text-[#9C8B7E] transition-colors">
                  AI Resume Improver
                </span>
              </li>
              <li>
                <span className="hover:text-[#9C8B7E] transition-colors">
                  Smart Job Matching
                </span>
              </li>
              <li>
                <span className="hover:text-[#9C8B7E] transition-colors">
                  Skill Gap Analysis
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Developer Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-['Inter',sans-serif]">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-[#78716C] font-['Inter',sans-serif]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D97745] shrink-0 mt-0.5" />
                <span className="text-xs">
                  Kundapura, Karnataka - 576201
                </span>
              </li>
              <li className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-[#D97745] shrink-0" />
                <a
                  href="https://github.com/Bharathkulal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs hover:text-white transition flex items-center gap-1"
                >
                  <span>github.com/Bharathkulal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2">
                <div className="p-2.5 rounded-lg bg-[#241F1C] border border-[#2C2521] text-[11px] text-[#78716C]">
                  Developed by <strong className="text-white">Bharath Kulal</strong> for students & aspiring professionals.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57534E] font-['Inter',sans-serif]">
          <p>
            © {new Date().getFullYear()} BIMBA AI. Dr. B. B. Hegde First Grade College, Kundapura. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-[#57534E]">
            A Unit of Coondapur Education Society (R)
          </p>
        </div>
      </div>
    </footer>
  );
}
