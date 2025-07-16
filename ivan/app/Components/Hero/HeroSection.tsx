import Navbar from "@/app/Reusables/Navbar/Navbar";
import React from "react";
import HeroContent from "./HeroContent";
import HeroChevronDown from "./HeroChevronDown";

const HeroSection = () => {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/hero.mov" 
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]" />

      <Navbar />
      <HeroContent />
     <HeroChevronDown />
    </div>
  );
};

export default HeroSection;
