import React from "react";
import { AboutDesc } from "../aboutDesc/AboutDesc";
import { Speech } from "../speech/Speech";
import { AboutUs, AboutUsType } from "@/lib/aboutUs/AboutUS";
import { Button } from "../../button/Button";
import FetchNotice from "@/lib/notice/FetchNotice";
import Loading from "@/app/loading";
import LatestHeilights from "../../latestHeilight/LatestHeilights";
import FetchResult from "@/lib/result/FetchResult";
import Link from "next/link";

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
            : <LatestHeilights data={latestNotice!} title="সম্প্রতি প্রকাশ হওয়া নোটিস" />
          }
          {!notice ?
            <Loading />
            : <LatestHeilights data={latestresult!} title="সম্প্রতি প্রকাশ হওয়া রেজাল্ট" />
          }

        </section>
      </section>
      {/* second column */}
      <section className=" col-span-12 md:col-span-4">
        <Speech speechs={about.speechs} />
        <div className="grid gap-2 text-text text-xl font-semibold">
          <h3 className="text-background  bg-text text-xl font-semibold p-2">গুরুত্বপুর্ণ ওয়েবলিংক</h3>
          <Link target="_blank" href={'https://moedu.gov.bd/'}>⇲ Ministry of Education</Link>
          <Link target="_blank" href={'https://mopa.gov.bd/bn'}>⇲ Ministry of Public Administration</Link>
          <Link target="_blank" href={'https://pmo.gov.bd/'}>⇲ Prime Minister office</Link>
          <Link target="_blank" href={'https://www.teachers.gov.bd/'}>⇲ Teachers</Link>
        </div>
        <div className="border rounded-[24px] p-2 border-text mt-6">
          <iframe className="w-full h-96 rounded-[16px]" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1850418.8628409489!2d88.25451487377123!3d25.06462188276674!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1753870489753!5m2!1sen!2sbd" width="600" height="450"   loading="lazy" ></iframe>
        </div>
      </section>


    </div>
  );
};
