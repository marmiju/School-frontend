import { AboutUs } from "@/lib/aboutUs/AboutUS";
import React from "react";
import { AboutDesc } from "../components/ui/aboutDesc/AboutDesc";
import { Speech } from "../components/ui/speech/Speech";
import { Mvw } from "../components/ui/mvw/Mvw";

const page = () => {
  const about = AboutUs;
  return (
    <div className="max-w-[1280px] mx-auto grid grid-cols-12 ">
      <p className="my-2 py-20 col-span-12 border text-center text-4xl font-bold text-background rounded-sm bg-primary">
        আমাদের সম্পর্কে
      </p>
      <div className="col-span-12 md:col-span-8">
        <AboutDesc desc={about.description} />
        <Mvw mvw={about.mvw} />
      </div>
      <div className="col-span-12 md:col-span-4">
        <Speech speechs={about.speechs} />
      </div>
    </div>
  );
};

export default page;
