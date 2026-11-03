import React from 'react';
import collegeLogo from '../assets/college-logo.jpg';

/**
 * College Identity Header
 * Displays Dr. B. B. Hegde First Grade College, Kundapura identity banner
 * with logo, official typography, and blue-to-orange gradient dividing line.
 */
export default function CollegeHeader() {
  return (
    <header className="w-full bg-white border-b border-slate-100 py-2.5 sm:py-3.5 px-4 sm:px-6 lg:px-8 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-5 md:gap-6">
        {/* College Logo */}
        <div className="shrink-0">
          <img
            src={collegeLogo}
            alt="Dr. B. B. Hegde First Grade College Logo"
            className="w-13 h-13 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain rounded-full shadow-xs"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* College Titles & Gradient Divider */}
        <div className="flex flex-col justify-center min-w-0">
          <h1 className="text-[#0c1e3d] font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight">
            Dr. B. B. Hegde First Grade College, Kundapura
          </h1>

          {/* Thin blue-to-orange gradient divider */}
          <div className="h-[2px] sm:h-[2.5px] w-full max-w-2xl bg-gradient-to-r from-blue-700 via-blue-500 to-orange-500 my-1 sm:my-1.5 rounded-full" />

          <p className="text-slate-500 font-bold text-[10px] sm:text-xs md:text-sm tracking-wider uppercase">
            A UNIT OF COONDAPUR EDUCATION SOCIETY (R)
          </p>
        </div>
      </div>
    </header>
  );
}

