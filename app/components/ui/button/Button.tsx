import React from "react";
type props = {
  children: string;
};

export const Button = ({ children }: props) => {
  return (
    <button className=" px-6 py-1 font-semibold bg-secondary text-peimary hover:text-background hover:bg-primary duration-300 rounded overflow-hidden">
      {children}
    </button>
  );
};
