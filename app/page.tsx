import { BreakingNews } from "./components/shared/breakingNews/BrekingNews";
import { AboutDesk } from "./components/ui/aboutDesc/AboutDesk";
import { Banner } from "./components/ui/hero/Hero";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <BreakingNews />
      <div className="grid grid-cols-12  max-w-[1280px] mx-auto gap-2 m-2">
        <div className=" col-span-12 md:col-span-8">
          <AboutDesk />
        </div>
        <div className=" col-span-12 md:col-span-4">
          <AboutDesk />
        </div>
      </div>
    </div>
  );
}
