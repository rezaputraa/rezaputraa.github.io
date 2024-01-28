"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar({
  links
}: {
  links: {
    name: string
    href: string
  }[]
}) {
  const pathname = usePathname();

  return (
    <aside className="fixed right-0 flex min-h-screen w-[90px] flex-col items-center justify-center gap-8 border-l-2 border-l-slate-900">
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
    </aside>
  );
}