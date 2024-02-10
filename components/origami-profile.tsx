"use client";

import { getRandomIntInclusive } from "@/lib/utils";
import { motion } from "framer-motion";

const colors = ["bg-cyan-400", "bg-teal-400", "bg-fuchsia-400"];

export default function OrigamiProfile() {
  return (
    <>
      {colors.map((color) => (
        <motion.div
          key={color}
          className={`absolute h-48 w-48 sm:h-[300px] sm:w-[300px] ${color}`}
          initial={{ rotate: 0, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, type: "spring" }}
          animate={{ rotate: getRandomIntInclusive(-20, 20), x: getRandomIntInclusive(-50, 50) }}
        />
      ))}
    </>
  );
}