"use client";
import React from "react";
import { Button } from "../button/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const AboutDesk = () => {
  const aboutData = useSelector((state: RootState) => state.aboutUs);
  return (
    <div className="text-text mt-2">
      <p>{aboutData.aboutData.description}</p>
      <Button children="Read more" />
    </div>
  );
};
