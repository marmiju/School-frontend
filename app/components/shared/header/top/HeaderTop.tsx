import React from "react";
import { LogoTitle } from "../logotitle/LogoTitle";
import { DarkTogle } from "../../appearence/DarkTogle";

export const HeaderTop = () => {
  return (
    <div className="flex justify-between max-w-[1280px] mx-auto p-2">
      <LogoTitle />
      <div>
        <DarkTogle />
        <p>Hello1</p>
        <p>Hello2</p>
      </div>
    </div>
  );
};
