import React from "react";

export const LogoTitle = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-10  lg:w-20"
        src="https://en.wikipedia.org/static/images/icons/wikipedia.png"
        alt="Weekipedia"
      />
      <div>
        <h1 className="text-2xl text-primary">পাঁচগাছী বালিকা উচ্চ বিদ্যালয়</h1>
        <p className="text-text">স্থাপিতঃ ১৯৯১</p>
      </div>
    </div>
  );
};
