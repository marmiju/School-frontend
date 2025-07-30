"use client";
import { SpeechsItemType } from "@/lib/aboutUs/AboutUS";
import React from "react";
import { SingleSpeech } from "./SingleSpeech";
import { usePathname } from "next/navigation";

export const Speech = ({ speechs }: { speechs: SpeechsItemType[] }) => {
  return (
    <div>
      {
        speechs && speechs.map((speech, i) => {
          return <SingleSpeech key={i} speech={speech} />;
        })
      }
    </div>
  );
};
