export type NavItem = {
  name: string;
  href?: string;
  children?: NavItem[];
};

export const NavLinks: NavItem[] = [
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
      { name: "শিক্ষার্থীদের তালিকা", href: "/academic/student-list" },
      { name: "বইসমুহের তালিকা", href: "/academic/book-list" },
      { name: "পরিক্ষার রুটিন", href: "/academic/exam-rutine" },
    ],
  },
  {
    name: "ভর্তি",
    children: [
      { name: "ভর্তি প্রক্রিয়া", href: "/admission/fee" },
    ],
  },

  { name: "নোটিশ", href: "/notice" },
  { name: "রেজাল্ট", href: "/result" },
  { name: "গ্যালারি", href: "/gallery" },
  { name: "তথ্য বাতায়ন", href: "/info-portal" },
  { name: "যোগাযোগ", href: "/contact" },
  { name: "লগইন", href: "/login" },
];
