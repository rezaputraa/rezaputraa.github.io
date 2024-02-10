"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({
  links
}: {
  links: {
    name: string
    href: string
  }[]
}) {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 flex min-h-[50px] w-full items-center justify-center gap-8 border-t-2 border-t-slate-900 sm:bottom-auto sm:right-0 sm:min-h-screen sm:w-[90px] sm:flex-col sm:border-l-2 sm:border-t-0 sm:border-l-slate-900">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "text-xs text-slate-900 uppercase hover:font-semibold",
            { "font-semibold": pathname === link.href }
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}