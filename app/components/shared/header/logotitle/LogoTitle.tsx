import React from "react";

export const LogoTitle = () => {
  return (
    <div className=" flex gap-2 p-2">
      <img
        className="w-10 lg:w-20"
        src="https://en.wikipedia.org/static/images/icons/wikipedia.png"
        alt="Weekipedia"
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
