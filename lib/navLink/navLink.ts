export type NavItem = {
  name: string;
  href?: string;
  children?: NavItem[];
};

export const navLinks: NavItem[] = [
  { name: "হোম", href: "/" },

  {
    name: "আমাদের সম্পর্কে",
    href: "/about",
    
  },

  {
    name: "এডমিনিস্ট্রেশন",
    href: "/administration",
    children: [
      { name: "অফিস সহকারী", href: "/administration/staffs" },
      { name: "সদস্যবৃন্দ", href: "/administration/members" },
      { name: "শিক্ষক মন্ডলী", href: "/administration/teachers" },
    ],
  },
  {
    name: "একাডেমিক",
    children: [
      { name: "শ্রেনী শাখা ও বিভাগসমুহ", href: "/academic/class-division" },
      { name: "শ্রেণী রুটিন", href: "/academic/routine" },
    ],
  },

  {
    name: "ভর্তি",
    href: "/admission",
    children: [
      { name: "ভর্তি প্রক্রিয়া", href: "/admission/process" },
      { name: "ভর্তি ফি", href: "/admission/fees" },
    ],
  },

  { name: "নোটিশ", href: "/notice" },
  { name: "রেজাল্ট", href: "/result" },
  { name: "গ্যালারি", href: "/gallery" },
  { name: "তথ্য বাতায়ন", href: "/info-portal" },
  { name: "যোগাযোগ", href: "/contact" },
  { name: "লগইন", href: "/login" },
];
