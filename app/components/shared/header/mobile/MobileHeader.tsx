"use client";

import React, { useState } from "react";
import { LogoTitle } from "../logotitle/LogoTitle";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation item type
type NavItem = {
  name: string;
  href: string;
  children?: NavItem[];
};

// Sample navigation
const navLinks: NavItem[] = [
  { name: "হোম", href: "/" },
  {
    name: "আমাদের সম্পর্কে",
    href: "/about",
    children: [
      { name: "ভবনের ইতিহাস", href: "/about/history" },
      { name: "অধ্যক্ষের বাণী", href: "/about/principal-message" },
    ],
  },
  {
    name: "বাণী সমূহ",
    href: "/messages",
    children: [
      { name: "অধ্যক্ষের বাণী", href: "/messages/principal" },
      { name: "চেয়ারম্যানের বাণী", href: "/messages/chairman" },
    ],
  },
  { name: "নোটিশ", href: "/notice" },
  { name: "রেজাল্ট", href: "/result" },
  { name: "গ্যালারি", href: "/gallery" },
  { name: "যোগাযোগ", href: "/contact" },
  { name: "লগইন", href: "/login" },
];

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="w-full bg-primary text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <LogoTitle />
        <div className="text-4xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mt-4 space-y-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex justify-between items-center">
                <Link
                  href={link.href}
                  className={`block py-2 px-3 rounded ${
                    pathname === link.href
                      ? "bg-white text-primary font-bold"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
                {link.children && (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="px-2 text-xl"
                  >
                    {activeDropdown === link.name ? "−" : "+"}
                  </button>
                )}
              </div>
              {link.children && activeDropdown === link.name && (
                <div className="ml-4 mt-1 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={`block py-1 px-4 rounded text-sm ${
                        pathname === child.href
                          ? "bg-white text-primary font-semibold"
                          : ""
                      }`}
                    >
                      ↳ {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
