import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './LandingPage';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#090909]">
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

      {/* Main Landing Page */}
      <LandingPage onReplayIntro={() => setLoading(true)} />
    </div>
  );
}
