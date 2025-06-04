import { BreakingNews } from "./components/shared/breakingNews/BrekingNews";
import { Banner } from "./components/ui/hero/Hero";
import { HomeAboute } from "./components/ui/homeAbout/HomeAbout";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <BreakingNews />
      <HomeAboute />
    </div>
  );
}
