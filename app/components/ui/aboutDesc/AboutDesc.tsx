"use client";
import React from "react";
import { Button } from "../button/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const AboutDesc = () => {
  const aboutData = useSelector((state: RootState) => state.aboutUs);
  return (
    <div className="text-text m-2 p-2 text-sm space-y-2">
      <p>{aboutData.aboutData.description}</p>
      <Button children="বিস্তারিত" link="/about" />
    </div>
  );
};
