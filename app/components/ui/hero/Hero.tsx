import Image from "next/image";
import React from "react";
import student_image from "@/public/StudentInClasses.png";

export const Banner = () => {
  return (
    <div className="relative max-w-[1280px] h-[400px] mx-auto z-0 my-2">
      <Image src={student_image} fill alt="banner" objectFit="cover" priority />
    </div>
  );
};
