import React from "react";
import { LogoTitle } from "../logotitle/LogoTitle";
import { DarkTogle } from "../../appearence/DarkTogle";

export const HeaderTop = () => {
  return (
    <div className="flex justify-between max-w-[1280px] mx-auto p-2">
      <div className="hidden md:flex w-full items-center">
        <LogoTitle />
      </div>
      <div className="text-sm flex md:grid justify-between  w-full   md:justify-end  text-end ">
        <DarkTogle />

        <div className="grid md:flex text-sm lg:gap-3 font-medium text-text">
          <p>MPO কোডঃ 8805111301</p>
          <p>EIIN নংঃ 122266</p>
        </div>
      </div>
    </div>
  );
};
