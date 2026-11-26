import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './LandingPage';
import LoginPage from './components/LoginPage';
import HomeDashboard from './components/HomeDashboard';
import { getSession, clearSession } from './config/authConfig';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(() => getSession());
  const currentUser = session?.user || null;

  const [currentView, setCurrentView] = useState(() => {
    const hash = window.location.hash;
    const initialSession = getSession();
    if (hash === '#dashboard' && initialSession?.authenticated) {
      return 'dashboard';
    }
    if (hash === '#login') {
      return 'login';
    }
    return 'landing';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const activeSession = getSession();

      if (hash === '#dashboard') {
        if (activeSession?.authenticated) {
          setCurrentView('dashboard');
        } else {
          setCurrentView('login');
          window.location.hash = '#login';
        }
      } else if (hash === '#login') {
        setCurrentView('login');
      } else if (hash === '#home' || hash === '' || hash.startsWith('#')) {
        // If hash is an anchor on landing page (e.g. #features, #about, #how-it-works)
        if (!['#login', '#dashboard'].includes(hash)) {
          setCurrentView('landing');
        }
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

  const navigateToDashboard = () => {
    window.location.hash = '#dashboard';
    setCurrentView('dashboard');
  };

  const handleLoginSuccess = (user) => {
    const freshSession = getSession();
    setSession(freshSession);
    window.location.hash = '#dashboard';
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    clearSession();
    setSession(null);
    window.location.hash = '#home';
    setCurrentView('landing');
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

      {/* Main View Router: Landing Page | Login Page | Home Dashboard */}
      <AnimatePresence mode="wait">
        {currentView === 'login' ? (
          <motion.div
            key="login-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <LoginPage
              onBackToHome={navigateToHome}
              onLoginSuccess={handleLoginSuccess}
            />
          </motion.div>
        ) : currentView === 'dashboard' ? (
          <motion.div
            key="dashboard-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <HomeDashboard
              user={currentUser}
              onLogout={handleLogout}
            />
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
              user={currentUser}
              onReplayIntro={() => setLoading(true)}
              onNavigateToLogin={currentUser ? navigateToDashboard : navigateToLogin}
              onNavigateToDashboard={navigateToDashboard}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
