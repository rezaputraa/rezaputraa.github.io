"use client";

import { motion } from "framer-motion";

export default function HeroQuote({ quote }: { quote: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <blockquote className="ms-4 border-l-4 border-l-slate-700 ps-8 text-white selection:bg-white selection:text-slate-900 sm:text-xl md:text-3xl lg:text-4xl">
        {quote}
      </blockquote>
    </motion.div>
  );
}