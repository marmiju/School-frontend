import Link from "next/link";
import React from "react";
type props = {
  children: string;
  link: string;
};

export const Button = ({ children, link }: props) => {
  return (
    <Link
      href={link}
      className=" px-6 py-1 font-semibold bg-secondary text-peimary hover:text-background hover:bg-primary duration-300 rounded overflow-hidden"
    >
      {children}
    </Link>
  );
};
