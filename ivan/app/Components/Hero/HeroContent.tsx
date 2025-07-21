"use client";
import MainLink from "@/app/Reusables/Buttons/MainLink";
import { motion } from "motion/react";
import React from "react";

const HeroContent = () => {
  const title = ["Discreet", "Dominant", "Dependable"];

  return (
    <div className="h-[calc(100dvh-18px)] md:h-full w-full flex flex-col justify-center items-center text-center px-6 ">
      <div className="text-white text-5xl md:text-6xl lg:text-[5vw] font-black leading-[90%]">
        {title.map((word, i) => (
          <motion.div
            key={i}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-6 max-w-xl text-white text-base md:text-lg lg:text-[1.1vw] tracking-tighter leading-[130%]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.6 }}
      >
        Serving businesses, institutions, and high-end properties with fully
        integrated surveillance, access control, and infrastructure systems
        built for the future.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="mt-[5vh] lg:mt-[4vh]"
      >
        <MainLink
          link="/"
          text="Request a Service"
          className="py-[2.8vh] lg:py-[1.8vh] px-[6vh]"
        />
      </motion.div>
    </div>
  );
};

export default HeroContent;
