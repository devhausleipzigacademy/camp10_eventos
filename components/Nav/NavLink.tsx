"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

function NavLink({ children, href }: NavLinkProps) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "hover:text-primary",
        pathName === href ? "text-neutral-700" : "text-neutral-500"
      )}
    >
      {children}
    </Link>
  );
}

export default NavLink;
