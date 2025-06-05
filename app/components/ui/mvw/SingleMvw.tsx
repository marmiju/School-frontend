import { MVWItemItemType } from "@/lib/aboutUs/AboutUS";
import React from "react";

const SingleMvw = ({ data }: { data: MVWItemItemType }) => {
  return (
    <div>
      <h2 className="p-2 bg-primary text-background mr-2">{data.title}</h2>
      <h2 className=" text-text">{data.description}</h2>
    </div>
  );
};

export default SingleMvw;
