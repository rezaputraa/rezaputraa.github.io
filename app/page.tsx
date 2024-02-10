"use client";

import HeroQuote from "@/components/hero-quote";
import HeroText from "@/components/hero-text";

export default function Home() {
  return (
    <div className="mt-[50px] sm:mt-0">
      <HeroText
        initialPosition={-100}
        className="font-extralight text-slate-900 selection:bg-slate-900 selection:text-white"
        firstText="Reza Putra"
      />
      <div className="bg-slate-900">
        <HeroText
          initialPosition={100}
          className="font-extralight text-white selection:bg-white selection:text-slate-900"
          firstText="Full-Stack"
          secondText="Developer"
        />

        <div className="py-8">
          <HeroQuote quote="Passionate full-stack developer with expertise in PHP and TypeScript." />
        </div>
      </div>
    </div>
  );
}
