import React from "react";
import { AboutDesc } from "../aboutDesc/AboutDesc";
import { Speech } from "../speech/Speech";
import { AboutUs, AboutUsType } from "@/lib/aboutUs/AboutUS";
import { Button } from "../../button/Button";
import FetchNotice from "@/lib/notice/FetchNotice";
import Loading from "@/app/loading";
import LatestHeilights from "../../latestHeilight/LatestHeilights";
import FetchResult from "@/lib/result/FetchResult";

export const HomeAboute = async () => {
  const about: AboutUsType = AboutUs;
  const notice = await FetchNotice()
  const latestNotice = notice ? notice[notice.length - 1] : null;
  const result = await FetchResult()
  const latestresult = result ? result[result.length - 1] : null;
  console.log(latestresult)
 
  return (
    <div className="max-w-[1280px] mx-auto space-x-4 grid grid-cols-12">
      {/* first column */}
      <section className="col-span-12 md:col-span-8">
        <AboutDesc desc={about.description} />
        <Button link="/about">বিস্তারিত</Button>
        {/* notice */}
        <section id="notice" className="mt-10 grid gap-10 ">
          {!notice ?
            <Loading />
            : <LatestHeilights data={latestNotice!} title="সম্প্রতি প্রকাশ হওয়া নোটিস"/>
          }
          {!notice ?
            <Loading />
            : <LatestHeilights data={latestresult!} title="সম্প্রতি প্রকাশ হওয়া রেজাল্ট"/>
          }

        </section>
      </section>
      {/* second column */}
      <section className=" col-span-12 md:col-span-4">
        <Speech speechs={about.speechs} />
      </section>


    </div>
  );
};
