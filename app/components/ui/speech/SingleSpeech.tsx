"use client";
import { SpeechsItemType } from "@/lib/aboutUs/AboutUS";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export const SingleSpeech = ({ speech }: { speech: SpeechsItemType }) => {
  const path = usePathname();
  return (
    <div className="my-2 grid space-y-2 bg-secondary justify-center w-full border border-text/20">
      <h2 className="bg-primary text-background p-2 rounded-sm">
        {speech.title}
      </h2>
      {path != "/" && (
        <Image
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." // base64 format
          src={speech.image || ""}
          alt={speech.title}
          className="mx-auto block"
        />
      )}
      <p className="text-text bg-secondary p-2">{speech.decription}</p>
    </div>
  );
};
