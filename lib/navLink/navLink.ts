type NavItem = {
  name: string;
  href: string;
  children?: NavItem[];
};

export const navLinks: NavItem[] = [
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

  {
    name: "এডমিনিস্ট্রেশন",
    href: "/administration",
    children: [
      { name: "স্টাফ তালিকা", href: "/administration/staff" },
      { name: "শিক্ষকগণ", href: "/administration/teachers" },
    ],
  },

  {
    name: "একাডেমিক",
    href: "/academic",
    children: [
      { name: "বিষয় তালিকা", href: "/academic/subjects" },
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
