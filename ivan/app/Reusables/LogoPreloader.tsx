'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function LogoPreloader({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, 2000); // total animation duration
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/logoLight.png"
        alt="Logo"
        className="w-44"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        exit={{
            opacity: 0,
            rotate: 360,  // Add rotation effect when the logo unmounts
          }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      />
    </motion.div>
  );
}