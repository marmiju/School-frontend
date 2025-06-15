"use client";

import { montserrat } from "@/lib/Font";
import { navLinks } from "@/lib/navLink/navLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(href + "/");

export const DesktopHeader = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className={`bg-primary p-4 text-background ${montserrat.className}`}>
      <div className="max-w-[1280px] mx-auto flex gap-6 justify-around">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="relative z-10"
            onMouseEnter={() => setOpenMenu(link.name)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              href={link.href}
              className={`hover:underline ${
                isActive(pathname, link.href)
                  ? "font-bold underline "
                  : "font-normal"
              }`}
            >
              {link.name}
            </Link>

            {link.children && openMenu === link.name && (
              <div className="absolute top-full truncate left-0  bg-primary text-secondary shadow-lg rounded">
                {link.children.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className={`block px-4 py-2 hover:bg-text hover:text-secondary ${
                      isActive(pathname, child.href)
                        ? "bg-secondary font-semibold text-text"
                        : ""
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
