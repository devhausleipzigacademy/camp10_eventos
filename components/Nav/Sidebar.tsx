"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLink = {
  href: string;
  name: string;
};

type Props = {
  navLinks: NavLink[];
};

function Sidebar({ navLinks }: Props) {
  const pathName = usePathname();
  return (
    <aside className="py-10 px-2 h-full w-[250px] border-r">
      <ul className="flex flex-col items-center gap-6">
        {navLinks.map((link, idx) => (
          <li
            key={idx}
            className={cn(
              "text-xs text-center cursor-pointer",
              link.href === pathName
                ? "text-white bg-primary px-4 py-2 rounded-full shadow-md"
                : "text-neutral-500 hover:text-primary"
            )}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
