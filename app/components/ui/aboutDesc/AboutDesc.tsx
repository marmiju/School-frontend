"use client";
import React from "react";

export const AboutDesc = ({ desc }: { desc: string }) => {
  return (
    <div className="text-text m-2 p-2  space-y-2">
      <p>{desc}</p>
    </div>
  );
};
