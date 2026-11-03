import React, { useState } from 'react';
import { motion } from 'framer-motion';
import collegeLogo from '../assets/college-logo.jpg';

/**
 * BIMBA AI 2.0 - Initial Cinematic Loading Screen
 *
 * Sequence:
 * 1. Screen starts pure black (#000000).
 * 2. Logo smoothly fades in at the center.
 * 3. Rotates continuously around its center axis for ~3 seconds.
 * 4. Gradually reduces rotation speed with natural ease-out deceleration.
 * 5. Stops at exact original upright position (1440 deg = 4 * 360 deg).
 * 6. Holds perfectly still for > 1 second.
 */
export default function LoadingScreen({ onAnimationComplete }) {
  const [animationKey, setAnimationKey] = useState(0);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
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
        initial={{ opacity: 0, rotate: 0 }}
        animate={{
          opacity: [0, 1, 1, 1],
          rotate: [0, 1080, 1440, 1440],
        }}
        transition={{
          opacity: {
            duration: 0.9,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          },
          rotate: {
            duration: 6.0,
            times: [0, 0.52, 0.83, 1],
            ease: ['linear', [0.16, 0.9, 0.3, 1], 'linear'],
          },
        }}
        onAnimationComplete={() => {
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }}
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
