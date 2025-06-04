import { SpeechsItemType } from "@/lib/aboutUs/AboutUS";
import React from "react";
import { SingleSpeech } from "./SingleSpeech";
import { Button } from "../button/Button";

export const Speech = ({ speechs }: { speechs: SpeechsItemType[] }) => {
  console.log(speechs);
  return (
    <div>
      {/* {speechs.map((speech, i) => {
        return <SingleSpeech key={i} speech={speech} />;
      })} */}
      <SingleSpeech speech={speechs[0]} />
      <Button children="বিস্তারিত" link="/about" />
    </div>
  );
};
