"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import OrigamiProfile from "@/components/OrigamiProfile";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-40 md:flex-row">
      <div>
        <OrigamiProfile />
        <Image src="./profile.jpg" alt="Reza" className="relative sm:h-[300px] sm:w-[300px]" height={200} width={200} priority={true} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-3xl sm:text-4xl md:text-5xl">Hi, I&apos;m Reza.</p>
      </motion.div>
    </div>
  );
}