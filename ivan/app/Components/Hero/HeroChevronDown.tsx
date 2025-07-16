"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { FiChevronsDown } from "react-icons/fi";

const HeroChevronDown = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl"
    >
      <Link href={"/"}>
        <FiChevronsDown className="text-[30px]"/>
      </Link>
    </motion.div>
  );
};

export default HeroChevronDown;
