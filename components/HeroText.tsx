"use client";

import { motion } from "framer-motion";

export default function HeroText({
  initialPosition,
  className,
  firstText,
  secondText
}: {
  initialPosition: number;
  className?: string;
  firstText: string;
  secondText?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialPosition }}
      transition={{ ease: "easeOut", duration: 0.7 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h1 className={`cursor-default uppercase text-[2.5rem] sm:text-[5rem] md:text-[7.5rem] lg:text-[10rem] ${className}`}>
        {firstText}
        <br />
        {secondText}
      </h1>
    </motion.div>
  );
}