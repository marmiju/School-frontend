import { MVWItemItemType } from "@/lib/aboutUs/AboutUS";
import React from "react";
import SingleMvw from "./SingleMvw";

export const Mvw = ({ mvw }: { mvw: MVWItemItemType[] }) => {
  return (
    <div className="space-y-4">
      {mvw.map((data, i) => {
        return <SingleMvw data={data} />;
      })}
    </div>
  );
};
