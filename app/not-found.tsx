"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center gap-12">
        <div className="text-center">
          <h1 className="text-[5rem] font-extrabold">404</h1>
          <h2 className="text-2xl">Page not found!</h2>
        </div>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}