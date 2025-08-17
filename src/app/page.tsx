import HeroImage from "@/components/home/hero";
import Photo from "@/components/home/photo";
import QuickStats from "@/components/home/quickstats";
import Header from "@/components/uiwidget/header";

export default function Home() {
  return (
    <div className="relative flex flex-col space-y-12">

      <Header />
      <HeroImage />
      <Photo />
      <QuickStats />

    </div>
  );
}
