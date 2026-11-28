import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  FileText,
  Compass,
  BarChart3,
  Check,
  ShieldCheck,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { authenticateDemo, saveSession, DEMO_CREDENTIALS } from '../config/authConfig';

function GoogleIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.6 3.7 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
      />
      <path
        fill="#FBBC05"
        d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.1s.7 5.4 1.9 7.8l3.7-3c-.2-.7-.4-1.5-.4-2.3z"
      />
      <path
        fill="#34A853"
        d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 17c1.8 3.7 5.6 6.5 10.1 6.5z"
      />
    </svg>
  );
}

export default function LoginPage({ onBackToHome, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFillDemo = () => {
    setUsername(DEMO_CREDENTIALS.username);
    setPassword(DEMO_CREDENTIALS.password);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    const trimmedUser = username.trim();
    const trimmedPass = password.trim();

    if (!trimmedUser || !trimmedPass) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    setIsSubmitting(true);

    try {
      const authResult = await authenticateDemo(trimmedUser, trimmedPass);
      saveSession(authResult, rememberMe);
      if (onLoginSuccess) {
        onLoginSuccess(authResult.user);
      }
    } catch (err) {
      setErrorMessage(err.message || 'Invalid username or password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const featurePillars = [
    {
      title: 'AI Resume Builder',
      description: 'Draft ATS-engineered resumes with smart metric optimization.',
      icon: FileText,
    },
    {
      title: 'Smart Job Matching',
      description: 'Discover high-compatibility roles aligned to your exact skill profile.',
      icon: Compass,
    },
    {
      title: 'Career Intelligence',
      description: 'Uncover skill gaps, track readiness benchmarks, and follow roadmaps.',
      icon: BarChart3,
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col justify-between selection:bg-[#D9B43F] selection:text-black relative overflow-x-hidden">
      {/* Subtle Luxury Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-[#D9B43F]/5 blur-[160px] rounded-full" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[350px] bg-[#D9B43F]/4 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#222222_1px,transparent_1px)] [background-size:28px_28px] opacity-20" />
      </div>

      {/* Top Header Bar: On mobile, ONLY show Logo and Name */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-8 flex items-center justify-between z-20">
        <a
          href="#home"
          onClick={(e) => {
            if (onBackToHome) {
              e.preventDefault();
              onBackToHome();
            }
          }}
          className="flex items-center gap-2.5 sm:gap-3 group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#1C1C1C] to-[#121212] border border-[#D9B43F]/40 flex items-center justify-center text-[#D9B43F] shadow-sm group-hover:border-[#D9B43F] transition-all duration-300">
            <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#D9B43F]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-['Inter',sans-serif]">
                BIMBA
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-[#121212] text-[#D9B43F] border border-[#D9B43F]/30">
                AI
              </span>
            </div>
            <span className="text-[10px] text-[#A1A1A1] font-medium tracking-tight -mt-0.5 hidden sm:inline">
              Reflect Your Best Self.
            </span>
          </div>
        </a>

        {/* Back to Home Button: Hidden on mobile, visible on desktop */}
        <button
          onClick={onBackToHome}
          className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#A1A1A1] hover:text-[#D9B43F] px-3 py-1.5 rounded-lg hover:bg-[#121212] border border-transparent hover:border-[#292929] transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16 w-full flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* LEFT SIDE: Brand Narrative & Feature Pillars (HIDDEN on Mobile, VISIBLE on Desktop) */}
          <motion.div
            className="hidden lg:flex lg:col-span-7 flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Gold Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-[#D9B43F]/30 text-[#D9B43F] text-xs font-mono font-semibold tracking-widest uppercase mb-6 w-fit shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9B43F] animate-pulse" />
              <span>CAREER INTELLIGENCE PLATFORM</span>
            </div>

            {/* Headline with Gold Italic Serif Accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-5 font-['Inter',sans-serif]">
              Welcome to Your{' '}
              <span className="font-serif-heading italic font-normal gold-text-gradient block mt-1">
                Next Chapter.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#A1A1A1] max-w-xl leading-relaxed mb-10 font-normal">
              Your career journey continues here. Build your identity, discover opportunities, and turn your ambitions into verified achievements.
            </p>

            {/* Three Feature Cards */}
            <div className="space-y-3.5 max-w-lg">
              {featurePillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-[#121212] border border-[#292929] hover:border-[#D9B43F]/40 transition-all duration-300 shadow-sm"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0B0B0B] border border-[#D9B43F]/40 text-[#D9B43F] flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#D9B43F] group-hover:text-black transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white group-hover:text-[#F0D77A] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#A1A1A1] mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust Footnote */}
            <div className="flex items-center gap-2 mt-8 pt-6 border-t border-[#292929] text-xs text-[#A1A1A1] font-mono">
              <ShieldCheck className="w-4 h-4 text-[#D9B43F]" />
              <span>Compliant with Dr. B. B. Hegde Placement Ecosystem Standards</span>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Premium Login Form Card (PROMINENT ON MOBILE & DESKTOP) */}
          <motion.div
            className="w-full flex justify-center col-span-1 lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer Glow Wrapper */}
            <div className="w-full max-w-md relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-[#D9B43F]/10 via-transparent to-transparent rounded-3xl blur-md -z-10" />

              <div className="w-full bg-[#121212] rounded-2xl border border-[#292929] shadow-2xl p-6 sm:p-9 relative overflow-hidden">
                {/* Top Gold Accent Hairline */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9B43F] to-transparent opacity-90" />

                {/* Card Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#181818] border border-[#D9B43F]/30 text-[#D9B43F] text-[10px] font-mono font-bold tracking-widest uppercase mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B43F] animate-pulse" />
                    <span>MEMBER ACCESS</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Inter',sans-serif]">
                    Welcome Back
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A1A1A1] mt-1">
                    Sign in to continue your career journey.
                  </p>
                </div>

                {/* Demo Helper Pill */}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#181818] border border-[#292929] mb-4 text-xs">
                  <div className="text-[11px] text-[#A1A1A1]">
                    Demo: <span className="text-[#D9B43F] font-semibold">admin</span> /{' '}
                    <span className="text-[#D9B43F] font-semibold">Bimba@123</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleFillDemo}
                    className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D9B43F] hover:text-[#F0D77A] px-2 py-0.5 rounded bg-[#121212] border border-[#292929] transition-colors cursor-pointer"
                  >
                    Auto Fill
                  </button>
                </div>

                {/* Error Banner */}
                <AnimatePresence>
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -6, height: 0 }}
                      className="bg-[#1C1212] border border-red-500/40 text-red-200 text-xs px-3.5 py-2.5 rounded-xl flex items-center gap-2 mb-4"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Username / Email Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono uppercase tracking-wider">
                      USERNAME OR EMAIL
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1A1A1]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="admin or student@college.edu"
                        required
                        className="w-full bg-[#0B0B0B] border border-[#292929] focus:border-[#D9B43F] focus:ring-1 focus:ring-[#D9B43F]/40 text-white placeholder-[#555555] text-sm rounded-xl pl-10 pr-4 py-3 transition-all duration-200 outline-none"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
                        PASSWORD
                      </label>
                      <a
                        href="#forgot-password"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('For this demo version, please use username "admin" and password "Bimba@123".');
                        }}
                        className="text-xs text-[#A1A1A1] hover:text-[#D9B43F] transition-colors"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1A1A1]">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="••••••••••••"
                        required
                        className="w-full bg-[#0B0B0B] border border-[#292929] focus:border-[#D9B43F] focus:ring-1 focus:ring-[#D9B43F]/40 text-white placeholder-[#555555] text-sm rounded-xl pl-10 pr-11 py-3 transition-all duration-200 outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#A1A1A1] hover:text-[#D9B43F] transition-colors cursor-pointer"
                        title={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me Checkbox */}
                  <div className="flex items-center pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <div
                        onClick={() => setRememberMe(!rememberMe)}
                        className={`w-4 h-4 rounded border transition-colors flex items-center justify-center ${rememberMe
                          ? 'bg-[#D9B43F] border-[#D9B43F] text-black'
                          : 'bg-[#0B0B0B] border-[#292929]'
                          }`}
                      >
                        {rememberMe && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs text-[#A1A1A1]">Remember me on this device</span>
                    </label>
                  </div>

                  {/* Primary Gold Sign In Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#D9B43F] via-[#E5C158] to-[#C49E2D] hover:from-[#F0D77A] hover:to-[#D9B43F] text-black font-bold text-sm tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-lg shadow-[#D9B43F]/20 hover:shadow-[#D9B43F]/35 transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 group mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>AUTHENTICATING...</span>
                      </>
                    ) : (
                      <>
                        <span>SIGN IN</span>
                        <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Divider */}
                  <div className="relative my-4 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[#242424]" />
                    </div>
                    <span className="relative bg-[#121212] px-3 text-[11px] font-mono text-[#777777] uppercase tracking-wider">
                      OR CONTINUE WITH
                    </span>
                  </div>

                  {/* Google Button */}
                  <button
                    type="button"
                    onClick={() => {
                      alert('Google authentication will be linked to the campus email system. Please use the demo credentials to test.');
                    }}
                    className="w-full bg-[#181818] hover:bg-[#1E1E1E] border border-[#292929] hover:border-[#D9B43F]/40 text-white font-medium text-sm py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-xs active:scale-[0.99]"
                  >
                    <GoogleIcon className="w-4 h-4" />
                    <span>Continue with Google</span>
                  </button>
                </form>

                {/* Bottom Registration Prompt */}
                <div className="mt-6 pt-5 border-t border-[#222222] text-center">
                  <p className="text-xs text-[#A1A1A1]">
                    New to Bimba AI?{' '}
                    <a
                      href="#register"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('New student registration is managed through the placement cell. Please sign in with demo credentials.');
                      }}
                      className="text-[#D9B43F] hover:text-[#F0D77A] font-semibold transition-colors underline-offset-4 hover:underline"
                    >
                      Create an account.
                    </a>
                  </p>

                  {/* Mobile Back to Home Link */}
                  {onBackToHome && (
                    <button
                      onClick={onBackToHome}
                      className="mt-4 sm:hidden text-xs text-[#777777] hover:text-[#D9B43F] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Home</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Subtle Footer Bar */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#666666] font-mono border-t border-[#1C1C1C] z-10">
        <p>© BIMBA AI 2.0. All rights reserved.</p>
        <p>Dr. B. B. Hegde First Grade College, Kundapura</p>
      </footer>
    </div>
  );
}
