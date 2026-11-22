import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './LandingPage';
import LoginPage from './components/LoginPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState(() => {
    return window.location.hash === '#login' ? 'login' : 'landing';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#login') {
        setCurrentView('login');
      } else if (window.location.hash === '#home' || window.location.hash === '') {
        setCurrentView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '#home';
    setCurrentView('landing');
  };

  const navigateToLogin = () => {
    window.location.hash = '#login';
    setCurrentView('login');
  };

  return (
    <div className="relative min-h-screen bg-[#080808]">
      {/* Cinematic Intro Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loading-screen"
            className="fixed inset-0 z-50 bg-black overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <LoadingScreen onAnimationComplete={() => setLoading(false)} />

            {/* Quick access skip button */}
            <button
              onClick={() => setLoading(false)}
              className="absolute bottom-6 right-6 z-50 text-xs font-semibold text-neutral-400 hover:text-white px-3.5 py-1.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 transition backdrop-blur-xs cursor-pointer shadow-lg"
              title="Skip intro to landing page"
            >
              Skip Intro →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main View: Landing Page or Login Page */}
      <AnimatePresence mode="wait">
        {currentView === 'login' ? (
          <motion.div
            key="login-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <LoginPage onBackToHome={navigateToHome} />
          </motion.div>
        ) : (
          <motion.div
            key="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LandingPage
              onReplayIntro={() => setLoading(true)}
              onNavigateToLogin={navigateToLogin}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
