"use client";
import React from "react";

export const AboutDesc = ({ desc }: { desc: string }) => {
  return (
    <div className="text-text my-4  space-y-2 p-4">
      <p>{desc}</p>
    </div>
  );
};
