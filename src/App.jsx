import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './LandingPage';
import LoginPage from './components/LoginPage';
import StudentLayout from './components/StudentLayout';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import JobsPage from './pages/JobsPage';
import CompaniesPage from './pages/CompaniesPage';
import ProfilePage from './pages/ProfilePage';
import { getSession, clearSession } from './config/authConfig';

const STUDENT_ROUTES = ['/home', '/resume', '/jobs', '/companies', '/profile'];

function getRouteFromLocation() {
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  const hash = window.location.hash.toLowerCase().replace(/^#/, '');

  // 1. Direct path matches
  if (STUDENT_ROUTES.includes(path)) return path;
  if (path === '/login') return '/login';

  // 2. Hash fallbacks
  if (hash === 'resume' || hash === '/resume') return '/resume';
  if (hash === 'jobs' || hash === '/jobs') return '/jobs';
  if (hash === 'companies' || hash === '/companies') return '/companies';
  if (hash === 'profile' || hash === '/profile') return '/profile';
  if (hash === 'dashboard' || hash === 'home' || hash === '/home') return '/home';
  if (hash === 'login' || hash === '/login') return '/login';

  return '/';
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(() => getSession());
  const currentUser = session?.user || null;

  const [currentRoute, setCurrentRoute] = useState(() => {
    return getRouteFromLocation();
  });

  // Keep route synced with browser back/forward and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      const detected = getRouteFromLocation();
      setCurrentRoute(detected);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (newRoute) => {
    if (window.location.pathname !== newRoute) {
      window.history.pushState(null, '', newRoute);
    }
    setCurrentRoute(newRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (user) => {
    const freshSession = getSession();
    setSession(freshSession);
    navigateTo('/home');
  };

  const handleLogout = () => {
    clearSession();
    setSession(null);
    navigateTo('/');
  };

  // Determine which page content to render
  const isStudentRoute = STUDENT_ROUTES.includes(currentRoute);

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

      {/* Main View Router */}
      <AnimatePresence mode="wait">
        {currentRoute === '/login' ? (
          <motion.div
            key="login-page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <LoginPage
              onBackToHome={() => navigateTo('/')}
              onLoginSuccess={handleLoginSuccess}
            />
          </motion.div>
        ) : isStudentRoute ? (
          currentUser ? (
            <StudentLayout
              key="student-shell"
              user={currentUser}
              activeRoute={currentRoute}
              onNavigate={navigateTo}
              onLogout={handleLogout}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoute}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  {currentRoute === '/home' && (
                    <HomePage user={currentUser} onNavigate={navigateTo} />
                  )}
                  {currentRoute === '/resume' && (
                    <ResumePage user={currentUser} onNavigate={navigateTo} />
                  )}
                  {currentRoute === '/jobs' && (
                    <JobsPage user={currentUser} onNavigate={navigateTo} />
                  )}
                  {currentRoute === '/companies' && (
                    <CompaniesPage user={currentUser} onNavigate={navigateTo} />
                  )}
                  {currentRoute === '/profile' && (
                    <ProfilePage
                      user={currentUser}
                      onLogout={handleLogout}
                      onNavigate={navigateTo}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </StudentLayout>
          ) : (
            // If student tries to access /home, /resume etc while unauthenticated, show login
            <motion.div
              key="auth-redirect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoginPage
                onBackToHome={() => navigateTo('/')}
                onLoginSuccess={handleLoginSuccess}
              />
            </motion.div>
          )
        ) : (
          <motion.div
            key="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <LandingPage
              user={currentUser}
              onReplayIntro={() => setLoading(true)}
              onNavigateToLogin={() => navigateTo(currentUser ? '/home' : '/login')}
              onNavigateToDashboard={() => navigateTo('/home')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
