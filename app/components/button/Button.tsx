import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

type props = {
  children: React.ReactNode;
  link: string;
  className?: string
};



export const Button = ({ children, link, className }: props) => {
  return (
    <Link
      href={link}
      className={cn(`px-6 py-1 font-semibold my-10 bg-secondary text-primary hover:text-background hover:bg-primary duration-300 rounded overflow-hidden`, className)}

    >
      {children}
    </Link>
  );
};
