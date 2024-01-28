"use client";

import { motion } from "framer-motion";

const colors = ["bg-cyan-400", "bg-teal-400", "bg-fuchsia-400"];

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function OrigamiProfile() {
  return (
    <>
      {colors.map((color) => (
        <motion.div
          key={color}
          className={`absolute h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] ${color}`}
          initial={{ rotate: 0, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, type: "spring" }}
          animate={{ rotate: getRandomIntInclusive(-20, 20), x: getRandomIntInclusive(-50, 50) }}
        />
      ))}
    </>
  );
}