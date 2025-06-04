import Image from "next/image";
import React from "react";

export const LogoTitle = () => {
  return (
    <div className=" flex gap-2 p-2">
      <Image
        src="https://en.wikipedia.org/static/images/icons/wikipedia.png"
        alt="Logo"
        width={60}
        height={40}
      />
      <div>
        <h1 className="text-md md:text-lg lg:text-2xl font-bold ">
          পাঁচগাছী উচ্চ বিদ্যালয়
        </h1>
        <p className="">স্থাপিতঃ ১৯৯১</p>
      </div>
    </div>
  );
};
