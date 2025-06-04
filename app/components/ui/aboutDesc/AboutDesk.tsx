import { AboutUs } from "@/lib/aboutUs/AboutUS";
import React from "react";
import { Button } from "../button/Button";

export const AboutDesk = () => {
  return (
    <div className="text-text">
      <p>{AboutUs.description}</p>
      <Button />
    </div>
  );
};
