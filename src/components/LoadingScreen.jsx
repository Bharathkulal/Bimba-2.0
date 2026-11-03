import React, { useState } from 'react';
import { motion } from 'framer-motion';
import collegeLogo from '../assets/college-logo.jpg';

/**
 * BIMBA AI - Cinematic Loading Screen
 *
 * Requirements:
 * - Full-screen pure black background (#000000).
 * - College logo positioned exactly in the center.
 * - Starts zoomed in (scale 2.5).
 * - Smoothly zooms out to normal size (scale 1.0) while rotating 360°.
 * - Slowly decelerates with a natural ease-out curve and stops perfectly in the center.
 * - Remains completely still for 1 second.
 * - Responsive on desktop and mobile.
 * - Minimal, cinematic, premium (no text, glow, or extra effects).
 */
export default function LoadingScreen({ onAnimationComplete }) {
  const [animationKey, setAnimationKey] = useState(0);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const handleAnimationComplete = () => {
    // Keep still for 1 second before notifying completion handler
    setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 1000);
  };

  return (
    <main
      onClick={handleReplay}
      style={{
        width: '100vw',
        height: '100dvh',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'fixed',
        inset: 0,
        margin: 0,
        padding: 0,
        cursor: 'default',
        touchAction: 'none',
      }}
    >
      <motion.div
        key={animationKey}
        initial={{
          opacity: 0,
          scale: 2.5,
          rotate: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 360,
        }}
        transition={{
          opacity: {
            duration: 0.5,
            ease: 'easeOut',
          },
          scale: {
            duration: 3.2,
            ease: [0.16, 1, 0.3, 1], // Cinematic ease-out deceleration
          },
          rotate: {
            duration: 3.2,
            ease: [0.16, 1, 0.3, 1], // Synchronized deceleration to exact 360°
          },
        }}
        onAnimationComplete={handleAnimationComplete}
        style={{
          width: 'clamp(220px, 70vw, 290px)',
          height: 'clamp(220px, 70vw, 290px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformOrigin: '50% 50%',
          willChange: 'transform, opacity',
        }}
      >
        <img
          src={collegeLogo}
          alt="Dr. B.B. Hegde College"
          width={1024}
          height={1024}
          decoding="async"
          loading="eager"
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </main>
  );
}
