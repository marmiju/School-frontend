import React from "react";
import { AboutDesc } from "../aboutDesc/AboutDesc";
import { Speech } from "../speech/Speech";
import { AboutUs, AboutUsType } from "@/lib/aboutUs/AboutUS";
import { Button } from "../button/Button";

export const HomeAboute = () => {
  const about: AboutUsType = AboutUs;
  return (
    <div className="max-w-[1280px] mx-auto space-x-4 grid grid-cols-12">
      <div className="col-span-12 md:col-span-8">
        <AboutDesc desc={about.description} />
        <Button link="/about">বিস্তারিত</Button>
      </div>
      <div className="col-span-12 md:col-span-4">
        <Speech speechs={about.speechs} />
      </div>
    </div>
  );
};
