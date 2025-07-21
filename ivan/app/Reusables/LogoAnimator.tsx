"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import LogoPreloader from "./LogoPreloader";
import { AnimatePresence } from "motion/react";

const LogoAnimator = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    // Reset preloader on route change
    setIsLoaded(false);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Match the duration of the animation

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run on pathname change

  if (!isLoaded)
    return (
      <AnimatePresence mode="wait">
        <LogoPreloader onFinish={() => setIsLoaded(true)} />
      </AnimatePresence>
    );
};

export default LogoAnimator;
