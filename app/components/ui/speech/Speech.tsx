"use client";
import { SpeechsItemType } from "@/lib/aboutUs/AboutUS";
import React from "react";
import { SingleSpeech } from "./SingleSpeech";
import { Button } from "../button/Button";
import { usePathname } from "next/navigation";

export const Speech = ({ speechs }: { speechs: SpeechsItemType[] }) => {
  const path = usePathname();
  return (
    <div>
      {path == "/about" ? (
        speechs.map((speech, i) => {
          return <SingleSpeech speech={speech} />;
        })
      ) : (
        <SingleSpeech speech={speechs[0]} />
      )}
    </div>
  );
};
