"use client";
import { SpeechsItemType } from "@/lib/aboutUs/AboutUS";
import Image from "next/image";
import React from "react";

export const SingleSpeech = ({ speech }: { speech: SpeechsItemType }) => {

  const [isExpanded, setIsExpanded] = React.useState(false);
  const description = isExpanded
    ? speech.description
    : speech.description.length > 120
      ? speech.description.slice(0, 120) + "..."
      : speech.description;
  
const handleViewMore = () => {
    setIsExpanded(!isExpanded);
}

  return (
    <div className="my-2 grid space-y-2 bg-secondary justify-center w-full border border-text/20 rounded-2xl">
      <h2 className="bg-primary text-background p-2 rounded-t-2xl text-center font-bold">
        {speech.title}
      </h2>
     
        <Image
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." // base64 format
          src={speech.image || ""}
          alt={speech.title}
          className="mx-auto block"
        />
      
      <p className="text-text px-2">{description}</p>
      <button className="text-sm hover:cursor-pointer" onClick={handleViewMore}>{isExpanded ? 'show less':'view more'}</button>
    </div>
  );
};
